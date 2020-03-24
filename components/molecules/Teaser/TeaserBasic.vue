<template>
  <div class="teaser-basic">
    <Anchor :to="link" />
    <div class="tb__inner">
      <div class="tb__area">
        <div class="tb__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
        <div class="tb__wrap">
          <TheTeaserText
            :cat="cat"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
            :large="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import TheTeaserText, {
  // @ts-ignore
  TheTeaserTextProps,
} from '@/components/molecules/Teaser/common/TeaserCommonText.vue'

export const TeaserBasicProps = {
  link: {
    type: String,
    default: '/',
  },
  ...TheTeaserTextProps,
}

export default defineComponent({
  name: 'TeaserBasic',

  props: TeaserBasicProps,

  components: {
    TheTeaserText,
    Anchor,
    ThePicture,
  },
})
</script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/teaser-basic/_index.scss';
</style>
