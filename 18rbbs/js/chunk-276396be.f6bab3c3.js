(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276396be"],{cc37:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sub-navbar node-header"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"filter nav nav-pills"},[a("li",[a("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),a("span",{staticClass:"caret-right"})])]),a("li",{class:{active:"cn"==t.show_what}},[a("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),a("li",{class:{active:"jav_censored"==t.show_what}},[a("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),a("li",{class:{active:"jav_uncensored"==t.show_what}},[a("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),a("li",{class:{active:"vr"==t.show_what}},[a("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),a("li",{class:{active:"eu"==t.show_what}},[a("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},i=[],o={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){this.show_node_dialog=!0,this.$forceUpdate()}}},n=o,r=a("2877"),c=Object(r["a"])(n,e,i,!1,null,"65d5ee70",null);s["a"]=c.exports},d242:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[a("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "WebSite", "name": "'+t._s(t.$web_conf.application_name)+'", "alternateName": "'+t._s(t.$web_conf.application_name)+'", "url": "https://'+t._s(t.$web_conf.current_host)+'", "description": "免费成人福利在线视频,在线看中国色情，日本色情，韩国色情,亚洲色情", } ')]),a("div",{staticClass:"col-9  mpr-0 mpl-0"},[a("ads_banner_list"),a("video_index_tab",{attrs:{show_what:t.show_what}}),a("div",{staticClass:"card border-none video-card"},[t.last_threads?a("v-row",[a("div",{staticClass:"card-header"},[t._v("最新")]),a("video_list",{attrs:{show_node:!0,video_list:t.last_threads}}),a("div",{staticClass:"card-footer hidden-mobile underline"},[a("router-link",{attrs:{to:"/topics/last"}},[t._v("查看更多最新...")])],1)],1):a("div",[a("q-skeleton",{attrs:{height:"150px",square:""}})],1)],1)],1),a("div",{staticClass:"sidebar col-3"},[a("tags"),a("ads_box_list",{staticClass:"mt-4"}),a("div",{staticClass:"card border-none"},[a("div",{staticClass:"card-body xxbtn"},[a("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color",icon:"fas fa-cloud-upload-alt","text-color":"theme-color",label:"上传视频"},on:{click:function(s){return t.go("/upload/video")}}})],1)]),a("item_tip")],1)])},i=[],o=a("077f"),n=a("ec8e"),r=a("cc37"),c={name:"index",mixins:[o["a"],n["a"]],components:{video_index_tab:r["a"]},data:function(){return{video_class_name:"",show_what:void 0,show_node_dialog:!1}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,this.init(),this.listener_init=this.$hub.on("event:init",(function(){t.init(),t.$forceUpdate()})),this.video_class_name=this.video_col_class_name()},methods:{on_click_show_node:function(){this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var s="/forum/"+t.fid;this.$router.push(s)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads()},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}}}},d=c,l=a("2877"),h=a("fe09"),_=a("6544"),u=a.n(_),v=a("0fd9"),p=Object(l["a"])(d,e,i,!1,null,"8f99ef80",null);s["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QSkeleton:h["B"],QBtn:h["f"]}),u()(p,{VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-276396be.f6bab3c3.js.map