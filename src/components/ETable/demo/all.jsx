import { ETable } from 'raetable';
import { useCallback, useState } from 'react';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Switch',
    conditionType: 'Select',
    options: [
      {
        key: 1,
        value: true,
        label: '是',
      },
      {
        key: 2,
        value: false,
        label: '否',
      },
    ],
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    affairType: 'Select',
    options: [
      {
        value: 1,
        label: '牛肉',
        key: 1,
      },
      {
        value: 2,
        label: '鸡蛋',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'gender',
    key: 'gender',
    title: 'gender',
    conditionType: 'Select',
    options: [
      {
        value: 1,
        label: '男',
        key: 1,
      },
      {
        value: 2,
        label: '女',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'test',
    key: 'test',
    title: 'test',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'Input',
  },
];

const datas = [
  {
    name: 'mmdctjj',
    age: 18,
    eat: 1,
    admin: true,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'xiaofeng',
    age: 28,
    eat: 2,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'zhuming',
    age: 12,
    eat: 1,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
];

const useMockData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(() => {
    setLoading(true);
    setData([]);
    setTimeout(() => {
      setData(datas);
      setLoading(false);
    }, 1500);
  }, []);

  return [data, loading, getData];
};
export default () => {
  const [dataSource, loading, fetch] = useMockData();
  const [deleteRes, deleteLoading, deleteFetch] = useMockData();
  const [addRes, addLoading, addFetch] = useMockData();
  const [editRes, editLoading, editFetch] = useMockData();

  const onClickDeleteButton = useCallback(
    (keys) =>
      new Promise((resolve) => {
        deleteFetch(keys);
        setTimeout(() => {
          resolve({});
          fetch();
        }, 1000);
      }),
  );

  const onAffairSuccess = useCallback((value) => {
    addFetch();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
        fetch();
      }, 1000);
    });
  }, []);

  return (
    <ETable
      affairName="靓仔"
      affairWidth={900}
      affairContainerType="drawer"
      addLoading={addLoading}
      backPath="/raetable/guide"
      columns={columns}
      dataSource={dataSource}
      editLoading={editLoading}
      loading={loading}
      deleteLoading={deleteLoading}
      onAffairSuccess={onAffairSuccess}
      onConditionChange={fetch}
      onClickDeleteButton={onClickDeleteButton}
      pageTitle="靓仔管理"
      showBatch={true}
      rowSelection={{
        type: 'Checkbox',
      }}
      rowKey="name"
    />
  );
};
