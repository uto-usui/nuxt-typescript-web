<script lang="ts">
//
// composition API with external render function
// ================================
import { VNode, VNodeChildren } from 'vue'
import { computed, defineComponent, createElement } from '@vue/composition-api'

export default defineComponent({
  name: 'TheKicker',

  props: {
    small: Boolean,
    large: Boolean,

    tag: {
      type: String,
      default: 'h1',
    },
  },

  setup(props, _ctx) {
    const medium = computed(() => Boolean(!props.small && !props.large))
    const sizeableClasses = computed(() => {
      return {
        'the-kicker--small': props.small,
        'the-kicker--medium': medium.value,
        'the-kicker--large': props.large,
      }
    })
    const classes = computed(() => {
      return {
        ...sizeableClasses.value,
      }
    })

    const genContent = (slot: VNodeChildren) => {
      return createElement(
        'span',
        {
          staticClass: 'tk__inner',
        },
        slot,
      )
    }

    return {
      classes,
      genContent,
    }
  },

  render(h, _ctx): VNode {
    const _this = this as any // TODO 😢 this の推論が効かなくて setup() で return したメンバーがいてない
    const children = [_this.genContent(_this.$slots.default)]
    return h(
      _this.tag,
      {
        ..._this.$data,
        ...{ staticClass: 'the-kicker', class: _this.classes },
      },
      children,
    )
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/atom/the-kicker/_index';
</style>
