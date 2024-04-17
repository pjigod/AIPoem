<template>
    <div class="hcontainer">
        <div class="section">
            <div class="top-home">
                <div class="topmemu">
                    <Menu></Menu>
                </div>
                <div class="mid-search">
                    <div class="search-text">
                        <input type="text" class="search-input" v-model="searchConnent" />
                        <button class="search-button" @click="navTo('/searchList/' + searchConnent)">
                            搜索
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="section">

        </div>
        <div class="section">

        </div>
        <div class="section">

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            searchConnent: "",
        }
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        }
    },
    components: {

    }
}
</script>
<style>
.hcontainer {
    position: relative;
    width: 100%;
    height: 100vh;
}

.top-home {
    width: 100%;
    clear: both;
    height: 180px;
    background: url(../../static/img/hometop.jpg) top center no-repeat;
    background-size: cover;
}

.topmemu {
    width: 100%;
    clear: both;
    background-color: #F0EFE2;
    height: 45px;
    opacity: 0.7;
}

.search-text {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    margin-top: 50px;
}

.search-input {
    width: 400px;
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
    margin-top: 0px;
    background-color: rgb(236, 230, 221);
    color: rgb(87, 89, 71);
}

.hcontainer .section {
    position: relative;
    width: 100%;
    height: 100%;
    background-blend-mode: multiply;
}

.hcontainer .section:nth-child(1) {
    /* background: url(../../static/img/background.jpg); */
    background-size: 100% 100%;
    background-attachment: fixed;
}

.hcontainer .section:nth-child(2) {
    background: url(../../static/img/bg1.jpg);
    background-size: cover;
    background-attachment: fixed;
}

.hcontainer .section:nth-child(3) {
    background: url(../../static/img/bg2.jpg);
    background-size: cover;
    background-attachment: fixed;
}

.hcontainer .section:nth-child(4) {
    background: url(../../static/img/bg4.png);
    background-size: cover;
    background-attachment: fixed;
    filter: contrast(0.5);
    z-index: -1;
}
</style>