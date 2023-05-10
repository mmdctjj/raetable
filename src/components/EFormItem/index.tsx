import {
  Cascader,
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
} from 'antd';
import { FORMTYPE, OPERATION } from 'raetable';
import React from 'react';
import { useGetExtendFormItem } from '../../hooks/useExtendFormItem';
import type { EFormItemProps } from './interface';

export function RaeFormItem<T>(props: EFormItemProps<T>) {
  const { content, value, onChange, size, type, typeKey } = props;

  const disabled = type === OPERATION.DISPLAY;

  const render: { [key in string]: JSX.Element } = {
    [FORMTYPE.Cascader]: (
      <Cascader
        disabled={disabled}
        placeholder={`请输入${content.title}`}
        {...props}
        options={content.select}
        {...(content as any)}
      />
    ),

    [FORMTYPE.Checkbox]: (
      <Checkbox.Group
        disabled={disabled}
        options={content.select}
        {...props}
        {...(content as any)}
      />
    ),

    [FORMTYPE.Input]: !disabled ? (
      <Input
        value={value}
        placeholder={`请输入${content.title}`}
        onChange={onChange}
        {...(content as any)}
      />
    ) : (
      <>{value}</>
    ),

    [FORMTYPE.InputNumber]: !disabled ? (
      <InputNumber {...props} {...(content as any)} />
    ) : (
      <>{value}</>
    ),

    [FORMTYPE.Radio]: (
      <Radio.Group
        disabled={disabled}
        options={content.select}
        {...props}
        {...(content as any)}
      />
    ),

    [FORMTYPE.Rate]: (
      <Rate disabled={disabled} {...props} {...(content as any)} />
    ),

    [FORMTYPE.Switch]: (
      <Switch
        onChange={(val) => onChange?.(val === true ? 1 : 0)}
        checked={typeof value === 'undefined' ? true : Boolean(value)}
        disabled={type === OPERATION.DISPLAY}
        {...(content as any)}
      />
    ),

    [FORMTYPE.Slider]: (
      <Slider {...props} disabled={disabled} {...(content as any)} />
    ),

    [FORMTYPE.Select]: !disabled ? (
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      <Select
        style={{ minWidth: 100 }}
        allowClear
        options={content.select}
        onChange={(val) => {
          content.linked
            ? localStorage.setItem(content.dataIndex as string, val)
            : '';
          onChange?.(val);
        }}
        placeholder={`请选择${content.title}`}
        value={value}
        {...(content as any)}
      ></Select>
    ) : (
      <>{content.select?.find((item) => item.value === value)?.label}</>
    ),

    [FORMTYPE.TimePicker]: (
      <TimePicker disabled={disabled} {...props} {...(content as any)} />
    ),

    [FORMTYPE.TextArea]: !disabled ? (
      <Input.TextArea
        disabled={disabled}
        placeholder={`请输入${content.title}`}
        rows={5}
        {...props}
        {...(content as any)}
      />
    ) : (
      <pre>{value}</pre>
    ),
  };

  const items: { [key: string]: (data: EFormItemProps<T>) => React.ReactNode } =
    useGetExtendFormItem();

  Object.keys(items).forEach((key: string) => {
    Object.defineProperty(render, key, {
      get() {
        return items[key]({ content, value, onChange, size, type, typeKey });
      },
    });
  });

  if (!content?.[typeKey]) return <></>;

  return render[content?.[typeKey] as string] ?? <>暂无匹配项</>;
}

export default RaeFormItem;
