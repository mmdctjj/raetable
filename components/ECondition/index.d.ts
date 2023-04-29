/// <reference types="react" />
import { ETableColumnProps } from "../..";
export interface EConditionProps<T> {
    condition: object;
    onConditionChange: (value: object) => void;
    columns: ETableColumnProps<T>[];
}
export declare function ECondition<T>({ onConditionChange, condition, columns }: EConditionProps<T>): JSX.Element;
export default ECondition;
