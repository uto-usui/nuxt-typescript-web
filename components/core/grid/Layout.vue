<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export const LayoutProps = {
  tag: {
    type: String,
    default: 'div',
  },
  full: {
    type: Boolean,
    default: false,
  },
}

export default Vue.extend({
  name: 'Layout',

  functional: true,

  props: LayoutProps,

  render(h, { props, data, children }) {
    const classList = [
      {
        'layout--full': props.full,
      },
    ]

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'layout',
        class: classList,
      }),
      children,
    )
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/core/grid/_layout.scss';
</style>
