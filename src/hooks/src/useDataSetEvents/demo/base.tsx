/**
 * title: 基本用法
 * desc: 监听 DataSet 的 `select`、`unSelect` 事件
 */
import React, { useMemo } from 'react';
import { DataSet, Table } from 'choerodon-ui/pro';
import { message } from 'choerodon-ui';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { useDataSet, useDataSetEvents } from 'diy-hooks';

const tempTableData = [
  {
    userid: 1,
    name: 'hzm',
    age: 24,
    sex: '男',
    enable: true,
  },
  {
    userid: 2,
    name: 'xxx',
    age: 24,
    sex: '女',
    enable: false,
  },
];

export default () => {
  const tableDs = useDataSet(
    () =>
      new DataSet({
        primaryKey: 'userid',
        name: 'user',
        autoQuery: false,
        pageSize: 5,
        data: tempTableData,
        fields: [
          {
            name: 'userid',
            type: FieldType.string,
            label: '编号',
            required: true,
          },
          {
            name: 'name',
            type: FieldType.intl,
            label: '姓名',
          },
          {
            name: 'age',
            type: FieldType.number,
            label: '年龄',
            max: 100,
            step: 1,
          },
          {
            name: 'sex',
            type: FieldType.string,
            label: '性别',
            required: true,
          },
          { name: 'enable', type: FieldType.boolean, label: '是否开启' },
        ],
      }),
  );
  useDataSetEvents(tableDs, ['select', 'unSelect'], ({ record }) => {
    message.success(`姓名：${record.get('name')} 被点击`);
  });

  const columns = useMemo(() => {
    return [
      { name: 'userid' },
      { name: 'name', editor: true },
      { name: 'age', editor: true },
      { name: 'sex', editor: true },
      { name: 'enable', editor: true },
    ];
  }, []);
  return (
    <Table
      key="basic"
      rowNumber={({ text }) => `#${text}`}
      dataSet={tableDs}
      columns={columns}
    />
  );
};
