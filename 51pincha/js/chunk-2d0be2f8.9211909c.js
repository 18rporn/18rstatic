(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be2f8"],{"2ed3":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row col-padding-0"},[s("div",{staticClass:"col-9 pr-4 mpr-0"},[s("ads_banner_list"),s("div",{staticClass:"card"},[s("div",{staticClass:"event-card pa-4"},[s("h1",{staticClass:"b__title"},[s("strong",[s("v-icon",{staticClass:"mr-2",attrs:{color:"grey",small:!0}},[t._v("fas fa-magnet")]),t._v(" 种子下载地址")],1),s("span")]),t.download_data?t._e():s("div",{staticClass:"mt-3"},[s("div",[s("q-spinner-facebook",{staticClass:"mt-4",attrs:{color:"theme-color",size:"4em"}})],1),t._v(" 正在获取下载地址，请稍候.... ")]),t.download_data?s("div",{staticClass:"mt-4"},[s("div",{staticClass:"mb-3"},t._l(t.download_data.download_urls,(function(a){return s("div",{key:a["tid"]},[s("a",{staticClass:"font-weight-bold",attrs:{href:a["url"],target:"_blank"}},[t._v("下载种子链接 "),t.topic_data?s("span",[t._v("-- "+t._s(t.topic_data.title)+".torrent")]):t._e()])])})),0),s("v-alert",{staticClass:"full-width",attrs:{type:"info"}},[s("p",[t._v(" 已获取下载链接,如果没有下载 ,请点击"),s("span",{},[t._v("下载链接")]),t._v("下载 ")])])],1):t._e()])])],1),s("div",{staticClass:"sidebar col-3"},[s("ads_box_list",{staticClass:"mt-4"})],1)])},i=[],d={name:"theav",data:function(){return{topic_data:void 0,download_data:void 0}},created:function(){this.id=this.$route.params.id,console.log("this.id:",this.id),this.topic_data=this.get_topic_data_from_local(this.id),this.load_download_data()},methods:{load_download_data:function(){var t=this;this.$axios.get("/app/download/torrent",{params:{id:this.id}}).then((function(a){var s=a.data;console.log("download_data:",s),t.download_data=s,t.loading=!1,t.set_title(t.topic_data.title+"-- 种子磁力下载")})).catch((function(a){console.log("error:",a),t.loading=!1}))}}},n=d,e=s("2877"),l=s("fe09"),c=s("6544"),r=s.n(c),_=s("0798"),p=s("132d"),v=Object(e["a"])(n,o,i,!1,null,"7c754b8e",null);a["default"]=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QSpinnerFacebook:l["A"]}),r()(v,{VAlert:_["a"],VIcon:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0be2f8.9211909c.js.map