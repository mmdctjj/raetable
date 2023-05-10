---
nav:
  title: 组件
demo:
  cols: 2
title: EAnimation 动画
path: /components
group: 基础组件
---

### 基础用法

EAnimation 组件是包装组件，可以使用`direction`属性定义方向，默认为`BT`，底层组件为`BottomToTop`，其余可选值为`LR`（`LeftToRight`组件）、`RL`（`RightToLeft`组件）

```jsx
import { EAnimation } from 'raetable';
import { Button, Space } from 'antd';

export default () => (
  <Space>
    {new Array(5).fill(null).map((_, idx) => (
      <EAnimation key={idx} index={idx}>
        <Button>btn{idx + 1}</Button>
      </EAnimation>
    ))}
  </Space>
);
```

### 关闭动画

`animation`属性为 false 时，可以关闭动画

```jsx
import { EAnimation } from 'raetable';
import { Button, Space } from 'antd';

export default () => (
  <Space>
    {new Array(5).fill(null).map((_, idx) => (
      <EAnimation animation={false} key={idx}>
        <Button>btn{idx + 1}</Button>
      </EAnimation>
    ))}
  </Space>
);
```

```jsx
/**
 * title: BottomToTop
 */
import { BottomToTop } from 'raetable';
import { Button, Space } from 'antd';

export default () => (
  <Space>
    {new Array(5).fill(null).map((_, idx) => (
      <BottomToTop key={idx} index={idx}>
        <Button>btn{idx + 1}</Button>
      </BottomToTop>
    ))}
  </Space>
);
```

```jsx
/**
 * title: RightToLeft
 */
import { RightToLeft } from 'raetable';
import { Button, Row, Space } from 'antd';

export default () => (
  <Row justify="end">
    <Space>
      {new Array(5).fill(null).map((_, idx) => (
        <RightToLeft key={idx} index={idx}>
          <Button>btn{idx + 1}</Button>
        </RightToLeft>
      ))}
    </Space>
  </Row>
);
```

```jsx
/**
 * title: LeftToRight
 */
import { LeftToRight } from 'raetable';
import { Button, Row, Space } from 'antd';

export default () => (
  <Space>
    {new Array(5).fill(null).map((_, idx) => (
      <LeftToRight key={idx} index={idx}>
        <Button>btn{idx + 1}</Button>
      </LeftToRight>
    ))}
  </Space>
);
```

### API

<API hideTitle></API>
