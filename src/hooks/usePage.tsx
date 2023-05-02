import { EPage, EPageProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function usePage<T> (option: EPageProps<T>) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <EPage {...opt} />, [opt])

  return [opt, setOpt, dom]
}