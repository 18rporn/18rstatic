(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af0d9"],{"0d4c":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"row col-padding-0"},[o("ads_banner_list"),o("div",{staticClass:"col-9 pr-4 mpr-0"},[o("div",{staticClass:"card"},[o("div",{staticClass:"event-card pa-4"},[o("h1",{staticClass:"b__title"},[o("strong",[o("v-icon",{staticClass:"mr-2",attrs:{color:"grey",small:!0}},[t._v("fas fa-cloud-download-alt")]),t._v(" 视频下载地址")],1),o("span")]),t.download_data?t._e():o("div",{staticClass:"mt-3"},[o("div",[o("q-spinner-facebook",{staticClass:"mt-4",attrs:{color:"theme-color",size:"4em"}})],1),t._v(" 正在获取下载地址，请稍候.... ")]),t.download_data?o("div",{staticClass:"mt-4"},[o("div",{staticClass:"mb-3"},t._l(t.download_data.download_urls,(function(a){return o("div",{key:a["tid"]},[o("a",{attrs:{href:a["url"],target:"_blank"}},[t._v("下载链接 "),t.topic_data?o("span",[t._v("-- "+t._s(t.topic_data.title)+".mp4")]):t._e()])])})),0),o("v-alert",{staticClass:"full-width",attrs:{type:"info"}},[o("p",[t._v(" 已获取下载链接,如果没有下载 ,请点击"),o("span",{},[t._v("下载链接")]),t._v("下载 ")])])],1):t._e()])])]),o("div",{staticClass:"sidebar col-3"},[o("ads_box_list",{staticClass:"mt-4"})],1)],1)},i=[],d={name:"theav",data:function(){return{download_data:void 0,topic_data:void 0}},created:function(){this.id=this.$route.params.id,console.log("this.id:",this.id),this.topic_data=this.get_topic_data_from_local(this.id),console.log("[theav]topic_data:",this.topic_data),this.update_topic_data(this.topic_data),this.load_download_data()},methods:{update_topic_data:function(t){t&&(this.topic_data=t,this.set_title(this.topic_data.title+"视频下载"))},load_download_data:function(){var t=this;this.$axios.get("/app/download/theav",{params:{id:this.id}}).then((function(a){var o=a.data;console.log("download_data:",o),t.download_data=o,t.update_topic_data(o.topic_data)})).catch((function(a){console.log("error:",a),t.loading=!1}))}}},n=d,c=o("2877"),l=o("fe09"),e=o("6544"),_=o.n(e),r=o("0798"),p=o("132d"),h=Object(c["a"])(n,s,i,!1,null,"5ff3c971",null);a["default"]=h.exports;h.options.components=Object.assign(Object.create(h.options.components||null),h.options.components||{},{QSpinnerFacebook:l["B"]}),_()(h,{VAlert:r["a"],VIcon:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0af0d9.163ab6d3.js.map