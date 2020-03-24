<template>
  <div class="teaser-inline">
    <Anchor :to="link" />
    <div class="ti__inner">
      <div class="ti__area">
        <div class="ti__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
        <div class="ti__text-wrap">
          <TheTeaserText
            :cat="''"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
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

import TheTeaserText from '@/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TheTeaserTextProps } from '@/components/molecules/Teaser/common/TeaserCommonText'

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
@import '~Sass/object/molecules/teaser/teaser-inline/_index.scss';
</style>
