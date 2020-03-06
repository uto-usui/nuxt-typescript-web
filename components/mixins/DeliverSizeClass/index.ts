import { computed } from '@vue/composition-api'

/**
 * This is the object
 * you need to pass to props in the component you want to apply
 */
export const DeliverSizeClassProps = {
  xSmall: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  xLarge: {
    type: Boolean,
    default: false,
  },
}

export function DeliverSizeClass(props, className: string) {
  // no props
  const medium = computed(() => Boolean(!props.small && !props.large))

  const sizeClasses = computed((): { [k: string]: boolean } => {
    return {
      [`${className}--x-small`]: props.xSmall,
      [`${className}--small`]: props.small,
      [`${className}--medium`]: medium.value,
      [`${className}--large`]: props.large,
      [`${className}--x-large`]: props.xLarge,
    }
  })

  return sizeClasses.value
}
