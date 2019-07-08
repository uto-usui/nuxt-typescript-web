<template>
  <Wrapper class="page-sub">
    <Heading1 :text="`this is sub`" />
    <div class="ps__inner">
      <div
        ref="mySwiper"
        v-swiper:mySwiper="swiperOption"
        class="sl__items"
        @transitionEnd="transitionEnd"
      >
        <div class="swiper-wrapper">
          <div v-for="item in 5" :key="`figure${item}`" class="swiper-slide">
            <figure class="ph__figure">
              <img
                class="swiper-lazy"
                :src="require(`Images/test/01.jpg`)"
                alt=""
              />
            </figure>
          </div>
        </div>

        <a href="#" class="swiper-button-prev"></a>
        <a href="#" class="swiper-button-next"></a>
        <div class="swiper-pagination" />
      </div>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import Swiper, { SwiperOptions } from 'swiper/index'
import Wrapper from '~/components/Wrapper.vue'
import LazyImage from '~/components/util/LazyImage.vue'
import Heading1 from '~/components/Heading1.vue'

import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

export type Data = {
  swiperOption: SwiperOptions
}

interface SwiperElement extends Element {
  swiper: Swiper
}

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    LazyImage,
    Heading1,
  },
  data: (): Data => ({
    swiperOption: {
      loop: false,
      speed: 450,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'a',
      },
      slidesPerView: 1,
      centeredSlides: true,
      on: {
        transitionEnd() {
          console.log('🖼 slide transition end')
        },
      },
      preloadImages: false,
      watchSlidesProgress: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true,
      },
    },
  }),
  computed: {
    swiper(): Swiper {
      const swiper = this.$refs.mySwiper as SwiperElement
      return swiper.swiper
    },
  },
  mounted() {
    this.$dispatch('global/setIsPageReady', true)
  },
  updated() {
    //
  },
  beforeDestroy() {
    this.$dispatch('global/setIsPageReady', false)
  },
})
</script>

<style lang="scss" scoped>
.page-home {
  //
}

.ps__inner {
  padding-right: 10vw;
  padding-left: 10vw;
}
</style>
