import '~/assets/sass/object/atom/the-hed/_index.scss'

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

export const TheHedProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'h1',
  },
}

export default defineComponent({
  name: 'TheHed',

  props: TheHedProps,

  setup(props, { slots }) {
    const baseClassName = 'the-hed'
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
            staticClass: 'th__inner',
          }),
        ],
      )
  },
})
