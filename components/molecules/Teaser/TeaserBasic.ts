import { defineComponent } from '@vue/composition-api'

import TheTeaserText from '@/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TeaserTextProps } from '@/components/molecules/Teaser/common/TeaserCommonText'
import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

export const TeaserBasicProps = {
  link: {
    type: String,
    default: '/',
  },
  ...TeaserTextProps,
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
