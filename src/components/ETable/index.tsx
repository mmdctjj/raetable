import { LoadingOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Modal, Space, Table } from 'antd';
import {
  EForm,
  OPERATION,
  formatSearch,
  useResize,
  useTrigger,
} from 'raetable';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

  const width = useResize();

  const [modal, handle] = Modal.useModal();

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

  const operationBtms = (recard: any) =>
    [
      props.editLoading !== undefined
        ? {
            loading: false,
            onClick: () => onClickEdit(recard),
            size,
            type: 'primary',
            title: '编辑',
          }
        : undefined,
      props.deleteLoading !== undefined
        ? {
            loading: window.localStorage
              .getItem('deleteKeys')
              ?.split(',')
              ?.includes(recard[props.rowKey as any]),
            onClick: () => {
              modal.confirm({
                okText: '确定',
                cancelText: '取消',
                onOk: () => onClickDelte([recard[props.rowKey as any]]),
                title: `您确认删除这条${affairName}数据吗？`,
              });
              // onClickDelte([recard[props.rowKey as any]])
            },
            size,
            danger: true,
            title: '删除',
            // cancelText="取消"
            //   description={`您确认删除这条${affairName}数据吗？`}
            //   okText="确定"
            //   okButtonProps={{ loading: props.deleteLoading }}
            //   onConfirm={() => onClickDelte([recard[props.rowKey as any]])}
            //   title="删除"
          }
        : undefined,
      {
        onClick: () => onClickDetail(recard),
        size,
        title: '详情',
      },
      ...(props.extend ?? []),
    ].filter((n) => n);

  const actionColumn: ETableColumnProps<T> = useMemo(
    () => ({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: width < 570 ? 50 : 250,
      fixed: 'right',
      render: (_, recard: any) => {
        const btns = operationBtms(recard);

        const items = btns.map(
          (menu) =>
            ({
              label: menu?.title,
              key: menu?.title,
              onClick: () => menu?.onClick?.(recard),
            } as any),
        );

        return width < 570 ? (
          <Dropdown placement="bottomRight" menu={{ items }}>
            <Button type="link">
              {window.localStorage
                .getItem('deleteKeys')
                ?.split(',')
                ?.includes(recard[props.rowKey as any]) ? (
                <LoadingOutlined />
              ) : (
                `···`
              )}
            </Button>
          </Dropdown>
        ) : (
          <Space>
            {btns.map(({ title, ...btn }: any) => (
              <Button key={title} {...(btn as any)}>
                {title}
              </Button>
            ))}
          </Space>
        );
      },
    }),
    [width],
  );

  // 过滤掉需要在表格隐藏的栏目
  const tableColumns = useMemo(() => {
    const initColumns = columns
      .filter((column) => !column.hiddenInTable)
      // 处理Select渲染
      .map((column) =>
        column.options
          ? {
              ...column,
              render: (value: any) =>
                column.options?.find((opt) => opt.value === value)?.label,
            }
          : column,
      );
    return initColumns.find((column) => column.title === '操作')
      ? initColumns
      : initColumns.concat(actionColumn);
  }, [actionColumn, columns]);

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
        <Table
          columns={tableColumns}
          size={size}
          scroll={{ x: 500 }}
          {...(props as any)}
        />
      </TableContainer>

      {handle}

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
