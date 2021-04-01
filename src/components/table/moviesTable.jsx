import React from 'react';
import Like from '../common/like';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const MoviesTable = ({ movies, onLike, onSort }) => {
  const columns = [
    {
      path: 'title',
      label: '标题',
      content: (movie) => (
        <a target="_blank" rel="noreferrer" href={movie.alt}>
          {movie.title}
        </a>
      )
    },
    { path: 'original_title', label: "原标题" },
    { path: 'year', label: "上映时间" },
    { path: 'genres', label: "分类" },
    { path: 'rating.average', label: "评分" },
    {
      key: 'like',
      label: '收藏',
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      )
    }
  ]
  return (
    <div>
      <table className="table">
        <TableHeader columns={columns} onSort={onSort} />
        <TableBody columns={columns} movies={movies} />
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.original_title}</td>
              <td>{movie.year}</td>
              <td>{movie.genres}</td>
              <td>{movie.rating.average}</td>
              <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default MoviesTable;