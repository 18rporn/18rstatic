(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a9a7"],{bbe6:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pa-3"},[s("h1",{staticClass:"b__title"},[t._v(" 浏览历史 ")]),t.cha_datas?s("div",[s("div",{staticClass:"topics topics-node card"},[s("cha_list",{attrs:{cha_datas:t.cha_datas}})],1)]):s("div",{staticClass:"q-pa-lg flex flex-center"},[s("q-spinner-facebook",{attrs:{color:"theme-color",size:"4em"}})],1)])},i=[],e=s("d8fa"),n=s("92ae"),c={name:"history",components:{cha_list:n["a"]},mixins:[e["a"]],props:{userinfo:void 0},data:function(){return{cha_datas:void 0}},created:function(){this.set_title("浏览历史"),this.load_view_history({start:0,limit:30,cb:this.on_load_history,uid:this.userinfo.uid})},methods:{on_load_history:function(t){console.log("on_load_history:",t),this.cha_datas=t.data.datas}}},d=c,l=s("2877"),r=s("fe09"),h=Object(l["a"])(d,o,i,!1,null,"48043add",null);a["default"]=h.exports;h.options.components=Object.assign(Object.create(h.options.components||null),h.options.components||{},{QSpinnerFacebook:r["D"]})}}]);
//# sourceMappingURL=chunk-2d21a9a7.3e52a5a4.js.map