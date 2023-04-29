---
nav:
  title: 组件
demo:
  cols: 2
title: EAnimation 动画
path: /components
group: 基础组件
---
```jsx
/**
 * title: 从底部进入
 */
import { BottomToTop } from 'raetable';
import { Button, Space } from 'antd'

export default () => <Space>
  {
    new Array(5).fill(null).map((_, idx) => <BottomToTop key={idx} index={idx}>
      <Button>btn{idx + 1}</Button>
    </BottomToTop>)
  }
</Space>
```
```jsx
/**
 * title: 从右边进入
 */
import { RightToLeft } from 'raetable';
import { Button, Row, Space } from 'antd'

export default () => <Row justify="end"><Space>
  {
    new Array(5).fill(null).map((_, idx) => <RightToLeft key={idx} index={idx}>
      <Button>btn{idx + 1}</Button>
    </RightToLeft>)
  }
</Space></Row>
```
```jsx
/**
 * title: 从左边进入
 */
import { LeftToRight } from 'raetable';
import { Button, Row, Space } from 'antd'

export default () => <Space>
  {
    new Array(5).fill(null).map((_, idx) => <LeftToRight key={idx} index={idx}>
      <Button>btn{idx + 1}</Button>
    </LeftToRight>)
  }
</Space>
```

<API id="EForm"></API>

