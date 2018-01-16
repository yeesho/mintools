/**
 * 
 * @param {*ele} obj
 * @param {*attribute} name
 *
 * getStyle(ele, 'display') ===> 'block'
 */

function getStyle (obj, name) {
  return (obj.currentStyle || window.getComputedStyle(obj, false))[name]
}

export default getStyle
