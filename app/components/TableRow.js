// @flow
import React from 'react';


const TableRow = ({ rowEntries }: {rowEntries: Array<any>}) => {
  const rows = rowEntries.map((value) => <td key={value}>{value}</td>);
  return (
    <tr>
      {rows}
    </tr>
  );
};

export default TableRow;
