---
nav:
  title: 组件
title: EPage 业务
path: /components
group: 业务组件
---

### 说明

`Epage`组件是在`ETable`组件的基础上，对业务的封装组件，你只需要提供`fetch`或者`axios`增删改查请求函数函数即可

```js
// 如下
export const getLists = () => {
  return axios({
    url: '/api/v1/fetch/list',
  });
};
```

### 基本用法

```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 完整的列表
 * description: 当提供`addAffair`、`editAffair`、`getLists`、`editAffair`、属性时，就会呈现一个完整的列表，其中`getLists`和`columns`一样是必须的
 */

import { EPage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react';

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
    conditionType: 'input',
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
        label: '是',
      },
      {
        key: 2,
        value: false,
        label: '否',
      },
    ],
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
        key: 1,
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2,
      },
    ],
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
        key: 1,
      },
      {
        value: 2,
        label: '女',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'test',
    key: 'test',
    title: 'test',
    more: true,
    conditionType: 'input',
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'input',
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'input',
  },
];

const datas = [
  { name: 'mmdctjj', age: 18, eat: 1, admin: true },
  { name: 'xiaofeng', age: 28, eat: 2, admin: false },
  { name: 'zhuming', age: 12, eat: 1, admin: false },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const addData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const delData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const editData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

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
);
```

:::warning
`addAffair`、`delAffair`、`editAffair`属性分别对应页面中的`新增按钮`、`删除按钮`、`编辑按钮`
:::

### 仅显示列表

```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 仅显示列表
 * description: 只提供`getLists`属性时，只会显示详请按钮。
 */

import { EPage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react';

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
    conditionType: 'input',
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
        label: '是',
      },
      {
        key: 2,
        value: false,
        label: '否',
      },
    ],
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
        key: 1,
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2,
      },
    ],
  },
];

const datas = [
  { name: 'mmdctjj', age: 18, eat: 1, admin: true },
  { name: 'xiaofeng', age: 28, eat: 2, admin: false },
  { name: 'zhuming', age: 12, eat: 1, admin: false },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

export default () => (
  <EPage
    affairName="靓仔"
    columns={columns}
    getLists={getData}
    pageTitle="靓仔管理"
    rowKey="name"
  />
);
```

### usePage 用法

```jsx
/**
 * background: '#eee'
 * compact: true
 */
import { usePage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react';

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
    conditionType: 'input',
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
        label: '是',
      },
      {
        key: 2,
        value: false,
        label: '否',
      },
    ],
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
        key: 1,
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2,
      },
    ],
  },
];

const datas = [
  { name: 'mmdctjj', age: 18, eat: 1, admin: true },
  { name: 'xiaofeng', age: 28, eat: 2, admin: false },
  { name: 'zhuming', age: 12, eat: 1, admin: false },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

export default () => {
  const [opt, setOpt, Dom] = usePage({
    affairName: '靓仔',
    columns: columns,
    getLists: getData,
    pageTitle: '靓仔管理',
    rowKey: 'name',
  });

  return <Dom />;
};
```

### API

`EPageProps`继承了`ETableProps`，它独有的属性如下
|属性|描述|类型|
|---|---|---|
|addAffair|新增业务接口|(data?: Params) => Promise<Responsed<any>>|
|delAffair|删除业务接口|(data?: Params) => Promise<Responsed<any>>|
|editAffair|编辑业务接口|(data?: Params) => Promise<Responsed<any>>|
|formatList|格式化列表函数|(data: any[]) => []|
|getLists|获取列表接口|(data?: Params) => Promise<Responsed<any[]>>|
