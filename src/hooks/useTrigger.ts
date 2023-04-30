import { Dispatch, useCallback, useState } from "react"

export const useTrigger: (initValue?: boolean) => [state: boolean, trigger: Dispatch<boolean>] = (initValue) => {

  const [state, setState] = useState(initValue !== undefined ? initValue : false)

  const trigger: Dispatch<boolean> = useCallback((bool?: boolean) => setState(curr => bool !== undefined ? bool : !curr), [])

  return [state, trigger]
}