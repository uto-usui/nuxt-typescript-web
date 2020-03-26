<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { PropOptions } from '@vue/composition-api'
import { breakpoints } from '@/assets/js/info'
import { upperFirst } from '@/assets/js/helper'
import { Dictionary } from '@/types/global'

function makeProps(prefix: string, def: () => PropOptions) {
  return breakpoints.reduce((props, val) => {
    props[prefix + upperFirst(val)] = def()
    return props
  }, {} as Dictionary<PropOptions>)
}

const ALIGNMENT = ['start', 'end', 'center']
const alignValidator = (str: any) =>
  [...ALIGNMENT, 'baseline', 'stretch'].includes(str)
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator,
}))

const justifyValidator = (str: any) =>
  [...ALIGNMENT, 'space-between', 'space-around'].includes(str)
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator,
}))

const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
}

const classMap = {
  align: 'align',
  justify: 'justify',
}

function breakpointClass(
  type: keyof typeof propMap,
  prop: string,
  val: string,
) {
  let className = `row--${classMap[type]}`
  if (val == null) {
    return undefined
  }
  // .align-items-center-sm
  className += `-${val}`
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '')
    className += `-${breakpoint}`
  }
  return className.toLowerCase()
}

const cache = new Map<string, any[]>()

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
  ...alignProps,
  align: {
    type: String,
    default: null,
    validator: alignValidator,
  },
  ...justifyProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator,
  },
}

export default Vue.extend({
  name: 'Row',

  functional: true,

  props: RowProps,

  render(h, { props, data, children }) {
    let cacheKey = ''
    for (const prop in props) {
      cacheKey += String((props as any)[prop])
    }
    let classList = cache.get(cacheKey)

    if (!classList) {
      classList = []
      let type: keyof typeof propMap
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value: string = (props as any)[prop]
          const className = breakpointClass(type, prop, value)
          if (className) classList!.push(className)
        })
      }

      classList!.push({
        [`row--align-${props.align}`]: props.align,
        [`row--justify-${props.justify}`]: props.justify,
        [`row--no-gutter-touch`]: props.noGutterTouch,
        [`row--no-gutter-desktop`]: props.noGutterDesktop,
      })

      cache.set(cacheKey, classList)
    }

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
