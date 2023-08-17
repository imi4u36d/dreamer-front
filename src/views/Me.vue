<script lang="ts" setup>
import ContentComponent from "@/components/ContentComponent.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";

const active = ref(0);
const showLittleHeader = ref(false);
const scrollDirection = ref('');
const scrollSpeed = ref(0);
const scrollY = ref(0);
const scrollX = ref(0);

const fadeDiv = ref()
const typeDiv = ref()


onMounted(() => {
  const rect = typeDiv.value.getBoundingClientRect();

  const handleScroll = (event: any) => {
    event.preventDefault(); // 可选，阻止页面滚动
    // 获取垂直和水平滚动位置
    scrollY.value = window.scrollY || window.pageYOffset;
    scrollX.value = window.scrollX || window.pageXOffset;

    // 如果是向下滚动了 展示头部隐藏栏
    if (scrollY.value > 0) {
      showLittleHeader.value = true;
      // 计算透明度值
      const opacity = scrollY.value / 100;
      // 将透明度应用到目标 div
      fadeDiv.value.style.opacity = opacity > 1 ? 1 : opacity.toFixed(2);


      console.log("scrollY.value" + scrollY.value)
      console.log("rect.top" + rect.top)
      if (scrollY.value >= rect.top - 40) {
        typeDiv.value.style.position = "fixed";
        typeDiv.value.style.top = "40px";
      } else {
        if (scrollY.value >= 80) {
          console.log("出现")
          typeDiv.value.style.position = "absolute";
          typeDiv.value.style.top = 0;
        }
      }


    } else {
      showLittleHeader.value = false;
    }
    // 判断滚轮的方向
    scrollDirection.value = event.deltaY > 0 ? '向下滚动' : '向上滚动';
    // 获取滚动的速度
    scrollSpeed.value = Math.abs(event.deltaY);
  };

  window.addEventListener('wheel', handleScroll);

  // 在组件销毁前移除滚动事件监听
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleScroll);
  });
});
</script>

<template>
  <div class="me">
    <div class="littleHeader fade-in-div" v-show="showLittleHeader" ref="fadeDiv">
      <img src="https://picsum.photos/20/20?random=1" alt="">
    </div>
    <div class="banner">
      <div class="userInfo">
        <div class="myInfo">
          <div class="avatar">
            <img src="https://picsum.photos/50/50?random=1" alt="">
          </div>
          <div class="info">
            <div class="username">糖小五</div>
            <div class="ip">IP:河南</div>
            <div class="level">LV7</div>
          </div>
        </div>

        <div class="settings">
          <van-icon name="setting-o" color="white" size="25px"/>
          <van-icon name="share-o" color="white" size="25px"/>
        </div>
      </div>

      <div class="glass-background">
        <div class="card">
          <div class="cardItem">
            <div class="cardItemTitle">关注</div>
            <div class="cardItemNum">100</div>
          </div>
          <div class="cardItem">
            <div class="cardItemTitle">粉丝</div>
            <div class="cardItemNum">100</div>
          </div>
          <div class="cardItem">
            <div class="cardItemTitle">收藏</div>
            <div class="cardItemNum">100</div>
          </div>
        </div>
      </div>
    </div>

    <div class="articles">
      <div class="type" ref="typeDiv">
        <van-tabs v-model:active="active" swipeable color="green">
          <van-tab title="最新">
          </van-tab>
          <van-tab title="最热">
          </van-tab>
          <van-tab title="收藏">
          </van-tab>
        </van-tabs>
      </div>
      <div class="contents">
        <content-component></content-component>
      </div>
    </div>


  </div>
</template>

<style scoped>

.type {
  max-height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
}

.me {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/img/1.jpeg") no-repeat center;
  background-size: cover;
}

.banner {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.fade-in-div {
  opacity: 0;
}

.littleHeader {
  width: 100%;
  height: 40px;
  background-color: #393e46;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
}

.userInfo {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.myInfo {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.info {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
}

.username {
  font-size: 18px;
}

.ip {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}

.level {
  color: black;
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}


.settings {
  width: 50%;
  height: 80px;
  display: flex;
  align-items: start;
  justify-content: end;
}

.settings > .van-icon {
  margin: 0 10px;
}

.glass-background {
  width: 85%;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card {
  position: absolute;
  width: 85%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

.articles {
  position: relative;
  background-color: white;
  border-radius: 20px;
}

.contents{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
