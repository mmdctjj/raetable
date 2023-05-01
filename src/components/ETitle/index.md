---
nav:
  title: 组件
title: ETitle 表格
path: /components
group: 基础组件
---
### 基本用法
```jsx
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
### API
<API></API>

