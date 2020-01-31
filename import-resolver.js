/* eslint-disable no-undef */
import Vue from 'vue'

Vue.component('Heading1', {})
Vue.component('LazyImage', {})

System.config({
  paths: {
    '@/*': '*',
    '~/*': '*',
    'Sass/*': 'assets/sass/*',
    'Js/*': 'assets/js/*',
    'Images/*': 'assets/images/*',
  },
})
