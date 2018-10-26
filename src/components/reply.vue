<template>
  <div class="reply border-bottom">
    <div class="header">
      <profile :author='author' :lastModified='lastModified' :avatar='avatar' :replies='(replies+1)+"楼"'></profile>
      <div class="right">
      </div>
    </div>
    <div class="content" @click="$emit('titleClick',id)">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import profile from "./profile";
export default {
  components: { profile },
  props: {
    content: { default: "无标题" },
    author: { default: "无名" },
    lastModified: { default: "置顶" },
    replies: { default: "" },
    tag: { default: "标签" },
    avatar: { default: "/static/img/user-unlogin.png" },
    id: { required: true }
  }
};
</script>

<style>
.reply {
  padding: 10px;
  display: flex;
  flex-direction: column;
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

.content {
  padding-left: 1rem;
  padding-top: 10rpx;
}
</style>
