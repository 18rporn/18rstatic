(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-420c9962"],{"01c2":function(t,e,i){},"272a":function(t,e,i){},2901:function(t,e,i){"use strict";var s=i("272a"),o=i.n(s);o.a},"5e85":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[t.topic_data?i("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "VideoObject", "name": "'+t._s(t.video_title())+'", "description": "-" } ')]):t._e(),i("div",{staticClass:"row m-100"},[t.topic_data?i("div",{staticClass:"col-9 video_container"},[i("h1",{staticClass:"video_title"},[t._v(t._s(t.video_title()))]),t.show_view_watch_limit?i("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.show_view_watch_limit?t._e():i("player_plyr",{attrs:{topic_data:t.topic_data}}),i("video_tab",{attrs:{topic_data:t.topic_data}})],1):i("div",{staticClass:"col-9 video_container"},[i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text"}})],1),i("q-skeleton",{attrs:{height:"150px",square:""}}),i("q-card-section",[i("q-skeleton",{staticClass:"text-caption",attrs:{type:"text"}})],1)],1)],1),i("div",{staticClass:"col-3"},[i("ads_box_list")],1)]),t._m(0),i("div",[t.reletad_list?i("releated_list",{staticClass:"pt-2",attrs:{reletad_list:t.reletad_list}}):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media-right none"},[i("span",[i("button",{staticClass:"zm-btn zm-tooltip-btn is-hover-circle button",attrs:{tabindex:"0"}},[i("i",{staticClass:"icon ic-like"})])]),i("button",{staticClass:"zm-btn zm-tooltip-btn is-hover-circle button",attrs:{tabindex:"0"}},[i("i",{staticClass:"icon ic-song"})]),i("div",{staticClass:"header-more-menu"},[i("button",{staticClass:"zm-btn zm-tooltip-btn is-hover-circle button",attrs:{tabindex:"0"}},[i("i",{staticClass:"icon ic-more"})])])])}],a=(i("fb6a"),i("417f")),n=i("077f"),r=i("ec8e"),l=i("d5dc"),c=i("227a"),_=i("c96ad"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show_releated_list?i("div",{staticClass:" border-0 video-card "},[i("div",{staticClass:"video-recommend"},[i("div",{staticClass:"video-footer"},[i("div",{staticClass:"container "},[i("h3",{staticClass:"title video-title"},[t._v("相关视频")]),i("video_list",{attrs:{video_list:t.show_releated_list}})],1)])])]):t._e()},h=[],v={mixins:[n["a"],r["a"]],name:"releated_list",props:{reletad_list:void 0},data:function(){return{video_class_name:"",show_releated_list:void 0,show_length:9}},created:function(){this.video_class_name=this.video_col_class_name(),console.log("reletad_list:",this.reletad_list),this.update_show()},methods:{on_show_more:function(){this.show_length+=9,this.update_show()},update_show:function(){this.reletad_list&&(this.reletad_list.datas.length>this.show_length?(this.show_releated_list=this.reletad_list.datas.slice(0,this.show_length),console.log("show_releated_list:",this.show_releated_list)):this.show_releated_list=this.reletad_list.datas)}},computed:{is_show_more:function(){return!!this.reletad_list&&this.show_length<this.reletad_list.datas.length}}},p=v,u=i("2877"),m=Object(u["a"])(p,d,h,!1,null,"3f5d3264",null),f=m.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",[t.topic_data&&t.topic_data.video_info?i("div",[t.is_ios()?i("div",{staticClass:"ios_player",attrs:{id:"ios_player"}},[i("video",{attrs:{id:"orginal_video_player",preload:"auto",width:"100%",height:"100%",controls:"",crossorigin:"","webkit-playsinline":"",playsinline:"",poster:t.get_cover_image_url(),autoplay:""}},[i("source",{attrs:{src:t.get_m3u8_url(),type:"application/x-mpegURL"}})])]):i("div",{directives:[{name:"show",rawName:"v-show",value:t.player,expression:"player"}]},[i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hls.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/plyr/plyr.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hammer.min.js"}}),i("div",{attrs:{id:"video-player-container"}},[i("video",{attrs:{id:"video-player",preload:"auto","webkit-playsinline":"true",playsinline:"true",controls:"",crossorigin:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show_video_percent,expression:"is_show_video_percent"}],ref:"video_percent"},[i("q-circular-progress",{staticClass:" video_percent",attrs:{"show-value":"","font-size":"12px",value:t.video_percent,size:"50px",thickness:.22,color:"red","track-color":"black"}},[t._v(" "+t._s(t.video_percent)+"% ")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_touch_play_progress_flag,expression:"show_touch_play_progress_flag"}],ref:"touch_play_progress",staticClass:"touch-play-progress",attrs:{id:"touch-play-progress"}},[i("span",{staticClass:"touch-play-time"},[t._v(t._s(t.touch_play_time))]),t._v("/"),i("span",{staticClass:"current-play-time"},[t._v(t._s(t.touch_current_play_time))])])])],1)]):t._e(),t.player||t.is_ios()?t._e():i("div",[i("q-skeleton",{attrs:{height:"320px",square:""}})],1)]):t._e()},w=[];i("c975"),i("b680"),i("d3b7");i.e("chunk-7722135a").then(i.t.bind(null,"ccd3",7)),i.e("chunk-74917cdf").then(i.t.bind(null,"637d",7));var y={name:"video_watch",components:{},props:{topic_data:void 0,show_title:void 0,embed:void 0},data:function(){return{show:!0,player:void 0,video_ele:void 0,video_percent:void 0,video_status:void 0,online_video:void 0,select_server_name:void 0,show_touch_play_progress_flag:!1,touch_play_time:"",touch_current_play_time:""}},created:function(){this.select_server_name=localStorage.getItem("select_server_name"),this.select_server_name||(this.select_server_name="cdn_xxxhostcf"),console.log("watch_video create"),this.init()},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_show_video_percent:function(){return!(isNaN(this.video_percent)||!this.video_status)&&("playing"!=this.video_status&&"pause"!=this.video_status&&"canplay"!=this.video_status)}},watch:{select_server_name:function(t){console.log("select_server_name change:",t),this.on_switch_server(t)}},methods:{init:function(){this.online_video=this.topic_data.video_info.online_videos[0],this.$nextTick(this.init_video_player),window._t=this},init_video_player:function(){var t=this;if(this.is_ios())this.player=document.querySelector("#orginal_video_player"),this.player.addEventListener("loadeddata",(function(){console.log("on loadeddata")}),!1);else{if(!window.Plyr||!window.Hls)return setTimeout(this.init_video_player,100);(function(t,e){var i=new XMLHttpRequest,s=t.body;i.open("GET",e,!0),i.send(),i.onload=function(){var e=t.createElement("div");e.setAttribute("hidden",""),e.innerHTML=i.responseText,s.insertBefore(e,s.childNodes[0])}})(document,"/static/images/plyr.svg?123");var e="video-player";if(this.video_ele=document.querySelector("#video-player-container video"),!this.video_ele)return setTimeout(this.init_video_player,100);this.player=new window.Plyr("#"+e,{captions:{active:!0,update:!0,language:"en"}});var i=window.Hls,s=i.isSupported();if(s){var o=new i({});o.loadSource(this.get_m3u8_url()),o.attachMedia(this.video_ele),o.on(i.Events.MANIFEST_PARSED,(function(t){console.log("MANIFEST_PARSED e:",t)})),window.hls=o,o.on(i.Events.FRAG_LOAD_PROGRESS,(function(e,i){i.frag;var s=i.stats,o=parseInt(s.loaded/s.total*100);isNaN(o)||(t.video_percent=o)})),o.on(i.Events.FRAG_LOADING,(function(t,e){var i=e.frag;console.log("FRAG_LOADING evnet call:",t,i)})),o.on(i.Events.FRAG_LOADED,(function(t,e){var i=e.frag;console.log("FRAG_LOADED evnet call:",t,i)}));o.p2pEngine;this.video_ele.addEventListener("waiting",(function(e){t.video_status="waiting"}),!0),this.video_ele.addEventListener("seeking",(function(e){t.video_status="seeking",t.video_percent=0}),!0),this.video_ele.addEventListener("canplay",(function(e){t.video_status="canplay"}),!0),this.video_ele.addEventListener("playing",(function(e){t.video_status="playing",t.video_percent=0}),!0),this.video_ele.addEventListener("pause",(function(e){t.video_status="pause",t.video_percent=0}),!0)}var a=this.get_cover_image_url();console.log("cover_image_url:",a),this.player.poster=a,this.add_touch();var n=document.querySelector(".plyr");n.appendChild(this.$refs["touch_play_progress"]),n.appendChild(this.$refs["video_percent"])}},get_cover_image_url:function(){var t=this.generate_cover_url(this.online_video.space_name,this.online_video.hash_id);return console.log("cover_image_url:",t),t},get_m3u8_url:function(){var t="/video/"+this.topic_data.video_info.online_videos[0].hash_id+".m3u8?video_server="+this.select_server_name,e=window.location.host;return e.indexOf("localhost")>=0&&(t="https://"+this.$debug_host+t),t},on_switch_server:function(t){var e=this;this.select_server_name=t,localStorage.setItem("select_server_name",this.select_server_name),this.show=!1,this.$nextTick((function(){e.show=!0,e.init(),e.$nextTick((function(){var t=function(){e.player?e.player.play():setTimeout(e.auto_play,200)};t()})),e.$ga&&e.$ga.event({eventCategory:"on_switch_server",eventAction:"switch",eventLabel:e.select_server_name,eventValue:e.$store.state.hasLogin?"1":"2"})}))},add_touch:function(){var t=this;if(console.log("call add_touch"),!window.Hammer)return setTimeout(this.add_touch,500);function e(t,e){return(t/Math.pow(10,e)).toFixed(e).substr(2)}var i=function(t,i){t=t<0?0:t;var s=Math.floor(t%60),o=Math.floor(t/60%60),a=Math.floor(t/3600),n=Math.floor(i/60%60),r=Math.floor(i/3600);return(isNaN(t)||t===1/0)&&(a=o=s="-"),a=a>0||r>0?a:"0",o=(a||n>=10)&&o<10?"0"+o:o,s=s<10?"0"+s:s,e(a,2)+":"+e(o,2)+":"+e(s,2)},s=i;function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return s(t,e)}var a=function(e){var i=t.player.duration,s=t.player.currentTime,a=s+e/document.body.clientWidth*420;return a>i&&(a=i),a<0&&(a=0),console.log("[show_touch_play_progress]:",i),t.show_touch_play_progress_flag=!0,t.touch_current_play_time=o(i),t.touch_play_time=o(a),a},n=function(){t.show_touch_play_progress_flag=!1},r=function(){var e=void 0,i=new window.Hammer(document.getElementById("video-player-container"));i.on("pan",(function(t){console.log("pan event:",t),"panright"==t.additionalEvent&&t.deltaX>35&&(e=a(t.deltaX)),"panleft"==t.additionalEvent&&t.deltaX<-35&&(e=a(t.deltaX))})),i.on("panend",(function(i){n(),e&&(t.player.currentTime=e,t.player.play(),e=void 0)})),i.on("pancancel",(function(){n()}))};r()}}},b=y,x=(i("2901"),i("fe09")),C=Object(u["a"])(b,g,w,!1,null,"60ad4670",null),$=C.exports;C.options.components=Object.assign(Object.create(C.options.components||null),C.options.components||{},{QCircularProgress:x["k"],QSkeleton:x["B"]});var E=i("1bc8"),k=i("717a"),j={name:"video_view",mixins:[n["a"],r["a"]],components:{video_jav:k["a"],video_tab:E["a"],view_video:a["a"],comment_reply:l["a"],comment_list:c["a"],view_watch_limit:_["a"],releated_list:f,player_plyr:$},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,reletad_list:void 0,side_threads:void 0}},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return console.log("[show_view_watch_limit]:",t),!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)}},created:function(){this.load_video(),this.side_threads=this.get_side_threads()},methods:{load_video:function(){var t=this.$route.params.id,e=this.getUrlVars();e.edit&&console.log("处于编辑的帖子"),this.get_topic({id:t,from_cache:this.from_cache(),releted:!0,edit:e.edit,cb:this.on_load_topic_data})},on_load_topic_data:function(t,e,i){if(console.log("[on_load_topic_data]topic_data:",t," edit:",e),this.topic_data=t,this.set_title(this.video_title()),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var s=this.topic_data.video_info.online_videos[0];console.log("online_video:",s);var o=s.hash_id;this.$store.state.user_visit.push(o)}e&&(this.edit=e),i&&(this.reletad_list=i),console.log("reletad_list:",this.reletad_list)},get_side_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas.length>10?this.$store.state.init.data.last_threads.datas.slice(0,10):this.$store.state.init.data.last_threads.datas}catch(t){}}},watch:{$route:function(t,e){this.topic_data=void 0,this.$nextTick(this.load_video),console.log("watch $route change ")}}},T=j,L=(i("5f5d"),Object(u["a"])(T,s,o,!1,null,"9ecf2a8e",null));e["default"]=L.exports;L.options.components=Object.assign(Object.create(L.options.components||null),L.options.components||{},{QCard:x["g"],QCardSection:x["i"],QSkeleton:x["B"]})},"5f5d":function(t,e,i){"use strict";var s=i("01c2"),o=i.n(s);o.a}}]);
//# sourceMappingURL=chunk-420c9962.0ed21290.js.map