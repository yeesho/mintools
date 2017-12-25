/**
 * cookie操作
 */

export default {
  getCookie (name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    if (arr) {
      return (arr[2])
    } else {
      return ''
    }
  },

  setCookie (name, value, domain, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    const expires = expiredays == null ? '' : `;expires=${exdate.toGMTString()}`
    document.cookie = `${name}=${escape(value)}${expires};path=/;domain=.${domain}`
  },

  delCookie (name, domain) {
    const exp = new Date()
    const cval = ' '

    exp.setTime(exp.getTime() - 100)
    document.cookie = `${name}=${cval};expires=${exp.toGMTString()};path=/;domain=.${domain}`
  }
}
