import React from 'react';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Website',
  dataIndex: 'website',
}, {
  title: 'Operation',
  render: (text, { id }) => (
    <span className="styles.operation">
      <a href="">Edit</a>
      <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
        <a href="">Delete</a>
      </Popconfirm>
    </span>
  ),
},
];

const data = [{
  key: '1',
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  website: 'hildegard.org',
}, {
  key: '2',
  name: 'Ervin Howell',
  email: 'Shanna@melissa.tv',
  website: 'anastasia.net',
}, {
  key: '3',
  name: 'Clementine Bauch',
  email: 'Nathan@yesenia.net',
  website: 'ramiro.info',
},
];

function Users() {
  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          Pagination={false}
        />
      </div>
    </div>
  );
}

export default Users;
