import getStyle from './getStyle'

/**
 * @param {*rem} rem
 */
function rem2px (rem) {
  const oHtml = document.getElementsByTagName('html')[0]
  const baseRem = parseFloat(getStyle(oHtml, 'fontSize'))

  return rem / 75 * baseRem
}

export default rem2px
