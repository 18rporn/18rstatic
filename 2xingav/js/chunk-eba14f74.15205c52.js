(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eba14f74"],{"0538f":function(t,e,o){"use strict";var i=o("44fd"),a=o.n(i);a.a},2591:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"thread_view"},[o("div",{staticClass:"row"},[t.topic_data?t._e():o("div",{staticClass:"col-9 pr-4 mpr-0",staticStyle:{"min-height":"500px"}},[t.load_error?o("div",[o("div",{staticClass:"card"},[o("div",{staticClass:"text-center p-3"},[t._v(t._s(t.load_error_text))])])]):o("div",{staticClass:"full-width"},[o("q-skeleton",{attrs:{height:"350px",square:""}})],1)]),t.topic_data?o("div",{staticClass:"col-9 pr-4 mpr-0"},[t.edit?o("view_edit",{attrs:{topic_data:t.topic_data}}):t._e(),o("div",{staticClass:"topic-detail card"},[o("div",{staticClass:"card-header media clearfix"},[o("div",{staticClass:"media-body"},[o("h1",{staticClass:"media-heading"},[t.forum_conf?o("router-link",{staticClass:"node",attrs:{to:"/forum/"+t.forum_conf.fid}},[t._v(" "+t._s(t.forum_conf.name)+" ")]):t._e(),o("span",{staticClass:"title"},[t.show_fanhao?o("span",{staticClass:"fanhao"},[t._v(t._s(t.show_fanhao))]):t._e(),t._v(" "+t._s(t.topic_data.title)+" ")])],1),o("div",{staticClass:"info"},[o("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.topic_data.user.uid}},[t._v(t._s(t.topic_data.user.username)+" ")]),o("span",{staticClass:"hidden-mobile"}),t._v(" · 发布于 "),o("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.release_time)))]),t.topic_data.updated_time&&t.topic_data.updated_time>t.topic_data.release_time?o("span",[t._v(" · 更新于 "),o("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.updated_time)))])]):t._e(),t._v(" · "+t._s(t.topic_data.view_count)+" 次阅读 ")],1)]),t.is_mobile()?t._e():o("div",{staticClass:"avatar media-right"},[o("router-link",{attrs:{title:"",to:"/user/"+t.topic_data.user.uid}},[o("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.topic_data.user)}})]),o("q-tooltip",[t._v(" "+t._s(t.topic_data.user.username)+" ")])],1)]),t.settoessence?o("div",{staticClass:"label-awesome"},[o("i",{staticClass:"fa fa-award awesome"}),t._v(" 本帖已被设为精华帖！ ")]):t._e(),o("div",{staticClass:"card-body  markdown-toc entry-content markdown ql-container ql-snowr"},[t._m(0),t.is_exist_video&&t.show_view_watch_limit?o("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.is_exist_video&&!t.show_view_watch_limit?o("view_video",{staticClass:"mb-2",attrs:{embed:!0,topic_data:t.topic_data}}):t._e(),o("view_content",{attrs:{topic_data:t.topic_data}})],1),o("div",{staticClass:"card-footer clearfix"},[o("view_buy",{ref:"view_buy",staticClass:"mb-4",attrs:{topic_data:t.topic_data}}),o("view_tab",{ref:"view_tab",staticClass:"mb-4",attrs:{topic_data:t.topic_data}})],1)]),t.edit?t._e():o("div",{staticClass:"card",attrs:{id:"replies"}},[t._m(1),o("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data&&!t.edit?o("div",{staticClass:"card",attrs:{id:"reply"}},[o("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e()],1):t._e(),o("div",{staticClass:"sidebar hidden-mobile col-3"},[o("div",{attrs:{id:"topic-sidebar","data-spy":"affix","data-offset-bottom":"65"}},[o("ads_box_list"),t._m(2)],1)])])])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toc-container dropdown ",staticStyle:{display:"block"}},[o("button",{staticClass:"btn btn-default none",attrs:{"data-toggle":"dropdown"}},[o("i",{staticClass:"fa fa-list"}),t._v(" 目录 ")]),o("div",{staticClass:"toc-panel dropdown-menu dropdown-menu-right"},[o("div",{staticClass:"list-container"},[o("ul",{staticClass:"list"})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items card-body none"},[o("div",{staticClass:"reply reply-deleted",attrs:{"data-id":"362718",id:"reply1"}},[o("div",{attrs:{id:"reply-362718","data-floor":"1"}},[o("div",{staticClass:"deleted text-center"},[t._v("1楼 已删除")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notify-updated"},[o("a",{staticClass:"update",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-bell-o"}),t._v(" "),o("b",[t._v("有新回复！")]),t._v("点击这里立即载入")])])}],s=(o("b48a"),o("7bc9"),o("077f")),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"opts pl-0 pr-0"},[o("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_like},on:{click:t.on_tab_like}},[o("i",{staticClass:"fa fa-heart"}),t._v(" "),t.tabinfo.like_count>0?o("span",[t._v(t._s(t.tabinfo.like_count)+" 个赞")]):o("span",[t._v("赞")])]),t._m(0),o("a",{staticClass:"bookmark",class:{active:t.tabinfo.is_star},attrs:{title:"收藏"},on:{click:t.on_tab_star}},[o("i",{staticClass:"fa fa-bookmark"}),t._v(" "+t._s(t.tabinfo.is_star?"已收藏":"收藏")+" ")]),o("a",{staticClass:"bookmark",attrs:{title:t.langloader("report")},on:{click:t.on_tab_star}},[o("i",{staticClass:"fas fa-flag"}),t._v(" "+t._s(t.langloader("report"))+" ")]),t.$store.state.hasLogin&&t.$store.state.user.userinfo.uid==t.topic_data.user.uid||t.is_manager?o("span",{staticClass:"pull-right opts"},[t.is_manager?o("thread_manager",{attrs:{topic_data:t.topic_data}}):t._e(),o("router-link",{staticClass:"fa fa-edit",attrs:{title:"修改本帖",to:"/release/thread?edit_id="+t.topic_data.id}},[o("q-tooltip",[t._v(" 修改本帖 ")])],1),o("a",{staticClass:"fa fa-trash",attrs:{title:"删除本帖",rel:"nofollow"}},[o("q-tooltip",[t._v(" 删除本帖 ")])],1)],1):t._e()])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"follow none",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-eye"}),t._v(" 关注")])}],c=o("59d9"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{title:"",rel:"nofollow"}},[o("i",{staticClass:"fas fa-ellipsis-h"}),o("q-menu",[o("q-list",{staticStyle:{"min-width":"100px"}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[o("q-item-section",[t._v("设置为热门")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_top(Boolean(!t.topic_data.manager_set.settotop))}}},[o("q-item-section",[t._v(t._s(t.topic_data.manager_set.settotop?t.$l("thread.unsettotop"):t.$l("thread.settotop"))+" ")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_essence(Boolean(!t.topic_data.manager_set.settoessence))}}},[o("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.settoessence?t.$l("thread.unsettoessence"):t.$l("thread.settoessence"))+" ")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_carousel(Boolean(!t.topic_data.manager_set.setcarousel))}}},[o("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setcarousel?t.$l("thread.unsetcarousel"):t.$l("thread.setcarousel"))+" ")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.set_to_idnextop(Boolean(!t.topic_data.manager_set.setindextop))}}},[o("q-item-section",[t._v(" "+t._s(t.topic_data.manager_set.setindextop?"取消首页顶部":"设置首页顶部")+" ")])],1),o("q-separator"),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[o("q-item-section",[t._v("删除")])],1)],1)],1)],1)},l=[],d={name:"thread_manager",props:{topic_data:{}},destroyed:function(){this.listener_loginout.off(),this.listener_login.off()},created:function(){var t=this;this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.topic_data&&(this.topic_data.manager_set||(this.topic_data.manager_set={}))},methods:{set_to_idnextop:function(t){var e=this,o={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setindextop",o).then((function(t){var o=t.data.setindextop;e.topic_data.manager_set.setindextop=o,e.$forceUpdate()}))},set_to_carousel:function(t){var e=this,o={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setcarousel",o).then((function(t){console.log("setcarousel response:",t);var o=t.data.setcarousel;e.topic_data.manager_set.setcarousel=o,e.$forceUpdate()}))},set_to_essence:function(t){var e=this,o={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/setessence",o).then((function(t){console.log("settoessence response:",t);var o=t.data.settoessence;e.topic_data.manager_set.settoessence=o,e.$forceUpdate()}))},set_to_top:function(t){var e=this,o={id:this.topic_data.id,action:t};this.$axios.post("/app/topic/settotop",o).then((function(t){console.log("settotop response:",t);var o=t.data.settotop;e.topic_data.manager_set.settotop=o,e.$forceUpdate()}))}}},p=d,u=o("2877"),v=o("fe09"),f=Object(u["a"])(p,_,l,!1,null,"41de4f68",null),h=f.exports;f.options.components=Object.assign(Object.create(f.options.components||null),f.options.components||{},{QMenu:v["w"],QList:v["v"],QItem:v["r"],QItemSection:v["s"],QSeparator:v["A"]}),f.options.directives=Object.assign(Object.create(f.options.directives||null),f.options.directives||{},{ClosePopup:v["a"]});var m={name:"tab",mixins:[s["a"],c["a"]],components:{thread_manager:h},data:function(){return{defalut_tabinfo:{is_like:!1,is_star:!1,like_count:0},like_active:void 0,star_active:void 0,tabinfo:Object.assign({},this.defalut_tabinfo)}},props:{topic_data:{}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}},created:function(){var t=this;window._tab=this,this.$store.state.hasLogin&&this.get_tabinfo({id:this.topic_data.id,cb:this.on_load_tabinfo}),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.tabinfo=Object.assign({},t.defalut_tabinfo),console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$nextTick((function(){console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(e){t.$store.state.hasLogin&&t.get_tabinfo({id:t.topic_data.id,cb:t.on_load_tabinfo})}))},methods:{on_load_tabinfo:function(t){this.tabinfo=t,this.$forceUpdate()},on_tab_like:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var e={id:this.topic_data.id,action:!this.tabinfo.is_like};this.$axios.post("/app/topic/like",e).then((function(e){console.log("topic like:",e),t.tabinfo.is_like=!t.tabinfo.is_like,t.tabinfo.is_like?t.tabinfo.like_count+=1:t.tabinfo.like_count-=1})).catch((function(t){}))},on_tab_star:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var e={id:this.topic_data.id,action:!this.tabinfo.is_star};this.$axios.post("/app/topic/star",e).then((function(e){console.log("topic star:",e),t.tabinfo.is_star=!t.tabinfo.is_star})).catch((function(t){}))}},updated:function(){this.$nextTick((function(){console.log("tab call tab updated")}))},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()}},g=m,b=(o("8573"),Object(u["a"])(g,n,r,!1,null,"0e19c18d",null)),y=b.exports;b.options.components=Object.assign(Object.create(b.options.components||null),b.options.components||{},{QTooltip:v["K"]});var w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.topic_data?o("div",{attrs:{id:"buy"}},[o("buy_theav",{attrs:{topic_data:t.topic_data}})],1):t._e()},$=[],C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.topic_data.buy_theav&&Object.keys(t.topic_data.buy_theav).length>0?o("div",[t.$store.state.hasLogin?t._e():o("div",[o("div",{staticClass:"label-awesome"},[o("i",{staticClass:"fa fa-award awesome"}),t._v("尚未登录，注册用户方能下载 "),t.topic_data.buy_theav.price>0?o("span",{staticClass:"ml-1 mr-1 font-weight-bold buy_price none"},[t._v(t._s(t.topic_data.buy_theav.price))]):t._e(),o("v-btn",{staticClass:"mr-2",attrs:{color:"info",outlined:""},on:{click:function(e){return t.go("/user/login")}}},[t._v(" 登录 ")]),o("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(e){return t.go("/user/register")}}},[t._v(" 注册 ")])],1)]),t.$store.state.hasLogin?o("div",[t.$store.state.user.userinfo.is_vip?o("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red accent-4",elevation:"2"}},[o("p",{staticClass:"mb-2"},[t._v(" VIP用户免费下载 ")]),o("p",[o("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[o("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),o("p",[t.torrent_url?o("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[o("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e(),t.buy_items.buy_theav?o("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red"}},[o("p",{staticClass:"mb-2"},[t._v(" 已购买此信息 ")]),o("p",[o("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[o("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),o("p",[t.torrent_url?o("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[o("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e()],1):t._e(),t.$store.state.hasLogin&&t.topic_data.buy_theav.price>0&&!t.$store.state.user.userinfo.is_vip&&!t.buy_items.buy_theav?o("div",[o("q-dialog",{attrs:{position:"top"},model:{value:t.buy_confirm,callback:function(e){t.buy_confirm=e},expression:"buy_confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[o("v-icon",{attrs:{size:"small",color:"grey",dark:""}},[t._v("lock")]),t._v(" 开通VIP,享受高速免费下载。 ")],1)]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.open_vip"),color:"primary"},on:{click:function(e){return t.go("/buy/vip")}}})],1)],1)],1),o("q-dialog",{model:{value:t.buy_gold_or_vip_confirm,callback:function(e){t.buy_gold_or_vip_confirm=e},expression:"buy_gold_or_vip_confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.$l("thread.notengough_gold_look")))])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.buy"),color:"primary"},on:{click:function(e){return t.go("/buy/vip")}}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.gold"),color:"primary"},on:{click:function(e){return t.go("/buy/gold")}}})],1)],1)],1),o("v-alert",{attrs:{border:"left","colored-border":"",color:"red accent-4",elevation:"2",id:"video-download"}},[o("p",{staticClass:"mb-2"},[t.torrent_url?o("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url},on:{click:t.download_torrent_event}},[o("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()]),o("p",{staticClass:"mb-2 none"},[t._v(" 隐藏下载内容 .需要消耗"),o("span",{staticClass:"font-weight-bold text-primary"},[t._v(t._s(t.topic_data.buy_theav.price))]),t._v("金币 ")]),o("div",{staticClass:"underline mb-2"},[o("span",{staticClass:"file_name",on:{click:t.on_click_file}},[o("span",{staticClass:"font-weight-bold"},[t._v("[高速下载]")]),t._v(t._s(t.topic_data.title)+".mp4")])]),o("div",[t._v("升级成为VIP，享受高速下载。")])]),t.$store.state.hasLogin?o("div",{staticClass:"gold pr-4 pl-4 none"},[o("span",[t._v("金币:")]),o("span",[t._v(t._s(t.$store.state.user.userinfo.gold))]),o("span",{staticClass:"ml-3"},[o("router-link",{attrs:{to:"/buy/gold",target:"_blank"}},[t._v("购买金币")])],1),o("span",{staticClass:"ml-3"},[o("router-link",{attrs:{to:"/buy/vip",target:"_blank"}},[t._v("升级VIP,不限查看")])],1)]):t._e(),t.$store.state.hasLogin?o("div",{staticClass:"xxbtn cl pr-4 pl-4 "},[o("q-btn",{staticClass:"float-right",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.$l("vip.open_vip")},on:{click:t.buy_event}},[t.not_engout_gold?o("q-tooltip",[t._v(" $l('vip.open_vip') ")]):t._e()],1),o("q-btn",{staticClass:"float-right none",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look")},on:{click:t.buy_event}},[t.not_engout_gold?o("q-tooltip",[t._v(" "+t._s(t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look"))+" ")]):t._e()],1)],1):t._e()],1):t._e()]):t._e()},k=[],x={name:"buy_theav",mixins:[c["a"]],props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var e=this.topic_data.video_info.mktorrents;if(e&&e.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,e={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:e}).then((function(e){console.log("topci/buy/item:",e);var o=e.data.buy_item;o&&(t.buy_items.buy_theav=o,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,e={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",e).then((function(e){var o=e.data;console.log("on_buy_topic response_data:",o);var i=o.buy_content;i&&(t.buy_content=i);var a=o.buy_theav;a&&(t.buy_items.buy_theav=a),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0},on_click_file:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0}}},q=x,j=o("6544"),O=o.n(j),L=o("0798"),Q=o("8336"),U=o("132d"),N=Object(u["a"])(q,C,k,!1,null,"779f4948",null),S=N.exports;N.options.components=Object.assign(Object.create(N.options.components||null),N.options.components||{},{QDialog:v["m"],QCard:v["g"],QCardSection:v["i"],QCardActions:v["h"],QBtn:v["e"],QTooltip:v["K"]}),N.options.directives=Object.assign(Object.create(N.options.directives||null),N.options.directives||{},{ClosePopup:v["a"]}),O()(N,{VAlert:L["a"],VBtn:Q["a"],VIcon:U["a"]});var V={name:"buy",mixins:[c["a"]],components:{buy_theav:S},props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(e){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var e=this.topic_data.video_info.mktorrents;if(e&&e.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,e={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:e}).then((function(e){console.log("topci/buy/item:",e);var o=e.data.buy_item;o&&(t.buy_items.buy_theav=o,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,e={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",e).then((function(e){var o=e.data;console.log("on_buy_topic response_data:",o);var i=o.buy_content;i&&(t.buy_content=i);var a=o.buy_theav;a&&(t.buy_items.buy_theav=a),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()},on_click_file:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()}}},E=V,T=(o("bd30"),Object(u["a"])(E,w,$,!1,null,null,null)),B=T.exports;T.options.components=Object.assign(Object.create(T.options.components||null),T.options.components||{},{QColor:v["l"]});var I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.show_what,{tag:"component"})},P=[],A=(o("c975"),o("fb6a"),o("a026")),D={name:"view_content",props:{topic_data:{}},data:function(){return{show_what:"empty_view"}},created:function(){var t=this;console.log("create topic data"),this.$nextTick((function(){console.log("[content]this.topic_data:",t.topic_data);var e={topic_data:t.topic_data},o="";o=t.topic_data.content.indexOf("data-src")>=0?"<div class='ql-editor' v-lazy-container=\"{ selector: 'img' }\">"+t.topic_data.content+"</div>":"<div class='ql-editor' >"+t.topic_data.content+"</div>",console.log("template_string:",o),A["a"].component("view_content_component",{template:o,data:function(){return Object.assign(e,{photo_min_height:"260px"})},computed:{screen_shots_list:function(){for(var t=[],e=this.topic_data.video_info.online_videos[0],o=e.screenshots.list.slice(0,6),i=e.hash_id,a=0;a<o.length;++a){var s=this.geenrate_screenshot_url(e.space_name,i,o[a]);t.push(s)}return t},cover_image_url:function(){var t=this.topic_data.video_info.online_videos[0],e=t.hash_id;return this.generate_cover_url(t.space_name,e)}},methods:{on_image_error:function(){}}}),t.show_what="view_content_component"}))},methods:{},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},K=D,z=(o("d409"),Object(u["a"])(K,I,P,!1,null,null,null)),J=z.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-alert",{staticClass:"edit",attrs:{text:"",color:"info"}},[o("h5",[t._v("处于待审核状态，未发布")]),t.buy_contents&&t.buy_contents.length>0?o("div",{staticClass:"mt-3   buy_contents"},[o("h6",[t._v(t._s(t.$l("thread.attach_content"))+":")]),t._l(t.buy_contents,(function(e,i){return o("v-row",{key:i},[o("v-col",[t._v(" * "),e.gold?o("span",[t._v("价格:"),o("span",{staticClass:"text-theme-color"},[t._v(t._s(e.gold)+"金币")])]):t._e(),o("span",{staticClass:"ml-2"},[t._v(t._s(e.content))]),e.upload_files&&e.upload_files.length>0?o("span",{staticClass:"ml-2 text-theme-color"},[t._v(" "+t._s(e.upload_files.length)+"个文件 ")]):t._e(),o("span",[o("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(o){return t.on_show_attach_content_dialog(e)}}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" 查看 ")],1)],1)])],1)}))],2):t._e(),t.is_manager?o("v-row",[o("div",{staticClass:"mt-3"},[o("v-btn",{attrs:{color:"white darken-1 mr-2 ml-1",text:""},on:{click:t.on_pass_verify}},[t._v("通过审核 ")]),o("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:t.on_not_verify}},[t._v("不通过 ")])],1)]):t._e(),o("q-separator",{staticClass:"mt-4"}),t.topic_verify?o("div",{staticClass:"mt-3"},["pass_verify"==t.topic_verify.action?o("p",{staticClass:"mb-2"},[t._v("已设置: "),o("span",[t._v("通过审核")]),t.topic_verify.reward_gold?o("span",{staticClass:"ml-2"},[t._v("奖励金币:"+t._s(t.topic_verify.reward_gold))]):t._e()]):t._e(),"not_verify"==t.topic_verify.action?o("p",{staticClass:"mb-2"},[t._v(" 已设置: "),o("span",{staticClass:"font-weight-bold"},[t._v("未通过审核")]),o("span",{staticClass:"ml-2"},[t._v("原因:"),o("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.topic_verify.reason))])])]):t._e(),o("p",[t._v("如果需要修改，请重新提交")])]):t._e(),o("q-dialog",{model:{value:t.not_verify_dialog,callback:function(e){t.not_verify_dialog=e},expression:"not_verify_dialog"}},[o("q-card",{staticStyle:{"min-width":"400px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("不通过审核")])]),o("q-separator"),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[o("q-input",{attrs:{label:"原因"},model:{value:t.not_verify.reason,callback:function(e){t.$set(t.not_verify,"reason",e)},expression:"not_verify.reason"}})],1),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_not_verify}})],1)],1)],1),o("q-dialog",{model:{value:t.pass_verify_dialog,callback:function(e){t.pass_verify_dialog=e},expression:"pass_verify_dialog"}},[o("q-card",{staticStyle:{"min-width":"400px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("通过审核")])]),o("q-separator"),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[o("q-input",{attrs:{label:"奖励金币",type:"number"},model:{value:t.pass_verify.reward_gold,callback:function(e){t.$set(t.pass_verify,"reward_gold",e)},expression:"pass_verify.reward_gold"}})],1),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_pass_verify}})],1)],1)],1)],1)},R=[],F={name:"edit",props:{topic_data:{}},data:function(){return{buy_contents:void 0,pass_verify_dialog:!1,not_verify_dialog:!1,not_verify:{reason:"",action_uid:this.$store.state.user.userinfo.uid},pass_verify:{action_uid:this.$store.state.user.userinfo.uid,reward_gold:0},topic_verify:void 0}},created:function(){this.buy_contents=this.topic_data.buy_contents,this.load_topic_verify()},methods:{on_not_verify:function(){this.not_verify_dialog=!0},on_pass_verify:function(){this.pass_verify_dialog=!0},on_dialog_pass_verify:function(){var t=this,e=Object.assign({},this.pass_verify);console.log("[on_dialog_pass_verify]:",e),e["topic_id"]=this.topic_data.id,e["action"]="pass_verify",this.$axios.post("/app/topic/verify",e).then((function(o){var i=o.data;console.log("on_buy_topic response_data:",i),t.set_topic_verify(e)}))},on_dialog_not_verify:function(){var t=this,e=Object.assign({},this.not_verify);console.log("[on_dialog_pass_verify]:",e),e["topic_id"]=this.topic_data.id,e["action"]="not_verify",this.$axios.post("/app/topic/verify",e).then((function(o){var i=o.data;console.log("on_buy_topic response_data:",i),t.set_topic_verify(e)}))},load_topic_verify:function(){var t=this;this.$axios.get("/app/topic/verify",{params:{topic_id:this.topic_data.id}}).then((function(e){var o=e.data;console.log("load_topic_verify topic_verify:",o),t.set_topic_verify(o)}))},set_topic_verify:function(t){if(t){this.topic_verify=t;var e=t.action;this[e];t}},on_show_attach_content_dialog:function(t){var e=this;console.log("buy_content:",t);var o={price:0,content:"",upload_files:[]};t||(t=Object.assign({},o),t.upload_files=[]),t&&(this.buy_content=t),this.show_attach_content_dialog=!1,this.$nextTick((function(){e.show_attach_content_dialog=!0,e.$forceUpdate()})),this.$forceUpdate()}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},G=F,H=(o("0538f"),o("62ad")),W=o("0fd9"),X=Object(u["a"])(G,M,R,!1,null,"7658b0e1",null),Y=X.exports;X.options.components=Object.assign(Object.create(X.options.components||null),X.options.components||{},{QSeparator:v["A"],QDialog:v["m"],QCard:v["g"],QCardSection:v["i"],QInput:v["q"],QCardActions:v["h"],QBtn:v["e"]}),X.options.directives=Object.assign(Object.create(X.options.directives||null),X.options.directives||{},{ClosePopup:v["a"]}),O()(X,{VAlert:L["a"],VBtn:Q["a"],VCol:H["a"],VIcon:U["a"],VRow:W["a"]});var Z=o("417f"),tt=o("c96ad"),et=o("d5dc"),ot=o("227a"),it={name:"threadview",mixins:[s["a"]],components:{view_tab:y,view_buy:B,view_video:Z["a"],view_content:J,view_edit:Y,comment_reply:et["a"],comment_list:ot["a"],view_watch_limit:tt["a"]},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,load_error:!1,load_error_text:"加载失败，请刷新网站或者稍后再试。"}},created:function(){var t=this,e=this.$route.params.id,o=this.getUrlVars();o.edit&&console.log("处于编辑的帖子"),this.get_topic({id:e,from_cache:this.from_cache(),edit:o.edit,cb:this.on_load_topic_data,error_cb:this.on_load_error}),window._t=this,this.listener_loginout=this.$hub.on("event:loginout",(function(e){console.log("event:loginout",e),t.$forceUpdate()})),this.listener_login=this.$hub.on("event:login",(function(e){console.log("event:login",e),t.$forceUpdate()}))},methods:{on_load_error:function(t){console.log("on_load_error:",t),this.load_error=!0,404==t.code&&(this.load_error_text="已删除或者不存，有问题请联系我们"),500==t.code&&(this.load_error_text="加载失败，请刷新网站或者稍后再试。"),this.set_title(this.load_error_text)},on_load_topic_data:function(t,e){if(console.log("[on_load_topic_data]topic_data:",t," edit:",e),this.topic_data=t,this.set_title(t.title),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var o=this.topic_data.video_info.online_videos[0],i=o.hash_id;this.$store.state.user_visit.push(i)}e&&(this.edit=e)}},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()},computed:{is_exist_video:function(){return this.topic_data&&this.topic_data.video_info},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return console.log("[show_view_watch_limit]:",t),!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)},show_fanhao:function(){try{if(this.topic_data.video_info&&2==this.topic_data.video_info.av_data_type)return this.topic_data.video_info.fanhao}catch(t){console.error(t)}},settoessence:function(){if(this.topic_data.manager_set)return this.topic_data.manager_set.settoessence}}},at=it,st=Object(u["a"])(at,i,a,!1,null,"2679d561",null);e["default"]=st.exports;st.options.components=Object.assign(Object.create(st.options.components||null),st.options.components||{},{QSkeleton:v["B"],QTooltip:v["K"]})},"30ab":function(t,e,o){},"44fd":function(t,e,o){},8573:function(t,e,o){"use strict";var i=o("30ab"),a=o.n(i);a.a},bd30:function(t,e,o){"use strict";var i=o("e36d"),a=o.n(i);a.a},d11d:function(t,e,o){},d409:function(t,e,o){"use strict";var i=o("d11d"),a=o.n(i);a.a},e36d:function(t,e,o){}}]);
//# sourceMappingURL=chunk-eba14f74.15205c52.js.map