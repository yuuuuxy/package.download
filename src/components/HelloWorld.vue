<template>
  <div>
    <el-button @click="refreshAppList()" type="primary" plain>fetch apk</el-button>
    <el-button v-if="mode" @click="restartNode()" type="primary" plain>start access to new world</el-button>
    <el-button @click="deleteApk()" type="primary" plain>delete apk</el-button>
    <el-button @click="loadFileList()" type="primary" plain>refresh list</el-button>
    <br />
    <Card v-for="(item,index) of filesNameArray" :key="index" :item="item"></Card>
  </div>
</template>

<script>
import Card from './card.vue';
import Service from './service.vue';
export default {
  name: 'HelloWorld',
  data() {
    return {
      filesNameArray: [],
      msgStr: '',
      mode: process.env.NODE_ENV === 'development'
    }
  },
  components: {
    Card
  },
  watch: {
    filesNameArray: function (val) {
      this.filesNameArray = val
    }
  },
  props: {
    msg: String,
  },
  methods: {
    download: (name) => {
      const aEle = document.createElement('a');
      aEle.href = `http://${document.domain}:8081/file?fileName=${name}`;
      aEle.click();
    },
    loadFileList() {
      Service.get('filename', (res) => {
        this.$data.filesNameArray = res.data.filter(ite => ite.fileName.indexOf('.apk') !== -1 ||ite.fileName.indexOf('.exe') !== -1);
      }, () => {
        this.$data.filesNameArray = [];
      });
    },
    refreshAppList() {
      Service.get('refreshAppList', () => {
        this.copyApk();
      });
    },
    restartNode() {
      Service.get('startnode', () => { });
    },
    deleteApk() {
      Service.get('deleteApk', () => { this.loadFileList()});
    }
  },
  mounted() {
    this.loadFileList();
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
