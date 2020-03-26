<template>
  <div class="teaser-slice-trio">
    <Layout :full="true">
      <Row>
        <Col :spanMobile="4" v-for="index in 3" :key="`tsfCol${index}`">
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
