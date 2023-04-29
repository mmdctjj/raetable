import { ReactNode } from "react";
import { ETableColumnProps } from "../..";
export interface EFormProps<T> {
    affairData: object;
    affairWidth?: number;
    col?: number;
    data: ETableColumnProps<T>[];
    extendForm: ReactNode;
    hiddenLabels?: string[];
    isShowSumbit?: boolean;
    type: string;
    onAffairSuccess: (values: T) => Promise<any>;
}
export declare function EForm<T>({ data, affairData, affairWidth, extendForm, type, isShowSumbit, hiddenLabels, onAffairSuccess, }: EFormProps<T>): JSX.Element;
export default EForm;
