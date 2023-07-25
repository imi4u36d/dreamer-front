<template>
  <div class="detailView">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="">
        </div>
      </div>
      <div class="carousel-controls">
        <button :disabled="currentIndex === 0" @click="prevImage">《</button>
        <button :disabled="currentIndex === images.length - 1" @click="nextImage">》</button>
      </div>
    </div>
    <div class="content">
      <p>{{ content }}</p>
    </div>
    <div class="actions">
      <div class="userInfo">
        <img src="https://picsum.photos/50/50" alt="">
        <span>张三</span>
      </div>
      <div class="likeAndCollect">
        <button :class="{ active: liked }" @click="liked = !liked">
          <i class="fas fa-heart"></i>
          <span>{{ likes }}</span>
        </button>
        <button :class="{ active: collected }" @click="collected = !collected">
          <i class="fas fa-star"></i>
          <span>{{ collections }}</span>
        </button>
      </div>
    </div>
    <div class="comments">
      <h2>评论</h2>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <div class="avatar">
          <img :src="comment.avatar" alt="">
        </div>
        <div class="info">
          <div class="name">{{ comment.name }}</div>
          <div class="text">{{ comment.text }}</div>
        </div>
      </div>
      <form @submit.prevent="addComment">
        <div class="form-group">
          <label for="name">姓名：</label>
          <input type="text" id="name" v-model="newComment.name">
        </div>
        <div class="form-group">
          <label for="text">评论：</label>
          <textarea id="text" v-model="newComment.text"></textarea>
        </div>
        <button type="submit">提交评论</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  data() {
    return {
      title: '这是一篇文章',
      content: '这是一篇关于 Vue.js 的文章，介绍了 Vue.js 的基本用法和一些高级特性。',
      likes: 10,
      collections: 5,
      liked: false,
      collected: false,
      images: [
        'https://picsum.photos/200/400?random=1',
        'https://picsum.photos/200/200?random=2',
        'https://picsum.photos/400/200?random=3'
      ],
      currentIndex: 0,
      comments: [
        {id: 1, name: '张三', avatar: 'https://picsum.photos/50/50', text: '这篇文章写得很好！'},
        {id: 2, name: '李四', avatar: 'https://picsum.photos/50/50', text: '我也觉得很好！'}
      ],
      newComment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    prevImage() {
      this.currentIndex--
    },
    nextImage() {
      this.currentIndex++
    },
    addComment() {
      const {name, text} = this.newComment
      if (name && text) {
        const id = this.comments.length + 1
        const avatar = `https://picsum.photos/50/50?random=${id}`
        this.comments.push({id, name, avatar, text})
        this.newComment.name = ''
        this.newComment.text = ''
      }
    }
  }
}
</script>

<style>
.detailView {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions .userInfo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.actions .userInfo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.actions .likeAndCollect{
  display: flex;
  align-items: center;
}

.actions .likeAndCollect button {
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.actions .likeAndCollect button.active {
  color: #ff4d4f;
}

.actions .likeAndCollect button i {
  margin-right: 5px;
}

.carousel {
  position: relative;
  top: 51px;
  max-height: 400px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.carousel-controls button {
  font-size: 24px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.carousel-controls button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.content {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.5;
}

.comments {
  margin-top: 20px;
}

.comments h2 {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: bold;
}

.comment {
  display: flex;
  margin-bottom: 20px;
}

.comment .avatar {
  margin-right: 10px;
}

.comment .avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.comment .info {
  flex: 1;
}

.comment .name {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}

.comment .text {
  font-size: 14px;
  color: #666;
}

form {
  margin-top: 20px;
}

.form-group {
  display: flex;
  margin-bottom: 10px;
}

.form-group label {
  flex: 0 0 60px;
  font-size: 16px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  flex: 1;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  display: block;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: #ff4d4f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
