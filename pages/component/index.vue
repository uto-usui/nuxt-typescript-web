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
        <Row :noGutterDesktop="true" :noGutterTouch="true">
          <Col :spanMobile="4" :offsetMobile="2">
            <div class="pc__inner">
              1
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              2
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

import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

// interface data {
// test: string
// }

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    Heading1,
    Col,
    Row,
    Layout,
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
  background-color: lightblue;
}
</style>
