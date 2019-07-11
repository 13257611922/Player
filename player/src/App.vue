<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <!-- 轮播图结构 -->
    <el-carousel :interval="4000" type="card" class="picture">
      <el-carousel-item v-for="(item,index) in picList" :key="index">
        <img :src="item.pic" alt width="100%" />
      </el-carousel-item>
    </el-carousel>

    <div class="search">
      <input type="text" v-model.trim="search" @keyup.enter="searchBtn" />
      <button>
        <span class="iconfont icon-search" @click="searchBtn"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <!-- 搜索结果 -->
        <router-link to="/results" class="bar-item" active-class="active">搜索结果</router-link>
        <router-link to="/player" class="bar-item" active-class="active">歌曲播放</router-link>
        <router-link to="/mv" class="bar-item" active-class="active">mv</router-link>
        <router-link to="/comment" class="bar-item" active-class="active">歌曲评论&gt;</router-link>
        <a class="bar-item">推荐歌曲</a>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      search: "",
      // 轮播图
      picList: []
    };
  },
  created() {
    // 轮播图请求
    this.$axios.get(`https://autumnfish.cn/banner?type=2`).then(backData => {
      // console.log(backData);
      this.picList = backData.data.banners;
    });
  },
  // 侦听器
  watch: {
      $route(newValue, oldValue) {
        // 搜索的新值
        console.log(newValue);
        // 搜索的旧值
        console.log(oldValue);
        // 在未切换tab栏时将搜索值保存起来
        if(newValue.params.search != undefined){
          this.search = newValue.params.search
          this.searchBtn()
          // 当切换回tab栏的results时,路径改变,将已存的值传到this.search直接调用
        }else if(newValue.path == '/results'){
          this.searchBtn()
        }
    }
  },
  methods: {
    searchBtn() {
      // alert(this.search)
      // 非空判断
      if (this.search == "") {
        // 警告框(第三方组件)
        this.$message({
          message: "输入框内请正确输入内容!!!",
          type: "warning"
        });
      } else {
        // console.log(this.search);
        // 跳转到tab栏的results
        this.$router.push(`/results/${this.search}`);
      }
    }
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.picture .el-carousel__container {
  height: 256px;
  /* width: 1080px; */
}
</style>
