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
                                <p>
                                    AI赋诗网站学习了大量的诗词歌赋，结合自身的算法和模型，创造出诗歌作品。这种结合传统和现代的方式对于年轻人学习中华文化有帮助。
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/1.jpg">
                                </div>
                               <h3>阮宇翔</h3><span>1640920462@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>
                                    AI赋诗网站可以通过对经典中华故事文化进行深度学习和分析，创作出新的诗歌作品，使得经典作品得以重新呈现，让更多人重新认识和欣赏。
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/2.jpg">
                                </div>
                                <h3>丁子俊</h3><span>840029837@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>
                                    通过与AI赋诗网站交互，人们可以从中获得灵感，启发创作，进一步丰富中华文化的内涵和表现形式。
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/3.jpg">
                                </div>
                                <h3>陈方晓娜</h3><span>1640466435@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>
                                    通过AI赋诗网站，人们可以根据个人的喜好和兴趣，定制生成符合自己口味的中华故事文化诗歌，从而获得更加个性化的文化体验。
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/4.jpg">
                                </div>
                                <h3>周靖宇</h3><span>1073612656@qq.com</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="testmonialB">
                        <div class="temp1"></div>
                        <div class="content">
                            <div class="self">
                                <p>
                                    AI赋诗网站让人们可以通过与智能算法的互动，探索和发现中华故事文化中的新意和新趣。
                                </p>

                            </div>
                            <div class="details">
                                <div class="imgBx">
                                    <img src="../../static/img/5.jpg">
                                </div>
                                <h3>王佳卉</h3><span>3292077431@qq.com</span>
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
    gap:5px;
}

.testmonialB .details .imgBx {
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
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