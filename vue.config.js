module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/': { //请求路径关键字
        target: 'http://localhost:8081/', //对应自己的接口
        changeOrigin: true,//是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，
        // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true,
        pathRewrite: {
          '^/': ''      //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
          // 比如我要调用'http://localhost:8024/management/user/add'，直接写‘/api/user/add’即可
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
}