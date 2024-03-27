<template>
<div class="container1">
    <div class="text">
        <div class="text-content">
            <text style="font-size: 60px;font-family:'KaiTi'" >AI赋诗</text>
        </div>
    </div>
    <div class="storyboard">
        <div id="home" class="tabbar" @click="navTo('/home')" style="color: aliceblue;">首页</div>
        <div id="create" class="tabbar" @click="navTo('/createPoem')">创作</div>
        <div id="collection" class="tabbar" @click="navTo('/poemCollect')">诗廊</div>
        <div id="my" class="tabbar" @click="navTo('/my')">我的</div>
        <div id="about" class="tabbar" @click="navTo('/about')">关于</div>
    </div>
    <div class="search">
        <div class="search-text">
            <input type="text" placeholder="请输入"  class="search-input">
            <button class="search-button">搜索</button>

        </div>
        
    </div>
    <div class="register">
        <div class="register-content" @click="navTo('/register')">
            <text style="font-family: KaiTi;font-size: 25px;">注册</text>
        </div>
    </div>
    <div class="login">
        <div class="login-content" @click="navTo('/login')">
            <text style="font-family: KaiTi;font-size: 25px;">登录</text>  
        </div>
    </div>
</div>
<div class="container2">
 
</div>
</template>
<script>

    export default {
        methods:{
            navTo(url){
                this.$router.push(url)
            }
        },
        components:{
            
        }
    }
</script>
<style>
.container1{
    height: 70px;
    width:100%;
    display: flex;
    background-color: grey;
    cursor: default;
}
.text{
    height: 100%;
    width: 25%;
    display: flex;
}
.text-content{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.storyboard{
    display: flex;
    gap: 40px;
}

.tabbar{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-family: KaiTi;

}
.tabbar:hover{
    color: aliceblue;
}
.search{
    display: flex;
    width: 20%;
    margin-left: 170px;
}
.search-text{
    display: flex;
    align-items: center;
    justify-content: center;
}
.search-input{
        width: 200px;
        height: 30px;
        text-indent: 25px;
        border-radius: 16px 0 0 16px;
        border: 0 none;
        outline:none;
  
        
    }
    .search-button{
        border-radius: 0 16px 16px 0;
        width: 77px;
        height: 32px;
        border: 0 none;
        outline: 0;
        font-size: 19px;
        font-family: KaiTi;
        cursor: pointer;
    }
.register{
    width: 7%;
    display: flex;

}
.register-content{
    display: flex;
    align-items: center;

}
.login{
    display: flex;
    width: 7%;

}
.login-content{
    display: flex;
    align-items: center;
   
}


</style>