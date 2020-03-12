// 💄 style
import '~/assets/sass/object/atom/the-kicker/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  defineComponent,
  createElement as h,
} from '@vue/composition-api'

import {
  deliverSizeClassProps,
  deliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'
import { createDomInner } from '~/components/mixins/CreateDomInner'

export const TheKickerProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'p',
  },
}

export default defineComponent({
  name: 'TheKicker',

  props: TheKickerProps,

  setup(props, { slots }) {
    const baseClassName = 'the-kicker'
    const classes = computed(() => {
      return [baseClassName, deliverSizeClass(props, baseClassName).value]
    })

    return () =>
      h(
        props.tag,
        {
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
