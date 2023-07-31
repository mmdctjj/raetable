import { Table, TableProps } from 'antd';
import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableTitle = (props: {
  [x: string]: any;
  onResize:
    | ((e: React.SyntheticEvent, data: ResizeCallbackData) => any)
    | undefined;
  width: number;
}) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

const ResizeTable = (
  props: JSX.IntrinsicAttributes &
    TableProps<any> & { children?: React.ReactNode } & {
      ref?: React.Ref<HTMLDivElement> | undefined;
    },
) => {
  const [columns, setColumns] = useState(props.columns ?? []);

  const handleResize =
    (index: number) =>
    (event: any, { size }: any) => {
      setColumns((prevColumns) => {
        const nextColumns = [...prevColumns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return nextColumns;
      });
    };

  const resizableColumns = columns?.map((col: any, index: number) => ({
    ...col,
    onHeaderCell: (column: { width: number }) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <Table
      {...props}
      columns={resizableColumns}
      components={{
        header: {
          cell: ResizableTitle,
        },
      }}
      scroll={{ x: 'max-content' }} // 添加滚动条以适应自适应宽度
    />
  );
};

export default ResizeTable;
