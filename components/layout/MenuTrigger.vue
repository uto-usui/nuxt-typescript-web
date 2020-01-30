<template>
  <a
    :class="[{ 'is-open': $state.global.isMenuOpen }]"
    @click="onClick(!$state.global.isMenuOpen)"
    class="menu-trigger"
  >
    <span class="mt__text">menu</span>
    <span class="mt__inner">
      <span v-for="index in 2" :key="`li${index}`" class="mt__line" />
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuTrigger',

  methods: {
    onClick(val: boolean): void {
      this.$dispatch('global/setIsMenuOpen', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.menu-trigger {
  position: fixed;
  top: 2vw;
  right: 4vw;
  display: block;
  color: inherit;
  //
  &.is-open {
    // transform: scaleX(2);
  }
}

.mt__text {
  font-family: $font-montserrat;
  font-size: 1.4rem;
  font-weight: $font-montserrat-black;
  text-transform: capitalize;
  letter-spacing: 0.1em;
}

.mt__inner {
  display: block;
  width: 25px;
  margin-top: 12px;
  //
  @include desktop {
    width: 50px;
  }
}

.mt__line {
  display: block;
  height: 2px;
  background-color: currentColor;
  transition: transform 0.65s $easeOutCirc;
  transform: translateY(0) scaleX(1) rotate(0);
  will-change: transform;
  backface-visibility: hidden;
  //
  &:nth-of-type(2) {
    margin-top: 12px;
    margin-left: auto;
  }
  //
  /* stylelint-disable */
  .menu-trigger:hover & {
    transform: translateY(0) scaleX(0.7) rotate(0);
  }
  //
  .menu-trigger.is-open & {
    transition: transform 0.4s $easeOutCirc;
    transform-origin: 50% 50%;
    //
    &:nth-of-type(1) {
      transform: translateY(4px) scaleX(1) rotate(25deg);
      //
      @include desktop {
        transform: translateY(7px) scaleX(1) rotate(25deg);
      }
    }
    //
    &:nth-of-type(2) {
      transform: translateY(-3px) scaleX(1) rotate(-25deg);
      //
      @include desktop {
        transform: translateY(-6px) scaleX(1) rotate(-25deg);
      }
    }
    //
  }
  /* stylelint-enable */
}
</style>
