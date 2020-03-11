// 💄 style
import '~/assets/sass/object/atom/the-kicker/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  defineComponent,
  createElement as h,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'
import { createDomInner } from '~/components/mixins/CreateDomInner'

export const TheKickerProps = {
  ...DeliverSizeClassProps,

  tag: {
    type: String,
    default: 'p',
  },
}

export default defineComponent({
  name: 'TheKicker',

  props: TheKickerProps,

  setup(props, { slots }) {
    const sizeClasses = DeliverSizeClass(props, 'the-kicker')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return () =>
      h(
        props.tag,
        {
          staticClass: 'the-kicker',
          class: classes.value,
        },
        [
          createDomInner({
            slot: slots.default(),
            tag: 'span',
            staticClass: 'tk__inner',
          }),
        ],
      )
  },
})
