(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4a9a8ba"],{"143a":function(t,a,i){"use strict";i.r(a);var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("video_index_tab",{attrs:{show_what:t.fid}}),i("div",{staticClass:"sub-navbar node-header node-header-with-node hide-ios"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.forum_conf.name)+" "),t.forum_topic_data?i("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个视频 ")]):t._e(),i("div",{staticClass:"pull-right"})]),i("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),i("div",{staticClass:"main-container container",attrs:{id:"main"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-9 pr-4 mpr-0 video_container"},[i("ads_banner_list"),t.forum_topic_data?i("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?i("div",{staticClass:"card-body item-list mb-4"},[i("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),i("q-separator"),i("div",{staticClass:"card-body item-list"},[i("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),i("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),t._l(t._g.PER_PAGE_COUNT,(function(a){return t.forum_topic_data&&t.forum_topic_data.datas?t._e():i("q-card-section",{key:a,staticClass:"p-0"},[i("q-skeleton",{attrs:{height:"50px"}}),i("q-separator")],1)}))],2),i("div",{staticClass:"sidebar col-3"},[i("ads_box_list",{staticClass:"mt-4"}),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body xxbtn"},[i("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color","text-color":"theme-color",label:"发布视频"},on:{click:function(a){return t.go("/release/thread?fid="+t.fid)}}})],1)]),i("item_tip")],1)])])],1)},s=[],e=(i("b0c0"),i("077f")),n=i("7676"),c=i.n(n),_=i("ec8e"),r=i("cc37"),d={name:"c_video_list",mixins:[e["a"],_["a"]],components:{video_index_tab:r["a"]},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),this.video_class_name=this.video_col_class_name(),this.set_title(this.forum_conf.name)},on_page_change:function(){this.$router.push({query:c()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data},on_load_topic:function(t){this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_page()}}},l=d,p=(i("1ba5"),i("2877")),u=i("fe09"),h=i("6544"),v=i.n(h),f=i("891e"),m=Object(p["a"])(l,o,s,!1,null,"b9df135e",null);a["default"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QSeparator:u["A"],QCardSection:u["j"],QSkeleton:u["B"],QBtn:u["f"]}),v()(m,{VPagination:f["a"]})},"1ba5":function(t,a,i){"use strict";var o=i("c36e"),s=i.n(o);s.a},c36e:function(t,a,i){},cc37:function(t,a,i){"use strict";var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"sub-navbar node-header"},[i("div",{staticClass:"container"},[i("ul",{staticClass:"filter nav nav-pills"},[i("li",[i("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),i("span",{staticClass:"caret-right"})])]),i("li",{class:{active:"cn"==t.show_what}},[i("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),i("li",{class:{active:"jav_censored"==t.show_what}},[i("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),i("li",{class:{active:"jav_uncensored"==t.show_what}},[i("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),i("li",{class:{active:"vr"==t.show_what}},[i("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),i("li",{class:{active:"eu"==t.show_what}},[i("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},s=[],e={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){this.show_node_dialog=!0,this.$forceUpdate()}}},n=e,c=i("2877"),_=Object(c["a"])(n,o,s,!1,null,"65d5ee70",null);a["a"]=_.exports}}]);
//# sourceMappingURL=chunk-f4a9a8ba.344ac3fd.js.map