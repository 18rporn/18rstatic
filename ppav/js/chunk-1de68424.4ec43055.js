(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de68424"],{5269:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-dialog",{attrs:{id:"alert_windows"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("q-card",{staticClass:"up-dialog-auto alert_windows"},[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h5"},[t._v(t._s(t.ads_conf["text"]))]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",size:"sm",flat:"",round:"",dense:""}})],1),e("q-card-actions",{attrs:{align:"right"}},[e("a",{attrs:{href:t.ads_conf["url"],target:"_blank"}},[e("img",{staticStyle:{"max-width":"500px"},attrs:{src:t.ads_conf["image"]}})])])],1)],1)},o=[],i=(e("b64b"),{name:"alert_windows",data:function(){return{ads_conf:void 0,show:!1}},created:function(){if(!this.$store.state.user.userinfo.is_vip){var t=localStorage.getItem("alert_window:time"),s=(new Date).getTime()/1e3;t=parseInt(t);var e=!0;if(isNaN(t)||s-t<600&&(e=!1),e){var a=this.$ads_object["alert.dialog"];console.log("alert_dialog:",a),a&&(this.ads_conf=a[Object.keys(a)[0]],console.log("this.ads_conf:",this.ads_conf),this.show=!0,localStorage.setItem("alert_window:time",s))}}}}),n=i,r=e("2877"),c=e("fe09"),l=Object(r["a"])(n,a,o,!1,null,"b2f0ca6a",null);s["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QDialog:c["n"],QCard:c["h"],QCardSection:c["j"],QSpace:c["D"],QBtn:c["f"],QCardActions:c["i"]}),l.options.directives=Object.assign(Object.create(l.options.directives||null),l.options.directives||{},{ClosePopup:c["a"]})},cc37:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sub-navbar node-header"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"filter nav nav-pills"},[e("li",[e("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),e("span",{staticClass:"caret-right"})])]),e("li",{class:{active:"cn"==t.show_what}},[e("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),e("li",{class:{active:"jav_censored"==t.show_what}},[e("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),e("li",{class:{active:"jav_uncensored"==t.show_what}},[e("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),e("li",{class:{active:"vr"==t.show_what}},[e("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),e("li",{class:{active:"eu"==t.show_what}},[e("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},o=[],i={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()}}},n=i,r=e("2877"),c=Object(r["a"])(n,a,o,!1,null,"65d5ee70",null);s["a"]=c.exports},d242:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[e("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "WebSite", "name": "'+t._s(t.$web_conf.application_name)+'", "alternateName": "'+t._s(t.$web_conf.application_name)+'", "url": "https://'+t._s(t.$web_conf.current_host)+'", "description": "免费成人福利在线视频,在线看中国色情，日本色情，韩国色情,亚洲色情", } ')]),e("div",{staticClass:"col-9  mpr-0 mpl-0"},[e("ads_banner_list"),e("video_index_tab",{attrs:{show_what:t.show_what}}),e("div",{staticClass:"card border-none video-card"},[t.last_threads?e("v-row",[e("div",{staticClass:"card-header"},[t._v("最新")]),e("video_list",{attrs:{show_node:!0,video_list:t.last_threads}}),e("div",{staticClass:"card-footer hidden-mobile underline"},[e("router-link",{attrs:{to:"/topics/last"}},[t._v("查看更多最新...")])],1)],1):e("div",[e("q-skeleton",{attrs:{height:"150px",square:""}})],1)],1)],1),e("div",{staticClass:"sidebar col-3"},[e("tags"),e("ads_box_list",{staticClass:"mt-4"}),e("div",{staticClass:"card border-none"},[e("div",{staticClass:"card-body xxbtn"},[e("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color",icon:"fas fa-cloud-upload-alt","text-color":"theme-color",label:"上传视频"},on:{click:function(s){return t.go("/release/thread")}}})],1)]),e("item_tip")],1),e("alert_windows")],1)},o=[],i=e("077f"),n=e("ec8e"),r=e("cc37"),c=e("5269"),l={name:"index",mixins:[i["a"],n["a"]],components:{video_index_tab:r["a"],alert_windows:c["a"]},data:function(){return{video_class_name:"",show_what:void 0,show_node_dialog:!1}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,console.log("create topics index"),this.init(),this.listener_init=this.$hub.on("event:init",(function(){console.log("call event:init"),t.init(),t.$forceUpdate()})),this.video_class_name=this.video_col_class_name(),console.log("this.video_class_name:",this.video_class_name)},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var s="/forum/"+t.fid;this.$router.push(s)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads()},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}}}},d=l,_=e("2877"),h=e("fe09"),u=e("6544"),p=e.n(u),v=e("0fd9"),w=Object(_["a"])(d,a,o,!1,null,"46c1e77a",null);s["default"]=w.exports;w.options.components=Object.assign(Object.create(w.options.components||null),w.options.components||{},{QSkeleton:h["B"],QBtn:h["f"]}),p()(w,{VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-1de68424.4ec43055.js.map