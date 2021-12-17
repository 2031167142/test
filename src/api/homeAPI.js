import request from '../utils/request'

// 将文章设置为不感兴趣（形参 id 是文章的 id）
export const dislikeArticleAPI = id => {
  return request.post('/v1_0/article/dislikes', {
    target: id
  })
}
