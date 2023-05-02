import { EFormItem, EFormItemProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function useFormItem<T> (option: EFormItemProps<T>) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <EFormItem {...opt} />, [opt])

  return [opt, setOpt, dom]
}