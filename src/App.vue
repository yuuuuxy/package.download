<template>
  <div class="app">
    <el-menu
      style="height:100px"
      default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item,index) of routers" :key="index" :index="index">
        <router-link v-if="item.path!=='/'"
          style="text-decoration:none;height:100%;display:block;width:100%"
          :to="item.path"
        >{{ item.name }}</router-link>
      </el-menu-item>
    </el-menu>
    <router-view style="height:calc(100% - 100px);overflow-y:auto;margin:0 auto"></router-view>
  </div>
</template>

<script>
import Home from './components/HelloWorld.vue';

import { getCurrentInstance, ref } from 'vue';
export default {
  name: 'App',
  components: {
    Home
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const r = 10;
    const routers = ref(proxy.$router.options.routes);
    return {
      routers
    };
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
li>a {
  padding: 0 20px;
}
li {
  padding: 0 !important;
}
</style>
