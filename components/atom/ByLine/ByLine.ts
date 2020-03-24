// 💄 style
import '~/assets/sass/object/atom/by-line/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  createElement as h,
  defineComponent,
} from '@vue/composition-api'

import {
  deliverSizeClassProps,
  deliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export const ByLineProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'p',
  },
}

export default defineComponent({
  name: 'ByLine',

  props: ByLineProps,

  setup: (props, { slots }) => {
    const baseClassName = 'by-line'
    const classes = computed(() => {
      return [baseClassName, deliverSizeClass(props, baseClassName).value]
    })

    return () =>
      h(
        props.tag,
        {
          class: classes.value,
        },
        slots.default(),
      )
  },
})
