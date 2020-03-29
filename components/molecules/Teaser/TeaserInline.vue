<template>
  <div class="teaser-inline">
    <Anchor :to="link" />
    <div class="ti__inner">
      <div class="ti__area">
        <Layout full>
          <Row :align="'center'">
            <Col :spanMobile="6">
              <div class="ti__img">
                <ThePicture
                  :src="require(`Images/test/02.jpg`)"
                  :width="1"
                  :height="1"
                />
              </div>
            </Col>
            <Col :spanMobile="5">
              <div class="ti__text-wrap">
                <TheTeaserText
                  :pub-date="pubDate"
                  :pub-date-formatted="pubDateFormatted"
                  :title="title"
                  :lead="
                    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis, dignissimos exercitationem magni nulla perspiciatis quis rerum voluptatem? Delectus deleniti dicta ducimus fugiat ipsum molestiae nulla porro similique! Dolores, illum?`
                  "
                  :full="full"
                />
              </div>
            </Col>
          </Row>
        </Layout>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TeaserInline.ts"></script>

<style lang="scss">
@import '~Sass/object/molecules/teaser/teaser-inline/_index.scss';
</style>
