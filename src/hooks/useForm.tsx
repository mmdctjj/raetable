import { EForm, EFormProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function useForm<T> (option: EFormProps<T>) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <EForm {...opt} />, [opt])

  return [opt, setOpt, dom]
}