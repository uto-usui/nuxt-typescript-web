<template>
  <div class="teaser-slice-boxes">
    <Layout full>
      <Row>
        <Col v-for="index in 3" :key="`tsfCol${index}`" :span-mobile="4">
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
