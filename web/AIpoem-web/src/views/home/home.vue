<template>
  <div class="hcontainer" ref="container">
    <div class="section" ref="section1">
      <div class="top-home">
        <div class="topmemu">
          <Menu></Menu>
        </div>
        <div class="mid-search">
          <div class="search-text">
            <input
              type="text"
              class="search-input"
              v-model="searchConnent"
              @keyup.enter="navTo('/searchList/' + searchConnent)"
            />
            <button
              class="search-button"
              @click="navTo('/searchList/' + searchConnent)"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
      <div v-if="flag===1" class="section-one fading-text">
        <p class="introduction-title">AI赋诗</p>
        <p class="introduction-paragraph">AI赋诗是一款能够满足你想要生成的类型的各类诗歌，尽情欣赏诗歌的美的一款软件</p>
        <div class="section-one-top-left">
          <p class="section-poem">诗歌</p>
          <p class="section-poem1">根据所输入关键词生成诗歌</p>
        </div>
        <div class="section-one-top-right">
          <p class="section-duilian">对联</p>
          <p class="section-duilian1">根据所输入上联生成对联</p>
        </div>
        <div class="section-one-bottom-left">
          <p class="section-style">风格诗</p>
          <p class="section-style1">根据输入的作者以及作品风格生成风格诗</p>
        </div>
        <div class="section-one-bottom-right">
          <p class="section-head">藏头诗</p>
          <p class="section-head1">根据头字生成藏头诗</p>
        </div>
      </div>
    </div>
    <div class="section" ref="section2">
      <div v-if="flag===2" class="section-two fading-text">
        <div class="section-two-top-left">
          <p class="title2">唐诗介绍</p>
          <p class="paragraph1">唐诗是中华民族珍贵的文化遗产之一，是中华文化宝库中的一颗明珠，同时也对世界上许多国家的文化发展产生了很大影响，对于后人研究唐代的政治、民情、风俗、文化等都有重要的参考意义。</p>
        </div>
        <a href="####" class="section-two-top-right" @mouseover="showtooltip1" @mouseleave="hidetooltip1">唐诗的形式</a>
        <div class="poem-form fading-text" v-if="tooltip[0]">唐诗的形式有多种，主要有五言和七言两种。近体诗也有两种，一种叫做绝句，一种叫做律诗。绝句和律诗又各有五言和七言之不同。所以唐诗的基本形式基本上有这样六种：五言古体诗，七言古体诗，五言绝句，七言绝句，五言律诗，七言律诗。古体诗对音韵格律的要求比较宽：一首之中，句数可多可少，篇章可长可短，韵脚可以转换。近体诗对音韵格律的要求比较严：一首诗的句数有限定，即绝句四句，律诗八句，每句诗中用字的平仄声，有一定的规律，韵脚不能转换；律诗还要求中间四句成为对仗。古体诗的风格是前代流传下来的，所以又叫古风。近体诗有严整的格律，所以有人又称它为格律诗。</div>
        <a href="####" class="section-two-bottom-left" @mouseover="showtooltip2" @mouseleave="hidetooltip2">唐诗的风格</a>
        <div class="poem-style fading-text" v-if="tooltip[1]">唐诗的风格丰富多彩，它继承了汉魏民歌、乐府传统，并且大大发展了歌行体的样式；不仅继承了前代的五、七言古诗，并且发展为叙事言情的长篇巨制；不仅扩展了五言、七言形式的运用，还创造了风格特别优美整齐的近体诗。近体诗是当时的新体诗，它的创造和成熟，是唐代诗歌发展史上的一件大事。它把中国古曲诗歌的音节和谐、文字精炼的艺术特色，推到前所未有的高度，为古代抒情诗找到一个最典型的形式，还特别为人民所喜闻乐见。但是近体诗中的律诗，由于它有严格的格律的限制，容易使诗的内容受到束缚，不能自由创造和发挥，这是它的长处带来的一个很大的缺陷。</div>
        <a href="####" class="section-two-bottom-right" @mouseover="showtooltip3" @mouseleave="hidetooltip3">唐诗的流派</a>
        <div class="poem-stream fading-text" v-if="tooltip[2]">
          <p>主要流派有下面几种</p>
          <ul>
            <li>边塞诗派，代表人物：高适、岑参、王昌龄<br>其特点为：描写战争与战场，表现保家卫国的英勇精神，或描写雄浑壮美的边塞风光，奇异的风土人情，又或描写战争的残酷，军中的黑暗，征戍的艰辛，表达民族和睦的向往与情怀。</li>
            <li>浪漫诗派，代表人物：李白<br>其特点为：以抒发个人情怀为中心，咏唱对自由人生个人价值的渴望与追求。诗词自由、奔放、顺畅、想象丰富、气势宏大。语言主张自然，反对雕琢。</li>
            <li>山水田园诗派，代表人物：王维、孟浩然<br>其特点为：题材多青山白云、幽人隐士；风格多恬静雅淡，富于阴柔之美；形式多五言古诗 、五绝、五律。</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section" ref="section3">
      <div v-if="flag===3" class="section-three fading-text">
        <div class="secion-three-top-left">
        <p class="title3">AI写诗原理</p>
        <p class="paragraph3">通过使用LSTM神经网络，TransFormer模型以及TensorFlow机器学习框架构建了一整个AI写诗的算法模型进行AI写诗</p>
        </div>
        <a href="####" class="section-three-top-right" @mouseover="showtooltip4" @mouseleave="hidetooltip4">LSTM</a>
        <div class="LSTM fading-text" v-if="tooltip[3]">LSTM是一种递归神经网络（RNN）的变种，设计用来解决RNN中的梯度消失和梯度爆炸问题。
LSTM具有记忆单元和门控机制，能够更有效地处理和记忆时间序列数据,
且适用于序列建模任务，如自然语言处理中的语言建模、机器翻译等。
<br>在此项目中，LSTM的作用是作为一个序列模型，接收词嵌入的序列作为输入，在训练过程中学习诗歌文本的语言模式，并在生成诗歌时根据上下文和当前的隐藏状态生成下一个词的预测。</div>
        <a href="####" class="section-three-bottom-left" @mouseover="showtooltip5" @mouseleave="hidetooltip5">TensorFlow</a>
        <div class="TensorFlow fading-text" v-if="tooltip[4]">TensorFlow是由Google开发的开源机器学习框架，广泛用于构建和训练机器学习模型。
TensorFlow支持动态计算图和静态计算图，提供了高层次的抽象接口和低层次的灵活性,
且能够在多种硬件平台上运行，包括CPU、GPU和TPU（Tensor Processing Unit）等。TensorFlow通常应用在图像识别和处理（包括物体检测、图像分类、语义分割等）、自然语言处理（用于文本生成、命名实体识别、机器翻译等）、时间序列预测等多种问题上（例如股价预测、天气预报等）
<br>在此项目中，TensorFlow建立、训练并保存了神经网络模型，实现了基于我们所给定文本生成整首诗的功能</div>
        <a href="####" class="section-three-bottom-right" @mouseover="showtooltip6" @mouseleave="hidetooltip6">Transformer</a>
        <div class="Transformer fading-text" v-if="tooltip[5]">Transformer是一种基于自注意力机制的模型，用于处理序列到序列的任务，例如机器翻译和文本生成。
Transformer取代了传统的循环神经网络（RNN）结构，在处理长距离依赖性任务上表现更好，
并且通过多头注意力机制实现了并行计算，提高了训练速度和效率。
<br>在此项目中，使用了Transformer模型中的AutoTokenizer从预训练模型中加载了一个中文GPT-2模型的tokenizer（编码器），即uer/gpt2-chinese-cluecorpussmall。
通过这个tokenizer对输入的诗歌文本进行编码（batch_encode_plus），将文本转换为模型可以理解的token IDs，并添加了一些特殊token，如[CLS]（用于句子的开始）和[SEP]（用于句子的结束）。简而言之利用Transformer模型进行下一个字的预测</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchConnent: "",
      scrollheight:0,
      flag:1,
      tooltip:[false,false,false,false,false,false]
    };
  },
  methods: {
    navTo(url) {
      this.$router.push(url);
    },
    handleScroll() {
      var scrollTop=0
      const containerHeight = document.body.scrollHeight;
      if(document.documentElement&&document.documentElement.scrollTop){
            scrollTop = document.documentElement.scrollTop
        }else if(document.body){
            scrollTop = document.body.scrollTop
        }
      // 检查滚动条位置，判断位于哪个 section
      const section1 = this.$refs.section1;
      const section2 = this.$refs.section2;
      const section3 = this.$refs.section3;
      //const section4 = this.$refs.section4;
      const section1Top = section1.offsetTop;
      const section2Top = section2.offsetTop-50;
      const section3Top = section3.offsetTop-100;
      //const section4Top = section4.offsetTop;
      if (scrollTop >= section1Top && scrollTop < section2Top) {
        console.log("滚动条位于 Section 1");
        this.flag=1
      } else if (scrollTop >= section2Top && scrollTop < section3Top) {
        console.log("滚动条位于 Section 2");
        this.flag=2
      } else if (scrollTop >= section3Top + section3.clientHeight - containerHeight) {
        console.log("滚动条位于 Section 3");
        this.flag=3
      } 
      //else if (scrollTop >= section4Top + section4.clientHeight - containerHeight) {
        //console.log("滚动条位于 Section 4");
        //this.flag=4
      //}
    },
    hidetooltip1(){
      this.tooltip[0]=false
    },
    showtooltip1(){
      this.tooltip[0]=true
    },
    hidetooltip2(){
      this.tooltip[1]=false
    },
    showtooltip2(){
      this.tooltip[1]=true
    },
    hidetooltip3(){
      this.tooltip[2]=false
    },
    showtooltip3(){
      this.tooltip[2]=true
    },
    hidetooltip4(){
      this.tooltip[3]=false
    },
    showtooltip4(){
      this.tooltip[3]=true
    },
    hidetooltip5(){
      this.tooltip[4]=false
    },
    showtooltip5(){
      this.tooltip[4]=true
    },
    hidetooltip6(){
      this.tooltip[5]=false
    },
    showtooltip6(){
      this.tooltip[5]=true
    }
  },
  components: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
.hcontainer {
  position: relative;
  width: 100%;
  height: 100vh;
}
.section-poem1{
  font-family: "KaiTi";
  font-size: 20px;
}
.section-duilian1{
  font-family: "KaiTi";
  font-size: 20px;
}
.section-style1{
  font-family: "KaiTi";
  font-size: 20px;
}
.section-head1{
  font-family: "KaiTi";
  font-size: 20px;
}
.top-home {
  width: 100%;
  clear: both;
  height: 180px;
  background-size: cover;
}

.topmemu {
  width: 100%;
  clear: both;
  background-color: #f0efe2;
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
  background: url(../../static/img/bg4.png);
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
/* 定义淡入动画 */
@keyframes fadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
/* 应用淡入动画到文本元素 */
.fading-text {
  animation: fadeIn 3s ease forwards;
}
.section-one{
  display: block;
  width: 80%;
  height: 70%;
  position: relative;
  left: 10%;
  top: 0%;
}
.section-one-top-left{
  position: absolute;
        top: 0;
        left: 0;
        width: 30%;
}
.section-poem{
  font-family: "KaiTi";
  font-size: 40px;
}
.section-one-top-right{
  position: absolute;
        top: 0;
        right: 0;
}
.section-duilian{
  font-family: "KaiTi";
  font-size: 40px;
}
.section-one-bottom-left{
  position: absolute;
        bottom: 0;
        left: 0;  
}
.section-style{
  font-family: "KaiTi";
  font-size: 40px;
}
.section-one-bottom-right{
  position: absolute;
        bottom: 0;
        right: 0;
}
.section-head{
  font-family: "KaiTi";
  font-size: 40px;
}
.introduction-title{
  font-size: 50px;
  color:rgb(5, 5, 5);;
  font-family: "KaiTi";
  position: absolute;
  left: 45%;
}
.introduction-paragraph{
  width: 40%;
  position: absolute;
  top: 30%;
  left: 30%;
  font-family: "KaiTi";
  font-size: 30px;
}
.section-two{
  display: block;
  width: 80%;
  height: 70%;
  position: relative;
  left: 10%;
  top: 8%;
}
.title2{
  font-size: 40px;
  font-family: "KaiTi";
}
.paragraph1{
  font-family: "KaiTi";
  font-size: 20px;
  width:70%
}
.section-two-top-left{
  position: absolute;
  top: 0;
  left: 0;
  width:30%;
}
.section-two-top-right{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
a:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  transform: scale(1.05); /* 放大元素 */
}
.poem-form{
  position: absolute;
  top: 20%;
  right: 20%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-two-bottom-left{
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
.poem-style{
  position: absolute;
  top: 20%;
  right: 20%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-two-bottom-right{
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
.poem-stream{
  position: absolute;
  top: 10%;
  right: 25%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-three{
  display: block;
  width: 80%;
  height: 70%;
  position: relative;
  left: 10%;
  top: 8%;
}
.title3{
  font-size: 40px;
  font-family: "KaiTi";
}
.paragraph3{
  width: 15%;
  font-size: 20px;
  font-family: "KaiTi";
}
.section-three-top-left{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 50px;
}
.section-three-top-right{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
.LSTM{
  position: absolute;
  top: 20%;
  right: 20%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-three-bottom-left{
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
.TensorFlow{
  position: absolute;
  top: 20%;
  right: 20%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-three-bottom-right{
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 30px;
  font-family: "KaiTi";
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: bold; /* 设置链接的文字加粗 */
  border-radius: 5px; /* 设置链接的圆角 */
  transition: all 0.3s ease; /* 设置过渡效果，让动画平滑进行 */
}
.Transformer{
  position: absolute;
  top: 20%;
  right: 20%;
  width: 50%;
  font-size: 25px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: 1px solid #e1e1e1; /* 添加边框 */
  font-family: "KaiTi";
}
.section-four{
  display: block;
  width: 80%;
  height: 70%;
  position: relative;
  left: 10%;
  top: 8%;
}
.section-four-top-left{
  position: absolute;
  top: 0;
  left: 0;
}
.section-four-top-right{
  position: absolute;
  top: 0;
  right: 0;
}
.section-four-bottom-left{
  position: absolute;
  bottom: 0;
  left: 0;
}
.section-four-bottom-right{
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>