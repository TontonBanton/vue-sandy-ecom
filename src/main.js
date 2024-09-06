import { createApp } from 'vue'
import router from './router';

import './assets/main.css'
import "primeicons/primeicons.css";

import Toast from 'vue-toastification';          // Note: use npm i vue-toastification@next for the latest version to avoid error
import 'vue-toastification/dist/index.css';      // Import toast css styling";

import App from './App.vue'

const app = createApp(App)
  app.use(router)
  app.use(Toast)
  app.mount('#app')
