import { useRequest } from "ahooks"

export interface Params {
  [key: string]: string | number | boolean | object
}

export interface Responsed<T> {
  data: T
  code: number
  msg?: string
}

export function useFetch<TData, TParams extends any[]> (
  fn: any,
  option?: any
): [loading: boolean, run: (...params: TParams) => Promise<any>,  data?: TData] {

  const { data, run, loading } = useRequest<TData, TParams>(fn, option ?? {})

  return [loading, run as any, data]
}