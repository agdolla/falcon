// @flow
import React, { Component } from 'react';
import TableRow from '../components/TableRow';
import type { TableType } from '../types/tableType';
import styles from './Table.css';


export default class Table extends Component {
  props: {
    table: ?TableType
  };
  render() {
    if (!this.props.table) return <span className={styles.placeholder}> Select a table</span>;

    const tableRows = this.props.table.rows.map((object) =>
    (<TableRow key={object.columnName} rowEntries={object.value} />));


    return (
      <div data-tid="container">
        <table>
          <thead>
            {/* $FlowFixMe: Shouldn't worry about null since we would have
            returned a temporary value. Refactor to fix flow error */}
            <TableRow rowEntries={this.props.table.columns} />
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

