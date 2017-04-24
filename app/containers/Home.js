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

    console.log(tables, tableKeys, tableValues, databases);
    return;

    this.setState({
      selectedTable: null,
      databases: [
        {
          databaseName: 'databaseFoo',
          tables: [
            {
              databaseName: 'databaseFoo',
              tableName: 'tableFoo',
              columns: [
                'col1', 'col2', 'col3'
              ],
              rows: [
                {
                  columnName: 'col1',
                  value: [2, 5, 9]
                },
                {
                  columnName: 'col2',
                  value: [8, 1, 12]
                },
                {
                  columnName: 'col3',
                  value: [8, 0, 30]
                }
              ]
            }
          ]
        }
      ]
    });
  }

  constructor(props: Object = {}) {
    super(props);

    this.setTableData();

    this.state = {
      selectedTable: null,
      databases: [
        {
          databaseName: 'databaseFoo',
          tables: [
            {
              databaseName: 'databaseFoo',
              tableName: 'tableFoo',
              columns: [
                'col1', 'col2', 'col3'
              ],
              rows: [
                {
                  columnName: 'col1',
                  value: [2, 5, 9]
                },
                {
                  columnName: 'col2',
                  value: [8, 1, 12]
                },
                {
                  columnName: 'col3',
                  value: [8, 0, 30]
                }
              ]
            }
          ]
        },
        {
          databaseName: 'databaseBar',
          tables: [
            {
              databaseName: 'databaseBar',
              tableName: 'tableBar',
              columns: [
                'col1', 'col2', 'col3'
              ],
              rows: [
                {
                  columnName: 'col1',
                  value: [39, 12, 4]
                },
                {
                  columnName: 'col2',
                  value: [2, 1, 4]
                },
                {
                  columnName: 'col3',
                  value: [5, 15, 72]
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
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
