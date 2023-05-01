import React, { useCallback, useEffect, useMemo, useState } from 'react';

import type { ETableColumnProps, ETableProps } from './interface';
import ECondition from '../ECondition';
import { Button, Modal, Popconfirm, Space, Table } from 'antd';
import styled from 'styled-components';
import { EForm, OPERATION, formatSearch, useTrigger } from 'raetable';
import { ETitle } from '../ETitle';

const ConditionContainer = styled.div`
  background-color: @primary-color
`

const TableContainer = styled.div`
  background-color: @primary-color
`

const TitleContainer = styled.div`
  background-color: @primary-color
`
const titleStyle = {
  background: '#fff',
  padding: 15,
}

const style = {
  background: '#fff',
  padding: 15,
  margin: 15
}

export function RaeTable<T> ({
  affairName = '',
  backPath = '',
  columns,
  extendAffair,
  size = 'middle',
  pageTitle = '',
  onAffairSuccess = () => new Promise(() => {}),
  onConditionChange: onCondChange,
  conditionContainerStyle = {},
  tableContainerStyle = {},
  titleContainerStyle = {},
  ...props
}: ETableProps<T>) {

  const [open, setOpen] = useTrigger()

  const TITLE = {
    [OPERATION.ADD]: '新增',
    [OPERATION.EDIT]: '编辑',
    [OPERATION.DISPLAY]: '查看'
  }

  const [operationData, setOperationData] = useState<T>({} as T)
  const [operationType, setOperationType] = useState<OPERATION.ADD | OPERATION.EDIT | OPERATION.DISPLAY>(OPERATION.ADD)

  // 点击编辑按钮
  const onClickEdit = useCallback((recard: T) => {
    setOperationType(OPERATION.EDIT)
    setOperationData(recard)
    setOpen(true)
  }, [])

  const onClickDetail = useCallback((recard: T) => {
    setOperationType(OPERATION.DISPLAY)
    setOperationData(recard)
    setOpen(true)
  }, [])

  const onClickDelte = useCallback((keys: any[]) => {
    props.onClickDeleteButton?.(keys)
  }, [])

  const onClickAdd = useCallback(() => {
    setOperationType(OPERATION.ADD)
    setOperationData({} as T)
    setOpen(true)
  }, [])

  const [condition, onConditionChange] = useState(formatSearch(window.location.href))

  const actionColumn: ETableColumnProps<T> = useMemo(() => (
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: 200,
      fixed: 'right',
      render: (_, recard: any) => (
        <Space>
          <Button size={size} onClick={() => onClickEdit(recard)} type="primary">编辑</Button>
          <Popconfirm
            title="删除"
            description={`您确认删除这条${affairName}数据吗？`}
            okText="确定"
            cancelText="取消"
            onConfirm={() => onClickDelte([recard[props.rowKey as any]])}
          >
            <Button danger size={size}>删除</Button>
          </Popconfirm>
          <Button size={size} onClick={() => onClickDetail(recard)}>详情</Button>
        </Space>
      )
    }
  ), [])

  // 过滤掉需要在表格隐藏的栏目
  const tableColumns = useMemo(() => {
    const initColumns = columns
      .filter(column => !column.hiddenInTable)
      // 处理select渲染
      .map(column => column.select
        ? ({
          ...column,
          render: (value: any) => column.select?.find(opt => opt.value === value)?.label
        })
        : column
      )
    return initColumns.find(column => column.title === '操作')
      ? initColumns
      : initColumns.concat(actionColumn)
  }, [columns])

  // 过滤没有conditionType属性的栏目
  const conditionColumns = useMemo(() => columns.filter(column => column.conditionType), [columns])

  // 过滤没有affairType属性的栏目
  const affairColumns = useMemo(() => columns.filter(column => column.affairType), [columns])

  const onCloseAffair = useCallback(() => setOpen(false), [])
  const onFinishAffair = useCallback(() => setOpen(false), [])
  const onSuccessAffair = useCallback((value: T) =>  operationType === OPERATION.DISPLAY
    ? new Promise((resolve) => {setOpen(false); resolve({})})
    : onAffairSuccess(value, operationType)
      .then(() => setOpen(false))
      .catch((err) => {throw new Error(err)})
  , [operationType])
  
  useEffect(() => onCondChange && onCondChange(condition), [condition])
  
  return (
    <>

      <TitleContainer
        className={props.titleContainerClass}
        style={{...titleStyle, ...titleContainerStyle}}
      >
        <ETitle
          affairName={affairName}
          backPath={backPath}
          extendAffair={extendAffair}
          onClickAdd={onClickAdd}
          pageTitle={pageTitle}
        />
      </TitleContainer>

      <ConditionContainer
        className={props.conditionContainerClass}
        style={{...style, ...conditionContainerStyle}}
      >
        <ECondition
          columns={conditionColumns}
          condition={condition}
          size={size}
          onConditionChange={onConditionChange}
        />
      </ConditionContainer>

      <TableContainer
        className={props.tableContainerClass}
        style={{...style, ...tableContainerStyle}}
      >
        <Table columns={tableColumns as any} size={size} {...props as any} />
      </TableContainer>

      <Modal
        open={open}
        onCancel={onCloseAffair}
        onOk={onFinishAffair}
        title={TITLE[operationType] + affairName}
        footer={false}
      >
        <EForm
          affairWidth={700}
          columns={affairColumns}
          affairData={operationData}
          type={operationType}
          onAffairSuccess={onSuccessAffair}
        />
      </Modal>
    
    </>
    
  )
};

export default RaeTable;