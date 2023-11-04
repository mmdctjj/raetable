import { LoadingOutlined } from '@ant-design/icons';
import { useToggle } from 'ahooks';
import {
  Alert,
  Button,
  Drawer,
  Dropdown,
  Modal,
  Popconfirm,
  Space,
  Table,
} from 'antd';
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
import ResizeTable from '../ResizeTable';
import type { ETableColumnProps, ETableProps } from './interface';

const TableContainer = styled.div`
  background-color: @primary-color;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: right;
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
  batchDeleteLoading,
  columns,
  extendAffair,
  resize = false,
  size = 'middle',
  pageTitle = '',
  onAffairSuccess = () => new Promise(() => {}),
  onBatchDelete,
  onModalClose = () => {},
  showBatch,
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

  const [rowSelects, setRowSelects] = useState([]);

  const [openBatch, { toggle }] = useToggle();

  // 点击编辑按钮
  const onClickEdit = useCallback((recard: T) => {
    toggle();
    setOperationType(OPERATION.EDIT);
    setOperationData(recard);
    setOpen();
  }, []);

  const onClickDetail = useCallback((recard: T) => {
    toggle();
    setOperationType(OPERATION.DISPLAY);
    setOperationData(recard);
    setOpen();
  }, []);

  const onClickDelte = useCallback((keys: number[] | string[]) => {
    toggle();
    window.localStorage.setItem('deleteKeys', keys.join(','));
    props
      .onClickDeleteButton?.(keys)
      .then(() => window.localStorage.removeItem('deleteKeys'))
      .catch(() => window.localStorage.removeItem('deleteKeys'));
  }, []);

  const onClickAdd = useCallback(() => {
    toggle();
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
            loading: () => false,
            onClick: () => onClickEdit(recard),
            size,
            hidden: () => false,
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
        loading: () => false,
        hidden: () => false,
        title: '详情',
      },
      ...(props.extend ?? []),
    ].filter((n) => n);

  const actionColumn: ETableColumnProps<T> = useMemo(
    () => ({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: width < 768 ? 50 : 250,
      fixed: 'right',
      render: (_, recard: any, index: number) => {
        const btns = operationBtms(recard).filter(
          (n) => !n?.hidden?.(recard, index),
        );

        const items = btns.map(
          (menu) =>
            ({
              label: menu?.title,
              key: menu?.title,
              onClick: () => menu?.onClick?.(recard, index),
            } as any),
        );

        return width < 768 ? (
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
              <Button
                key={btn.key}
                {...(btn as any)}
                loading={
                  typeof btn.loading === 'boolean'
                    ? btn.loading
                    : btn.loading?.(recard, index)
                }
                hidden={btn.hidden?.(recard, index)}
                disabled={btn.disabled?.(recard, index)}
              >
                {typeof title === 'function' ? title(recard, index) : title}
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

  const onCloseAffair = useCallback(() => {
    onModalClose?.();
    setOpen();
  }, []);

  const onFinishAffair = useCallback(() => {
    onModalClose?.();
    setOpen();
  }, []);

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

      {conditionColumns.length ? (
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
      ) : (
        ''
      )}

      <TableContainer
        className={props.tableContainerClass}
        style={{ ...style, ...tableContainerStyle }}
      >
        {rowSelects.length ? (
          <Alert
            style={{ marginBottom: 14 }}
            type="error"
            message={
              <FlexContainer>
                <Space>
                  <>当前已选择 {rowSelects.length} 条数据</>
                  <Popconfirm
                    title={`确认删除所选${affairName}吗？`}
                    onCancel={toggle}
                    onPopupClick={toggle}
                    okButtonProps={{
                      loading: batchDeleteLoading,
                      onClick: () =>
                        onBatchDelete?.(rowSelects).then(() => {
                          toggle();
                          setRowSelects([]);
                        }),
                    }}
                    open={openBatch}
                  >
                    <Button danger onClick={toggle}>
                      删除
                    </Button>
                  </Popconfirm>
                </Space>
              </FlexContainer>
            }
          />
        ) : (
          ''
        )}
        {resize ? (
          <ResizeTable
            columns={tableColumns}
            size={size}
            // scroll={{ x: 500 }}
            {...(props as any)}
            rowSelection={
              showBatch
                ? {
                    type: props.rowSelection?.type ?? 'checkbox',
                    selectedRowKeys: rowSelects,
                    onChange: setRowSelects,
                  }
                : undefined
            }
          />
        ) : (
          <Table
            columns={tableColumns}
            size={size}
            scroll={{ x: 500 }}
            {...(props as any)}
            rowSelection={
              showBatch
                ? {
                    type: props.rowSelection?.type ?? 'checkbox',
                    selectedRowKeys: rowSelects,
                    onChange: setRowSelects,
                  }
                : undefined
            }
          />
        )}
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
