import React from 'react';

const Pagination = ({ totalCount, pageSize, curPage, onPrePage, onNextPage }) => {
  return (
    <div className="row">
      <div className="col-8">
        <p>一共有{totalCount}部相关的电影，每页显示{pageSize}条数据</p>
      </div>
      <div className="col-4" style={{ textAlign: 'right' }}>
        <button onClick={() => onPrePage()} type="button" className="btn btn-primary">上一页</button>
        <span style={{ margin: 10 }}>当前第{curPage}页</span>
        <button onClick={() => onNextPage(totalCount)} type="button" className="btn btn-primary">下一页</button>
      </div>
    </div >
  );
}

export default Pagination;