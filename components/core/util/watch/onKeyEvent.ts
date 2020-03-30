import { onBeforeUnmount, onMounted } from '@vue/composition-api'

export const listener = (keyCode, event, handler) => {
  if (event.keyCode === keyCode) {
    handler(event)
  }
}

export const onKeyEvent = (keyCode: number, handler) => {
  const func = event => listener(keyCode, event, handler)

  onMounted(() => {
    window.addEventListener('keydown', func)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', func)
  })
}

// onKeyEvent(27, () => {
//   console.log('on click outside')
// })
