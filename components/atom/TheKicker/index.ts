// 💄 style
import 'Sass/object/atom/the-kicker/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  defineComponent,
  createElement as h,
  // onMounted,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export default defineComponent({
  name: 'TheKicker',

  props: {
    ...DeliverSizeClassProps,

    // TODO Instead of slots - with render function ️🙅🏻‍♀️ - with template 🙆🏻‍♀
    html: {
      type: String,
      default: 'This is slot',
    },

    tag: {
      type: String,
      default: 'p',
    },
  },

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'the-kicker')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return () =>
      h(props.tag, {
        class: classes.value,
        staticClass: 'the-kicker',
        domProps: { innerHTML: props.html },
      })
  },
})
