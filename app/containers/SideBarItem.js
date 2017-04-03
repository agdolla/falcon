import React, { Component } from 'react';
import styles from './SideBar.css';

export default class SideBarItem extends Component {
  constructor(props: {name: string, tables: Array<Object>}) {
    super(props);
    this.state = {
      tablesVisible: false
    };
    this.onDatabaseClick = this.onDatabaseClick.bind(this);
  }

  onDatabaseClick() {
    this.setState({ tablesVisible: !this.state.tablesVisible });
  }

  render() {
    const tables = this.props.tables.map((table: {tableName: string}) =>
      <li onClick={() => this.props.onTableSelect(table)} key={table.tableName}>
        <a className={styles.sidebarItem}>{table.tableName}</a>
      </li>
    );

    return (
      <div>
        <li onClick={this.onDatabaseClick} className={styles.sidebarItem}>
          <a href="#">{this.props.name}</a>
        </li>
        <ul>
          {this.state.tablesVisible ? tables : null}
        </ul>
      </div>
    );
  }
}
