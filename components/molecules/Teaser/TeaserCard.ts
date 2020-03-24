import { defineComponent, PropType } from '@vue/composition-api'

import Anchor from '~/components/core/Anchor/Anchor'
import ByLine from '~/components/atom/ByLine/ByLine'
import JobTitle from '~/components/atom/JobTitle/JobTitle'
import TheDivider from '~/components/atom/TheDivider/TheDivider'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import TheTeaserText from '~/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TheTeaserTextProps } from '~/components/molecules/Teaser/common/TeaserCommonText'

interface TeaserCardAuthor {
  name: string
  job: string
}

export const TeaserCardProps = {
  link: {
    type: String,
    default: '/',
  },
  author: {
    type: Object as PropType<TeaserCardAuthor>,
    default: () => {
      return {
        name: '池田純一',
        job: 'コンサルタント',
      }
    },
  },
  ...TheTeaserTextProps,
}

export default defineComponent({
  name: 'TeaserCard',

  props: TeaserCardProps,

  components: {
    Anchor,
    ByLine,
    JobTitle,
    TheTeaserText,
    ThePicture,
    TheDivider,
  },
})
