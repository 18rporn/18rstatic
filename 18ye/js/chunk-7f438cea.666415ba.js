(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f438cea"],{1427:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-container container row col-padding-0 m-100",attrs:{id:"main"}},[a("div",{staticClass:"col-9 pr-4 mpr-0 "},[t.search_result?a("div",{staticClass:"card topics"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"font-24 font-weight-bold"},[t._v(t._s(t.keyword))]),t._v(" 搜索结果 "),a("span",{staticClass:"mt-5 total_count"},[t._v(t._s(t.search_result.total_count.value))])]),a("div",{staticClass:"card-body topics row"},[t.search_result.total_count.value>0?a("div",{staticClass:" topics-group"},[a("video_list",{attrs:{show_all_video:!0,video_list:t.search_result.datas}})],1):a("v-alert",{staticClass:"full-width",attrs:{type:"error",color:"red"}},[a("p",{staticClass:"mb-2"},[t._v(" 对不起，没有搜索到相关的视频 ")])])],1)]):a("div",{staticClass:"fcenter"},[a("q-spinner-facebook",{attrs:{color:"theme-color",size:"4em"}})],1)]),a("div",{staticClass:"sidebar col-3"},[a("ads_box_list",{staticClass:"mt-4"}),a("item_tip")],1)])},o=[],i={name:"search_index",data:function(){return{search_result:void 0,keyword:void 0}},created:function(){this.load_search()},methods:{load_search:function(){var t=this;this.keyword=this.$route.params.keyword,this.set_title(this.keyword+"搜索结果");var s={keyword:this.keyword,start:0,limit:50};this.$axios.post("/app/search",s).then((function(s){console.log("search 结果:",s),t.search_result=s.data,t.on_load(t.search_result)})).catch((function(t){}))},on_load:function(t){this.set_title(this.keyword+"搜索结果")}},watch:{$route:function(t,s){var a=this;this.search_result=void 0,this.$nextTick((function(){a.load_search(),a.$forceUpdate()}))}}},c=i,r=(a("c0ca"),a("2877")),n=a("fe09"),l=a("6544"),d=a.n(l),h=a("0798"),u=Object(r["a"])(c,e,o,!1,null,"a0effd5a",null);s["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QSpinnerFacebook:n["E"]}),d()(u,{VAlert:h["a"]})},6700:function(t,s,a){},c0ca:function(t,s,a){"use strict";var e=a("6700"),o=a.n(e);o.a}}]);
//# sourceMappingURL=chunk-7f438cea.666415ba.js.map