<template>
  <div class="teaser-slice-category">
    <Layout>
      <Row>
        <Col :spanMobile="6">
          <TeaserBasic />
        </Col>
        <Col :spanMobile="3">
          <div class="tsc__item">
            <TeaserBasic />
          </div>
          <div class="tsc__item">
            <TeaserBasic />
          </div>
        </Col>
        <Col :spanMobile="3">
          <div class="tsc__item">
            <TeaserBasic />
          </div>
          <div class="tsc__item">
            <TeaserBasic />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceCategory.ts"></script>

<style lang="scss">
@import '~Sass/object/organisms/teaser-slice/category/_index.scss';
</style>
