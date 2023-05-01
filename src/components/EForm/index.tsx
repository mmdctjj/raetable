import { Button, Form, Input } from "antd"
import React, { ReactNode, useCallback, useEffect } from "react"
import { EFormItem, ETableColumnProps, OPERATION } from "raetable"
import { BottomToTop } from "raetable"
import { useTrigger } from "raetable"
import { NamePath } from "antd/es/form/interface"

export interface EFormProps<T> {
  /**
   * 业务数据
   */
  affairData?: T
  /**
   * 业务弹出层的宽度
   * @default 700
   */
  affairWidth?: number
  /**
   * 分栏布局
   */
  col?: number
  /**
   * 栏目数据
   */
  columns: ETableColumnProps<T>[]
  /**
   * 扩展表单 Form.Item
   */
  extendForm?: ReactNode
  /**
   * 需要隐藏label的key
   * @default []
   */
  hiddenLabels?: string[]
  /**
   * 是否显示提交按钮
   * @default true
   */
  isShowSumbit?: boolean
  /**
   * 操作类型
   */
  type?: string,
  /**
   * 业务执行成功回调
   * @param values T
   * @returns Promise
   */
  onAffairSuccess?: (values: T) => Promise<any>
}

export function EForm<T>({
  // col = 1,
  affairData = {} as T,
  affairWidth,
  columns = [],
  extendForm,
  type = OPERATION.ADD,
  isShowSumbit = true,
  hiddenLabels = [],
  onAffairSuccess,
}: EFormProps<T>) {

  const [form] = Form.useForm()

  const [loading, setLoading] = useTrigger()

  const onSumbit = useCallback(() => {
    form.validateFields()
      .then((value: T) => {
        setLoading()
        onAffairSuccess?.(value).then(() => setLoading())
      })
  }, [form])

  // eslint-disable-next-line
  useEffect(() => Object.keys(affairData as object).length === 0
    ? form.resetFields()
    : form.setFieldsValue({ enabled: 0, ...affairData })
  , [affairData])

  return (
    <Form
      form={form}
      layout="horizontal"
      labelAlign="right"
      labelCol={{ span: affairWidth && affairWidth > 900 ? 2 : 5 }}
      labelWrap={true}
    >

      <Form.Item style={{ display: 'none' }} name="id"><Input type="hidden" /></Form.Item>

      {columns?.map((item: ETableColumnProps<T>, idx: number) => <BottomToTop key={item.key} index={idx}>
        <Form.Item
          key={item.key}
          label={<>{hiddenLabels.includes(item.title as string) ? '' : item.title}</>}
          name={item.dataIndex as NamePath} rules={item.rules ?? []}
        >
          <EFormItem
            value
            content={item}
            onChange={item.onChange}
            type={type}
            typeKey="affairType"
          />
        </Form.Item>
      </BottomToTop>)}

      <BottomToTop index={columns.length + 1}>{extendForm}</BottomToTop>

      {
        isShowSumbit

          ? <BottomToTop index={extendForm ? columns.length + 2 : columns.length + 1}>
              <Form.Item
                wrapperCol={{
                  offset: columns.filter(item => hiddenLabels.includes(item.title as string)).length
                    ? 0
                    : affairWidth && affairWidth > 900
                    ? 2
                    : 5 
                }}
              >
                <>
                  <Button loading={loading} type="primary" onClick={onSumbit}>确认</Button>
                  {type !== OPERATION.DISPLAY ? <Button type="link" onClick={() => form.resetFields()}>清空</Button> : ''}
                </>
              </Form.Item>
            </BottomToTop>
          : ''
      }
    </Form>
  )
}

export default EForm