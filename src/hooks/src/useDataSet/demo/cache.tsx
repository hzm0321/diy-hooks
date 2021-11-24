/**
 * title: 使用缓存
 * desc: 对初始化后的 DataSet 实例根据 key 值进行缓存
 */
import React, { useMemo, useState } from 'react';
import { DataSet, Table, Button } from 'choerodon-ui/pro';
import { message } from 'choerodon-ui';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { useDataSet } from 'diy-hooks';

const tempTableData = [
  {
    userid: 1,
    name: 'hzm',
    age: 24,
    sex: '男',
    enable: true,
  },
];

const Component = () => {
  const tableDs = useDataSet(
    () =>
      new DataSet(
        (function () {
          message.success('初始化了 DataSet 实例');
          return {
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
          };
        })(),
      ),
    [],
    'table',
  ); // 设置缓存 key 为 table

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

export default () => {
  const [isMount, setIsMount] = useState(false);

  return (
    <div>
      <Button color={ButtonColor.primary} onClick={() => setIsMount((v) => !v)}>
        点击{isMount ? '卸载' : '挂载'} mount 组件
      </Button>
      {isMount && <Component />}
    </div>
  );
};
