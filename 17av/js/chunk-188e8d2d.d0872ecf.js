(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-188e8d2d"],{"143a":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("video_index_tab",{staticClass:"none",attrs:{show_what:t.fid}}),o("div",{staticClass:"sub-navbar node-header node-header-with-node mt-3 mb-3 index-playlist"},[o("div",{},[o("div",{},[o("span",{staticClass:"title card-title"},[t._v(t._s(t.forum_conf.name))]),t.forum_topic_data?o("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个视频 ")]):t._e(),o("div",{staticClass:"pull-right"})]),o("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),o("div",{staticClass:"main-container container",attrs:{id:"main"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-9 pr-4 mpr-0 video_container"},[o("ads_banner_list"),t.forum_topic_data?o("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?o("div",{staticClass:"card-body item-list mb-4"},[o("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),o("q-separator"),o("div",{staticClass:"card-body item-list"},[o("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),o("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),t._l(t._g.PER_PAGE_COUNT,(function(a){return t.forum_topic_data&&t.forum_topic_data.datas?t._e():o("q-card-section",{key:a,staticClass:"p-0"},[o("q-skeleton",{attrs:{height:"50px"}}),o("q-separator")],1)}))],2),o("div",{staticClass:"sidebar col-3"},[o("ads_box_list",{staticClass:"mt-4"}),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body xxbtn"},[o("v-btn",{staticClass:"ma-2 full-width",attrs:{outlined:"",color:"indigo"},on:{click:function(a){return t.go("/release/thread?fid="+t.fid)}}},[t._v(" 发布视频 ")])],1)]),o("video_index_recommend",{staticClass:"mt-2",attrs:{recommend_datas:t.recommend_javs}}),o("item_tip")],1)])])],1)},i=[],e=(o("fb6a"),o("b0c0"),o("077f")),n=o("7676"),c=o.n(n),_=o("ec8e"),r=o("cc37"),d=o("22ff"),l={name:"c_video_list",mixins:[e["a"],_["a"]],components:{video_index_tab:r["a"],video_index_recommend:d["a"]},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},computed:{recommend_javs:function(){try{if(this.$store.state.init.data.recommend_javs.datas.length>0){var t=this.$store.state.init.data.recommend_javs.datas;return t.length>8&&(t=t.slice(0,8)),t}}catch(a){}}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),console.log("create video_list"),this.video_class_name=this.video_col_class_name(),console.log("video_class_name:",this.video_class_name),this.set_title(this.forum_conf.name)},on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:c()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data,console.log("on_load_top_topic:",t),console.log("forum_top_topic_data:",this.forum_top_topic_data)},on_load_topic:function(t){console.log("on_load_topic:",t),this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),console.log("this.$route.params.id:",this.$route.params.id),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_page()}}},p=l,u=(o("8352"),o("2877")),h=o("fe09"),m=o("6544"),v=o.n(m),f=o("8336"),g=o("891e"),b=Object(u["a"])(p,s,i,!1,null,"a46a0c10",null);a["default"]=b.exports;b.options.components=Object.assign(Object.create(b.options.components||null),b.options.components||{},{QSeparator:h["B"],QCardSection:h["j"],QSkeleton:h["C"]}),v()(b,{VBtn:f["a"],VPagination:g["a"]})},"22ff":function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"styled__RelateArticleWrap-dww443-0 gPCnhJ"},[o("div",{staticClass:"layout__Skeleton-zgzfsa-3 styled__AuthorItemWrap-sc-1edhsqn-2 kRnEIw content"},[t._m(0),o("ul",{staticClass:"article-list"},t._l(t.recommend_datas,(function(a){return o("li",{key:a.id,staticClass:"mb-2"},[o("router-link",{attrs:{to:"/video/"+a.id,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(a.title)+" ")])],1)})),0)])])},i=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"author-info cHkUnh"},[o("p",{staticClass:"nickname"},[o("a",{attrs:{href:"javascript:;",target:"_blank",rel:"noopener noreferrer"}},[o("span",{staticClass:"label"},[o("i"),o("i")]),t._v("强力推荐")])])])}],e={name:"recommend",props:{recommend_datas:void 0},methods:{}},n=e,c=(o("c200"),o("2877")),_=Object(c["a"])(n,s,i,!1,null,"6ec5a7b1",null);a["a"]=_.exports},8172:function(t,a,o){},8352:function(t,a,o){"use strict";var s=o("8172"),i=o.n(s);i.a},b304:function(t,a,o){},c200:function(t,a,o){"use strict";var s=o("b304"),i=o.n(s);i.a},cc37:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"sub-navbar node-header"},[o("div",{staticClass:"container"},[o("ul",{staticClass:"filter nav nav-pills"},[o("li",[o("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),o("span",{staticClass:"caret-right"})])]),o("li",{class:{active:"cn"==t.show_what}},[o("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),o("li",{class:{active:"jav_censored"==t.show_what}},[o("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),o("li",{class:{active:"jav_uncensored"==t.show_what}},[o("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),o("li",{class:{active:"vr"==t.show_what}},[o("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),o("li",{class:{active:"eu"==t.show_what}},[o("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},i=[],e={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()}}},n=e,c=o("2877"),_=Object(c["a"])(n,s,i,!1,null,"65d5ee70",null);a["a"]=_.exports}}]);
//# sourceMappingURL=chunk-188e8d2d.d0872ecf.js.map