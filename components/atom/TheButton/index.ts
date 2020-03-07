import '~/assets/sass/object/atom/the-button/_index.scss'

import { VNodeData } from 'vue'

import {
  computed,
  defineComponent,
  // onMounted,
} from '@vue/composition-api'

import {
  DeliverSizeClassProps,
  DeliverSizeClass,
} from '~/components/mixins/DeliverSizeClass'
import { createDomInner } from '~/components/mixins/CreateDomInner'

export default defineComponent({
  name: 'TheButton',

  props: {
    ...DeliverSizeClassProps,

    color: {
      type: String,
      default: '',
    },

    append: Boolean,

    full: Boolean, // full

    disabled: Boolean,

    exact: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'button',
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
    type: {
      type: String,
      default: 'button',
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
  },

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

    console.log(classes)

    const click = (e: MouseEvent) => {
      _ctx.emit('click', e)

      // this.btnToggle && this.toggle()
    }

    const generateRouteLink = () => {
      let exact = props.exact
      let tag

      const data: VNodeData = {
        attrs: {
          tabindex: 'tabindex' in _ctx.attrs ? _ctx.attrs.tabindex : undefined,
        },
        class: classes.value,
        props: {},
        [props.to ? 'nativeOn' : 'on']: {
          ..._ctx.listeners,
          click,
        },
        ref: 'link',
      }

      if (typeof props.exact === 'undefined') {
        exact = props.to === '/'
      }

      if (props.to) {
        tag = 'nuxt-link'
        Object.assign(data.props, {
          to: props.to,
          exact,
          append: props.append,
        })
      } else {
        tag = (props.href && 'a') || props.tag || 'div'

        if (tag === 'a' && props.href) data.attrs!.href = props.href
      }

      if (props.target) data.attrs!.target = props.target

      return { tag, data }
    }

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

      setTextColor,
      setBackgroundColor,
      generateRouteLink,
      click,
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
    const { tag, data } = _this.generateRouteLink()

    // setup button
    if (tag === 'button') {
      data.attrs!.type = _this.type
      data.attrs!.disabled = _this.disabled
    }
    data.attrs!.value = ['string', 'number'].includes(typeof _this.value)
      ? _this.value
      : JSON.stringify(_this.value)

    data.staticClass = 'the-button'

    return h(tag, _this.disabled ? data : setColor(_this.color, data), children)
  },
})
