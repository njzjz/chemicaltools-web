(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["acid"],{"7afa":function(t,a,e){"use strict";function r(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function s(t,a){var r=e("12a8");if(r.extend(String.prototype,{}),0===t)return t;var s=Math.floor(Math.log(Math.abs(t))/Math.LN10),n=t*Math.pow(10,-s);return n.toFixed(a)+(0===s?"":"×10<sup>{0}</sup>".format(s))}e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return s}))},ef80:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{attrs:{wrap:""}},[e("v-text-field",{attrs:{label:t.AorB?"pKa":"pKb"},model:{value:t.pKa,callback:function(a){t.pKa=a},expression:"pKa"}}),e("v-select",{attrs:{items:t.$t("ablabel"),label:t.$t("message.ab")},model:{value:t.AorB,callback:function(a){t.AorB=a},expression:"AorB"}})],1),e("v-row",{attrs:{wrap:""}},[e("v-text-field",{attrs:{label:t.$t("message.c")},model:{value:t.c,callback:function(a){t.c=a},expression:"c"}}),e("v-btn",{attrs:{color:"success"},on:{click:function(a){return t.calacid(t.c,t.pKa,t.AorB)}}},[t._v(t._s(t.$t("message.calculate")))])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.output,expression:"!output"}],staticClass:"pt-3"},[t._v(t._s(t.$t("message.inputdata")))]),e("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.output)}})],1)},s=[],n=e("7afa"),o=e("a61c"),u=e("12a8");u.extend(String.prototype,{});var c={data:function(){return{output:"",results:[],pKa:"",c:"",AorB:!0}},methods:{calacid:function(t,a,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:14;if(a&&t){var s=a.split(/[\r\n\\s ,;]+/),u=o.calculateAcid(t,s.map(parseFloat),e,r),c="<b>{0}</b>, c={1}mol/L, ".format(e?"HA":"BOH",t),l=1;s.forEach((function(t){c+="pK<sub>{0}</sub>{1}={2}, ".format(e?"a":"b",s.length>1?"<sub>{0}</sub>".format(l++):"",t)})),c+="<br>{0}{1}.".format("pH=",u.pH.toFixed(2)),u.ion.forEach((function(t){c+="<br>c({0})={1}mol/L,".format(Object(n["a"])(t.name),Object(n["b"])(t.c,2))})),c=c.substring(0,c.length-1)+".",this.output=c}else this.output=""}}},l=c,i=e("2877"),p=Object(i["a"])(l,r,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=acid.ab2a01b4.js.map