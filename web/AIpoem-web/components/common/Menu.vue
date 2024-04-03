<template>
    <div class="container1">
        <div class="text">
            <div class="text-content">
                <text style="font-size: 60px;font-family:'KaiTi'">AI赋诗</text>
            </div>
        </div>
        <div class="storyboard">
            <div id="home" class="tabbar" @click="navTo('/home')">
                <text @click="changeFlag(1)" :class="{ 'white-text': flag === 1 }"> 首页</text>
            </div>
            <div id="create" class="tabbar" @click="navTo('/createPoem')">
                <text @click="changeFlag(2)" :class="{ 'white-text': flag === 2 }"> 创作</text>
            </div>
            <div id="collection" class="tabbar" @click="navTo('/poemCollect')">
                <text @click="changeFlag(3)" :class="{ 'white-text': flag === 3 }"> 诗廊</text>

            </div>
            <div id="my" class="tabbar" @click="navTo('/my')">

                <text @click="changeFlag(4)" :class="{ 'white-text': flag === 4 }"> 我的</text>
            </div>
            <div id="about" class="tabbar" @click="navTo('/about')">

                <text @click="changeFlag(5)" :class="{ 'white-text': flag === 5 }"> 关于</text>
            </div>
        </div>
        <div class="search">
            <div class="search-text">
                <input type="text" placeholder="请输入" class="search-input">
                <button class="search-button">搜索</button>
            </div>
        </div>
        <div v-if="userinfo" class="avatar">
            <img src="../../src/static/img/user.png" class="img">
        </div>
        <div class="register" v-else>
            <div class="register-content" @click="navTo('/register')">
                注册
            </div>
        </div>
        <div v-if="userinfo" class="logout">
            <button type="button" @click="logout" class="button">登出</button>
        </div>
        <div class="login" v-else>
            <div class="login-content" @click="navTo('/login')">
                <text>登录</text>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
export default {
    setup() {
    const currentPage = ref(''); // 使用ref创建响应式数据

    onBeforeMount(() => {
      currentPage.value = window.location.pathname; // 在组件渲染前获取当前页面路径并更新data属性的值
    });

    return {
      currentPage
    };
  },
    data() {
        return {
            userinfo: this.$store.state.token,
            flag: 0,
           

        }
    },
    methods: {
        changeFlag(f) {
            this.flag = f
            //console.log(this.flag)
        },
        navTo(url) {
            this.$router.push(url)
            // console.log(this.$store.state.token)
            // console.log(this.userinfo)
        },
        logout() {
            this.$store.commit('del_token')
        }
    },
    mounted(){
        if(this.currentPage==='/home'){
            this.flag=1
        }
        if(this.currentPage==='/createPoem'){
            this.flag=2
        }
        if(this.currentPage==='/poemCollect'){
            this.flag=3
        }
        if(this.currentPage==='/my'){
            this.flag=4
        }
        if(this.currentPage==='/about'){
            this.flag=5
        }
        
    }
  
}
</script>
<style>
.white-text {
    color: aliceblue;
}

.container1 {
    height: 70px;
    width: 100%;
    display: flex;
    background-color: grey;
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
}

.tabbar {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-family: 'KaiTi'
}

.tabbar:hover {
    color: aliceblue;
}

.search {
    display: flex;
    width: 20%;
    margin-left: 170px;
}

.search-text {
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-input {
    width: 200px;
    height: 30px;
    text-indent: 25px;
    border-radius: 16px 0 0 16px;
    border: 0 none;
    outline: none;
}

.search-button {
    border-radius: 0 16px 16px 0;
    width: 77px;
    height: 32px;
    border: 0 none;
    outline: 0;
    font-size: 19px;
    font-family: KaiTi;
    cursor: pointer;
}

.register {
    width: 7%;
    display: flex;

}

.register-content {
    display: flex;
    align-items: center;

}

.login {
    display: flex;
    width: 7%;

}

.login-content {
    display: flex;
    align-items: center;

}

.avatar {
    display: flex;
    width: 7%;
}

.img {
    border-radius: 50%;
    border-color: white;
}

.logout {
    width: 20%;
    display: flex;
}

.button {
    background-color: rgb(138, 60, 60);
    width: 100px;
    height: 40px
}
</style>