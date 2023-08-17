<script lang="ts" setup>
import {ref} from 'vue'

const activeNav = ref(0);

</script>

<template>
  <div class="commonHeader">
    <van-tabs v-model:active="activeNav" background="#fcfcfc" color="green">
      <van-tab title="关注"></van-tab>
      <van-tab title="发现"></van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.commonHeader {
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
