import React from 'react';
const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <td key={column.path || column.key}>
            {column.label}
          </td>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;