---
nav:
  title: 组件
title: EForm 表单
path: /components
group: 基础组件
---

现在有如下数据，我们要将其使用`Form`展示在页面中。
```js
const data = {
  name: 'mmdctjj',
  age: 18,
  admin: true,
  eat: 1
}
```
我们只需要定义如下`columns`数组
```js
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
```
页面渲染如下
```jsx
import { EForm } from 'raetable';
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
      columns.map(column => <Form.Item
        key={column.key}
        label={column.title}
        name={column.key}
      >
        <EForm content={column} typeKey="affairType" />
      </Form.Item>)
    }
  </Form>
}
```
This is an EForm component.

<API id="EForm"></API>

