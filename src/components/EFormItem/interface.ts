import { ETableColumnProps } from "../ETable/interface";


export interface EFormItemProps<T> {
  content: ETableColumnProps<T>,
  onChange?: (value: any) => void,
  value: any,
  size?: 'large' | 'middle' | 'small'
  type: string,
  typeKey: 'conditionType' | 'affairType'
}