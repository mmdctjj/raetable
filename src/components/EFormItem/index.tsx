import React from 'react';
import { Cascader, Checkbox, Input, Radio, Select, Switch } from "antd"
import type { EFormItemProps } from './interface';
import { FORMTYPE, OPERATION } from 'raetable';
import { useGetExtendFormItem } from '../../hooks/useExtendFormItem';

export function RaeFormItem<T> ({
  content,
  value,
  onChange,
  size,
  type,
  typeKey
}: EFormItemProps<T>) {

  if (!content?.[typeKey]) return <></>

  const items = useGetExtendFormItem()

  console.log(items)

  const disabled = type === OPERATION.DISPLAY

  const render: {[key in string]: JSX.Element} = {

    [FORMTYPE.Cascader]: <Cascader disabled={disabled} size={size} placeholder={`请输入${content.title}`} value={value} onChange={onChange} options={content.select} loadData={content.loadData} />,
    
    [FORMTYPE.Checkbox]: <Checkbox.Group disabled={disabled} options={content.select} value={value} onChange={onChange} />,

    [FORMTYPE.Input]: !disabled ? <Input size={size} value={value} placeholder={`请输入${content.title}`} onChange={onChange} /> : <>{value}</>,
    
    [FORMTYPE.Radio]: <Radio.Group disabled={disabled} size={size} options={content.select} value={value} onChange={onChange} {...content as any} />,

    [FORMTYPE.Switch]: <Switch onChange={val => onChange?.(val === true ? 1 : 0)} checked={typeof value === 'undefined' ? true : Boolean(value)} disabled={type === OPERATION.DISPLAY} />,

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [FORMTYPE.Select]: <Select size={size} style={{minWidth: 100}} allowClear options={content.select} onChange={val => {content.linked ? localStorage.setItem(content.dataIndex as string, val) : '';(onChange?.(val))}} placeholder={`请选择${content.title}`} value={value}></Select>,

    [FORMTYPE.TextArea]: <Input.TextArea size={size} disabled={type === OPERATION.DISPLAY} placeholder={`请输入${content.title}`} onChange={onChange} rows={5} value={value} />,
    
    ...items
  }

  return render[content?.[typeKey] as string] ?? <>暂无匹配项</>
};

export default RaeFormItem;