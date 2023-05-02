import { ETable, ETableProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function useTable<T> (option: ETableProps<T>) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <ETable {...opt} />, [opt])

  return [opt, setOpt, dom]
}