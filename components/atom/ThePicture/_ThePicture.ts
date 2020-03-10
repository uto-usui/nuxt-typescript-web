import '~/assets/sass/object/atom/the-picture/_index.scss'

import {
  computed,
  defineComponent,
  PropType,
  createElement,
} from '@vue/composition-api'

import { srcSetPoints } from '~/assets/js/info'

export const ThePictureProps = {
  src: {
    type: String,
    default: '',
  },

  srcSetItems: {
    type: Array as PropType<string[]>,
    default: [],
  },

  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },

  alt: {
    type: String,
    default: '',
  },

  tag: {
    type: String,
    default: '',
  },
}

export default defineComponent({
  name: 'ThePicture',

  props: ThePictureProps,

  setup(props, _ctx) {
    const getSrcSet = computed(() => {
      return props.srcSetItems.reduce((prev, current, i) => {
        if (i === 1) {
          return `${prev} ${srcSetPoints[i - 1]}, ${current} ${
            srcSetPoints[i]
          },`
        }
        return `${prev} ${current} ${srcSetPoints[i - 1]},`
      })
    })

    const getSize = computed(() => {
      return {
        paddingTop: `calc(100% * ${props.height} / ${props.width} / 2)`,
        paddingBottom: `calc(100% * ${props.height} / ${props.width} / 2)`,
      }
    })

    return {
      getSrcSet,
      getSize,
    }
  },

  render(h, _ctx) {
    const _this = this as any // TODO 😢 this の推論が効かなくて setup() で return したメンバーがいてない
    const children = [
      createElement('img', {
        attrs: {
          src:
            _this.$image.ready && _this.$image.lazy
              ? _this.src
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
          srcset:
            _this.$image.ready && _this.$image.lazy
              ? _this.getSrcSet
              : undefined,
          dataSrcset: !_this.$image.lazy ? _this.getSrcSet : undefined,
          alt: _this.alt,
          loading: _this.$image.lazy ? 'lazy' : undefined,
        },
        directives: [
          {
            name: !_this.$image.lazy ? 'lazy' : '',
            value: !_this.$image.lazy ? _this.src : '',
          },
        ],
        staticClass: 'tp__img',
      }),
    ]
    return h(
      _this.tag,
      {
        staticClass: 'the-picture',
        class: _this.classes,
        style: _this.getSize,
      },
    )
  },
})
