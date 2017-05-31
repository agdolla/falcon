// @flow
import React, { Component } from 'react';
import { db } from 'falcon-core';
import Table from '../containers/Table';
import SideBar from '../containers/SideBar';
import NavBar from '../containers/NavBar';
import Tab from '../components/Tab';
import styles from './Home.css';
import type { TableType } from '../types/tableType';
import type { DatabaseType } from '../types/databaseType';


export default class HomePage extends Component {

  state: {
    selectedTable: ?TableType,
    databases: Array<DatabaseType>
  };

  async getTableData() {
    const serverInfo = {
      client: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'sqlectron',
      multipleStatements: true
    };

    const serverSession = db.createServer(serverInfo);
    const connection = await serverSession.createConnection('sqlectron');
    await connection.connect(serverInfo);

    const tables = await connection.listTables();
    const tableKeys = await connection.getTableKeys('recordmetadata');
    const tableValues = await connection.getTableValues('recordmetadata');
    const databases = await connection.listDatabases();

    return { tables, tableKeys, tableValues, databases };
  }

  async setTableData() {
    const { tables, tableKeys, tableValues, databases } = await this.getTableData();
    console.log('tables, tableKeys, tableValues, databases');
    console.log(tables);
    console.log(tableKeys);
    console.log(tableValues);
    console.log(databases);
  }

  constructor(props: Object = {}) {
    super(props);

    this.state = {
      databases: []
    };

    const promise = this.getTableData();
    // Not sure how to handle table contents since only given table names
    // of one database
    promise.then(result => {
      const { tables, tableKeys, tableValues, databases } = result;

      const tableObjs = tables.map(table => ({
        databaseName: 'sqlelectron',
        tableName: table.name,
        columns: [],
        rows: []
      }));

      this.setState({
        databases: [
          {
            databaseName: 'sqlelectron',
            tables: tableObjs
          }
        ]
      });
    })
      .catch(reason => {
        console.log(reason);
      });
  }

  render() {
    if (!this.state.databases) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <NavBar />
        <SideBar
          databases={this.state.databases}
          onTableSelect={(selectedTable) => this.setState({ selectedTable })}
        />
        <Tab table={this.state.selectedTable} />

        <div className={styles.container} data-tid="container">
          <Table table={this.state.selectedTable} />
        </div>
      </div>
    );
  }
}
