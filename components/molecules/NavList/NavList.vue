<template>
  <div class="nav-list">
    <ul class="nl__items">
      <li
        v-for="(item, index) in list"
        :key="`nl__item${index}`"
        class="nl__item"
        :class="[
          {
            'nl__item--large': large,
            'nl__item--small': small,
          },
        ]"
      >
        <NavElement :to="item.link" :large="large" :small="small">{{
          item.text
        }}</NavElement>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./NavList.ts"></script>

<style lang="scss">
@import '~assets/sass/object/molecules/nav-list/_index.scss';
</style>
