// @flow
import React, { Component } from 'react';
import styles from './NavBar.css';

type AppState = {

};

export default class NavBar extends Component {

  state: AppState;

  constructor(props: {}) {
    super(props);
    this.state = {
      sections: ['Link1', 'Link2', 'Link3']
    };
  }

  render() {
    const links = this.state.sections.map((section) =>
      <li key={section}><a href="#">{section}</a></li>);

    return (
      <div className={styles.navbar}>
        <ul>
          {links}
        </ul>
      </div>
    );
  }


}

