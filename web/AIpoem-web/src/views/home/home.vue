<template>
    <div class="hcontainer">
        <div class="section">
            <Menu></Menu>
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

.hcontainer .section {
    position: relative;
    width: 100%;
    height: 100%;
    background-blend-mode: multiply;
}

.hcontainer .section:nth-child(1) {
    background: url(../../static/img/background.jpg);
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
    background: url(../../static/img/bg3.jpg);
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
}
</style>