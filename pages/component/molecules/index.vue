<template>
  <Wrapper>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <TheHed large>tag</TheHed>
          </Col>
          <Col :spanMobile="6">
            <div class="pc__inner">
              <TagList />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <TheHed large>Teaser Basic</TheHed>
          </Col>
          <Col :spanMobile="3">
            <div class="pc__inner">
              <TeaserBasic />
            </div>
          </Col>
          <Col :spanMobile="3">
            <div class="pc__inner">
              <TeaserBasic />
            </div>
          </Col>
          <Col :spanMobile="6">
            <div class="pc__inner">
              <TeaserBasic large />
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

import { Layout, Row, Col } from '~/components/core/grid'

import TheHed from '~/components/atom/TheHed/TheHed'

import TagList from '~/components/molecules/TagList/TagList.vue'
import TeaserBasic from '~/components/molecules/Teaser/TeaserBasic.vue'

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    TagList,
    TeaserBasic,
    TheHed,
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
