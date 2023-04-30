import { ETableColumnProps } from "raetable";


export interface EFormItemProps<T> {
  /**
   * 配置项数据，用来解析的
   */
  content: ETableColumnProps<T>,
  /**
   * 当表单数据发生变化时的回调
   * @param value any
   * @returns void
   */
  onChange?: (value: any) => void,
  /**
   * 表单的值
   */
  value: any,
  /**
   * 表单尺寸
   * @default middle
   */
  size?: 'large' | 'middle' | 'small'
  /**
   * 操作类型
   */
  type: string,
  /**
   * 表单用途，是条件还是业务
   */
  typeKey: 'conditionType' | 'affairType'
}