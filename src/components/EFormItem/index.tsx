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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { conditionType, affairType, dataIndex, ...props__ } = content;

  const props_ = { value, onChange, size, ...props__ };

  const disabled = type === OPERATION.DISPLAY;

  const render: { [key in string]: JSX.Element } = {
    [FORMTYPE.Cascader]: (
      <Cascader
        disabled={disabled}
        placeholder={`请输入${content.title}`}
        options={content.select}
        {...(content as any)}
      />
    ),

    [FORMTYPE.Checkbox]: (
      <Checkbox.Group
        disabled={disabled}
        options={content.select}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.Input]: !disabled ? (
      <Input
        value={value}
        placeholder={`请输入${content.title}`}
        onChange={onChange}
        {...(props_ as any)}
      />
    ) : (
      <>{value}</>
    ),

    [FORMTYPE.InputNumber]: !disabled ? (
      <InputNumber {...(props_ as any)} />
    ) : (
      <>{value}</>
    ),

    [FORMTYPE.Radio]: (
      <Radio.Group
        disabled={disabled}
        options={content.select}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.Rate]: <Rate disabled={disabled} {...(props_ as any)} />,

    [FORMTYPE.Switch]: (
      <Switch
        onChange={(val) => onChange?.(val === true ? 1 : 0)}
        checked={typeof value === 'undefined' ? true : Boolean(value)}
        disabled={type === OPERATION.DISPLAY}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.Slider]: <Slider disabled={disabled} {...(props_ as any)} />,

    [FORMTYPE.Select]: !disabled ? (
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      <Select
        style={{ minWidth: 100 }}
        allowClear
        options={content.select}
        onChange={(val) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          content.linked
            ? localStorage.setItem(content.dataIndex as string, val)
            : '';
          onChange?.(val);
        }}
        placeholder={`请选择${content.title}`}
        value={value}
        {...(props_ as any)}
      ></Select>
    ) : (
      <>{content.select?.find((item) => item.value === value)?.label}</>
    ),

    [FORMTYPE.TimePicker]: (
      <TimePicker disabled={disabled} {...(props_ as any)} />
    ),

    [FORMTYPE.TextArea]: !disabled ? (
      <Input.TextArea
        disabled={disabled}
        placeholder={`请输入${content.title}`}
        rows={5}
        {...(props_ as any)}
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
