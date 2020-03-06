import { createElement as h } from '@vue/composition-api'
import { VNodeChildren } from 'vue'

export interface CreateDomInnerType {
  slot: VNodeChildren
  tag: string
  staticClass: string
}

export const createDomInner = ({
  slot,
  tag,
  staticClass,
}: CreateDomInnerType) => {
  return h(
    tag,
    {
      staticClass,
    },
    slot,
  )
}
