/**
 * 解决在微信webview中无法修改Title的问题
 */

const setTitle = (title) => {
  const body = document.body
  document.title = title

  const $iframe = document.createElement('iframe')
  $iframe.style.display = 'none'
  $iframe.onload = () => {
    const timer = setTimeout(() => {
      $iframe.onload = null
      body.removeChild($iframe)
      clearTimeout(timer)
    }, 80)
  }
  body.appendChild($iframe)
}

export default setTitle
