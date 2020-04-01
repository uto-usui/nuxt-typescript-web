<template>
  <div class="the-header-overlay">
    <div class="tho__inner">
      <Layout>
        <Row>
          <Col :span-mobile="2">
            <NavList :list="[...list.slice(0, 5)]" large />
          </Col>
          <Col :span-mobile="2">
            <NavList :list="[...list.slice(5, 10)]" large />
          </Col>
          <Col :span-mobile="3">
            <NavList :list="[...list.slice(10, 11)]" large />
          </Col>
          <Col :span-mobile="5">
            <Layout>
              <Row>
                <Col :span-mobile="3">
                  <div class="tho__title">
                    <TheHeaderTitle>Special</TheHeaderTitle>
                  </div>
                  <NavList :list="listSub" />
                </Col>
                <Col :span-mobile="2">
                  <div class="tho__title">
                    <TheHeaderTitle>Other</TheHeaderTitle>
                  </div>
                  <NavList :list="listUtil" small />
                </Col>
                <Col :span-mobile="5">
                  <div class="tho__tag-outer">
                    <div class="tho__title">
                      <TheHeaderTitle>Tag</TheHeaderTitle>
                    </div>
                    <TagList />
                  </div>
                </Col>
              </Row>
            </Layout>
          </Col>
        </Row>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts" src="./TheHeaderOverlay.ts"></script>

<style lang="scss" scoped>
@import '~assets/sass/object/organisms/the-header/overlay/_index.scss';
</style>
