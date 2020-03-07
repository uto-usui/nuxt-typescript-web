/* eslint-disable no-undef */
import Vue from 'vue'
import TheKicker from '~/components/atom/TheKicker'
import PublishDate from '~/components/atom/PublishDate/PublishDate'
import TheButton from 'index.ts'
import TheHed from '~/components/atom/TheHed/TheHed'
import Layout from '~/components/core/grid/Layout'
import Row from '~/components/core/grid/Row'
import Col from '~/components/core/grid/Col'

Vue.component('TheKicker', TheKicker)
Vue.component('PublishDate', PublishDate)
Vue.component('TheButton', TheButton)
Vue.component('TheHed', TheHed)
Vue.component('Col', Col)
Vue.component('Row', Row)
Vue.component('Layout', Layout)

Vue.component('Heading1', {})
Vue.component('LazyImage', {})
Vue.component('Wrapper', {})

System.config({
  paths: {
    '@/*': '*',
    '~/*': '*',
    'Sass/*': 'assets/sass/*',
    'Js/*': 'assets/js/*',
    'Images/*': 'assets/images/*',
  },
})
