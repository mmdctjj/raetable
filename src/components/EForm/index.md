---
nav:
  title: 组件
title: EForm 表单
path: /components
group: 基础组件
---
### 基本用法
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
    affairType: 'input',
    rules: [
      {
        required: true,
        message: 'Please input your name!',
      },
    ]
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

export default () => <EForm affairData={data} columns={columns} />
```
### useForm用法
```jsx
import { useForm } from 'raetable';
import { useEffect } from 'react'

const affairData = {
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

  const [opt, setOpt, EForm] = useForm({ affairData, columns })

  return <EForm />
}
```
### API
<API hideTitle></API>

