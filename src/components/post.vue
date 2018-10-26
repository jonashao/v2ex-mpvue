<template>
  <div class="card border-bottom">
    <div class="header">
      <profile :author='author' :lastModified='lastModified' :avatar='avatar' :replies='"评论 "+replies'></profile>
      <div class="right">
        <div class="tag">{{tag}}</div>
      </div>
    </div>
    <div class="title" @click="$emit('titleClick',id)">{{title}}</div>
  </div>
</template>

<script>
import profile from "./profile";
export default {
  components: { profile },
  props: {
    title: { default: "无标题" },
    author: { default: "无名" },
    lastModified: { default: "置顶" },
    replies: { default: 100 },
    tag: { default: "标签" },
    avatar: { default: "/static/img/user-unlogin.png" },
    id: { required: true }
  }
};
</script>

<style>
.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
}

.header {
  display: flex;
  justify-content: space-between;
}

.tag {
  font-size: small;
  background: rgb(243, 237, 237);
  padding: 5rpx 10rpx;
}

.title {
  padding-left: 10rpx;
  padding-top: 10rpx;
}
</style>
