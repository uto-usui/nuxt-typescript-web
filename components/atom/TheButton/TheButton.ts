import '~/assets/sass/object/atom/the-button/_index.scss'

import { VNodeData } from 'vue'

import {
  computed,
  defineComponent,
  createElement as h,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'
import {
  generateRouteLinkProps,
  generateRouteLink,
} from '~/components/mixins/CreateRouteLink'
import { createDomInner } from '~/components/mixins/CreateDomInner'

export const TheButtonProps = {
  ...DeliverSizeClassProps,
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
    const sizeClasses = DeliverSizeClass(props, 'the-button')

    const isFlat = computed(() =>
      Boolean(props.icon || props.text || props.outlined),
    )
    const isRound = computed(() => Boolean(props.icon || props.circle))
    const isLink = computed(() => Boolean(props.to || props.href || props.link))

    const classes = computed(() => {
      return {
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
        ...sizeClasses,
      }
    })

    const setBackgroundColor = (
      color?: string | false,
      data: VNodeData = {},
    ): VNodeData => {
      if (typeof data.class === 'string') {
        return data
      }
      if (color) {
        data.class = {
          ...data.class,
          [`the-button--${color}`]: true,
          'the-button--color': true,
        }
      }

      return data
    }

    const setTextColor = (color?: string | false, data: VNodeData = {}) => {
      if (typeof data.class === 'string') {
        return data
      }
      if (color) {
        data.class = {
          ...data.class,
          [color + '--text']: true,
        }
      }
      return data
    }

    // set Class for color
    const setColor = !isFlat.value ? setBackgroundColor : setTextColor
    const { tag, data } = generateRouteLink(props, ctx, classes.value)

    data.staticClass = 'the-button'

    return () =>
      h(tag, props.disabled ? data : setColor(props.color, data), [
        createDomInner({
          slot: ctx.slots.default(),
          tag: 'span',
          staticClass: 'tb__inner',
        }),
      ])
  },
})
