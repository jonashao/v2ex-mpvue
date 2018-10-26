<template>

  <div class="left">
    <div class="avatar"><img :src="avatar" width="32" alt=""></div>
    <div class="meta">
      <div class="author">{{author}}</div>
      <div class="count">
        <span class="lastModified">{{lastModifiedFromNow}}</span>
        <span class="replies">{{replies}}</span>
      </div>
    </div>
  </div>

</template>


<script>
import dayjs from "dayjs";
import cn from "dayjs/locale/zh-cn";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn"); // use loaded locale globally

export default {
  props: {
    author: { default: "无名" },
    lastModified: { default: "置顶" },
    replies: { default: 100 },
    avatar: { default: "/static/img/user-unlogin.png" }
  },
  computed: {
    lastModifiedFromNow: function() {
      return dayjs.unix(this.lastModified).fromNow();
    }
  },
  methods: {
    goToContent() {
      console.log(this.id);
      wx.navigateTo({ url: "/pages/post-content/main?id=" + this.id });
    }
  }
};
</script>

<style>
.border-bottom {
  border-bottom: 1rpx;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-color: #d2d2d2;
  border-style: solid;
}

.left {
  display: flex;
}

.avatar {
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}

.meta {
  display: flex;
  flex-direction: column;
  padding-left: 10rpx;
}

.meta .count {
  display: flex;
  font-size: x-small;
  color: gray;
}

.meta .count span {
  margin-right: 10rpx;
}
</style>
