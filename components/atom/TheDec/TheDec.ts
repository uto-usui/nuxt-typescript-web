import '~/assets/sass/object/atom/the-dec/_index.scss'

import { computed, defineComponent } from '@vue/composition-api'

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

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'the-dec')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return {
      classes,
    }
  },

  render(h) {
    const _this = this as any // TODO 😢 this の推論が効かなくて setup() で return したメンバーがいてない

    const children = [
      createDomInner({
        tag: 'div',
        staticClass: 'td__inner',
        slot: [
          createDomInner({
            slot: _this.$slots.default,
            tag: 'p',
            staticClass: 'td__text',
          }),
        ],
      }),
    ]

    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{ staticClass: 'the-dec', class: _this.classes },
      },
      children,
    )
  },
})
