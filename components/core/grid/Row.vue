<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export const RowProps = {
  tag: {
    type: String,
    default: 'div',
  },
  noGutterTouch: {
    type: Boolean,
    default: false,
  },
  noGutterDesktop: {
    type: Boolean,
    default: false,
  },
}

export default Vue.extend({
  name: 'Row',

  functional: true,

  props: RowProps,

  render(h, { props, data, children }) {
    const classList: string[] = []

    const { noGutterTouch, noGutterDesktop } = props

    noGutterTouch && classList.push('row--no-gutter-touch')
    noGutterDesktop && classList.push('row--no-gutter-desktop')

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'row',
        class: classList,
      }),
      children,
    )
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/core/grid/_row.scss';
</style>
