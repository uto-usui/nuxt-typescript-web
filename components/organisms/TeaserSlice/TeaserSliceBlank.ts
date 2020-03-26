import { defineComponent, PropType } from '@vue/composition-api'

import TeaserSliceJson from './TeaserSlice.json'

import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic'
import { Col, Layout, Row } from '~/components/core/grid'
import SliceHedLine from '@/components/molecules/SliceHedLine/SliceHedLine'
import TheDivider from '@/components/atom/TheDivider/TheDivider'

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
    TheDivider,
    TeaserBasic,
    SliceHedLine,
    Layout,
    Row,
    Col,
  },
})
