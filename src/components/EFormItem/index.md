---
nav:
  title: 组件
title: EFormItem 表单项
path: /components
group: 基础组件
---
### 基本用法
```jsx
import { EAnimation, EFormItem } from 'raetable';
import { Form } from 'antd';
import { useEffect } from 'react'

const data = {
  name: 'mmdctjj',
  age: 18,
  admin: true,
  eat: 1
}

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'input'
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'input'
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'switch'
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    affairType: 'select',
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

  return <Form form={form}>
    {
      columns.map((column, idx) => (
        <EAnimation key={column.key} index={idx}>
          <Form.Item label={column.title} name={column.key}>
            <EFormItem content={column} typeKey="affairType" />
          </Form.Item>
        </EAnimation>
      ))
    }
  </Form>
}
```
### API
<API EFormItem></API>
