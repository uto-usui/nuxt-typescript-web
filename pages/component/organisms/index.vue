<template>
  <Wrapper>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser Slice Half</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TeaserSliceHalf />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser Slice Four</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TeaserSliceFour />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser Slice Blank</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TeaserSliceBlank />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser Slice Trio</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TeaserSliceTrio />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser Slice Boxes</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TeaserSliceBoxes />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

import Wrapper from '~/components/Wrapper.vue'

import { Col, Layout, Row } from '~/components/core/grid'

import TheHed from '~/components/atom/TheHed/TheHed'

import TeaserSliceHalf from '~/components/organisms/TeaserSlice/TeaserSliceHalf.vue'
import TeaserSliceFour from '~/components/organisms/TeaserSlice/TeaserSliceFour.vue'
import TeaserSliceTrio from '~/components/organisms/TeaserSlice/TeaserSliceTrio'
import TeaserSliceBlank from '~/components/organisms/TeaserSlice/TeaserSliceBlank'
import TeaserSliceBoxes from '@/components/organisms/TeaserSlice/TeaserSliceBoxes'

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    TheHed,
    TeaserSliceHalf,
    TeaserSliceFour,
    TeaserSliceTrio,
    TeaserSliceBlank,
    TeaserSliceBoxes,
    Layout,
    Row,
    Col,
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$dispatch('global/setIsPageReady', true)
  },
  updated() {
    //
  },
  beforeDestroy() {
    this.$dispatch('global/setIsPageReady', false)
  },
})
</script>

<style lang="scss" scoped>
.pc__layout {
  margin-top: 50px;
}

.pc__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background-color: #e2e4e5;
  //
  @media (prefers-color-scheme: dark) {
    color: #eee;
    background-color: #333;
  }
}
</style>
