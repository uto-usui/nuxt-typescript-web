<template>
  <div class="tag-list">
    <ul class="tl__items">
      <li
        v-for="(item, index) in list"
        :key="`tl__item${index}`"
        class="tl__item"
      >
        <TheTag :to="item.link">#{{ item.text }}</TheTag>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./TagList.ts"></script>

<style lang="scss">
@import '~assets/sass/object/molecules/tag-list/_index.scss';
</style>
