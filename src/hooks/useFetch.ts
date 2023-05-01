import { useCallback, useState } from "react"

export interface Params {
  [key: string]: string | number | boolean | object
}

export interface Responsed<T> {
  data: T
  code: number
  msg?: string
}

export function useFetch<ParamsProps, ResultProps> (
  fn: (data?: ParamsProps) => Promise<Responsed<ResultProps>>
): [
  res: Responsed<ResultProps>,
  loading: boolean,
  callback: (...args: any) => Promise<Responsed<ResultProps>>
] {

  const [res, setRes] = useState<any>({})

  const [loading, setLoading] = useState(false)

  const callback: (...args: any) => Promise<Responsed<ResultProps>> = useCallback((...args: any) => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      fn(args)
        .then(res => {
          setRes(res)
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => setLoading(false))
    })
  }, [fn])

  return [res, loading, callback]
}