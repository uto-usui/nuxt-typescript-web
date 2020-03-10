import { VNodeData } from 'vue'
import { SetupContext } from '@vue/composition-api'

/**
 * This is the object
 * you need to pass to props in the component you want to apply
 */
export const generateRouteLinkProps = {
  disabled: Boolean,

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
  exact: {
    type: Boolean,
    default: false,
  },
  append: {
    type: Boolean,
    default: false,
  },

  tag: {
    type: String,
    default: 'button',
  },
  type: {
    type: String,
    default: 'button',
  },
  value: {
    type: [String, Number],
    default: undefined,
  },
}

export function generateRouteLink(
  props: typeof generateRouteLinkProps | { [k: string]: any }, // TODO 😂 I don't know props type
  ctx: SetupContext,
  classes,
) {
  let tag = ''

  const click = (e: MouseEvent) => {
    ctx.emit('click', e)
  }

  const data: VNodeData = {
    attrs: {
      tabindex: 'tabindex' in ctx.attrs ? ctx.attrs.tabindex : undefined,
    },
    class: classes,
    props: {},
    [props.to ? 'nativeOn' : 'on']: {
      ...ctx.listeners,
      click,
    },
    ref: 'link',
  }

  // if (typeof props.exact === 'undefined') {
  //   exact = props.to === '/'
  // }

  if (props.to) {
    tag = 'n-link'
    Object.assign(data.props, {
      to: props.to,
      exact: props.exact,
      append: props.append,
    })
  } else {
    tag = (props.href && 'a') || props.tag || 'div'

    if (tag === 'a' && props.href) data.attrs!.href = props.href
  }

  if (props.target) data.attrs!.target = props.target

  // setup button
  if (tag === 'button') {
    data.attrs!.type = props.type
    data.attrs!.disabled = props.disabled
  }
  data.attrs!.value = ['string', 'number'].includes(typeof props.value)
    ? props.value
    : JSON.stringify(props.value)

  return { tag, data }
}
