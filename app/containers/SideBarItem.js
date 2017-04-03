// @flow
import React, { Component } from 'react';
import styles from './SideBar.css';
import type { TableType } from '../types/tableType';
import '../app.global.css';

type Props = {
  name: string,
  tables: Array<TableType>,
  onTableSelect: (selectedTable: TableType) => void
};

export default class SideBarItem extends Component {
  state: {
    tablesVisible: boolean
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      tablesVisible: false
    };
  }

  onDatabaseClick = () => {
    this.setState({ tablesVisible: !this.state.tablesVisible });
  }

  render() {
    const tables = this.props.tables.map((table: {tableName: string}) =>
      <li key={table.tableName}>
        <a
          href="#"
          onClick={() => this.props.onTableSelect(table)}
          className={styles.sidebarItem}
        >
          <i className="fa fa-table" aria-hidden="true" /> {table.tableName}
        </a>
      </li>
    );

    return (
      <div>
        <li className={styles.sidebarItem}>
          <a onClick={this.onDatabaseClick} href="#">
            {this.state.tablesVisible ?
              <i className="fa fa-caret-down" aria-hidden="true" /> :
              <i className="fa fa-caret-right" aria-hidden="true" /> }
            &nbsp; <i className="fa fa-database" aria-hidden="true" />
            &nbsp; {this.props.name}
          </a>
        </li>
        <ul>
          {this.state.tablesVisible ? tables : null}
        </ul>
      </div>
    );
  }
}
