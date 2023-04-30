import { Rule } from "antd/es/form"
import type { DefaultOptionType } from "antd/es/select"
import type { ColumnType, TableProps } from "antd/es/table"
import type { Dispatch, ReactNode } from "react"
import { CSSProperties } from "styled-components"

export interface ESelectProps {
	value: string | number,
	label: string,
	isLeaf?: boolean
	loading?: boolean
	key: string | number,
	type?: string,
	children?: ESelectProps[]
}

export type ETableColumnProps<T> = {
	/**
	 * 是否在表格中隐藏
	 * @default false
	 */
	hiddenInTable?: boolean,
	/**
	 * 作为条件栏目时的类型
	 * @default ""
	 */
	conditionType?: string,
	/**
	 * 作为业务栏目时的类型
	 * @default ""
	 */
	affairType?: string,
	/**
	 * 栏目类型为select时，下拉框内容，也会在表格中作为render依据
	 */
	select?: ESelectProps[],
	/**
	 * 表单规则
	 */
	rules?: Rule[],
	/**
	 * 这个栏目是否联动
	 * @default false
	 */
	linked?: boolean,
	/**
	 * 监听栏目变化回调函数
	 * @param val 
	 * @returns 
	 */
	onChange?: (val: unknown) => void
	/**
	 * Cascader的loadData属性
	 * @param selectedOptions 
	 * @returns 
	 */
	loadData?: (selectedOptions: DefaultOptionType[]) => void
	/**
	 * 栏目类型为select时，下拉框内容格式化函数
	 * @param data 
	 * @returns 
	 */
	formatOptions?: (data: any[]) => ESelectProps[]
} & ColumnType<T>

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
	 * 条件容器类名
	 */
	conditionContainerClass?: string
	/**
	 * 条件容器样式
	 */
	conditionContainerStyle?: CSSProperties
	
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
	onAffairSuccess?: (values: Record, type: string) => Promise<any>,
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
	/**
	 * 表格容器类名
	 */
	tableContainerClass?: string
	/**
	 * 表格容器样式
	 */
	tableContainerStyle?: CSSProperties
}