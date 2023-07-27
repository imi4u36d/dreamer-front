<script lang="ts" setup>

import router from "@/router";

const items = [
  {
    id: 1,
    title: '家人们，谁懂啊，这个老六又去摄影了',
    description: '这是一张美丽的夜晚图片，拍摄于加拿大的落基山脉。',
    image: 'https://picsum.photos/200/300?night'
  },
  {
    id: 2,
    title: '这是一张图片',
    description: '这是一张美丽的风景图片，拍摄于加拿大的落基山脉。',
    image: 'https://picsum.photos/200/300?grayscale'
  },
  {
    id: 3,
    title: '这是一个视频',
    description: '这是一个有趣的短视频，讲述了一只小猫的故事。',
    image: 'https://picsum.photos/200/300?blur',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
]

</script>

<template>
  <div id="content">
    <div class="card" v-for="item in items" :key="item.id" @click="router.push('/detailView')">
      <img :src="item.image" alt="">
      <div class="info">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(50% - 10px);
  height: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card .info {
  padding: 10px;
}

.card h2 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.card p {
  height: 30px;
  margin: 10px 0 0;
  font-size: 14px;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
