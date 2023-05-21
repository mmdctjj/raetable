import { Form } from 'antd';
import { EAnimation, EFormItem } from 'raetable';
import { useEffect } from 'react';

const data = {
  autoComplete: '牛肉',
  input: 'mmdctjj',
  number: 18,
  // time: moment(new Date().getTime()),
  datePicker: undefined,
  rangePicker: [],
  rate: 3,
  slider: 50,
  switch: true,
  select: 1,
  radio: 2,
  checkbox: [1, 2],
  textArea: JSON.stringify(
    {
      name: 'mmdctjj',
      age: 12,
    },
    null,
    4,
  ),
  treeSelect: 'leaf1',
};

const columns = [
  {
    dataIndex: 'radio',
    key: 'radio',
    title: 'radio',
    affairType: 'Radio',
    options: [
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
      {
        value: 3,
        label: '青菜',
        key: 3,
      },
    ],
  },
  {
    dataIndex: 'select',
    key: 'select',
    title: 'select',
    affairType: 'Select',
    linked: 'radio',
    options: [
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
      {
        value: 3,
        label: '青菜',
        key: 3,
      },
    ],
  },
];

export default () => {
  const [form] = Form.useForm();

  useEffect(() => form.setFieldsValue(data));

  return (
    <>
      <Form form={form}>
        {columns.map((column, idx) => (
          <EAnimation key={column.key} index={idx}>
            <Form.Item label={column.title} name={column.key}>
              <EFormItem
                linkeds={['radio']}
                content={column}
                typeKey="affairType"
              />
            </Form.Item>
          </EAnimation>
        ))}
      </Form>
    </>
  );
};
