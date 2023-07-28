<template>
  <div class="me">
    <div class="head">
      <img class="head_pic"
           src="https://picsum.photos/80/80?random=1"
           style="width: 80px;height: 80px" alt="">
    </div>
    <div class="userInfo">
      <p class="nikeName" style="color: orange">
        {{ userInfo.userName }} {{ userInfo.sign }}
      </p>
    </div>
    <div class="panel">
      <van-divider>我的荣誉</van-divider>
      <div class="gloryPanel">
        <p class="superGlory">APP内测先锋</p>
        <p class="specGlory">渣男</p>
        <p class="specGlory">LSP</p>
        <p class="glory">助攻王</p>
        <p class="glory">输出机器</p>
        <p class="glory">国服第一九命猫</p>
      </div>
    </div>
    <div class="panel" id="main" :style="{width: '90%', height: '350px'}"></div>
    <div class="accountController">
      <van-icon name="setting-o" size="25px" @click="menu"/>
    </div>
    <div style="height: 4rem;"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import router from "@/router";
import {showNotify} from "vant";
import {useUserStore} from "@/stores/userStore";

let userInfo = ref({})

const menu = () => {
  router.push("/menu");
}
const getUserInfo = () => {
  userInfo = useUserStore().userInfo
}
const logOut = () => {
  showNotify({type: 'success', message: '退出成功!'})
  useUserStore().setUserInfo({})
  router.push("/login");
}

onMounted(() => {
  getUserInfo()
})

</script>

<style scoped>

.me {
  width: 100%;
  height: 100%;
}

.head {
  width: 100%;
  height: 200px;
  background: url("https://picsum.photos/400/200?random=1") no-repeat;
  background-size: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /*background-color: white;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.head_pic {
  border-radius: 40px;
  margin-top: 200px;
}

.userInfo {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.accountController {
  position: absolute;
  top: 10px;
  right: 10px;
  /*bottom: 55px;*/
  /*left: 0;*/
  /*right: 0;*/
  display: flex;
  justify-content: center;
  align-items: center;
}


.panel {
  width: 90%;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto 10px;
  /*border: 1px solid rgba(55, 125, 255, .3);*/
  /*box-shadow: 0 0 35px rgba(55, 125, 255, .1);*/
}

.gloryPanel {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.glory {
  padding-left: 2px;
  padding-right: 2px;
  font-size: 10px;
  border: 1px solid green;
  border-radius: 5px;
  color: green;
}

.specGlory {
  padding-left: 2px;
  padding-right: 2px;
  font-size: 10px;
  border: 1px solid gold;
  border-radius: 5px;
  color: gold;
}

.superGlory {
  padding-left: 2px;
  padding-right: 2px;
  font-size: 10px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
}

</style>
