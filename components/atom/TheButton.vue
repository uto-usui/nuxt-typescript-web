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
    //
  }),

  computed: {
    medium(): boolean {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge)
    },
    sizeableClasses(): object {
      return {
        'the-button--x-small': this.xSmall,
        'the-button--small': this.small,
        'the-button--medium': this.medium,
        'the-button--large': this.large,
        'the-button--x-large': this.xLarge,
      }
    },
    classes(): any {
      return {
        'the-button': true,
        'the-button--full': this.full,
        'the-button--disabled': this.disabled,
        'the-button--circle': this.circle,
        'the-button--flat': this.isFlat,
        'the-button--icon': this.icon,
        'the-button--outlined': this.outlined,
        'the-button--round': this.isRound,
        'the-button--rounded': this.rounded,
        'the-button--router': this.to,
        'the-button--text': this.text,
        'the-button--tile': this.tile,
        'the-button--link': this.isLink,
        ...this.sizeableClasses,
      }
    },
    isFlat(): boolean {
      return Boolean(this.icon || this.text || this.outlined)
    },
    isRound(): boolean {
      return Boolean(this.icon || this.circle)
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
          [`the-button--${color}`]: true,
          'the-button--color': true,
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

    data.staticClass = 'the-button'

    return h(tag, this.disabled ? data : setColor(this.color, data), children)
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/atom/the-button/_index.scss';
</style>
