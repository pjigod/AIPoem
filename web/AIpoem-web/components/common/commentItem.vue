<template>
<div class="comment-container">
   <div class="left-image">

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
            
        }
    },
    props:[
        'cid',
        'content',
        'time',
        'userId'
    ]
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