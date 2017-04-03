import React from 'react';

const TableRow = ({ rowEntries }: Object<Array<string>>) => {
  const rows = rowEntries.map((value) => <td key={value}>{value}</td>);
  return (
    <tr>
      {rows}
    </tr>
  );
};

export default TableRow;
