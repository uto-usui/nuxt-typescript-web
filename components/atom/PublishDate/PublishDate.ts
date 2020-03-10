import '~/assets/sass/object/atom/publish-date/_index.scss'

import {
  computed,
  defineComponent,
  createElement as h,
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

  setup(props, { slots }) {
    const sizeClasses = DeliverSizeClass(props, 'publish-date')
    const classes = computed(() => {
      return {
        ...sizeClasses,
      }
    })

    const attrs = {
      itemProp: 'dateModified',
      dataTime: props.pubDate,
    }

    return () =>
      h(
        props.tag,
        {
          staticClass: 'publish-date',
          class: classes.value,
          attrs,
        },
        slots.default(),
      )
  },
})
