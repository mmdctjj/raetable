import React, { useCallback, useEffect } from "react"
import { Button, Col, Form, Row, Space } from "antd"
import EAnimation from "../EAnimation"
import { EFormItem, ETableColumnProps, OPERATION } from "raetable"

export interface EConditionProps<T> {
  /**
   * 条件
   */
  condition: object
  /**
   * 栏目
   */
  columns: ETableColumnProps<T>[]
  /**
   * 是否展示条件模块确定按钮，不展示时自动提交表单，否则只有点击确定按钮才会提交表单
   * @default false
   */
  showConditionOkBtn?: boolean
  /**
   * 组件尺寸
   * @default middle
   */
  size?: 'large' | 'middle' | 'small'
  /**
   * 条件改变触发条件
   * @param value 
   * @returns 
   */
  onConditionChange: (value: object) => void
}

export function ECondition<T> ({
  condition,
  columns,
  onConditionChange,
  showConditionOkBtn = false,
  size
}: EConditionProps<T>) {

  const [form] = Form.useForm()

  // 监听动态条件
  const onChange = useCallback((_: any, data: object) => onConditionChange((curr: object) => ({ ...curr, ...data})), [onConditionChange])

  // 清空
  const clearCondition = useCallback(() => {onConditionChange({}); form.resetFields()}, [form, onConditionChange])

  // 设置默认值
  // eslint-disable-next-line
  useEffect(() => form.setFieldsValue(condition), [condition])

  return (
    <Form
      form={form}
      labelCol={{span: 6}}
      layout="inline"
      onValuesChange={ !showConditionOkBtn ? onChange : () => {}}
      size={size}
    >

      <Row style={{ width: '100%' }}>

        <Col span={20}>

          <Row>
            {columns?.map((item, idx) =><Col key={item.key} span={columns.length === 4 ? 6 : 6}>

              <EAnimation index={idx}>
                <Form.Item key={item.key} name={item.dataIndex as any} label={item.title as string}>
                  <EFormItem content={item} size={size} typeKey="conditionType" type={OPERATION.EDIT} value="" />
                </Form.Item>
              </EAnimation>

            </Col>)}
          </Row>

        </Col>

        <Col span={4} style={{textAlign: 'right'}}>
          
          <Form.Item>
            <EAnimation index={columns?.length ?? 5}>
              <Space>
                {showConditionOkBtn ? <Button onClick={() => onConditionChange(form.getFieldsValue())} type="primary">确定</Button> : ''}
                <Button onClick={() => clearCondition()} danger>清空</Button>
              </Space>
            </EAnimation>
          </Form.Item>
        
        </Col>

      </Row>
      
    </Form>
  )
}

export default ECondition