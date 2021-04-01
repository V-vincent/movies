import React from 'react';
import style from '../common/common.css';
import classnames from 'classnames/bind';
const cls = classnames.bind(style);

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item}
          onClick={() => onItemSelect(item)}
          className={item === selectedItem ? cls('cursor-pointer list-group-item active') : cls('cursor-pointer list-group-item')}
        >{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;