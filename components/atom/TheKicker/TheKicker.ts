// 💄 style
import 'Sass/object/atom/the-kicker/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
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

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'the-kicker')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    return {
      classes,
    }
  },
  render(h, _ctx) {
    const _this = this as any // TODO 😢 this の推論が効かなくて setup() で return したメンバーがいてない
    const children = [
      createDomInner({
        slot: _this.$slots.default,
        tag: 'span',
        staticClass: 'tk__inner',
      }),
    ]
    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{ staticClass: 'the-kicker', class: _this.classes },
      },
      children,
    )
  },
})
