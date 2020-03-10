import '~/assets/sass/object/atom/the-dec/_index.scss'

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

export const TheDecProps = {
  ...DeliverSizeClassProps,

  tag: {
    type: String,
    default: 'div',
  },
}

export default defineComponent({
  name: 'TheDec',

  props: TheDecProps,

  setup(props, { slots }) {
    const sizeClasses = DeliverSizeClass(props, 'the-dec')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return () =>
      h(
        props.tag,
        {
          staticClass: 'the-dec',
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
