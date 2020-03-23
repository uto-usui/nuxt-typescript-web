// 💄 style
import '~/assets/sass/object/core/anchor/_index.scss'

// 👏🏻 hello composition API // TODO Looking forward to vue3
import {
  computed,
  createElement as h,
  defineComponent,
} from '@vue/composition-api'

import {
  generateRouteLink,
  generateRouteLinkProps,
} from '~/components/mixins/CreateRouteLink'

export const AnchorProps = {
  ...generateRouteLinkProps,
}

export default defineComponent({
  name: 'Anchor',

  props: AnchorProps,

  setup: (props, ctx) => {
    const classes = computed(() => {
      return [
        {
          anchor: true,
        },
      ]
    })

    return () => {
      const { tag, data } = generateRouteLink(props, ctx, classes.value)

      return h(tag, data, ctx.slots.default && ctx.slots.default())
    }
  },
})
