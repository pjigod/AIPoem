<template>
    <Menu></Menu>
    <section>
        <div class="swiper-container">
            <swiper :modules="modules" :slides-per-view="4" :space-between="50" @swiper="onSwiper" :loop="true"
                :effect="coverflow" :grab-cursor="true"
                :coverflow-effect="{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: true }"
                :centered-slides="true" @slideChange="onSlideChange">
                <!-- <swiper-slide><img src='../../static/img/1.jpg'></swiper-slide>
        <swiper-slide><img src='../../static/img/2.jpg'></swiper-slide>
        <swiper-slide><img src='../../static/img/3.jpg'></swiper-slide>
        <swiper-slide><img src='../../static/img/4.jpg'></swiper-slide>
        <swiper-slide><img src='../../static/img/5.jpg'></swiper-slide> -->
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>武汉大学计算机学院软件工程专业大三年级本科生，AI赋诗项目负责人，主要负责前端页面搭建以及项目测试
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/1.jpg">
                                </div>
                                <h3>鲁隆俊</h3><span>3396775114@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>武汉大学计算机学院软件工程专业大三年级本科生，AI赋诗项目成员，主要负责前端页面搭建以及整体接口对接
                                </p>
                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/2.jpg">
                                </div>
                                <h3>吴琛菲</h3><span>1430275877@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>武汉大学计算机学院软件工程专业大三年级本科生，AI赋诗项目成员，主要负责后端以及数据库设计与实现
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/3.jpg">
                                </div>
                                <h3>刘承章</h3><span>996613570@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>武汉大学电子信息学院通信工程专业大三本科生，AI赋诗项目成员，参与了算法端编码和测试端
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/4.jpg">
                                </div>
                                <h3>易志鹏</h3><span>1954564109@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>
    </section>

</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { reactive } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow],
            coverflow: 'coverflow'
        };
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        }
    }
}
</script>
<style>
section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2d2f;
    overflow: hidden;
}

/* .swiper{
    transform-style: preserve-3d;
} */
.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 380px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    filter: blur(4px);
    background: #c1c3c4;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.swiper-slide-active {
    filter: blur(0px);
    background: #fff;
}

.temp1 {
    width: 100%;
    height: 60px;
}

.testmonialB {
    width: 80%;
    color: #999;
}

.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.self {
    width: 90%;
    height: 230px;

}

.testmonialB .details {
    display: flex;
    align-items: center;
    gap: 30px;

}

.testmonialB .details .imgBx {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 10px;
}

.testmonialB .details .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.testmonialB .details h3 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #2b2d2f;
    line-height: 1.1em;
}

.testmonialB .details h3 span {
    font-size: 12px;
    color: rgb(82, 79, 79);
}

.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
}
</style>