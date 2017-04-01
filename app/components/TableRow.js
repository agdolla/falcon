import React from 'react';

// Creates a tableRow containing all data passed to it
const TableRow = (props) => {
  const rows = props.entries.map((value) => <td key={value}>{value}</td>);
  return (
    <tr>
      {rows}
    </tr>
  );
};

export default TableRow;
