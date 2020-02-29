<script lang="ts">
import Vue, { PropType, VNodeData, VNode } from 'vue'

export default Vue.extend({
  name: 'ButtonDefault',

  props: {
    xSmall: Boolean,
    small: Boolean,
    large: Boolean,
    xLarge: Boolean,

    color: {
      type: String,
      default: '',
    },

    append: Boolean,

    full: Boolean, // full

    disabled: Boolean,

    exact: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    link: Boolean,
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String as PropType<string | null>,
      default: null,
    },
    to: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'button',
    },

    circle: Boolean,
    icon: Boolean,

    tile: Boolean,
    outlined: Boolean,
    rounded: Boolean,

    text: Boolean,
    type: {
      type: String,
      default: 'button',
    },
    value: {
      type: String as PropType<any>,
      default: '',
    },
  },

  data: () => ({
    isActive: false,
    proxyClass: '',
  }),

  computed: {
    medium(): boolean {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge)
    },
    sizeableClasses(): object {
      return {
        'button-default--x-small': this.xSmall,
        'button-default--small': this.small,
        'button-default--medium': this.medium,
        'button-default--large': this.large,
        'button-default--x-large': this.xLarge,
      }
    },
    classes(): any {
      return {
        'button-default': true,
        'button-default--full': this.full,
        'button-default--disabled': this.disabled,
        'button-default--circle': this.circle,
        'button-default--flat': this.isFlat,
        'button-default--icon': this.icon,
        'button-default--outlined': this.outlined,
        'button-default--round': this.isRound,
        'button-default--rounded': this.rounded,
        'button-default--router': this.to,
        'button-default--text': this.text,
        'button-default--tile': this.tile,
        ...this.sizeableClasses,
      }
    },
    isFlat(): boolean {
      return Boolean(this.icon || this.text || this.outlined)
    },
    isRound(): boolean {
      return Boolean(this.icon || this.circle)
    },
    isClickable(): boolean {
      if (this.disabled) return false

      return Boolean(
        this.isLink ||
          this.$listeners.click ||
          this.$listeners['!click'] ||
          this.$attrs.tabindex,
      )
    },
    isLink(): boolean {
      return Boolean(this.to || this.href || this.link)
    },
  },

  mounted() {
    //
  },

  methods: {
    click(e: MouseEvent): void {
      this.$emit('click', e)

      // this.btnToggle && this.toggle()
    },
    genContent(): VNode {
      return this.$createElement(
        'span',
        {
          staticClass: 'bd__inner',
        },
        this.$slots.default,
      )
    },
    generateRouteLink() {
      let exact = this.exact
      let tag

      const data: VNodeData = {
        attrs: {
          tabindex:
            'tabindex' in this.$attrs ? this.$attrs.tabindex : undefined,
        },
        class: this.classes,
        props: {},
        [this.to ? 'nativeOn' : 'on']: {
          ...this.$listeners,
          click: this.click,
        },
        ref: 'link',
      }

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/'
      }

      if (this.to) {
        tag = 'nuxt-link'
        Object.assign(data.props, {
          to: this.to,
          exact,
          append: this.append,
        })
      } else {
        tag = (this.href && 'a') || this.tag || 'div'

        if (tag === 'a' && this.href) data.attrs!.href = this.href
      }

      if (this.target) data.attrs!.target = this.target

      return { tag, data }
    },
    setBackgroundColor(
      color?: string | false,
      data: VNodeData = {},
    ): VNodeData {
      if (typeof data.class === 'string') {
        return data
      }
      if (color) {
        data.class = {
          ...data.class,
          [`button-default--${color}`]: true,
          'button-default--color': true,
        }
      }

      return data
    },
    setTextColor(color?: string | false, data: VNodeData = {}): VNodeData {
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
    },
  },

  render(h): VNode {
    const children = [this.genContent()]
    const setColor = !this.isFlat ? this.setBackgroundColor : this.setTextColor
    const { tag, data } = this.generateRouteLink()

    // setup button
    if (tag === 'button') {
      data.attrs!.type = this.type
      data.attrs!.disabled = this.disabled
    }
    data.attrs!.value = ['string', 'number'].includes(typeof this.value)
      ? this.value
      : JSON.stringify(this.value)

    data.staticClass = 'button-default'

    return h(tag, this.disabled ? data : setColor(this.color, data), children)
  },
})
</script>

<style lang="scss" scoped>
.button-default {
  //
}
</style>

<style lang="scss" scoped>
@import '~Sass/object/atom/_button-default';
</style>
