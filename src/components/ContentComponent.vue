<script lang="ts" setup>

//获取笔记列表
import _service from "@/service";
import {onMounted, reactive} from "vue";
import router from "@/router";


let noteList = reactive([])
const notePage = () => {
  _service.notePage({}).then(res => {
    if (res.code === "200") {
      // 清空数组
      noteList.length = 0;
      // 添加新数据
      Array.prototype.push.apply(noteList, res.data.records);
    }
    console.log(noteList)
  })
}

const toDetail = (id: any) => {
  router.push({path: "/detailView", query: {id: id}})
}

onMounted(() => {
  notePage();
})
</script>

<template>
  <div id="content">
    <div class="noteCard" v-for="note in noteList" :key="note.id" @click="toDetail(note.id)">
      <div class="pic">
      </div>
      <div class="noteDetail">
        <div class="title">{{ note.noteTitle }}</div>

        <div class="articleInfo">
          <div class="author">
            <div class="authorHeadImg"></div>
            <span class="authorName">{{ note.authorName }}</span>
          </div>
          <div class="like">
            <van-icon name="good-job-o"/>
            <span class="likeNum">888</span>
          </div>
        </div>
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

.noteCard {
  width: 48%;
  height: 350px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  margin: 1%;
  padding-bottom: 5px;
}

.pic {
  width: 100%;
  height: 250px;
  background: url("https://picsum.photos/200/200?random=1") no-repeat;
  background-size: cover;
  border-radius: 5px;
}

.noteDetail {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5px;
}

.noteDetail > .title {
  height: 45px;
  font-size: 16px;
  color: #333;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}

.author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.noteDetail > .articleInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.noteDetail > .articleInfo > .author > .authorHeadImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url("https://picsum.photos/20/20?random=1") no-repeat;
  background-size: cover;
}

.noteDetail > .articleInfo > .author > .authorName {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}

.noteDetail > .articleInfo > .like {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #999;
}

.noteDetail > .articleInfo > .like > .likeNum {
  margin-left: 5px;
}

</style>
