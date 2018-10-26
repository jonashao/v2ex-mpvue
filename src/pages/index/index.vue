<template>
  <div>
    <mp-navbar :tabs="tabs" @tabClick="tabClick"></mp-navbar>
    <div class="posts">
      <post v-for="p in posts" v-bind:key="p.id" :title='p.title' :author='p.member.username' :avatar='p.member.avatar_mini' :replies='p.replies' :tag='p.node.title' :lastModified='p.last_modified' :id='p.id' @titleClick="goToPostContent">
      </post>
    </div>
  </div>
</template>

<script>
import post from "@/components/post";
import mpButton from "mpvue-weui/src/button";
import mpNavbar from "mpvue-weui/src/navbar";
import store from "@/stores/post";
export default {
  data() {
    return {
      userInfo: {},
      tabs: ["热门", "最新"],
      activeTab: 0
    };
  },

  components: {
    post,
    mpButton,
    mpNavbar
  },

  computed: {
    posts() {
      return store.state.posts;
    }
  },
  methods: {
    goToPostContent(id) {
      store.commit("setCurrent", { id });
      wx.navigateTo({ url: "/pages/post-content/main" });
    },

    tabClick(index) {
      console.log("click tab", index);
      this.activeTab = index;
      store.dispatch("posts", index);
    }
    // getUserInfo() {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: res => {
    //           this.userInfo = res.userInfo;
    //         }
    //       });
    //     }
    //   });
    // }
  },
  created() {
    // 调用应用实例的方法获取全局数据
    console.log("created");
    store.dispatch("posts");
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
