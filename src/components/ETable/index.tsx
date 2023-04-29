import React, { useEffect, useMemo, useState } from 'react';

import type { ETableProps } from './interface';
import Table from 'antd/es/table';
import ECondition from '../ECondition';

export function RaeTable<T> ({
  columns,
  dataSource,
  loading,
  rowKey,
  onConditionChange: onCondChange
}: ETableProps<T>) {

  const [condition, onConditionChange] = useState({})

  const conditionColumns = useMemo(() => columns.filter(column => column.conditionType), [columns])
  
  useEffect(() => onCondChange && onCondChange(condition), [condition])
  
  return (
    <>

      <ECondition columns={conditionColumns} condition={condition} onConditionChange={onConditionChange} />

      <Table columns={columns as any} dataSource={dataSource as any} loading={loading} rowKey={rowKey} />
    
    </>
    
  )
};

export default RaeTable;