import React from 'react';

const MoviesTable = ({ movies }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>标题</td>
            <td>原标题</td>
            <td>上映时间</td>
            <td>分类</td>
            <td>评分</td>
            <td>收藏</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.original_title}</td>
              <td>{movie.year}</td>
              <td>{movie.genres}</td>
              <td>{movie.rating.average}</td>
              <td>like</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoviesTable;