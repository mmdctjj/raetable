import { EAnimation, EAnimationProps } from "raetable"
import React, { useMemo, useState } from "react"

export const useAnimation = (option: EAnimationProps) => {

  const [opt, setOpt] = useState(option ?? {})

  const dom = useMemo(() => () => <EAnimation {...opt} />, [opt])

  return [opt, setOpt, dom]
}