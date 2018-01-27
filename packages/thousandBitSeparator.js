/**
 * 数千位分隔符
 */

export default (num) => {
  return num && (num.toString().indexOf('.') !== -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
    return $1 + ','
  }) : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, ($0, $1) => {
    return $1 + ','
  }))
}