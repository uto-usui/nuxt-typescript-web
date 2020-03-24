<template>
  <div class="teaser-card">
    <Anchor :to="link" />
    <div class="tc__inner">
      <div class="tc__area">
        <div class="tc__img">
          <ThePicture
            :src="require(`Images/test/02.jpg`)"
            :width="1"
            :height="1"
          />
        </div>
        <div class="tc__text-wrap">
          <TheTeaserText
            :cat="''"
            :pub-date="pubDate"
            :pub-date-formatted="pubDateFormatted"
            :title="title"
          />
        </div>
        <TheDivider />
        <div class="tc__author">
          <div class="tc__name">
            <ByLine>{{ author.name }}</ByLine>
          </div>
          <div class="tc__job">
            <JobTitle>{{ author.job }}</JobTitle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserCard.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/teaser-card/_index.scss';
</style>
