<template>
  <Menu></Menu>
  <div id="Vuemy">
  <div class="sidebar">
    <nav>
      <ul>
        <p>个人中心</p>
        <li><a href="#" @click="showInfo">个人信息</a></li>
        <li><a href="#" @click="changeMessage">信息修改</a></li>
        <li><a href="#" @click="avatarChange">头像修改</a></li>
        <li><a href="#" @click="myCreate">我的创作</a></li>
      </ul>
    </nav>
  </div>
  <div class="infocontainer" v-if="showinfo == 1">
    <h1>信息修改</h1>
    <div class="form-input">
      <label for="name">用户名:</label>
      <input type="text" id="name" name="name" v-model="username"/>
    </div>
    <div class="form-input">
      <label for="age">昵称:</label>
      <input type="text" id="age" name="age" v-model="nickname"/>
    </div>
    <div class="form-input">
      <label for="email">邮箱:</label>
      <input type="email" id="email" name="email" v-model="email"/>
    </div>
    <div class="form-input">
      <input type="submit" value="提交" @click="infoChangeSubmit"/>
    </div>
  </div>
  <div v-else-if="showinfo == 2">
    <div class="containeravatar">
      <h2>上传头像</h2>
      <input type="file" @change="handleFileUpload" accept="image/*" />
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="预览区域"
        class="AvatarSubmit"
      />
      <img v-else :src="photo" class="AvatarSubmit" />
      <button @click="avatarChangeSubmit" :disabled="!imageUrl">上传</button>
    </div>
  </div>
  <div v-else-if="showinfo == 3">我的创作</div>
  <div class="infocontainer" v-else>
    <h1>个人信息</h1>
    <img v-if=photo :src="photo" class="avatarPerson" />
    <img v-else src="../../static/img/user.png" class="avatarPerson">
    <div class="form-input">
      <label for="name">用户名:</label>
      <input type="text" id="name" name="name" :value="username" />
    </div>
    <div class="form-input">
      <label for="age">昵称:</label>
      <input type="text" id="age" name="age" :value="nickname"/>
    </div>
    <div class="form-input">
      <label for="email">邮箱:</label>
      <input type="email" id="email" name="email" :value="email"/>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import { get,post } from "../../../utils/request";
export default {
  data() {
    return {
      showinfo: 0,
      username: "",
      password: "",
      nickname: "",
      avatar: "",
      selectedFile: null,
      imageUrl: null,
      avatarUrl:null,
      photo:''
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.selectedFile);
    },
    changeMessage() {
      //点击跳转信息更改界面
      this.showinfo = 1;
    },
    avatarChange() {
      //点击跳转头像更改界面
      this.showinfo = 2;
    },
    myCreate() {
      //点击跳转我的创作界面
      this.showinfo = 3;
    },
    showInfo() {
      //点击跳转个人信息界面
      this.showinfo = 0;
    },
    getInfo() {
      //获取当前用户信息
      get("/user/profile").then((res) => {
        console.log(res.data.data);
        this.username=res.data.data.username;
        this.email=res.data.data.email;
        this.nickname=res.data.data.nickname;
        this.avatarUrl=res.data.data.avatar
        console.log(this.avatarUrl)
        this.photo='http://124.221.53.69:8080/photo/get?url='+this.avatarUrl
      });
    },
    avatarChangeSubmit() {
      if (!this.selectedFile) {
        alert('请先选择要上传的文件');
        return;
      }
      const formData = new FormData();
      formData.append('photo', this.selectedFile);
      console.log(this.selectedFile)
      console.log(formData)
      //头像更改提交
      axios.post('http://124.221.53.69:8080/user/avatar',formData,{
        headers: {
        'Content-Type': 'multipart/form-data',
        'token':this.$store.state.token
        }
      }).then(res=>{
        console.log(res)
        alert('上传成功')
      })
    },
    infoChangeSubmit() {
      //信息更改提交
      axios({
        url:'http://124.221.53.69:8080/user/update',
        method:'post',
        headers: {
        'content-Type': 'application/json;charset=UTF-8',
        'token':this.$store.state.token
        },
        params:{
          nickname:this.nickname
        }
      }).then(res=>{
        console.log(res)
        alert('修改成功')
      })
    },
  },
  mounted(){
    this.getInfo();
  }
};
</script>
<style>
.infocontainer {
  background-color:rgba(13, 241, 203, 0.014);
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  height: 800px;
  margin-top: 0;
  margin-left: 10%;
  float: left;
  text-align: center;
  opacity: 0.6;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}
.info {
  margin-bottom: 20px;
}
.info label {
  font-weight: bold;
}
.info p {
  margin: 0;
}
.info p:not(:last-child) {
  margin-bottom: 5px;
}
.form-input {
  margin-bottom: 50px;
  display: flex;
}
.form-input label {
  display: block;
  font-weight: bold;
}
.form-input input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-input input[type="submit"] {
  background-color: #666f66;
  color: white;
  border: none;
  cursor: pointer;
}
.form-input input[type="submit"]:hover {
  background-color: #45a049;
}
.sidebar {
  width: 10%;
  height: 100vh;
  background-color:rgba(13, 241, 203, 0.014);
  padding: 10px;
  float: left;
  margin-left: 10%;
}
.sidebar nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 100px;
}
.sidebar li {
  margin-bottom: 10px;
}
.sidebar a {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 5px;
}
.sidebar a:hover {
  background-color: #333;
  color: #fff;
}
.sidebar {
  height: 100vh;
  padding: 10px;
}
.sidebar nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.sidebar li {
  margin-bottom: 10px;
}
.sidebar a {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.sidebar a:hover {
  background-color: #333;
  color: #fff;
}
.avatarPerson {
  justify-content: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
}
.containeravatar {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-left: 15%;
  height:800px;
  float: left;
}
h2 {
  text-align: center;
}
button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
#Vuemy{
  background: url("../../static/img/my.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
.AvatarSubmit{
  border-radius: 50%;
  margin-top: 10px;
  width: 300px;
  height: 300px;
}
</style>