/* eslint-disable no-undef */
import Vue from 'vue'

Vue.component('Heading1', {})
Vue.component('LazyImage', {})
Vue.component('Wrapper', {})
Vue.component('Col', {})
Vue.component('Row', {})
Vue.component('Layout', {})

System.config({
  paths: {
    '@/*': '*',
    '~/*': '*',
    'Sass/*': 'assets/sass/*',
    'Js/*': 'assets/js/*',
    'Images/*': 'assets/images/*',
  },
})
