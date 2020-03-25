import { defineComponent } from '@vue/composition-api'

import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic'
import { Col, Layout, Row } from '@/components/core/grid'

export const TeaserSliceCategoryProps = {
  link: {
    type: String,
    default: '/',
  },
}

export default defineComponent({
  name: 'TeaserSliceCategory',

  props: TeaserSliceCategoryProps,

  components: {
    TeaserBasic,
    Layout,
    Row,
    Col,
  },
})
