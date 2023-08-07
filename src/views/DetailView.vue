<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import _service from "@/service";
import router from "@/router";
import {showNotify} from "vant";

const route = useRoute()
onMounted(() => {
  // 获取笔记详情
  const noteParams = {
    noteId: route.query.id
  }
  _service.noteDetail(noteParams).then(res => {
    if (res.code === "200") {
      noteDetail.value = res.data
    }
  })

  // 获取评论列表
  const noteCommentParams = {
    noteId: route.query.id
  }
  _service.getNoteCommentListByNoteId(noteCommentParams).then(res => {
    if (res.code === "200") {
      comments.value = res.data
    }
  })
})

const noteDetail = ref({})

const likes = ref(10)
const collections = ref(5)
const liked = ref(false)
const collected = ref(false)
const images = ref([
  'https://picsum.photos/1050/400?random=1',
  'https://picsum.photos/1050/400?random=2',
  'https://picsum.photos/1050/400?random=3'
])
const comments = ref([])

const newComment = ref({
  noteId: route.query.id,
  userId: '',
  comment: ''
})

/**
 * 提交评论
 */
const commitComment = () => {
  // 获取用户信息
  let userInfo: any = localStorage.getItem('userInfo');
  userInfo = JSON.parse(userInfo)
  // const username = useUserStore().userInfo.username
  if (!userInfo) {
    showNotify({type: 'warning', message: '请先登录!'});
    router.push({path: "/login"})
    return
  }

  // 开始提交评论
  newComment.value.userId = userInfo.userId
  _service.commitComment(newComment.value).then(res => {
    if (res.code === "200") {
      showNotify({type: 'success', message: '评论成功!'});
      // 清空评论框
      newComment.value.comment = ''
      // 重新获取评论列表
      const noteCommentParams = {
        noteId: route.query.id
      }
      _service.getNoteCommentListByNoteId(noteCommentParams).then(res => {
        if (res.code === "200") {
          comments.value = res.data
        }
      })
    } else {
      showNotify({type: 'warning', message: '评论失败!'});
    }
  })
}

/**
 * 返回上一页
 */
const onClickLeft = () => history.back();
</script>

<template>
  <div class="detailView">
    <div class="header">
      <van-nav-bar
          :title="noteDetail.noteTitle"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="carousel">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" alt=""/>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="content">
      <p>{{ noteDetail.noteContent }}</p>
    </div>

    <div class="labels">
      <span>#元气满满</span>
      <span>#元气满满</span>
      <span>#元气满满</span>
      <span>#元气满满</span>
    </div>


    <div class="actions">
      <div class="userInfo">
        <img src="https://picsum.photos/35/35" alt="">
        <span>{{ noteDetail.authorName }}</span>
      </div>
      <div class="likeAndCollect">
        <van-button :class="{ active: liked }" @click="liked = !liked">
          <van-icon name="good-job"/>
          <i class="fas fa-heart"></i>
          <span>{{ likes }}</span>
        </van-button>

        <van-button :class="{ active: collected }" @click="collected = !collected">
          <van-icon name="star"/>
          <i class="fas fa-star"></i>
          <span>{{ collections }}</span>
        </van-button>
      </div>
    </div>

    <van-divider/>
    <div class="tips">
      共有{{ comments.length }}条评论
    </div>

    <div class="comments">
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <div class="avatar">
          <img src="https://picsum.photos/35/35?random=1" alt="">
        </div>
        <div class="info">
          <div class="name">{{ comment.userName }}</div>
          <div class="text">{{ comment.comment }}</div>
        </div>
      </div>
    </div>
    <div class="edit">
      <van-field
          v-model="newComment.comment"
          left-icon="edit"
          placeholder="说两句儿"
      >
        <template #button>
          <van-button size="small" color="green" @click="commitComment()">发射</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<style scoped>
.detailView {
  width: 100%;
  height: 100%;
}

.header {
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.actions .userInfo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.actions .userInfo img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}

.actions .likeAndCollect {
  display: flex;
  align-items: center;
}

.actions .likeAndCollect button {
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.actions .likeAndCollect button.active {
  color: darkgreen;
}

.carousel {
  width: 100%;
  height: 400px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 10px;
  font-size: 16px;
  line-height: 1.5;
}

.labels {
  padding: 10px;
  width: 100%;
  display: flex;
  color: #0d7685;
}

.labels > span {
  margin-right: 15px;
}

.tips {
  padding: 0 10px;
  font-size: 14px;
  color: #666;
}

.comments {
  padding-bottom: 55px;
}

.comment {
  padding: 10px 10px 0 10px;
  display: flex;
  margin-bottom: 20px;
}

.comment .avatar {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment .avatar img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment .info {
  flex: 1;
}

.comment .name {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666666;
}

.comment .text {
  font-size: 12px;
  color: #333333;
}

.edit {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
