<template>
  <div class="file" @click="download(item.fileName)" @mouseenter="$emit('change',item.fileName)">
    <svg
      t="1635933272239"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6801"
      width="200"
      height="200"
    >
      <path
        d="M168.805099 269.206999m44.340501-25.6l0 0q44.340501-25.6 69.940501 18.7405l51.2 88.681002q25.6 44.340501-18.740501 69.9405l0 0q-44.340501 25.6-69.940501-18.7405l-51.2-88.681002q-25.6-44.340501 18.740501-69.9405Z"
        fill="#8BE1A3"
        p-id="6802"
      />
      <path
        d="M871.874991 269.204022m-44.340501-25.6l0 0q-44.340501-25.6-69.9405 18.7405l-51.2 88.681002q-25.6 44.340501 18.7405 69.940501l0 0q44.340501 25.6 69.940501-18.740501l51.2-88.681002q25.6-44.340501-18.740501-69.9405Z"
        fill="#8BE1A3"
        p-id="6803"
      />
      <path
        d="M51.328 761.472c0.0768-0.896 0.1024-1.6384 0.1024-2.2528C51.4304 495.8336 289.2544 307.2 511.936 307.2c222.6944 0 460.6976 188.6336 460.6976 452.9664 0 0.5504 0.0256 1.1776 0.064 1.92A53.888 53.888 0 0 1 918.912 819.2H105.1008a53.888 53.888 0 0 1-53.76-57.728z"
        fill="#8BE1A3"
        p-id="6804"
      />
      <path
        d="M358.4 665.6m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
        fill="#58C49D"
        p-id="6805"
      />
      <path
        d="M665.6 665.6m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
        fill="#58C49D"
        p-id="6806"
      />
    </svg>
    <div class="file-name" title="{{ item.fileName }}">{{ item.fileName }}</div>
    <div style="font-size:10px">{{ formatDate(item.birthtime, 'yyyy-MM-dd hh:mm:ss') }}</div>
  </div>
</template>
<script>

export default {

  name: 'Card',
  props: {
    item: Object
  },
  emits:[
    // 'change'
  ],
  methods: {
    download: (name) => {
      const aEle = document.createElement('a');
      window.origin
      aEle.href = `http://${document.domain}:8081/file?fileName=${name}`;
      aEle.click();
    },
    formatDate(value, format) {
      //value: 需要格式化的数据
      //format: 指定格式 yyyy-MM-dd hh:mm:ss

      let date = new Date(value);
      // 获取年份
      let year = date.getFullYear();

      if (/(y+)/.test(format)) {
        // 获取匹配组的内容
        let content = RegExp.$1;
        format = format.replace(content, year.toString().slice(4 - content.length));
      }

      let o = {
        // y: date.getFullYear(),  // 用这一句也行，但只适用于四位数显示时候用
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
      };

      for (let key in o) {
        // 构造动态正则
        let reg = new RegExp(`(${key}+)`);

        if (reg.test(format)) {
          // 获取匹配组的内容
          let content = RegExp.$1;
          let k = o[key] >= 10 ? o[key] : content.length == 2 ? '0' + o[key] : o[key];
          format = format.replace(content, k);
        }
      }
      return format;
      }
    ,
    changeState:()=>{
    }
    },
    setup(props,ctx) {
      
    }
}
</script>
<style scoped>
.file {
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  box-shadow: 10px 10px 10px lightblue;
  padding: 10px;
  margin: 10px;
}
.file-name {
  width: 100px;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 75px;
}
</style>