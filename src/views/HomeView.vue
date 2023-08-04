<script lang="ts" setup>

import {ref} from "vue";

const activeNav = ref(0);
const activeTab = ref(0);

</script>

<template>
  <div class="homeView">
    <div class="header">
      <van-tabs v-model:active="activeNav" background="#fcfcfc" color="green">
        <van-tab title="关注"></van-tab>
        <van-tab title="发现"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
    <van-tabbar class="footer" v-model="activeTab" active-color="green">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">活动</van-tabbar-item>
      <van-tabbar-item type="">
        <van-icon name="add" size="32px" color="red" />
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.homeView {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(254, 254, 254, 0.02);
  background-color: #fcfcfc;
}

.van-tabbar-item {
  background-color: #fcfcfc;
}
</style>
