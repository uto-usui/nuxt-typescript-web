<template>
  <Wrapper class="page-home">
    <Layout :full="true">
      <Row :noGutterDesktop="false" :noGutterTouch="false">
        <Col :spanMobile="4">
          <div class="inner">
            1
          </div>
        </Col>
        <Col :spanMobile="4">
          <div class="inner">
            2
          </div>
        </Col>
        <Col :spanMobile="4">
          <div class="inner">
            3
          </div>
        </Col>
      </Row>
    </Layout>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import Wrapper from '~/components/Wrapper.vue'
import Heading1 from '~/components/Heading1.vue'

import Col from '~/components/core/Col.vue'
import Row from '~/components/core/Row.vue'
import Layout from '~/components/core/Layout.vue'

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

.ph__inner {
  padding-right: 10vw;
  padding-left: 10vw;
}

.ph__figure {
  + .ph__figure {
    margin-top: 10vw;
  }
}

.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: lightblue;
}
</style>
