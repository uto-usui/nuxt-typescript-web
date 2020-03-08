// type
export interface ImageEnvType {
  lazy: boolean
  webP: boolean
}

/**
 * Are you webP ?
 */
function canUseWebP() {
  if (process.client) {
    const elem = document.createElement('canvas')

    if (elem && elem.getContext && elem.getContext('2d')) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
  } else {
    return true
  }
}

/**
 * Are you lazy ?
 */
function canUseNativeLazy() {
  if (process.client) {
    return HTMLImageElement && 'loading' in HTMLImageElement.prototype
  } else {
    return true
  }
}

function imageEnv() {
  return {
    lazy: canUseNativeLazy(),
    webP: canUseWebP(),
  }
}

export default (ctx, inject) => {
  ctx.$image = imageEnv()
  inject('image', imageEnv())
}
