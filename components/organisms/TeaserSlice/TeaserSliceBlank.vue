<template>
  <div class="teaser-slice-blank">
    <Layout>
      <Row>
        <Col
          :spanMobile="3"
          :offsetMobile="index === 1 ? 3 : null"
          v-for="index in 3"
          :key="`tsfCol${index}`"
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
