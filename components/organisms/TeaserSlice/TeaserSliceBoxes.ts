import { defineComponent, PropType } from '@vue/composition-api'

import TeaserBox from '@/components/molecules/Teaser/TeaserBox'
import TeaserSliceJson from './TeaserSlice.json'
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
    TeaserBox,
    Layout,
    Row,
    Col,
  },
})
