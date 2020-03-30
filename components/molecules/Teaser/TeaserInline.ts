import { defineComponent } from '@vue/composition-api'

import TheTeaserText from '@/components/molecules/Teaser/common/TeaserCommonText.vue'
import { Layout, Col, Row } from '@/components/core/grid'
import Anchor from '~/components/core/Anchor/Anchor'
import ThePicture from '~/components/atom/ThePicture/ThePicture'

import { TeaserTextProps } from '~/components/molecules/Teaser/common/TeaserCommonText'

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
