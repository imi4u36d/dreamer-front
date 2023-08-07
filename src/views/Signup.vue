<script lang="ts" setup>
import _service from "@/service";
import {useUserStore} from "@/stores/userStore";
import {ref} from "vue";
import router from "@/router";
import {showNotify} from 'vant';

const email = ref('');
const password = ref('');

function submitForm() {

  let params = {
    username: email.value,
    pwd: password.value
  }

  _service.signup(params).then(res => {
    if (res.code === "200") {
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      // // 登陆成功，缓存用户信息
      // useUserStore().setUserInfo({
      //   userId: res.data.userId,
      //   username: res.data.username,
      //   token: res.data.token
      // })
      showNotify({type: 'success', message: '注册成功!'});
      // 跳转到首页
      router.push({path: '/'})
    } else {
      console.log(res)
      showNotify({type: 'warning', message: res.msg});
    }
  })
}
</script>

<template>
  <div class="container">
    <h1>注册</h1>
    <form>
      <div class="form-group">
        <label for="email">用户名/邮箱</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" @click.prevent="submitForm">注册并登陆</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #007aff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}
</style>

