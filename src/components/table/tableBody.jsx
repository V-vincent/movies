import React from 'react';
import _ from "lodash";

const TableBody = ({ columns, movies }) => {
  const renderCell = (movie, column) => {
    if (column.content) {
      return column.content(movie);
    } else {
      return _.get(movie, column.path);
    }
  }
  const createKey = (movie, column) => {
    return movie.id + (column.path || column.key);
  }
  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie.id}>
          {columns.map(column => (
            <td key={createKey(movie, column)}>{renderCell(movie, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;