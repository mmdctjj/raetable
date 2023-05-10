---
nav:
  title: 组件
title: EFormItem 表单项
path: /components
group: 基础组件
---

### 基本用法

<code src="./demo/base.jsx"></code>

### 自定义组件

使用自定义组件时需要使用官方提供的注册函数`useExtendFormItem`，它的参数是一个对象`{[key: string]: ReactNode}`，该`ReactNode`是你自己定义的组件，它会接受`EFormItemProps`组件参数供你使用。
:::warning
你可以在多个地方多次的调用`useExtendFormItem`，如果组件名称重复，会覆盖旧的组件，所以你也可以用此方法重写默认组件
:::
<code src="./demo/extend.jsx"></code>

### API

<API EFormItem></API>
