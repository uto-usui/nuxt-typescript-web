<template>
  <div
    :class="[
      {
        'is-ready': $state.global.isPageReady,
        'is-ie': $ua.browser() === 'Internet Explorer',
        'is-firefox': $ua.browser() === 'Firefox',
        'is-edge': $ua.browser() === 'Edge',
        'is-mobile': !$ua.isFromPc(),
        'is-webp': $image.webP,
        'is-lazy': $image.lazy,
      },
      $state.global.pageName,
      $ua.browser(),
      $ua.deviceType(),
    ]"
    class="layout-default"
  >
    <div class="ld__header">
      <Header />
    </div>

    <div class="ld__menu-trigger">
      <MenuTrigger />
    </div>

    <div class="ld__menu">
      <Menu />
    </div>

    <div class="ld__main">
      <nuxt />
    </div>

    <div class="ld__footer">
      <Footer />
    </div>

    <Debug />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/layout/Footer.vue'
import Debug from '~/components/layout/Debug.vue'
import Header from '~/components/layout/Header.vue'
import Menu from '~/components/layout/Menu.vue'
import MenuTrigger from '~/components/layout/MenuTrigger.vue'

export type Data = {
  animationID: number
}

export default Vue.extend({
  components: {
    Footer,
    Debug,
    Header,
    Menu,
    MenuTrigger,
  },
  data: (): Data => ({
    animationID: 0,
  }),
  computed: {
    //
  },
  mounted() {
    this.$dispatch('global/setScrollY', window.pageYOffset)
    this.$dispatch('global/setWindow', {
      w: window.innerWidth,
      h: window.innerHeight,
    })
    //
    this.eventAttach()
  },
  updated() {
    //
  },
  beforeDestroy() {
    this.eventDetach()
  },
  methods: {
    /**
     * resize function
     */
    handleResize() {
      this.$dispatch('global/setWindow', {
        w: window.innerWidth,
        h: window.innerHeight,
      })
    },

    /**
     * scroll function -> requestAnimationFrame
     */
    handleScroll() {
      this.$dispatch('global/setScrollY', window.pageYOffset)
      this.animationID = requestAnimationFrame(this.handleScroll)
    },

    /**
     * on event
     */
    eventAttach() {
      window.addEventListener('resize', this.handleResize, false)
      //
      this.handleScroll()
    },

    /**
     * off event
     */
    eventDetach() {
      window.removeEventListener('resize', this.handleResize)
      cancelAnimationFrame(this.animationID)
    },
  },
})
</script>

<style scoped lang="scss">
.ld__header {
  position: relative;
  z-index: 99;
}

.ld__menu {
  position: relative;
  z-index: 98;
}

.ld__menu-trigger {
  position: relative;
  z-index: 99;
}

.ld__main {
  position: relative;
  z-index: 1;
}
</style>

<style lang="scss">
@import '~Sass/foundation/_reset';
@import '~Sass/foundation/base/_base';
@import '~Sass/animation/_keyframes';
@import '~Sass/object/utility/_utility';

body {
  font-feature-settings: 'palt';
}

@font-face {
  font-family: 'MyYuGothicM';
  font-weight: normal;
  src: local('YuGothic-Medium'), local('Yu Gothic Medium'),
    local('YuGothic-Regular');
}

@font-face {
  font-family: 'MyYuGothicM';
  font-weight: bold;
  src: local('YuGothic-Bold'), local('Yu Gothic');
}
</style>
