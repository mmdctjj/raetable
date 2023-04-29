import React from 'react';
import { Cascader, Input, Radio, Select, Switch } from "antd"
import type { RaeFormProps } from './interface';
import { FORMTYPE, OPERATION } from './constants';

export function RaeForm<T> ({
  content,
  value,
  onChange,
  type,
  typeKey
}: RaeFormProps<T>) {

  if (!content?.[typeKey]) return <></>

  const RaeFormEditRender: {[key in string]: JSX.Element} = {

    [FORMTYPE.CASCADER]: <Cascader placeholder={`请输入${content.title}`} value={value} onChange={onChange} options={content.select} loadData={content.loadData} />,
    
    [FORMTYPE.INPUT]: <Input value={value} placeholder={`请输入${content.title}`} onChange={onChange} />,
    
    [FORMTYPE.RADIO]: <Radio.Group options={content.select} value={value} onChange={onChange} disabled={type === OPERATION.DISPLAY} {...content} />,

    [FORMTYPE.SWITCH]: <Switch onChange={val => onChange?.(val === true ? 1 : 0)} checked={typeof value === 'undefined' ? true : Boolean(value)} disabled={type === OPERATION.DISPLAY} />,

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [FORMTYPE.SELECT]: <Select style={{minWidth: 100}} allowClear options={content.select} onChange={val => {content.linked ? localStorage.setItem(content.dataIndex as string, val) : '';(onChange?.(val))}} placeholder={`请选择${content.title}`} value={value}></Select>,

    [FORMTYPE.TEXTAREA]: <Input.TextArea disabled={type === OPERATION.DISPLAY} placeholder={`请输入${content.title}`} onChange={onChange} rows={5} value={value} />
  }
  
  return RaeFormEditRender[content[typeKey] as string] ?? <>暂无匹配项</>
};

export default RaeForm;