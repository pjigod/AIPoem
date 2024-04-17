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
        <div class="pagenav">
            
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
            //     {
            //         pid: 1,
            //         ctime: '2024-3-26',
            //         authorId: 'wcf',
            //         type: "duilian",
            //         poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
            //         title: "回乡偶书"
            //     },
            //     {
            //         pid: 10,
            //         ctime: '2024-3-27',
            //         authorId: 'wcf1',
            //         type: "duilian",
            //         poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
            //         title: "回乡偶书"
            //     }, {
            //         pid: 3,
            //         ctime: '2024-3-28',
            //         authorId: 'wcf2',
            //         type: "duilian",
            //         poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
            //         title: "回乡偶书"
            //     },
            //     {
            //         pid: 4,
            //         ctime: '2024-3-29',
            //         authorId: 'wcf3',
            //         type: "duilian",
            //         poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
            //         title: "回乡偶书"
            //     }
            // ],
            colpoemid: 0,
            isShow: false
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        },
        changeThisPoem(f) {
            this.colpoemid = f
            this.isShow = true

        },
        fetchData() {
            get('/poem/getallcomplete', {
                pagenum: 0,
                pagesize: 20
            }).then(res => {
                this.poemList = res.data.data
                // console.log(this.poemList)
                // console.log(res)

            })
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
        }
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
    padding-top: 40px;
    background: url(../../static/img/pcbg.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

.poemList {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 55px;
}
</style>