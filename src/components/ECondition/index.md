---
nav:
  title: 组件
title: ECondition 条件
path: /components
group: 基础组件
---
### 基本用法
```jsx
import { ECondition } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    conditionType: 'input'
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    conditionType: 'input'
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    conditionType: 'select',
    select: [
      {
        key: 1,
        value: true,
        label: '是'
      },
      {
        key: 2,
        value: false,
        label: '否'
      },
    ]
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    conditionType: 'select',
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

  const [condition, onConditionChange] = useState({
    name: 'mmdctjj',
    age: 18,
    admin: true,
    eat: 1
  })

  useEffect(() => console.log(condition, 'condition'), [condition])

  return <ECondition
    condition={condition}
    columns={columns}
    onConditionChange={onConditionChange}
  />
}
```
### API
<API id="EFormItem"></API>

