// 💄 style
import '~/assets/sass/object/atom/by-line/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  createElement as h,
  defineComponent,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export default defineComponent({
  name: 'ByLine',

  props: {
    ...DeliverSizeClassProps,

    tag: {
      type: String,
      default: 'p',
    },
  },

  setup: (props, { slots }) => {
    const sizeClasses = DeliverSizeClass(props, 'by-line')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return () =>
      h(
        props.tag,
        {
          class: classes.value,
          staticClass: 'by-line',
        },
        slots.default(),
      )
  },
})
