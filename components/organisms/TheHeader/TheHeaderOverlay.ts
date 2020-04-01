import { defineComponent, PropType } from '@vue/composition-api'

import NavJson from './_NavList.json'
import NavJsonSub from './_NavListSub.json'
import NavJsonUtil from './_NavListUtil.json'
import NavList from '~/components/molecules/NavList/NavList'
import { Layout, Row, Col } from '~/components/core/grid'
import TagList from '~/components/molecules/TagList/TagList.vue'
import TheHeaderTitle from '~/components/organisms/TheHeader/TheHeaderTitle'

export const TheHeaderOverlayProps = {
  list: {
    type: Array as PropType<{ [k: string]: string }[]>,
    default: () => NavJson, // TODO 🤡 mock data - need remove it on prod
  },
  listSub: {
    type: Array as PropType<{ [k: string]: string }[]>,
    default: () => NavJsonSub, // TODO 🤡 mock data - need remove it on prod
  },
  listUtil: {
    type: Array as PropType<{ [k: string]: string }[]>,
    default: () => NavJsonUtil, // TODO 🤡 mock data - need remove it on prod
  },
}

export default defineComponent({
  name: 'TheHeaderOverlay',
  components: {
    NavList,
    TheHeaderTitle,
    TagList,
    Layout,
    Row,
    Col,
  },
  props: TheHeaderOverlayProps,
})
