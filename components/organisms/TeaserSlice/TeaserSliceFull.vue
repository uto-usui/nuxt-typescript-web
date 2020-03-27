<template>
  <div class="teaser-slice-full">
    <Layout full>
      <Row>
        <Col :spanMobile="12">
          <div class="tsf__item">
            <TeaserInline full />
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./TeaserSliceFull.ts"></script>

<style lang="scss" scoped>
@import '~Sass/object/organisms/teaser-slice/full/_index.scss';
</style>
