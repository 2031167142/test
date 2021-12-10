import request from '../utils/request'

// 获取频道下的文章列表数据
export const getArticleListAPI = function (channelID, timestamp) {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: channelID,
      timestamp
    }
  })
}
