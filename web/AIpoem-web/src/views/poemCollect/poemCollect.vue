<template>
    <Menu></Menu>
    <div class="container2">
        <div class="pctemp">
        </div>
        <div class="pctype">
            <div :class="{ 'onetype': pstyle !=='poem' ,'thisType': pstyle==='poem'}">
                <text @click="changepStyle('poem')" >普通诗</text>
            </div>
            <div :class="{ 'onetype': pstyle !=='couplet' ,'thisType': pstyle==='couplet'}">
                <text @click="changepStyle('couplet')">对联</text>
            </div>
            <div :class="{ 'onetype': pstyle !=='style' ,'thisType': pstyle==='style'}">
                <text @click="changepStyle('style')">风格诗</text>
            </div>
            <div :class="{ 'onetype': pstyle !=='cangtou' ,'thisType': pstyle==='cangtou'}">
                <text @click="changepStyle('cangtou')">藏头诗</text>
            </div>
            <div :class="{ 'onetype': pstyle !=='songci' ,'thisType': pstyle==='songci'}">
                <text @click="changepStyle('songci')">宋词</text>
            </div>
        </div>
        <div class="pctemp">
        </div>
        <div class="poemList">
            <poem v-for="(item, index) in poemList" :key="index" :pid="item.id" :ctime="item.createTime"
                :authorId="item.creator.nickname" :type="item.type" :poemtext="item.output" :title="item.prompt"
                :PuserImgUrl="item.creator.avatar" @click="changeThisPoem(item.id)">

            </poem>
            <div class="overlay" v-if="isShow" @click="closeDialog"></div>
            <poemitem v-model:isShow='isShow' :pid="this.colpoemid" v-if="isShow">

            </poemitem>

        </div>
        <div class="pagination">
            <div class="pre-button">
                <button class="button1" v-if="page != 0" @click="gopre">上一页</button>
            </div>
            <div class="next-button">
                <button class="button1" v-if="nextIsShow" style="justify-content: flex-end;
    background: linear-gradient(62deg, rgba(141, 138, 116, 1) 0%,rgba(222, 218, 207, 1)  100%);
                " @click="gonext">下一页</button>

            </div>
        </div>

    </div>
</template>
<script>
import poem from "../../../components/common/poem.vue"
import poemitem from "../../../components/common/poemitem.vue"
import { get } from "../../../utils/request";
export default {
    data() {
        return {
            poemList: [],
            page: 0,
            colpoemid: 0,
            isShow: false,
            nextIsShow: true,
            pstyle: 'poem'
        }
    },
    async created() {
        this.fetchData(this.page);
        this.$watch(
            () => this.page, ()=>{
                this.fetchData(this.page)
            }

        )
        this.$watch(
            ()=>this.pstyle,()=>{
                this.fetchData(this.page)
            }
        )
    },
    methods: {
        changepStyle(pstyle) {
            this.pstyle = pstyle;
            //console.log(this.pstyle)
        },
        navTo(url) {
            this.$router.push(url)
        },
        changeThisPoem(f) {
            this.colpoemid = f
            this.isShow = true

        },
        fetchData(data) {
            //console.log(this.page)
            get('/poem/searchbytag', {
                tag:this.pstyle,
                 pagenum: data,
                 pagesize: 20
            }).then(res => {
                this.poemList = res.data.data
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth', // 可选，平滑滚动
                });
                this.nextIsShow = true
                if (this.poemList.length != 20) {
                    this.nextIsShow = false
                }
                // console.log(this.$route.params.pagenum)
                // console.log(parseInt(this.page))
                //  console.log(res)
                //  console.log(1)
                 

            })
        },
        gonext() {
            // const url = parseInt(this.page) + 1
            // this.navTo('/poemCollect/' + url)
            // this.page = parseInt(this.page) + 1
            this.page =this.page+ 1

        },
        gopre() {
            this.page =this.page- 1
        }
    },
    components: {
        poem,
        poemitem
    },

    watch: {
        isShow(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden'; // 允许页面滚动
            } else {
                document.body.style.overflow = 'auto'; // 禁止页面滚动
            }
        },

        // $route(to,form){
        //      this.fetchData();
        //     window.location.reload
        // }
    }
}

</script>
<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 设置遮罩层的背景颜色和透明度 */
    z-index: 9999;
}


.container2 {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    background: url(../../static/img/pcbg1.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 40px;

}

.pctemp {
    width: 100%;
    height: 20px;
}
.thisType{
    width: 100px;
    height: 40px;
    border-radius: 24px;
    background-color: azure;
    font-size: 20px;
    font-family: KaiTi;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
}
.pctype {
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-around;
}

.onetype {
    width: 100px;
    height: 40px;
    border-radius: 24px;
    background-color: rgb(236, 230, 221);
    font-size: 20px;
    font-family: KaiTi;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
}

.poemList {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 55px;
}

.pagination {
    grid-column: 1 / -1;
    display: grid;
    grid-gap: 14px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100px;
    padding-top: 40px;
}

.pagination .button1 {
    display: flex;
    align-items: center;
    background: rgb(222, 218, 207);
    background: linear-gradient(62deg, rgba(222, 218, 207, 1) 0%, rgba(141, 138, 116, 1) 100%);
    padding: 20px;
    height: 60%;
    width: 200px;
    font-size: 25px;
    font-family: KaiTi;
    color: black;
}

.next-button {
    display: flex;
    justify-content: center;
}

.pre-button {
    display: flex;
    justify-content: center;
}
</style>