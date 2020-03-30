import '~/assets/sass/object/atom/nav-element/_index.scss'

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

export const NavElementProps = {
  ...deliverSizeClassProps,
  ...generateRouteLinkProps,
}

export default defineComponent({
  name: 'NavElement',

  props: NavElementProps,

  setup(props, ctx) {
    const classes = computed(() => {
      return [
        {
          'nav-element': true,
        },
        deliverSizeClass(props, 'nav-element').value,
      ]
    })

    return () => {
      const { tag, data } = generateRouteLink(props, ctx, classes.value)

      return h(tag, data, [
        h(
          'span',
          {
            staticClass: 'tt__inner',
          },
          ctx.slots.default(),
        ),
      ])
    }
  },
})
