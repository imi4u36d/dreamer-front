<script lang="ts" setup>
import _service from "@/service";
import {useUserStore} from "@/stores/userStore";
import {ref} from "vue";
import router from "@/router";
import {showNotify} from 'vant';
import { sha256 } from 'js-sha256'

const title = 'Login';
const buttonLabel = 'Login';
const email = ref('');
const password = ref('');

const submitForm = () => {

  let params = {
    username: email.value,
    pwd: sha256(password.value)
  }

  _service.login(params).then(res => {
    if (res.code === "200") {
      // 登陆成功，缓存用户信息
      useUserStore().setUserInfo({
        userId: res.data.userId,
        username: res.data.username,
        token: res.data.token
      })
      showNotify({type: 'success', message: '登陆成功!'});
      // 跳转到首页
      router.push({path: '/'})
    } else {
      showNotify({type: 'warning', message: '登录失败!'});
    }
  })
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" @click.prevent="submitForm">{{ buttonLabel }}</button>
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
  font-weight: bold;
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

