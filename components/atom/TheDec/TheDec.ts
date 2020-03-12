import '~/assets/sass/object/atom/the-dec/_index.scss'

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

export const TheDecProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'div',
  },
}

export default defineComponent({
  name: 'TheDec',

  props: TheDecProps,

  setup(props, { slots }) {
    const baseClassName = 'the-dec'
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
            tag: 'div',
            staticClass: 'td__inner',
            slot: [
              createDomInner({
                slot: slots.default(),
                tag: 'p',
                staticClass: 'td__text',
              }),
            ],
          }),
        ],
      )
  },
})
