<template>
  <div class="teaser-inline">
    <Anchor :to="link" />
    <div class="ti__inner">
      <div class="ti__area">
        <div class="ti__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
        <div class="ti__text-wrap">
          <TheTeaserText
            :cat="''"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserInline.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/teaser-inline/_index.scss';
</style>
