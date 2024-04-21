<template>
    <div id="building">
      <div class="form-container">
        <p class="title1">忘记密码</p>
        <form class="form">
            <div class="input-group">
                <label for="username">用户名</label>
                <input type="text" name="username" id="username" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="input-group">
                <label for="password">输入修改后的密码</label>
                <input type="password" name="password" id="password" placeholder="修改后的密码" v-model="password">
            </div>
            <div class="input-group">
                <label for="code">邮箱验证码</label>
                <input type="text" name="code" id="code" placeholder="输入邮箱验证码" v-model="code"><button id="count" @click="getCode" type="button">获取验证码</button>
            </div>
            <div class="interval"></div>
            <button class="sign" @click="passwordChange" type="button">确认</button>
          </form>
          <p class="signup">没有账号?
		      <a href @click="navTo('/login')">返回登录</a>
	</p>
    </div>
  </div>
</template>
<script>
import {get, post} from '../../../utils/request'
      export default {
      data(){
        return{
          username:'',
          password:'',
          code:''
        }
      },
      methods:{
          navTo(url){
            this.$router.push(url)
          },
          getCode(){
            //获取邮箱验证码
            get('/user/forget/send',{
              username:this.username
            })
          },
          passwordChange(){
            //密码修改方法
            get('/user/forget',{
              username:this.username,
              password:this.password,
              code:this.code,
            }).then(res=>{
              console.log(res)
              alert('修改成功')
            }).catch(err=>{
              alert(err.response.data.message)
            })
          }
        },
      }
    </script>
    <style scoped>
    .form-container {
      width: 320px;
      border-radius: 0.75rem;
      background-color: rgb(120, 122, 126);
      padding: 2rem;
      color: rgba(243, 244, 246, 1);
      position:absolute;
      left:50%;
      top: 50%;
      transform: translate(-50%,-50%);
      opacity: 0.6;
    }
    
    .title1 {
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
    }
    
    .form {
      margin-top: 1.5rem;
    }
    
    .input-group {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    
    .input-group label {
      display: block;
      color: rgba(156, 163, 175, 1);
      margin-bottom: 4px;
    }
    
    .input-group input {
      width: 90%;
      border-radius: 0.375rem;
      border: 1px solid rgba(55, 65, 81, 1);
      outline: 0;
      background-color: rgba(17, 24, 39, 1);
      padding: 0.75rem 1rem;
      color: rgba(243, 244, 246, 1);
    }
    #code{
      width: 60%;
      border-radius: 0.375rem;
      border: 1px solid rgba(55, 65, 81, 1);
      outline: 0;
      background-color: rgba(17, 24, 39, 1);
      padding: 0.75rem 1rem;
      color: rgba(243, 244, 246, 1);
    }
    .input-group input:focus {
      border-color: rgba(167, 139, 250);
    }
    
    .forgot {
      display: flex;
      justify-content: flex-end;
      font-size: 0.75rem;
      line-height: 1rem;
      color: rgba(156, 163, 175,1);
      margin: 8px 0 14px 0;
    }
    
    .forgot a,.signup a {
      color: rgba(243, 244, 246, 1);
      text-decoration: none;
      font-size: 14px;
    }
    
    .forgot a:hover, .signup a:hover {
      text-decoration: underline rgba(167, 139, 250, 1);
    }
    
    .sign {
      display: block;
      width: 100%;
      background-color: rgba(167, 139, 250, 1);
      padding: 0.75rem;
      text-align: center;
      color: rgba(17, 24, 39, 1);
      border: none;
      border-radius: 0.375rem;
      font-weight: 600;
    }
    
    .social-message {
      display: flex;
      align-items: center;
      padding-top: 1rem;
    }
    
    .line {
      height: 1px;
      flex: 1 1 0%;
      background-color: rgba(55, 65, 81, 1);
    }
    
    .social-message .message {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgba(156, 163, 175, 1);
    }
    
    .social-icons {
      display: flex;
      justify-content: center;
    }
    
    .social-icons .icon {
      border-radius: 0.125rem;
      padding: 0.75rem;
      border: none;
      background-color: transparent;
      margin-left: 8px;
    }
    
    .social-icons .icon svg {
      height: 1.25rem;
      width: 1.25rem;
      fill: #fff;
    }
    
    .signup {
      text-align: center;
      font-size: 0.75rem;
      line-height: 1rem;
      color: rgba(156, 163, 175, 1);
    }
    #building{
      background:url("../../static/img/background.jpg");
      width:100%;
      height:100%;
      position:fixed;
      background-size:100% 100%;
    }
    #count{
				height: 36px;
				font-size: 14px;
        font-weight: 600;
        color: rgba(17, 24, 39, 1);
				text-align: center;
				background: rgba(167, 139, 250, 1);
				border: none;
				border-radius: 3px;
				margin-left: 10px;
    }
    .interval{
      height:30px
    }
    </style>