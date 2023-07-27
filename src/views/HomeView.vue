<script lang="ts" setup>

import ContentComponent from "@/components/ContentComponent.vue";
import {ref} from "vue";

const activeTab = ref(1);
const tabs = [
  {id: 1, title: '首页', icon: 'fas fa-home'},
  {id: 2, title: '造型', icon: 'fas fa-compass'},
  {id: 3, title: '消息', icon: 'fas fa-bell'},
  {id: 4, title: '我的', icon: 'fas fa-user'}
]

const activeNav = ref(1);
const navs = [
  {id: 1, title: '关注', icon: 'fas fa-home'},
  {id: 2, title: '发现', icon: 'fas fa-compass'},
]
</script>

<template>
  <div class="homeView">
    <div class="header">
      <div class="nav" v-for="nav in navs" :key="nav.id" :class="{ active: activeNav === nav.id }"
           @click="activeNav = nav.id">
        <i :class="nav.icon"></i>
        <span>{{ nav.title }}</span>
      </div>
    </div>
    <div class="content">
      <ContentComponent></ContentComponent>
    </div>
    <div class="footer">
      <div class="tab" v-for="tab in tabs" :key="tab.id" :class="{ active: activeTab === tab.id }"
           @click="activeTab = tab.id">
        <i :class="tab.icon"></i>
        <span>{{ tab.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f0f0f0;
  background-color: white;
}

.nav {
  padding: 10px;
  font-size: 16px;
}

.nav.active {
  color: #ff4d4f;
}

.content {
  flex: 1;
  padding: 10px;
  margin-top: 50px;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #666;
}

.tab.active {
  color: #ff4d4f;
}
</style>
