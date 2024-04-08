<template>
    <Menu></Menu>
    <div class="contain2">
        <div class="selectpoem">
            <div class="selcontainer">
                <div class="radio-buttons-container">
                    <div class="radio-button">
                        <input name="radio-group" id="radio2" class="radio-button__input" type="radio"
                            @change="changeFlag(1)">
                        <label for="radio2" class="radio-button__label">
                            <span class="radio-button__custom"></span>

                            诗歌
                        </label>
                    </div>
                    <div class="radio-button">
                        <input name="radio-group" id="radio1" class="radio-button__input" type="radio"
                            @change="changeFlag(2)">
                        <label for="radio1" class="radio-button__label">
                            <span class="radio-button__custom"></span>

                            对联
                        </label>
                    </div>
                    <div class="radio-button">
                        <input name="radio-group" id="radio3" class="radio-button__input" type="radio"
                            @change="changeFlag(3)">
                        <label for="radio3" class="radio-button__label">
                            <span class="radio-button__custom"></span>

                            风格诗
                        </label>
                    </div>
                    <div class="radio-button">
                        <input name="radio-group" id="radio4" class="radio-button__input" type="radio"
                            @change="changeFlag(4)">
                        <label for="radio4" class="radio-button__label">
                            <span class="radio-button__custom"></span>

                            藏头诗
                        </label>
                    </div>
                </div>
                <div class="poem-container">
                    <div class="poem">诗歌</div>
                    <div class="poem-temp">请输入关键词:</div>
                    <input :disabled="flag !== 1" v-model="message1">
                    <div class="poem-temp">请确认行数和诗长:</div>
                    <input :disabled="flag !== 1">
                    <input :disabled="flag !== 1" type="radio" name="poem-radio">5
                    <input :disabled="flag !== 1" type="radio" name="poem-radio">7
                </div>
                <div class="temp"></div>
                <div class="couple-container">
                    <div class="couple-text">对联</div>
                    <div class="couple-temp">请输入上联:</div>
                    <input :disabled="flag !== 2" v-model="message2">
                </div>
                <div class="temp"></div>

                <div class="style-container">
                    <div class="couple-text">风格诗</div>
                    <div class="couple-temp">请输入标题:</div>
                    <input :disabled="flag !== 3" v-model="message3">
                    <div class="couple-temp">请输入作者:</div>
                    <input :disabled="flag !== 3" v-model="style">
                </div>
                <div class="temp"></div>

                <div class="head-container">
                    <div class="couple-text">藏头诗</div>
                    <div class="couple-temp">请输入头字:</div>
                    <input :disabled="flag !== 4" v-model="message4">
                </div>
                <div class="cometrue-button">
                    <button @click="createpoem">开始生成</button>
                </div>
            </div>
        </div>
        <div class="createpoem">
            <div class="crecontainer">
                {{ poem }}
            </div>
        </div>
    </div>
</template>
<script>
import { get } from '../../../utils/request'
export default {
    data() {
        return {
            flag: 0,
            message1: '',
            message2: '',
            message3: '',
            message4: '',
            tag: '',
            style: '',
            poem:'',
            tempid:0,

        }
    },
    methods: {
        navTo(url) {
            this.$router.push(url)
        },
        changeFlag(f) {
            this.flag = f
            // console.log(this.flag)
        },
        createpoem() {
            // console.log(this.message1)
            // console.log(this.message2)
            // console.log(this.message3)
            // console.log(this.tag)
            // console.log(this.style)
            if (this.flag === 1) {
                this.tag = 'poem'
                get('/poem/create', {
                    message: this.message1,
                    tag: this.tag,
                    style: this.style
                }).then(res => {
                    console.log(res)
                    get('/poem/get',{
                        id:res.data
                    }).then(res=>{
                        console.log(res.data.output)
                        this.poem=res.data.output
                    })
                })
            }
            if (this.flag === 2) {
                this.tag = 'couplet'
                get('/poem/create', {
                    message: this.message2,
                    tag: this.tag,
                    style: this.style
                }).then(res => {
                    console.log(res)
                    this.poem=res.data.output

                })
            }
            if (this.flag === 3) {
                this.tag = 'style'
                get('/poem/create', {
                    message: this.message3,
                    tag: this.tag,
                    style: this.style
                }).then(res => {
                    console.log(res)
                    this.poem=res.data.output

                })
            }
            if(this.flag===4){
                this.tag='cangtou'
                get('/poem/create', {
                    message: this.message4,
                    tag: this.tag,
                    style: this.style,
                    rownum:5
                }).then(res => {
                    console.log(res)
                    this.tempid=res.data.data
                    setTimeout(() => {
                        get('/poem/get',{
                        id:this.tempid
                    }).then(res=>{
                        // console.log(res)
                        // console.log(res.data.data.output)
                        this.poem=res.data.data.output
                        // console.log(this.poem)
                    })
                    },5000)
                    

                })
            }

        }
    },
    // watch:{
    //     poem(newValue){
    //         if(newValue!=''){
    //             console.log('1')
    //         }
    //     }
    // }
}
</script>
<style>
.temp {
    width: 100%;
    height: 5px;
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
    font-family: 'KaiTi'
}

.tabbar:hover {
    color: aliceblue;
}

.search {
    display: flex;
    width: 20%;
    margin-left: 170px;
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

.contain2 {
    display: flex;
    width: 100%;

}

.selectpoem {
    width: 50%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.createpoem {
    width: 50%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.selcontainer {
    width: 70%;
    height: 600px;
    box-shadow: 0 0 2px 2px gray;
    border-radius: 5px;
    justify-content: center;
}

.crecontainer {
    width: 70%;
    height: 600px;
    box-shadow: 0 0 2px 2px gray;

}

.radio-buttons-container {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    margin-left: 5%;
    margin-top: 2%;

}

.radio-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
}

.radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.radio-button__label {
    display: inline-block;
    padding-left: 30px;
    margin-bottom: 10px;
    position: relative;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    font-family: KaiTi;
}

.radio-button__custom {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #555;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
}

.radio-button__input:checked+.radio-button__label .radio-button__custom {
    transform: translateY(-50%) scale(0.9);
    border: 5px solid #4c8bf5;
    color: #4c8bf5;
}

.radio-button__input:checked+.radio-button__label {
    color: #4c8bf5;
}

.radio-button__label:hover .radio-button__custom {
    transform: translateY(-50%) scale(1.2);
    border-color: #4c8bf5;
    box-shadow: 0 0 10px #4c8bf580;
}

.poem-container {
    width: 95%;
    height: 130px;
    border: 1px dotted grey;
    margin-left: 2%;
}

.style-container {
    width: 95%;
    height: 130px;
    border: 1px dotted grey;
    margin-left: 2%;
}

.couple-container {
    width: 95%;
    height: 100px;
    border: 1px dotted grey;
    margin-left: 2%;
}

.head-container {
    width: 95%;
    height: 100px;
    border: 1px dotted grey;
    margin-left: 2%;
}

.cometrue-button {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>