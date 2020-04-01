import { defineComponent, PropType } from '@vue/composition-api'

import NavJson from './_NavList.json'
import NavElement from '~/components/atom/NavElement/NavElement'

export const NavListProps = {
  large: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array as PropType<{ [k: string]: string }[]>,
    default: () => NavJson, // TODO 🤡 mock data - need remove it on prod
  },
}

export default defineComponent({
  name: 'NavList',

  props: NavListProps,

  components: { NavElement },
})
