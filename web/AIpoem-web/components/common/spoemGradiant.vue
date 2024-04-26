<template>
    <div class="pmcontainer">
      <p>
        <span v-for="(letter, index) in displayedPoem" :key="index"  class="char">
          {{ letter }}
          <br v-if="isNewline(letter)" />
        </span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        poem: this.poemt,
        displayedPoem: "",
        currentIndex: 0
      };
    },
    props:['poemt'],
    computed: {
      formattedPoem() {
        return this.poem.split("");
      }
    },
    mounted() {
      this.startAnimation();
    },
    methods: {
      startAnimation() {
        this.currentIndex = 0;
        this.displayedPoem = "";
        this.animateNextLetter();
      },
      animateNextLetter() {
        if (this.currentIndex < this.formattedPoem.length) {
          this.displayedPoem += this.formattedPoem[this.currentIndex];
          this.currentIndex++;
          setTimeout(this.animateNextLetter, 200); // 调整延迟时间以控制逐字显示的速度
        }
      },
      isNewline(letter) {
        return letter === "\n";
      }
    }
  };
  </script>
  <style>
  .char {
    opacity: 1;
    font-size: 31px;
    font-family: KaiTi;
    margin: 7px 1px 7px 1px;
    
  }
  .pmcontainer {
  display: flex;
  align-items: center;
    justify-content: center;
  width: 400px;
  /* height: 270px; */
}
</style>