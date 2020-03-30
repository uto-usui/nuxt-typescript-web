import { defineComponent, PropType } from '@vue/composition-api'

import SliceHedLine from '@/components/molecules/SliceHedLine/SliceHedLine'
import TeaserSliceJson from './TeaserSlice.json'

import TeaserCard from '~/components/molecules/Teaser/TeaserCard'
import { Col, Layout, Row } from '~/components/core/grid'

export const TeaserSliceFourProps = {
  list: {
    type: Array as PropType<typeof TeaserSliceJson[]>,
    default: () => TeaserSliceJson,
  },
}

export default defineComponent({
  name: 'TeaserSliceTrio',

  props: TeaserSliceFourProps,

  components: {
    TeaserCard,
    SliceHedLine,
    Layout,
    Row,
    Col,
  },
})
