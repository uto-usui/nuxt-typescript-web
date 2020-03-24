import { defineComponent } from '@vue/composition-api'

import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import TheTeaserText from '@/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TheTeaserTextProps } from '~/components/molecules/Teaser/common/TeaserCommonText'

export const TeaserBasicProps = {
  link: {
    type: String,
    default: '/',
  },
  ...TheTeaserTextProps,
}

export default defineComponent({
  name: 'TeaserInline',

  props: TeaserBasicProps,

  components: {
    TheTeaserText,
    Anchor,
    ThePicture,
  },
})
