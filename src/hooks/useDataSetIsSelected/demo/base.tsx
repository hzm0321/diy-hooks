/**
 * title: 基本用法
 * desc: 当表格行被选中，删除按钮才可见
 */
import React, { useMemo } from 'react';
import { DataSet, Table, Button } from 'choerodon-ui/pro';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';

import useDataSet from '../../useDataSet';
import useDataSetIsSelected from '../index';

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

const TableDS = () => ({
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
});

export default () => {
  const tableDs = useDataSet(() => new DataSet(TableDS()));
  const isDeleteSelected = useDataSetIsSelected(tableDs);

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
    <div>
      <Button
        icon="delete"
        color={ButtonColor.primary}
        disabled={!isDeleteSelected}
      >
        删除
      </Button>
      <Table
        key="basic"
        rowNumber={({ text }) => `#${text}`}
        dataSet={tableDs}
        columns={columns}
      />
    </div>
  );
};
