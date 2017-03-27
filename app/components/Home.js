// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import Table from '../containers/Table';
import SideBar from '../containers/SideBar';
import NavBar from '../containers/NavBar';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <div className={styles.container} data-tid="container">
          <Table />
        </div>
      </div>
    );
  }
}
