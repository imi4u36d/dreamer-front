<script lang="ts" setup>
import {defineComponent, reactive, ref} from 'vue'

const searchKey = ref('')
const activities = reactive([])

activities.push({
  id: 1,
  title: '活动1',
  time: '2021-10-10',
  address: '广州市天河区'
})

activities.push({
  id: 2,
  title: '活动2',
  time: '2021-10-10',
  address: '广州市天河区'
})

activities.push({
  id: 3,
  title: '活动3',
  time: '2021-10-10',
  address: '广州市天河区'
})



const search = () => {
  console.log(searchKey.value)
}

</script>

<template>

  <div id="activity">
    <div class="searchBar">
      <van-search v-model="searchKey" placeholder="请输入搜索关键词"/>
      <van-divider/>
    </div>
    <div class="card" v-for="activity in activities" :key="activity.id" >
      <div class="left">

      </div>
      <div class="right">
        <div class="title">{{activity.title}}</div>
        <div class="time">{{activity.time}}</div>
        <div class="address">{{activity.address}}</div>
        <div class="in">
          <van-button size="small">立即报名</van-button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
#activity{
  width: 100%;
  height: 100%;
}
.card {
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border: 1px solid green;
  border-radius: 10px;
}

.left {
  width: 70%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background: url("https://picsum.photos/400/200?random=1") no-repeat;
}

.right {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
