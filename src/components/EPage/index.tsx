import {
  ETable,
  OPERATION,
  Params,
  Responsed,
  formatSearch,
  useFetch,
} from 'raetable';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ETableProps } from '../ETable/interface';

export interface EPageProps<Record> extends ETableProps<Record> {
  reflash?: number;
  delAffair?: (data?: Params) => Promise<any>;
  addAffair?: (data?: Params) => Promise<any>;
  batchDelAffair?: (data?: Params) => Promise<any>;
  editAffair?: (data?: Params) => Promise<any>;
  formatList?: (data: Record[]) => Record[];
  getLists: (data?: Params) => Promise<any>;
  onModalClose?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function initPromise<T>(data?: Params): Promise<Responsed<T>> {
  return new Promise((resolve) => {
    resolve({ data: [] as any, code: 200, msg: '' });
  });
}

export function Epage<T>({
  addAffair,
  delAffair,
  editAffair,
  batchDelAffair,
  formatList = (data: T[]) => data,
  getLists,
  onModalClose,
  // formatList,
  ...props
}: EPageProps<T>) {
  const [params, setParams] = useState(() =>
    formatSearch(window.location.href),
  );

  const [addLoading, addFn, addRes] = useFetch(addAffair ?? initPromise<T>);

  const [batchDelLoading, batchDelFn, batchDelRes] = useFetch(
    batchDelAffair ?? initPromise<T>,
  );

  const [delLoading, delFn, delRes] = useFetch(delAffair ?? initPromise<T>);

  const [editLoading, editFn, editRes] = useFetch(editAffair ?? initPromise<T>);

  const [getLoading, getFn, getRes] = useFetch<Responsed<T[]>, any>(getLists, {
    refreshDeps: [params],
    debounceWait: 400,
  });

  const dataSource = useMemo(() => formatList?.(getRes?.data ?? []), [getRes]);

  const onConditionChange = useCallback((params: any) => setParams(params), []);

  const FN = {
    [OPERATION.ADD]: addFn,
    [OPERATION.EDIT]: editFn,
  };
  // 新增、编辑点击确认后的请求处理
  const onAffairSuccess = useCallback(
    (value: T, type: OPERATION.ADD | OPERATION.EDIT) =>
      FN[type](value).then(() => onModalClose?.()),
    [getFn, params],
  );

  // 点击确认删除的请求处理
  const onClickDeleteButton = useCallback((keys: any[]) => delFn(keys), []);

  const onBatchDelete = (keys: any[]) => batchDelFn(keys);

  useEffect(() => {
    getFn(params);
  }, [params]);

  useEffect(() => {
    if (addRes || delRes || editRes) getFn(params);
  }, [addRes, batchDelRes, delRes, editRes]);

  return (
    <ETable
      addLoading={addAffair ? addLoading : undefined}
      batchDeleteLoading={delAffair ? batchDelLoading : undefined}
      deleteLoading={delAffair ? delLoading : undefined}
      editLoading={editAffair ? editLoading : undefined}
      dataSource={dataSource}
      loading={getLoading}
      onAffairSuccess={onAffairSuccess}
      onBatchDelete={onBatchDelete}
      onModalClose={onModalClose}
      onClickDeleteButton={onClickDeleteButton}
      onConditionChange={onConditionChange}
      {...props}
    />
  );
}

export default Epage;
