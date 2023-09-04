---
nav:
  title: 组件
title: ETable 表格
path: /components
group: 进阶组件
---

`ETable`组件是由上述基础组件组合而成的，大多数情况下，你无需关注基础组件

:::warning
`Table`的默认样式如下

```js
const style = {
  background: '#fff',
  padding: 15,
  margin: 15,
};
```

:::

### 基本用法

<code background="#eee" compact="true" src="./demo/all.jsx"></code>
:::warning
`colomns`详细配置请看这里：[columns 配置说明](https://mmdctjj.github.io/raetable/guide/columns#columns%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)
:::

### 业务弹窗类型

`affairContainerType`可以切换业务弹窗类型，默认值为`modal`，可选值为`drawer`
<code compact="true" src="./demo/drawer.jsx"></code>

### 隐藏对应按钮

当你不提供对应的`loading`时，会隐藏对应的按钮，`loading`除外。
`addLoading`对应新增按钮，`editLoading`对应编辑按钮，`deleteLoading`对应删除按钮
<code compact="true" src="./demo/loading.jsx"></code>

### 扩展表格

`extend`属性可以扩展表格的操作。你可以通过当前行的行数、行内容，决定显示的名称或者禁用时机
<code compact="true" src="./demo/extend.jsx"></code>

### 接管操作栏

如果你不满意默认的操作栏，可以在`columns`里增加`titile`为操作的栏目
<code compact="true" src="./demo/action.jsx"></code>

### 表格宽度自适应

通过设置`resize`为`true`开启表格宽度自适应
<code compact="true" src="./demo/resizeTable.jsx"></code>

### API

#### ETableProps

<API id="__ETableProps"></API>

#### ETableColumnProps
|属性|描述|类型|默认值|
|---|---|---|---|
|hiddenInTable|是否在表格中隐藏|`boolean`|`false`|
|conditionType|作为条件栏目时的类型|`string`|`必选`|
|affairType|作为业务栏目时的类型|`string`|`必选`|
|Select|编辑业务接口|`ESelectProps[]`|`[]`|
|rules|表单规则|`Rule[]`|`[]`|
|linked|这个栏目是否联动|`boolan`|`false`|
|more|是否为扩展条件|`boolan`|`false`|
|onChange|监听栏目变化回调函数|`(value: unknow) => void`|`--`|
|loadData|Cascader的loadData属性|`(SelectedOptions: DefaultOptionType[]) => void`|`--`|
|formatOptions|栏目类型为Select时，下拉框内容格式化函数|`(data?: any[]) => ESelectProps[]`|`--`|

#### ESelectProps

<API id="_ESelect"></API>
