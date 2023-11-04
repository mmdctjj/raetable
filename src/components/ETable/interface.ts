import type { DefaultOptionType } from 'antd/es/Select';
import { FormItemProps, FormProps, Rule } from 'antd/es/form';
import type { ColumnType, TableProps } from 'antd/es/table';
import { OPERATION } from 'raetable/enum';
import type { Dispatch, ReactNode } from 'react';
import React from 'react';
import { CSSProperties } from 'styled-components';
import { ETitleProps } from '../ETitle';

export interface ESelectProps {
  /**
   * 下拉框value
   */
  value: string | number;
  /**
   * 下拉框名称
   */
  label: string;
  /**
   * 是否为叶子节点
   */
  isLeaf?: boolean;
  /**
   * 异步加载状态
   */
  loading?: boolean;
  /**
   * 下拉框的key
   */
  key: string | number;
  /**
   * 下拉框类型
   */
  type?: string;
  /**
   * 不是叶子节点时的子节点
   */
  children?: ESelectProps[];
}

export interface ETableColumnInterfaceProps {
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
   * 栏目类型为Select时，下拉框内容，也会在表格中作为render依据
   */
  options?: ESelectProps[];
  /**
   * 表单规则
   */
  rules?: Rule[];
  /**
   * 这个栏目联动到指定栏目
   * @default undefined
   */
  linked?: string;
  /**
   *
   */
  more?: true;
  /**
   * 是否开启表格宽度自适应
   */
  resize?: boolean;
  /**
   * 监听栏目变化回调函数
   * @param val
   * @returns
   */
  onChange?: (val: unknown) => void;
  /**
   * Cascader的loadData属性
   * @param SelectedOptions
   * @returns
   */
  loadData?: (SelectedOptions: DefaultOptionType[]) => void;
  /**
   * 栏目类型为Select时，下拉框内容格式化函数
   * @param data
   * @returns
   */
  formatOptions?: (data: any[]) => ESelectProps[];
}

export type ETableColumnProps<T> = ETableColumnInterfaceProps &
  ColumnType<T> &
  FormItemProps &
  FormProps;

export interface ExtendsProps<T> {
  key?: React.Key;
  size?: 'middle' | 'small' | 'large';
  title?: string | ((recard: T, index: number) => string);
  loading?: boolean | ((recard: T, index: number) => boolean);
  disabled?: (recard: T, index: number) => boolean;
  hidden?: (recard: T, index: number) => boolean;
  onClick?: (recard: T, index: number) => void;
}

export interface _ETableProps<Record> {
  /**
   * 是否开启动画
   * @default true
   */
  animation?: boolean;
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
  backPath?: string;
  /**
   * 表格栏目columns，ETableColumnProps[]
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
   * 批量删除时的加载状态
   * @default undefined
   */
  batchDeleteLoading?: boolean;
  /**
   * 控制批量删除提示的开关
   * @default undefined
   */
  batchOpen?: boolean;
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
  extend?: ExtendsProps<Record>[];
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
  onBatchDelete?: (keys: any[]) => Promise<any>;
  /**
   * 当点击弹窗的关闭按钮时的回调函数
   * @returns
   */
  onModalClose?: () => void;
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
   * 是否开启表格宽度自适应
   */
  resize?: boolean;
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
  /**
   * 是否展示批量操作区域，你可以根据实际批量删除
   */
  showBatch?: boolean;
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

export type ETableProps<Record> = _ETableProps<Record> &
  TableProps<Record> &
  ETitleProps;
