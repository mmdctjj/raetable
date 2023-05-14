import { Form, Switch } from 'antd';
import { EAnimation, EFormItem, FORMTYPE } from 'raetable';
import { useEffect, useState } from 'react';

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
    dataIndex: 'autoComplete',
    key: 'autoComplete',
    title: 'autoComplete',
    affairType: 'AutoComplete',
    filterOption: (inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    options: [
      {
        value: '牛肉',
        key: 1,
      },
      {
        value: '鸡蛋',
        key: 2,
      },
    ],
  },
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
    dataIndex: 'datePicker',
    key: 'datePicker',
    title: 'datePicker',
    affairType: 'DatePicker',
    format: 'YYYY-MM-DD HH:mm:ss',
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
    dataIndex: 'transfer',
    key: 'transfer',
    title: 'transfer',
    affairType: 'Transfer',
    dataSource: Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    })),
    targetKeys: ['1', '3', '5'],
    render: (item) => item.title,
  },
  {
    dataIndex: 'treeSelect',
    key: 'treeSelect',
    title: 'treeSelect',
    affairType: 'TreeSelect',
    treeData: [
      {
        value: 'parent 1',
        title: 'parent 1',
        children: [
          {
            value: 'parent 1-0',
            title: 'parent 1-0',
            children: [
              {
                value: 'leaf1',
                title: 'leaf1',
              },
              {
                value: 'leaf2',
                title: 'leaf2',
              },
            ],
          },
          {
            value: 'parent 1-1',
            title: 'parent 1-1',
            children: [
              {
                value: 'leaf3',
                title: (
                  <b
                    style={{
                      color: '#08c',
                    }}
                  >
                    leaf3
                  </b>
                ),
              },
            ],
          },
        ],
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
