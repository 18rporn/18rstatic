(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a10bbbf6"],{"040c":function(t,e,s){"use strict";var i=s("f42f"),o=s.n(i);o.a},"1bc8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded_tabinfo?s("v-row",{staticClass:"video_tab"},[s("div",{staticClass:"opts full-width"},[s("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_like},on:{click:t.on_video_like}},[s("v-icon",{staticClass:"mr-1",attrs:{small:!0},on:{click:t.on_video_like}},[t._v("far fa-thumbs-up")]),s("span",[t._v(t._s(t.tabinfo.is_like?"已赞":"赞"))])],1),s("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_dislike},on:{click:t.on_video_dislike}},[s("i",{staticClass:"far fa-thumbs-down"}),t._v(" "),s("span",[t._v(t._s(t.tabinfo.is_dislike?"已踩":"踩"))])]),s("a",{staticClass:"follow none",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-eye"}),t._v(" 关注")]),s("a",{staticClass:"bookmark",class:{active:t.tabinfo.is_star},attrs:{title:"收藏"},on:{click:t.on_video_star}},[s("i",{staticClass:"fa fa-bookmark"}),t._v(" "+t._s(t.tabinfo.is_star?"已收藏":"收藏")+" ")]),s("a",{staticClass:"bookmark",attrs:{title:"反馈"}},[s("i",{staticClass:"fas fa-flag"}),t._v(" "+t._s(t.$l("view.report"))+" ")]),s("video_download",{attrs:{topic_data:t.topic_data}}),t.$store.state.hasLogin&&t.$store.state.user.userinfo.uid==t.topic_data.user.uid||t.is_manager?s("span",{staticClass:"pull-right opts"},[t.is_manager?s("thread_manager",{attrs:{topic_data:t.topic_data}}):t._e(),s("router-link",{staticClass:"fa fa-edit",attrs:{title:"修改",to:"/release/thread?edit_id="+t.topic_data.id}},[s("q-tooltip",[t._v(" 修改 ")])],1),s("a",{staticClass:"fa fa-trash",attrs:{title:"删除",rel:"nofollow"}},[s("q-tooltip",[t._v(" 删除 ")])],1)],1):t._e()],1)]):t._e()},o=[],a=s("c286"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{on:{click:t.on_show_download}},[s("i",{staticClass:"fas fa-cloud-download-alt"}),t._v(" "+t._s(t.$l("view.download"))+" "),s("q-menu",[s("q-list",{staticStyle:{"min-width":"100px"}},[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",{on:{click:t.on_direct_download}},[s("i",{staticClass:"fas fa-cloud-download-alt"},[t._v(t._s(t.$l("view.direct_download"))+"(VIP)")])])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",{on:{click:t.on_torrent_download}},[s("i",{staticClass:"fas fa-magnet"},[t._v(t._s(t.$l("view.bt_download")))])])],1)],1)],1)],1)},c=[],r={name:"video_download",props:{topic_data:void 0},created:function(){},methods:{on_show_download:function(){},on_direct_download:function(){var t=this;return this.$store.state.hasLogin?this.$store.state.user.userinfo.is_vip?void this.$router.push("/download/video/"+this.topic_data.id):this.$q.dialog({title:this.$l("title_board_message"),message:this.$l("vip.download_tip"),cancel:this.$l("cancel"),ok:this.$l("vip.buy"),persistent:!0}).onOk((function(e){t.$router.push("/buy/vip")})):this.$app._userbar.show_login_dialog()},on_torrent_download:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.$router.push("/download/torrent/"+this.topic_data.id)}}},l=r,_=(s("525d"),s("2877")),d=s("fe09"),m=Object(_["a"])(l,n,c,!1,null,"0c49b19f",null),u=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QMenu:d["w"],QList:d["v"],QItem:d["r"],QItemSection:d["s"]}),m.options.directives=Object.assign(Object.create(m.options.directives||null),m.options.directives||{},{ClosePopup:d["a"]});var p={name:"video_tab",components:{thread_manager:a["a"],video_download:u},props:{online_video:void 0,topic_data:void 0},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}},data:function(){return{defalut_tabinfo:{is_like:!1,is_dislike:!1,is_star:!1,like_count:0},tabinfo:Object.assign({},this.defalut_tabinfo),loaded_tabinfo:!1}},created:function(){this.online_video||(this.online_video=this.topic_data.video_info.online_videos[0]),this.load_tabinfo()},methods:{load_tabinfo:function(){var t=this;this.$store.state.hasLogin?(console.log("call load_tabinfo"),this.$axios.get("/app/video/tabinfo",{params:{hash_id:this.online_video.hash_id}}).then((function(e){console.log("[load_tabinfo]:",e),t.tabinfo=Object.assign(t.tabinfo,e.data),console.log("this.tabinfo :",t.tabinfo),t.loaded_tabinfo=!0,t.$forceUpdate()})).catch((function(t){}))):this.loaded_tabinfo=!0},on_video_like:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_like,hash_id:this.online_video.hash_id};console.log("on_video_like:",e),this.$axios.post("/app/video/like",e).then((function(e){t.tabinfo.is_like=!0,t.tabinfo.is_dislike=!1,t.$forceUpdate()})).catch((function(t){console.log("error:",t)}))},on_video_dislike:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_dislike,hash_id:this.online_video.hash_id};this.$axios.post("/app/video/dislike",e).then((function(e){t.tabinfo.is_like=!0,t.tabinfo.is_dislike=!1})).catch((function(t){console.log("error:",t)}))},on_video_star:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_star,hash_id:this.online_video.hash_id};console.log("on_video_star:",e),this.$axios.post("/app/video/star",e).then((function(e){t.tabinfo.is_star=!0,t.$forceUpdate()})).catch((function(t){console.log("error:",t)}))}}},v=p,h=(s("1eca"),s("6544")),f=s.n(h),g=s("132d"),b=s("0fd9"),w=Object(_["a"])(v,i,o,!1,null,"3828f802",null);e["a"]=w.exports;w.options.components=Object.assign(Object.create(w.options.components||null),w.options.components||{},{QTooltip:d["K"]}),f()(w,{VIcon:g["a"],VRow:b["a"]})},"1eca":function(t,e,s){"use strict";var i=s("6dbc"),o=s.n(i);o.a},2024:function(t,e,s){"use strict";var i=s("e113"),o=s.n(i);o.a},"21d5":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-1 mt-2 font-weight-bold"},[t._v(" 线路:")]),s("v-row",t._l(t.this_video_servers,(function(e,i){return s("a",{key:e.name,staticClass:"ma-2 video-server-button",class:{active:t.select_server_name==i},on:{click:function(e){return t.on_select_sever(i)}}},[t._v(" "+t._s(e.name)+" ")])})),0)],1)},o=[],a={name:"video_servers",props:{online_video:void 0,topic_data:void 0,select_server_name:void 0},data:function(){return{this_video_servers:void 0}},created:function(){this.this_video_servers=Object.assign({},this.$xx_cdn_conf[this.online_video.space_name]),console.log("this_video_servers:",this.this_video_servers),this.select_server_name||(this.select_server_name=this.$config.defalut_video_server),"vip"==this.select_server_name&&(this.$store.state.hasLogin||(this.select_server_name=this.$config.defalut_video_server));var t="VIP线路";this.$store.state.user.userinfo&&this.$store.state.user.userinfo.is_vip||(t="VIP线路"),this.this_video_servers["vip"]={name:t,list:[""]}},watch:{select_server_name:function(t){this.$emit("update:select_server_name",t)}},methods:{on_select_sever:function(t){var e=this;if(console.log("on_select_sever:",t),"vip"==t){if(!this.$store.state.hasLogin)return this.$app.show_no_login_dialog();if(!this.$store.state.user.userinfo.is_vip)return this.$q.dialog({title:this.$l("title_board_message"),message:this.$l("vip.download_tip"),cancel:this.$l("cancel"),ok:this.$l("vip.buy"),persistent:!0}).onOk((function(t){e.$router.push("/buy/vip")}))}this.select_server_name!=t&&(this.select_server_name=t,this.$ga&&this.$ga.event({eventCategory:"switch-server",eventAction:"switch",eventLabel:t,eventValue:t}))}}},n=a,c=(s("2ce5"),s("2877")),r=s("fe09"),l=s("6544"),_=s.n(l),d=s("0fd9"),m=Object(c["a"])(n,i,o,!1,null,"ec716db6",null);e["a"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QColor:r["l"]}),_()(m,{VRow:d["a"]})},"227a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comment_data&&t.comment_data.comments&&0==t.comment_data.comments.length?s("div",{staticClass:"text-center p-3"},[t._v(" 暂无回复。 ")]):s("div",{staticClass:"items card-body"},[t.comment_data?s("div",t._l(t.comment_data.comments,(function(t,e){return s("comment_item",{key:t.id,attrs:{floor:e+1,comment_data:t}})})),1):t._e()])},o=[],a=(s("ac1f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")}),n=[],c=(s("b64b"),{name:"comment",data:function(){return{}},methods:{add_comment:function(t){t.comment_data,t.cb},load_comment_list:function(t){var e=t.id,s=t.start,i=t.limit,o=t.cb;this.$axios.get("/app/view/comment",{params:{vid:e,start:s,limit:i}}).then((function(t){var a=t.data;o&&o(a,e,s,i)})).catch((function(t){}))},get_comment_user:function(t){if(this._g.comment_users)return this._g.comment_users[t]},update_comment_users:function(t){this._g.comment_users||(this._g.comment_users={}),this._g.comment_users=Object.assign(this._g.comment_users,t)},update_comment_datas:function(t,e,s,i){this._g.comment_datas||(this._g.comment_datas={});var o=s+":"+t+":"+e;console.log("update_comment_datas key:",o,i),this._g.comment_datas[o]=i,console.log("this._g.comment_datas:",this._g.comment_datas)},get_comment_data:function(t){var e=Object.keys(this._g.comment_datas);console.log("[get_comment_data] keys:",e);for(var s=0;s<e.length;++s)for(var i=e[s],o=0;o<this._g.comment_datas[i].length;++o)if(this._g.comment_datas[i][o]["_id"]==t)return console.log("[get_comment_data]",t,this._g.comment_datas[i][o]),this._g.comment_datas[i][o]},update_comment_floor:function(t,e){this._g.comment_floors||(this._g.comment_floors={}),this._g.comment_floors[t["_id"]]=e},get_comment_floor:function(t){if(this._g.comment_floors)return this._g.comment_floors[t]}}}),r=c,l=s("2877"),_=Object(l["a"])(r,a,n,!1,null,"d5f1b3ae",null),d=_.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply",class:{light:t.light_css},attrs:{id:"reply-"+t.comment_data["_id"]}},[s("div",[s("div",{staticClass:"avatar"},[s("router-link",{attrs:{title:t.comment_user.username,to:"/user/"+t.comment_user.uid}},[s("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.comment_user)}})])],1),s("div",{staticClass:"infos"},[s("div",{staticClass:"info"},[s("span",{staticClass:"name"},[s("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.comment_user.uid}},[t._v(" "+t._s(t.comment_user.username)+" ")])],1),s("span",{staticClass:"sub-info"},[t.floor?s("span",{staticClass:"floor"},[t._v("#"+t._s(t.floor))]):t._e(),t._v(" · "),s("a",{staticClass:"time"},[s("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.comment_data.time)))])])]),s("span",{staticClass:"opts pull-right"},[s("span",{staticClass:"hideable mr-2"},[t.is_self?s("a",{staticClass:"edit fa fa-edit ",attrs:{title:"修改回帖"}},[s("q-tooltip",[t._v(" 修改回帖 ")])],1):t._e(),t._v(" "),s("a",{staticClass:"btn-reply",attrs:{href:"#reply",title:"回复此楼"},on:{click:t.reply_comment_event}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" fa fa-reply ")]),s("q-tooltip",[t._v(" 回复此楼 ")])],1)]),s("a",{staticClass:"likeable deactive",class:{active:t.is_like},attrs:{title:"赞"},on:{click:function(e){return t.on_comment_like("like")}}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" thumb_up ")]),s("q-tooltip",[t._v(" 赞 ")]),t._v(" "),t.comment_data.like_list&&t.comment_data.like_list.length>0?s("span",[t._v(t._s(t.comment_data.like_list.length)+"个赞")]):t._e()],1),s("a",{staticClass:"likeable deactive",class:{active:t.is_dislike},attrs:{title:"踩"},on:{click:function(e){return t.on_comment_like("dislike")}}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" thumb_down ")]),s("q-tooltip",[t._v(" 踩 ")]),t._v(" "),t.comment_data.dislike_list&&t.comment_data.dislike_list.length>0?s("span",[t._v(t._s(t.comment_data.dislike_list.length)+"个踩 ")]):t._e()],1)])]),t.reply_commnet?s("div",{staticClass:"reply-to-block"},[s("div",{staticClass:"info"},[t._v(" 对 "),s("a",{attrs:{href:"#reply-"+t.reply_commnet["_id"]}},[s("img",{staticClass:"media-object avatar-16",attrs:{src:t.generate_avatar_url(t.reply_commnet.comment_user)}}),s("span",{staticClass:"user-name"},[t._v(t._s(t.reply_commnet.comment_user.username))]),t._v(" "),t.get_comment_floor(t.reply_commnet["_id"])?s("span",{staticClass:"reply-floor"},[t._v("#"+t._s(t.get_comment_floor(t.reply_commnet["_id"])))]):t._e()]),t._v(" 回复 ")])]):t._e(),s("div",{staticClass:"markdown"},[s("p",[t._v(t._s(t.comment_data.message))])])])])])},u=[],p=(s("c975"),{name:"item",mixins:[d],props:{comment_data:{},floor:void 0},data:function(){return{light_css:!1}},created:function(){this.listeners["add:comment:item"]=this.$hub.on("event:add:comment",(function(t){})),this.light_css=this.comment_data.light_css,this.update_comment_floor(this.comment_data,this.floor)},destroyed:function(){this.listeners["add:comment:item"].off()},methods:{on_comment_like:function(t){var e=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var s=!1;s="like"==t?!this.is_like:!this.is_dislike;var i={action:t,comment_id:this.comment_data["_id"],active:s};this.$axios.post("/app/comment/like",i).then((function(s){console.log("/app/comment/like response:",s),"like"==t?(e.comment_data.like_list||(e.comment_data.like_list=[]),e.is_like?e.comment_data.like_list.remove(e.$store.state.user.userinfo.uid):(e.comment_data.like_list.push(e.$store.state.user.userinfo.uid),e.comment_data.dislike_list.remove(e.$store.state.user.userinfo.uid))):(e.comment_data.dislike_list||(e.comment_data.dislike_list=[]),e.is_dislike?e.comment_data.dislike_list.remove(e.$store.state.user.userinfo.uid):(e.comment_data.dislike_list.push(e.$store.state.user.userinfo.uid),e.comment_data.like_list.remove(e.$store.state.user.userinfo.uid)),e.$forceUpdate())})).catch((function(t){console.log("error:",t)}))},reply_comment_event:function(){this.$hub.emit("event:reply:comment",this.comment_data),setTimeout((function(){document.querySelector("#reply").scrollIntoView()}),1)}},computed:{is_self:function(){var t=this.$store.state.hasLogin&&this.$store.state.user.userinfo.uid==this.comment_user.uid;return t},comment_user:function(){return this.comment_data.comment_user?this.comment_data.comment_user:this.get_comment_user(this.comment_data.comment_uid)},reply_commnet:function(){if(console.log("call reply_commnet:",this.comment_data.reply_comment_id),this.comment_data.reply_comment_id)return this.get_comment_data(this.comment_data.reply_comment_id)},is_like:function(){if(this.$store.state.hasLogin){var t=this.$store.state.user.userinfo.uid;if(this.comment_data.like_list&&this.comment_data.like_list.indexOf(t)>=0)return!0}return!1},is_dislike:function(){if(this.$store.state.hasLogin){var t=this.$store.state.user.userinfo.uid;if(this.comment_data.dislike_list&&this.comment_data.dislike_list.indexOf(t)>=0)return!0}return!1}}}),v=p,h=s("fe09"),f=s("6544"),g=s.n(f),b=s("132d"),w=Object(l["a"])(v,m,u,!1,null,"26a2dcb8",null),y=w.exports;w.options.components=Object.assign(Object.create(w.options.components||null),w.options.components||{},{QTooltip:h["K"]}),g()(w,{VIcon:b["a"]});var k={mixins:[d],components:{comment_item:y},name:"list",props:{topic_data:{}},data:function(){return{comment_data:{},all_comment_users:{}}},created:function(){var t=this;console.log("create comment list:",this.topic_data),this.load_comment_list({id:this.topic_data.id,start:0,limit:36,cb:this.on_comment_list}),this.listeners["add:comment:list"]=this.$hub.on("event:add:comment",(function(e){console.log("on dd:comment:",e),e.light_css=!0,t.comment_data.comments.push(e)}))},methods:{on_comment_list:function(t,e,s,i){var o=this;console.log("on_comment_list:",t);var a=t.comment_users;this.update_comment_users(a),this.update_comment_datas(s,i,e,t.comments),this.comment_data=t,this.goto_anchor((function(){o.show_assgin_reply()}))},show_assgin_reply:function(){var t=/reply-([a-z0-9]+)/,e=t.exec(location.hash);if(console.log("t_r:",e),t.test(location.hash))e[1]}},destroyed:function(){this.listeners["add:comment:list"]&&this.listeners["add:comment:list"].off()}},$=k,C=Object(l["a"])($,i,o,!1,null,"58be7094",null);e["a"]=C.exports},"2ce5":function(t,e,s){"use strict";var i=s("fac7"),o=s.n(i);o.a},"417f":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",[t.topic_data&&t.topic_data.video_info?s("div",[t.is_ios()?s("div",{staticClass:"ios_player",attrs:{id:"ios_player"}},[s("video",{attrs:{id:"orginal_video_player",preload:"auto",width:"100%",height:"100%",controls:"",crossorigin:"","webkit-playsinline":"",playsinline:"",poster:t.get_cover_image_url(),autoplay:""}},[s("source",{attrs:{src:t.get_m3u8_url(),type:"application/x-mpegURL"}})])]):s("div",{directives:[{name:"show",rawName:"v-show",value:t.player,expression:"player"}]},[s("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hls.js"}}),s("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/plyr/plyr.js"}}),s("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hammer.min.js"}}),s("div",{attrs:{id:"video-player-container"}},[s("video",{attrs:{id:"video-player",preload:"auto","webkit-playsinline":"true",playsinline:"true",controls:"",crossorigin:""}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show_video_percent,expression:"is_show_video_percent"}],ref:"video_percent"},[s("q-circular-progress",{staticClass:" video_percent",attrs:{"show-value":"","font-size":"12px",value:t.video_percent,size:"50px",thickness:.22,color:"red","track-color":"black"}},[t._v(" "+t._s(t.video_percent)+"% ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_touch_play_progress_flag,expression:"show_touch_play_progress_flag"}],ref:"touch_play_progress",staticClass:"touch-play-progress",attrs:{id:"touch-play-progress"}},[s("span",{staticClass:"touch-play-time"},[t._v(t._s(t.touch_play_time))]),t._v("/"),s("span",{staticClass:"current-play-time"},[t._v(t._s(t.touch_current_play_time))])])])],1)]):t._e(),t.player||t.is_ios()?t._e():s("div",[s("q-skeleton",{attrs:{height:"320px",square:""}})],1),!t.embed&&t.online_video?s("video_tab",{staticClass:"mt-2 mb-2",attrs:{online_video:t.online_video,topic_data:t.topic_data}}):t._e(),!t.embed&&t.online_video&&t.is_jav_video?s("video_jav",{attrs:{topic_data:t.topic_data,online_video:t.online_video}}):t._e(),!t.embed&&t.online_video?s("video_servers",{attrs:{topic_data:t.topic_data,online_video:t.online_video,select_server_name:t.select_server_name},on:{"update:select_server_name":function(e){t.select_server_name=e}}}):t._e()],1):t._e()},o=[],a=(s("c975"),s("b680"),s("d3b7"),s("1bc8")),n=s("717a"),c=s("21d5");s.e("chunk-7722135a").then(s.t.bind(null,"ccd3",7)),s.e("chunk-74917cdf").then(s.t.bind(null,"637d",7));var r={name:"video_watch",components:{video_tab:a["a"],video_jav:n["a"],video_servers:c["a"]},props:{topic_data:void 0,show_title:void 0,embed:void 0},data:function(){return{show:!0,player:void 0,video_ele:void 0,video_percent:void 0,video_status:void 0,online_video:void 0,select_server_name:void 0,show_touch_play_progress_flag:!1,touch_play_time:"",touch_current_play_time:""}},created:function(){this.select_server_name=localStorage.getItem("select_server_name"),this.select_server_name||(this.select_server_name="cdn_xxxhostcf"),console.log("watch_video create"),this.init()},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_show_video_percent:function(){return!(isNaN(this.video_percent)||!this.video_status)&&("playing"!=this.video_status&&"pause"!=this.video_status&&"canplay"!=this.video_status)}},watch:{select_server_name:function(t){console.log("select_server_name change:",t),this.on_switch_server(t)}},methods:{init:function(){this.online_video=this.topic_data.video_info.online_videos[0],this.$nextTick(this.init_video_player),window._t=this},init_video_player:function(){var t=this;if(this.is_ios())this.player=document.querySelector("#orginal_video_player"),this.player.addEventListener("loadeddata",(function(){console.log("on loadeddata")}),!1);else{if(!window.Plyr||!window.Hls)return setTimeout(this.init_video_player,100);(function(t,e){var s=new XMLHttpRequest,i=t.body;s.open("GET",e,!0),s.send(),s.onload=function(){var e=t.createElement("div");e.setAttribute("hidden",""),e.innerHTML=s.responseText,i.insertBefore(e,i.childNodes[0])}})(document,"/static/images/plyr.svg?123");var e="video-player";if(this.video_ele=document.querySelector("#video-player-container video"),!this.video_ele)return setTimeout(this.init_video_player,100);this.player=new window.Plyr("#"+e,{captions:{active:!0,update:!0,language:"en"}});var s=window.Hls,i=s.isSupported();if(i){var o=new s({});o.loadSource(this.get_m3u8_url()),o.attachMedia(this.video_ele),o.on(s.Events.MANIFEST_PARSED,(function(t){console.log("MANIFEST_PARSED e:",t)})),window.hls=o,o.on(s.Events.FRAG_LOAD_PROGRESS,(function(e,s){s.frag;var i=s.stats,o=parseInt(i.loaded/i.total*100);isNaN(o)||(t.video_percent=o)})),o.on(s.Events.FRAG_LOADING,(function(t,e){var s=e.frag;console.log("FRAG_LOADING evnet call:",t,s)})),o.on(s.Events.FRAG_LOADED,(function(t,e){var s=e.frag;console.log("FRAG_LOADED evnet call:",t,s)}));o.p2pEngine;this.video_ele.addEventListener("waiting",(function(e){t.video_status="waiting"}),!0),this.video_ele.addEventListener("seeking",(function(e){t.video_status="seeking",t.video_percent=0}),!0),this.video_ele.addEventListener("canplay",(function(e){t.video_status="canplay"}),!0),this.video_ele.addEventListener("playing",(function(e){t.video_status="playing",t.video_percent=0}),!0),this.video_ele.addEventListener("pause",(function(e){t.video_status="pause",t.video_percent=0}),!0)}var a=this.get_cover_image_url();console.log("cover_image_url:",a),this.player.poster=a,this.add_touch();var n=document.querySelector(".plyr");n.appendChild(this.$refs["touch_play_progress"]),n.appendChild(this.$refs["video_percent"])}},get_cover_image_url:function(){var t=this.generate_cover_url(this.online_video.space_name,this.online_video.hash_id);return console.log("cover_image_url:",t),t},get_m3u8_url:function(){var t="/video/"+this.topic_data.video_info.online_videos[0].hash_id+".m3u8?video_server="+this.select_server_name,e=window.location.host;return e.indexOf("localhost")>=0&&(t="https://"+this.$debug_host+t),t},on_switch_server:function(t){var e=this;this.select_server_name=t,localStorage.setItem("select_server_name",this.select_server_name),this.show=!1,this.$nextTick((function(){e.show=!0,e.init(),e.$nextTick((function(){var t=function(){e.player?e.player.play():setTimeout(e.auto_play,200)};t()})),e.$ga&&e.$ga.event({eventCategory:"on_switch_server",eventAction:"switch",eventLabel:e.select_server_name,eventValue:e.$store.state.hasLogin?"1":"2"})}))},add_touch:function(){var t=this;if(console.log("call add_touch"),!window.Hammer)return setTimeout(this.add_touch,500);function e(t,e){return(t/Math.pow(10,e)).toFixed(e).substr(2)}var s=function(t,s){t=t<0?0:t;var i=Math.floor(t%60),o=Math.floor(t/60%60),a=Math.floor(t/3600),n=Math.floor(s/60%60),c=Math.floor(s/3600);return(isNaN(t)||t===1/0)&&(a=o=i="-"),a=a>0||c>0?a:"0",o=(a||n>=10)&&o<10?"0"+o:o,i=i<10?"0"+i:i,e(a,2)+":"+e(o,2)+":"+e(i,2)},i=s;function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return i(t,e)}var a=function(e){var s=t.player.duration,i=t.player.currentTime,a=i+e/document.body.clientWidth*420;return a>s&&(a=s),a<0&&(a=0),console.log("[show_touch_play_progress]:",s),t.show_touch_play_progress_flag=!0,t.touch_current_play_time=o(s),t.touch_play_time=o(a),a},n=function(){t.show_touch_play_progress_flag=!1},c=function(){var e=void 0,s=new window.Hammer(document.getElementById("video-player-container"));s.on("pan",(function(t){console.log("pan event:",t),"panright"==t.additionalEvent&&t.deltaX>35&&(e=a(t.deltaX)),"panleft"==t.additionalEvent&&t.deltaX<-35&&(e=a(t.deltaX))})),s.on("panend",(function(s){n(),e&&(t.player.currentTime=e,t.player.play(),e=void 0)})),s.on("pancancel",(function(){n()}))};c()}}},l=r,_=(s("2024"),s("2877")),d=s("fe09"),m=Object(_["a"])(l,i,o,!1,null,"6a2859a8",null);e["a"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QCircularProgress:d["k"],QSkeleton:d["B"]})},"525d":function(t,e,s){"use strict";var i=s("7564"),o=s.n(i);o.a},"6dbc":function(t,e,s){},"717a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.video_jav_info?s("div",{staticClass:"video_jav_info"},[s("ul",{staticClass:"works-detail-info-lst"},[t.video_jav_info.video_cast?s("li",{staticClass:"works-detail-info-item js-toggle-target--actress"},[s("dl",{staticClass:"works-detail-info-desc-lst"},[s("dt",{staticClass:"works-detail-info-desc-ttl"},[t._v(t._s(t.$l("actor"))+":")]),s("dd",{staticClass:"works-detail-info-desc-tx"},[s("ul",{staticClass:"works-detail-info-desc-txt-lst"},t._l(t.video_jav_info.video_cast,(function(e){return s("li",{key:e,staticClass:"works-detail-info-desc-txt-item"},[s("router-link",{attrs:{to:"/jav/actress/"+e+"?f=v"}},[t._v(t._s(e))])],1)})),0)])])]):t._e(),t._m(0),t.video_jav_info.video_genres?s("li",{staticClass:"works-detail-info-item"},[s("dl",{staticClass:"works-detail-info-desc-lst"},[s("dt",{staticClass:"works-detail-info-desc-ttl"},[t._v("分类:")]),s("dd",{staticClass:"works-detail-info-desc-tx"},[s("ul",{staticClass:"works-detail-info-desc-txt-lst"},t._l(t.video_jav_info.video_genres,(function(e){return s("li",{staticClass:"works-detail-info-desc-txt-item"},[s("router-link",{attrs:{to:"/jav/genre/"+e}},[t._v(t._s(e))])],1)})),0)])])]):t._e(),s("li",{staticClass:"works-detail-info-item"},[s("dl",{staticClass:"works-detail-info-desc-lst"},[s("dt",{staticClass:"works-detail-info-desc-ttl"},[t._v(t._s(t.$l("view.fanhao"))+":")]),s("dd",{staticClass:"works-detail-info-desc-tx"},[s("ul",{staticClass:"works-detail-info-desc-txt-lst"},[s("li",{staticClass:"works-detail-info-desc-txt-item works-detail-info-desc-txt-item--fix"},[s("span",[t._v(t._s(t.topic_data.video_info.fanhao))])])])])])])])]):t._e()},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"works-detail-info-item none"},[s("dl",{staticClass:"works-detail-info-desc-lst"},[s("dt",{staticClass:"works-detail-info-desc-ttl"},[t._v("发行日期:")]),s("dd",{staticClass:"works-detail-info-desc-tx"},[s("ul",{staticClass:"works-detail-info-desc-txt-lst"},[s("li",{staticClass:"works-detail-info-desc-txt-item"},[s("a",{attrs:{href:"#"}},[t._v("2020年11月7日")])])])])])])}],a={name:"video_jav",props:{online_video:void 0,topic_data:void 0},computed:{video_jav_info:function(){for(var t=["chinese","japanese","english"],e=0;e<t.length;++e){var s=t[e];if(this.topic_data[s])return this.topic_data[s]}}},created:function(){}},n=a,c=(s("cc3c"),s("2877")),r=Object(c["a"])(n,i,o,!1,null,"2da789b6",null);e["a"]=r.exports},"71ec":function(t,e,s){},7564:function(t,e,s){},"80d7":function(t,e,s){"use strict";var i=s("71ec"),o=s.n(i);o.a},c286:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{title:"",rel:"nofollow"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),s("q-menu",[s("q-list",{staticStyle:{"min-width":"100px"}},[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",[t._v("设置为热门")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_top(Boolean(!t.topic_data.manager_set.settotop))}}},[s("q-item-section",[t._v(t._s(t.topic_data.manager_set.settotop?t.$l("thread.unsettotop"):t.$l("thread.settotop"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_essence(Boolean(!t.topic_data.manager_set.settoessence))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.settoessence?t.$l("thread.unsettoessence"):t.$l("thread.settoessence"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_carousel(Boolean(!t.topic_data.manager_set.setcarousel))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setcarousel?t.$l("thread.unsetcarousel"):t.$l("thread.setcarousel"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_idnextop(Boolean(!t.topic_data.manager_set.setindextop))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setindextop?"取消首页顶部":"设置首页顶部")+" ")])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",[t._v("删除")])],1)],1)],1)],1)},o=[],a={name:"thread_manager",props:{topic_data:{}},destroyed:function(){this.listener_loginout.off(),this.listener_login.off()},created:function(){var t=this;this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.topic_data&&(this.topic_data.manager_set||(this.topic_data.manager_set={}))},methods:{set_to_idnextop:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setindextop",s).then((function(t){var s=t.data.setindextop;e.topic_data.manager_set.setindextop=s,e.$forceUpdate()}))},set_to_carousel:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setcarousel",s).then((function(t){console.log("setcarousel response:",t);var s=t.data.setcarousel;e.topic_data.manager_set.setcarousel=s,e.$forceUpdate()}))},set_to_essence:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setessence",s).then((function(t){console.log("settoessence response:",t);var s=t.data.settoessence;e.topic_data.manager_set.settoessence=s,e.$forceUpdate()}))},set_to_top:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/settotop",s).then((function(t){console.log("settotop response:",t);var s=t.data.settotop;e.topic_data.manager_set.settotop=s,e.$forceUpdate()}))}}},n=a,c=s("2877"),r=s("fe09"),l=Object(c["a"])(n,i,o,!1,null,"41de4f68",null);e["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QMenu:r["w"],QList:r["v"],QItem:r["r"],QItemSection:r["s"],QSeparator:r["A"]}),l.options.directives=Object.assign(Object.create(l.options.directives||null),l.options.directives||{},{ClosePopup:r["a"]})},c96ad:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.state.hasLogin?s("div",[s("q-img",{staticClass:"rounded-borders",staticStyle:{"min-height":"150px"},attrs:{src:t.cover_image_url,"spinner-color":"white","img-class":"my-custom-image",ratio:16/9,"placeholder-src":"https://"+t.$web_conf.set_host+"/static/images/placeholder-md,jpg"}},[s("div",{staticClass:"vip-container"},[s("h5",{staticClass:"desciption",staticStyle:{"margin-top":"10%"}},[t._v("您已超过每日允许的观看次数。")]),s("h5",{staticClass:"desciption"},[t._v("加入VIP 后即可无限制观看精品视频！")]),s("h5",{staticClass:"desciption"},[t._v("升级成为VIP,可以享受下载视频等特权")]),s("div",{staticClass:"two-button mb10 xxbtn",attrs:{align:"center"}},[s("v-btn",{staticClass:"mt-2",attrs:{color:"primary",depressed:""},on:{click:function(e){return t.go("/buy/vip")}}},[t._v(" "+t._s(t.$l("vip.open_vip"))+" ")])],1)])])],1):s("div",[s("v-responsive",{attrs:{"aspect-ratio":16/9}},[s("q-img",{staticClass:"rounded-borders",attrs:{src:t.cover_image_url,"spinner-color":"white","img-class":"my-custom-image"}},[s("div",{staticClass:"vip-container"},[s("h5",{staticClass:"desciption"},[t._v("注册会员，精彩继续观看")]),s("h5",{staticClass:"desciption"},[t._v("非注册会员，每日限制观看3个视频")]),s("div",{staticClass:"two-button mb10 xxbtn",attrs:{align:"center"}},[s("div",{staticStyle:{padding:"20px"},attrs:{"data-turbolinks-action":"replace"}},[s("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.go("/user/login")}}},[t._v(" 登录 ")]),s("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.go("/user/register")}}},[t._v(" 注册 ")])],1)])])])],1)],1)},o=[],a={name:"watch_limit",props:{topic_data:void 0},created:function(){this.$ga&&this.$ga.event({eventCategory:"watch_limit",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin?"1":"2"})},computed:{cover_image_url:function(){var t=this.topic_data.video_info.online_videos[0],e=t.hash_id,s=this.generate_cover_url(t.space_name,e);return console.log("cover_image_url:",s),s}}},n=a,c=(s("040c"),s("2877")),r=s("fe09"),l=s("6544"),_=s.n(l),d=s("8336"),m=s("6b53"),u=Object(c["a"])(n,i,o,!1,null,"7fca0a14",null);e["a"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QImg:r["p"]}),_()(u,{VBtn:d["a"],VResponsive:m["a"]})},cc3c:function(t,e,s){"use strict";var i=s("efd7"),o=s.n(i);o.a},d5dc:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-reply"},[t.$store.state.hasLogin?s("div",{staticClass:"card-body"},[t.reply_tip&&t.reply_tip.length>0?s("div",{staticClass:"alert alert-success"},[s("button",{staticClass:"close",attrs:{"data-dismiss":"alert"}},[s("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.reply_tip=""}}},[t._v("×")])]),t._v(" 回复成功。 ")]):t._e(),s("div",{staticClass:"card-title hide-ios float-lg-left"},[t._v("发起回帖")]),s("div",{staticClass:"editor-toolbar clearfix float-lg-right"},[t.reply_comment_data?s("div",{staticClass:"reply-to pull-right"},[s("i",{staticClass:"fa fa-reply",attrs:{title:"回复"}}),s("a",{staticClass:"user"},[t._v(t._s(t.reply_comment_data.comment_user.username))]),s("a",{staticClass:"close",on:{click:function(e){t.reply_comment_data=void 0}}},[s("i",{staticClass:"fa fa-close"})])]):t._e(),t._m(0)]),s("form",{attrs:{id:"new_reply","accept-charset":"UTF-8",method:"post"}},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"topic-editor-dropzone dz-clickable"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment_data.message,expression:"comment_data.message"}],staticClass:"topic-editor form-control",attrs:{rows:"4",id:"reply_body"},domProps:{value:t.comment_data.message},on:{input:function(e){e.target.composing||t.$set(t.comment_data,"message",e.target.value)}}})]),s("div",{staticClass:"markdown form-control",staticStyle:{display:"none"},attrs:{id:"preview"}})]),s("div",{staticClass:"submit-buttons"},[s("button",{staticClass:"btn btn-primary xyg button",attrs:{type:"button","data-disable-with":"提交回复"},on:{click:t.on_reply}},[t._v("提交回复 ")]),t._m(1)])])]):s("div",[t._m(2)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toolbar-buttons none"},[s("a",{staticClass:"nav-link upload-button",attrs:{id:"editor-upload-image",href:"#",title:"上传图片"}},[s("i",{staticClass:"upload-icon fa fa-image"}),s("i",{staticClass:"loading fa fa-circle-o-notch fa-spin"})]),s("a",{staticClass:"nav-link preview",attrs:{href:"#",title:"预览"}},[s("i",{staticClass:"fa fa-eye"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"help-inline none",staticStyle:{"padding-left":"5px"},attrs:{title:"或者 Ctrl + Enter"}},[s("kbd",[t._v("Command")]),t._v(" + "),s("kbd",[t._v("Enter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card border-0 video-card "},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"form box",attrs:{id:"reply"}},[s("div",{staticStyle:{padding:"20px"},attrs:{"data-turbolinks-action":"replace"}},[t._v(" 需要 "),s("a",{staticClass:"btn btn-primary xyg button",attrs:{href:"/user/login"}},[t._v("登录")]),t._v(" 后方可回复, 如果你还没有账号请点击这里 "),s("a",{staticClass:"btn btn-danger xyg button",attrs:{href:"/user/register"}},[t._v("注册")]),t._v("。 ")])])])])}],a={name:"reply",props:{topic_data:{}},data:function(){return{comment_data:{reply_id:"",comment_item_id:""},reply_tip:"",reply_comment_data:void 0}},created:function(){var t=this;console.log("this.comment_data:",this.comment_data),this.listeners["reply:comment:reply"]=this.$hub.on("event:reply:comment",(function(e){console.log("on event event:reply:comment",e),t.reply_comment_data=e}))},destroyed:function(){this.listeners["reply:comment:reply"].off()},methods:{on_reply:function(){var t=this;return this.comment_data.vid=this.topic_data.id,this.comment_data.time=(new Date).valueOf()/1e3,console.log("comment_data:",this.comment_data),!this.comment_data.message||this.comment_data.message.length<=1?(this.$message("评论的内容过短，不得少于1个字",{type:"error"}),!1):(this.reply_comment_data&&(this.comment_data.reply_comment_id=this.reply_comment_data["_id"]),this.$axios.post("/app/view/comment",this.comment_data).then((function(e){if(console.log("add new comment:",e),e){var s=Object.assign({},t.comment_data);s.comment_user=t.$store.state.user.userinfo,s.uid=t.$store.state.user.userinfo.uid,s._id=e.data.add_comment["_id"],t.$hub.emit("event:add:comment",s),t.comment_data.message="",t.reply_tip="回复成功"}})).catch((function(e){console.log("error:",e),t.$message("提交评论出错！")})),!1)}}},n=a,c=(s("80d7"),s("2877")),r=Object(c["a"])(n,i,o,!1,null,"68197421",null);e["a"]=r.exports},e113:function(t,e,s){},efd7:function(t,e,s){},f42f:function(t,e,s){},fac7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-a10bbbf6.d0d150f7.js.map