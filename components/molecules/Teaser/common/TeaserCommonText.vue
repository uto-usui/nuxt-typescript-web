<template>
  <div class="teaser-text">
    <div :class="[{ 'tt__title--full': full }]" class="tt__title">
      <TheHed :tag="'h3'" :small="!half || !full" :large="full">{{
        title
      }}</TheHed>
    </div>
    <div v-if="lead" class="tt__lead">
      <TheDec>{{ lead }}</TheDec>
    </div>
    <div class="tt__meta">
      <TheKicker v-if="cat">{{ cat }}</TheKicker>
      <PublishDate :pub-date="pubDate">{{ pubDateFormatted }} </PublishDate>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserCommonText.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/common/teaser-text/_index.scss';
</style>
