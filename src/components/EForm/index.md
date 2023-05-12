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
    affairType: 'Input',
    rules: [
      {
        required: true,
        message: 'Please Input your name!',
      },
    ]
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
    affairType: 'Select',
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
    affairType: 'Input'
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
    affairType: 'Select',
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
|属性|描述|类型|默认值|
|---|---|---|---|
|animation|是否开启动画|`boolean`|`true`|
|affairData|业务数据|`T`|`{}`|
|affairWidth|业务弹出层的宽度|`number`|`700`|
|col|分栏布局|`number`|`--`|
|columns|栏目数据|`ETableColumnProps<T>[]`|`必选`|
|extendFormItem|扩展表单 Form.Item|`ReactNode`|`--`|
|hiddenLabels|需要隐藏label的key|`string[]`|`[]]`|
|isShowSumbit|是否显示提交按钮|`boolean`|`true`|
|type|操作类型|`add | edit | display`|'add'|
|onAffairSuccess|业务执行成功回调|`(values: T) => Promise<any>`|`--`|

