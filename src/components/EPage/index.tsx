import React, { useCallback, useEffect, useMemo } from "react"
import { ETableProps } from "../ETable/interface"
import { ETable, OPERATION, formatSearch } from "raetable"
import { useFetch } from "raetable"
import { Params, Responsed } from "raetable"

export interface EPageProps<Record> extends ETableProps<Record> {
  // affairName?: string
  // affairWidth?: number
  reflash?: number
  // columns: ETableColumnProps<Record>
  delAffair?: (data?: Params) => Promise<Responsed<Record>>
  addAffair?: (data?: Params) => Promise<Responsed<Record>>
  editAffair?: (data?: Params) => Promise<Responsed<Record>>
  // extend?: ExtendType[]
  // extendAffair?: ReactNode
  // extendForm?: ReactNode
  formatList?: (data: Record[]) => Record[]
  getLists: (data?: Params) => Promise<Responsed<Record[]>>
  onRowSelect?: (data: any[]) => void,
  // showAffair?: boolean
  // showDelete?: boolean
  // showAdd?: boolean
  // showBack?: boolean
  // title?: string,
}

function initPromise<T> (data?: Params): Promise<Responsed<T>> {
  console.log(data)
  return new Promise((resolve) => {resolve({data: [] as any, code: 200, msg: ''})})
}

export function Epage<T> ({
  addAffair = initPromise<T>,
  delAffair = initPromise<T>,
  editAffair = initPromise<T>,
  formatList = (data: T[]) => data,
  getLists,
  // formatList,
  ...props
}: EPageProps<T>) {

  const [, addLoading, addFn] = useFetch<Params, T>(addAffair)
  const [, delLoading, delFn] = useFetch<Params, T>(delAffair)
  const [, editLoading, editFn] = useFetch<Params, T>(editAffair)
  const [getRes, getLoading, getFn] = useFetch<Params, T[]>(getLists)

  const params = useMemo(() => formatSearch(window.location.href), [window.location.href])

  const dataSource = useMemo(() => formatList?.(getRes.data) ?? [], [getRes])

  const FN = {
    [OPERATION.ADD]: addFn,
    [OPERATION.EDIT]: editFn
  }
  // 新增、编辑点击确认后的请求处理
  const onAffairSuccess = useCallback((
    value: T,
    type: OPERATION.ADD | OPERATION.EDIT
  ) => FN[type](value).then(() => getFn(params)), [getFn, params])

  // 点击确认删除的请求处理
  const onClickDeleteButton = useCallback((keys: any[]) => delFn(keys), [])

  // useEffect((): any => console.log(params), [params])
  useEffect((): any => getFn(params), [params])
  useEffect((): any => console.log(getRes), [getRes])

  return (
    <ETable
      addLoading={addLoading}
      deleteLoading={delLoading}
      editLoading={editLoading}
      dataSource={dataSource}
      loading={getLoading}
      onAffairSuccess={onAffairSuccess}
      onClickDeleteButton={onClickDeleteButton}
      {...props}
    />
  )
}

export default Epage