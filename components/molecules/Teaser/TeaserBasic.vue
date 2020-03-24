<template>
  <div class="teaser-basic">
    <Anchor :to="link" />
    <div class="tb__inner">
      <div class="tb__area">
        <div class="tb__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
        <div class="tb__wrap">
          <TheTeaserText
            :cat="cat"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
            :large="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserBasic.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/teaser-basic/_index.scss';
</style>
