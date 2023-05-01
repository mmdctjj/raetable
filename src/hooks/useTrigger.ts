import { useBoolean } from "ahooks"

export const useTrigger = (): [
  boolean,
  () =>void
] => {

  const [bool, { toggle }] = useBoolean()

  return [bool, toggle]
}