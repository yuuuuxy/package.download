<template>
  <div style>
    <div class="block">
      <textarea id="text" :value="value" @dblclick="getValue" />
      <button
        class="btn"
        data-clipboard-action="cut"
        :data-clipboard-text="value"
        @click="getValue()"
      >{{ value }}</button>
    </div>
    <div class="block afterr">
      <div style="width: 200px;border: 1px solid green;">
        <div style="height:200px;border: 1px solid red;float: left;width: 100px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Service from './service.vue';
// import { getCurrentInstance, ref } from 'vue';
import ClipboardJS from 'clipboard';
export default {
  name: '',
  data() {
    return {
      fileList: [],
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