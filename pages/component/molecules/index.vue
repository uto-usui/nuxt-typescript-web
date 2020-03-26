<template>
  <Wrapper>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>tag</TheHed>
            </div>
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
            <div class="pc__inner">
              <TheHed large>Slice Hed Line</TheHed>
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <SliceHedLine />
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <SliceHedLine
                :sub="`いまこそ気候崩壊の避けられない真実`"
                :to="``"
              />
            </div>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <SliceHedLine small />
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
              <TheHed large>Teaser Basic</TheHed>
            </div>
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
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheHed large>Teaser inline</TheHed>
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserInline />
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserInline />
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserInline />
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
              <TheHed large>Teaser card</TheHed>
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserCard />
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserCard />
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TeaserCard />
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
import TeaserInline from '~/components/molecules/Teaser/TeaserInline.vue'
import TeaserCard from '~/components/molecules/Teaser/TeaserCard'
import SliceHedLine from '@/components/molecules/SliceHedLine/SliceHedLine'

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    TagList,
    TeaserBasic,
    TeaserInline,
    TeaserCard,
    TheHed,
    SliceHedLine,
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
