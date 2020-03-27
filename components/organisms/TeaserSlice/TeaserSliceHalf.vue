<template>
  <div class="teaser-slice-half">
    <Layout full>
      <Row>
        <Col :spanMobile="12">
          <div class="tsh__title">
            <SliceHedLine />
          </div>
        </Col>
        <Col :spanMobile="6">
          <TeaserBasic :link="list[0].link" :title="list[0].title" half />
        </Col>
        <Col :spanMobile="3" v-for="index in 2" :key="`tscCol${index}`">
          <div v-for="_index in 2" :key="`_tscCol${_index}`" class="tsh__item">
            <TeaserBasic :title="list[_index - 1 + index + index - 1].title" />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceHalf.ts"></script>

<style lang="scss">
@import '~Sass/object/organisms/teaser-slice/half/_index.scss';
</style>
