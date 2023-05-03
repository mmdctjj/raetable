---
nav:
  title: 组件
title: ETitle 表格
path: /components
group: 基础组件
---
:::warning
`ETitle`的默认样式
```js
const titleStyle = {
  background: '#fff',
  padding: 15,
}
```
:::
### 基本用法
```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 属性`extendAffair`可以额外扩展`Title`组件功能
 * description: 提供`onClickAdd`属性就说明你想展示新增按钮。
 */
import { ETitle } from 'raetable';
import { Button } from "antd";

export default () => (
  <ETitle
    affairName="靓仔"
    backPath="/liangmei"
    extendAffair={(
      <>
        <Button>上传</Button>
        <Button>下载</Button>
      </>
    )}
    pageTitle="靓仔管理"
    onClickAdd={() => console.log('你点击新增了')}
  />
)

```
:::warning
`backPath`、`onClickAdd`分别对应`Title`组件的返回按钮和新增按钮
:::
### 仅展示标题
```jsx
/**
 * background: '#eee'
 * compact: true
 * title: 仅展示标题
 * description: 只提供`pageTitle`属性
 */
import { ETitle } from 'raetable';
import { Button } from "antd";

export default () => (
  <ETitle pageTitle="靓仔管理" />
)

```
### API
<API></API>

