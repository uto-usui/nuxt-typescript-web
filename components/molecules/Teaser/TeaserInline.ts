import { defineComponent } from '@vue/composition-api'

import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import TheTeaserText from '@/components/molecules/Teaser/common/TeaserCommonText.vue'
import { TeaserTextProps } from '~/components/molecules/Teaser/common/TeaserCommonText'
import { Layout, Col, Row } from '@/components/core/grid'

export const TeaserInlineProps = {
  link: {
    type: String,
    default: '/',
  },
  ...TeaserTextProps,
}

export default defineComponent({
  name: 'TeaserInline',

  props: TeaserInlineProps,

  components: {
    TheTeaserText,
    Anchor,
    ThePicture,
    Layout,
    Row,
    Col,
  },
})
