<script lang="ts">
import Vue, { VNode } from 'vue'

export default Vue.extend({
  name: 'TheKicker',

  props: {
    xSmall: Boolean,
    small: Boolean,
    large: Boolean,
    xLarge: Boolean,

    tag: {
      type: String,
      default: 'h1',
    },
  },

  computed: {
    medium(): boolean {
      return Boolean(!this.small && !this.large)
    },
    sizeableClasses(): object {
      return {
        'the-kicker--small': this.small,
        'the-kicker--medium': this.medium,
        'the-kicker--large': this.large,
      }
    },
    classes(): any {
      return {
        ...this.sizeableClasses,
      }
    },
  },

  mounted() {
    //
  },

  methods: {
    genContent(): VNode {
      return this.$createElement(
        'span',
        {
          staticClass: 'tk__inner',
        },
        this.$slots.default,
      )
    },
  },

  render(h): VNode {
    const children = [this.genContent()]
    return h(
      this.tag,
      { ...this.$data, ...{ staticClass: 'the-kicker', class: this.classes } },
      children,
    )
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/atom/the-kicker/_index';
</style>
