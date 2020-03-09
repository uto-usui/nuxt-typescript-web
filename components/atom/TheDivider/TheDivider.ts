import '~/assets/sass/object/atom/the-divider/_index.scss'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'TheDivider',

  props: {
    //
  },

  setup(_props, _ctx) {
    //
  },

  render(h) {
    return h('div', {
      staticClass: 'the-divider',
    })
  },
})
