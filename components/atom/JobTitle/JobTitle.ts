// 💄 style
import '~/assets/sass/object/atom/job-title/_index.scss'

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

export const JobTitleProps = {
  ...deliverSizeClassProps,

  tag: {
    type: String,
    default: 'p',
  },
}

export default defineComponent({
  name: 'JobTitle',

  props: JobTitleProps,

  setup: (props, { slots }) => {
    const baseClassName = 'job-title'
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
