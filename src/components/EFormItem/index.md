---
nav:
  title: 组件
title: EFormItem 表单项
path: /components
group: 基础组件
---
### 基本用法
```jsx
import { EAnimation, EFormItem, FORMTYPE, useExtendFormItem } from 'raetable';
import { Form } from 'antd';
import { useEffect } from 'react'

const data = {
  name: 'mmdctjj',
  age: 18,
  admin: true,
  eat: [1, 2]
}

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'data'
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'Input'
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Switch'
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
        key: 1
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2
      },
    ]
  },
]

export default () => {

  const [form] = Form.useForm()

  useEffect(() => form.setFieldsValue(data))

  useExtendFormItem({
    data: <input />
  })

  return <Form form={form}>
    {
      columns.map((column, idx) => (
        <EAnimation key={column.key} index={idx}>
          <Form.Item label={column.title} name={column.key}>
            <EFormItem content={column} type="edit" typeKey="affairType" />
          </Form.Item>
        </EAnimation>
      ))
    }
  </Form>
}
```
### API
<API EFormItem></API>

