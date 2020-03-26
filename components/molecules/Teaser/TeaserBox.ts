import { defineComponent } from '@vue/composition-api'

import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import TheTeaserText from '~/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TeaserTextProps } from '~/components/molecules/Teaser/common/TeaserCommonText'
import TheHed from '~/components/atom/TheHed/TheHed'
import TheButton from '~/components/atom/TheButton/TheButton'
import TheDivider from '@/components/atom/TheDivider/TheDivider'

export const TeaserBoxProps = {
  link: {
    type: String,
    default: '/',
  },
  listLink: {
    type: String,
    default: '/',
  },
  ...TeaserTextProps,
}

export default defineComponent({
  name: 'TeaserBox',

  props: TeaserBoxProps,

  components: {
    TheHed,
    TheButton,
    TheDivider,
    TheTeaserText,
    Anchor,
    ThePicture,
  },
})
