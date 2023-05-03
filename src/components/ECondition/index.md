---
nav:
  title: 组件
title: ECondition 条件
path: /components
group: 基础组件
---
:::warning
`ECondition`的默认样式如下
```js
const style = {
  background: '#fff',
  padding: 15,
  margin: 15
}
```
:::
### 基本用法
```jsx
/**
 * compact: true
 */
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
### 显示确认按钮
```jsx
/**
 * compact: true
 * title: 显示确认按钮
 * description: 使用`showConditionOkBtn`属性可以显示确认按钮。此时表单的变化只有在点击确定按钮时才会提交表单
 */
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
    showConditionOkBtn={true}
    onConditionChange={onConditionChange}
  />
}
```
### 显示更多搜素项
```jsx
/**
 * compact: true
 */
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
  {
    dataIndex: 'gender',
    key: 'gender',
    title: 'gender',
    conditionType: 'select',
    more: true,
    select: [
      {
        value: 1,
        label: '男',
        key: 1
      },
      {
        value: 2,
        label: '女',
        key: 2
      },
    ]
  },
  {
    dataIndex: 'test',
    key: 'test',
    title: 'test',
    more: true,
    conditionType: 'input'
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'input'
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'input'
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
### useCondition用法
```jsx
/**
 * compact: true
 */
import { useCondition } from 'raetable';
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

  const [opt, setOpt, ECondition] = useCondition({
    condition,
    columns,
    onConditionChange
  })

  useEffect(() => console.log(condition, 'condition'), [condition])

  return <ECondition />
}
```
### API
<API hideTitle></API>

