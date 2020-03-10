import '~/assets/sass/object/atom/the-divider/_index.scss'

import { defineComponent, createElement as h } from '@vue/composition-api'

export default defineComponent({
  name: 'TheDivider',

  props: {
    //
  },

  setup(_props, _ctx) {
    return () =>
      h('div', {
        staticClass: 'the-divider',
      })
  },
})
