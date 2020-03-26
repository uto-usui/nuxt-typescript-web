<template>
  <Wrapper>
    <div class="pc__layout">
      <Layout :full="true">
        <Row :noGutterDesktop="false" :noGutterTouch="false">
          <Col :spanMobile="12">
            <TheHed large>full width</TheHed>
          </Col>
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
          <Col :spanMobile="12">
            <TheHed large>max width</TheHed>
          </Col>
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
          <Col :spanMobile="12">
            <TheHed large>button</TheHed>
          </Col>
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
              <TheButton outlined color="primary">outlined</TheButton>
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
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheButton :to="`/`" x-large>text</TheButton>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="6">
            <TheHed large>title</TheHed>
          </Col>
          <Col :spanMobile="6">
            <TheHed large>kicker</TheHed>
          </Col>
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
          <Col :spanMobile="6">
            <TheHed large>publish date</TheHed>
          </Col>
          <Col :spanMobile="6">
            <TheHed large>dec</TheHed>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`" small
                >2000.12.12 TUE 18:00
              </PublishDate>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`"
                >2000.12.12 TUE 18:00
              </PublishDate>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <PublishDate :datetime="`2020-03-03T01:55:09.304Z`" large
                >2000.12.12 TUE 18:00
              </PublishDate>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheDec small
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur cumque debitis delectus ipsum iusto maxime nemo non
                officiis optio provident recusandae
              </TheDec>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheDec
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur cumque debitis delectus
              </TheDec>
            </div>
          </Col>
          <Col :spanMobile="2">
            <div class="pc__inner">
              <TheDec large
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur cumque debitis delectus
              </TheDec>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout :full="true">
        <Row>
          <Col :spanMobile="12">
            <TheHed large>divider</TheHed>
          </Col>
          <Col :spanMobile="12">
            <div class="pc__inner">
              <TheDivider />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <TheHed large>by line</TheHed>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <ByLine small>By YUTARO KOSHIMOTO</ByLine>
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <ByLine>By YUTARO KOSHIMOTO</ByLine>
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <ByLine large>By YUTARO KOSHIMOTO</ByLine>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <TheHed large>picture</TheHed>
          </Col>
          <Col :spanMobile="3">
            <div>
              <ThePicture
                :src="require(`Images/test/02.jpg`)"
                :alt="`abc`"
                :src-set-items="[
                  require(`Images/test/04.jpg`),
                  require(`Images/test/05.jpg`),
                  require(`Images/test/06.jpg`),
                  require(`Images/test/03.jpg`),
                ]"
                :width="16"
                :height="9"
              ></ThePicture>
            </div>
          </Col>
          <Col :spanMobile="3">
            <div>
              <ThePicture
                :src="require(`Images/test/02.jpg`)"
                :alt="`abc`"
                :src-set-items="[
                  require(`Images/test/03.jpg`),
                  require(`Images/test/04.jpg`),
                  require(`Images/test/05.jpg`),
                  require(`Images/test/06.jpg`),
                ]"
                :width="4"
                :height="3"
              ></ThePicture>
            </div>
          </Col>
          <Col :spanMobile="3">
            <div>
              <ThePicture
                :src="require(`Images/test/02.jpg`)"
                :alt="`abc`"
                :src-set-items="[
                  require(`Images/test/03.jpg`),
                  require(`Images/test/05.jpg`),
                  require(`Images/test/06.jpg`),
                  require(`Images/test/04.jpg`),
                ]"
                :width="1"
                :height="1"
              ></ThePicture>
            </div>
          </Col>
          <Col :spanMobile="3">
            <div>
              <ThePicture
                :src="require(`Images/test/02.jpg`)"
                :alt="`abc`"
                :src-set-items="[
                  require(`Images/test/04.jpg`),
                  require(`Images/test/06.jpg`),
                  require(`Images/test/03.jpg`),
                  require(`Images/test/05.jpg`),
                ]"
                :width="3"
                :height="4"
              ></ThePicture>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
    <div class="pc__layout">
      <Layout>
        <Row>
          <Col :spanMobile="12">
            <TheHed large>paragraph</TheHed>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TheParagraph small
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.</TheParagraph
              >
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TheParagraph
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.</TheParagraph
              >
            </div>
          </Col>
          <Col :spanMobile="4">
            <div class="pc__inner">
              <TheParagraph large
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.</TheParagraph
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
