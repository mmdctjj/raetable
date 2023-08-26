import {
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
} from 'antd';
import { FORMTYPE, OPERATION } from 'raetable';
import React, { useEffect, useState } from 'react';
import { useGetExtendFormItem } from '../../hooks/useExtendFormItem';
import { useGetMediator, useMediator } from '../../hooks/useMediator';
import type { EFormItemProps } from './interface';

export function RaeFormItem<T>(props: EFormItemProps<T>) {
  const [isMouted, setIsMouted] = useState(false);

  const { content, value, onChange, linkeds, size, type, typeKey } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { conditionType, affairType, dataIndex, linked, more, ...props__ } =
    content;

  useMediator(
    linkeds?.includes(content.key as string)
      ? (content.key as string)
      : undefined,
    value,
  );

  const props_ = { value, onChange, size, ...props__ };

  const disabled = type === OPERATION.DISPLAY;

  const render: { [key in string]: JSX.Element } = {
    [FORMTYPE.AutoComplete]: (
      <AutoComplete disabled={disabled} {...(props_ as any)} />
    ),

    [FORMTYPE.Cascader]: (
      <Cascader
        disabled={disabled}
        placeholder={`请输入${content.title}`}
        options={content.options}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.Checkbox]: (
      <Checkbox.Group
        disabled={disabled}
        options={content.options}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.ColorPicker]: (
      <ColorPicker disabled={disabled} {...(props_ as any)} />
    ),

    [FORMTYPE.DatePicker]: (
      <DatePicker disabled={disabled} {...(props_ as any)} />
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
        options={content.options}
        {...(props_ as any)}
      />
    ),

    [FORMTYPE.Rate]: <Rate disabled={disabled} {...(props_ as any)} />,

    [FORMTYPE.RangePicker]: (
      <DatePicker.RangePicker disabled={disabled} {...(props_ as any)} />
    ),

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
        options={content.options}
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
      <>{content.options?.find((item) => item.value === value)?.label}</>
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

    [FORMTYPE.Transfer]: <Transfer disabled={disabled} {...(props_ as any)} />,

    [FORMTYPE.TreeSelect]: (
      <TreeSelect disabled={disabled} {...(props_ as any)} />
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

  const isRender = useGetMediator(linked);

  useEffect(() => {
    if (isMouted) {
      onChange?.(undefined);
    }
  }, [isRender]);

  useEffect(() => {
    setTimeout(() => setIsMouted(true), 1000);
  }, []);

  if (!content?.[typeKey]) return <></>;

  return render[content?.[typeKey] as string] ?? <>暂无匹配项</>;
}

export default RaeFormItem;
