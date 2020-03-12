<template>
  <div class="tag-list">
    <ul class="tl__items">
      <li
        v-for="(item, index) in list"
        :key="`tl__item${index}`"
        @mouseenter="active = !active"
        class="tl__item"
      >
        <TheTag :active="active" :to="item.link" :large="active"
          >#{{ item.text }}</TheTag
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'

import TagJson from './_TagList.json'
import TheTag from '~/components/atom/TheTag/TheTag'

export const TagListProps = {
  list: {
    type: Array as PropType<string[]>,
    default: () => TagJson, // TODO 🤡 mock data - need remove it on prod
  },
}

export default defineComponent({
  name: 'TagList',

  props: TagListProps,

  components: { TheTag },

  setup() {
    const active = ref(true)

    return {
      active,
    }
  },
})
</script>

<style lang="scss">
@import '~assets/sass/object/molecules/tag-list/_index.scss';
</style>
