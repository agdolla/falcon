import React from 'react';

const TableRow = (props) => (
  <tr>
    <td>{props.input}</td>
    <td>{props.time}</td>
    <td>{props.date}</td>
  </tr>
);

export default TableRow;
