// @flow
import React, { Component } from 'react';
import SideBarItem from './SideBarItem';
import styles from './SideBar.css';


export default class SideBar extends Component {

  // Refactor so that {tables} passed into SideBarItem contains only
  // names, not actual table object
  render() {
    const databases = this.props.databases.map((database) => (
      <SideBarItem
        key={database.databaseName}
        name={database.databaseName}
        onTableSelect={this.props.onTableSelect}
        tables={database.tables}
      />));

    return (
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebar}>
          <ul>
            {databases}
          </ul>
        </div>
      </div>
    );
  }
}
