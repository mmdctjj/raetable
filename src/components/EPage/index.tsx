import React, { useCallback, useEffect, useMemo, useState } from "react"
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function initPromise<T> (data?: Params): Promise<Responsed<T>> {
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

  const [params, setParams] = useState(() => formatSearch(window.location.href))

  const [addLoading, addFn] = useFetch(addAffair)

  const [delLoading, delFn] = useFetch(delAffair)

  const [editLoading, editFn] = useFetch(editAffair)

  const [getLoading, getFn, getRes] = useFetch<Responsed<T[]>, any>(getLists, {
    refreshDeps: [params],
    debounceWait: 400,
    manual: true
  })

  const dataSource = useMemo(() => formatList?.(getRes?.data ?? []), [getRes])

  const onConditionChange = useCallback((params: any) => {
    console.log(params)
    setParams(params)
  }, [])

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

  useEffect((): any => getFn(params), [params])
  useEffect(() => console.log(params), [params])

  return (
    <ETable
      addLoading={addLoading}
      deleteLoading={delLoading}
      editLoading={editLoading}
      dataSource={dataSource}
      loading={getLoading}
      onAffairSuccess={onAffairSuccess}
      onClickDeleteButton={onClickDeleteButton}
      onConditionChange={onConditionChange}
      {...props}
    />
  )
}

export default Epage