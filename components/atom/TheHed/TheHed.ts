import 'Sass/object/atom/the-hed/_index.scss'

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

export const TheHedProps = {
  ...DeliverSizeClassProps,

  tag: {
    type: String,
    default: 'h1',
  },
}

export default defineComponent({
  name: 'TheHed',

  props: TheHedProps,

  setup(props, { slots }) {
    const sizeClasses = DeliverSizeClass(props, 'the-hed')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return () =>
      h(
        props.tag,
        {
          staticClass: 'the-hed',
          class: classes.value,
        },
        [
          createDomInner({
            slot: slots.default(),
            tag: 'span',
            staticClass: 'th__inner',
          }),
        ],
      )
  },
})
