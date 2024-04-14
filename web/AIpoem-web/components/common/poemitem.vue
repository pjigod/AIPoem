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
                    共{{commentCount}}条评论
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
  //  console.log(pid.value)
    get('/comment/getbypoemid', {
        poemid: pid.value
    }).then(res => {
        commentList.value = res.data.data
        // console.log(commentList.value)
        // console.log(res)

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

       
            //     {
            //         cid: 1,
            //         content: "helloworld",
            //         time: '2024-4-8',
            //         userId: 'wcf'
            //     },
            //     {
            //         cid: 1,
            //         content: "helloworld",
            //         time: '2024-4-8',
            //         userId: 'wcf'

            //     },
            //     {
            //         cid: 1,
            //         content: "helloworld",
            //         time: '2024-4-8',
            //         userId: 'wcf'

            //     },
            //     {
            //         cid: 1,
            //         content: "helloworld",
            //         time: '2024-4-8',
            //         userId: 'wcf'

            //     }

            // ]
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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

.medium-first {
    width: 100%;
    height: 150px;
    display: flex;
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
</style>