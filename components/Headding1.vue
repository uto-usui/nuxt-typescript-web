<template>
  <h1 class="ph__title">
    this is home
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import TweenMax from 'gsap/umd/TweenMax'
import { TweenConfig } from '~/types/gsap/index'

export default Vue.extend({
  name: 'Headding1',
  mounted(): void {
    const animation = TweenMax.to(this.$el, 5, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
    } as TweenConfig)
    console.log()
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
