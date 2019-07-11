<template>
  <div class="result-wrapper">
    <div class="song" v-for="(item,index) in searchList" :key="index">
      <div class="name">
        <!-- 播曲按钮 -->
        <span class="iconfont icon-play" @click="playerBtn(item.id)"></span>
        <!-- 歌曲名 -->
        <span @click="commentBtn(item.id)">&nbsp;&nbsp;{{item.name}}</span>
        <!-- mv按钮 -->
        <span class="iconfont icon-editmedia" v-if="item.mvid!=0" @click="videoBtn(item.mvid)"></span>
      </div>
      <!-- 歌手名 -->
      <div class="singer">{{item.artists | formatSinger}}</div>
      <!-- 歌曲专辑名 -->
      <div class="album">《{{item.album.name}}》</div>
      <!-- 歌手时间 -->
      <div class="time">{{item.duration | formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "results",
  data() {
    return {
      // 保存每一项歌曲信息
      searchList: []
    };
  },
  created() {
    this.searchGet();
  },
  // 过滤器
  filters: {
    // 名字拼接
    formatSinger(singer) {
      let singerName = "";
      for (let i = 0; i < singer.length; i++) {
        // 取出每一项的名字
        singerName += singer[i].name;
        singerName += "/";
      }
      // 移出名字最后的"/"
      singerName = singerName.slice(0, -1);
      return singerName;
    },
    // 处理时间转换
    formatTime(time) {
      // console.log(time);
      // 毫秒 -> 秒
      const second = time / 1000;
      // 秒 -> 分  舍去小数部分
      const min = Math.floor(second / 60);
      // 取到剩余的秒数
      let sec = Math.floor(second % 60);
      // 剩余秒数不足两位数 补足
      sec = sec < 10 ? "0" + sec : sec;

      return min + ":" + sec;
    }
  },
  // 侦听器
  watch: {
    "$route.params.search"() {
      this.searchGet();
    }
  },
  methods: {
    // 封装get请求
    searchGet() {
      // 获取歌曲信息
      this.$axios
        .get(`/search?keywords=${this.$route.params.search}}`)
        .then(backData => {
          // console.log(backData);
          this.searchList = backData.data.result.songs;
        });
    },
    // 跳转mv
    videoBtn(mvid) {
      this.$router.push(`/mv/${mvid}`);
    },
    // 跳转player
    playerBtn(id) {
      this.$router.push(`/player/${id}`);
    },
    // 跳转comment
    commentBtn(id) {
      this.$router.push(`/comment/${id}`);
    }
  }
};
</script>

<style>
</style>
