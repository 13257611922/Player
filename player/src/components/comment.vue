<template>
  <div class="comment-wrapper">
    <div class="items" v-for="(item,index) in commentList" :key="index">
      <div class="item">
        <div class="left">
          <!-- 用户头像 -->
          <img :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <!-- 用户名字 -->
            <span class="user">{{item.user.nickname}}</span>
            <!-- 用户评论 -->
            <span class="content">{{item.content}}</span>
          </div>
          <div class="bottom">
            <!-- 评论时间 -->
            <div class="time">{{item.time | commentTime}}</div>
            <div class="like-wrapper">
              <!-- 点赞个数 -->
              <span>👍</span>({{item.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入moment(时间处理)
import moment from 'moment'

export default {
  name: "comment",
  data() {
    return {
      commentList: []
    };
  },
  created() {
    // 热评信息
    this.$axios
      .get(`/comment/hot?id=${this.$route.params.comment}&type=0`)
      .then(backData => {
        // console.log(backData);
        this.commentList = backData.data.hotComments;
      });
  },
  // 过滤器
  filters:{
    // 评论时间处理
    commentTime(time){
      // console.log(time);
      return moment(time).format('YYYY年MM月DD日  HH:mm:ss')
    }
  }
};
</script>

<style>
</style>
