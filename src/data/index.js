var Fly = require('flyio/dist/npm/wx')
export var fly = new Fly()

export default {

  getPosts: function (type) {
    const url = type === 0 ? 'https://www.v2ex.com/api/topics/hot.json' : 'https://www.v2ex.com/api/topics/latest.json'
    return fly.get(url)
  },

  getReplies: function (topicId, page = 1, pageSize = 20) {
    return fly.get('https://www.v2ex.com/api/replies/show.json', {
      topic_id: topicId,
      page,
      page_size: pageSize
    })
  }
}
