import { useEffect, useState } from "react"
import { mediator } from "../components/EFormItem/mediator"

export const useExtendFormItem = (extendFormItem: {[key in string]: JSX.Element}) => {

  const sub = mediator.install({})

  useEffect(() => sub.publish('extendFormItem', extendFormItem), [extendFormItem])

  return
}

export const useGetExtendFormItem = () => {

  const sub = mediator.install({})

  const [items, setItems] = useState({})

  sub.subscribe('extendFormItem', (value: any) => setItems(value))

  return items
}