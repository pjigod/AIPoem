<template>
    <div class="container3">
      <p class="text">
        <span v-for="(char, index) in displayText" :key="index" class="char" :class="{ 'active': index <= currentIndex }">
          {{ char }}
        </span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: "Hello, World!",
        currentIndex: 0
      };
    },
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
        }, 100);
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
  }
  </style>