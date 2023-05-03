---
nav:
  title: 指南
  path: /guide/index
  group:
    title: 开始
title: 全局概述
---
### `raETable`的由来
`raETable`是`react` `antd` Easy Table的缩写。旨在让开发者在`react`中使用 `antd`的`Table`时更easy。

### `raETable`特性
- 💎 大多数配置项继承自antd，只有少量业务配置项，易学易用
- 🌈 一个option可以生成一个B端页面，且包含增删改查基本功能
- 🚀 所有组件支持使用对应的hook生成
- 🎨 内置多种动画组件
- 🚥 支持自定义组件
- 💡 大量默认配置，开箱即用

为了方便书写，本库所有的组件都省略了`ra`

### `raETable`适用场景
这个组件库诞生的环境是B端业务场景，每个页面都是表格`Table`、`Form`组成，虽然每个页面的数据不同，但是逻辑大都相似：
```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 完整的列表
 * description: 页面大致可以分为标题栏，业务弹出层（编辑或者预览），业务列表、条件控制四个模块
 */
import { EPage } from 'raetable';
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
  }
]

const datas = [
  {name: 'mmdctjj', age: 18, eat: 1, admin: true, gender: 1, test: 'test', test1: 'test1', test2: 'test2', test: 'test3'},
  {name: 'xiaofeng', age: 28, eat:2, admin: false, gender: 1, test: 'test', test1: 'test1', test2: 'test2', test: 'test3'},
  {name: 'zhuming', age: 12, eat: 1, admin: false, gender: 1, test: 'test', test1: 'test1', test2: 'test2', test: 'test3'}
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

const addData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200
      })
    }, 1000)
  })
}

const delData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200
      })
    }, 1000)
  })
}

const editData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200
      })
    }, 1000)
  })
}

export default () => (
  <EPage
    affairName="靓仔"
    addAffair={addData}
    columns={columns}
    delAffair={delData}
    editAffair={editData}
    getLists={getData}
    pageTitle="靓仔管理"
    rowKey="name"
  />
)
```
