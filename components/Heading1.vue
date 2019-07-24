<template>
  <h1 class="ph__title" v-text="text" />
</template>

<script lang="ts">
import Vue from 'vue'
import * as TweenMax from 'gsap/umd/TweenMax'
import * as Ease from 'gsap/umd/EasePack'

export default Vue.extend({
  name: 'Headding1',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  mounted(): void {
    TweenMax.to(this.$el, 5, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: Ease.Power3.easeOut,
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
