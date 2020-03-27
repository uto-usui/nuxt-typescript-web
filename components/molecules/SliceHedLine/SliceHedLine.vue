<template>
  <div class="slice-hed-line">
    <Layout full>
      <Row :align="'center'">
        <Col :spanMobile="sub ? 3 : 6">
          <div class="shl__title">
            <SliceHed :small="small">{{ title }}</SliceHed>
          </div>
        </Col>
        <Col :spanMobile="9" v-if="sub">
          <div class="shl__sub">
            <SliceHed small>{{ sub }}</SliceHed>
          </div>
        </Col>
        <Col :spanMobile="6" v-if="to">
          <div class="shl__button">
            <TheButton :to="to" color="primary" outlined rounded
              >View More</TheButton
            >
          </div>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script lang="ts" src="./SliceHedLine.ts"></script>

<style lang="scss">
@import '~assets/sass/object/molecules/slice-head-line/_index.scss';
</style>
