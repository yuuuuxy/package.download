<template>
  <div>
    normal
    <!-- <input type="date" v-model="dataRangeStart" />
    <el-input :="key"></el-input>
    <el-button @click="generate()">generate</el-button> -->
    <div class="nn">
      <div>
        nn
      </div>
    </div>
  </div>
</template>

<script>
import { addDays, isSameDay, format } from "date-fns";
export default {
  name: "Normal",
  data() {
    return {
      key: "11",
      dataRangeStart: new Date(),
    };
  },
  methods: {
    generate() {
      this.generateByDate();
    },
    generateByDate() {
      let startDate = new Date(this.$data.dataRangeStart);
      let endDate = new Date();
      // while (!isSameDay(startDate, endDate)) {
      //   let
      //   setTimeout(() => {

      //   }, Math.floor(Math.random()*10000));
      //   let date = format(startDate, 'yyyy-MM-dd');
      //   // console.log(date);
      //   let ele = document.createElement('a');

      //   console.log( ele.href);
      //   // ele.click();
      //   startDate = addDays(startDate, 1);
      // }
    },
    dateChange(eve) {
      // console.log(eve);
    },
  },
  // setup(props) {
  //   const key = '122';
  //   const dateRange = '';
  //   watch([key, dateRange], () => {
  //     console.log(key);
  //     console.log(dateRange);
  //   }, {
  //     // 页面加载会先执行一次
  //     immediate: true
  //   });
  //   let generate = () => {
  //     console.log(key);
  //     console.log(dateRange);
  //   }
  //   return { key, dateRange, generate }
  // },
};
</script>

<style lang="scss">
@media screen {
}
@function px2rem($px) {
  $item: 37.5px;
	@return 2rem;
}
html {
  // font-size: 100px;
}

.nn {
  > div {
    height: px2rem(100px);
    width: 100px;
    border: 1px solid lightblue;
  }
}
</style>