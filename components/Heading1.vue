<template>
  <h1 v-text="text" class="ph__title" />
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from 'gsap'

export default Vue.extend({
  name: 'Heading1',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  mounted(): void {
    this.animation()
  },
  methods: {
    animation() {
      gsap.to(this.$el, {
        duration: 1.1,
        scale: 2,
        repeat: -1,
        yoyo: true,
        text: 'Is this new text ?',
        ease: 'none',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.ph__title {
  font-family: $font-montserrat;
  font-size: 5vw;
  text-transform: capitalize;
  opacity: 0.2;
}
</style>
