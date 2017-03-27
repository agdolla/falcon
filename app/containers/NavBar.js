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
      sections: ['']
    };
  }

  render() {
    return (
      <div className={styles.navbar}>
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </div>
    );
  }


}

