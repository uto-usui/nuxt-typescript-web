import { watchEffect } from '@vue/composition-api'

export const listenOutsideRef = (handler, event, ref) => {
  if (!ref || ref.contains(event.target)) {
    console.log('no ref')
    return
  }
  handler(event)
}

export const onClickOutside = (
  refs: { [x: string]: any },
  refName: string,
  handler: () => void,
) => {
  watchEffect(onCleanup => {
    if (refs && refs[refName]) {
      const func = event => listenOutsideRef(handler, event, refs[refName])

      document.addEventListener('click', func)

      // not work 😢
      onCleanup(() => {
        console.log('destroy')
        document.removeEventListener('click', func)
      })
    }
  })
}

// import { onClickOutside } from '~/components/core/util/watch/onClickOutside'
// onClickOutside(ctx.refs, 'myRef', () => {
//   console.log('on click outside')
// })

// <div ref="myRef" />
