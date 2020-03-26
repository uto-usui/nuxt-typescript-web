<template>
  <div class="teaser-slice-boxes">
    <Layout :full="true">
      <Row>
        <Col :spanMobile="4" v-for="index in 3" :key="`tsfCol${index}`">
          <div class="tsb__item">
            <TeaserBox :title="list[index - 1].title" />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceBoxes.ts"></script>

<style lang="scss" scoped>
@import '~Sass/object/organisms/teaser-slice/boxes/_index.scss';
</style>
