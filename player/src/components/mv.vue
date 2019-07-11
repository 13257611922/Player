<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <!-- mv歌曲 -->
      <span class="title">{{mvSong}}</span>
      <!-- mv歌手 -->
      <span class="artist">{{mvSinger}}</span>
    </div>
    <!-- mv播放器 -->
    <video :src="mvUrl" controls autoplay></video>
  </div>
</template>

<script>
export default {
  name: "mv",
  data() {
    return {
      // mv歌手
      mvSinger: "",
      // mv歌曲
      mvSong: "",
      // mv地址
      mvUrl: ""
    };
  },
  created() {
    // this.$axios
    // .get(`/mv/url?id=${this.$route.params.mv}`)
    // .then(backData=>{
    //   console.log(backData);
    //   this.mvUrl = backData.data.data.url
    // })
    // 获取歌曲mv信息
    this.$axios
      .get(`/mv/detail?mvid=${this.$route.params.mv}`)
      .then(backData => {
        // console.log(backData);
        this.mvSinger = backData.data.data.artists[0].name;
        this.mvSong = backData.data.data.name;

        // 取清晰度 判断
        let maxKey = 0;
        for (let key in backData.data.data.brs) {
          if (maxKey < key) {
            maxKey = key;
          }
        }
        this.mvUrl = backData.data.data.brs[maxKey]
        
      });
  }
};
</script>

<style>
</style>
