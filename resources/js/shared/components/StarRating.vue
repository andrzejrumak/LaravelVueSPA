<template>
  <div class="d-flex">
    <i
      class="fas fa-star"
      v-for="star in fullStars"
      :key="'full' + star"
      @click="$emit('input', star)"
    ></i>
    <i class="fas fa-star-half-alt" v-if="halfStar"></i>
    <i
      class="far fa-star"
      v-for="star in emptyStars"
      :key="'empty' + star"
      @click="$emit('input',fullStars + star)"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  computed: {
    halfStar() {
      const f = Math.round((this.value - Math.floor(this.rating)) * 100);
      return f > 0 && f < 50;
    },
    fullStars() {
      return Math.round(this.value);
    },
    emptyStars() {
      return 5 - Math.ceil(this.value);
    }
  }
  // created() {
  //     const numbers = [0.9, 4.5, 3.9, 2.4, 4.9];

  //     // numbers.forEach(n => {
  //     //     console.log(`round for ${n} is ${Math.round(n)}`);
  //     //     console.log(`floor for ${n} is ${Math.floor(n)}`);
  //     //     console.log(`ceil for ${n} is ${Math.ceil(n)}`);
  //     //     console.log("-------------------------------");
  //     // });
  // }
};
</script>
