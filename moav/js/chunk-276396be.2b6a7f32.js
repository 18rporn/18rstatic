(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276396be"],{cc37:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sub-navbar node-header"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"filter nav nav-pills"},[e("li",[e("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),e("span",{staticClass:"caret-right"})])]),e("li",{class:{active:"cn"==t.show_what}},[e("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),e("li",{class:{active:"jav_censored"==t.show_what}},[e("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),e("li",{class:{active:"jav_uncensored"==t.show_what}},[e("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),e("li",{class:{active:"vr"==t.show_what}},[e("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),e("li",{class:{active:"eu"==t.show_what}},[e("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},i=[],o={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()}}},n=o,r=e("2877"),d=Object(r["a"])(n,a,i,!1,null,"65d5ee70",null);s["a"]=d.exports},d242:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[e("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "WebSite", "name": "'+t._s(t.$web_conf.application_name)+'", "alternateName": "'+t._s(t.$web_conf.application_name)+'", "url": "https://'+t._s(t.$web_conf.current_host)+'", "description": "免费成人福利在线视频,在线看中国色情，日本色情，韩国色情,亚洲色情", } ')]),e("div",{staticClass:"col-9  mpr-0 mpl-0"},[e("ads_banner_list"),e("video_index_tab",{attrs:{show_what:t.show_what}}),e("div",{staticClass:"card border-none video-card"},[t.last_threads?e("v-row",[e("div",{staticClass:"card-header"},[t._v("最新")]),e("video_list",{attrs:{show_node:!0,video_list:t.last_threads}}),e("div",{staticClass:"card-footer hidden-mobile underline"},[e("router-link",{attrs:{to:"/topics/last"}},[t._v("查看更多最新...")])],1)],1):e("div",[e("q-skeleton",{attrs:{height:"150px",square:""}})],1)],1)],1),e("div",{staticClass:"sidebar col-3"},[e("tags"),e("ads_box_list",{staticClass:"mt-4"}),e("div",{staticClass:"card border-none"},[e("div",{staticClass:"card-body xxbtn"},[e("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color",icon:"fas fa-cloud-upload-alt","text-color":"theme-color",label:"上传视频"},on:{click:function(s){return t.go("/release/thread")}}})],1)]),e("item_tip")],1)])},i=[],o=e("077f"),n=e("ec8e"),r=e("cc37"),d={name:"index",mixins:[o["a"],n["a"]],components:{video_index_tab:r["a"]},data:function(){return{video_class_name:"",show_what:void 0,show_node_dialog:!1}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,console.log("create topics index"),this.init(),this.listener_init=this.$hub.on("event:init",(function(){console.log("call event:init"),t.init(),t.$forceUpdate()})),this.video_class_name=this.video_col_class_name(),console.log("this.video_class_name:",this.video_class_name)},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var s="/forum/"+t.fid;this.$router.push(s)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads()},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}}}},c=d,l=e("2877"),h=e("fe09"),_=e("6544"),u=e.n(_),v=e("0fd9"),p=Object(l["a"])(c,a,i,!1,null,"edaa2f7e",null);s["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QSkeleton:h["C"],QBtn:h["f"]}),u()(p,{VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-276396be.2b6a7f32.js.map