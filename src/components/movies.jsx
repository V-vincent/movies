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
      averageSort: 0,
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
  handleSort = (column) => {
    // 评分排序
    if (column.path === 'rating.average') {
      let averageSort = this.state.averageSort + 1;
      averageSort = averageSort > 2 ? 1 : averageSort;
      this.setState({ averageSort });
    }
  }
  // 收藏操作
  handleLike = (movie) => {
    // console.log(movie)
    // 使用不可变数据
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }
  // 根据分类过滤数据
  getPageData = () => {
    const { selectedGenre, movies: allMovies } = this.state;
    const filtered = selectedGenre && selectedGenre !== "全部电影" ?
      allMovies.filter((item) => item.genres.indexOf(selectedGenre) >= 0) : allMovies;
    this.sortPageData(filtered);
    return { totalCount: filtered.length, movies: filtered }
  }
  // 排序
  sortPageData = (movies) => {
    let averageSort = this.state.averageSort;
    if (averageSort === 1) {
      movies.sort((a, b) => {
        return b.rating.average - a.rating.average;
      })
    } else if (averageSort === 2) {
      movies.sort((a, b) => {
        return a.rating.average - b.rating.average;
      })
    }
    // console.log(movies);
  }
  render() {
    const { genres, selectedGenre } = this.state;
    const { totalCount, movies } = this.getPageData();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {
            totalCount ? (
              <>
                <p>一共有{totalCount}部相关的电影</p>
                <MoviesTable movies={movies} onLike={this.handleLike} onSort={this.handleSort} />
              </>
            ) : <div>没有相关电影</div>
          }
        </div>
      </div>
    );
  }
}

export default Movies;