import { defineComponent } from '@vue/composition-api'

import SliceHed from '@/components/atom/SliceHed/SliceHed'
import { Layout, Row, Col } from '@/components/core/grid'
import TheButton from '@/components/atom/TheButton/TheButton'

export const SliceHedLineProps = {
  small: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Recent Articles',
  },
  sub: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '/',
  },
}

export default defineComponent({
  name: 'SliceHedLine',

  props: SliceHedLineProps,

  components: {
    TheButton,
    SliceHed,
    Layout,
    Row,
    Col,
  },
})
