<template>
  <div class="teaser-slice-blank">
    <Layout>
      <Row>
        <Col :span-mobile="12">
          <div class="tsb__title">
            <SliceHedLine :sub="`This is short lead texts... `" :to="''" />
          </div>
        </Col>
        <Col :span-mobile="12">
          <div class="tsb__divider">
            <TheDivider />
          </div>
        </Col>
        <Col :span-mobile="12">
          <div class="tsh__sub">
            <SliceHedLine :title="`#cat`" small />
          </div>
        </Col>
        <Col
          v-for="index in 3"
          :key="`tsfCol${index}`"
          :span-mobile="3"
          :offset-mobile="index === 1 ? 3 : null"
        >
          <div class="tsb__item">
            <TeaserBasic :title="list[index - 1].title" />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceBlank.ts"></script>

<style lang="scss">
@import '~Sass/object/organisms/teaser-slice/blank/_index.scss';
</style>
