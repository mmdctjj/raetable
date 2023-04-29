import { RaeTableColumnProps } from "../RaeTable/interface";


export interface RaeFormProps<T> {
  content: RaeTableColumnProps<T>,
  onChange?: (value: any) => void,
  value: any,
  type: string,
  typeKey: 'conditionType' | 'affairType'
}