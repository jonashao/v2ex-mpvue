// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/data/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    post: {},
    posts: [],
    replies: [],
    repliesSource: [],
    repliesPage: 1,
    repliesPageSize: 10
  },
  mutations: {
    setCurrent: (state, post) => {
      state.post = state.posts.find(item => item.id === post.id)
    },
    setPosts: (state, posts) => {
      state.posts = posts
    },
    replies: (state, replies) => {
      state.repliesSource = replies
    },
    repliesPage: (state, page) => {
      if (page) {
        state.repliesPage = page
      } else {
        state.repliesPage++
      }
      state.replies = state.repliesSource.slice(0, state.repliesPage * state.repliesPageSize)
    }
  },
  actions: {
    posts: (context, type = 0) => {
      console.log('posts type', type)
      api.getPosts(type)
        .then(d => {
          // 输出请求数据
          context.commit('setPosts', d.data)
        })
        .catch(err => {
          console.log(err.status, err.message)
        })
    },

    replies: (context) => {
      api.getReplies(context.state.post.id)
        .then(d => {
          context.commit('replies', d.data)
          context.commit('repliesPage', 1)
        })
    }
  }
})

export default store
