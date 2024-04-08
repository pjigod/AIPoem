<template>
    <Menu></Menu>
    <div class="container2">
        <div class="poemList">
            <poem v-for="(item, index) in poemList" :key="index" :pid="item.pid" :ctime="item.ctime"
                :authorId="item.authorId" :type="item.type" :poemtext="item.poemtext" :title="item.title"
                @click="changeThisPoem(item.pid)">

            </poem>
            <div class="overlay" v-if="isShow" @click="closeDialog"></div>
            <poemitem v-model:isShow='isShow' :pid="this.colpoemid" v-if="isShow">

            </poemitem>

        </div>


    </div>
</template>
<script>
import poem from "../../../components/common/poem.vue"
import poemitem from "../../../components/common/poemitem.vue"
export default {
    data() {
        return {
            poemList: [
                {
                    pid: 1,
                    ctime: '2024-3-26',
                    authorId: 'wcf',
                    type: "duilian",
                    poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
                    title: "回乡偶书"
                },
                {
                    pid: 10,
                    ctime: '2024-3-27',
                    authorId: 'wcf1',
                    type: "duilian",
                    poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
                    title: "回乡偶书"
                }, {
                    pid: 3,
                    ctime: '2024-3-28',
                    authorId: 'wcf2',
                    type: "duilian",
                    poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
                    title: "回乡偶书"
                },
                {
                    pid: 4,
                    ctime: '2024-3-29',
                    authorId: 'wcf3',
                    type: "duilian",
                    poemtext: "少小离家老大回,少小离家老大回。少小离家老大回,少小离家老大回。",
                    title: "回乡偶书"
                }
            ],
            colpoemid: 0,
            isShow: false
        }
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        },
        changeThisPoem(f) {
            this.colpoemid = f
            this.isShow = true
            
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
  background-color: rgba(0, 0, 0, 0.5); /* 设置遮罩层的背景颜色和透明度 */
  z-index: 9999;
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
    font-family: KaiTi;

}

.tabbar:hover {
    color: aliceblue;
}

.search {
    display: flex;
    width: 20%;
    margin-left: 100px;
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

.container2 {
    width: 100%;
    justify-content: center;
    display: flex;
    margin-top: 40px;
}

.poemList {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 55px;
}
</style>