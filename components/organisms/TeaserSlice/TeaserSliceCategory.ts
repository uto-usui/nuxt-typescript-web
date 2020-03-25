import { defineComponent, PropType } from '@vue/composition-api'

import TeaserSliceJson from './TeaserSlice.json'

import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic'
import { Col, Layout, Row } from '@/components/core/grid'

export const TeaserSliceCategoryProps = {
  list: {
    type: Array as PropType<typeof TeaserSliceJson[]>,
    default: () => TeaserSliceJson,
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
