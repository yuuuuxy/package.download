import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import Test from './components/Test.vue'
import HelloWorld from './components/HelloWorld'
import Normal from './components/Normal'

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path:'/',redirect: 'home' },
  { path: '/test', name: 'Test', component: Test },
  {
    path: '/home', name: 'Home', component: HelloWorld, prodShow: process.env.NODE_ENV === 'production'
  },
  {
    path: '/normal', name: 'Normal', component: Normal
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
installElementPlus(app)
app.mount('#app')