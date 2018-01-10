/**
 * 小数保留
 * @param {*} num 需要操作的小数
 * @param {*} place 保留位数
 */
const toDecimal = (num, place = 0) => {
  const float = parseFloat(num)
  if (isNaN(float)) { return 0 }

  if (!place) {
    return Math.round(num * 100) / 100
  }

  const f = Math.round(num * Math.pow(10, place)) / Math.pow(10, place)
  let s = f.toString()
  let rs = s.indexOf('.')

  if (rs < 0) {
    rs = s.length
    s += '.'
  }   
  while (s.length <= rs + place) {
    s += '0'
  }   
  return s
}  

export default toDecimal
