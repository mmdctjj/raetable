import React from 'react';

import type { RaeTableProps } from './interface';
import Table from 'antd/es/table';

export function RaeTable<T> ({

}: RaeTableProps<T>) {
  
  return (
    <>
      <Table />

      
    </>
  )
};

export default RaeTable;