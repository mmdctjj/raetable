import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row, Space } from 'antd';
import { EFormItem, ETableColumnProps, OPERATION, useTrigger } from 'raetable';
import React, { useCallback, useEffect, useMemo } from 'react';
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

  const columns_ = useMemo(
    () => columns?.filter((column) => more || !column.more),
    [columns, more],
  );

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
      <Form
        form={form}
        labelCol={{ span: 6 }}
        layout="inline"
        onValuesChange={!showConditionOkBtn ? onChange : () => {}}
        size={size}
      >
        <ERow>
          {columns
            ?.filter((column) => !column.more)
            ?.map((item, idx) => (
              <Col
                key={item.key}
                span={columns_.length < 4 ? 24 / columns_.length : 6}
              >
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
                <Col
                  key={item.key}
                  span={columns_.length < 4 ? 24 / columns_.length : 6}
                >
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
          <Col></Col>
          <Col>
            <Form.Item>
              <EAnimation
                animation={props.animation}
                index={columns?.length ?? 5}
              >
                <Space style={{ marginRight: -15 }}>
                  {columns.find((column) => column.more) ? (
                    <Button
                      icon={more ? <DownOutlined /> : <UpOutlined />}
                      onClick={togger}
                      type="link"
                    >
                      更多条件
                    </Button>
                  ) : (
                    ''
                  )}
                  {showConditionOkBtn ? (
                    <Button
                      onClick={() => onConditionChange(form.getFieldsValue())}
                      type="primary"
                    >
                      确定
                    </Button>
                  ) : (
                    ''
                  )}
                  <Button onClick={() => clearCondition()} danger>
                    清空
                  </Button>
                </Space>
              </EAnimation>
            </Form.Item>
          </Col>
        </ERow>
      </Form>
    </ConditionContainer>
  );
}

export default ECondition;
