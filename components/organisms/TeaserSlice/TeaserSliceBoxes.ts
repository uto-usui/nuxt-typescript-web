import { defineComponent, PropType } from '@vue/composition-api'

import TeaserSliceJson from './TeaserSlice.json'
import { Col, Layout, Row } from '~/components/core/grid'
import TeaserBox from '@/components/molecules/Teaser/TeaserBox'

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
    TeaserBox,
    Layout,
    Row,
    Col,
  },
})
