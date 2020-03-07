<template>
  <Wrapper class="page-component">
    <div class="pc__layout">
      <Layout :full="true">
        <Row :noGutterDesktop="false" :noGutterTouch="false">
          <Col :spanMobile="4">
            <div class="pc__inner">
              1
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              2
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              3
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row :noGutterDesktop="false" :noGutterTouch="false">
          <Col :spanMobile="1" v-for="index in 12" :key="`col2${index}`">
            <div class="pc__inner">
              {{ index }}
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row :noGutterDesktop="true" :noGutterTouch="true">
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton color="primary" small>small</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton color="secondary">medium</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton large>large</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton outlined>outlined</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton rounded>rounded</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton large tile>tile</TheButton>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row :noGutterDesktop="true" :noGutterTouch="true">
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton circle>🐈</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton disabled>disabled</TheButton>
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TheButton full x-large color="primary">full</TheButton>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton x-large text>text</TheButton>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheHed small>title</TheHed>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheHed>title</TheHed>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheHed large>title</TheHed>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheKicker small>kicker<br />kicker</TheKicker>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheKicker :html="`kicker`">kicker</TheKicker>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheKicker :html="`kicker`" large>kicker</TheKicker>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`" small
                >2000.12.12 TUE 18:00</PublishDate
              >
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`"
                >2000.12.12 TUE 18:00</PublishDate
              >
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`" large
                >2000.12.12 TUE 18:00</PublishDate
              >
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import Wrapper from '~/components/Wrapper.vue'
import Heading1 from '~/components/Heading1.vue'

import Col from '@/components/core/grid/Col.vue'
import Row from '@/components/core/grid/Row.vue'
import Layout from '@/components/core/grid/Layout.vue'

import TheButton from '@/components/atom/TheButton/TheButton'
import TheHed from '@/components/atom/TheHed/TheHed'
import TheKicker from '@/components/atom/TheKicker/TheKicker'
import PublishDate from '@/components/atom/PublishDate/PublishDate'

import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    Heading1,
    Col,
    Row,
    Layout,
    TheButton,
    TheHed,
    TheKicker,
    PublishDate,
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
.page-home {
  //
}

.pc__layout {
  margin-top: 50px;
}

.pc__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #e2e4e5;
  //
  @media (prefers-color-scheme: dark) {
    color: #eee;
    background-color: #333;
  }
}
</style>
