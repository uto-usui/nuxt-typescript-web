// 💄 style
import '~/assets/sass/object/atom/by-line/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import { computed, defineComponent } from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export default defineComponent({
  name: 'ByLine',

  props: {
    ...DeliverSizeClassProps,

    tag: {
      type: String,
      default: 'p',
    },
  },

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'by-line')
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
    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{ staticClass: 'by-line', class: _this.classes },
      },
      _this.$slots.default,
    )
  },
})
