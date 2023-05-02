---
nav:
  title: 组件
title: EPage 业务
path: /components
group: 业务组件
---
### 基本用法
```jsx
/**
 * background: '#eee'
 * compact: true
 */

import { EPage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react'

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
    affairType: 'select',
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
    // conditionType: 'select',
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

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200
      })
    }, 1000)
  })
}

export default () => (
  <EPage
    affairName="靓仔"
    columns={columns}
    getLists={getData}
    pageTitle="靓仔管理"
    rowKey="name"
  />
)
```
### usePage用法
```jsx
/**
 * background: '#eee'
 * compact: true
 */
 
import { usePage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react'

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
    affairType: 'select',
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
    // conditionType: 'select',
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

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200
      })
    }, 1000)
  })
}

export default () => {
  const [opt, setOpt, Dom] = usePage({
    affairName: "靓仔",
    columns: columns,
    getLists: getData,
    pageTitle: "靓仔管理",
    rowKey: "name"
  })

  return <Dom />
}
```
### API
<API></API>

