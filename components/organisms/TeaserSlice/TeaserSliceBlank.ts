import { defineComponent, PropType } from '@vue/composition-api'

import TeaserSliceJson from './TeaserSlice.json'

import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic'
import { Col, Layout, Row } from '~/components/core/grid'

export const TeaserSliceBlankProps = {
  list: {
    type: Array as PropType<typeof TeaserSliceJson[]>,
    default: () => TeaserSliceJson,
  },
}

export default defineComponent({
  name: 'TeaserSliceBlank',

  props: TeaserSliceBlankProps,

  components: {
    TeaserBasic,
    Layout,
    Row,
    Col,
  },
})
