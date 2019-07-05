<template>
  <div :class="[{ 'is-open': $state.global.isMenuOpen }]" class="menu">
    <n-link exact class="m__target" to="/">home</n-link>
    <n-link exact class="m__target" to="/sub/">sub</n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu',

  methods: {
    onClick(val: boolean): void {
      this.$dispatch('global/setIsMenuOpen', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: block;
  padding-top: 5vw;
  background-color: $color-black;
  transition: transform 0.7s $easePowerInOut;
  transform: translateX(-100%);
  //
  &.is-open {
    transform: translateX(0);
  }
}

.m__target {
  display: block;
  padding-top: 2vw;
  padding-right: calc(100vw / 3);
  padding-bottom: 2vw;
  padding-left: calc(2vw + 2vw);
  font-size: 1.5vw;
  color: $color-white;
  text-align: left;
  text-transform: capitalize;
  background-color: rgba($color-gray-level1, 0);
  opacity: 0;
  transition: background-color 0.4s $easeInSine, opacity 0.6s $easeInSine,
    transform 0.8s $easeOutSine;
  transform: translateY(60px);
  //
  &:hover {
    background-color: rgba($color-gray-level1, 1);
  }
  //
  &.nuxt-link-active {
    color: $color-primary;
    pointer-events: none;
  }
  //
  .menu.is-open & {
    opacity: 1;
    transform: translateY(0);
  }
  //
  + .h__target {
    margin-top: 2em;
  }
}
</style>
