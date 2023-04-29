import { Button, Form, Input } from "antd"
import React, { ReactNode, useCallback, useEffect } from "react"
// import { useTrigger } from "
import { EForm, RaeTableColumnProps } from "raetable"
import { BottomToTop } from "raetable"
import { useTrigger } from "./useTrigger"
import { NamePath } from "antd/es/form/interface"

interface AffairProps<T> {
  data: RaeTableColumnProps<T>[]
  affairData: object
  affairWidth?: number
  extendForm: ReactNode
  onAffairSuccess: (values: unknown) => Promise<any>
  type: string,
  isShowSumbit?: boolean
  hiddenLabels?: string[]
}

export function Affair<T>({ data = [], affairData = {}, affairWidth, extendForm, onAffairSuccess, type, isShowSumbit = true, hiddenLabels = [] }: AffairProps<T>) {

  const [form] = Form.useForm()

  const [loading, setLoading] = useTrigger(false)

  const onSumbit = useCallback(() => {
    form.validateFields()
      .then(() => {
        setLoading(true)
        form.submit()
      })
  }, [form])

  // eslint-disable-next-line
  useEffect(() => Object.keys(affairData).length === 0 ? form.resetFields() : form.setFieldsValue({ enabled: 0, ...affairData }), [affairData])

  return <Form
    form={form}
    layout="horizontal"
    labelAlign="right"
    labelCol={{ span: affairWidth && affairWidth > 900 ? 2 : 5 }}
    labelWrap={true}
    onFinish={values => onAffairSuccess(values)}
  >

    <Form.Item style={{ display: 'none' }} name="id"><Input type="hidden" /></Form.Item>

    {data?.map((item: RaeTableColumnProps<T>, idx: number) => <BottomToTop key={item.key} index={idx}>
      <Form.Item
        key={item.key}
        label={<>{hiddenLabels.includes(item.title as string) ? '' : item.title}</>}
        name={item.dataIndex as NamePath} rules={item.rules ?? []}
      >
        <EForm
          value
          content={item}
          onChange={item.onChange}
          type={type}
          typeKey="affairType"
        />
      </Form.Item>
    </BottomToTop>)}

    <BottomToTop index={data.length + 1}>{extendForm}</BottomToTop>

    {
      isShowSumbit

        ? <BottomToTop index={extendForm ? data.length + 2 : data.length + 1}>
          
            <Form.Item wrapperCol={{ offset: data.filter(item => hiddenLabels.includes(item.title as string)).length ? 0 : affairWidth && affairWidth > 900 ? 2 : 5 }}>

              <>

                <Button loading={loading} type="primary" onClick={onSumbit}>确认</Button>

                {type !== 'display' ? <Button type="link" onClick={() => form.resetFields()}>清空</Button> : ''}

              </>

            </Form.Item>
          
          </BottomToTop>
          
        : ''
    }

  </Form>
}