<template>
<!-- 单个诗组件 -->
    <div class="picontainer" >
        <div class="title">
            {{ title }}
        </div>
        <div class="poemtext">
            {{ poemtext }}
        </div>
        <div class="containerl">
            <div class="poemtype">

            </div>
            <div class="gap"></div>
            <div class="container3">
                <div class="author">
                    <div class="author-img">
                        <img :src=imgUrl style="height: 30px;width: 30px; border-radius: 50%;" >
                    </div>
                    <div class="author-id" style="margin-left: 8px;">
                        <text>{{ authorId }}</text>
                    </div>
                </div>
                <!-- <div class="good">

                </div> -->
                <div class="time1">
                    <div class="time-img">
                     <img src="../../src/static/img/calendar.png" style="height: 30px;width: 30px;">
                    </div>
                    <div class="time-text">
                        <text>{{ ctime }}</text>
                    </div>
                </div>
             
            </div>
        </div>
        <div class="gap2"></div>
    </div>
</template>

<script>
    export default{
        data (){
            return{
                imgUrl:''
            }
        },
        methods:{
            navTo(url){
                    this.$router.push(url)
                   
                }
        },
        mounted(){
			this.imgUrl = 'http://124.221.53.69:8080/photo/get?url=' + this.PuserImgUrl;

        },
        props:[
            'pid',
            'ctime',
            'authorId',
            'type',
            'poemtext',
            'title',
            'PuserImgUrl'
        ],


    }
</script>

<style>
.picontainer{
    height: 350px;
    width: 420px;
    background-color: #EBECED;
    box-shadow: 2px 2px 2px 2px black;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: url(../../src/static/img/pbg1.jpg);
    background-size: 100% 100%;
}
.picontainer:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 10px rgb(229, 229, 229);
}
.title{
    width: 100%;
    height: 40px;  
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-family: KaiTi
}
.poemtext{
    height: 210px;
    width: 100%;
    font-size: 27px;
    font-family: KaiTi;
    display: flex;
    flex-direction: column;
}

.containerl{
    width: 100%;
    height: 90px;

}
.poemtype{
    width: 100%;
    height: 30px;
}
.gap{
    width: 100%;
    height: 20px;
}
.container3{
    width: 100%;
    height: 40px;
    display: flex;

}
.author{
    height: 100%;
    width: 40%;
    display: flex;
}
.author-img{
    margin-left: 10px;
    height: 100%;
    display: flex;
    align-items: center;
}
.author-id{
    display: flex;
    align-items: center;
    height: 100%;
}
.time1{
    height: 100%;
    width: 50%;
    display: flex;
}
.time-img{
    height: 100%;
    display: flex;
    align-items: center;
}
.time-text{
    display: flex;
    align-items: center;
    height: 100%;
}
.download{
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;

}
.gap2{
    width: 100%;
    height: 10px;
}
</style>