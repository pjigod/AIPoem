<template>
  <div class="pmcontainer">

    <span v-for="(char, index) in displayedPoem" :key="index" class="char" >
      {{ char }}
      <br v-if="isNewline(char)" />
    </span>



  </div>
</template>

<script>
export default {
  data() {
    return {
      poem: this.poemtext,
      displayedPoem: "",
      currentIndex: 0
    };
  },
  props: [
    'poemtext'
  ],
  computed: {
    formattedPoem() {
      return this.poem.split("");
    }
  },

  mounted() {
    // this.animateText();
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
        setTimeout(this.animateNextLetter, 100); // 调整延迟时间以控制逐字显示的速度
      }
    },
    isNewline(letter) {
      return letter === "\n";
    }
  },
  // computed: {
  //   displayText() {

  //     return this.text.slice(0, this.currentIndex);
  //   }
  // }
};
</script>

<style>
.char {
  opacity: 1;
  font-size: 50px;
  font-family: KaiTi;
  margin: 5px 1px 5px 1px;
}

.char.active {
  opacity: 1;
  font-size: 50px;
  font-family: KaiTi;
  margin: 5px 1px 5px 1px;
}

.pmcontainer {
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  /* height: 270px; */
}
</style>