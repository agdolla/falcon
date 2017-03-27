// @flow
import React, { Component } from 'react';
import styles from './SideBar.css';

type AppState = {

};

export default class SideBar extends Component {

  state: AppState;

  constructor(props: {}) {
    super(props);
    this.state = {
      databases: [
        { name: 'Database1',
          tables: ['Table1a', 'Table2b']
        },
        { name: 'Database2',
          tables: ['Table2a', 'Table2b']
        },
        { name: 'Database3',
          tables: ['Table3a', 'Table3b']
        }
      ]
    };
  }


  // After fixing styling problem, refactor so that sidebar elements are a list
  // and that tables are listed under their databases
  render() {
    const databases = this.state.databases.map((database) => {
      const databaseName = database.name;
      return (<a className={styles.sidebarItem} href="#">{databaseName}</a>);
    });
      
    return (
      <div className={styles.sidebar}>
        {databases}
      </div>
    );
  }
}

