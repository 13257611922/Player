<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" src="../assets/img/cover.png" alt />
    </div>
    <div class="right">
      <div class="title">
        <img :src="coverUrl" alt />
        <span>{{musicName}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{singerName}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{specialName}}</span>
      </div>
      <audio class="audio" controls :src="musicUrl" autoplay></audio>
      <ul class="lyric-container">
        <li
          class="lyric"
          v-for="(item,index) in lyric"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      // 歌曲地址
      musicUrl: "",
      // 歌手名
      singerName: "",
      // 封面
      coverUrl: "",
      // 专辑
      specialName: "",
      // 歌名
      musicName: "",
      // 歌词
      lyric: []
    };
  },
  wacth:{
    
  },
  created() {
    // 获取歌曲url
    this.$axios
      .get(`/song/url?id=${this.$route.params.player}`)
      .then(backData => {
        // console.log(backData);
        // 播放地址
        this.musicUrl = backData.data.data[0].url;
      });
    // 获取歌曲信息
    this.$axios
      .get(`/song/detail?ids=${this.$route.params.player}`)
      .then(backData => {
        // console.log(backData);
        // 歌手名
        this.singerName = backData.data.songs[0].ar[0].name;
        // 封面
        this.coverUrl = backData.data.songs[0].al.picUrl;
        // 专辑
        this.specialName = backData.data.songs[0].al.name;
        // 歌名
        this.musicName = backData.data.songs[0].name;
      });
    // 获取歌曲歌词
    this.$axios.get(`/lyric?id=${this.$route.params.player}`).then(backData => {
      // console.log(backData);
      // 音乐歌词
      this.lyric = backData.data.lrc.lyric.split("\n");
      // console.log(this.lyric);
      // 移出歌词时间字符,增添至数组的每一项
      for (let i = 0; i < this.lyric.length; i++) {
        this.lyric[i] = this.lyric[i].slice(11);
      }
    });
  }
};
</script>

<style>
</style>
