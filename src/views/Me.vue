<script lang="ts" setup>
import ContentComponent from "@/components/ContentComponent.vue";
</script>

<template>
  <div class="me">
    <div class="banner">
      <div class="userInfo">
        <div class="myInfo">
          <div class="avatar">
            <img src="https://picsum.photos/50/50?random=1" alt="">
          </div>
          <div class="info">
            <div class="username">糖小五</div>
            <div class="ip">IP:河南</div>
            <div class="level">LV7</div>
          </div>
        </div>

        <div class="settings">
          <van-icon name="setting-o" color="white" size="25px"/>
          <van-icon name="share-o" color="white" size="25px"/>
        </div>
      </div>

      <div class="glass-background">
        <div class="card">
          <div class="cardItem">
            <div class="cardItemTitle">关注</div>
            <div class="cardItemNum">100</div>
          </div>
          <div class="cardItem">
            <div class="cardItemTitle">粉丝</div>
            <div class="cardItemNum">100</div>
          </div>
          <div class="cardItem">
            <div class="cardItemTitle">收藏</div>
            <div class="cardItemNum">100</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <content-component></content-component>
    </div>


  </div>
</template>

<style scoped>
.me {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("https://picsum.photos/1080/1920?random=1") no-repeat center center;
  background-size: cover;
}

.banner {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.userInfo{
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.myInfo {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.info {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
}

.username {
  font-size: 18px;
}

.ip {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.level {
  color: black;
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  background: white;
  border-radius: 8px;
}


.settings {
  width: 50%;
  height: 80px;
  display: flex;
  align-items: start;
  justify-content: end;
}

.settings > .van-icon {
  margin: 0 10px;
}

.glass-background {
  width: 85%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card {
  position: absolute;
  width: 85%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

.content{
  height: 100%;
  background-color: white;
}
</style>
