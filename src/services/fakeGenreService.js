export const genres = [
  "全部电影",
  "剧情",
  "犯罪",
  "悬疑",
  "喜剧",
  "动画",
  "爱情",
  "奇幻",
  "科幻",
  "冒险",
  "音乐",
  "惊悚"
];

export function getGenres() {
  return genres.filter(g => g);
}
