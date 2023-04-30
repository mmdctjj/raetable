---
nav:
  title: 组件
title: ETable 表格
path: /components
group: 进阶组件
---
### 基本用法
```jsx
import { useState, useCallback } from 'react';
import { ETable } from 'raetable';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'input',
    conditionType: 'input',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'input',
    conditionType: 'input'
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'switch',
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

const datas = [
  {name: 'mmdctjj', age: 18, eat: 1, admin: true},
  {name: 'xiaofeng', age: 28, eat:2, admin: false},
  {name: 'zhuming', age: 12, eat: 1, admin: false}
]

const useMockData = () => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = useCallback(() => {
    setLoading(true)
    setData([])
    setTimeout(() => {
      setData(datas)
      setLoading(false)
    }, 1500)
  }, [])

  return [data, loading, getData]
}
export default () => {

  const [dataSource, loading, fetch] = useMockData()

  return (
    <ETable
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      onConditionChange={fetch}
      rowKey="name"
    />
  )
}

```
### API
<API hideTitle></API>

