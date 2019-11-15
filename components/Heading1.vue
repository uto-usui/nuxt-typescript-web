<template>
  <h1 class="ph__title" v-text="text" />
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from 'gsap'

export default Vue.extend({
  name: 'Headding1',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  mounted(): void {
    gsap.to(this.$el, {
      duration: 2,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'Expo.inOut',
    })
  },
})
</script>

<style lang="scss" scoped>
.ph__title {
  font-family: $font-montserrat;
  font-size: 10vw;
  text-transform: capitalize;
  opacity: 0.2;
}
</style>
