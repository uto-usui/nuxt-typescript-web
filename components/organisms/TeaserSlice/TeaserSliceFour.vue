<template>
  <div class="teaser-slice-four">
    <Layout :full="true">
      <Row>
        <Col :spanMobile="3" v-for="index in 4" :key="`tsfCol${index}`">
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
