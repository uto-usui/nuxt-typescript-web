/* eslint-disable no-undef */
import Vue from 'vue'

import { TheKickerProps } from '~/components/atom/TheKicker/TheKicker'
import { PublishDateProps } from '~/components/atom/PublishDate/PublishDate'
import { TheButtonProps } from '~/components/atom/TheButton/TheButton'
import { TheDecProps } from '~/components/atom/TheDec/TheDec'
import { TheHedProps } from '~/components/atom/TheHed/TheHed'
import { ThePictureProps } from '~/components/atom/ThePicture/ThePicture'

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
