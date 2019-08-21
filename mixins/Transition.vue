<script lang="ts">
import Vue from 'vue'

/**
 * page transition
 */
export default Vue.extend({
  transition: {
    css: false,
    enter(_el, done) {
      done() // end
    },
    leave(_el, done) {
      this.$dispatch('global/setIsMenuOpen', false)
      done() // end
    },
  },
})
</script>
