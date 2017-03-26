// @flow
import React, { Component } from 'react';
import TableRow from '../components/TableRow';
import './Table.css';


export default class Table extends Component {
  constructor(props) {
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
        name: 'Alex',
        company: 'Appel',
        location: 'TX'
      }],
    };
  }


  render() {
    const tableHeader = this.state.headerData.map((headerEntry) =>
      <th>
        {headerEntry}
      </th>
    );

    const tableRows = this.state.tableData.map((object) => { // for each object in the array, return a containing data
      const values = Object.values(object);                  // Is an array of values in the current object
      const row = values.map((value) =>                    //  Contains a <td> holding a value
        (<td>
          {value}
        </td>));
      return (
        <tr>
          {row}
        </tr>
      );
    });

    return (
      <div data-tid="container">
        <table>
          <thead>
            <tr>
              {tableHeader}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

/* const tableContent = this.state.tableHeaders.map((string) =>
      <TableRow
        input={input}
        time={`${date.getHours()}:${date.getMinutes()}.${date.getSeconds()}`}
        date={date.toDateString()}
        key={date.getTime()}
      />
    );*/
