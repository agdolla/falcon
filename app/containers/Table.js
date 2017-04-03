// @flow
import React, { Component } from 'react';
import TableRow from '../components/TableRow';
import './Table.css';


export default class Table extends Component {

  render() {
   /* For each object in the tableData array,
  create an array of values which is passed to TableRow */
    if (!this.props.table) return <div />;
    const tableRows = this.props.table.rows.map((object) => {
      console.log(object.value);
      return (<TableRow key={object.columnName} entries={object.value} />);
    });

    return (
      <div data-tid="container">
        <table>
          <thead>
            <TableRow entries={this.props.table.columns} />
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

