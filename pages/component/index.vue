<template>
  <Wrapper>
    <div class="pc__layout">
      <Layout full>
        <Row :no-gutter-desktop="false" :no-gutter-touch="false">
          <Col :span-mobile="12">
            <TheHed large>full width</TheHed>
          </Col>
          <Col :span-mobile="4">
            <div class="pc__inner">
              <n-link to="/component/atoms/">atoms</n-link>
            </div>
          </Col>
          <Col :span-mobile="4">
            <div class="pc__inner">
              <n-link to="/component/molecules/">molecules</n-link>
            </div>
          </Col>
          <Col :span-mobile="4">
            <div class="pc__inner">
              <n-link to="/component/organisms/">organisms</n-link>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row :no-gutter-desktop="false" :no-gutter-touch="false">
          <Col :span-mobile="12">
            <TheHed large>max width</TheHed>
          </Col>
          <Col v-for="index in 12" :key="`col2${index}`" :span-mobile="1">
            <div class="pc__inner">
              {{ index }}
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'

import Col from '@/components/core/grid/Col.vue'
import Row from '@/components/core/grid/Row.vue'
import Layout from '@/components/core/grid/Layout.vue'

import ByLine from '@/components/atom/ByLine/ByLine'
import PublishDate from '@/components/atom/PublishDate/PublishDate'
import TheButton from '@/components/atom/TheButton/TheButton'
import TheCaption from '@/components/atom/TheCaption/TheCaption'
import TheDec from '@/components/atom/TheDec/TheDec'
import TheDivider from '@/components/atom/TheDivider/TheDivider'
import TheHed from '@/components/atom/TheHed/TheHed'
import TheKicker from '@/components/atom/TheKicker/TheKicker'
import TheParagraph from '@/components/atom/TheParagraph/TheParagraph'
import ThePicture from '@/components/atom/ThePicture/ThePicture'

import TagList from '@/components/molecules/TagList/TagList.vue'
import Heading1 from '~/components/Heading1.vue'
import Wrapper from '~/components/Wrapper.vue'

import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    Heading1,
    Col,
    Row,
    Layout,
    ByLine,
    PublishDate,
    TagList,
    TheButton,
    TheCaption,
    TheDec,
    TheDivider,
    TheHed,
    TheKicker,
    TheParagraph,
    ThePicture,
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
