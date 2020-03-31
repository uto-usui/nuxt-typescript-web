<template>
  <div class="teaser-slice-trio">
    <Layout>
      <Row>
        <Col :span-mobile="12">
          <div class="tsh__title">
            <SliceHedLine />
          </div>
        </Col>
        <Col v-for="index in 3" :key="`tsfCol${index}`" :span-mobile="4">
          <div class="tsf__item">
            <TeaserCard :title="list[index - 1].title" />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceTrio.ts"></script>

<style lang="scss">
@import '~Sass/object/organisms/teaser-slice/trio/_index.scss';
</style>
