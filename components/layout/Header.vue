<template>
  <div :class="[{ 'is-open': $state.global.isMenuOpen }]" class="header">
    Nuxt x TypsScript
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  components: {
    //
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 2vw;
  left: 4vw;
  z-index: 99;
  font-family: $font-montserrat;
  letter-spacing: 0.2em;
  transition: color 1s $easeOutSine;
  //
  &.is-open {
    color: $color-white;
  }
}
</style>
