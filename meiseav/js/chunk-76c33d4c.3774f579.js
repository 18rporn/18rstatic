(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c33d4c"],{"143a":function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("video_index_tab",{staticClass:"none",attrs:{show_what:t.fid}}),o("div",{staticClass:"sub-navbar node-header node-header-with-node mt-3 mb-3 index-playlist"},[o("div",{},[o("div",{},[o("span",{staticClass:"title card-title"},[t._v(t._s(t.forum_conf.name))]),t.forum_topic_data?o("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个视频 ")]):t._e(),o("div",{staticClass:"pull-right"})]),o("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),o("div",{staticClass:"main-container container",attrs:{id:"main"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-9 pr-4 mpr-0 video_container"},[o("ads_banner_list"),t.forum_topic_data?o("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?o("div",{staticClass:"card-body item-list mb-4"},[o("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),o("q-separator"),o("div",{staticClass:"card-body item-list"},[o("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),o("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),t.forum_topic_data&&t.forum_topic_data.datas?t._e():o("page_loading")],1),o("div",{staticClass:"sidebar col-3"},[o("ads_box_list",{staticClass:"mt-4"}),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body xxbtn"},[o("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color","text-color":"theme-color",label:"发布视频"},on:{click:function(a){return t.go("/release/thread?fid="+t.fid)}}})],1)]),o("item_tip")],1)])])],1)},s=[],e=(o("b0c0"),o("077f")),_=o("7676"),n=o.n(_),c=o("ec8e"),d=o("cc37"),l=(o("f7a8"),{name:"c_video_list",mixins:[e["a"],c["a"]],components:{video_index_tab:d["a"]},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),this.video_class_name=this.video_col_class_name(),console.log("video_class_name:",this.video_class_name),this.set_title(this.forum_conf.name)},on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:n()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data,console.log("on_load_top_topic:",t),console.log("forum_top_topic_data:",this.forum_top_topic_data)},on_load_topic:function(t){console.log("on_load_topic:",t),this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),console.log("this.$route.params.id:",this.$route.params.id),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_page()}}}),r=l,p=(o("35a8"),o("2877")),m=o("fe09"),u=o("6544"),h=o.n(u),f=o("891e"),g=Object(p["a"])(r,i,s,!1,null,"7a071b1c",null);a["default"]=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QSeparator:m["A"],QBtn:m["e"]}),h()(g,{VPagination:f["a"]})},"35a8":function(t,a,o){"use strict";var i=o("a98e"),s=o.n(i);s.a},a98e:function(t,a,o){}}]);
//# sourceMappingURL=chunk-76c33d4c.3774f579.js.map