(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f1ba22d"],{"0e66":function(t,i,o){},"143a":function(t,i,o){"use strict";o.r(i);var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"container"},[o("div",{staticClass:" node-header node-header-with-node index-playlist"},[o("div",{},[o("div",{staticClass:"flex ",staticStyle:{"align-items":"center"}},[o("span",{staticClass:"title mr-3"},[t._v(t._s(t.forum_conf.name))]),t.forum_topic_data?o("span",{staticClass:"total"},[t._v(" "+t._s(t.forum_topic_data.total_count)+" ")]):t._e(),o("div",{staticClass:"pull-right"})])])]),o("div",{staticClass:"main-container container"},[o("div",{staticClass:"row"},[o("div",{staticClass:" video_container w-100"},[t.forum_topic_data?o("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?o("div",{staticClass:"card-body item-list mb-4"},[o("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),o("div",{staticClass:"card-body item-list"},[o("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),o("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(i){t.page=i},expression:"page"}})],1):t._e(),t.forum_topic_data&&t.forum_topic_data.datas?t._e():o("video_skeleton_list",{staticClass:"w-100"})],1)])])])},e=[],a=(o("b0c0"),o("077f")),_=o("7676"),n=o.n(_),c=o("ec8e"),l=o("7fbf"),d={name:"c_video_list",mixins:[a["a"],c["a"]],components:{video_skeleton_list:l["a"]},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),console.log("create video_list"),this.video_class_name=this.video_col_class_name(),console.log("video_class_name:",this.video_class_name),this.set_title(this.forum_conf.name)},on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:n()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data,console.log("on_load_top_topic:",t),console.log("forum_top_topic_data:",this.forum_top_topic_data)},on_load_topic:function(t){console.log("on_load_topic:",t),this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),console.log("this.$route.params.id:",this.$route.params.id),this.fid=this.$route.params.id;var i=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:i,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),i=!this.$web_conf.debug;t.from_cache&&(i=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:i,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,i){this.forum_topic_data=void 0,this.load_page()}}},r=d,h=(o("3de4"),o("2877")),p=o("6544"),u=o.n(p),f=o("891e"),v=Object(h["a"])(r,s,e,!1,null,"7b91631e",null);i["default"]=v.exports;u()(v,{VPagination:f["a"]})},"3de4":function(t,i,o){"use strict";var s=o("0e66"),e=o.n(s);e.a},"7fbf":function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{ref:"video_list",staticClass:"card-body item-list index-playlist "},t._l(16,(function(i){return o("q-card",{key:i,staticClass:"zm-carousel-item is-fullhd-4 is-widescreen-4 is-desktop-4 is-touch-4 is-tablet-6",class:[t.video_class_name],attrs:{flat:""}},[o("q-skeleton",{attrs:{height:"150px",square:""}}),o("q-card-section",[o("q-skeleton",{attrs:{height:"20px"}})],1)],1)})),1)},e=[],a=(o("fb6a"),{name:"video_skeleton_list",props:{video_list:void 0,set_top:void 0,show_node:void 0,show_all_video:void 0,clientWidth:void 0,SET_ROW_COUNT:void 0},data:function(){return{video_class_name:"",ROW_COUNT:this.is_mobile()?2:3,show_video_list:void 0}},created:function(){var t=this;void 0==this.show_all_video&&(this.show_all_video=!1),this.ROW_COUNT=this.SET_ROW_COUNT,setTimeout((function(){t.$nextTick((function(){t.update_row_count(),t.update_video_list(),t.video_class_name=t.video_col_class_name()}))}),50),window.addEventListener("resize",(function(){t.update_row_count()}))},watch:{ROW_COUNT:function(){console.log("watch ROW_COUNT change"),this.update_video_list(),this.$forceUpdate(),this.video_class_name=this.video_col_class_name()}},methods:{video_col_class_name:function(){var t="col-"+parseInt(12/this.ROW_COUNT);return console.log("video_col_class_name:",t),t},set_default_row_count:function(){this.is_mobile()?this.ROW_COUNT=2:this.ROW_COUNT=4},update_row_count:function(){var t=this.clientWidth;if(console.log("this.$refs['video_list']:",this.$refs["video_list"]),!this.$refs["video_list"])return setTimeout(this.update_row_count,50),this.set_default_row_count(),this.ROW_COUNT;if(this.$refs["video_list"]&&(t=this.$refs["video_list"].clientWidth),this.SET_ROW_COUNT)this.ROW_COUNT=this.SET_ROW_COUNT;else if(console.log("clientWidth:",t),t&&0!=t){var i=parseInt(t/288);return i=i<2?2:i,i=i>6?6:i,console.log("ROW_COUNT:",i),this.ROW_COUNT=i,this.ROW_COUNT}},update_video_list:function(){if(this.show_video_list=this.video_list,this.video_list&&!this.show_all_video){var t=this.video_list.length%this.ROW_COUNT;if(0!=t){var i=this.video_list.length-t;this.show_video_list=this.video_list.slice(0,i)}}}}}),_=a,n=o("2877"),c=o("fe09"),l=Object(n["a"])(_,s,e,!1,null,"c356544e",null);i["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QCard:c["g"],QSkeleton:c["B"],QCardSection:c["i"]})}}]);
//# sourceMappingURL=chunk-6f1ba22d.2a843c46.js.map