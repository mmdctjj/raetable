import React, { useCallback, useEffect } from "react"
import { Button, Col, Form, Row } from "antd"
import EAnimation from "../EAnimation"
import { EFormItem, ETableColumnProps } from "raetable"

export interface EConditionProps<T> {
  condition: object
  onConditionChange: (value: object) => void
  columns: ETableColumnProps<T>[]
}

export function ECondition<T> ({
  onConditionChange,
  condition,
  columns
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
      onValuesChange={onChange}
      style={{ margin: 15, marginBottom: 0 }}
    >

      <Row style={{ width: '100%' }}>

        <Col span={23}>

          <Row style={{ width: '90%', maxWidth: 1920 }}>
            {columns?.map((item, idx) =><Col key={item.key} span={columns.length === 4 ? 6 : 6} style={{ marginBottom: 15 }}>

              <EAnimation index={idx}>
                <Form.Item key={item.key} name={item.dataIndex as any} label={item.title as string}>
                  <EFormItem content={item} typeKey="conditionType" type="" value="" />
                </Form.Item>
              </EAnimation>

            </Col>)}
          </Row>

        </Col>

        <Col span={1} style={{ display: 'flex', flexDirection: 'column-reverse', marginBottom: 15 }}>
          
          <Form.Item>
            <EAnimation index={columns?.length ?? 5}>
              <Button onClick={() => clearCondition()} type="link">清空</Button>
            </EAnimation>
          </Form.Item>
        
        </Col>

      </Row>
      
    </Form>
  )
}

export default ECondition