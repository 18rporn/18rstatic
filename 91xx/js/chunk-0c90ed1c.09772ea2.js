(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c90ed1c"],{"03f5":function(t,e,s){"use strict";var i=s("6318"),a=s.n(i);a.a},"1bc8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded_tabinfo?s("v-row",{staticClass:"video_tab"},[s("div",{staticClass:"opts full-width"},[s("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_like},on:{click:t.on_video_like}},[s("v-icon",{attrs:{small:!0},on:{click:t.on_video_like}},[t._v("thumb_up")]),s("span",[t._v(t._s(t.tabinfo.is_like?"已赞":"点赞"))])],1),s("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_dislike},on:{click:t.on_video_dislike}},[s("v-icon",{attrs:{small:!0},on:{click:t.on_video_like}},[t._v("thumb_down")]),s("span",[t._v(t._s(t.tabinfo.is_dislike?"已踩":"踩"))])],1),s("a",{staticClass:"follow none",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-eye"}),t._v(" 关注")]),s("a",{staticClass:"bookmark",class:{active:t.tabinfo.is_star},attrs:{title:"收藏"},on:{click:t.on_video_star}},[s("v-icon",{attrs:{small:!0},on:{click:t.on_video_like}},[t._v("favorite")]),t._v(" "+t._s(t.tabinfo.is_star?"已收藏":"收藏")+" ")],1),s("a",{staticClass:"bookmark",attrs:{title:"反馈"}},[s("v-icon",{attrs:{small:!0},on:{click:t.on_video_like}},[t._v("favorite")]),t._v(" "+t._s(t.$l("view.report"))+" ")],1),s("video_download",{attrs:{topic_data:t.topic_data}}),t.$store.state.hasLogin&&t.$store.state.user.userinfo.uid==t.topic_data.user.uid||t.is_manager?s("span",{staticClass:"pull-right opts"},[t.is_manager?s("thread_manager",{attrs:{topic_data:t.topic_data}}):t._e(),s("router-link",{staticClass:"fa fa-edit",attrs:{title:"修改",to:"/release/thread?edit_id="+t.topic_data.id}},[s("q-tooltip",[t._v(" 修改 ")])],1),s("a",{staticClass:"fa fa-trash",attrs:{title:"删除",rel:"nofollow"}},[s("q-tooltip",[t._v(" 删除 ")])],1)],1):t._e()],1)]):t._e()},a=[],o=s("c286"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{on:{click:t.on_show_download}},[s("i",{staticClass:"fas fa-cloud-download-alt"}),t._v(" "+t._s(t.$l("view.download"))+" "),s("q-menu",[s("q-list",{staticStyle:{"min-width":"100px"}},[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",{on:{click:t.on_direct_download}},[s("i",{staticClass:"fas fa-cloud-download-alt"},[t._v(t._s(t.$l("view.direct_download"))+"(VIP)")])])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",{on:{click:t.on_torrent_download}},[s("i",{staticClass:"fas fa-magnet"},[t._v(t._s(t.$l("view.bt_download")))])])],1)],1)],1)],1)},c=[],r={name:"video_download",props:{topic_data:void 0},created:function(){},methods:{on_show_download:function(){},on_direct_download:function(){var t=this;return this.$store.state.hasLogin?this.$store.state.user.userinfo.is_vip?void this.$router.push("/download/video/"+this.topic_data.id):this.$q.dialog({title:this.$l("title_board_message"),message:this.$l("vip.download_tip"),cancel:this.$l("cancel"),ok:this.$l("vip.buy"),persistent:!0}).onOk((function(e){t.$router.push("/buy/vip")})):this.$app._userbar.show_login_dialog()},on_torrent_download:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.$router.push("/download/torrent/"+this.topic_data.id)}}},l=r,_=(s("525d"),s("2877")),d=s("fe09"),m=Object(_["a"])(l,n,c,!1,null,"0c49b19f",null),p=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QMenu:d["u"],QList:d["t"],QItem:d["p"],QItemSection:d["q"]}),m.options.directives=Object.assign(Object.create(m.options.directives||null),m.options.directives||{},{ClosePopup:d["a"]});var u={name:"video_tab",components:{thread_manager:o["a"],video_download:p},props:{online_video:void 0,topic_data:void 0},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}},data:function(){return{defalut_tabinfo:{is_like:!1,is_dislike:!1,is_star:!1,like_count:0},tabinfo:Object.assign({},this.defalut_tabinfo),loaded_tabinfo:!1}},created:function(){this.online_video||(this.online_video=this.topic_data.video_info.online_videos[0]),this.load_tabinfo()},methods:{load_tabinfo:function(){var t=this;this.$store.state.hasLogin?this.$axios.get("/app/video/tabinfo",{params:{hash_id:this.online_video.hash_id}}).then((function(e){t.tabinfo=Object.assign(t.tabinfo,e.data),t.loaded_tabinfo=!0,t.$forceUpdate()})).catch((function(t){})):this.loaded_tabinfo=!0},on_video_like:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_like,hash_id:this.online_video.hash_id};this.$axios.post("/app/video/like",e).then((function(e){t.tabinfo.is_like=!0,t.tabinfo.is_dislike=!1,t.$forceUpdate()})).catch((function(t){}))},on_video_dislike:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_dislike,hash_id:this.online_video.hash_id};this.$axios.post("/app/video/dislike",e).then((function(e){t.tabinfo.is_like=!0,t.tabinfo.is_dislike=!1})).catch((function(t){}))},on_video_star:function(){var t=this;if(!this.$store.state.hasLogin)return this.show_no_login_dialog?this.show_no_login_dialog():this.$app._userbar.show_login_dialog();var e={action:!this.tabinfo.is_star,hash_id:this.online_video.hash_id};this.$axios.post("/app/video/star",e).then((function(e){t.tabinfo.is_star=!0,t.$forceUpdate()})).catch((function(t){}))}}},h=u,v=(s("03f5"),s("6544")),f=s.n(v),g=s("132d"),b=s("0fd9"),k=Object(_["a"])(h,i,a,!1,null,"6ee158c4",null);e["a"]=k.exports;k.options.components=Object.assign(Object.create(k.options.components||null),k.options.components||{},{QTooltip:d["G"]}),f()(k,{VIcon:g["a"],VRow:b["a"]})},"227a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comment_data&&t.comment_data.comments&&0==t.comment_data.comments.length?s("div",{staticClass:"text-center p-3"},[t._v(" 暂无回复。 ")]):s("div",{staticClass:"items card-body"},[t.comment_data?s("div",t._l(t.comment_data.comments,(function(t,e){return s("comment_item",{key:t.id,attrs:{floor:e+1,comment_data:t}})})),1):t._e()])},a=[],o=(s("ac1f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")}),n=[],c=(s("b64b"),{name:"comment",data:function(){return{}},methods:{add_comment:function(t){t.comment_data,t.cb},load_comment_list:function(t){var e=t.id,s=t.start,i=t.limit,a=t.cb;this.$axios.get("/app/view/comment",{params:{vid:e,start:s,limit:i}}).then((function(t){var o=t.data;a&&a(o,e,s,i)})).catch((function(t){}))},get_comment_user:function(t){if(this._g.comment_users)return this._g.comment_users[t]},update_comment_users:function(t){this._g.comment_users||(this._g.comment_users={}),this._g.comment_users=Object.assign(this._g.comment_users,t)},update_comment_datas:function(t,e,s,i){this._g.comment_datas||(this._g.comment_datas={});var a=s+":"+t+":"+e;this._g.comment_datas[a]=i},get_comment_data:function(t){for(var e=Object.keys(this._g.comment_datas),s=0;s<e.length;++s)for(var i=e[s],a=0;a<this._g.comment_datas[i].length;++a)if(this._g.comment_datas[i][a]["_id"]==t)return this._g.comment_datas[i][a]},update_comment_floor:function(t,e){this._g.comment_floors||(this._g.comment_floors={}),this._g.comment_floors[t["_id"]]=e},get_comment_floor:function(t){if(this._g.comment_floors)return this._g.comment_floors[t]}}}),r=c,l=s("2877"),_=Object(l["a"])(r,o,n,!1,null,"d5f1b3ae",null),d=_.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply",class:{light:t.light_css},attrs:{id:"reply-"+t.comment_data["_id"]}},[s("div",[s("div",{staticClass:"avatar"},[s("router-link",{attrs:{title:t.comment_user.username,to:"/user/"+t.comment_user.uid}},[s("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.comment_user)}})])],1),s("div",{staticClass:"infos"},[s("div",{staticClass:"info"},[s("span",{staticClass:"name"},[s("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.comment_user.uid}},[t._v(" "+t._s(t.comment_user.username)+" ")])],1),s("span",{staticClass:"sub-info"},[t.floor?s("span",{staticClass:"floor"},[t._v("#"+t._s(t.floor))]):t._e(),t._v(" · "),s("a",{staticClass:"time"},[s("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.comment_data.time)))])])]),s("span",{staticClass:"opts pull-right"},[s("span",{staticClass:"hideable mr-2"},[t.is_self?s("a",{staticClass:"edit fa fa-edit ",attrs:{title:"修改回帖"}},[s("q-tooltip",[t._v(" 修改回帖 ")])],1):t._e(),t._v(" "),s("a",{staticClass:"btn-reply",attrs:{href:"#reply",title:"回复此楼"},on:{click:t.reply_comment_event}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" fa fa-reply ")]),s("q-tooltip",[t._v(" 回复此楼 ")])],1)]),s("a",{staticClass:"likeable deactive",class:{active:t.is_like},attrs:{title:"赞"},on:{click:function(e){return t.on_comment_like("like")}}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" thumb_up ")]),s("q-tooltip",[t._v(" 赞 ")]),t._v(" "),t.comment_data.like_list&&t.comment_data.like_list.length>0?s("span",[t._v(t._s(t.comment_data.like_list.length)+"个赞")]):t._e()],1),s("a",{staticClass:"likeable deactive",class:{active:t.is_dislike},attrs:{title:"踩"},on:{click:function(e){return t.on_comment_like("dislike")}}},[s("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" thumb_down ")]),s("q-tooltip",[t._v(" 踩 ")]),t._v(" "),t.comment_data.dislike_list&&t.comment_data.dislike_list.length>0?s("span",[t._v(t._s(t.comment_data.dislike_list.length)+"个踩 ")]):t._e()],1)])]),t.reply_commnet?s("div",{staticClass:"reply-to-block"},[s("div",{staticClass:"info"},[t._v(" 对 "),s("a",{attrs:{href:"#reply-"+t.reply_commnet["_id"]}},[s("img",{staticClass:"media-object avatar-16",attrs:{src:t.generate_avatar_url(t.reply_commnet.comment_user)}}),s("span",{staticClass:"user-name"},[t._v(t._s(t.reply_commnet.comment_user.username))]),t._v(" "),t.get_comment_floor(t.reply_commnet["_id"])?s("span",{staticClass:"reply-floor"},[t._v("#"+t._s(t.get_comment_floor(t.reply_commnet["_id"])))]):t._e()]),t._v(" 回复 ")])]):t._e(),s("div",{staticClass:"markdown"},[s("p",[t._v(t._s(t.comment_data.message))])])])])])},p=[],u=(s("c975"),{name:"item",mixins:[d],props:{comment_data:{},floor:void 0},data:function(){return{light_css:!1}},created:function(){this.listeners["add:comment:item"]=this.$hub.on("event:add:comment",(function(t){})),this.light_css=this.comment_data.light_css,this.update_comment_floor(this.comment_data,this.floor)},destroyed:function(){this.listeners["add:comment:item"].off()},methods:{on_comment_like:function(t){var e=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var s=!1;s="like"==t?!this.is_like:!this.is_dislike;var i={action:t,comment_id:this.comment_data["_id"],active:s};this.$axios.post("/app/comment/like",i).then((function(s){"like"==t?(e.comment_data.like_list||(e.comment_data.like_list=[]),e.is_like?e.comment_data.like_list.remove(e.$store.state.user.userinfo.uid):(e.comment_data.like_list.push(e.$store.state.user.userinfo.uid),e.comment_data.dislike_list.remove(e.$store.state.user.userinfo.uid))):(e.comment_data.dislike_list||(e.comment_data.dislike_list=[]),e.is_dislike?e.comment_data.dislike_list.remove(e.$store.state.user.userinfo.uid):(e.comment_data.dislike_list.push(e.$store.state.user.userinfo.uid),e.comment_data.like_list.remove(e.$store.state.user.userinfo.uid)),e.$forceUpdate())})).catch((function(t){}))},reply_comment_event:function(){this.$hub.emit("event:reply:comment",this.comment_data),setTimeout((function(){document.querySelector("#reply").scrollIntoView()}),1)}},computed:{is_self:function(){var t=this.$store.state.hasLogin&&this.$store.state.user.userinfo.uid==this.comment_user.uid;return t},comment_user:function(){return this.comment_data.comment_user?this.comment_data.comment_user:this.get_comment_user(this.comment_data.comment_uid)},reply_commnet:function(){if(this.comment_data.reply_comment_id)return this.get_comment_data(this.comment_data.reply_comment_id)},is_like:function(){if(this.$store.state.hasLogin){var t=this.$store.state.user.userinfo.uid;if(this.comment_data.like_list&&this.comment_data.like_list.indexOf(t)>=0)return!0}return!1},is_dislike:function(){if(this.$store.state.hasLogin){var t=this.$store.state.user.userinfo.uid;if(this.comment_data.dislike_list&&this.comment_data.dislike_list.indexOf(t)>=0)return!0}return!1}}}),h=u,v=s("fe09"),f=s("6544"),g=s.n(f),b=s("132d"),k=Object(l["a"])(h,m,p,!1,null,"26a2dcb8",null),$=k.exports;k.options.components=Object.assign(Object.create(k.options.components||null),k.options.components||{},{QTooltip:v["G"]}),g()(k,{VIcon:b["a"]});var C={mixins:[d],components:{comment_item:$},name:"list",props:{topic_data:{}},data:function(){return{comment_data:{},all_comment_users:{}}},created:function(){var t=this;this.load_comment_list({id:this.topic_data.id,start:0,limit:36,cb:this.on_comment_list}),this.listeners["add:comment:list"]=this.$hub.on("event:add:comment",(function(e){e.light_css=!0,t.comment_data.comments.push(e)}))},methods:{on_comment_list:function(t,e,s,i){var a=this,o=t.comment_users;this.update_comment_users(o),this.update_comment_datas(s,i,e,t.comments),this.comment_data=t,this.goto_anchor((function(){a.show_assgin_reply()}))},show_assgin_reply:function(){var t=/reply-([a-z0-9]+)/,e=t.exec(location.hash);if(t.test(location.hash))e[1]}},destroyed:function(){this.listeners["add:comment:list"]&&this.listeners["add:comment:list"].off()}},y=C,w=Object(l["a"])(y,i,a,!1,null,"58be7094",null);e["a"]=w.exports},"47e4":function(t,e,s){"use strict";var i=s("f3e8"),a=s.n(i);a.a},"525d":function(t,e,s){"use strict";var i=s("7564"),a=s.n(i);a.a},6318:function(t,e,s){},"717a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player",attrs:{id:"clipEndInfo"}},[s("div",{staticClass:"video_watch open",attrs:{id:"clipInfoArea"}},[t.video_jav_info.video_genres?s("div",{staticClass:"hash_box"},[s("ul",{staticClass:"list_hash"},t._l(t.video_jav_info.video_genres,(function(e){return s("li",{key:e},[s("router-link",{attrs:{to:"/jav/genre/"+e}},[t._v("#"+t._s(e))])],1)})),0)]):t._e(),t.video_jav_info.video_cast?s("div",{staticClass:"hash_box"},[s("ul",{staticClass:"list_hash"},t._l(t.video_jav_info.video_cast,(function(e){return s("li",{key:e},[s("router-link",{attrs:{to:"/jav/actress/"+e}},[t._v("#"+t._s(e))])],1)})),0)]):t._e(),s("div",{staticClass:"watch_desc _clipInfo"},[s("div",{staticClass:"info_box _infoBox"},[s("dl",{staticClass:"rating_list"},[s("dt",{staticClass:"tit"},[t._v(t._s(t.$l("view.fanhao")))]),s("dd",{staticClass:"col"},[t._v(t._s(t.topic_data.video_info.fanhao))])])])])])])},a=[],o={name:"video_jav",props:{online_video:void 0,topic_data:void 0},computed:{video_jav_info:function(){for(var t=["chinese","japanese","english"],e=0;e<t.length;++e){var s=t[e];if(this.topic_data[s])return this.topic_data[s]}}},created:function(){}},n=o,c=(s("edd9"),s("2877")),r=Object(c["a"])(n,i,a,!1,null,"747f121e",null);e["a"]=r.exports},7564:function(t,e,s){},8548:function(t,e,s){},9536:function(t,e,s){"use strict";var i=s("8548"),a=s.n(i);a.a},c286:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{title:"",rel:"nofollow"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),s("q-menu",[s("q-list",{staticStyle:{"min-width":"100px"}},[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",[t._v("设置为热门")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_top(Boolean(!t.topic_data.manager_set.settotop))}}},[s("q-item-section",[t._v(t._s(t.topic_data.manager_set.settotop?t.$l("thread.unsettotop"):t.$l("thread.settotop"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_essence(Boolean(!t.topic_data.manager_set.settoessence))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.settoessence?t.$l("thread.unsettoessence"):t.$l("thread.settoessence"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_carousel(Boolean(!t.topic_data.manager_set.setcarousel))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setcarousel?t.$l("thread.unsetcarousel"):t.$l("thread.setcarousel"))+" ")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_idnextop(Boolean(!t.topic_data.manager_set.setindextop))}}},[s("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setindextop?"取消首页顶部":"设置首页顶部")+" ")])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[s("q-item-section",[t._v("删除")])],1)],1)],1)],1)},a=[],o={name:"thread_manager",props:{topic_data:{}},destroyed:function(){this.listener_loginout.off(),this.listener_login.off()},created:function(){var t=this;this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.topic_data&&(this.topic_data.manager_set||(this.topic_data.manager_set={}))},methods:{set_to_idnextop:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setindextop",s).then((function(t){var s=t.data.setindextop;e.topic_data.manager_set.setindextop=s,e.$forceUpdate()}))},set_to_carousel:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setcarousel",s).then((function(t){var s=t.data.setcarousel;e.topic_data.manager_set.setcarousel=s,e.$forceUpdate()}))},set_to_essence:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setessence",s).then((function(t){var s=t.data.settoessence;e.topic_data.manager_set.settoessence=s,e.$forceUpdate()}))},set_to_top:function(t){var e=this,s={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/settotop",s).then((function(t){var s=t.data.settotop;e.topic_data.manager_set.settotop=s,e.$forceUpdate()}))}}},n=o,c=s("2877"),r=s("fe09"),l=Object(c["a"])(n,i,a,!1,null,"41de4f68",null);e["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QMenu:r["u"],QList:r["t"],QItem:r["p"],QItemSection:r["q"],QSeparator:r["x"]}),l.options.directives=Object.assign(Object.create(l.options.directives||null),l.options.directives||{},{ClosePopup:r["a"]})},c96ad:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.state.hasLogin?s("div",[s("q-img",{staticClass:"rounded-borders",staticStyle:{"min-height":"150px"},attrs:{src:t.cover_image_url,"spinner-color":"white","img-class":"my-custom-image",ratio:16/9,"placeholder-src":"https://"+t.$web_conf.set_host+"/static/images/placeholder-md,jpg"}},[s("div",{staticClass:"vip-container"},[s("h5",{staticClass:"desciption",staticStyle:{"margin-top":"10%"}},[t._v("您已超过每日允许的观看次数。")]),s("h5",{staticClass:"desciption"},[t._v("加入VIP 后即可无限制观看精品视频！")]),s("h5",{staticClass:"desciption"},[t._v("升级成为VIP,可以享受下载视频等特权")]),s("div",{staticClass:"two-button mb10 xxbtn",attrs:{align:"center"}},[s("v-btn",{staticClass:"mt-2",attrs:{color:"primary",depressed:""},on:{click:function(e){return t.go("/buy/vip")}}},[t._v(" "+t._s(t.$l("vip.open_vip"))+" ")])],1)])])],1):s("div",[s("v-responsive",{attrs:{"aspect-ratio":16/9}},[s("q-img",{staticClass:"rounded-borders",attrs:{src:t.cover_image_url,"spinner-color":"white","img-class":"my-custom-image"}},[s("div",{staticClass:"vip-container"},[s("h5",{staticClass:"desciption"},[t._v("注册会员，精彩继续观看")]),s("h5",{staticClass:"desciption"},[t._v("非注册会员，每日限制观看3个视频")]),s("div",{staticClass:"two-button mb10 xxbtn",attrs:{align:"center"}},[s("div",{staticStyle:{padding:"20px"},attrs:{"data-turbolinks-action":"replace"}},[s("a",{staticClass:"btn btn-primary",attrs:{href:"/account/login"}},[t._v("登录")]),t._v(" "),s("a",{staticClass:"btn btn-danger",attrs:{href:"/account/register"}},[t._v("注册")]),t._v("。 ")])])])])],1)],1)},a=[],o={name:"watch_limit",props:{topic_data:void 0},created:function(){this.$ga&&this.$ga.event({eventCategory:"watch_limit",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin?"1":"2"})},computed:{cover_image_url:function(){var t=this.topic_data.video_info.online_videos[0],e=t.hash_id,s=this.generate_cover_url(t.space_name,e);return s}}},n=o,c=(s("47e4"),s("2877")),r=s("fe09"),l=s("6544"),_=s.n(l),d=s("8336"),m=s("6b53"),p=Object(c["a"])(n,i,a,!1,null,"931d2b66",null);e["a"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QImg:r["n"]}),_()(p,{VBtn:d["a"],VResponsive:m["a"]})},d5dc:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.$store.state.hasLogin?s("div",{staticClass:"card-body"},[t.reply_tip&&t.reply_tip.length>0?s("div",{staticClass:"alert alert-success"},[s("button",{staticClass:"close",attrs:{"data-dismiss":"alert"}},[s("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.reply_tip=""}}},[t._v("×")])]),t._v(" 回复成功。 ")]):t._e(),s("div",{staticClass:"card-title hide-ios float-lg-left"},[t._v("发起回帖")]),s("div",{staticClass:"editor-toolbar clearfix float-lg-right"},[t.reply_comment_data?s("div",{staticClass:"reply-to pull-right"},[s("i",{staticClass:"fa fa-reply",attrs:{title:"回复"}}),s("a",{staticClass:"user"},[t._v(t._s(t.reply_comment_data.comment_user.username))]),s("a",{staticClass:"close",on:{click:function(e){t.reply_comment_data=void 0}}},[s("i",{staticClass:"fa fa-close"})])]):t._e(),t._m(0)]),s("form",{attrs:{id:"new_reply","accept-charset":"UTF-8",method:"post"}},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"topic-editor-dropzone dz-clickable"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment_data.message,expression:"comment_data.message"}],staticClass:"topic-editor form-control",attrs:{rows:"4",id:"reply_body"},domProps:{value:t.comment_data.message},on:{input:function(e){e.target.composing||t.$set(t.comment_data,"message",e.target.value)}}})]),s("div",{staticClass:"markdown form-control",staticStyle:{display:"none"},attrs:{id:"preview"}})]),s("div",{staticClass:"submit-buttons"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-disable-with":"提交回复"},on:{click:t.on_reply}},[t._v("提交回复 ")]),t._m(1)])])]):s("div",[t._m(2)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toolbar-buttons none"},[s("a",{staticClass:"nav-link upload-button",attrs:{id:"editor-upload-image",href:"#",title:"上传图片"}},[s("i",{staticClass:"upload-icon fa fa-image"}),s("i",{staticClass:"loading fa fa-circle-o-notch fa-spin"})]),s("a",{staticClass:"nav-link preview",attrs:{href:"#",title:"预览"}},[s("i",{staticClass:"fa fa-eye"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"help-inline none",staticStyle:{"padding-left":"5px"},attrs:{title:"或者 Ctrl + Enter"}},[s("kbd",[t._v("Command")]),t._v(" + "),s("kbd",[t._v("Enter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"form box",attrs:{id:"reply"}},[s("div",{staticStyle:{padding:"20px"},attrs:{"data-turbolinks-action":"replace"}},[t._v(" 需要 "),s("a",{staticClass:"btn btn-primary",attrs:{href:"/account/login"}},[t._v("登录")]),t._v(" 后方可回复, 如果你还没有账号请点击这里 "),s("a",{staticClass:"btn btn-danger",attrs:{href:"/account/register"}},[t._v("注册")]),t._v("。 ")])])])])}],o=(s("a4fb"),{name:"reply",props:{topic_data:{}},data:function(){return{comment_data:{reply_id:"",comment_item_id:""},reply_tip:"",reply_comment_data:void 0}},created:function(){var t=this;this.listeners["reply:comment:reply"]=this.$hub.on("event:reply:comment",(function(e){t.reply_comment_data=e}))},destroyed:function(){this.listeners["reply:comment:reply"].off()},methods:{on_reply:function(){var t=this;return this.comment_data.vid=this.topic_data.id,this.comment_data.time=(new Date).valueOf()/1e3,this.comment_data.message.length<=1?(this.$message("评论的内容过短，不得少于1个字",{type:"error"}),!1):(this.reply_comment_data&&(this.comment_data.reply_comment_id=this.reply_comment_data["_id"]),this.$axios.post("/app/view/comment",this.comment_data).then((function(e){if(e){var s=Object.assign({},t.comment_data);s.comment_user=t.$store.state.user.userinfo,s.uid=t.$store.state.user.userinfo.uid,s._id=e.data.add_comment["_id"],t.$hub.emit("event:add:comment",s),t.comment_data.message="",t.reply_tip="回复成功"}})).catch((function(e){t.$message("提交评论出错！")})),!1)}}}),n=o,c=(s("9536"),s("2877")),r=Object(c["a"])(n,i,a,!1,null,"61c71bcc",null);e["a"]=r.exports},e643:function(t,e,s){},edd9:function(t,e,s){"use strict";var i=s("e643"),a=s.n(i);a.a},f3e8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0c90ed1c.09772ea2.js.map