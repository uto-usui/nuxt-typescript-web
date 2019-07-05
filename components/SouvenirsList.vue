<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div class="souvenirs-list">
    <div class="sl__inner">
      <mq-layout mq="desktop">
        <div
          ref="mySwiper"
          v-swiper:mySwiper="swiperOption"
          class="sl__items"
          @transitionEnd="transitionEnd"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in list"
              :key="`souvenirs${index}`"
              class="swiper-slide"
              :class="[`sl__item--${item.place}`]"
            >
              <SouvenirsListItem :is-swiper="true" :item="item" />
            </div>
          </div>
          <div class="sl__buttons">
            <a
              href="#"
              class="event-list__button-outer swiper-button-prev"
              v-html="require(`Images/icon/arrow.svg?include`)"
            ></a>
            <a
              href="#"
              class="event-list__button-outer swiper-button-next"
              v-html="require(`Images/icon/arrow.svg?include`)"
            ></a>
          </div>
        </div>
      </mq-layout>
      <mq-layout mq="widescreen+">
        <div class="sl__items">
          <div
            v-for="(_item, _index) in list"
            :key="`souvenirsPc${_index}`"
            class="sl__item"
            :class="[`sl__item--${_item.place}`]"
          >
            <SouvenirsListItem :is-swiper="false" :item="_item" />
          </div>
        </div>
      </mq-layout>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { SwiperOptions } from 'swiper/index'
import SouvenirsListItem from '~/components/SouvenirsListItem.vue'

export type Data = {
  swiperOption: SwiperOptions
}

interface SwiperElement extends Element {
  swiper: Swiper
}

export default Vue.extend({
  name: 'CityList',
  components: {
    SouvenirsListItem,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data: (): Data => ({
    swiperOption: {
      loop: false,
      speed: 450,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        transitionEnd() {
          console.log('🖼 latest slide transition end')
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
    width(): number {
      return this.$state.global.window.w
    },
    swiper(): Swiper {
      const swiper = this.$refs.mySwiper as SwiperElement
      return swiper.swiper
    },
  },

  watch: {
    //
  },

  methods: {
    transitionEnd() {
      // this.pageIndex = this.swiper.realIndex + 1
    },
  },
})
</script>

<style lang="scss" scoped>
.souvenirs-list {
  //
}

.sl__inner {
  //
  @include desktop {
    // display: flex;
  }
  //
  &--calgary {
    //
  }
  //
  &--banff {
    //
  }
  //
  &--yellowknife {
    //
  }
}

.sl__items {
  position: relative;
  //
  @include desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 5vw;
    padding-left: 5vw;
    margin-bottom: -90px;
  }
  //
  @include widescreen {
    padding-right: 10.5vw;
    padding-left: 10.5vw;
  }
}

.sl__item {
  //
  @include desktop {
    width: calc((100% - (15px * 2)) / 3);
    margin-bottom: 90px;
    //
    + .sl__item {
      margin-left: 15px;
    }
    //
    &:nth-of-type(4) {
      margin-left: 0;
    }
  }
}

.sl__title-wrap {
  //
  //
  &--calgary {
    //
  }
  //
  &--banff {
    //
  }
  //
  &--yellowknife {
    //
  }
}

.sl__buttons {
  //
  .swiper-button-next {
    top: calc(100vw * 215 / 750 - 20px / 2);
    // right: auto;
    width: 15px;
    height: 20px;
    margin-top: 0;
    background: 0;
    outline: none;
  }
  //
  .swiper-button-prev {
    top: calc(100vw * 215 / 750 - 20px / 2);
    //left: ;
    width: 15px;
    height: 20px;
    margin-top: 0;
    background: 0;
    outline: none;
    transform: rotate(180deg);
  }
}
</style>
