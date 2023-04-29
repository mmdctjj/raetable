import { ETableColumnProps } from "../ETable/interface";
export interface EFormItemProps<T> {
    content: ETableColumnProps<T>;
    onChange?: (value: any) => void;
    value: any;
    type: string;
    typeKey: 'conditionType' | 'affairType';
}
