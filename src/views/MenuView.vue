<template>
  <div class="Menu">
    <van-divider>设置</van-divider>
    <div class="controller">
      <van-button class="menuBtn" @click="show">资料修改</van-button>
      <van-button class="menuBtn" @click="logOut">退出登录</van-button>
    </div>
    <van-divider v-show="!showUpdateInfo">关于我们</van-divider>
    <div class="aboutUs" v-show="!showUpdateInfo">
      <a href="https://ds.163.com/article/5ca2320bf7feba5186ec59fa/">官方精彩采访</a>
      <div class="joinUs">
        <a target="_blank"
           href="https://qm.qq.com/cgi-bin/qm/qr?k=R_r734F1Gzd7VI6_EeLhZkrl1wYuZLJ9&jump_from=webapi"><img border="0"
                                                                                                           src="//pub.idqqimg.com/wpa/images/group.png"
                                                                                                           alt="决战！牛马京 - 清泽殿"
                                                                                                           title="决战！牛马京 - 清泽殿"></a>
      </div>
      <div class="qqNumber" style="color: deeppink">
        唯一QQ群: 906969120
      </div>
    </div>
    <van-divider v-if="!showUpdateInfo">关于APP</van-divider>
    <div class="appInformation" v-if="!showUpdateInfo">
      <div class="about">
        <p>Author: moneyPro</p>
        <p>last Update Time: 2021-07-01 11:13:00</p>
        <p>last APP Version: 0.0.1-DEV</p>
        <p>build technology: VantUI, VUE(about technology), ECHARS</p>
      </div>
    </div>
    <div class="img" v-if="!showUpdateInfo">

    </div>
    <div class="login-form" v-if="showUpdateInfo">
      <van-form @submit="onSubmit">
        <van-field name="uploader" label="头像上传">
          <template #input>
            <van-uploader v-model="uploader" multiple :max-count="1" :after-read="afterRead"/>
          </template>
        </van-field>
        <van-field
            v-model="userInfo.userName"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="userInfo.gameName"
            name="游戏昵称"
            label="游戏昵称"
            placeholder="游戏昵称"
            :rules="[{ required: true, message: '请填写游戏昵称' }]"
        />
        <van-field
            v-model="userInfo.realName"
            name="真实姓名"
            label="真实姓名"
            placeholder="真实姓名(非必填)"
        />

        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="userInfo.sex" direction="horizontal">
              <van-radio name="0">男</van-radio>
              <van-radio name="1">女</van-radio>
              <van-radio name="2">人妖</van-radio>
              <van-radio name="3">奇行种</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="radio" label="感情状态">
          <template #input>
            <van-radio-group v-model="userInfo.marry" direction="horizontal">
              <van-radio name="0">单身</van-radio>
              <van-radio name="1">有男友</van-radio>
              <van-radio name="1">有女友</van-radio>
              <van-radio name="3">已婚</van-radio>
              <van-radio name="4">基佬</van-radio>
              <van-radio name="5">拉拉</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
            v-model="userInfo.sign"
            name="个性签名"
            label="个性签名"
            placeholder="个性签名(非必填)"
        />
        <van-field
            v-model="userInfo.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="password2"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div style="height: 4rem;"></div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {showNotify} from "vant";
import router from "@/router";
import {useUserStore} from "@/stores/userStore";
import _service from "@/service";

let showUpdateInfo = ref(false);
let uploader = ref([{url: ''}]);
let userInfo = ref({
  id: 0,
  userName: '',
  gameName: '',
  realName: '',
  sex: 0,
  marry: 0,
  sign: '',
  password: '',
  headImgUrl: 'https://wxwzfile.oss-cn-shenzhen.aliyuncs.com/img/qingzedian/imgs/%E5%B0%8F%E7%8C%AB.png'
});
let password2 = ref('');


const show = () => {
  showUpdateInfo.value = !showUpdateInfo.value
  console.log(showUpdateInfo.value)
};
const logOut = () => {
  showNotify({type: 'success', message: '退出成功!'});
  localStorage.setItem("isSignIn", "0");
  localStorage.removeItem("userInfo");
  router.push("/login");
};
const setUserInfo = () => {
  let userInfo = useUserStore().userInfo;
  uploader[0].url = userInfo.headImgUrl;
};
const afterRead = (file) => {
  let formData = new FormData();
  formData.append("file", file.file);
  _service.upload(formData).then(res => {
    if (res) {
      console.log(res)
      // if (res.reqStatus === 0 && res.handleStatus === 0) {
      //   userInfo.headImgUrl = res.resData;
      // } else {
      //   showNotify({type: 'warning', message: '头像上传失败,请重新尝试!'});
      // }
    }
  })
};
const onSubmit = () => {

}
</script>

<style scoped>
.Menu {
  width: 100%;
  height: 100%;
}

.controller {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menuBtn {
  color: orangered;
  margin: 10px;
  border-radius: 10px;
}

.appInformation {
  text-align: center;
}

.aboutUs {
  text-align: center;
}

.img {
  width: 100%;
  height: 500px;
  background: url("../assets/imgs/menu_BG_01.png") no-repeat;
  background-size: contain;
}
</style>
