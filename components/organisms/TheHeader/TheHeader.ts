import { defineComponent } from '@vue/composition-api'
import TheHeaderTrigger from './TheHeaderTrigger.vue'
import TheHeaderOverlay from './TheHeaderOverlay'
import { Layout, Row, Col } from '~/components/core/grid'

export default defineComponent({
  name: 'TheHeader',
  components: {
    Layout,
    Row,
    Col,
    TheHeaderTrigger,
    TheHeaderOverlay,
  },
})
