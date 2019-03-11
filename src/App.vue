<template>
  <div
    id="app"
    :class="$style.app"
  >
    <wc-aside></wc-aside>
    <wc-main></wc-main>
    <!-- <button @click="log">dianwo</button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import aside from "@/components/aside.vue";
import main from './components/main'

export default {
  name: "app",
  components: {
    "wc-aside": aside,
    'wc-main': main
  },
  data() {
    return {
      title: "wc 采集系统",
      count: 9
    };
  },
  methods: {
    log() {
      let result = "nickname=&aom=hand&range=3&button=undefined";
      result = decodeURIComponent(result, true);
      this.$socket.emit("gzhs_todolist_add", result);
      console.log(result);
    }
  },

  // sockets: {
  //   connect: function() {
  //     //这里是监听connect事件
  //     this.id = this.$socket.id;
  //     // 绑定和服务器连接成功信息
  //     this.$socket.on("connect", function() {
  //       socket.emit("connected replay", {
  //         data: "I'm connected!"
  //       });
  //     });
  //   },
  //   customEmit: function(val) {
  //     console.log(
  //       'this method was fired by the socket server. eg: io.emit("customEmit", data)'
  //     );
  //   }
  // },
  mounted() {
    // 和服务器进行数据通信绑定
    // console.log("创建wobsocket 通信");
    // var socket = this.$socket;
    // 绑定和服务器连接成功信息
    // socket.on("connect", function() {
    //   socket.emit("connected replay", {
    //     data: "I'm connected!"
    //   });
    // });
    // // 手机爬虫状态
    // this.sockets.subscribe("phone_crawler_data", data => {
    //   this.gzh.phone_crawler_data = data.message;
    //   console.log(this.gzh.phone_crawler_data);
    // });
    // this.count =  this.$store.state.count
    // console.log(this.$store.state.ls)
    // this.phone_crawler_data =
    // console.log(this.$)
    // this.$store.dispatch('SOCKET_gzhs_list_data')
    // socket.on("phone_crawler_data", data => {
    //   console.log(data);
    //   this.vm_phone_crawler_data.crawlers = data;
    // });
    // // 显示当前的爬取文章队列
    // socket.on("articles_logger_monitoring", function(data) {
    //   //添加一个颜色属性
    //   vm_articles_logger_monitoring.articles = data;
    // });
    // // 数据库中的所有公众号列表数据更新
    // socket.on("gzhs_list_data", function(data) {
    //   vm_gzhs_list_data.gzhs = data;
    // });
    // // 正在执行爬取任务的公众号列表数据更新
    // socket.on("gzhs_todolist_data", function(data) {
    //   vm_gzhs_todolist_data.gzhs = data;
    // });
    // // 公众号分类数据更新
    // socket.on("gzh_category", function(data) {
    //   vm_app_gzh_category_data.category = data;
    // });
    // setTimeout(() => {
    //   console.log("创建完成");
    // }, 100);
  }
};
</script>

<style lang="postcss" module>
@import "./base/gobal.css";
.app {
  @mixin flexbox;
  width: 100vw;
  position: absolute;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1d2329;
  text-align: center;
  color: #2c3e50;
}
</style>
