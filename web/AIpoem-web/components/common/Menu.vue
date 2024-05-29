<template>
  <div class="mcontainer">
    <div class="text">
      <div class="text-content">
        <text style="font-size: 60px; font-family: 'KaiTi'">AI赋诗</text>
      </div>
    </div>
    <div class="storyboard">
      <div id="home" class="tabbar" @click="navTo('/home')">
        <text @click="changeFlag(1)" :class="{ 'white-text': flag === 1 }">
          首页</text>
      </div>
      <div id="create" class="tabbar" @click="navTo('/createPoem')">
        <text @click="changeFlag(2)" :class="{ 'white-text': flag === 2 }">
          创作</text>
      </div>
      <div id="collection" class="tabbar" @click="navTo('/poemCollect')">
        <text @click="changeFlag(3)" :class="{ 'white-text': flag === 3 }">
          诗廊</text>
      </div>
      <div id="my" class="tabbar" @click="navTo('/my')">
        <text @click="changeFlag(4)" :class="{ 'white-text': flag === 4 }">
          我的</text>
      </div>
      <div id="about" class="tabbar" @click="navTo('/about')">
        <text @click="changeFlag(5)" :class="{ 'white-text': flag === 5 }">
          关于</text>
      </div>
    </div>
    <div class="search">

    </div>
    <div v-if="userinfo" class="avatar">
      <img :src="avatarphoto" class="img" />
    </div>
    <div class="register" v-else>
      <div class="register-content" @click="navTo('/register')">注册</div>
    </div>
    <div v-if="userinfo" class="logout">
      <button @click="logout" class="button">登出</button>
    </div>
    <div class="login" v-else>
      <div class="login-content" @click="navTo('/login')">
        <text>登录</text>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { get } from "../../utils/request";
export default {
  setup() {
    const currentPage = ref(""); // 使用ref创建响应式数据

    onBeforeMount(() => {
      currentPage.value = window.location.pathname; // 在组件渲染前获取当前页面路径并更新data属性的值
    });

    return {
      currentPage,
    };
  },
  data() {
    return {
      userinfo: this.$store.state.token,
      flag: 0,

      avatarphoto: "",
    };
  },
  methods: {
    changeFlag(f) {
      this.flag = f;
      //console.log(this.flag)
    },
    getAvatar() {
      get("/user/profile").then((res) => {
        console.log(res.data.data);
        this.avatarphoto =
          "http://124.221.53.69:8080/photo/get?url=" + res.data.data.avatar;
      });
    },
    navTo(url) {
      this.$router.push(url);
      // console.log(this.$store.state.token)
      // console.log(this.userinfo)
    },
    logout() {
      this.$store.commit("del_token");
      this.userinfo = "";
      alert("您已成功退出账号");
    },
  },
  mounted() {
    if (this.currentPage === "/home") {
      this.flag = 1;
    }
    if (this.currentPage === "/createPoem") {
      this.flag = 2;
    }
    if (this.currentPage === "/poemCollect") {
      this.flag = 3;
    }
    if (this.currentPage === "/my") {
      this.flag = 4;
    }
    if (this.currentPage === "/about") {
      this.flag = 5;
    }
    this.getAvatar();
    setInterval(()=>{
      this.getAvatar();
    },500)
  },
};
</script>
<style>
.white-text {
  color: rgb(141, 138, 116);
  border-bottom: 3px solid #5D6146;
  font-weight: bold;
  line-height: 45px;
  height: 43px;
}

.mcontainer {
  height: 70px;
  width: 100%;
  display: flex;
  background: rgb(222, 218, 207);
  background: linear-gradient(62deg, rgba(222, 218, 207, 1) 0%, rgba(141, 138, 116, 1) 100%);
  cursor: default;

}

.text {
  height: 100%;
  width: 25%;
  display: flex;
}

.text-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.storyboard {
  display: flex;
  gap: 40px;
  width: 475px;
}

.tabbar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  font-family: "KaiTi";
}

.tabbar:hover {
  color: rgb(141, 138, 116);
  cursor: pointer;
}

.search {
  display: flex;
  width: 20%;
}

.register {
  width: 7%;
  display: flex;
}

.register-content {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.login {
  display: flex;
  width: 7%;
}

.login-content {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.avatar {
  display: flex;
  width: 7%;
  align-items: center;
  justify-content: center;
}

.img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-left: 5%;
}

.logout {
  display: flex;
}

.button {
  background-color: rgb(138, 60, 60);
  width: 100px;
  height: 40px;
  display: inline;
  margin-top: 15%;
  margin-left: 8%;
}
</style>