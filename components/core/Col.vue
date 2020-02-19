<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { breakpoints } from '@/assets/js/info'
import { upperFirst } from '@/assets/js/helper'

/**
 * create vue component props - span
 */
const spanProps = (() => {
  return breakpoints.reduce((props, name) => {
    props['span' + upperFirst(name)] = {
      type: Number,
      default: null,
    }
    return props
  }, {} as { string: PropOptions })
})()

/**
 * create vue component props - offset
 */
const offsetProps = (() => {
  return breakpoints.reduce((props, name) => {
    props['offset' + upperFirst(name)] = {
      type: Number,
      default: null,
    }
    return props
  }, {} as { string: PropOptions })
})()

/**
 * create vue component props - order
 */
const orderProps = (() => {
  return breakpoints.reduce((props, name) => {
    props['order' + upperFirst(name)] = {
      type: Number,
      default: null,
    }
    return props
  }, {} as { string: PropOptions })
})()

/**
 * all breakpoint prop keys
 */
const propMap = {
  span: Object.keys(spanProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps),
}

/**
 * create breakpoint class name
 */
const createBreakpointClass = (
  type: keyof typeof propMap,
  prop: string,
  val: boolean | string | number,
) => {
  // prefix
  let className = `col--${type}`

  if (val == null || val === false) {
    return false
  }

  // prop name
  if (prop) {
    const breakpoint = prop.replace(type, '')
    className += `-${breakpoint}`
  }

  // number
  className += `-${val}`
  return className.toLowerCase()
}

export default Vue.extend({
  name: 'Col',

  functional: true,

  props: {
    ...spanProps,
    ...offsetProps,
    ...orderProps,
    tag: {
      type: String,
      default: 'div',
    },
  },

  render(h, { props, data, children }) {
    const classList: string[] = []

    let type: keyof typeof propMap
    for (type in propMap) {
      propMap[type].forEach(prop => {
        const value: number = (props as any)[prop]
        const className = createBreakpointClass(type, prop, value)
        if (className) classList!.push(className)
      })
    }

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'col',
        class: classList,
      }),
      children,
    )
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/core/grid/_col';
</style>
