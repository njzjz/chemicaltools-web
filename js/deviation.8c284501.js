(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["deviation"],{"7afa":function(t,e,a){"use strict";function n(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function i(t,e){var n=a("12a8");if(n.extend(String.prototype,{}),0===t)return t;var i=Math.floor(Math.log(Math.abs(t))/Math.LN10),s=t*Math.pow(10,-i);return s.toFixed(e)+(0===i?"":"×10<sup>{0}</sup>".format(i))}a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},b781:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-textarea",{attrs:{name:"input",label:t.$t("message.data"),hint:t.$t("message.dataline")},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.calculateDeviation(t.input)}}},[t._v(t._s(t.$t("message.calculate")))]),a("v-row",{attrs:{wrap:""}},[a("v-flex",[a("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.$t(t.output))}}),a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{items:t.results,"sort-by":"","hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("tr",[a("td",[t._v(t._s(t.$t(e.item.name)))]),a("td",{staticClass:"text-xs-right",domProps:{innerHTML:t._s(e.item.value)}})])]}}])})],1)],1)],1)},i=[],s=a("7afa"),r=a("a61c"),u=a("12a8");u.extend(String.prototype,{});var o={data:function(){return{output:"message.inputdata",results:[],input:""}},methods:{calculateDeviation:function(t){if(t){var e=t.split(/[\r\n\\s ,;]+/),a=1/0,n=1/0;if(e.length>1){e.forEach((function(t){var e=t.length,i=0;if("-"===t.substr(0,1)&&e--,t.indexOf(".")>=0&&(e--,i=e-t.indexOf("."),Math.abs(parseFloat(t))<1)){var s=Math.floor(Math.log(Math.abs(parseFloat(t)))/Math.LN10);e+=s}a=Math.min(a,e),n=Math.min(n,i)})),a-=1;var i=r.calculateDeviation(e.map(parseFloat)),u=[{name:"deviation.input",value:e.join(", ")},{name:"deviation.average",value:i.average.toFixed(n)},{name:"deviation.ad",value:i.average_deviation.toFixed(n)},{name:"deviation.rad",value:Object(s["b"])(1e3*i.relative_average_deviation,a)+"‰"},{name:"deviation.sd",value:Object(s["b"])(i.standard_deviation,a)},{name:"deviation.rsd",value:Object(s["b"])(1e3*i.relative_standard_deviation,a)+"‰"}];this.results=u,this.output=""}else this.results=[],this.output="message.multpledata"}else this.output="message.inputdata"}}},l=o,d=a("2877"),c=Object(d["a"])(l,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=deviation.8c284501.js.map