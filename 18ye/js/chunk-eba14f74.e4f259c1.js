(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eba14f74"],{"0538f":function(t,i,a){"use strict";var o=a("44fd"),e=a.n(o);e.a},2591:function(t,i,a){"use strict";a.r(i);var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"thread_view"},[a("div",{staticClass:"row"},[t.topic_data?t._e():a("div",{staticClass:"col-9 pr-4 mpr-0",staticStyle:{"min-height":"500px"}},[t.load_error?a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"text-center p-3"},[t._v(t._s(t.load_error_text))])])]):a("div",{staticClass:"full-width"},[a("q-skeleton",{attrs:{height:"350px",square:""}})],1)]),t.topic_data?a("div",{staticClass:"col-9 pr-4 mpr-0"},[t.edit?a("view_edit",{attrs:{topic_data:t.topic_data}}):t._e(),a("div",{staticClass:"topic-detail card"},[a("div",{staticClass:"card-header media clearfix"},[a("div",{staticClass:"media-body"},[a("h1",{staticClass:"media-heading"},[t.forum_conf?a("router-link",{staticClass:"node",attrs:{to:"/forum/"+t.forum_conf.fid}},[t._v(" "+t._s(t.forum_conf.name)+" ")]):t._e(),a("span",{staticClass:"title"},[t.show_fanhao?a("span",{staticClass:"fanhao"},[t._v(t._s(t.show_fanhao))]):t._e(),t._v(" "+t._s(t.topic_data.title)+" ")])],1),a("div",{staticClass:"info"},[a("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.topic_data.user.uid}},[t._v(t._s(t.topic_data.user.username)+" ")]),a("span",{staticClass:"hidden-mobile"}),t._v(" · 发布于 "),a("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.release_time)))]),t.topic_data.updated_time&&t.topic_data.updated_time>t.topic_data.release_time?a("span",[t._v(" · 更新于 "),a("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.updated_time)))])]):t._e(),t._v(" · "+t._s(t.topic_data.view_count)+" 次阅读 ")],1)]),t.is_mobile()?t._e():a("div",{staticClass:"avatar media-right"},[a("router-link",{attrs:{title:"",to:"/user/"+t.topic_data.user.uid}},[a("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.topic_data.user)}})]),a("q-tooltip",[t._v(" "+t._s(t.topic_data.user.username)+" ")])],1)]),t.settoessence?a("div",{staticClass:"label-awesome"},[a("i",{staticClass:"fa fa-award awesome"}),t._v(" 本帖已被设为精华帖！ ")]):t._e(),a("div",{staticClass:"card-body  markdown-toc entry-content markdown ql-container ql-snowr"},[t._m(0),t.is_exist_video&&t.show_view_watch_limit?a("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.is_exist_video&&!t.show_view_watch_limit?a("view_video",{staticClass:"mb-2",attrs:{embed:!0,topic_data:t.topic_data}}):t._e(),a("view_content",{attrs:{topic_data:t.topic_data}})],1),a("div",{staticClass:"card-footer clearfix"},[a("view_buy",{ref:"view_buy",staticClass:"mb-4",attrs:{topic_data:t.topic_data}}),a("view_tab",{ref:"view_tab",staticClass:"mb-4",attrs:{topic_data:t.topic_data}})],1)]),t.edit?t._e():a("div",{staticClass:"card",attrs:{id:"replies"}},[t._m(1),a("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data&&!t.edit?a("div",{staticClass:"card",attrs:{id:"reply"}},[a("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e()],1):t._e(),a("div",{staticClass:"sidebar hidden-mobile col-3"},[a("div",{attrs:{id:"topic-sidebar","data-spy":"affix","data-offset-bottom":"65"}},[a("ads_box_list"),t._m(2)],1)])])])])},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"toc-container dropdown ",staticStyle:{display:"block"}},[a("button",{staticClass:"btn btn-default none",attrs:{"data-toggle":"dropdown"}},[a("i",{staticClass:"fa fa-list"}),t._v(" 目录 ")]),a("div",{staticClass:"toc-panel dropdown-menu dropdown-menu-right"},[a("div",{staticClass:"list-container"},[a("ul",{staticClass:"list"})])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"items card-body none"},[a("div",{staticClass:"reply reply-deleted",attrs:{"data-id":"362718",id:"reply1"}},[a("div",{attrs:{id:"reply-362718","data-floor":"1"}},[a("div",{staticClass:"deleted text-center"},[t._v("1楼 已删除")])])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"notify-updated"},[a("a",{staticClass:"update",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-bell-o"}),t._v(" "),a("b",[t._v("有新回复！")]),t._v("点击这里立即载入")])])}],s=(a("b48a"),a("7bc9"),a("077f")),n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"opts pl-0 pr-0"},[a("a",{staticClass:"likeable deactive tooltipstered",class:{active:t.tabinfo.is_like},on:{click:t.on_tab_like}},[a("i",{staticClass:"fa fa-heart"}),t._v(" "),t.tabinfo.like_count>0?a("span",[t._v(t._s(t.tabinfo.like_count)+" 个赞")]):a("span",[t._v("赞")])]),t._m(0),a("a",{staticClass:"bookmark",class:{active:t.tabinfo.is_star},attrs:{title:"收藏"},on:{click:t.on_tab_star}},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "+t._s(t.tabinfo.is_star?"已收藏":"收藏")+" ")]),a("a",{staticClass:"bookmark",attrs:{title:t.langloader("report")},on:{click:t.on_tab_star}},[a("i",{staticClass:"fas fa-flag"}),t._v(" "+t._s(t.langloader("report"))+" ")]),t.$store.state.hasLogin&&t.$store.state.user.userinfo.uid==t.topic_data.user.uid||t.is_manager?a("span",{staticClass:"pull-right opts"},[t.is_manager?a("thread_manager",{attrs:{topic_data:t.topic_data}}):t._e(),a("router-link",{staticClass:"fa fa-edit",attrs:{title:"修改本帖",to:"/release/thread?edit_id="+t.topic_data.id}},[a("q-tooltip",[t._v(" 修改本帖 ")])],1),a("a",{staticClass:"fa fa-trash",attrs:{title:"删除本帖",rel:"nofollow"}},[a("q-tooltip",[t._v(" 删除本帖 ")])],1)],1):t._e()])},r=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("a",{staticClass:"follow none",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-eye"}),t._v(" 关注")])}],c=a("59d9"),_=a("c286"),l={name:"tab",mixins:[s["a"],c["a"]],components:{thread_manager:_["a"]},data:function(){return{defalut_tabinfo:{is_like:!1,is_star:!1,like_count:0},like_active:void 0,star_active:void 0,tabinfo:Object.assign({},this.defalut_tabinfo)}},props:{topic_data:{}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}},created:function(){var t=this;window._tab=this,this.$store.state.hasLogin&&this.get_tabinfo({id:this.topic_data.id,cb:this.on_load_tabinfo}),this.listener_loginout=this.$hub.on("event:loginout",(function(i){t.tabinfo=Object.assign({},t.defalut_tabinfo),console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$nextTick((function(){console.log("event tab loginout",t.tabinfo," $store.state.hasLogin:",t.$store.state.hasLogin),t.$forceUpdate()}))})),this.listener_login=this.$hub.on("event:login",(function(i){t.$store.state.hasLogin&&t.get_tabinfo({id:t.topic_data.id,cb:t.on_load_tabinfo})}))},methods:{on_load_tabinfo:function(t){this.tabinfo=t,this.$forceUpdate()},on_tab_like:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var i={id:this.topic_data.id,action:!this.tabinfo.is_like};this.$axios.post("/app/topic/like",i).then((function(i){console.log("topic like:",i),t.tabinfo.is_like=!t.tabinfo.is_like,t.tabinfo.is_like?t.tabinfo.like_count+=1:t.tabinfo.like_count-=1})).catch((function(t){}))},on_tab_star:function(){var t=this;if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();var i={id:this.topic_data.id,action:!this.tabinfo.is_star};this.$axios.post("/app/topic/star",i).then((function(i){console.log("topic star:",i),t.tabinfo.is_star=!t.tabinfo.is_star})).catch((function(t){}))}},updated:function(){this.$nextTick((function(){console.log("tab call tab updated")}))},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()}},d=l,p=(a("8573"),a("2877")),u=a("fe09"),v=Object(p["a"])(d,n,r,!1,null,"0e19c18d",null),f=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QTooltip:u["K"]});var h=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.topic_data?a("div",{attrs:{id:"buy"}},[a("buy_theav",{attrs:{topic_data:t.topic_data}})],1):t._e()},b=[],m=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.topic_data.buy_theav&&Object.keys(t.topic_data.buy_theav).length>0?a("div",[t.$store.state.hasLogin?t._e():a("div",[a("div",{staticClass:"label-awesome"},[a("i",{staticClass:"fa fa-award awesome"}),t._v("尚未登录，注册用户方能下载 "),t.topic_data.buy_theav.price>0?a("span",{staticClass:"ml-1 mr-1 font-weight-bold buy_price none"},[t._v(t._s(t.topic_data.buy_theav.price))]):t._e(),a("v-btn",{staticClass:"mr-2",attrs:{color:"info",outlined:""},on:{click:function(i){return t.go("/user/login")}}},[t._v(" 登录 ")]),a("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(i){return t.go("/user/register")}}},[t._v(" 注册 ")])],1)]),t.$store.state.hasLogin?a("div",[t.$store.state.user.userinfo.is_vip?a("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red accent-4",elevation:"2"}},[a("p",{staticClass:"mb-2"},[t._v(" VIP用户免费下载 ")]),a("p",[a("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[a("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),a("p",[t.torrent_url?a("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[a("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e(),t.buy_items.buy_theav?a("v-alert",{attrs:{type:"success",border:"left","colored-border":"",color:"red"}},[a("p",{staticClass:"mb-2"},[t._v(" 已购买此信息 ")]),a("p",[a("a",{staticClass:"file_name",attrs:{title:"下载链接点此",target:"_blank",href:"/download/video/"+t.topic_data.id}},[a("i",{staticClass:"fas fa-cloud-download-alt mr-2 mb-2"}),t._v("下载链接点此")])]),a("p",[t.torrent_url?a("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url}},[a("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()])]):t._e()],1):t._e(),t.$store.state.hasLogin&&t.topic_data.buy_theav.price>0&&!t.$store.state.user.userinfo.is_vip&&!t.buy_items.buy_theav?a("div",[a("q-dialog",{attrs:{position:"top"},model:{value:t.buy_confirm,callback:function(i){t.buy_confirm=i},expression:"buy_confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("span",{staticClass:"q-ml-sm"},[a("v-icon",{attrs:{size:"small",color:"grey",dark:""}},[t._v("lock")]),t._v(" 开通VIP,享受高速免费下载。 ")],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.open_vip"),color:"primary"},on:{click:function(i){return t.go("/buy/vip")}}})],1)],1)],1),a("q-dialog",{model:{value:t.buy_gold_or_vip_confirm,callback:function(i){t.buy_gold_or_vip_confirm=i},expression:"buy_gold_or_vip_confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.$l("thread.notengough_gold_look")))])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.buy"),color:"primary"},on:{click:function(i){return t.go("/buy/vip")}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$l("vip.gold"),color:"primary"},on:{click:function(i){return t.go("/buy/gold")}}})],1)],1)],1),a("v-alert",{attrs:{border:"left","colored-border":"",color:"red accent-4",elevation:"2",id:"video-download"}},[a("p",{staticClass:"mb-2"},[t.torrent_url?a("a",{staticClass:"file_name",attrs:{title:"种子下载",target:"_blank",href:t.torrent_url},on:{click:t.download_torrent_event}},[a("i",{staticClass:"fas fa-magnet mr-2"}),t._v("种子下载")]):t._e()]),a("p",{staticClass:"mb-2 none"},[t._v(" 隐藏下载内容 .需要消耗"),a("span",{staticClass:"font-weight-bold text-primary"},[t._v(t._s(t.topic_data.buy_theav.price))]),t._v("金币 ")]),a("div",{staticClass:"underline mb-2"},[a("span",{staticClass:"file_name",on:{click:t.on_click_file}},[a("span",{staticClass:"font-weight-bold"},[t._v("[高速下载]")]),t._v(t._s(t.topic_data.title)+".mp4")])]),a("div",[t._v("升级成为VIP，享受高速下载。")])]),t.$store.state.hasLogin?a("div",{staticClass:"gold pr-4 pl-4 none"},[a("span",[t._v("金币:")]),a("span",[t._v(t._s(t.$store.state.user.userinfo.gold))]),a("span",{staticClass:"ml-3"},[a("router-link",{attrs:{to:"/buy/gold",target:"_blank"}},[t._v("购买金币")])],1),a("span",{staticClass:"ml-3"},[a("router-link",{attrs:{to:"/buy/vip",target:"_blank"}},[t._v("升级VIP,不限查看")])],1)]):t._e(),t.$store.state.hasLogin?a("div",{staticClass:"xxbtn cl pr-4 pl-4 "},[a("q-btn",{staticClass:"float-right",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.$l("vip.open_vip")},on:{click:t.buy_event}},[t.not_engout_gold?a("q-tooltip",[t._v(" $l('vip.open_vip') ")]):t._e()],1),a("q-btn",{staticClass:"float-right none",attrs:{padding:"0px",disable:t.buy_loading,loading:t.buy_loading,color:"theme-color","text-color":"theme-color",icon:"lock_open",label:t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look")},on:{click:t.buy_event}},[t.not_engout_gold?a("q-tooltip",[t._v(" "+t._s(t.not_engout_gold?t.$l("thread.notengough_gold_look"):t.langloader("thread.look"))+" ")]):t._e()],1)],1):t._e()],1):t._e()]):t._e()},g=[],y={name:"buy_theav",mixins:[c["a"]],props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(i){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var i=this.topic_data.video_info.mktorrents;if(i&&i.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,i={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:i}).then((function(i){console.log("topci/buy/item:",i);var a=i.data.buy_item;a&&(t.buy_items.buy_theav=a,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,i={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",i).then((function(i){var a=i.data;console.log("on_buy_topic response_data:",a);var o=a.buy_content;o&&(t.buy_content=o);var e=a.buy_theav;e&&(t.buy_items.buy_theav=e),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0},on_click_file:function(){if(!this.$store.state.hasLogin)return this.$app._userbar.show_login_dialog();this.not_engout_gold,this.buy_confirm=!0}}},w=y,C=a("6544"),$=a.n(C),k=a("0798"),x=a("8336"),q=a("132d"),j=Object(p["a"])(w,m,g,!1,null,"779f4948",null),O=j.exports;j.options.components=Object.assign(Object.create(j.options.components||null),j.options.components||{},{QDialog:u["m"],QCard:u["g"],QCardSection:u["i"],QCardActions:u["h"],QBtn:u["e"],QTooltip:u["K"]}),j.options.directives=Object.assign(Object.create(j.options.directives||null),j.options.directives||{},{ClosePopup:u["a"]}),$()(j,{VAlert:k["a"],VBtn:x["a"],VIcon:q["a"]});var L={name:"buy",mixins:[c["a"]],components:{buy_theav:O},props:{topic_data:{}},data:function(){return{buy_loading:!1,buy_disable:!0,buy_confirm:!1,buy_gold_or_vip_confirm:!1,buy_items:{}}},destroyed:function(){this.listener_loginout.off()},created:function(){var t=this;console.log("vip_degree:",this.vip_degree),this.listener_loginout=this.$hub.on("event:loginout",(function(i){t.$nextTick((function(){t.$forceUpdate()}))})),this.$store.state.hasLogin&&!this.$store.state.user.userinfo.is_vip&&this.load_buy_item()},computed:{vip_degree:function(){return this.this_vip_degree(this.$store.state.user.userinfo)},not_engout_gold:function(){try{return this.topic_data.buy_theav.price>this.$store.state.user.userinfo.gold}catch(t){}return!1},torrent_url:function(){var t=this.topic_data.mktorrent;if(t&&t.torrent_id)return"/download/torrent/"+this.topic_data.id;if(this.topic_data.video_info){var i=this.topic_data.video_info.mktorrents;if(i&&i.length>0)return"/download/torrent/"+this.topic_data.id}}},methods:{download_torrent_event:function(t){if(!this.$store.state.hasLogin)return t.preventDefault(),this.$app._userbar.show_login_dialog("下载功能只对注册用户开放，请先注册或者登录！")},load_buy_item:function(){var t=this,i={id:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.get("/app/topic/buy/item",{params:i}).then((function(i){console.log("topci/buy/item:",i);var a=i.data.buy_item;a&&(t.buy_items.buy_theav=a,t.$forceUpdate())}))},on_buy_topic:function(){var t=this,i={vid:this.topic_data.id,item:"buy_theav",type:"topic"};this.$axios.post("/app/topic/buy",i).then((function(i){var a=i.data;console.log("on_buy_topic response_data:",a);var o=a.buy_content;o&&(t.buy_content=o);var e=a.buy_theav;e&&(t.buy_items.buy_theav=e),t.$message(t.$l("thread.buy_success")),console.log("this.buy_items:",t.buy_items),t.$forceUpdate()}))},buy_event:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()},on_click_file:function(){return this.$store.state.hasLogin?this.not_engout_gold?this.buy_gold_or_vip_confirm=!0:void(this.buy_confirm=!0):this.$app._userbar.show_login_dialog()}}},Q=L,U=(a("bd30"),Object(p["a"])(Q,h,b,!1,null,null,null)),V=U.exports;U.options.components=Object.assign(Object.create(U.options.components||null),U.options.components||{},{QColor:u["l"]});var E=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a(t.show_what,{tag:"component"})},S=[],T=(a("c975"),a("fb6a"),a("a026")),N={name:"view_content",props:{topic_data:{}},data:function(){return{show_what:"empty_view"}},created:function(){var t=this;console.log("create topic data"),this.$nextTick((function(){console.log("[content]this.topic_data:",t.topic_data);var i={topic_data:t.topic_data},a="";a=t.topic_data.content.indexOf("data-src")>=0?"<div class='ql-editor' v-lazy-container=\"{ selector: 'img' }\">"+t.topic_data.content+"</div>":"<div class='ql-editor' >"+t.topic_data.content+"</div>",console.log("template_string:",a),T["a"].component("view_content_component",{template:a,data:function(){return Object.assign(i,{photo_min_height:"260px"})},computed:{screen_shots_list:function(){for(var t=[],i=this.topic_data.video_info.online_videos[0],a=i.screenshots.list.slice(0,6),o=i.hash_id,e=0;e<a.length;++e){var s=this.geenrate_screenshot_url(i.space_name,o,a[e]);t.push(s)}return t},cover_image_url:function(){var t=this.topic_data.video_info.online_videos[0],i=t.hash_id;return this.generate_cover_url(t.space_name,i)}},methods:{on_image_error:function(){}}}),t.show_what="view_content_component"}))},methods:{},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},I=N,D=(a("d409"),Object(p["a"])(I,E,S,!1,null,null,null)),P=D.exports,A=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-alert",{staticClass:"edit",attrs:{text:"",color:"info"}},[a("h5",[t._v("处于待审核状态，未发布")]),t.buy_contents&&t.buy_contents.length>0?a("div",{staticClass:"mt-3   buy_contents"},[a("h6",[t._v(t._s(t.$l("thread.attach_content"))+":")]),t._l(t.buy_contents,(function(i,o){return a("v-row",{key:o},[a("v-col",[t._v(" * "),i.gold?a("span",[t._v("价格:"),a("span",{staticClass:"text-theme-color"},[t._v(t._s(i.gold)+"金币")])]):t._e(),a("span",{staticClass:"ml-2"},[t._v(t._s(i.content))]),i.upload_files&&i.upload_files.length>0?a("span",{staticClass:"ml-2 text-theme-color"},[t._v(" "+t._s(i.upload_files.length)+"个文件 ")]):t._e(),a("span",[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(a){return t.on_show_attach_content_dialog(i)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" 查看 ")],1)],1)])],1)}))],2):t._e(),t.is_manager?a("v-row",[a("div",{staticClass:"mt-3"},[a("v-btn",{attrs:{color:"white darken-1 mr-2 ml-1",text:""},on:{click:t.on_pass_verify}},[t._v("通过审核 ")]),a("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:t.on_not_verify}},[t._v("不通过 ")])],1)]):t._e(),a("q-separator",{staticClass:"mt-4"}),t.topic_verify?a("div",{staticClass:"mt-3"},["pass_verify"==t.topic_verify.action?a("p",{staticClass:"mb-2"},[t._v("已设置: "),a("span",[t._v("通过审核")]),t.topic_verify.reward_gold?a("span",{staticClass:"ml-2"},[t._v("奖励金币:"+t._s(t.topic_verify.reward_gold))]):t._e()]):t._e(),"not_verify"==t.topic_verify.action?a("p",{staticClass:"mb-2"},[t._v(" 已设置: "),a("span",{staticClass:"font-weight-bold"},[t._v("未通过审核")]),a("span",{staticClass:"ml-2"},[t._v("原因:"),a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.topic_verify.reason))])])]):t._e(),a("p",[t._v("如果需要修改，请重新提交")])]):t._e(),a("q-dialog",{model:{value:t.not_verify_dialog,callback:function(i){t.not_verify_dialog=i},expression:"not_verify_dialog"}},[a("q-card",{staticStyle:{"min-width":"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("不通过审核")])]),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[a("q-input",{attrs:{label:"原因"},model:{value:t.not_verify.reason,callback:function(i){t.$set(t.not_verify,"reason",i)},expression:"not_verify.reason"}})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_not_verify}})],1)],1)],1),a("q-dialog",{model:{value:t.pass_verify_dialog,callback:function(i){t.pass_verify_dialog=i},expression:"pass_verify_dialog"}},[a("q-card",{staticStyle:{"min-width":"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("通过审核")])]),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[a("q-input",{attrs:{label:"奖励金币",type:"number"},model:{value:t.pass_verify.reward_gold,callback:function(i){t.$set(t.pass_verify,"reward_gold",i)},expression:"pass_verify.reward_gold"}})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"确定",color:"primary"},on:{click:t.on_dialog_pass_verify}})],1)],1)],1)],1)},B=[],K={name:"edit",props:{topic_data:{}},data:function(){return{buy_contents:void 0,pass_verify_dialog:!1,not_verify_dialog:!1,not_verify:{reason:"",action_uid:this.$store.state.user.userinfo.uid},pass_verify:{action_uid:this.$store.state.user.userinfo.uid,reward_gold:0},topic_verify:void 0}},created:function(){this.buy_contents=this.topic_data.buy_contents,this.load_topic_verify()},methods:{on_not_verify:function(){this.not_verify_dialog=!0},on_pass_verify:function(){this.pass_verify_dialog=!0},on_dialog_pass_verify:function(){var t=this,i=Object.assign({},this.pass_verify);console.log("[on_dialog_pass_verify]:",i),i["topic_id"]=this.topic_data.id,i["action"]="pass_verify",this.$axios.post("/app/topic/verify",i).then((function(a){var o=a.data;console.log("on_buy_topic response_data:",o),t.set_topic_verify(i)}))},on_dialog_not_verify:function(){var t=this,i=Object.assign({},this.not_verify);console.log("[on_dialog_pass_verify]:",i),i["topic_id"]=this.topic_data.id,i["action"]="not_verify",this.$axios.post("/app/topic/verify",i).then((function(a){var o=a.data;console.log("on_buy_topic response_data:",o),t.set_topic_verify(i)}))},load_topic_verify:function(){var t=this;this.$axios.get("/app/topic/verify",{params:{topic_id:this.topic_data.id}}).then((function(i){var a=i.data;console.log("load_topic_verify topic_verify:",a),t.set_topic_verify(a)}))},set_topic_verify:function(t){if(t){this.topic_verify=t;var i=t.action;this[i];t}},on_show_attach_content_dialog:function(t){var i=this;console.log("buy_content:",t);var a={price:0,content:"",upload_files:[]};t||(t=Object.assign({},a),t.upload_files=[]),t&&(this.buy_content=t),this.show_attach_content_dialog=!1,this.$nextTick((function(){i.show_attach_content_dialog=!0,i.$forceUpdate()})),this.$forceUpdate()}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1}}},z=K,J=(a("0538f"),a("62ad")),R=a("0fd9"),F=Object(p["a"])(z,A,B,!1,null,"7658b0e1",null),G=F.exports;F.options.components=Object.assign(Object.create(F.options.components||null),F.options.components||{},{QSeparator:u["A"],QDialog:u["m"],QCard:u["g"],QCardSection:u["i"],QInput:u["q"],QCardActions:u["h"],QBtn:u["e"]}),F.options.directives=Object.assign(Object.create(F.options.directives||null),F.options.directives||{},{ClosePopup:u["a"]}),$()(F,{VAlert:k["a"],VBtn:x["a"],VCol:J["a"],VIcon:q["a"],VRow:R["a"]});var H=a("417f"),M=a("c96ad"),W=a("d5dc"),X=a("227a"),Y={name:"threadview",mixins:[s["a"]],components:{view_tab:f,view_buy:V,view_video:H["a"],view_content:P,view_edit:G,comment_reply:W["a"],comment_list:X["a"],view_watch_limit:M["a"]},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,load_error:!1,load_error_text:"加载失败，请刷新网站或者稍后再试。"}},created:function(){var t=this,i=this.$route.params.id,a=this.getUrlVars();a.edit&&console.log("处于编辑的帖子"),this.get_topic({id:i,from_cache:this.from_cache(),edit:a.edit,cb:this.on_load_topic_data,error_cb:this.on_load_error}),window._t=this,this.listener_loginout=this.$hub.on("event:loginout",(function(i){console.log("event:loginout",i),t.$forceUpdate()})),this.listener_login=this.$hub.on("event:login",(function(i){console.log("event:login",i),t.$forceUpdate()}))},methods:{on_load_error:function(t){console.log("on_load_error:",t),this.load_error=!0,404==t.code&&(this.load_error_text="已删除或者不存，有问题请联系我们"),500==t.code&&(this.load_error_text="加载失败，请刷新网站或者稍后再试。"),this.set_title(this.load_error_text)},on_load_topic_data:function(t,i){if(console.log("[on_load_topic_data]topic_data:",t," edit:",i),this.topic_data=t,this.set_title(t.title),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var a=this.topic_data.video_info.online_videos[0],o=a.hash_id;this.$store.state.user_visit.push(o)}i&&(this.edit=i)}},destroyed:function(){this.listener_login.off(),this.listener_loginout.off()},computed:{is_exist_video:function(){return this.topic_data&&this.topic_data.video_info},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return console.log("[show_view_watch_limit]:",t),!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)},show_fanhao:function(){try{if(this.topic_data.video_info&&2==this.topic_data.video_info.av_data_type)return this.topic_data.video_info.fanhao}catch(t){console.error(t)}},settoessence:function(){if(this.topic_data.manager_set)return this.topic_data.manager_set.settoessence}}},Z=Y,tt=Object(p["a"])(Z,o,e,!1,null,"2679d561",null);i["default"]=tt.exports;tt.options.components=Object.assign(Object.create(tt.options.components||null),tt.options.components||{},{QSkeleton:u["B"],QTooltip:u["K"]})},"30ab":function(t,i,a){},"44fd":function(t,i,a){},8573:function(t,i,a){"use strict";var o=a("30ab"),e=a.n(o);e.a},bd30:function(t,i,a){"use strict";var o=a("e36d"),e=a.n(o);e.a},d11d:function(t,i,a){},d409:function(t,i,a){"use strict";var o=a("d11d"),e=a.n(o);e.a},e36d:function(t,i,a){}}]);
//# sourceMappingURL=chunk-eba14f74.e4f259c1.js.map