import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Button, Drawer, Modal, Popconfirm, Space, Table } from 'antd';
import { EForm, OPERATION, formatSearch, useTrigger } from 'raetable';
import styled from 'styled-components';
import ECondition from '../ECondition';
import { ETitle } from '../ETitle';
import type { ETableColumnProps, ETableProps } from './interface';

const TableContainer = styled.div`
  background-color: @primary-color;
`;

const style = {
  background: '#fff',
  padding: 15,
  margin: 15,
};

export function RaeTable<T>({
  affairContainerType = 'modal',
  affairName = '',
  backPath = '',
  columns,
  extendAffair,
  size = 'middle',
  pageTitle = '',
  onAffairSuccess = () => new Promise(() => {}),
  onConditionChange: onCondChange,
  tableContainerStyle = {},
  titleContainerStyle = {},
  ...props
}: ETableProps<T>) {
  const [open, setOpen] = useTrigger();

  const TITLE = {
    [OPERATION.ADD]: '新增',
    [OPERATION.EDIT]: '编辑',
    [OPERATION.DISPLAY]: '查看',
  };

  const [operationData, setOperationData] = useState<T>({} as T);
  const [operationType, setOperationType] = useState<
    OPERATION.ADD | OPERATION.EDIT | OPERATION.DISPLAY
  >(OPERATION.ADD);

  // 点击编辑按钮
  const onClickEdit = useCallback((recard: T) => {
    setOperationType(OPERATION.EDIT);
    setOperationData(recard);
    setOpen();
  }, []);

  const onClickDetail = useCallback((recard: T) => {
    setOperationType(OPERATION.DISPLAY);
    setOperationData(recard);
    setOpen();
  }, []);

  const onClickDelte = useCallback((keys: number[] | string[]) => {
    window.localStorage.setItem('deleteKeys', keys.join(','));
    props
      .onClickDeleteButton?.(keys)
      .then(() => window.localStorage.removeItem('deleteKeys'))
      .catch(() => window.localStorage.removeItem('deleteKeys'));
  }, []);

  const onClickAdd = useCallback(() => {
    setOperationType(OPERATION.ADD);
    setOperationData({} as T);
    setOpen();
  }, []);

  const [condition, onConditionChange] = useState(
    formatSearch(window.location.href),
  );

  const actionColumn: ETableColumnProps<T> = {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: 200,
    fixed: 'right',
    render: (_, recard: any) => (
      <Space>
        {props.editLoading !== undefined ? (
          <Button
            size={size}
            onClick={() => onClickEdit(recard)}
            type="primary"
          >
            编辑
          </Button>
        ) : (
          ''
        )}
        {props.deleteLoading !== undefined ? (
          <Popconfirm
            cancelText="取消"
            description={`您确认删除这条${affairName}数据吗？`}
            okText="确定"
            okButtonProps={{ loading: props.deleteLoading }}
            onConfirm={() => onClickDelte([recard[props.rowKey as any]])}
            title="删除"
          >
            <Button
              danger
              loading={window.localStorage
                .getItem('deleteKeys')
                ?.split(',')
                ?.includes(recard[props.rowKey as any])}
              size={size}
            >
              删除
            </Button>
          </Popconfirm>
        ) : (
          ''
        )}
        <Button size={size} onClick={() => onClickDetail(recard)}>
          详情
        </Button>
        {props.extend?.map((extend) => (
          <Button
            key={extend.title}
            icon={extend.icon}
            loading={extend.loading}
            onClick={() => extend.onClick?.(recard)}
            type={extend.type}
          >
            {extend.title}
          </Button>
        ))}
      </Space>
    ),
  };

  // 过滤掉需要在表格隐藏的栏目
  const tableColumns = useMemo(() => {
    const initColumns = columns
      .filter((column) => !column.hiddenInTable)
      // 处理select渲染
      .map((column) =>
        column.select
          ? {
              ...column,
              render: (value: any) =>
                column.select?.find((opt) => opt.value === value)?.label,
            }
          : column,
      );
    return initColumns.find((column) => column.title === '操作')
      ? initColumns
      : initColumns.concat(actionColumn);
  }, [columns]);

  // 过滤没有conditionType属性的栏目
  const conditionColumns = useMemo(
    () => columns.filter((column) => column.conditionType),
    [columns],
  );

  // 过滤没有affairType属性的栏目
  const affairColumns = useMemo(
    () => columns.filter((column) => column.affairType),
    [columns],
  );

  const onCloseAffair = useCallback(() => setOpen(), []);

  const onFinishAffair = useCallback(() => setOpen(), []);

  const onSuccessAffair = (value: T) => {
    return operationType === OPERATION.DISPLAY
      ? new Promise((resolve) => {
          setOpen();
          resolve({});
        })
      : onAffairSuccess(value, operationType)
          .then(() => setOpen())
          .catch((err) => {
            throw new Error(err);
          });
  };
  useEffect(() => onCondChange && onCondChange(condition), [condition]);

  return (
    <>
      <ETitle
        animation={props.animation}
        affairName={affairName}
        backPath={backPath}
        decription={props.decription}
        extendAffair={extendAffair}
        onClickAdd={props.addLoading !== undefined ? onClickAdd : undefined}
        pageTitle={pageTitle}
        titleContainerClass={props.titleContainerClass}
        titleContainerStyle={titleContainerStyle}
      />

      <ECondition
        animation={props.animation}
        columns={conditionColumns}
        conditionContainerClass={props.conditionContainerClass}
        conditionContainerStyle={props.conditionContainerStyle}
        condition={condition}
        size={size}
        showConditionOkBtn={props.showConditionOkBtn}
        onConditionChange={onConditionChange}
      />

      <TableContainer
        className={props.tableContainerClass}
        style={{ ...style, ...tableContainerStyle }}
      >
        <Table columns={tableColumns} size={size} {...(props as any)} />
      </TableContainer>

      {affairContainerType === 'modal' ? (
        <Modal
          open={open}
          width={props.affairWidth}
          onCancel={onCloseAffair}
          onOk={onFinishAffair}
          title={TITLE[operationType] + affairName}
          footer={false}
        >
          <EForm
            animation={props.animation}
            affairWidth={700}
            columns={affairColumns}
            affairData={operationData}
            type={operationType}
            onAffairSuccess={onSuccessAffair}
          />
        </Modal>
      ) : (
        <Drawer
          open={open}
          width={props.affairWidth}
          onClose={onCloseAffair}
          title={TITLE[operationType] + affairName}
          footer={false}
        >
          <EForm
            animation={props.animation}
            affairWidth={700}
            columns={affairColumns}
            affairData={operationData}
            type={operationType}
            onAffairSuccess={onSuccessAffair}
          />
        </Drawer>
      )}
    </>
  );
}

export default RaeTable;
