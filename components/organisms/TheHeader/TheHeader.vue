<template>
  <div
    :class="[{ 'is-open': $getters['global/getIsMenuOpen'] }]"
    class="the-header"
  >
    <div class="th__inner">
      <div class="th__logo-wrap">
        <Layout>
          <Row>
            <Col :span-mobile="12">
              <div class="th__logo">
                Nuxt x TypeScript
              </div>
            </Col>
          </Row>
        </Layout>
      </div>
      <div class="th__trigger">
        <TheHeaderTrigger />
      </div>
    </div>
    <div v-show="$getters['global/getIsMenuOpen']" class="th__overlay">
      <TheHeaderOverlay />
    </div>
  </div>
</template>

<script lang="ts" src="./TheHeader.ts"></script>

<style lang="scss" scoped>
@import '~assets/sass/object/organisms/the-header/_index.scss';
</style>
