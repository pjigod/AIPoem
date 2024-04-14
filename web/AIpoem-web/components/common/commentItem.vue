<template>
<div class="comment-container">
   <div class="left-image">
        <img :src=imgUrl style="height: 60px;width: 60px; border-radius: 50%;">
   </div>
   <div class="right_comment">
        <div class="top-userid">
          <text style="font-size: 15px;">{{ userId }}</text>  
        </div>
        <div class="mid-content">
          <text style="font-size: 18px;">{{ content }}</text>  
        </div>
        <div class="bottom-time">
           <text style="color: rgb(187, 192, 196);"> {{ time }}</text>
        </div>
   </div>
</div>
</template>
<script>
export default {
    data() {
        return{
            imgUrl:''
        }
    },
    props:[
        'cid',
        'content',
        'time',
        'userId',
        'userImgUrl'

    ],
    mounted() {
			this.imgUrl = 'http://124.221.53.69:8080/photo/get?url=' + this.userImgUrl;
		}
    
    
}
</script>
<style>
.comment-container{
    display: flex;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc
}
.left-image{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.right_comment{
    widows: 80%;
    height: 100%;
}
.top-userid{
    width: 100%;
    height: 20px;
}
.mid-content{
    width: 100%;
    height: 60px;
}
.bottom-time{
    width: 100%;
    height: 20px;
}
</style>