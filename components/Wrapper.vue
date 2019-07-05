<template>
  <main id="main" class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding-top: 5vw;
  padding-bottom: 5vw;
  overflow: hidden;
  //
  @include desktop {
    padding-top: 165px;
  }
}
</style>
