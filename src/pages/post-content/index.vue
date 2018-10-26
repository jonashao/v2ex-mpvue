<template>

  <div>
    <post :title='p.title' :author='p.member.username' :avatar='p.member.avatar_mini' :replies='p.replies' :tag='p.node.title' :lastModified='p.last_modified' :id='p.id'>
    </post>

    <div class="content border-bottom">
      <div v-html="p.content_rendered"></div>
    </div>

    <reply v-for="(p, index) in replies" v-bind:key="p.id" :content='p.content_rendered' :author='p.member.username' :avatar='p.member.avatar_mini' :replies='index' :lastModified='p.last_modified' :id='p.id' @titleClick="goToPostContent">
    </reply>

    <mp-button type="default" size="large" v-if="!nomore" @click="loadMore" btnClass="mb15">加载更多</mp-button>
    <div v-if="nomore">没有更多了</div>
  </div>
</template>

<script>
import post from "@/components/post";
import reply from "@/components/reply";
import mpButton from "mpvue-weui/src/button";
import store from "@/stores/post";

export default {
  components: {
    reply,
    post,
    mpButton
  },

  methods: {
    loadMore() {
      store.commit("repliesPage");
    }
  },

  computed: {
    p: () => {
      return store.state.post;
    },
    replies: () => {
      console.log("replies", store.state.replies);
      return store.state.replies;
    },
    nomore: () => {
      return store.state.replies.size >= store.state.repliesSource.size;
    }
  },

  onLoad(props) {
    store.dispatch("replies");
  },

  created(props) {
    // 调用应用实例的方法获取全局数据
  }
};
</script>

<style scoped>
.content {
  padding: 0.5rem;
}
</style>
