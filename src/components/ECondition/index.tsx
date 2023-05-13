import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Row, Space } from 'antd';
import {
  EFormItem,
  ETableColumnProps,
  OPERATION,
  useResize,
  useTrigger,
} from 'raetable';
import React, { useCallback, useEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
import EAnimation from '../EAnimation';

const ConditionContainer = styled.div`
  background-color: @primary-color;
`;

const style = {
  background: '#fff',
  padding: 15,
  margin: 15,
};

const ERow = styled(Row)`
  width: 100%;
  margin: 10px 0px;
`;

const Div = styled.div`
  text-align: right;
  color: #777;
`;
export interface EConditionProps<T> {
  /**
   * 是否开启动画
   * @default true
   */
  animation?: boolean;
  /**
   * 条件
   */
  condition: object;
  /**
   * 栏目
   */
  columns: ETableColumnProps<T>[];
  /**
   * 是否展示条件模块确定按钮，不展示时自动提交表单，否则只有点击确定按钮才会提交表单
   * @default false
   */
  showConditionOkBtn?: boolean;
  /**
   * 组件尺寸
   * @default middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * 条件改变触发条件
   * @param value
   * @returns
   */
  onConditionChange: (value: object) => void;
  /**
   * 条件容器类名
   */
  conditionContainerClass?: string;
  /**
   * 条件容器样式
   */
  conditionContainerStyle?: CSSProperties;
}

export function ECondition<T>({
  condition,
  conditionContainerClass,
  conditionContainerStyle,
  columns,
  onConditionChange,
  showConditionOkBtn = false,
  size,
  ...props
}: EConditionProps<T>) {
  const [form] = Form.useForm();

  const [more, togger] = useTrigger();

  const width = useResize();

  const [show, trogger] = useTrigger();

  // 监听动态条件
  const onChange = useCallback(
    (_: any, data: object) =>
      onConditionChange((curr: object) => ({ ...curr, ...data })),
    [onConditionChange],
  );

  // 清空
  const clearCondition = useCallback(() => {
    onConditionChange({});
    form.resetFields();
  }, [form, onConditionChange]);

  // 设置默认值
  // eslint-disable-next-line
  useEffect(() => form.setFieldsValue(condition), [condition]);

  return (
    <ConditionContainer
      style={{ ...style, ...conditionContainerStyle }}
      className={conditionContainerClass}
    >
      <Div>
        {width < 570 ? (
          show ? (
            <CloseOutlined onClick={trogger} />
          ) : (
            <MenuOutlined onClick={trogger} />
          )
        ) : (
          ''
        )}
      </Div>
      {show || width >= 570 ? (
        <Form
          form={form}
          labelCol={{ xl: 6, md: 4, xs: 2 }}
          onValuesChange={!showConditionOkBtn ? onChange : () => {}}
          size={size}
        >
          <ERow>
            {columns
              ?.filter((column) => !column.more)
              ?.map((item, idx) => (
                <Col key={item.key} md={12} xs={24} xl={8} xxl={8}>
                  <EAnimation animation={props.animation} index={idx}>
                    <Form.Item
                      key={item.key}
                      name={item.dataIndex as any}
                      label={item.title as string}
                      style={{ margin: '10px 0' }}
                    >
                      <EFormItem
                        content={item}
                        size={size}
                        typeKey="conditionType"
                        type={OPERATION.EDIT}
                        value=""
                      />
                    </Form.Item>
                  </EAnimation>
                </Col>
              ))}

            {more &&
              columns
                ?.filter((column) => column.more)
                ?.map((item, idx) => (
                  <Col key={item.key} md={12} xs={24} xl={8} xxl={6}>
                    <EAnimation animation={props.animation} index={idx}>
                      <Form.Item
                        key={item.key}
                        name={item.dataIndex as any}
                        label={item.title as string}
                        style={{ margin: '10px 0' }}
                      >
                        <EFormItem
                          content={item}
                          size={size}
                          typeKey="conditionType"
                          type={OPERATION.EDIT}
                          value=""
                        />
                      </Form.Item>
                    </EAnimation>
                  </Col>
                ))}
          </ERow>

          <ERow justify="space-between">
            <Col span={24} style={{ textAlign: 'right' }}>
              <Form.Item>
                <EAnimation
                  animation={props.animation}
                  index={columns?.length ?? 5}
                >
                  <Space
                    direction={width < 570 ? 'vertical' : 'horizontal'}
                    style={{
                      width: width < 570 ? '100%' : undefined,
                      textAlign: 'right',
                    }}
                  >
                    {columns.find((column) => column.more) ? (
                      <Button
                        icon={more ? <DownOutlined /> : <UpOutlined />}
                        onClick={togger}
                        block={width < 570}
                        type="link"
                      >
                        更多条件
                      </Button>
                    ) : (
                      ''
                    )}
                    {showConditionOkBtn ? (
                      <Button
                        block={width < 570}
                        onClick={() => onConditionChange(form.getFieldsValue())}
                        type="primary"
                      >
                        确定
                      </Button>
                    ) : (
                      ''
                    )}
                    <Button
                      onClick={() => clearCondition()}
                      block={width < 570}
                      danger
                    >
                      清空
                    </Button>
                  </Space>
                </EAnimation>
              </Form.Item>
            </Col>
          </ERow>
        </Form>
      ) : (
        <></>
      )}
    </ConditionContainer>
  );
}

export default ECondition;
