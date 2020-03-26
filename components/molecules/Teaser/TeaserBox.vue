<template>
  <div class="teaser-box">
    <div class="tb__inner">
      <div class="tb__header">
        <div class="tb__hed">
          <TheHed>{{ cat }}</TheHed>
        </div>
        <div class="tb__button">
          <TheButton :to="listLink" :color="'primary'" outlined rounded
            >View All</TheButton
          >
        </div>
      </div>
      <div class="tb__divider">
        <TheDivider />
      </div>
      <div class="tb__area">
        <Anchor :to="link" />
        <div class="tb__text-wrap">
          <TheTeaserText
            :cat="''"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
          />
          <TheButton :color="'primary'" text small>Read More</TheButton>
        </div>
        <div class="tb__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserBox.ts"></script>

<style lang="scss" scoped>
@import '~Sass/object/molecules/teaser/teaser-box/_index.scss';
</style>
