import '~/assets/sass/object/atom/publish-date/_index.scss'

import {
  computed,
  defineComponent,
  createElement as h,
} from '@vue/composition-api'

import {
  deliverSizeClassProps,
  deliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export const PublishDateProps = {
  ...deliverSizeClassProps,

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
    const baseClassName = 'publish-date'
    const classes = computed(() => {
      return [baseClassName, deliverSizeClass(props, baseClassName).value]
    })

    const attrs = {
      itemProp: 'dateModified',
      dataTime: props.pubDate,
    }

    return () =>
      h(
        props.tag,
        {
          class: classes.value,
          attrs,
        },
        slots.default(),
      )
  },
})
