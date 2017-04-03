// @flow
import React, { Component } from 'react';
import Table from '../containers/Table';
import SideBar from '../containers/SideBar';
import NavBar from '../containers/NavBar';
import styles from './Home.css';

export default class HomePage extends Component {

  state: {
    selectedTable: ?string,
    databases: Array<{
      databaseName: string,
      tables: Array<{
        columns: Array<string>
      }>
    }>
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedTable: null,
      databases: [
        {
          databaseName: 'databaseFoo',
          tables: [
            {
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
          onTableSelect={selectedTable => this.setState({ selectedTable })}
        />
        <div className={styles.container} data-tid="container">
          <Table table={this.state.selectedTable} />
        </div>
      </div>
    );
  }
}
