---
nav:
  title: 组件
title: ETable 表格
path: /components
group: 进阶组件
---
### 基本用法
`ETable`组件是由上述基础组件组合而成的，大多数情况下，你无需关注基础组件
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
  {
    dataIndex: 'gender',
    key: 'gender',
    title: 'gender',
    conditionType: 'select',
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
      affairWidth={900}
      affairContainerType="drawer"
      addLoading={addLoading}
      backPath="/raetable/guide"
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
|属性|描述|类型|默认值|
| ---- | ---- | ---- | ---- |
|affairContainerType|业务弹出框类型|'drawer'、 'modal'|modal|

<API></API>
<API id="ETableColumn"></API>
<API id="ESelect"></API>

