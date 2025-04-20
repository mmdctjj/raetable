---
nav:
  title: 指南
  path: /guide/index
  group:
    title: 开始
title: 全局概述
order: 1
---

### `raETable`的由来

`raETable`是`react` `antd` Easy Table 的缩写。旨在让开发者在`react`中使用 `antd`的`Table`时更 easy。

### `raETable`特性

- 💎 大多数配置项继承自 antd，只有少量业务配置项，易学易用
- 🚗 组件支持 Mcp 服务，你可以在编辑器里增加 Mcp 服务来获得更智能的组件说明了
- 🌈 一个 option 可以生成一个 B 端页面，且包含增删改查基本功能
- 🚀 所有组件支持使用对应的 hook 生成
- 🎨 内置多种动画组件
- 🚥 支持自定义组件
- 💡 大量默认配置，开箱即用

为了方便书写，本库所有的组件都省略了`ra`

### 内置 `Mcp` 服务

现在大多数组件添加在 `Mcp` 服务 `tool` 了，方便快速添加到 `cursor` `vs code` 等支持 `Mcp` 服务的编辑器中！

### `raETable`适用场景

这个组件库诞生的环境是 B 端业务场景，每个页面都是表格`Table`、条件`Form`、业务（新增、编辑，我们统称为业务）`Form`组成，虽然每个页面的数据不同，但是逻辑大都相似：

进入页面自动刷新表格，完成业务之后刷新表格，条件改变之后刷新表格。

`raETable`封装了`Table`、`Form`上的重复逻辑，使开发者只需要关注业务数据的处理（`ETable`组件），甚至你也可以将业务数据的处理交给`raETable`接管（`EPage`组件）

```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 完整的列表
 * description: 页面大致可以分为标题栏，业务弹出层（编辑或者预览），业务列表、条件控制四个模块
 */
import { EPage } from 'raetable';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Select',
    conditionType: 'Select',
    options: [
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
    affairType: 'Select',
    conditionType: 'Select',
    options: [
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
    conditionType: 'Select',
    more: true,
    options: [
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
    conditionType: 'Input',
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'Input',
  },
];

const datas = [
  {
    name: 'mmdctjj',
    age: 18,
    eat: 1,
    admin: true,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'xiaofeng',
    age: 28,
    eat: 2,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'zhuming',
    age: 12,
    eat: 1,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
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
