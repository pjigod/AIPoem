<template>
    <div class="poemItem">
        <div class="top">
            <div class="left-temp">
                <img src="../../src/static/img/download.png" style="height: 30px;width: 30px;" @click="todownload">

            </div>
            <div class="exit-icon">
                <img src="../../src/static/img/exit.png" alt="exit" style="height: 25px; width: 25px;" @click="exit">
            </div>
        </div>
        <div class="ptemp"></div>
        <div class="underpoem">
            <div class="under-top">
                <text style="font-family: KaiTi;font-size: 20px;">诗歌赏析(CHATGPT版)</text>
            </div>
            <div class="under-text" >
                <div class="dot-spinner" v-if="upisShow">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
            </div>
                <text style="width: 80%;font-family: KaiTi;" v-if="!upisShow">{{ undercontent }}</text>
            </div>
        </div>
        <div class="ptemp"></div>
        <div class="mid-fir-top">
            <text style="font-family: KaiTi; font-size: 20px;">发表评论:</text>
        </div>
        <div class="medium-first">

            <div class="left-img">

            </div>
            <div class="right-comment">
                <textarea rows="4" cols="50"
                    style="width: 80%; height: 90%; resize: none;border-color: rgb(89, 115, 142);border-radius: 5px;"
                    v-model="commentcontent" placeholder="轻轻敲醒沉睡的心灵，让我看看你的点评"></textarea>
            </div>
        </div>
        <div class="medium-second">
            <div class="me-se-left-temp">

            </div>
            <div class="mid-text">
                <text style="font-size: 20px; font-family: KaiTi;">已输入{{ characterCount }}字</text>
            </div>
            <div class="right-button">
                <button style="background-color:rgb(75, 137, 244) ; color: rgb(208, 230, 242); border-radius: 5px;
                border: 0;height: 30px;font-family: KaiTi;
                " @click="tocomment">发布评论</button>
            </div>
        </div>
        <div class="mid-temp">
            <div class="how-much">
                <text>
                    共{{ commentCount }}条评论
                </text>
            </div>
        </div>
        <div class="bottom-comment">
            <commentItem v-for="(item, index) in commentList" :key="index" :cid="item.id" :content="item.comment"
                :time="item.createTime" :userId="item.creator.nickname" :userImgUrl="item.creator.avatar"></commentItem>
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { get } from '../../utils/request'
import { onMounted } from 'vue'
const commentList = ref([])
const commentcontent = ref('')
const undercontent = ref('')
const upisShow = ref(true)

const isShow = defineModel('isShow')
const pid = defineModel('pid')
const router = useRouter();
const emit = defineEmits(['update:isShow'])
const exit = () => {
    emit('update:isShow', !isShow);
};
function tocomment() {


    get('/comment/create', {
        comment: commentcontent.value,
        poemid: pid.value
    }).then(res => {
        //console.log(res)
        alert('评论成功')
        commentcontent.value = ''
    })
}
function todownload() {
    get('/poem/pdf', {
        id: pid.value
    }).then(res => {
        window.location.href = 'http://124.221.53.69:8080/poem/pdf?id=' + pid.value


    })
}

onMounted(() => {
    //console.log(pid.value)
    get('/comment/getbypoemid', {
        poemid: pid.value
    }).then(res => {
        commentList.value = res.data.data
    })

    get('/poem/gptbypoem', {
        id: pid.value
    }).then(res => {
        console.log(res)
        undercontent.value = res.data.data
        upisShow.value=false
    })

})
const commentCount = computed(() => {
    return commentList.value.length;
});
const characterCount = computed(() => {
    return commentcontent.value.length;
});
</script>
<script>
import commentItem from './commentItem.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        commentItem
    },

}
</script>
<style>
.poemItem {
    width: 450px;
    height: 500px;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px 0 0 0;
    z-index: 9999;
    overflow: auto;
}

.top {
    display: flex;
    height: 30px;
    width: 100%;
}

.left-temp {
    display: flex;
    height: 100%;
    width: 420px;
    align-items: center;

}

.ptemp {
    width: 100%;
    height: 15px;

}

.underpoem {
    width: 100%;
}

.under-top {
    width: 100%;
    height: 25px;
}

.under-text {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center
}

.medium-first {
    width: 100%;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
}

.mid-fir-top {
    width: 100%;
    height: 30px;
}

.left-img {
    width: 20%;
    height: 100%;


}

.right-comment {
    width: 80%;
    height: 100%;


}

.medium-second {
    width: 100%;
    height: 40px;
    display: flex;
}

.me-se-left-temp {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mid-text {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right-button {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mid-temp {
    width: 100%;
    height: 30px;
    display: flex;
    background-color: rgb(221, 230, 232);
}

.how-much {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(252, 251, 253);

}

.bottom-comment {
    width: 100%;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;


}

.dot-spinner {
    --uib-size: 2.8rem;
    --uib-speed: .9s;
    --uib-color: #183153;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--uib-size);
    width: var(--uib-size);
}

.dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}

.dot-spinner__dot::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {

    0%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>