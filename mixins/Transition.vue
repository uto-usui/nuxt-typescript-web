<script lang="ts">
import Vue from 'vue'

/**
 * page transition
 */
export default Vue.extend({
  transition: {
    css: false,
    enter(el, done) {
      done() // end
    },
    leave(el, done) {
      this.$dispatch('global/setIsMenuOpen', false)
      done() // end
    },
  },
})
</script>
