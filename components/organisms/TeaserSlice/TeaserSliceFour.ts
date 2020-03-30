import { defineComponent, PropType } from '@vue/composition-api'

import SliceHedLine from '@/components/molecules/SliceHedLine/SliceHedLine'
import TeaserSliceJson from './TeaserSlice.json'

import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic'
import { Col, Layout, Row } from '~/components/core/grid'

export const TeaserSliceFourProps = {
  list: {
    type: Array as PropType<typeof TeaserSliceJson[]>,
    default: () => TeaserSliceJson,
  },
}

export default defineComponent({
  name: 'TeaserSliceFour',

  props: TeaserSliceFourProps,

  components: {
    TeaserBasic,
    SliceHedLine,
    Layout,
    Row,
    Col,
  },
})
