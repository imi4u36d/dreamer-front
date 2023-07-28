import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Notify } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notify)

app.mount('#app')
