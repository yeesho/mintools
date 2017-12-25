/**
 * location.href search查询
 * eg:
 *   window.location.href = 'https://www.google.com/search?biw=1680&bih=953&ei=X6dAWoLmKoOc8QXA2YiACg&q=js'
 *   query() ---> {biw: "1680", bih: "953", ei: "X6dAWoLmKoOc8QXA2YiACg", q: "js"}
 *   query('biw') ---> "1680"
 *   query(['biw', 'bih']) ---> {biw: "1680", bih: "953"}
 */

const search = location.href.split('?')[1]

function queryOne (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = search.match(reg)

  return r != null ? decodeURIComponent(r[2]).replace(/(#\w+)$/, '') : ''
}

function querySome (searchs) {
  let result = {}
  let i = 0

  while (searchs[i]) {
    result[searchs[i]] = queryOne(searchs[i])
    i++
  }

  return result
}

function queryAll () {
  const arr = search.split('&')
  let i = 0
  let result = {}

  while (arr[i]) {
    let r = arr[i].match(/(^|&)([^&=]+)=([^&]*)(&|$)/)
    if (r != null) {
      result[decodeURIComponent(r[2])] = decodeURIComponent(r[3])
    }
    i++
  }
  return result
}

export default function (searchs) {
  if (!search) { 
     return arguments.length === 1 ? '' : {}
  }

  return (!arguments.length 
    ? queryAll()
    : searchs instanceof Array
      ? querySome(...arguments)
      : arguments.length === 1
        ? queryOne(...arguments)
        : null)
}
