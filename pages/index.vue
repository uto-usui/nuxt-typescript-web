<template>
  <Wrapper class="page-home">
    <Heading1 :text="`this is home`" />
    <div class="ph__inner">
      <figure v-for="item in 5" :key="`figure${item}`" class="ph__figure">
        <LazyImage :src="require(`Images/test/01.jpg`)" />
      </figure>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import Wrapper from '~/components/Wrapper.vue'
import LazyImage from '~/components/core/LazyImage/LazyImage.vue'
import Heading1 from '~/components/Heading1.vue'

import headMixin from '~/mixins/Head.vue'
import TransitionMixin from '~/mixins/Transition.vue'

// interface data {
// test: string
// }

export default mixins(headMixin, TransitionMixin).extend({
  components: {
    Wrapper,
    LazyImage,
    Heading1,
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
</style>
