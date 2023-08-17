<script lang="ts" setup>

import CommonFooter from "@/components/CommonFooter.vue";
</script>

<template>
  <div class="homeView">
    <div class="content">
      <RouterView></RouterView>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<style scoped>
.homeView {
  width: 100%;
  height: 100%;
}

.content{
  width: 100%;
  height: calc(100% - 50px);
  margin-bottom: 50px;
}
</style>
