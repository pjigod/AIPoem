
// 导入 Vue 和 Vue Router
import Vue from 'vue';
import Router from 'vue-router';

// 使用 Vue Router 插件
Vue.use(Router);

// 创建一个全局方法，用于页面跳转
export function navTo(url) {
  // 创建一个新的 Vue Router 实例
//   const router = new Router({
//     // 这里根据你的项目配置进行相应的设置
//     // ...
//   });
  
  // 调用 $router.push 方法进行页面跳转
  this.$router.push(url);
}
export default{
    navTo
}