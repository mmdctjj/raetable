import React, { useEffect, useMemo, useState } from 'react';

import type { ETableColumnProps, ETableProps } from './interface';
import ECondition from '../ECondition';
import { Button, Space, Table } from 'antd';

export function RaeTable<T> ({
  columns,
  size = 'middle',
  onConditionChange: onCondChange,
  ...props
}: ETableProps<T>) {

  const [condition, onConditionChange] = useState({})

  const actionColumn: ETableColumnProps<T> = useMemo(() => (
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Space>
          <Button size={size} type="primary">编辑</Button>
          <Button danger size={size}>删除</Button>
          <Button size={size}>详情</Button>
        </Space>
      )
    }
  ), [])

  // 过滤掉需要在表格隐藏的栏目
  const tableColumns = useMemo(() => {
    const initColumns = columns.filter(column => !column.hiddenInTable)
    if (initColumns.find(column => column.title === '操作')) {
      return initColumns
    } else {
      return initColumns.concat(actionColumn)
    }
  }, [columns])

  // 过滤没有conditionType属性的栏目
  const conditionColumns = useMemo(() => columns.filter(column => column.conditionType), [columns])
  
  useEffect(() => onCondChange && onCondChange(condition), [condition])
  
  return (
    <>

      <ECondition columns={conditionColumns} condition={condition} size={size} onConditionChange={onConditionChange} />

      <Table columns={tableColumns as any} size={size} {...props as any} />
    
    </>
    
  )
};

export default RaeTable;