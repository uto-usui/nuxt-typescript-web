<script lang="ts">
import Vue from 'vue'
import { NuxtConfigurationHead } from '@nuxt/types/config/head'

export type Data = {
  title?: string
  keywords?: string
  desc?: string
  ogImg?: string
  ogType?: string
  url?: string
}

interface Meta {
  vmid?: string
  charset?: string
  content?: string
  property?: string
  name?: string
  [key: string]: any
}

export type Head = {
  title: string
  meta: Meta[]
}

const meta = {
  title: 'your title',
  description: 'your desc',
  keywords: 'word',
  img: 'default/ogp.png',
  url: 'your-root-url',
  ogType: 'article',
}

export default Vue.extend({
  data: (): Data => ({
    title: '',
    keywords: '',
    desc: '',
    ogImg: '',
    ogType: '',
    url: '',
  }),

  /**
   * Meta information of each page
   * Insert from data
   */
  head(): NuxtConfigurationHead {
    return {
      title: this.title || meta.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords || meta.keywords,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.desc || meta.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title || meta.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.desc || meta.description,
        },
        { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.ogType || meta.ogType,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url || meta.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogImg || meta.img,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title || meta.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.desc || meta.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: meta.img,
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@voguejp' },
      ],
    }
  },
})
</script>
