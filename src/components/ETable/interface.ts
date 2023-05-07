import { ButtonProps } from 'antd/es/button';
import { FormItemProps, FormProps, Rule } from 'antd/es/form';
import type { DefaultOptionType } from 'antd/es/select';
import type { ColumnType, TableProps } from 'antd/es/table';
import { OPERATION } from 'raetable/enum';
import type { Dispatch, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { ETitleProps } from '../ETitle';

export interface ESelectProps {
  value: string | number;
  label: string;
  isLeaf?: boolean;
  loading?: boolean;
  key: string | number;
  type?: string;
  children?: ESelectProps[];
}

export type ETableColumnProps<T> = {
  /**
   * 是否在表格中隐藏
   * @default false
   */
  hiddenInTable?: boolean;
  /**
   * 作为条件栏目时的类型
   * @default ""
   */
  conditionType?: string;
  /**
   * 作为业务栏目时的类型
   * @default ""
   */
  affairType?: string;
  /**
   * 栏目类型为select时，下拉框内容，也会在表格中作为render依据
   */
  select?: ESelectProps[];
  /**
   * 表单规则
   */
  rules?: Rule[];
  /**
   * 这个栏目是否联动
   * @default false
   */
  linked?: boolean;
  /**
   *
   */
  more?: true;
  /**
   * 监听栏目变化回调函数
   * @param val
   * @returns
   */
  onChange?: (val: unknown) => void;
  /**
   * Cascader的loadData属性
   * @param selectedOptions
   * @returns
   */
  loadData?: (selectedOptions: DefaultOptionType[]) => void;
  /**
   * 栏目类型为select时，下拉框内容格式化函数
   * @param data
   * @returns
   */
  formatOptions?: (data: any[]) => ESelectProps[];
} & ColumnType<T> &
  FormItemProps &
  FormProps;

export interface ETableProps<Record> extends TableProps<Record>, ETitleProps {
  /**
   * 业务弹出框类型
   * @default modal
   */
  affairContainerType?: 'drawer' | 'modal';
  /**
   * 业务宽度
   * @default 700
   */
  affairWidth?: number;
  /**
   * 返回按钮连接，如果没有，则不会显示返回按钮
   * @default ""
   */
  /**
   * 表格栏目columns
   * @default []
   */
  columns: ETableColumnProps<Record>[];
  /**
   * 条件容器类名
   */
  conditionContainerClass?: string;
  /**
   * 条件容器样式
   */
  conditionContainerStyle?: CSSProperties;

  /**
   * 表格数据源dataSource
   * @default []
   */
  dataSource?: Record[];
  /**
   * 新增时加载状态，如果缺失布尔类型时，则不会显示新增按钮
   * @default undefined
   */
  addLoading?: boolean;
  /**
   * 编辑时加载状态，如果缺失布尔类型时，则不会显示编辑按钮
   * @default undefined
   */
  deleteLoading?: boolean;
  /**
   * 删除时加载状态，如果缺失布尔类型时，则不会显示删除按钮
   * @default undefined
   */
  editLoading?: boolean;
  /**
   * 表格编辑栏扩展
   */
  extend?: ButtonProps[];
  /**
   * 业务扩展
   */
  extendAffair?: ReactNode;
  /**
   * 业务表单扩展
   */
  extendForm?: ReactNode;
  /**
   * 格式化业务数据函数，点击每行弹出业务层时调用
   * @param data
   * @returns
   */
  formatAffairData?: (data: Record) => Record;
  /**
   * 业务执行成功时回调函数
   * @param values
   * @param type
   * @returns Promise类型
   */
  onAffairSuccess?: (
    values: Record,
    type: OPERATION.ADD | OPERATION.EDIT,
  ) => Promise<any>;
  /**
   * 条件触发时回调
   */
  onConditionChange?: Dispatch<any>;
  /**
   * 点击确认删除回调函数
   * @param keys
   * @returns Promise类型
   */
  onClickDeleteButton?: (keys: unknown[]) => Promise<any>;
  /**
   * 页面标题
   */
  pageTitle?: string;
  /**
   * 组件尺寸
   * @default middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * 是否展示条件模块确定按钮，不展示时自动提交表单，否则只有点击确定按钮才会提交表单
   * @default false
   */
  showConditionOkBtn?: boolean;
  /**
   * 是否显示新增按钮
   * @default true
   */
  showAdd?: boolean;
  /**
   * 是否显示业务模块
   * @default true
   */
  showAffair?: boolean;
  /**
   * 是否显示删除按钮
   * @default true
   */
  showDelete?: boolean;
  /**
   * 是否显示删除返回
   * @default true
   */
  showBack?: boolean;
  // title?: string,
  /**
   * 表格容器类名
   */
  tableContainerClass?: string;
  /**
   * 表格容器样式
   */
  tableContainerStyle?: CSSProperties;
}
