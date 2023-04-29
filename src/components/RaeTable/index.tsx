import React from 'react';

import type { RaeTableProps } from './interface';

export function RaeTable<T> ({
  affairName,
}: RaeTableProps<T>) {
  
  return (
    <>{affairName}</>
  )
};

export default RaeTable;