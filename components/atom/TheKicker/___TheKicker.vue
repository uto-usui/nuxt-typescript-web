<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
//
// composition API with template
// ================================

import {
  computed,
  defineComponent,
  // createElement as h,
  onMounted,
} from '@vue/composition-api'

export default defineComponent({
  name: 'TheKicker',

  props: {
    small: Boolean,
    large: Boolean,

    html: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'p',
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

    onMounted(() => {
      _ctx.root.$nextTick(() => {
        console.log('mounted !')
        // _ctx.slots.default
      })
    })

    return {
      classes: classes.value,
    }

    // return () =>
    //   h(props.tag, {
    //     class: classes.value,
    //     staticClass: 'the-kickers',
    //     domProps: { innerHTML: props.html },
    //   })
  },
})
</script>

<style lang="scss" scoped>
@import '~Sass/object/atom/the-kicker/_index';
</style>
