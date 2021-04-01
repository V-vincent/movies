import React from 'react';
import style from '../common/common.css';
import classnames from 'classnames/bind';
const cls = classnames.bind(style);

const TableHeader = ({ columns, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <td key={column.path || column.key} onClick={() => onSort(column)} className={cls('cursor-pointer')}>
            {column.label}
          </td>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;