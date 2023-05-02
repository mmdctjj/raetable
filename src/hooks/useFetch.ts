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
): [loading: boolean, runAsync: (...params: TParams) => Promise<any>,  data?: TData] {

  const { data, runAsync, loading } = useRequest<TData, TParams>(fn, option ? {manual: true, ...option} : {manual: true})

  return [loading, runAsync, data]
}