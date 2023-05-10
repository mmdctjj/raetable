---
nav:
  title: 指南
title: columns配置说明
order: 4
---

### `columns`配置说明

本组件库的配置核心是`columns`，它继承了`antd`的`Table`组件的`ColumnType`类型，这是为了表格中的展示；同时继承了`antd`的`Form`组件的`FormProps`、`FormItemProps`，这是为了在表单中展示，还有最重要的一点是，它还支持表单事件，例如`onChange`事件。
:::warning
为了减少书写，表单中的`name`和`label`共用了`columns`中的`title`和`dataIndex`，所以不用再次声明了
:::

### 基础配置

一个基础的配置如下，它仅仅会在表格中展示

```js
const columns = [
  { dataIndex: 'name', title: '姓名', key: 'name' },
  { dataIndex: 'age', title: '年龄', key: 'age' },
  { dataIndex: 'food', title: '食物', key: 'food' },
  { dataIndex: 'test', title: '测试字段', key: 'test' },
];
```

### 在表格中隐藏栏目

如果你想在表格中隐藏某个栏目，只需要标明`hideInTable`为`true`。

```js {3}
const columns = [
  { dataIndex: 'name', title: '姓名', key: 'name' },
  { dataIndex: 'age', title: '年龄', key: 'age', hideInTable: true },
  { dataIndex: 'food', title: '食物', key: 'food' },
  { dataIndex: 'test', title: '测试字段', key: 'test' },
];
```

### 声明条件表单

如果某个字段是需要在条件栏里显示，你只需要加上`conditionType`字段，可选值为`input`，`select`等表单类型，具体可以参照`FORMTYPE`[枚举类型](https://github.com/mmdctjj/raetable/blob/e52156087e6d381ca5941215cf4b2bb4e7bc3788/src/enum/index.tsx#L7)。

```js {2-3}
const columns = [
  { dataIndex: 'name', title: '姓名', key: 'name', conditionType: 'input' },
  { dataIndex: 'age', title: '年龄', key: 'age', conditionType: 'input' },
  { dataIndex: 'food', title: '食物', key: 'food' },
  { dataIndex: 'test', title: '测试字段', key: 'test' },
];
```

### 声明业务表单

如果某个字段是需要在新增编辑的表单里显示，你只需要加上`affairType`字段，可选值同`conditionType`。

```js {3-5}
const columns = [
  { dataIndex: 'name', title: '姓名', key: 'name', conditionType: 'input' },
  {
    dataIndex: 'age',
    title: '年龄',
    key: 'age',
    conditionType: 'input',
    affairType: 'input',
  },
  { dataIndex: 'food', title: '食物', key: 'food', affairType: 'input' },
  { dataIndex: 'test', title: '测试字段', key: 'test', affairType: 'input' },
];
```

### `select`配置

如果表单类型是`select`，那么你还需要提供他的下拉框选项`select`。类型是`SelectProps`。

```js {5-8}
const columns = [
  { dataIndex: 'name', title: '姓名', key: 'name', conditionType: 'input' },
  {
    dataIndex: 'age',
    title: '年龄',
    key: 'age',
    conditionType: 'input',
    affairType: 'input',
  },
  {
    dataIndex: 'food',
    title: '食物',
    key: 'food',
    affairType: 'select',
    select: [
      { value: '1', lable: '牛肉', key: '1' },
      { value: '2', lable: '羊肉', key: '2' },
    ],
  },
  { dataIndex: 'test', title: '测试字段', key: 'test', affairType: 'input' },
];
```
