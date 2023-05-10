import React from 'react';
import { Cascader, Checkbox, Input, Radio, Select, Switch } from "antd"
import type { EFormItemProps } from './interface';
import { FORMTYPE, OPERATION } from 'raetable';

export function RaeFormItem<T> ({
  content,
  value,
  onChange,
  size,
  type,
  typeKey
}: EFormItemProps<T>) {

  if (!content?.[typeKey]) return <></>

  const RaeFormEditRender: {[key in string]: JSX.Element} = {

    [FORMTYPE.CASCADER]: <Cascader size={size} placeholder={`请输入${content.title}`} value={value} onChange={onChange} options={content.select} loadData={content.loadData} />,
    
    [FORMTYPE.CHECKBOX]: <Checkbox.Group options={content.select} value={value} onChange={onChange} />,

    [FORMTYPE.INPUT]: <Input size={size} value={value} placeholder={`请输入${content.title}`} onChange={onChange} />,
    
    [FORMTYPE.RADIO]: <Radio.Group size={size} options={content.select} value={value} onChange={onChange} disabled={type === OPERATION.DISPLAY} {...content as any} />,

    [FORMTYPE.SWITCH]: <Switch onChange={val => onChange?.(val === true ? 1 : 0)} checked={typeof value === 'undefined' ? true : Boolean(value)} disabled={type === OPERATION.DISPLAY} />,

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [FORMTYPE.SELECT]: <Select size={size} style={{minWidth: 100}} allowClear options={content.select} onChange={val => {content.linked ? localStorage.setItem(content.dataIndex as string, val) : '';(onChange?.(val))}} placeholder={`请选择${content.title}`} value={value}></Select>,

    [FORMTYPE.TEXTAREA]: <Input.TextArea size={size} disabled={type === OPERATION.DISPLAY} placeholder={`请输入${content.title}`} onChange={onChange} rows={5} value={value} />
  }

  const RaeFormDisplayRender: {[key in string]: JSX.Element} = {

    [FORMTYPE.CASCADER]: <Cascader size={size} placeholder={`请输入${content.title}`} value={value} onChange={onChange} options={content.select} loadData={content.loadData} />,
    
    [FORMTYPE.CHECKBOX]: <Checkbox.Group options={content.select} disabled={true} value={value} onChange={onChange} />,

    [FORMTYPE.INPUT]: <>{value}</>,
    
    [FORMTYPE.RADIO]: <Radio.Group size={size} options={content.select} value={value} onChange={onChange} disabled={type === OPERATION.DISPLAY} {...content as any} />,

    [FORMTYPE.SWITCH]: <Switch onChange={val => onChange?.(val === true ? 1 : 0)} checked={typeof value === 'undefined' ? true : Boolean(value)} disabled={type === OPERATION.DISPLAY} />,

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [FORMTYPE.SELECT]: <>{content.select?.find(opt => opt.value === value)?.label}</>,

    [FORMTYPE.TEXTAREA]: <>{value}</>
  }

  const render: {[key in string]: {[key in string]: JSX.Element}} = {
    [OPERATION.ADD]: RaeFormEditRender,
    [OPERATION.EDIT]: RaeFormEditRender,
    [OPERATION.DISPLAY]: RaeFormDisplayRender
  }
  
  return render[type]?.[content?.[typeKey] as string] ?? <>暂无匹配项</>
};

export default RaeFormItem;