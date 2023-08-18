<script lang="ts" setup>
import {ref} from "vue";

const activeTab = ref(2);

</script>

<template>
  <div class="footer">
    <van-tabbar class="footer" v-model="activeTab" active-color="green">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/activity">活动</van-tabbar-item>
      <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/me">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
