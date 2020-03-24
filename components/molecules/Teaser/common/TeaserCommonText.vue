<template>
  <div :class="[{ 'teaser-text--large': large }]" class="teaser-text">
    <div class="tt__title">
      <TheHed :small="!large">{{ title }}</TheHed>
    </div>
    <div class="tt__meta">
      <TheKicker>{{ cat }}</TheKicker>
      <PublishDate :pub-date="pubDate">{{ pubDateFormatted }} </PublishDate>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserCommonText.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/common/teaser-text/_index.scss';
</style>
