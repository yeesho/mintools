function queryOne(e){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=search.match(r);return null!=n?decodeURIComponent(n[2]).replace(/(#\w+)$/,""):""}function querySome(e){for(var r={},n=0;e[n];)r[e[n]]=queryOne(e[n]),n++;return r}function queryAll(){for(var e=search.split("&"),r=0,n={};e[r];){var o=e[r].match(/(^|&)([^&=]+)=([^&]*)(&|$)/);null!=o&&(n[decodeURIComponent(o[2])]=decodeURIComponent(o[3])),r++}return n}var search=location.href.split("?")[1],queryUrl=function(e){return search?arguments.length?e instanceof Array?querySome.apply(void 0,arguments):1===arguments.length?queryOne.apply(void 0,arguments):null:queryAll():1===arguments.length?"":{}};export default queryUrl;
