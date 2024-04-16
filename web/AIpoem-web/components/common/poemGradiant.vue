<template>
    <div class="pmcontainer">
      
        <span  v-for="(char, index) in displayText" :key="index" class="char" :class="{ 'active': index <= currentIndex }">
          {{ char}}
        </span>



    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: this.poemtext,
        currentIndex: 0
      };
    },
    props:[
      'poemtext'
    ],
    
    mounted() {
      this.animateText();
    },
    methods: {
      animateText() {
        const animationInterval = setInterval(() => {
          if (this.currentIndex < this.text.length) {
            this.currentIndex++;
          } else {
            clearInterval(animationInterval);
          }
        }, 200);
      }
    },
    computed: {
      displayText() {
        
        return this.text.slice(0, this.currentIndex);
      }
    }
  };
  </script>
  
  <style>
  .char {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .char.active {
    opacity: 1;
    font-size: 50px;
    font-family: KaiTi;
    margin: 5px 1px 5px 1px;
  }
  .pmcontainer{
    display: flex;
    flex-wrap: wrap;
    width:315px;
    height: 270px;
  }
  </style>