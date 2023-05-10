import { Form, Input } from 'antd';
import { EAnimation, EFormItem, FORMTYPE, useExtendFormItem } from 'raetable';
import { useEffect } from 'react';

const data = {
  name: '萌萌哒草头将军',
  age: 18,
  admin: true,
  eat: [1, 2],
};

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'data',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'data2',
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Switch',
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    affairType: FORMTYPE.Checkbox,
    select: [
      {
        value: 1,
        label: '牛肉',
        key: 1,
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2,
      },
    ],
  },
];

export default () => {
  const [form] = Form.useForm();

  useEffect(() => form.setFieldsValue(data));

  useExtendFormItem({
    data: ({ type, value, onChange }) => {
      if (type === 'display') return <>{value}</>;

      return <Input value={value + '自定义的组件Input'} onChange={onChange} />;
    },
  });

  useExtendFormItem({
    data2: ({ type, value, onChange }) => {
      if (type === 'display') return <>{value}</>;

      return <Input value={value + '自定义的组件Input2'} onChange={onChange} />;
    },
  });

  return (
    <Form form={form}>
      {columns.map((column, idx) => (
        <EAnimation key={column.key} index={idx}>
          <Form.Item label={column.title} name={column.key}>
            <EFormItem content={column} type="edit" typeKey="affairType" />
          </Form.Item>
        </EAnimation>
      ))}
    </Form>
  );
};
