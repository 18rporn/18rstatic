(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68ef9120"],{"0538f":function(t,e,i){"use strict";var o=i("44fd"),a=i.n(o);a.a},2591:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"thread_view"},[i("div",{staticClass:"row"},[t.topic_data?t._e():i("div",{staticClass:"col-9 pr-4 mpr-0",staticStyle:{"min-height":"500px"}},[t.load_error?i("div",[i("div",{staticClass:"card"},[i("div",{staticClass:"text-center p-3"},[t._v(t._s(t.load_error_text))])])]):i("div",{staticClass:"full-width"},[i("q-skeleton",{attrs:{height:"350px",square:""}})],1)]),t.topic_data?i("div",{staticClass:"col-9 pr-4 mpr-0"},[t.edit?i("view_edit",{attrs:{topic_data:t.topic_data}}):t._e(),i("div",{staticClass:"topic-detail card"},[i("div",{staticClass:"card-header media clearfix"},[i("div",{staticClass:"media-body"},[i("h1",{staticClass:"media-heading"},[t.forum_conf?i("router-link",{staticClass:"node",attrs:{to:"/forum/"+t.forum_conf.fid}},[t._v(" "+t._s(t.forum_conf.name)+" ")]):t._e(),i("span",{staticClass:"title"},[t.show_fanhao?i("span",{staticClass:"fanhao"},[t._v(t._s(t.show_fanhao))]):t._e(),t._v(" "+t._s(t.topic_data.title)+" ")])],1),i("div",{staticClass:"info"},[i("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.topic_data.user.uid}},[t._v(t._s(t.topic_data.user.username)+" ")]),i("span",{staticClass:"hidden-mobile"}),t._v(" · 发布于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.release_time)))]),t.topic_data.updated_time&&t.topic_data.updated_time>t.topic_data.release_time?i("span",[t._v(" · 更新于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.updated_time)))])]):t._e(),t._v(" · "+t._s(t.topic_data.view_count)+" 次阅读 ")],1)]),t.is_mobile()?t._e():i("div",{staticClass:"avatar media-right"},[i("router-link",{attrs:{title:"",to:"/user/"+t.topic_data.user.uid}},[i("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.topic_data.user)}})]),i("q-tooltip",[t._v(" "+t._s(t.topic_data.user.username)+" ")])],1)]),t.settoessence?i("div",{staticClass:"label-awesome"},[i("i",{staticClass:"fa fa-award awesome"}),t._v(" 本帖已被设为精华帖！ ")]):t._e(),i("div",{staticClass:"card-body  markdown-toc entry-content markdown ql-container ql-snowr"},[t._m(0),t.is_exist_video&&t.show_view_watch_limit?i("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.is_exist_video&&!t.show_view_watch_limit?i("view_video",{staticClass:"mb-2",attrs:{embed:!0,topic_data:t.topic_data}}):t._e(),i("view_content",{attrs:{topic_data:t.topic_data}})],1),i("div",{staticClass:"card-footer clearfix"},[i("view_buy",{ref:"view_buy",staticClass:"mb-4",attrs:{topic_data:t.topic_data}}),i("view_tab",{ref:"view_tab",staticClass:"mb-4",attrs:{topic_data:t.topic_data}})],1)]),t.edit?t._e():i("div",{staticClass:"card",attrs:{id:"replies"}},[t._m(1),i("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data&&!t.edit?i("div",{staticClass:"card",attrs:{id:"reply"}},[i("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e()],1):t._e(),i("div",{staticClass:"sidebar hidden-mobile col-3"},[i("div",{attrs:{id:"topic-sidebar","data-spy":"affix","data-offset-bottom":"65"}},[i("ads_box_list"),t._m(2)],1)])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toc-container dropdown ",staticStyle:{display:"block"}},[i("button",{staticClass:"btn btn-default none",attrs:{"data-toggle":"dropdown"}},[i("i",{staticClass:"fa fa-list"}),t._v(" 目录 ")]),i("div",{staticClass:"toc-panel dropdown-menu dropdown-menu-right"},[i("div",{staticClass:"list-container"},[i("ul",{staticClass:"list"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"items card-body none"},[i("div",{staticClass:"reply reply-deleted",attrs:{"data-id":"362718",id:"reply1"}},[i("div",{attrs:{id:"reply-362718","data-floor":"1"}},[i("div",{staticClass:"deleted text-center"},[t._v("1楼 已删除")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notify-updated"},[i("a",{staticClass:"update",attrs:{href:"#"}},[i("i",{staticClass:"fa fa-bell-o"}),t._v(" "),i("b",[t._v("有新回复！")]),t._v("点击这里立即载入")])])}],s=(i("b48a"),i("7bc9"),i("077f")),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"opts pl-0 pr-0"},[i("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_like},on:{click:t.on_tab_like}},[i("i",{staticClass:"fa fa-heart"}),t._v(" "),t.tabinfo.like_count>0?i("span",[t._v(t._s(t.tabinfo.like_count)+" 个赞")]):i("span",[t._v("赞")])]),t._m(0),i("a",{staticClass:"bookmark",class:{active:t.tabinfo.is_star},attrs:{title:"收藏"},on:{click:t.on_tab_star}},[i("i",{staticClass:"fa fa-bookmark"}),t._v(" "+t._s(t.tabinfo.is_star?"已收藏":"收藏")+" ")]),i("a",{staticClass:"bookmark",attrs:{title:t.langloader("report")},on:{click:t.on_tab_star}},[i("i",{staticClass:"fas fa-flag"}),t._v(" "+t._s(t.langloader("report"))+" ")]),t.$store.state.hasLogin&&t.$store.state.user.userinfo.uid==t.topic_data.user.uid||t.is_manager?i("span",{staticClass:"pull-right opts"},[t.is_manager?i("thread_manager",{attrs:{topic_data:t.topic_data}}):t._e(),i("router-link",{staticClass:"fa fa-edit",attrs:{title:"修改本帖",to:"/release/thread?edit_id="+t.topic_data.id}},[i("q-tooltip",[t._v(" 修改本帖 ")])],1),i("a",{staticClass:"fa fa-trash",attrs:{title:"删除本帖",rel:"nofollow"}},[i("q-tooltip",[t._v(" 删除本帖 ")])],1)],1):t._e()])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"follow none",attrs:{href:"#"}},[i("i",{staticClass:"fa fa-eye"}),t._v(" 关注")])}],c=i("59d9"),_=i("c286"),l={name:"tab",mixins:[s["a"],c["a"]],components:{thread_manager:_["a"]},data:function(){return{defalut_tabinfo:{is_like:!1,is_star:!1,like_count:0},like_active:void 0,star_active:void 0,tabinfo:Object.assign({},this.defalut_tabinfo)}},props:{topic_data:{}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}},created:function(){var t=this;window._tab=this,this.$store.state.hasLogin&&this.get_tabinfo({id:this.topic_data.id,cb:this.on_load_tabinfo}),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.tabinfo=Object.assign({},t.defalut_tabinfo),console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$nextTick((function(){console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(e){t.$store.state.hasLogin&&t.get_tabinfo({id:t.topic_data.id,cb:t.on_load_tabinfo})}))},methods:{on_load_tabinfo:function(t){this.tabinfo=t,this.$forceUpdate()},on_tab_like:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var e={id:this.topic_data.id,action:!this.tabinfo.is_like};this.$axios.post("/app/topic/like",e).then((function(e){console.log("topic like:",e),t.tabinfo.is_like=!t.tabinfo.is_like,t.tabinfo.is_like?t.tabinfo.like_count+=1:t.tabinfo.like_count-=1})).catch((function(t){}))},on_tab_star:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var e={id:this.topic_data.id,action:!this.tabinfo.is_star};this.$axios.post("/app/topic/star",e).then((function(e){console.log("topic star:",e),t.tabinfo.is_star=!t.tabinfo.is_star})).catch((function(t){}))}},updated:function(){this.$nextTick((function(){console.log("tab call tab updated")}))},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()}},d=l,p=(i("8573"),i("2877")),u=i("fe09"),v=Object(p["a"])(d,n,r,!1,null,"0e19c18d",null),h=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QTooltip:u["I"]});var f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.topic_data?i("div",{attrs:{id:"buy"}},[i("buy_theav",{attrs:{topic_data:t.topic_data}})],1):t._e()},m=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.topic_data.buy_theav&&Object.keys(t.topic_data.buy_theav).length>0?i("div",[t.$store.state.hasLogin?t._e():i("div",[i("div",{staticClass:"label-awesome"},[i("i",{staticClass:"fa fa-award awesome"}),t._v("尚未登录，注册用户方能下载 "),t.topic_data.buy_theav.price>0?i("span",{staticClass:"ml-1 mr-1 font-weight-bold buy_price none"},[t._v(t._s(t.topic_data.buy_theav.price))]):t._e(),i("v-btn",{staticClass:"mr-2",attrs:{color:"info",outlined:""},on:{click:function(e){return t.go("/user/login")}}},[t._v(" 登录 ")]),i("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(e){return t.go("/user/register")}}},[t._v(" 注册 ")])],1)]),t.$store.state.hasLogin?i("div",[t.$store.state.user.userinfo.is_vip?i("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red accent-4",elevation:"2"}},[i("p",{staticClass:"mb-2"},[t._v(" VIP用户免费下载 ")]),i("p",[i("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[i("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),i("p",[t.torrent_url?i("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[i("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e(),t.buy_items.buy_theav?i("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red"}},[i("p",{staticClass:"mb-2"},[t._v(" 已购买此信息 ")]),i("p",[i("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[i("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),i("p",[t.torrent_url?i("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[i("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e()],1):t._e(),t.$store.state.hasLogin&&t.topic_data.buy_theav.price>0&&!t.$store.state.user.userinfo.is_vip&&!t.buy_items.buy_theav?i("div",[i("q-dialog",{attrs:{position:"top"},model:{value:t.buy_confirm,callback:function(e){t.buy_confirm=e},expression:"buy_confirm"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("span",{staticClass:"q-ml-sm"},[i("v-icon",{attrs:{size:"small",color:"grey",dark:""}},[t._v("lock")]),t._v(" 开通VIP,享受高速免费下载。 ")],1)]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.open_vip"),color:"primary"},on:{click:function(e){return t.go("/buy/vip")}}})],1)],1)],1),i("q-dialog",{model:{value:t.buy_gold_or_vip_confirm,callback:function(e){t.buy_gold_or_vip_confirm=e},expression:"buy_gold_or_vip_confirm"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.$l("thread.notengough_gold_look")))])]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.buy"),color:"primary"},on:{click:function(e){return t.go("/buy/vip")}}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.gold"),color:"primary"},on:{click:function(e){return t.go("/buy/gold")}}})],1)],1)],1),i("v-alert",{attrs:{border:"left","colored-border":"",color:"red accent-4",elevation:"2",id:"video-download"}},[i("p",{staticClass:"mb-2"},[t.torrent_url?i("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url},on:{click:t.download_torrent_event}},[i("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()]),i("p",{staticClass:"mb-2 none"},[t._v(" 隐藏下载内容 .需要消耗"),i("span",{staticClass:"font-weight-bold text-primary"},[t._v(t._s(t.topic_data.buy_theav.price))]),t._v("金币 ")]),i("div",{staticClass:"underline mb-2"},[i("span",{staticClass:"file_name",on:{click:t.on_click_file}},[i("span",{staticClass:"font-weight-bold"},[t._v("[高速下载]")]),t._v(t._s(t.topic_data.title)+".mp4")])]),i("div",[t._v("升级成为VIP，享受高速下载。")])]),t.$store.state.hasLogin?i("div",{staticClass:"gold pr-4 pl-4 none"},[i("span",[t._v("金币:")]),i("span",[t._v(t._s(t.$store.state.user.userinfo.gold))]),i("span",{staticClass:"ml-3"},[i("router-link",{attrs:{to:"/buy/gold",target:"_blank"}},[t._v("购买金币")])],1),i("span",{staticClass:"ml-3"},[i("router-link",{attrs:{to:"/buy/vip",target:"_blank"}},[t._v("升级VIP,不限查看")])],1)]):t._e(),t.$store.state.hasLogin?i("div",{staticClass:"xxbtn cl pr-4 pl-4 "},[i("q-btn",{staticClass:"float-right",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.$l("vip.open_vip")},on:{click:t.buy_event}},[t.not_engout_gold?i("q-tooltip",[t._v(" $l('vip.open_vip') ")]):t._e()],1),i("q-btn",{staticClass:"float-right none",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look")},on:{click:t.buy_event}},[t.not_engout_gold?i("q-tooltip",[t._v(" "+t._s(t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look"))+" ")]):t._e()],1)],1):t._e()],1):t._e()]):t._e()},b=[],y={name:"buy_theav",mixins:[c["a"]],props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var e=this.topic_data.video_info.mktorrents;if(e&&e.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,e={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:e}).then((function(e){console.log("topci/buy/item:",e);var i=e.data.buy_item;i&&(t.buy_items.buy_theav=i,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,e={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",e).then((function(e){var i=e.data;console.log("on_buy_topic response_data:",i);var o=i.buy_content;o&&(t.buy_content=o);var a=i.buy_theav;a&&(t.buy_items.buy_theav=a),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0},on_click_file:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0}}},w=y,C=i("6544"),$=i.n(C),k=i("0798"),x=i("8336"),q=i("132d"),j=Object(p["a"])(w,g,b,!1,null,"779f4948",null),O=j.exports;j.options.components=Object.assign(Object.create(j.options.components||null),j.options.components||{},{QDialog:u["l"],QCard:u["f"],QCardSection:u["h"],QCardActions:u["g"],QBtn:u["e"],QTooltip:u["I"]}),j.options.directives=Object.assign(Object.create(j.options.directives||null),j.options.directives||{},{ClosePopup:u["a"]}),$()(j,{VAlert:k["a"],VBtn:x["a"],VIcon:q["a"]});var L={name:"buy",mixins:[c["a"]],components:{buy_theav:O},props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var e=this.topic_data.video_info.mktorrents;if(e&&e.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,e={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:e}).then((function(e){console.log("topci/buy/item:",e);var i=e.data.buy_item;i&&(t.buy_items.buy_theav=i,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,e={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",e).then((function(e){var i=e.data;console.log("on_buy_topic response_data:",i);var o=i.buy_content;o&&(t.buy_content=o);var a=i.buy_theav;a&&(t.buy_items.buy_theav=a),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()},on_click_file:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()}}},E=L,S=(i("bd30"),Object(p["a"])(E,f,m,!1,null,null,null)),T=S.exports;S.options.components=Object.assign(Object.create(S.options.components||null),S.options.components||{},{QColor:u["k"]});var N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.show_what,{tag:"component"})},Q=[],A=(i("c975"),i("fb6a"),i("a026")),I={name:"view_content",props:{topic_data:{}},data:function(){return{show_what:"empty_view"}},created:function(){var t=this;console.log("create topic data"),this.$nextTick((function(){console.log("[content]this.topic_data:",t.topic_data);var e={topic_data:t.topic_data},i="";i=t.topic_data.content.indexOf("data-src")>=0?"<div class='ql-editor' v-lazy-container=\"{ selector: 'img' }\">"+t.topic_data.content+"</div>":"<div class='ql-editor' >"+t.topic_data.content+"</div>",console.log("template_string:",i),A["a"].component("view_content_component",{template:i,data:function(){return Object.assign(e,{photo_min_height:"260px"})},computed:{screen_shots_list:function(){for(var t=[],e=this.topic_data.video_info.online_videos[0],i=e.screenshots.list.slice(0,6),o=e.hash_id,a=0;a<i.length;++a){var s=this.geenrate_screenshot_url(e.space_name,o,i[a]);t.push(s)}return t},cover_image_url:function(){var t=this.topic_data.video_info.online_videos[0],e=t.hash_id;return this.generate_cover_url(t.space_name,e)}},methods:{on_image_error:function(){}}}),t.show_what="view_content_component"}))},methods:{},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},D=I,U=(i("d409"),Object(p["a"])(D,N,Q,!1,null,null,null)),V=U.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{staticClass:"edit",attrs:{text:"",color:"info"}},[i("h5",[t._v("处于待审核状态，未发布")]),t.buy_contents&&t.buy_contents.length>0?i("div",{staticClass:"mt-3   buy_contents"},[i("h6",[t._v(t._s(t.$l("thread.attach_content"))+":")]),t._l(t.buy_contents,(function(e,o){return i("v-row",{key:o},[i("v-col",[t._v(" * "),e.gold?i("span",[t._v("价格:"),i("span",{staticClass:"text-theme-color"},[t._v(t._s(e.gold)+"金币")])]):t._e(),i("span",{staticClass:"ml-2"},[t._v(t._s(e.content))]),e.upload_files&&e.upload_files.length>0?i("span",{staticClass:"ml-2 text-theme-color"},[t._v(" "+t._s(e.upload_files.length)+"个文件 ")]):t._e(),i("span",[i("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(i){return t.on_show_attach_content_dialog(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" 查看 ")],1)],1)])],1)}))],2):t._e(),t.is_manager?i("v-row",[i("div",{staticClass:"mt-3"},[i("v-btn",{attrs:{color:"white darken-1 mr-2 ml-1",text:""},on:{click:t.on_pass_verify}},[t._v("通过审核 ")]),i("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:t.on_not_verify}},[t._v("不通过 ")])],1)]):t._e(),i("q-separator",{staticClass:"mt-4"}),t.topic_verify?i("div",{staticClass:"mt-3"},["pass_verify"==t.topic_verify.action?i("p",{staticClass:"mb-2"},[t._v("已设置: "),i("span",[t._v("通过审核")]),t.topic_verify.reward_gold?i("span",{staticClass:"ml-2"},[t._v("奖励金币:"+t._s(t.topic_verify.reward_gold))]):t._e()]):t._e(),"not_verify"==t.topic_verify.action?i("p",{staticClass:"mb-2"},[t._v(" 已设置: "),i("span",{staticClass:"font-weight-bold"},[t._v("未通过审核")]),i("span",{staticClass:"ml-2"},[t._v("原因:"),i("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.topic_verify.reason))])])]):t._e(),i("p",[t._v("如果需要修改，请重新提交")])]):t._e(),i("q-dialog",{model:{value:t.not_verify_dialog,callback:function(e){t.not_verify_dialog=e},expression:"not_verify_dialog"}},[i("q-card",{staticStyle:{"min-width":"400px"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("不通过审核")])]),i("q-separator"),i("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[i("q-input",{attrs:{label:"原因"},model:{value:t.not_verify.reason,callback:function(e){t.$set(t.not_verify,"reason",e)},expression:"not_verify.reason"}})],1),i("q-separator"),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_not_verify}})],1)],1)],1),i("q-dialog",{model:{value:t.pass_verify_dialog,callback:function(e){t.pass_verify_dialog=e},expression:"pass_verify_dialog"}},[i("q-card",{staticStyle:{"min-width":"400px"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("通过审核")])]),i("q-separator"),i("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[i("q-input",{attrs:{label:"奖励金币",type:"number"},model:{value:t.pass_verify.reward_gold,callback:function(e){t.$set(t.pass_verify,"reward_gold",e)},expression:"pass_verify.reward_gold"}})],1),i("q-separator"),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_pass_verify}})],1)],1)],1)],1)},R=[],F={name:"edit",props:{topic_data:{}},data:function(){return{buy_contents:void 0,pass_verify_dialog:!1,not_verify_dialog:!1,not_verify:{reason:"",action_uid:this.$store.state.user.userinfo.uid},pass_verify:{action_uid:this.$store.state.user.userinfo.uid,reward_gold:0},topic_verify:void 0}},created:function(){this.buy_contents=this.topic_data.buy_contents,this.load_topic_verify()},methods:{on_not_verify:function(){this.not_verify_dialog=!0},on_pass_verify:function(){this.pass_verify_dialog=!0},on_dialog_pass_verify:function(){var t=this,e=Object.assign({},this.pass_verify);console.log("[on_dialog_pass_verify]:",e),e["topic_id"]=this.topic_data.id,e["action"]="pass_verify",this.$axios.post("/app/topic/verify",e).then((function(i){var o=i.data;console.log("on_buy_topic response_data:",o),t.set_topic_verify(e)}))},on_dialog_not_verify:function(){var t=this,e=Object.assign({},this.not_verify);console.log("[on_dialog_pass_verify]:",e),e["topic_id"]=this.topic_data.id,e["action"]="not_verify",this.$axios.post("/app/topic/verify",e).then((function(i){var o=i.data;console.log("on_buy_topic response_data:",o),t.set_topic_verify(e)}))},load_topic_verify:function(){var t=this;this.$axios.get("/app/topic/verify",{params:{topic_id:this.topic_data.id}}).then((function(e){var i=e.data;console.log("load_topic_verify topic_verify:",i),t.set_topic_verify(i)}))},set_topic_verify:function(t){if(t){this.topic_verify=t;var e=t.action;this[e];t}},on_show_attach_content_dialog:function(t){var e=this;console.log("buy_content:",t);var i={price:0,content:"",upload_files:[]};t||(t=Object.assign({},i),t.upload_files=[]),t&&(this.buy_content=t),this.show_attach_content_dialog=!1,this.$nextTick((function(){e.show_attach_content_dialog=!0,e.$forceUpdate()})),this.$forceUpdate()}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},M=F,G=(i("0538f"),i("62ad")),B=i("0fd9"),z=Object(p["a"])(M,P,R,!1,null,"7658b0e1",null),H=z.exports;z.options.components=Object.assign(Object.create(z.options.components||null),z.options.components||{},{QSeparator:u["z"],QDialog:u["l"],QCard:u["f"],QCardSection:u["h"],QInput:u["p"],QCardActions:u["g"],QBtn:u["e"]}),z.options.directives=Object.assign(Object.create(z.options.directives||null),z.options.directives||{},{ClosePopup:u["a"]}),$()(z,{VAlert:k["a"],VBtn:x["a"],VCol:G["a"],VIcon:q["a"],VRow:B["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",[t.topic_data&&t.topic_data.video_info?i("div",[t.is_ios()?i("div",{staticClass:"ios_player",attrs:{id:"ios_player"}},[i("video",{attrs:{id:"orginal_video_player",preload:"auto",width:"100%",height:"100%",controls:"",crossorigin:"","webkit-playsinline":"",playsinline:"",poster:t.get_cover_image_url(),autoplay:""}},[i("source",{attrs:{src:t.get_m3u8_url(),type:"application/x-mpegURL"}})])]):i("div",{directives:[{name:"show",rawName:"v-show",value:t.player,expression:"player"}]},[i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hls.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/plyr/plyr.js"}}),i("remote-script",{attrs:{type:"text/javascript",charset:"UTF-8",src:"https://"+t.$web_conf.set_host+"/static/js/lib/hammer.min.js"}}),i("div",{attrs:{id:"video-player-container"}},[i("video",{attrs:{id:"video-player",preload:"auto","webkit-playsinline":"true",playsinline:"true",controls:"",crossorigin:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show_video_percent,expression:"is_show_video_percent"}],ref:"video_percent"},[i("q-circular-progress",{staticClass:" video_percent",attrs:{"show-value":"","font-size":"12px",value:t.video_percent,size:"50px",thickness:.22,color:"red","track-color":"black"}},[t._v(" "+t._s(t.video_percent)+"% ")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_touch_play_progress_flag,expression:"show_touch_play_progress_flag"}],ref:"touch_play_progress",staticClass:"touch-play-progress",attrs:{id:"touch-play-progress"}},[i("span",{staticClass:"touch-play-time"},[t._v(t._s(t.touch_play_time))]),t._v("/"),i("span",{staticClass:"current-play-time"},[t._v(t._s(t.touch_current_play_time))])])])],1)]):t._e(),t.player||t.is_ios()?t._e():i("div",[i("q-skeleton",{attrs:{height:"320px",square:""}})],1),!t.embed&&t.online_video?i("video_tab",{staticClass:"mt-2 mb-2",attrs:{online_video:t.online_video,topic_data:t.topic_data}}):t._e(),!t.embed&&t.online_video&&t.is_jav_video?i("video_jav",{attrs:{topic_data:t.topic_data,online_video:t.online_video}}):t._e(),!t.embed&&t.online_video?i("video_servers",{attrs:{topic_data:t.topic_data,online_video:t.online_video,select_server_name:t.select_server_name},on:{"update:select_server_name":function(e){t.select_server_name=e}}}):t._e(),i("alert_windows")],1):t._e()},J=[],W=(i("b680"),i("d3b7"),i("1bc8")),K=i("717a"),Y=i("21d5"),Z=i("5269");i.e("chunk-7722135a").then(i.t.bind(null,"ccd3",7)),i.e("chunk-74917cdf").then(i.t.bind(null,"637d",7));var tt={name:"video_watch",components:{video_tab:W["a"],video_jav:K["a"],video_servers:Y["a"],alert_windows:Z["a"]},props:{topic_data:void 0,show_title:void 0,embed:void 0},data:function(){return{show:!0,player:void 0,video_ele:void 0,video_percent:void 0,video_status:void 0,online_video:void 0,select_server_name:void 0,show_touch_play_progress_flag:!1,touch_play_time:"",touch_current_play_time:""}},created:function(){this.select_server_name=localStorage.getItem("select_server_name"),this.select_server_name||(this.select_server_name="cdn_xxxhostcf"),console.log("watch_video create"),this.init()},computed:{is_jav_video:function(){var t=this.topic_data.video_info;return 2===t["av_data_type"]},is_show_video_percent:function(){return!(isNaN(this.video_percent)||!this.video_status)&&("playing"!=this.video_status&&"pause"!=this.video_status&&"canplay"!=this.video_status)}},watch:{select_server_name:function(t){console.log("select_server_name change:",t),this.on_switch_server(t)}},methods:{init:function(){this.online_video=this.topic_data.video_info.online_videos[0],this.$nextTick(this.init_video_player),window._t=this},init_video_player:function(){var t=this;if(this.is_ios())this.player=document.querySelector("#orginal_video_player"),this.player.addEventListener("loadeddata",(function(){console.log("on loadeddata")}),!1);else{if(!window.Plyr||!window.Hls)return setTimeout(this.init_video_player,100);(function(t,e){var i=new XMLHttpRequest,o=t.body;i.open("GET",e,!0),i.send(),i.onload=function(){var e=t.createElement("div");e.setAttribute("hidden",""),e.innerHTML=i.responseText,o.insertBefore(e,o.childNodes[0])}})(document,"/static/images/plyr.svg?123");var e="video-player";if(this.video_ele=document.querySelector("#video-player-container video"),!this.video_ele)return setTimeout(this.init_video_player,100);this.player=new window.Plyr("#"+e,{captions:{active:!0,update:!0,language:"en"}});var i=window.Hls,o=i.isSupported();if(o){var a=new i({});a.loadSource(this.get_m3u8_url()),a.attachMedia(this.video_ele),a.on(i.Events.MANIFEST_PARSED,(function(t){console.log("MANIFEST_PARSED e:",t)})),window.hls=a,a.on(i.Events.FRAG_LOAD_PROGRESS,(function(e,i){i.frag;var o=i.stats,a=parseInt(o.loaded/o.total*100);isNaN(a)||(t.video_percent=a)})),a.on(i.Events.FRAG_LOADING,(function(t,e){var i=e.frag;console.log("FRAG_LOADING evnet call:",t,i)})),a.on(i.Events.FRAG_LOADED,(function(t,e){var i=e.frag;console.log("FRAG_LOADED evnet call:",t,i)}));a.p2pEngine;this.video_ele.addEventListener("waiting",(function(e){t.video_status="waiting"}),!0),this.video_ele.addEventListener("seeking",(function(e){t.video_status="seeking",t.video_percent=0}),!0),this.video_ele.addEventListener("canplay",(function(e){t.video_status="canplay"}),!0),this.video_ele.addEventListener("playing",(function(e){t.video_status="playing",t.video_percent=0}),!0),this.video_ele.addEventListener("pause",(function(e){t.video_status="pause",t.video_percent=0}),!0)}var s=this.get_cover_image_url();console.log("cover_image_url:",s),this.player.poster=s,this.add_touch();var n=document.querySelector(".plyr");n.appendChild(this.$refs["touch_play_progress"]),n.appendChild(this.$refs["video_percent"])}},get_cover_image_url:function(){var t=this.generate_cover_url(this.online_video.space_name,this.online_video.hash_id);return console.log("cover_image_url:",t),t},get_m3u8_url:function(){var t="/video/"+this.topic_data.video_info.online_videos[0].hash_id+".m3u8?video_server="+this.select_server_name,e=window.location.host;return e.indexOf("localhost")>=0&&(t="https://"+this.$debug_host+t),t},on_switch_server:function(t){var e=this;this.select_server_name=t,localStorage.setItem("select_server_name",this.select_server_name),this.show=!1,this.$nextTick((function(){e.show=!0,e.init(),e.$nextTick((function(){var t=function(){e.player?e.player.play():setTimeout(e.auto_play,200)};t()})),e.$ga&&e.$ga.event({eventCategory:"on_switch_server",eventAction:"switch",eventLabel:e.select_server_name,eventValue:e.$store.state.hasLogin?"1":"2"})}))},add_touch:function(){var t=this;if(console.log("call add_touch"),!window.Hammer)return setTimeout(this.add_touch,500);function e(t,e){return(t/Math.pow(10,e)).toFixed(e).substr(2)}var i=function(t,i){t=t<0?0:t;var o=Math.floor(t%60),a=Math.floor(t/60%60),s=Math.floor(t/3600),n=Math.floor(i/60%60),r=Math.floor(i/3600);return(isNaN(t)||t===1/0)&&(s=a=o="-"),s=s>0||r>0?s:"0",a=(s||n>=10)&&a<10?"0"+a:a,o=o<10?"0"+o:o,e(s,2)+":"+e(a,2)+":"+e(o,2)},o=i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return o(t,e)}var s=function(e){var i=t.player.duration,o=t.player.currentTime,s=o+e/document.body.clientWidth*420;return s>i&&(s=i),s<0&&(s=0),console.log("[show_touch_play_progress]:",i),t.show_touch_play_progress_flag=!0,t.touch_current_play_time=a(i),t.touch_play_time=a(s),s},n=function(){t.show_touch_play_progress_flag=!1},r=function(){var e=void 0,i=new window.Hammer(document.getElementById("video-player-container"));i.on("pan",(function(t){console.log("pan event:",t),"panright"==t.additionalEvent&&t.deltaX>35&&(e=s(t.deltaX)),"panleft"==t.additionalEvent&&t.deltaX<-35&&(e=s(t.deltaX))})),i.on("panend",(function(i){n(),e&&(t.player.currentTime=e,t.player.play(),e=void 0)})),i.on("pancancel",(function(){n()}))};r()}}},et=tt,it=(i("9688"),Object(p["a"])(et,X,J,!1,null,"701334fe",null)),ot=it.exports;it.options.components=Object.assign(Object.create(it.options.components||null),it.options.components||{},{QCircularProgress:u["j"],QSkeleton:u["A"]});var at=i("c96ad"),st=i("d5dc"),nt=i("227a"),rt={name:"threadview",mixins:[s["a"]],components:{view_tab:h,view_buy:T,view_video:ot,view_content:V,view_edit:H,comment_reply:st["a"],comment_list:nt["a"],view_watch_limit:at["a"]},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,load_error:!1,load_error_text:"加载失败，请刷新网站或者稍后再试。"}},created:function(){var t=this,e=this.$route.params.id,i=this.getUrlVars();i.edit&&console.log("处于编辑的帖子"),this.get_topic({id:e,from_cache:this.from_cache(),edit:i.edit,cb:this.on_load_topic_data,error_cb:this.on_load_error}),window._t=this,this.listener_loginout=this.$hub.on("event:loginout",(function(e){console.log("event:loginout",e),t.$forceUpdate()})),this.listener_login=this.$hub.on("event:login",(function(e){console.log("event:login",e),t.$forceUpdate()}))},methods:{on_load_error:function(t){console.log("on_load_error:",t),this.load_error=!0,404==t.code&&(this.load_error_text="已删除或者不存，有问题请联系我们"),500==t.code&&(this.load_error_text="加载失败，请刷新网站或者稍后再试。"),this.set_title(this.load_error_text)},on_load_topic_data:function(t,e){if(console.log("[on_load_topic_data]topic_data:",t," edit:",e),this.topic_data=t,this.set_title(t.title),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var i=this.topic_data.video_info.online_videos[0],o=i.hash_id;this.$store.state.user_visit.push(o)}e&&(this.edit=e)}},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()},computed:{is_exist_video:function(){return this.topic_data&&this.topic_data.video_info},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return console.log("[show_view_watch_limit]:",t),!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)},show_fanhao:function(){try{if(this.topic_data.video_info&&2==this.topic_data.video_info.av_data_type)return this.topic_data.video_info.fanhao}catch(t){console.error(t)}},settoessence:function(){if(this.topic_data.manager_set)return this.topic_data.manager_set.settoessence}}},ct=rt,_t=Object(p["a"])(ct,o,a,!1,null,"2679d561",null);e["default"]=_t.exports;_t.options.components=Object.assign(Object.create(_t.options.components||null),_t.options.components||{},{QSkeleton:u["A"],QTooltip:u["I"]})},3035:function(t,e,i){},"30ab":function(t,e,i){},"44fd":function(t,e,i){},5269:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{attrs:{id:"alert_windows"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("q-card",{staticClass:"up-dialog-auto alert_windows"},[i("q-card-section",{staticClass:"row items-center q-pb-none"},[i("div",{staticClass:"text-h5"},[t._v(t._s(t.ads_conf["text"]))]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",size:"sm",flat:"",round:"",dense:""}})],1),i("q-card-actions",{attrs:{align:"right"}},[i("a",{attrs:{href:t.ads_conf["url"],target:"_blank"}},[i("img",{staticStyle:{"max-width":"500px"},attrs:{src:t.ads_conf["image"]}})])])],1)],1)},a=[],s=(i("b64b"),{name:"alert_windows",data:function(){return{ads_conf:void 0,show:!1}},created:function(){if(!this.$store.state.user.userinfo.is_vip){var t=localStorage.getItem("alert_window:time"),e=(new Date).getTime()/1e3;t=parseInt(t);var i=!0;if(isNaN(t)||e-t<600&&(i=!1),i){var o=this.$ads_object["alert.dialog"];console.log("alert_dialog:",o),o&&(this.ads_conf=o[Object.keys(o)[0]],console.log("this.ads_conf:",this.ads_conf),this.show=!0,localStorage.setItem("alert_window:time",e))}}}}),n=s,r=i("2877"),c=i("fe09"),_=Object(r["a"])(n,o,a,!1,null,"b2f0ca6a",null);e["a"]=_.exports;_.options.components=Object.assign(Object.create(_.options.components||null),_.options.components||{},{QDialog:c["l"],QCard:c["f"],QCardSection:c["h"],QSpace:c["B"],QBtn:c["e"],QCardActions:c["g"]}),_.options.directives=Object.assign(Object.create(_.options.directives||null),_.options.directives||{},{ClosePopup:c["a"]})},8573:function(t,e,i){"use strict";var o=i("30ab"),a=i.n(o);a.a},9688:function(t,e,i){"use strict";var o=i("3035"),a=i.n(o);a.a},bd30:function(t,e,i){"use strict";var o=i("e36d"),a=i.n(o);a.a},d11d:function(t,e,i){},d409:function(t,e,i){"use strict";var o=i("d11d"),a=i.n(o);a.a},e36d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-68ef9120.543c5865.js.map