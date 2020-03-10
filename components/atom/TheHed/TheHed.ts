import 'Sass/object/atom/the-hed/_index.scss'

import {
  computed,
  defineComponent,
  // onMounted,
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

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'the-hed')
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
        slot: _this.$slots.default,
        tag: 'span',
        staticClass: 'th__inner',
      }),
    ]
    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{ staticClass: 'the-hed', class: _this.classes },
      },
      children,
    )
  },
})
