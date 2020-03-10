import '~/assets/sass/object/atom/publish-date/_index.scss'

import {
  computed,
  defineComponent,
  // onMounted,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export const PublishDateProps = {
  ...DeliverSizeClassProps,

  pubDate: {
    type: String,
    default: undefined,
  },

  tag: {
    type: String,
    default: 'time',
  },
}

export default defineComponent({
  name: 'PublishDate',

  props: PublishDateProps,

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'publish-date')
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

    const attrs = {
      itemProp: 'dateModified',
      dataTime: _this.pubDate,
    }

    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{
          staticClass: 'publish-date',
          class: _this.classes,
          attrs,
        },
      },
      _this.$slots.default,
    )
  },
})
