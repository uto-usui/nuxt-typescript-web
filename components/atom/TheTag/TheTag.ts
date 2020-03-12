import '~/assets/sass/object/atom/the-tag/_index.scss'

import {
  computed,
  createElement as h,
  defineComponent,
} from '@vue/composition-api'
import {
  deliverSizeClass,
  deliverSizeClassProps,
} from '@/components/mixins/DeliverSizeClass'
import {
  generateRouteLink,
  generateRouteLinkProps,
} from '~/components/mixins/CreateRouteLink'

export const TheTagProps = {
  ...deliverSizeClassProps,
  ...generateRouteLinkProps,

  active: {
    type: Boolean,
    default: false,
  },
}

export default defineComponent({
  name: 'TheTag',

  props: TheTagProps,

  setup(props, ctx) {
    const classes = computed(() => {
      return [
        {
          'the-tag': true,
        },
        deliverSizeClass(props, 'the-tag').value,
      ]
    })

    return () => {
      const { tag, data } = generateRouteLink(props, ctx, classes.value)

      return h(tag, data, [
        h(
          'span',
          {
            staticClass: 'tt__inner',
            class: {
              'is-active': props.active,
            },
          },
          ctx.slots.default(),
        ),
      ])
    }
  },
})
