(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3faccc"],{"28f0":function(t,a,i){},"5e85":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[t.topic_data?i("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "VideoObject", "name": "'+t._s(t.video_title())+'", "description": "-" } ')]):t._e(),t.topic_data?i("div",{staticClass:"col-9 pr-4 mpr-0 "},[i("ads_banner_list"),i("div",{staticClass:"card topic-detail video-card border-0 "},[i("h1",{staticClass:"card-header video_title none"},[t._v(t._s(t.video_title()))]),i("div",{staticClass:"card-header media clearfix"},[i("div",{staticClass:"media-body"},[i("h1",{staticClass:"media-heading"},[t.forum_conf?i("router-link",{staticClass:"node",attrs:{to:"/videos/"+t.forum_conf.fid}},[t._v(" "+t._s(t.forum_conf.name)+" ")]):t._e(),i("span",{staticClass:"title"},[t._v(" "+t._s(t.video_title())+" ")])],1),i("div",{staticClass:"info"},[t.topic_data.user&&t.topic_data.user.uid?i("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.topic_data.user.uid}},[t._v(t._s(t.topic_data.user.username)+" ")]):t._e(),i("span",{staticClass:"hidden-mobile"}),t._v(" · 发布于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.release_time)))]),t.topic_data.updated_time&&t.topic_data.updated_time>t.topic_data.release_time?i("span",[t._v(" · 更新于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.updated_time)))])]):t._e(),t._v(" · "+t._s(t.topic_data.view_count)+" 观看 ")],1)]),!t.is_mobile()&&t.topic_data.user&&t.topic_data.user.uid?i("div",{staticClass:"avatar media-right none"},[i("router-link",{attrs:{title:"",to:"/user/"+t.topic_data.user.uid}},[i("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.topic_data.user)}})]),i("q-tooltip",[t._v(" "+t._s(t.topic_data.user.username)+" ")])],1):t._e()]),i("div",{staticClass:"card-body"},[t.show_view_watch_limit?i("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.show_view_watch_limit?t._e():i("view_video",{attrs:{topic_data:t.topic_data}})],1)]),i("div",{staticClass:"card",attrs:{id:"replies"}},[i("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data?i("div",{staticClass:"card",attrs:{id:"reply"}},[i("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e(),t.reletad_list?i("div",[i("releated_list",{attrs:{reletad_list:t.reletad_list}})],1):i("div",[i("guesslike",{attrs:{data_list:t.get_carousel_threads()}})],1),i("div")],1):i("div",{staticClass:"col-9 pr-4 mpr-0"},[i("q-card",{attrs:{flat:""}},[i("q-skeleton",{staticClass:"mb-2",attrs:{height:"50px",square:""}}),i("q-skeleton",{attrs:{height:"250px",square:""}}),i("q-card-section",[i("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text"}}),i("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text",width:"50%"}}),i("q-skeleton",{staticClass:"text-caption",attrs:{type:"text"}})],1)],1)],1),i("div",{staticClass:"sidebar col-3"},[i("tags"),i("ads_box_list",{staticClass:"mt-4"}),i("item_tip")],1)])},s=[],o=(i("d3b7"),i("3ca3"),i("ddb0"),i("417f")),d=i("077f"),c=i("ec8e"),r=i("d5dc"),_=i("227a"),n=i("c96ad"),l={name:"video_view",mixins:[d["a"],c["a"]],components:{view_video:o["a"],comment_reply:r["a"],comment_list:_["a"],view_watch_limit:n["a"],releated_list:function(){return i.e("chunk-2d0d3e73").then(i.bind(null,"5f6b"))},guesslike:function(){return i.e("chunk-2d21f146").then(i.bind(null,"d7fc"))}},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,reletad_list:void 0}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1},show_view_watch_limit:function(){return!1}},created:function(){this.load_video()},methods:{load_video:function(){var t=this.$route.params.id,a=this.getUrlVars();a.edit&&console.log("处于编辑的帖子"),this.get_topic({id:t,from_cache:this.from_cache(),releted:!0,edit:a.edit,cb:this.on_load_topic_data})},on_load_topic_data:function(t,a,i){if(console.log("[on_load_topic_data]topic_data:",t," edit:",a),this.topic_data=t,this.set_title(this.video_title()),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var e=this.topic_data.video_info.online_videos[0];console.log("online_video:",e);var s=e.hash_id;this.$store.state.user_visit.push(s)}a&&(this.edit=a),i&&(this.reletad_list=i)},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}}},watch:{$route:function(t,a){this.topic_data=void 0,this.$nextTick(this.load_video)}}},p=l,u=(i("c1ee"),i("2877")),h=i("fe09"),v=Object(u["a"])(p,e,s,!1,null,"653f8edf",null);a["default"]=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QTooltip:h["N"],QCard:h["j"],QSkeleton:h["D"],QCardSection:h["l"]})},c1ee:function(t,a,i){"use strict";var e=i("28f0"),s=i.n(e);s.a}}]);
//# sourceMappingURL=chunk-7b3faccc.bf2b72f9.js.map