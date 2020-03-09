<template>
  <div :style="getSize" class="the-picture">
    <img
      v-if="$image.lazy"
      :src="src"
      :srcSet="getSrcSet"
      :alt="alt"
      loading="lazy"
      class="tp__img"
    />
    <img
      v-else
      v-lazy="src"
      :dataSrcSet="getSrcSet"
      :alt="alt"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      class="tp__img"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'

import { srcSetPoints } from '~/assets/js/info'

export default defineComponent({
  name: 'ThePicture',

  props: {
    src: {
      type: String,
      default: '',
    },

    srcSetItems: {
      type: Array as PropType<string[]>,
      default: [],
    },

    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },

    alt: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: '',
    },
  },

  setup(props, _ctx) {
    const getSrcSet = computed(() => {
      return props.srcSetItems.reduce((prev, current, i) => {
        if (i === 1) {
          return `${prev} ${srcSetPoints[i - 1]}, ${current} ${
            srcSetPoints[i]
          },`
        }
        return `${prev} ${current} ${srcSetPoints[i - 1]},`
      })
    })

    const getSize = computed(() => {
      return {
        paddingTop: `calc(100% * ${props.height} / ${props.width} / 2)`,
        paddingBottom: `calc(100% * ${props.height} / ${props.width} / 2)`,
      }
    })

    return {
      getSrcSet,
      getSize,
    }
  },
})
</script>

<style lang="scss">
@import '~Sass/object/atom/the-picture/_index.scss';
</style>
