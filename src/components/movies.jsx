import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import ListGroup from './list/listGroup';
import MoviesTable from './table/moviesTable';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [], // 电影数组
      genres: [], // 分类数组
      selectedGenre: "全部电影", // 当前选中分类
    }
  }
  // 在componentDidMount生命周期中异步获取数据
  // setState会合并执行，不能依赖setState执行其它事件
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres()
    })
  }
  handleGenreSelect = (item) => {
    this.setState({
      selectedGenre: item
    })
  }
  render() {
    const { movies, genres, selectedGenre } = this.state;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-10">
          <MoviesTable movies={movies} />
        </div>
      </div>
    );
  }
}

export default Movies;