// 💄 style
import '~/assets/sass/object/atom/the-caption/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  createElement as h,
  defineComponent,
} from '@vue/composition-api'

import {
  deliverSizeClassProps,
  deliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'

export const TheCaptionProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'div',
  },
}

export default defineComponent({
  name: 'TheCaption',

  props: TheCaptionProps,

  setup: (props, { slots }) => {
    const baseClassName = 'the-caption'
    const classes = computed(() => {
      return [baseClassName, deliverSizeClass(props, baseClassName).value]
    })

    return () =>
      h(
        props.tag,
        {
          class: classes.value,
        },
        slots.default(),
      )
  },
})
