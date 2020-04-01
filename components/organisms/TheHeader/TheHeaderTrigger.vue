<template>
  <button
    class="the-header-trigger"
    @click="
      $dispatch('global/setIsMenuOpen', !$getters['global/getIsMenuOpen'])
    "
  >
    <div class="tht__inner">
      menu
    </div>
  </button>
</template>

<script lang="ts" src="./TheHeaderTrigger.ts"></script>

<style lang="scss" scoped>
@import '~assets/sass/object/organisms/the-header/trigger/_index.scss';
</style>
