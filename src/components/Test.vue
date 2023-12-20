<template>
  <div>
    <el-button @click="toNormal">
      去Normal
    </el-button>
  </div>
  
</template>
<script>
import Service from './service.vue';
// import { getCurrentInstance, ref } from 'vue';
import ClipboardJS from 'clipboard';
// import {useRouter} from 'vue-router';
export default {
  name: '',
  data() {
    return {
      fileList: [],
      // router,
      value: `new File(['%', '3', 'C', 'p', '%', '3', 'E', 'c', 'o', 'p', 'y', '%', '3', 'C', '/', 'p', '%', '3', 'E'],'name')`,
    }
  },
  methods: {
    beforeUpload(file) {
      console.log(file);
    },
    getValue() {
      // const { proxy } = getCurrentInstance();
      // let _this = this;

    },
    toNormal(){
      this.router.push('/normal',{
        query:{
          id:18
        }
      })
    }
  },
  mounted() {
    let clipboard = new ClipboardJS(".btn");
    clipboard.on('success', function () {
      console.log(' success');
      // clipboard.$toast('复制成功');
    });
    clipboard.on('error', function () {
      // _this.$toast("复制失败")
    });
    // Service.get('copyData', (res) => {
    //   this.value = res.data;
    // });
  },
  setup(){
      // this.router = useRouter()

      // router.push('/normal')
}
}
</script>
<style lang="scss" scoped>
.block {
  border: 1px solid;
  margin: 20px;
  height: 100px;
  width: 100px;
}
.afterr::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
</style>