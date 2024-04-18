<template>
    <Menu></Menu>
    <div class="container2">
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
                <button class="button1" style="justify-content: flex-end;
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
            page: this.$route.params.pagenum,
            colpoemid: 0,
            isShow: false
        }
    },
    async created() {
        this.fetchData(this.$route.params.pagenum);
        this.$watch(
            () => this.$route.params.pagenum, this.fetchData

        )
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        },
        changeThisPoem(f) {
            this.colpoemid = f
            this.isShow = true

        },
        fetchData(data) {
            get('/poem/getallcomplete', {
                pagenum: data,
                pagesize: 20
            }).then(res => {
                this.poemList = res.data.data
                window.scrollTo({
                    top: 0,
                    behavior:'smooth', // 可选，平滑滚动
                });
                // console.log(this.$route.params.pagenum)
                // console.log(parseInt(this.page))
                // console.log(res)

            })
        },
        gonext() {
            const url = parseInt(this.page) + 1
            this.navTo('/poemCollect/' + url)
            this.page = parseInt(this.page) + 1


        },
        gopre() {
            const url = parseInt(this.page) - 1
            this.navTo('/poemCollect/' + url)
            this.page = parseInt(this.page) - 1
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
    padding-top: 40px;
    background: url(../../static/img/pcbg.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 40px;

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