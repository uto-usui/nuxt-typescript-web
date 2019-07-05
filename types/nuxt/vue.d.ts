// import Vue from 'vue'
import * as Vuex from 'vuex'

import { UA } from 'nuxt-user-agent/lib/types'

declare module 'vue/types/vue' {
  interface Vue {
    $exStore: Vuex.ExStore
    $state: Vuex.ExStore['state']
    $getters: Vuex.ExStore['getters']
    $commit: Vuex.ExStore['commit']
    $dispatch: Vuex.ExStore['dispatch']
    //
    $ua: UA
  }
}

declare module '@nuxt/vue-app/types/index' {
  interface Context {
    $ua: UA
  }
}
