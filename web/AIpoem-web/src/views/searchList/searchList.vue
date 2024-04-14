<template>

    <div class="search-form">
        <input type="text" id="search" class="search" @input="search" v-model="key" :placeholder="myPlaceholder" style="font-family: KaiTi;" />
        <ul class="suggestions" v-show="searchPoemList.length">
            <li v-for="(item, index) in searchPoemList" :key="index">
                <span class="poet" v-html="item.output" style="font-size: 19px;"></span>
                <span class="title">
                    <span v-html="item.prompt"></span>-
                    <span v-html="item.creator.nickname"></span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { get } from '../../../utils/request';

export default {
    data() {
        return {
            searchPoemList: [],
            key: "",
            myPlaceholder:this.$route.params.searchConnent
        }
    },
    methods: {
        fetchSearchData() {
            get('/poem/search', {
                key: this.$route.params.searchConnent
            }).then(res => {
                this.searchPoemList = res.data.data
                //console.log(this.searchPoemList)
            })
        },


    },
    created() {
        this.fetchSearchData();
    },


}
</script>

<style>
.search-form {
    max-width: 700px;
    margin: 50px auto;
}

input.search {
    margin: 0;
    text-align: center;
    outline: 0;
    border: 10px solid #f7f7f7;
    width: 120%;
    left: -10%;
    position: relative;
    top: 10px;
    z-index: 2;
    border-radius: 5px;
    font-size: 40px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.suggestions {
    margin: 0;
    padding: 0;
    position: relative;
    /*perspective:20px;*/
}

.suggestions li {
    width: 700px;
    height: 50px;
    background: white;
    list-style: none;
    border-bottom: 1px solid #d8d8d8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: center;
}

.suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}

.suggestions li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span{
    font-family: KaiTi;
}
span.population {
    font-size: 15px;
}

span.info {
    display: flex;
    flex-direction: column;
}

span.author,
span.title {
    font-size: 0.8em;
    /*		right: 0;*/
}

span.title {
    color: #7c8e94;
    position: absolute;
    right: -280px;
    bottom: -25px;
}

.details {
    text-align: center;
    font-size: 15px;
}

.highlight {
    color: #ff0000;
}

.love {
    text-align: center;
}

a {
    color: black;
    background: rgba(0, 0, 0, 0.1);
    text-decoration: none;
}
</style>