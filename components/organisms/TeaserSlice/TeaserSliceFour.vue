<template>
  <div class="teaser-slice-four">
    <Layout>
      <Row>
        <Col :span-mobile="12">
          <div class="tsf__title">
            <SliceHedLine />
          </div>
        </Col>
        <Col v-for="index in 4" :key="`tsfCol${index}`" :span-mobile="3">
          <div class="tsf__item">
            <TeaserBasic :title="list[index - 1].title" />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceFour.ts"></script>

<style lang="scss">
@import '~Sass/object/organisms/teaser-slice/four/_index.scss';
</style>
