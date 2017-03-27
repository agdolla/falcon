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
          tables: ['Table1', 'Table2']
        }
      ]
    };
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <ul>
          <li className={styles.sidebarItem}><a href="#">DB 1</a></li>
          <li className={styles.sidebarItem}><a href="#">DB 2</a></li>
          <li className={styles.sidebarItem}><a href="#">DB 3</a></li>
          <li className={styles.sidebarItem}><a href="#">DB 4</a></li>
        </ul>
      </div>
    );
  }

}

