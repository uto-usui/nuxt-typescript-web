import '~/assets/sass/object/atom/the-button/_index.scss'

import { VNodeData } from 'vue'

import {
  computed,
  defineComponent,
  createElement as h,
} from '@vue/composition-api'

import {
  deliverSizeClassProps,
  deliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'
import {
  generateRouteLinkProps,
  generateRouteLink,
} from '~/components/mixins/CreateRouteLink'
import { createDomInner } from '~/components/mixins/CreateDomInner'

export const TheButtonProps = {
  ...deliverSizeClassProps,
  ...generateRouteLinkProps,

  color: {
    type: String,
    default: '',
  },

  full: Boolean, // full

  link: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },

  tile: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },

  text: {
    type: Boolean,
    default: false,
  },
}

export default defineComponent({
  name: 'TheButton',

  props: TheButtonProps,

  setup(props, ctx) {
    const isFlat = computed(() =>
      Boolean(props.icon || props.text || props.outlined),
    )
    const isRound = computed(() => Boolean(props.icon || props.circle))
    const isLink = computed(() => Boolean(props.to || props.href || props.link))

    const classes = computed(() => {
      return [
        {
          'the-button': true,
          'the-button--full': props.full,
          'the-button--disabled': props.disabled,
          'the-button--circle': props.circle,
          'the-button--flat': isFlat.value,
          'the-button--icon': props.icon,
          'the-button--outlined': props.outlined,
          'the-button--round': isRound.value,
          'the-button--rounded': props.rounded,
          'the-button--router': props.to,
          'the-button--text': props.text,
          'the-button--tile': props.tile,
          'the-button--link': isLink.value,
        },
        deliverSizeClass(props, 'the-button').value,
      ]
    })

    const setBackgroundColor = (
      color?: string | false,
      data: VNodeData = {},
    ): VNodeData => {
      if (typeof data.class === 'string') {
        return data
      }
      if (color) {
        data.class.push({
          [`the-button--${color}`]: true,
          'the-button--color': true,
        })
      }

      return data
    }

    const setTextColor = (color?: string | false, data: VNodeData = {}) => {
      if (typeof data.class === 'string') {
        return data
      }
      if (color) {
        data.class.push({
          [`the-button--${color}`]: true,
          'the-button--color': true,
        })
      }
      return data
    }

    // set Class for color
    const setColor = !isFlat.value ? setBackgroundColor : setTextColor

    return () => {
      const { tag, data } = generateRouteLink(props, ctx, classes.value)

      return h(tag, props.disabled ? data : setColor(props.color, data), [
        createDomInner({
          slot: ctx.slots.default(),
          tag: 'span',
          staticClass: 'tb__inner',
        }),
      ])
    }
  },
})
