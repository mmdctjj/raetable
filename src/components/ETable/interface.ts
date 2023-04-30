import { Rule } from "antd/es/form"
import type { DefaultOptionType } from "antd/es/select"
import type { ColumnType, TableProps } from "antd/es/table"
import type { Dispatch, ReactNode } from "react"

export interface SelectProps {
	value: string | number,
	label: string,
	isLeaf?: boolean
	loading?: boolean
	key: string | number,
	type?: string,
	children?: SelectProps[]
}

export type ETableColumnProps<T> = ColumnType<T> & {
	hiddenInTable?: boolean,
	copyed?: boolean,
	conditionType?: string,
	affairType?: string,
	select?: SelectProps[],
	rules?: Rule[],
	fetch?: (a?: any) => Promise<any>,
	linked?: boolean,
	isFature?: boolean,
	step?: string
	onChange?: (val: unknown) => void
	loadData?: (selectedOptions: DefaultOptionType[]) => void
	formatOptions?: (data: any[]) => SelectProps[]
}

export interface ETableProps<Record> extends TableProps<Record> {
	/**
	 * 业务名称，弹出框title
	 * @default ""
	 */
	affairName: string | undefined
	/**
	 * 业务宽度
	 * @default 700
	 */
	affairWidth?: number
	/**
	 * 表格栏目columns
	 * @default []
	 */
	columns: ETableColumnProps<Record>[],
	/**
	 * 表格数据源dataSource
	 * @default []
	 */
	dataSource?: Record[]
	addLoading?: boolean,
	deleteLoading?: boolean,
	editLoading?: boolean,
	/**
	 * 表格编辑栏扩展
	 */
	extend?: any[],
	/**
	 * 业务扩展
	 */
	extendAffair?: ReactNode
	/**
	 * 业务表单扩展
	 */
	extendForm?: ReactNode,
	formatAffairData?: (data: Record) => Record,
	onAffairSuccess?: (values: unknown, type: string) => Promise<any>,
	/**
	 * 条件触发时回调
	 */
	onConditionChange?: Dispatch<any>,
	// visible,
	// onDrawerClose : () => any,
	onClickDeleteButton?: (keys: unknown[]) => Promise<any>,
	// onClickEditButton : () => any,
	onRowSelect?: (data: any[]) => void,
	/**
	 * 组件尺寸
	 * @default middle
	 */
	size?: 'large' | 'middle' | 'small'
	/**
	 * 是否显示新增按钮
	 * @default true
	 */
	showAdd?: boolean,
	/**
	 * 是否显示业务模块
	 * @default true
	 */
	showAffair?: boolean,
	/**
	 * 是否显示删除按钮
	 * @default true
	 */
	showDelete?: boolean
	/**
	 * 是否显示删除返回
	 * @default true
	 */
	showBack?: boolean
	// title?: string,
}