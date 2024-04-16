<template>
    <div class="cpcontainer">
      <div class="couplet">
        <div class="verse left-verse">
          <span v-for="(char, index) in upperCouplet" :key="index" class="cpchar" :class="{ 'show': index <= upperVisibleChars }">
            {{ char }}
          </span>
        </div>
        <div class="verse right-verse">
          <span v-for="(char, index) in lowerCouplet" :key="index" class="cpchar" :class="{ 'show': index <= lowerVisibleChars }">
            {{ char }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        upperCouplet: this.upper,
        lowerCouplet: this.lower,
        upperVisibleChars: -1,
        lowerVisibleChars: -1,
        intervalId: null
      };
    },
    props:[
        'upper',
        'lower'
    ],
    mounted() {
      this.startAnimation();
    },
    methods: {
      startAnimation() {
        this.intervalId = setInterval(() => {
          if (this.upperVisibleChars >= this.upperCouplet.length && this.lowerVisibleChars >= this.lowerCouplet.length) {
            clearInterval(this.intervalId);
            return;
          }
          if (this.upperVisibleChars < this.upperCouplet.length) {
            this.upperVisibleChars++;
          }
          else if (this.lowerVisibleChars < this.lowerCouplet.length) {
            this.lowerVisibleChars++;
          }
        }, 200); // 每个字显示的间隔时间
      }
    }
  };
  </script>
  
  <style>
  .cpcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .couplet {
    display: flex;
    align-items: flex-start;
  }
  
  .verse {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  
  .left-verse {
    margin-right: 100px;
  }
  
  .cpchar {
    opacity: 0;
    transition: opacity 0.3s;
    font-family: KaiTi;
    font-size: 30px;
  }
  
  .show {
    opacity: 1;
  }
  </style>