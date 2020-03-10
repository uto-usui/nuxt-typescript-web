import '~/assets/sass/object/atom/the-button/_index.scss'

import { VNodeData } from 'vue'

import { computed, defineComponent } from '@vue/composition-api'

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

  setup(props, _ctx) {
    const sizeClasses = DeliverSizeClass(props, 'the-button')

    const isFlat = computed(() =>
      Boolean(props.icon || props.text || props.outlined),
    )
    const isRound = computed(() => Boolean(props.icon || props.circle))
    const isLink = computed(() => Boolean(props.to || props.href || props.link))

    const classes = computed(() => {
      return {
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
        ...sizeClasses,
      }
    })

    const _generateRouteLink = () => generateRouteLink(props, _ctx, classes)

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

    return {
      classes,

      _generateRouteLink,
      setTextColor,
      setBackgroundColor,
    }
  },

  render(h) {
    const _this = this as any // TODO 😢 this の推論が効かなくて setup() で return したメンバーがいてない

    // create inner
    const children = [
      createDomInner({
        slot: _this.$slots.default,
        tag: 'span',
        staticClass: 'tb__inner',
      }),
    ]

    // set Class for color
    const setColor = !_this.isFlat
      ? _this.setBackgroundColor
      : _this.setTextColor
    const { tag, data } = _this._generateRouteLink()

    data.staticClass = 'the-button'

    return h(tag, _this.disabled ? data : setColor(_this.color, data), children)
  },
})
