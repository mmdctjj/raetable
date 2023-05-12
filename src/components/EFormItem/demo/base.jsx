import { Form, Switch } from 'antd';
import { EAnimation, EFormItem, FORMTYPE } from 'raetable';
import { useEffect, useState } from 'react';

const data = {
  input: 'mmdctjj',
  number: 18,
  // time: moment(new Date().getTime()),
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
};

const columns = [
  {
    dataIndex: 'input',
    key: 'input',
    title: 'input',
    affairType: 'Input',
  },
  {
    dataIndex: 'number',
    key: 'number',
    title: 'number',
    affairType: 'InputNumber',
  },
  {
    dataIndex: 'time',
    key: 'time',
    title: 'time',
    affairType: 'TimePicker',
    format: 'HH:mm:ss',
  },
  {
    dataIndex: 'rate',
    key: 'rate',
    title: 'rate',
    affairType: 'Rate',
  },
  {
    dataIndex: 'rangePicker',
    key: 'rangePicker',
    title: 'rangePicker',
    affairType: 'RangePicker',
    // showTime: true,
    placeholder: ['请输入开始时间', '请输入结束时间'],
    format: ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss'],
  },
  {
    dataIndex: 'slider',
    key: 'slider',
    title: 'slider',
    affairType: 'Slider',
  },
  {
    dataIndex: 'switch',
    key: 'switch',
    title: 'switch',
    affairType: 'Switch',
  },
  {
    dataIndex: 'textArea',
    key: 'textArea',
    title: 'textArea',
    affairType: 'TextArea',
  },
  {
    dataIndex: 'checkbox',
    key: 'checkbox',
    title: 'checkbox',
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
      {
        value: 3,
        label: '青菜',
        key: 3,
      },
    ],
  },
  {
    dataIndex: 'radio',
    key: 'radio',
    title: 'radio',
    affairType: 'Radio',
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

  const [type, setType] = useState('edit');

  return (
    <>
      <div style={{ margin: '10px 0' }}>
        编辑/展示：
        <Switch
          checked={type === 'display'}
          onClick={() =>
            setType((curr) => (curr !== 'edit' ? 'edit' : 'display'))
          }
        ></Switch>
      </div>

      <br />
      <Form form={form}>
        {columns.map((column, idx) => (
          <EAnimation key={column.key} index={idx}>
            <Form.Item label={column.title} name={column.key}>
              <EFormItem content={column} type={type} typeKey="affairType" />
            </Form.Item>
          </EAnimation>
        ))}
      </Form>
    </>
  );
};
