(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["deviation"],{5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("7b0b"),s=a("50c4"),u=a("a691"),o=a("1d80"),c=a("8aa5"),l=a("14c3"),d=Math.max,v=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,x=b?"$":"$0";return[function(a,n){var r=o(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!b&&m||"string"===typeof n&&-1===n.indexOf(x)){var i=a(e,t,this,n);if(i.done)return i.value}var o=r(t),f=String(this),p="function"===typeof n;p||(n=String(n));var h=o.global;if(h){var M=o.unicode;o.lastIndex=0}var S=[];while(1){var E=l(o,f);if(null===E)break;if(S.push(E),!h)break;var O=String(E[0]);""===O&&(o.lastIndex=c(f,s(o.lastIndex),M))}for(var $="",w=0,y=0;y<S.length;y++){E=S[y];for(var A=String(E[0]),j=d(v(u(E.index),f.length),0),k=[],C=1;C<E.length;C++)k.push(g(E[C]));var F=E.groups;if(p){var P=[A].concat(k,j,f);void 0!==F&&P.push(F);var L=String(n.apply(void 0,P))}else L=_(A,f,j,k,F,n);j>=w&&($+=f.slice(w,j)+L,w=j+A.length)}return $+f.slice(w)}];function _(t,a,n,r,s,u){var o=n+t.length,c=r.length,l=h;return void 0!==s&&(s=i(s),l=p),e.call(u,l,(function(e,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(o);case"<":u=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>c){var d=f(l/10);return 0===d?e:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}u=r[l-1]}return void 0===u?"":u}))}}))},"7afa":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));a("b680"),a("ac1f"),a("5319");function n(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function r(t,e){var n=a("12a8");if(n.extend(String.prototype,{}),0===t)return t;var r=Math.floor(Math.log(Math.abs(t))/Math.LN10),i=t*Math.pow(10,-r);return i.toFixed(e)+(0===r?"":"×10<sup>{0}</sup>".format(r))}},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("44ad"),i=a("fc6a"),s=a("a640"),u=[].join,o=r!=Object,c=s("join",",");n({target:"Array",proto:!0,forced:o||!c},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},b781:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-textarea",{attrs:{name:"input",label:t.$t("message.data"),hint:t.$t("message.dataline")},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.calculateDeviation(t.input)}}},[t._v(t._s(t.$t("message.calculate")))]),a("v-row",{attrs:{wrap:""}},[a("v-flex",[a("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.$t(t.output))}}),a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{items:t.results,"sort-by":"","hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("tr",[a("td",[t._v(t._s(t.$t(e.item.name)))]),a("td",{staticClass:"text-xs-right",domProps:{innerHTML:t._s(e.item.value)}})])]}}])})],1)],1)],1)},r=[],i=(a("4160"),a("c975"),a("a15b"),a("d81d"),a("b680"),a("ac1f"),a("1276"),a("159b"),a("7afa")),s=a("a61c"),u=a("12a8");u.extend(String.prototype,{});var o={data:function(){return{output:"message.inputdata",results:[],input:""}},methods:{calculateDeviation:function(t){if(t){var e=t.split(/[\r\n\\s ,;]+/),a=1/0,n=1/0;if(e.length>1){e.forEach((function(t){var e=t.length,r=0;if("-"===t.substr(0,1)&&e--,t.indexOf(".")>=0&&(e--,r=e-t.indexOf("."),Math.abs(parseFloat(t))<1)){var i=Math.floor(Math.log(Math.abs(parseFloat(t)))/Math.LN10);e+=i}a=Math.min(a,e),n=Math.min(n,r)})),a-=1;var r=s.calculateDeviation(e.map(parseFloat)),u=[{name:"deviation.input",value:e.join(", ")},{name:"deviation.average",value:r.average.toFixed(n)},{name:"deviation.ad",value:r.average_deviation.toFixed(n)},{name:"deviation.rad",value:Object(i["b"])(1e3*r.relative_average_deviation,a)+"‰"},{name:"deviation.sd",value:Object(i["b"])(r.standard_deviation,a)},{name:"deviation.rsd",value:Object(i["b"])(1e3*r.relative_standard_deviation,a)+"‰"}];this.results=u,this.output=""}else this.results=[],this.output="message.multpledata"}else this.output="message.inputdata"}}},c=o,l=a("2877"),d=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports},c975:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").indexOf,i=a("a640"),s=a("ae40"),u=[].indexOf,o=!!u&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:o||!c||!l},{indexOf:function(t){return o?u.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),s=a("ae40"),u=i("map"),o=s("map");n({target:"Array",proto:!0,forced:!u||!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=deviation.bf9ec450.js.map