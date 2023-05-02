import { ETitle, ETitleProps } from "raetable"
import React from "react"
import { useMemo, useState } from "react"

export function useTitle (option: ETitleProps) {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <ETitle {...opt} />, [opt])

  return [opt, setOpt, dom]
}