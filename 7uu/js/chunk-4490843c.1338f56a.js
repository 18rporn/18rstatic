(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4490843c"],{"143a":function(t,o,a){"use strict";a.r(o);var i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("video_index_tab",{staticClass:"none",attrs:{show_what:t.fid}}),a("div",{staticClass:"sub-navbar node-header node-header-with-node mt-3 mb-3 index-playlist"},[a("div",{},[a("div",{},[a("span",{staticClass:"title card-title"},[t._v(t._s(t.forum_conf.name))]),t.forum_topic_data?a("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个视频 ")]):t._e(),a("div",{staticClass:"pull-right"})]),a("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),a("div",{staticClass:"main-container container",attrs:{id:"main"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 pr-4 mpr-0 video_container"},[a("ads_banner_list"),t.forum_topic_data?a("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?a("div",{staticClass:"card-body item-list mb-4"},[a("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),a("q-separator"),a("div",{staticClass:"card-body item-list"},[a("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),a("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(o){t.page=o},expression:"page"}})],1):t._e(),t._l(t._g.PER_PAGE_COUNT,(function(o){return t.forum_topic_data&&t.forum_topic_data.datas?t._e():a("q-card-section",{key:o,staticClass:"p-0"},[a("q-skeleton",{attrs:{height:"50px"}}),a("q-separator")],1)}))],2),a("div",{staticClass:"sidebar col-3"},[a("ads_box_list",{staticClass:"mt-4"}),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body xxbtn"},[a("v-btn",{staticClass:"ma-2 full-width",attrs:{outlined:"",color:"indigo"},on:{click:function(o){return t.go("/release/thread?fid="+t.fid)}}},[t._v(" 发布视频 ")])],1)]),a("item_tip")],1)])])],1)},s=[],e=(a("b0c0"),a("077f")),n=a("7676"),_=a.n(n),c=a("ec8e"),d=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"sub-navbar node-header"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"filter nav nav-pills"},[a("li",[a("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),a("span",{staticClass:"caret-right"})])]),a("li",{class:{active:"cn"==t.show_what}},[a("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),a("li",{class:{active:"jav_censored"==t.show_what}},[a("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),a("li",{class:{active:"jav_uncensored"==t.show_what}},[a("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),a("li",{class:{active:"vr"==t.show_what}},[a("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),a("li",{class:{active:"eu"==t.show_what}},[a("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},l=[],r={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()}}},p=r,h=a("2877"),u=Object(h["a"])(p,d,l,!1,null,"65d5ee70",null),v=u.exports,m={name:"c_video_list",mixins:[e["a"],c["a"]],components:{video_index_tab:v},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),console.log("create video_list"),this.video_class_name=this.video_col_class_name(),console.log("video_class_name:",this.video_class_name),this.set_title(this.forum_conf.name)},on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:_()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data,console.log("on_load_top_topic:",t),console.log("forum_top_topic_data:",this.forum_top_topic_data)},on_load_topic:function(t){console.log("on_load_topic:",t),this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),console.log("this.$route.params.id:",this.$route.params.id),this.fid=this.$route.params.id;var o=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:o,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),o=!this.$web_conf.debug;t.from_cache&&(o=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:o,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,o){this.forum_topic_data=void 0,this.load_page()}}},f=m,g=(a("5b89"),a("fe09")),b=a("6544"),w=a.n(b),C=a("8336"),k=a("891e"),x=Object(h["a"])(f,i,s,!1,null,"7396170e",null);o["default"]=x.exports;x.options.components=Object.assign(Object.create(x.options.components||null),x.options.components||{},{QSeparator:g["B"],QCardSection:g["j"],QSkeleton:g["C"]}),w()(x,{VBtn:C["a"],VPagination:k["a"]})},"5b89":function(t,o,a){"use strict";var i=a("6e72"),s=a.n(i);s.a},"6e72":function(t,o,a){}}]);
//# sourceMappingURL=chunk-4490843c.1338f56a.js.map