(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9a5db6"],{"7fbf":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"video_list",staticClass:"card-body item-list index-playlist "},t._l(16,(function(i){return e("q-card",{key:i,staticClass:"zm-carousel-item is-fullhd-4 is-widescreen-4 is-desktop-4 is-touch-4 is-tablet-6",class:[t.video_class_name],attrs:{flat:""}},[e("q-skeleton",{attrs:{height:"150px",square:""}}),e("q-card-section",[e("q-skeleton",{attrs:{height:"20px"}})],1)],1)})),1)},a=[],o=(e("fb6a"),{name:"video_skeleton_list",props:{video_list:void 0,set_top:void 0,show_node:void 0,show_all_video:void 0,clientWidth:void 0,SET_ROW_COUNT:void 0},data:function(){return{video_class_name:"",ROW_COUNT:this.is_mobile()?2:3,show_video_list:void 0}},created:function(){var t=this;void 0==this.show_all_video&&(this.show_all_video=!1),this.ROW_COUNT=this.SET_ROW_COUNT,setTimeout((function(){t.$nextTick((function(){t.update_row_count(),t.update_video_list(),t.video_class_name=t.video_col_class_name()}))}),50),window.addEventListener("resize",(function(){t.update_row_count()}))},watch:{ROW_COUNT:function(){console.log("watch ROW_COUNT change"),this.update_video_list(),this.$forceUpdate(),this.video_class_name=this.video_col_class_name()}},methods:{video_col_class_name:function(){var t="col-"+parseInt(12/this.ROW_COUNT);return console.log("video_col_class_name:",t),t},set_default_row_count:function(){this.is_mobile()?this.ROW_COUNT=2:this.ROW_COUNT=4},update_row_count:function(){var t=this.clientWidth;if(console.log("this.$refs['video_list']:",this.$refs["video_list"]),!this.$refs["video_list"])return setTimeout(this.update_row_count,50),this.set_default_row_count(),this.ROW_COUNT;if(this.$refs["video_list"]&&(t=this.$refs["video_list"].clientWidth),this.SET_ROW_COUNT)this.ROW_COUNT=this.SET_ROW_COUNT;else if(console.log("clientWidth:",t),t&&0!=t){var i=parseInt(t/288);return i=i<2?2:i,i=i>6?6:i,console.log("ROW_COUNT:",i),this.ROW_COUNT=i,this.ROW_COUNT}},update_video_list:function(){if(this.show_video_list=this.video_list,this.video_list&&!this.show_all_video){var t=this.video_list.length%this.ROW_COUNT;if(0!=t){var i=this.video_list.length-t;this.show_video_list=this.video_list.slice(0,i)}}}}}),n=o,d=e("2877"),_=e("fe09"),l=Object(d["a"])(n,s,a,!1,null,"c356544e",null);i["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QCard:_["g"],QSkeleton:_["B"],QCardSection:_["i"]})},d242:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"main-container  row container zma-section"},[e("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "WebSite", "name": "'+t._s(t.$web_conf.application_name)+'", "alternateName": "'+t._s(t.$web_conf.application_name)+'", "url": "https://'+t._s(t.$web_conf.current_host)+'", "description": "免费成人福利在线视频,在线看中国色情，日本色情，韩国色情,亚洲色情" } ')]),t.recommend_javs&&t.last_threads?e("div",{staticClass:"zm-carousel-wrapper"},[t._m(0),e("div",{staticClass:"video-title title"},[t._v("推荐")]),e("video_list",{attrs:{video_list:t.recommend_javs}}),e("div",{staticClass:"video-title title"},[t._v("最新")]),e("video_list",{attrs:{show_node:!0,video_list:t.last_threads}})],1):e("div",{staticClass:"zm-carousel-wrapper w-100"},[e("video_skeleton_list")],1)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"zm-carousel"},[e("div",{staticClass:"zm-carousel__container",staticStyle:{transform:"translate3d(0px, 0px, 0px)"}})])}],o=(e("fb6a"),e("077f")),n=e("ec8e"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.topic_datas?e("div",{ref:"book_list",staticClass:"card-body item-list  video-book index-playlist"},[t.video_book_list_width?t._l(t.topic_datas,(function(i){return e("video_book_item",{key:i.id,class:[t.class_name],attrs:{topic_data:i}})})):e("div",[e("page_loading")],1)],2):t._e()},_=[],l=e("80db"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"book_item",staticClass:"series-card card-item pc ListingGrid-ListingGridItem video__item",attrs:{title:t.video_title()}},[e("router-link",{attrs:{to:"/video/"+t.topic_data.id,target:"_blank"}},[e("div",{staticClass:"recommends_card pc"},[e("div",{staticClass:"hover-card-item"},[e("div",{staticClass:"top"},[e("div",{staticClass:"title text_ellipsis2"},[t._v(" "+t._s(t.video_title())+" ")]),e("div",{staticClass:"abstract text_ellipsis3"})]),e("div",{staticClass:"bottom-btns"},[e("div",{staticClass:"money-btn"},[t._v(t._s(t.formatNumber(t.topic_data.view_count))+" ")]),e("div",{staticClass:"free-read"},[t._v(" "+t._s(t.showDate(t.topic_data.release_time))+" ")])])]),e("v-lazy",{attrs:{options:{threshold:.25},transition:"fade-transition","min-height":100}},[e("v-responsive",{attrs:{"aspect-ratio":9/13}},[e("img",{attrs:{style1:{width:t.video_item_width+"px",height:t.video_item_height+"px"},src:t.get_big_cover_image_url()}})])],1)],1)]),e("div",{staticClass:"price-info",attrs:{"data-v-4127558a":""}},[e("div",{staticClass:"name text_ellipsis",attrs:{"data-v-4127558a":""}},[e("router-link",{attrs:{to:"/video/"+t.topic_data.id,target:"_blank"}},[t._v(t._s(t.video_title()))])],1)])],1)},c=[],h={name:"video_book_item",mixins:[n["a"],l["a"]],props:{topic_data:{},width:void 0,height:void 0},data:function(){return{video_item_width:void 0,video_item_height:void 0}},mounted:function(){this.update_width()},methods:{update_width:function(){if(!this.$refs["book_item"])return setTimeout(this.update_width,50);this.video_item_width=this.$refs["book_item"].clientWidth,console.log("video_item_width:",this.video_item_width),this.video_item_height=1.32*this.video_item_width,this.video_item_height=parseInt(this.video_item_height),console.log("video_item_width:",this.video_item_width)}}},v=h,u=(e("e11f"),e("2877")),f=e("6544"),m=e.n(f),p=e("b687"),w=e("6b53"),b=Object(u["a"])(v,r,c,!1,null,"79c2b0b2",null),g=b.exports;m()(b,{VLazy:p["a"],VResponsive:w["a"]});var C={name:"video_book_list",mixins:[n["a"],l["a"]],components:{video_book_item:g},props:{topic_datas:void 0},data:function(){return{video_book_list_width:void 0,class_name:"col-3"}},created:function(){this.update_width(),window.addEventListener("resize",this.on_resize)},methods:{on_resize:function(){this.video_book_list_width=void 0,this.update_width()},update_width:function(){if(!this.$refs["book_list"])return setTimeout(this.update_width,111);this.video_book_list_width=this.$refs["book_list"].clientWidth,console.log("video_book_list_width:",this.video_book_list_width),this.update_list()},update_list:function(){var t=parseInt(this.video_book_list_width/233);t=t<2?2:t,t=t>4?4:t,this.class_name="col-"+parseInt(12/t),console.log("class_name:",this.class_name)}}},O=C,k=Object(u["a"])(O,d,_,!1,null,"ef2529ee",null),x=k.exports,$=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"yipai-container",attrs:{"data-v-f60e05f8":""}},[e("i",{staticClass:"yipai-logo",attrs:{"data-v-f60e05f8":""}}),e("ul",{staticClass:"yipai-list",attrs:{"data-v-f60e05f8":""}},t._l(t.topic_datas,(function(t){return e("video_slide_item",{key:t.id,attrs:{topic_data:t}})})),1),t._m(0)])},T=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{staticClass:"btn-more",attrs:{"data-v-f60e05f8":"",href:"/matrix/pods",target:"_blank"}},[e("span",{attrs:{"data-v-f60e05f8":""}},[t._v("查看全部")]),e("i",{staticClass:"iconfont iconfont-arrow-right",attrs:{"data-v-f60e05f8":""}})])}],y=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.topic_data?e("li",{staticClass:"yipai-item"},[e("router-link",{staticClass:"bullet",attrs:{to:"/video/"+t.topic_data.id,target:"_blank"}},[e("div",{staticClass:"bullet-info",attrs:{"data-v-f60e05f8":""}},[e("div",{staticClass:"bullet-title",attrs:{"data-v-f60e05f8":""}},[t._v(t._s(t.limit_video_title()))]),e("div",{staticClass:"bullet-bottom",attrs:{"data-v-f60e05f8":""}},[e("i",{staticClass:"icon icon-discuss",attrs:{"data-v-f60e05f8":""}}),t._v(" "),e("span",{staticClass:"bullet-vol",attrs:{"data-v-f60e05f8":""}},[t._v(t._s(t.showDate(t.topic_data.release_time)))])])]),e("img",{staticClass:"bullet-banner",attrs:{src:t.get_cover_image_url()}})])],1):t._e()},W=[],U={name:"video_side_item",mixins:[n["a"],l["a"]],props:{topic_data:{}},data:function(){return{preivew_url:void 0,online_video:void 0}},created:function(){this.online_video=this.topic_data.video_info.online_videos[0]},computed:{},methods:{limit_video_title:function(){var t=this.video_title();return t.length>25?t.slice(0,25)+"...":t}}},j=U,N=Object(u["a"])(j,y,W,!1,null,"23199b77",null),R=N.exports,E={name:"video_side_list",mixins:[n["a"],l["a"]],components:{video_slide_item:R},props:{topic_datas:void 0},created:function(){},methods:{}},z=E,S=Object(u["a"])(z,$,T,!1,null,"186ae658",null),I=S.exports,q=e("7fbf"),L={name:"index",mixins:[o["a"],n["a"]],components:{video_skeleton_list:q["a"],video_side_list:I,video_book_list:x},data:function(){return{video_class_name:"",show_what:void 0,show_node_dialog:!1,indextop_threads:void 0,recommend_javs:void 0,lorem:"1111",slide:"style"}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,console.log("create topics index"),this.init(),this.listener_init=this.$hub.on("event:init",(function(){console.log("call event:init"),t.init(),t.$forceUpdate()}))},computed:{indextop_thread_datas:function(){var t=this.get_indextop_threads();return console.log("indextop_threads:",t),t||[]}},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var i="/forum/"+t.fid;this.$router.push(i)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads(),this.recommend_javs=this.get_recommend_javs(),console.log("recommend_javs:",this.recommend_javs)},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}},get_recommend_javs:function(){try{if(this.$store.state.init.data.recommend_javs.datas.length>0){var t=this.$store.state.init.data.recommend_javs.datas;return t.length>8&&(t=t.slice(0,8)),t}}catch(i){}}}},Q=L,D=Object(u["a"])(Q,s,a,!1,null,"67a7fcb1",null);i["default"]=D.exports},e11f:function(t,i,e){"use strict";var s=e("fad2"),a=e.n(s);a.a},fad2:function(t,i,e){}}]);
//# sourceMappingURL=chunk-7a9a5db6.fe80f4fd.js.map