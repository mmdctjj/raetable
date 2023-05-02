---
nav:
  title: 组件
title: ETable 表格
path: /components
group: 进阶组件
---
### 基本用法
```jsx
/**
 * background: '#eee'
 * compact: true
 */

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
  const [deleteRes, deleteLoading, deleteFetch] = useMockData()
  const [addRes, addLoading, addFetch] = useMockData()

  const onClickDeleteButton = useCallback((keys) => console.log(keys))

  const onAffairSuccess = useCallback((value) => {
    addFetch()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({})
        fetch()
      }, 1000)
    })
  }, [])

  return (
    <ETable
      affairName="靓仔"
      backPath="/hhh"
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      deleteLoading={deleteLoading}
      onAffairSuccess={onAffairSuccess}
      onConditionChange={fetch}
      onClickDeleteButton={onClickDeleteButton}
      pageTitle="靓仔管理"
      rowSelection={{
        type: 'checkbox',
      }}
      rowKey="name"
    />
  )
}

```
### API
<API></API>
<!-- <API id="ETableColumn"></API> -->
<!-- <API id="ESelect"></API> -->

