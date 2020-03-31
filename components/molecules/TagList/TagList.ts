import { defineComponent, PropType } from '@vue/composition-api'

import TagJson from './_TagList.json'
import TheTag from '~/components/atom/TheTag/TheTag'

export const TagListProps = {
  list: {
    type: Array as PropType<{ [k: string]: string }[]>,
    default: () => TagJson, // TODO 🤡 mock data - need remove it on prod
  },
}

export default defineComponent({
  name: 'TagList',

  props: TagListProps,

  components: { TheTag },
})
