import { ECondition, EConditionProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function useCondition<T> (option: EConditionProps<T>) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <ECondition {...opt} />, [opt])

  return [opt, setOpt, dom]
}