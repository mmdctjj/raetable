import React from 'react';

import type { RaeFormProps } from './interface';

export function RaeForm<T> ({
  content,
  value,
  onChange,
  type
}: RaeFormProps<T>) {
  
  return (
    <>{content}{value}{onChange}{type}</>
  )
};

export default RaeForm;