import PublishDate from '@/components/atom/PublishDate/PublishDate'
import TheHed from '@/components/atom/TheHed/TheHed'
import TheKicker from '@/components/atom/TheKicker/TheKicker'
import TheDec from '@/components/atom/TheDec/TheDec'

export const TeaserTextProps = {
  half: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'これはタイトルです、これはタイトルです、これはタイトルです。',
  },
  lead: {
    type: String,
    default: '',
  },
  cat: {
    type: String,
    default: 'cat',
  },
  pubDate: {
    type: String,
    default: '2020-03-03T01:55:09.304Z',
  },
  pubDateFormatted: {
    type: String,
    default: '2000.12.12 TUE 18:00',
  },
}

export default {
  name: 'TeaserCommonText',
  components: { PublishDate, TheHed, TheDec, TheKicker },
  props: TeaserTextProps,
}
