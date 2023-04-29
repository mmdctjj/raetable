import { Rule } from "antd/es/form";
import type { DefaultOptionType } from "antd/es/select";
import type { ColumnType, TablePaginationConfig } from "antd/es/table";
import type { Dispatch, ReactNode } from "react";
export interface SelectProps {
    value: string | number;
    label: string;
    isLeaf?: boolean;
    loading?: boolean;
    key: string | number;
    type?: string;
    children?: SelectProps[];
}
export declare type ETableColumnProps<T> = ColumnType<T> & {
    hiddenInTable?: boolean;
    copyed?: boolean;
    conditionType?: string;
    affairType?: string;
    select?: SelectProps[];
    rules?: Rule[];
    fetch?: (a?: any) => Promise<any>;
    linked?: boolean;
    isFature?: boolean;
    step?: string;
    onChange?: (val: unknown) => void;
    loadData?: (selectedOptions: DefaultOptionType[]) => void;
    formatOptions?: (data: any[]) => SelectProps[];
};
export interface ETableProps<Record> {
    affairName: string | undefined;
    affairWidth?: number;
    columns: ETableColumnProps<Record>[];
    dataSource?: Record[];
    addLoading?: boolean;
    deleteLoading?: boolean;
    editLoading?: boolean;
    extend?: any[];
    extendAffair?: ReactNode;
    extendForm?: ReactNode;
    formatAffairData?: (data: Record) => Record;
    loading?: boolean;
    onAffairSuccess?: (values: unknown, type: string) => Promise<any>;
    onConditionChange?: Dispatch<any>;
    onClickDeleteButton?: (keys: unknown[]) => Promise<any>;
    onRowSelect?: (data: any[]) => void;
    pagination?: TablePaginationConfig;
    rowKey?: string;
    showAdd?: boolean;
    showAffair?: boolean;
    showDelete?: boolean;
    showBack?: boolean;
    tableExtendButton?: ReactNode;
    tableExtendButtonTarget?: string;
    tableExtendButtonTargetKey?: string;
    title?: string;
}
