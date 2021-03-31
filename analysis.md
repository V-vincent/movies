## 电影管理应用需求分析

### 进行模块分解
左边列表，右边主要内容：表头、列表、页码、操作等

进行组件规划，得到一个树状的组件结构
- `<Movies />`：父组件，电影管理应用
- `<ListGroup />`：左侧分类类表
- `<Table />`：表格组件，包含表头组件和表格组件
- `<TableHeader />`：用于显示电影的信息字段
- `<TableBody />`： 用于展示电影条目数据
- `<Like />`： 独立组件，可以复用，收藏操作
- `<Pagination />`： 独立组件，可以复用，显示页码

### 数据流向和事件交互
- `<API />`用于和服务端传递数据
- `<Movies />`：有状态组件，作为数据的中枢，通过`Props`将数据传递给子组件
- `<ListGroup />`：无状态组件，渲染分裂数据，点击返回某个列表
- `<Table />`：无状态组件，渲染电影信息列表，将收藏状态传递给子组件
- `<Like />`： 无状态组件，渲染收藏状态，点击将返回某一部电影数据
区分使用有状态组件和无状态组件可以让更清楚数据的流向，便于组织组件

### 初始化项目
确认工程结构，用来分类上述不同职能的组件
- `<service>`： 存放用来模拟后端请求的数据文件
- `<fakeGenreService>`：存放和读取分类列表
- `<fakeMovieService>`：读取电影文件
- `<movies>`： 豆瓣Top250电影信息数据，以json的形式传入
- `<components>`：以功能划分
  - `<common>`：用来存放和业务完全分离的公用组件（收藏组件、页码组件）
  - `<table>`：用来存放主要的表格文件
  - `<list>`：用来存放列表选择文件