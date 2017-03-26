// @flow
import React, { Component } from 'react';
import TableRow from '../components/TableRow';
import './Table.css';

type AppState = {
    headerData: Array<string>,
    tableData: Array<Object>
};

export default class Table extends Component {

  state: AppState;

  constructor(props: {}) {
    super(props);
    this.state = {
      headerData: ['name', 'company', 'location'],
      tableData: [{
        name: 'Alex',
        company: 'Joogle',
        location: 'NY'
      },
      {
        name: 'David',
        company: 'Joogle',
        location: 'CA'
      },
      {
        name: 'Tom',
        company: 'Appel',
        location: 'TX'
      }],
    };
  }

  render() {
   /* For each object in the tableData array,
  create an array of values which is passed to TableRow */
    const tableRows = this.state.tableData.map((object) => {
      const values = Object.values(object);
      return (<TableRow key={object.name} entries={values} />);
    });

    return (
      <div data-tid="container">
        <table>
          <thead>
            <TableRow entries={this.state.headerData} />
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

