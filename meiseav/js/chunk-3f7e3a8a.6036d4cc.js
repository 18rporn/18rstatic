(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7e3a8a"],{"066c":function(t,e,i){},"5e85":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[t.topic_data?i("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "VideoObject", "name": "'+t._s(t.video_title())+'", "description": "-" } ')]):t._e(),t.topic_data?i("div",{staticClass:"col-9 pr-4 mpr-0 "},[i("ads_banner_list",{staticClass:" center-ads-banner-list"}),i("div",{staticClass:" pull-left video-name mt-2"},[i("h1",[t._v(t._s(t.video_title()))])]),t.topic_data&&t.show?i("div",{staticClass:"video-preview mt-2"},[t.show_view_watch_limit?i("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.show_view_watch_limit?t._e():i("player_plyr",{attrs:{topic_data:t.topic_data}})],1):t._e(),i("div",{staticClass:"profile-details"},[i("div",{staticClass:"row pa-2"},[i("div",{staticClass:"col-md-12"},[i("video_tab",{attrs:{topic_data:t.topic_data}})],1),t.is_jav_video?i("div",{staticClass:"col-md-12"},[i("video_jav",{attrs:{topic_data:t.topic_data,online_video:t.online_video}})],1):t._e()])]),i("div",{attrs:{id:"video_servers"}},[t.online_video?i("video_servers",{attrs:{topic_data:t.topic_data,online_video:t.online_video,select_server_name:t.select_server_name},on:{"update:select_server_name":function(e){t.select_server_name=e}}}):t._e()],1),i("div",{staticClass:"card",attrs:{id:"replies"}},[i("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data?i("div",{staticClass:"card",attrs:{id:"reply"}},[i("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e(),t.reletad_list?i("releated_list",{attrs:{reletad_list:t.reletad_list}}):t._e()],1):i("div",{staticClass:"col-9 pr-4 mpr-0"},[i("q-card",{staticClass:"none",attrs:{flat:""}},[i("q-skeleton",{staticClass:"mb-2",attrs:{height:"40px",square:""}}),i("q-skeleton",{staticClass:"mb-2",attrs:{height:"40px",square:""}}),i("q-skeleton",{staticClass:"mb-2",attrs:{height:"40px",square:""}}),i("q-skeleton",{attrs:{height:"360px",square:""}}),i("q-skeleton",{staticClass:"mb-2",attrs:{height:"100px",square:""}})],1),i("page_loading")],1),i("div",{staticClass:"sidebar col-3"},[i("tags"),i("ads_box_list"),t.side_threads?i("v-row",[i("video_list",{attrs:{SET_ROW_COUNT:1,show_node:!0,video_list:t.side_threads}})],1):t._e()],1)])},a=[],o=(i("fb6a"),i("417f")),n=i("077f"),r=i("ec8e"),_=i("d5dc"),l=i("227a"),c=i("c96ad"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show_releated_list?i("div",{staticClass:"card border-0 video-card "},[i("div",{staticClass:"card-title card-header media clearfix "},[t._v("相关视频")]),i("div",{staticClass:" item-list card-boy"},[i("video_list",{attrs:{video_list:t.show_releated_list}})],1),t.is_show_more?i("div",{staticClass:" mt-1 mb-3 card-body item-list index-playlist"},[i("a",{staticClass:" ",on:{click:t.on_show_more}},[t._v("查看更多")])]):t._e()]):t._e()},h=[],v={mixins:[n["a"],r["a"]],name:"releated_list",props:{reletad_list:void 0},data:function(){return{video_class_name:"",show_releated_list:void 0,show_length:9}},created:function(){this.video_class_name=this.video_col_class_name(),console.log("reletad_list:",this.reletad_list),this.update_show()},methods:{on_show_more:function(){this.show_length+=9,this.update_show()},update_show:function(){this.reletad_list&&(this.reletad_list.datas.length>this.show_length?(this.show_releated_list=this.reletad_list.datas.slice(0,this.show_length),console.log("show_releated_list:",this.show_releated_list)):this.show_releated_list=this.reletad_list.datas)}},computed:{is_show_more:function(){return!!this.reletad_list&&this.show_length<this.reletad_list.datas.length}}},p=v,u=i("2877"),m=Object(u["a"])(p,d,h,!1,null,"771b6429",null),f=m.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",[t.topic_data&&t.topic_data.video_info?i("div",[t.is_ios()?i("div",{staticClass:"ios_player",attrs:{id:"ios_player"}},[i("video",{attrs:{id:"orginal_video_player",preload:"auto",width:"100%",height:"100%",controls:"",crossorigin:"","webkit-playsinline":"",playsinline:"",poster:t.get_cover_image_url(),autoplay:""}},[i("source",{attrs:{src:t.get_m3u8_url(),type:"application/x-mpegURL"}})])]):i("div",{directives:[{name:"show",rawName:"v-show",value:t.player,expression:"player"}]},[i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hls.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/plyr/plyr.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hammer.min.js"}}),i("div",{attrs:{id:"video-player-container"}},[i("video",{attrs:{id:"video-player",preload:"auto","webkit-playsinline":"true",playsinline:"true",controls:"",crossorigin:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show_video_percent,expression:"is_show_video_percent"}],ref:"video_percent"},[i("q-circular-progress",{staticClass:" video_percent",attrs:{"show-value":"","font-size":"12px",value:t.video_percent,size:"50px",thickness:.22,color:"red","track-color":"black"}},[t._v(" "+t._s(t.video_percent)+"% ")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_touch_play_progress_flag,expression:"show_touch_play_progress_flag"}],ref:"touch_play_progress",staticClass:"touch-play-progress",attrs:{id:"touch-play-progress"}},[i("span",{staticClass:"touch-play-time"},[t._v(t._s(t.touch_play_time))]),t._v("/"),i("span",{staticClass:"current-play-time"},[t._v(t._s(t.touch_current_play_time))])])])],1)]):t._e(),t.player||t.is_ios()?t._e():i("div",[i("q-skeleton",{attrs:{height:"320px",square:""}})],1)]):t._e()},w=[];i("c975"),i("b680"),i("d3b7");i.e("chunk-7722135a").then(i.t.bind(null,"ccd3",7)),i.e("chunk-74917cdf").then(i.t.bind(null,"637d",7));var y={name:"plyr",components:{},props:{topic_data:void 0,show_title:void 0,embed:void 0},data:function(){return{show:!0,player:void 0,video_ele:void 0,video_percent:void 0,video_status:void 0,online_video:void 0,select_server_name:void 0,show_touch_play_progress_flag:!1,touch_play_time:"",touch_current_play_time:""}},created:function(){this.select_server_name=localStorage.getItem("select_server_name"),this.select_server_name||(this.select_server_name="cdn_xxxhostcf"),console.log("watch_video create"),this.init()},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_show_video_percent:function(){return!(isNaN(this.video_percent)||!this.video_status)&&("playing"!=this.video_status&&"pause"!=this.video_status&&"canplay"!=this.video_status)}},watch:{select_server_name:function(t){console.log("select_server_name change:",t),this.on_switch_server(t)}},methods:{init:function(){this.online_video=this.topic_data.video_info.online_videos[0],this.$nextTick(this.init_video_player),window._t=this},init_video_player:function(){var t=this;if(this.is_ios())this.player=document.querySelector("#orginal_video_player"),this.player.addEventListener("loadeddata",(function(){console.log("on loadeddata")}),!1);else{if(!window.Plyr||!window.Hls)return setTimeout(this.init_video_player,100);(function(t,e){var i=new XMLHttpRequest,s=t.body;i.open("GET",e,!0),i.send(),i.onload=function(){var e=t.createElement("div");e.setAttribute("hidden",""),e.innerHTML=i.responseText,s.insertBefore(e,s.childNodes[0])}})(document,"/static/images/plyr.svg?123");var e="video-player";if(this.video_ele=document.querySelector("#video-player-container video"),!this.video_ele)return setTimeout(this.init_video_player,100);this.player=new window.Plyr("#"+e,{captions:{active:!0,update:!0,language:"en"}});var i=window.Hls,s=i.isSupported();if(s){var a=new i({});a.loadSource(this.get_m3u8_url()),a.attachMedia(this.video_ele),a.on(i.Events.MANIFEST_PARSED,(function(t){console.log("MANIFEST_PARSED e:",t)})),window.hls=a,a.on(i.Events.FRAG_LOAD_PROGRESS,(function(e,i){i.frag;var s=i.stats,a=parseInt(s.loaded/s.total*100);isNaN(a)||(t.video_percent=a)})),a.on(i.Events.FRAG_LOADING,(function(t,e){var i=e.frag;console.log("FRAG_LOADING evnet call:",t,i)})),a.on(i.Events.FRAG_LOADED,(function(t,e){var i=e.frag;console.log("FRAG_LOADED evnet call:",t,i)}));a.p2pEngine;this.video_ele.addEventListener("waiting",(function(e){t.video_status="waiting"}),!0),this.video_ele.addEventListener("seeking",(function(e){t.video_status="seeking",t.video_percent=0}),!0),this.video_ele.addEventListener("canplay",(function(e){t.video_status="canplay"}),!0),this.video_ele.addEventListener("playing",(function(e){t.video_status="playing",t.video_percent=0}),!0),this.video_ele.addEventListener("pause",(function(e){t.video_status="pause",t.video_percent=0}),!0)}var o=this.get_cover_image_url();console.log("cover_image_url:",o),this.player.poster=o,this.add_touch();var n=document.querySelector(".plyr");n.appendChild(this.$refs["touch_play_progress"]),n.appendChild(this.$refs["video_percent"])}},get_cover_image_url:function(){var t=this.generate_cover_url(this.online_video.space_name,this.online_video.hash_id);return console.log("cover_image_url:",t),t},get_m3u8_url:function(){var t="/video/"+this.topic_data.video_info.online_videos[0].hash_id+".m3u8?video_server="+this.select_server_name,e=window.location.host;return e.indexOf("localhost")>=0&&(t="https://"+this.$debug_host+t),t},on_switch_server:function(t){var e=this;this.select_server_name=t,localStorage.setItem("select_server_name",this.select_server_name),this.show=!1,this.$nextTick((function(){e.show=!0,e.init(),e.$nextTick((function(){var t=function(){e.player?e.player.play():setTimeout(e.auto_play,200)};t()})),e.$ga&&e.$ga.event({eventCategory:"on_switch_server",eventAction:"switch",eventLabel:e.select_server_name,eventValue:e.$store.state.hasLogin?"1":"2"})}))},add_touch:function(){var t=this;if(console.log("call add_touch"),!window.Hammer)return setTimeout(this.add_touch,500);function e(t,e){return(t/Math.pow(10,e)).toFixed(e).substr(2)}var i=function(t,i){t=t<0?0:t;var s=Math.floor(t%60),a=Math.floor(t/60%60),o=Math.floor(t/3600),n=Math.floor(i/60%60),r=Math.floor(i/3600);return(isNaN(t)||t===1/0)&&(o=a=s="-"),o=o>0||r>0?o:"0",a=(o||n>=10)&&a<10?"0"+a:a,s=s<10?"0"+s:s,e(o,2)+":"+e(a,2)+":"+e(s,2)},s=i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return s(t,e)}var o=function(e){var i=t.player.duration,s=t.player.currentTime,o=s+e/document.body.clientWidth*420;return o>i&&(o=i),o<0&&(o=0),console.log("[show_touch_play_progress]:",i),t.show_touch_play_progress_flag=!0,t.touch_current_play_time=a(i),t.touch_play_time=a(o),o},n=function(){t.show_touch_play_progress_flag=!1},r=function(){var e=void 0,i=new window.Hammer(document.getElementById("video-player-container"));i.on("pan",(function(t){console.log("pan event:",t),"panright"==t.additionalEvent&&t.deltaX>35&&(e=o(t.deltaX)),"panleft"==t.additionalEvent&&t.deltaX<-35&&(e=o(t.deltaX))})),i.on("panend",(function(i){n(),e&&(t.player.currentTime=e,t.player.play(),e=void 0)})),i.on("pancancel",(function(){n()}))};r()}}},b=y,x=(i("dc72"),i("fe09")),C=Object(u["a"])(b,g,w,!1,null,"5532b76c",null),$=C.exports;C.options.components=Object.assign(Object.create(C.options.components||null),C.options.components||{},{QCircularProgress:x["k"],QSkeleton:x["B"]});var k=i("1bc8"),E=i("717a"),T=i("21d5"),j={name:"video_view",mixins:[n["a"],r["a"]],components:{video_servers:T["a"],video_jav:E["a"],video_tab:k["a"],view_video:o["a"],comment_reply:_["a"],comment_list:l["a"],view_watch_limit:c["a"],releated_list:f,player_plyr:$},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,reletad_list:void 0,side_threads:void 0,select_server_name:void 0,online_video:void 0,show:!0}},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return console.log("[show_view_watch_limit]:",t),!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)}},created:function(){this.load_video(),this.side_threads=this.get_side_threads(),this.select_server_name=localStorage.getItem("select_server_name"),this.select_server_name||(this.select_server_name="cdn_xxxhostcf")},methods:{init:function(){this.topic_data&&this.topic_data.video_info&&(this.online_video=this.topic_data.video_info.online_videos[0])},load_video:function(){var t=this.$route.params.id,e=this.getUrlVars();e.edit&&console.log("处于编辑的帖子"),this.get_topic({id:t,from_cache:this.from_cache(),releted:!0,edit:e.edit,cb:this.on_load_topic_data})},on_load_topic_data:function(t,e,i){if(console.log("[on_load_topic_data]topic_data:",t," edit:",e),this.topic_data=t,this.set_title(this.video_title()),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var s=this.topic_data.video_info.online_videos[0];console.log("online_video:",s);var a=s.hash_id;this.$store.state.user_visit.push(a)}e&&(this.edit=e),i&&(this.reletad_list=i),console.log("reletad_list:",this.reletad_list),this.init()},get_side_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas.length>10?this.$store.state.init.data.last_threads.datas.slice(0,10):this.$store.state.init.data.last_threads.datas}catch(t){}},on_switch_server:function(t){var e=this;this.select_server_name=t,localStorage.setItem("select_server_name",this.select_server_name),this.show=!1,this.$nextTick((function(){e.show=!0,e.init(),e.$nextTick((function(){var t=function(){e.player?e.player.play():setTimeout(e.auto_play,200)};t()})),e.$ga&&e.$ga.event({eventCategory:"on_switch_server",eventAction:"switch",eventLabel:e.select_server_name,eventValue:e.$store.state.hasLogin?"1":"2"})}))}},watch:{$route:function(t,e){this.topic_data=void 0,this.$nextTick(this.load_video),console.log("watch $route change ")},select_server_name:function(t){console.log("select_server_name change:",t),this.on_switch_server(t)}}},L=j,q=(i("cf62"),i("6544")),S=i.n(q),A=i("0fd9"),O=Object(u["a"])(L,s,a,!1,null,"4ca01ac6",null);e["default"]=O.exports;O.options.components=Object.assign(Object.create(O.options.components||null),O.options.components||{},{QCard:x["g"],QSkeleton:x["B"]}),S()(O,{VRow:A["a"]})},cf62:function(t,e,i){"use strict";var s=i("066c"),a=i.n(s);a.a},dc72:function(t,e,i){"use strict";var s=i("e12e"),a=i.n(s);a.a},e12e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3f7e3a8a.6036d4cc.js.map