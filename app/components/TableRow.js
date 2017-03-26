import React from 'react';

// Creates a tableRow containing all data passed to it
const TableRow = (props: { entries: Array<string> }) => {
  const entries = props.entries.map((value) => <td key={value}>{value}</td>);
  return (
    <tr>
      {entries}
    </tr>
  );
};

export default TableRow;
