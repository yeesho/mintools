!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e.cookie=e.cookie||{},e.cookie.js=o())}(this,function(){"use strict";return{getCookie:function(e){var o=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),t=document.cookie.match(o);return t?t[2]:""},setCookie:function(e,o,t,n){var i=new Date;i.setDate(i.getDate()+n);var c=null==n?"":";expires="+i.toGMTString();document.cookie=e+"="+escape(o)+c+";path=/;domain=."+t},delCookie:function(e,o){var t=new Date;t.setTime(t.getTime()-100),document.cookie=e+"= ;expires="+t.toGMTString()+";path=/;domain=."+o}}});
