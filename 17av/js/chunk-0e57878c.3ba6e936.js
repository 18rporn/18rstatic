(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e57878c"],{"2f71":function(t,e,o){},"32b1":function(t,e,o){"use strict";var s=o("f0ff"),i=o.n(s);i.a},"5d41":function(t,e,o){var s=o("23e7"),i=o("861d"),n=o("825a"),a=o("5135"),l=o("06cf"),c=o("e163");function r(t,e){var o,s,_=arguments.length<3?t:arguments[2];return n(t)===_?t[e]:(o=l.f(t,e))?a(o,"value")?o.value:void 0===o.get?void 0:o.get.call(_):i(s=c(t))?r(s,e,_):void 0}s({target:"Reflect",stat:!0},{get:r})},"60d8":function(t,e,o){"use strict";var s=o("a9cc"),i=o.n(s);i.a},a9cc:function(t,e,o){},b853:function(t,e,o){"use strict";var s=o("2f71"),i=o.n(s);i.a},e49f:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4 row col-padding-0 release_thread"},[o("node_list_dialog",{attrs:{show_types:t.show_types,dialog_title:"请选择板块",show:t.show_node_dialog},on:{"update:show":function(e){t.show_node_dialog=e},on_select_forum:t.on_dialog_select_forum}}),t.editor?t._e():o("div",{staticClass:"col-9"},[o("div",{staticClass:"card pa-3"},[o("q-card-section",{staticClass:"p-0 mb-4"},[o("q-skeleton",{attrs:{height:"40px"}})],1),o("q-card-section",{staticClass:"p-0 mb-4"},[o("q-skeleton",{attrs:{height:"60px"}})],1),o("q-card-section",{staticClass:"p-0"},[o("q-skeleton",{attrs:{height:"450px"}})],1)],1)]),t.post_success?o("div",{staticClass:"col-9 pr-2 mpr-0",staticStyle:{"margin-bottom":"16px"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("提示")]),o("div",{staticClass:"card-body"},[o("span",{staticClass:"mr-4"},[t._v(" "+t._s(t.post_success_tip))]),o("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){t.post_success=!1}}},[t._v("继续编辑")]),o("div",{staticClass:"mt-3"},[o("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){return t.go("/topic/"+t.edit_id+"?edit=true")}}},[t._v("查看(可能未更新) ")])],1)],1)])]):t._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:t.editor&&!t.post_success,expression:"editor && !post_success"}],staticClass:"col-9 pr-2 mpr-0"},[o("div",{staticClass:"card card-lg pa-3"},[o("h1",{staticClass:"b__title mb-5"},[t._v(" 发布 ")]),o("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset(e)}}},[o("div",{staticClass:"mb-3"},[o("span",[t._v(" "+t._s(t.$l("thread.node"))+": ")]),o("span",{staticClass:"select_node font-weight-bold",on:{click:t.on_select_node}},[t._v(" 请选择板块 "),o("v-icon",{attrs:{color:"grey",small:!0,dark:""}},[t._v(" far fa-hand-pointer ")])],1),t.this_forum_conf.name?o("span",{staticClass:"ml-2 font-weight-bold"},[t._v(" / "+t._s(t.this_forum_conf.name))]):t._e(),o("node_list_dialog",{attrs:{cl:""},on:{on_select_forum:t.on_dialog_select_forum}}),o("q-btn",{staticClass:"padding_none none",attrs:{unelevated:"",color:"black",label:t.show_select_forum_text?t.show_select_forum_text:"请选择"}},[o("q-menu",[o("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[t._l(t.forums_options,(function(e){return o("q-item",{key:e.fid,attrs:{clickable:""},on:{click:function(o){return t.on_select_forum(e)}}},[o("q-item-section",[t._v(t._s(e.name))]),o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),o("q-menu",{attrs:{anchor:"top right",self:"top left"}},[o("q-list",t._l(e.list,(function(e){return o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e.fid,attrs:{dense:"",clickable:""},on:{click:function(o){return t.on_select_forum(e)}}},[o("q-item-section",[t._v(t._s(e.name))])],1)})),1)],1)],1)})),o("q-separator")],2)],1)],1)],1),o("q-input",{staticClass:"mb-3",attrs:{label:"标题"},model:{value:t.thread.title,callback:function(e){t.$set(t.thread,"title",e)},expression:"thread.title"}}),o("div",{staticClass:"card-body  markdown-toc entry-content markdown ql-container ql-snow",attrs:{id:"editor"}}),t.editor_setting.release&&t.editor_setting.release.buy?o("v-row",{staticClass:"mt-5",staticStyle:{"margin-left":"0px","margin-right":"0px"}},[t.editor_setting.release.buy_content?o("q-btn",{staticClass:"mr-5",attrs:{unelevated:"",color:"primary",icon:"far fa-plus-square",label:t.$l("thread.attach_content")},on:{click:function(e){return t.on_show_attach_content_dialog(void 0)}}}):t._e(),!1&t.editor_setting.release.buy_theav?o("q-btn",{attrs:{unelevated:"",size:"sm",color:"primary",icon:"far fa-plus-square",label:t.add_buy_theav_open?"移除付费影片":"添加付费影片"},on:{click:t.add_buy_theav}}):t._e()],1):t._e(),t.buy_contents&&t.buy_contents.length>0?o("div",{staticClass:"mt-5  card buy_contents"},[o("h6",[t._v(t._s(t.$l("thread.attach_content"))+":")]),t._l(t.buy_contents,(function(e,s){return o("v-row",{key:s},[o("v-col",[t._v(" * "),e.gold?o("span",[t._v("价格:"),o("span",{staticClass:"text-theme-color"},[t._v(t._s(e.gold)+"金币")])]):t._e(),o("span",{staticClass:"ml-2"},[t._v(t._s(e.content))]),e.upload_files&&e.upload_files.length>0?o("span",{staticClass:"ml-2 text-theme-color"},[t._v(" "+t._s(e.upload_files.length)+"个文件 ")]):t._e(),o("span",[o("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(o){return t.on_show_attach_content_dialog(e)}}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" 编辑 ")],1)],1)])],1)}))],2):t._e(),t.add_buy_theav_open&&t.this_forum_conf.release&&t.this_forum_conf.release.buy?o("div",{staticClass:"mt-5  bbt-module"},[o("h6",[t._v("付费影片:")]),o("v-row",{staticClass:"item buy_price",attrs:{cols:"12"}},[t._v(" 购买价格: "),o("q-input",{staticClass:"col-3",attrs:{outlined:"",placeholder:"0-2000金币",label:"金币"},model:{value:t.buy_theav.price,callback:function(e){t.$set(t.buy_theav,"price",e)},expression:"buy_theav.price"}}),o("q-input",{attrs:{outlined:"",label:"请输入影片ID"},model:{value:t.buy_theav.id,callback:function(e){t.$set(t.buy_theav,"id",e)},expression:"buy_theav.id"}})],1)],1):t._e(),t.editor_setting.release&&t.editor_setting.release.video?o("div",{staticClass:"mt-5"},[t.show_attach_content_dialog?o("attach_content",{attrs:{buy_content:t.buy_content,show:t.show_attach_content_dialog},on:{"update:buy_content":function(e){t.buy_content=e},on_submit:t.on_submit_buy_content,"update:show":function(e){t.show_attach_content_dialog=e}}}):t._e()],1):t._e(),t.thread.setting?o("div",{staticClass:"setting card q-gutter-sm mt-3"},[o("h1",{staticClass:"b__title forum_title"},[t._v(" 设置 ")]),o("q-checkbox",{attrs:{label:"不可回复",color:"primary"},model:{value:t.thread.setting.not_reply,callback:function(e){t.$set(t.thread.setting,"not_reply",e)},expression:"thread.setting.not_reply"}})],1):t._e(),o("div",{staticClass:"submit xxbtn mt-3 cl"},[o("q-btn",{staticClass:"float-right",attrs:{padding:"0px",color:"theme-color",loading:t.release_loading,icon:"far fa-edit","text-color":"theme-color",label:"发布"},on:{click:t.on_release}})],1)],1)])]),o("div",{staticClass:"col-3"},[o("h6",[t._v("注册事项")]),o("div",[t._v(" * 严禁儿童色情和兽交，一禁发现，立即删除并封号。 ")]),o("div",[t._v(" * 违反台湾，美国和荷兰法律的内容，不允许发布 ")]),o("ads_box_list",{staticClass:"mt-4"})],1),o("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/quill/quill.js"}}),o("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/quill/quill.htmlEditButton.min.js?11"}}),t.loaded_quill?o("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/js/editor/image-resize.min.js"}}):t._e(),o("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/js/lib/resumable.min.js"}})],1)},i=[],n=(o("c975"),o("b0c0"),o("e439"),o("5d41"),o("7e84"));function a(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=Object(n["a"])(t),null===t)break;return t}function l(t,e,o){return l="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var s=a(t,e);if(s){var i=Object.getOwnPropertyDescriptor(s,e);return i.get?i.get.call(o):i.value}},l(t,e,o||t)}var c=o("d4ec"),r=o("bee2"),_=o("262e"),d=o("2caf"),u=(o("7bc9"),o("b48a"),o("077f")),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-dialog",{staticClass:"xx_dialog",attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("q-card",{staticStyle:{"min-width":"40%"}},[o("q-card-section",{staticClass:"row items-center q-pb-none "},[o("div",{staticClass:"text-h6 title "},[t._v(t._s(t.$l("thread.attach_content")))]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",[o("v-row",{staticClass:"item  mb-3 buy_price none",attrs:{cols:"1"}},[o("span",{staticClass:"mr-3"},[t._v("购买价格:")]),o("q-input",{staticClass:"col-3",attrs:{type:"number",outlined:"",placeholder:"0-2000金币",label:"金币"},model:{value:t.buy_content.price,callback:function(e){t.$set(t.buy_content,"price",e)},expression:"buy_content.price"}})],1),o("v-row",[o("q-input",{attrs:{outlined:"",label:"请输入文件或者视频的描述"},model:{value:t.buy_content.content,callback:function(e){t.$set(t.buy_content,"content",e)},expression:"buy_content.content"}})],1),o("v-row",{staticClass:"mt-3"},[o("v-btn",{attrs:{color:"white darken-1 ml-4 mr-4",text:""},on:{click:t.on_show_upload_file_dialog}},[o("v-icon",[t._v("add")]),t._v(" "+t._s(t.$l("thread.upload_file"))+" ")],1)],1),this.buy_content.upload_files.length>0?o("div",{staticClass:"mb-3 mt-2"},[o("h5",{staticClass:"text-h6 title"},[t._v("文件列表")]),o("div",[o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.buy_content.upload_files,(function(e,s){return o("v-list-item",{key:s},[o("v-list-item-content",[o("v-list-item-title",[t._v(" "+t._s(e.file_name)+" ")]),o("v-list-item-content",[o("q-input",{staticClass:"col-8",attrs:{type:"text",placeholder:"请设置文字显示的名字，不用加后缀名，比如mp4,torrent",label:"请设置文字显示的名字"},model:{value:e.set_name,callback:function(o){t.$set(e,"set_name",o)},expression:"upload_file.set_name"}})],1),o("v-icon",{staticClass:"delete",attrs:{title:t.$l("delete"),dark:""},on:{click:function(o){return t.on_delete_upload_file(e)}}},[t._v("delete ")])],1)],1)})),1)],1)]):t._e(),o("v-row",[o("v-col",[o("q-btn",{staticClass:"float-lg-right",attrs:{color:"primary",label:"确定"},on:{click:t.on_sure}}),o("q-btn",{staticClass:"mr-3 float-lg-right",attrs:{color:"",label:"取消"},on:{click:t.on_close_dialog}})],1)],1),o("v-row",[t.show_upload_file_dialog?o("upload_file",{staticClass:"mt-5",attrs:{show:t.show_upload_file_dialog},on:{upload_complete:t.on_upload_complete,upload_hide:t.on_upload_hide,"update:show":function(e){t.show_upload_file_dialog=e}}}):t._e()],1)],1)],1)],1)},p=[],f=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-dialog",{staticClass:"xx_dialog",attrs:{persistent:""},on:{hide:t.on_hide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center q-pb-none "},[o("div",{staticClass:"text-h6 title "},[t._v(t._s(t.$l("thread.upload_file")))]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:t.on_click_close}})],1),o("q-card-section",[o("v-alert",{directives:[{name:"show",rawName:"v-show",value:!t.uploading_file_name,expression:"!uploading_file_name"}],staticClass:"uploading-tip",attrs:{text:"",color:"red lighten-2"}},[t._v(" 上传的视频文件，请不要打包成压缩包（比如zip,rar）,请上传原始的视频文件。 ")]),t.uploading_file_name?o("v-alert",{staticClass:"uploading-tip",attrs:{text:"",color:"red lighten-2",icon:!1}},[o("span",{staticClass:"title"},[t._v("文件名:")]),t._v(" "),o("span",[t._v(" "+t._s(t.uploading_file_name))])]):t._e(),t.uploading_file_name?o("q-linear-progress",{staticClass:"q-mt-sm mb-3",attrs:{stripe:"",rounded:"",size:"20px",value:t.upload_progress,color:"red"}}):t._e(),t.browse_loading?o("v-alert",{staticClass:"uploading-tip",attrs:{text:"",type:"error",icon:!1}},[o("p",[o("span",[o("span",[t._v("上传进度:")]),t._v(" "+t._s((100*this.upload_progress).toFixed(2))+"% ")])]),o("p",{staticClass:"red"},[t._v(" 正在上传，请不要关闭此窗口 ")])]):t._e(),o("div",{staticClass:"xxbtn"},[o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.video_upload_resumable,expression:"video_upload_resumable"}],staticClass:"full-width",attrs:{id:"browseButton",icon:"cloud",padding:"0px",color:"theme-color","text-color":"theme-color",loading:t.browse_loading,label:t.browse_button_label}}),t.video_upload_resumable?t._e():o("div",[o("q-skeleton",{attrs:{animation:t.animation,width:"100%",height:"46px"}})],1)],1)],1)],1)],1)}),m=[],b={name:"upload_file",props:{show:void 0},destroyed:function(){this.cancel_upload(),console.log("call destroyed")},created:function(){this.upload_init(),window._upload_file_dialog=this},data:function(){return{call_cancel:!1,orginal_title:document.title,video_upload_resumable:void 0,uploading_file_name:void 0,upload_progress:0,browse_loading:!1,upload_complete:!1,browse_button_label:this.$l("videos.upload"),upload_token:void 0}},watch:{show:function(t,e){this.$emit("update:show",t),console.log("call watch show change")}},methods:{on_click_close:function(t){console.log("on_click_close:",t),this.call_cancel=!0},cancel_upload:function(){this.video_upload_resumable&&(this.video_upload_resumable.cancel(),this.call_cancel=!0,this.set_title(this.orginal_title))},on_hide:function(){console.log("call upload file dialog on hide"),this.cancel_upload(),this.$emit("upload_hide",{})},on_close_dialog:function(){},on_upload_cancel:function(){this.call_cancel=!0},on_upload_error:function(){},on_upload_complete:function(){console.log("this.call_cancel:",this.call_cancel),this.call_cancel||(console.log("call on_upload_complete"),this.upload_complete=!0,this.set_title(this.orginal_title),this.$emit("upload_complete",{file_name:this.uploading_file_name,token:this.upload_token}),this.$q.notify({message:"已成功上传文件。",color:"primary"}),this.show=!1)},on_upload_progress:function(){this.upload_progress=this.video_upload_resumable.progress();var t="("+parseInt(100*this.upload_progress)+"%)正在上传";this.set_title(t),this.browse_loading=!0},on_add_upload_file:function(t,e){console.log("fileAdded:",t,e),this.call_cancel=!1;var o=this.video_upload_resumable.getSize(),s=o/1024/1024;s>10240||(this.video_upload_resumable.upload(),this.uploading_file_name=this.video_upload_resumable.files[0].fileName)},upload_init:function(){var t=this;return window.Resumable?document.getElementById("browseButton")?void this.$axios.get("/app/upload/token").then((function(e){console.log("[upload token]response:",e);var o=e.data.nid,s=t.$config.space_confs[o];console.log("space_conf:",s);var i=s.static_hosts[0],n="https://"+i+"/upload";console.log("upload_target:",n),t.upload_token=e.data.token,t.video_upload_resumable=new window.Resumable({target:n,query:{token:t.upload_token,network:"xx"}}),t.video_upload_resumable.assignBrowse(document.getElementById("browseButton")),t.video_upload_resumable.on("fileAdded",t.on_add_upload_file),t.video_upload_resumable.on("filesAdded",t.on_add_upload_file),t.video_upload_resumable.on("progress",t.on_upload_progress),t.video_upload_resumable.on("error",t.on_upload_error),t.video_upload_resumable.on("complete",t.on_upload_complete)})).catch((function(e){console.log("[upload_file]error:",e),t.show=!1,t.$q.notify({message:"获取上传文件凭证失败，请重试.",color:"primary"}),t.$emit("on_upload_error",{})})):setTimeout(this.upload_init,100):(console.log("no Resumable"),setTimeout(this.upload_init,100))}}},g=b,v=(o("60d8"),o("2877")),w=o("fe09"),y=o("6544"),k=o.n(y),C=o("0798"),x=Object(v["a"])(g,f,m,!1,null,"6ab5020c",null),q=x.exports;x.options.components=Object.assign(Object.create(x.options.components||null),x.options.components||{},{QDialog:w["n"],QCard:w["h"],QCardSection:w["j"],QSpace:w["E"],QBtn:w["f"],QLinearProgress:w["v"],QSkeleton:w["C"]}),x.options.directives=Object.assign(Object.create(x.options.directives||null),x.options.directives||{},{ClosePopup:w["a"]}),k()(x,{VAlert:C["a"]});var $={name:"attach_content",components:{upload_file:q},props:{show:void 0,buy_content:{price:0,content:"",upload_files:[]}},created:function(){console.log("create attach_content:",this.buy_content)},data:function(){return{show_upload_file_dialog:!1}},watch:{show:function(t,e){console.log("call watch show change"),this.$emit("update:show",t)}},methods:{on_sure:function(){if(!this.buy_content.content||this.buy_content.content.length<=1)return this.$q.notify({message:"内空不能为空！",color:"primary"});if(this.buy_content.upload_files&&this.buy_content.upload_files.length>0)for(var t=0;t<this.buy_content.upload_files.length;++t){var e=this.buy_content.upload_files[t];if(!e.set_name)return this.$q.notify({message:"请设置上传文件的显示名称！",color:"primary"})}this.$emit("on_submit",this.buy_content),console.log("[on_sure]:",this.show),this.show=!1,this.$emit("update:show",this.show)},on_close_dialog:function(){var t=this;this.buy_content.upload_files&&this.buy_content.upload_files.length>0?this.$q.dialog({title:"提示",message:"已有文件上传完成，是否确定关闭？",cancel:"取消",persistent:!0,ok:"确定"}).onOk((function(){t.show=!1})).onCancel((function(){})).onDismiss((function(){})):this.show=!1},on_upload_hide:function(){console.log("call on_upload_hide"),this.show_upload_file_dialog=!1},on_upload_complete:function(t){console.log("on_upload_complete:",t);for(var e=0;e<this.buy_content.upload_files.length;++e){var o=this.buy_content.upload_files[e];if(o.token==t.token)return console.log("重复:",t),!1}this.buy_content.upload_files.push(t),this.show_upload_file_dialog=!1},on_delete_upload_file:function(t){var e=this;console.log("on_delete_upload_file:",t),this.$q.dialog({title:"提示",message:"是否确定删除此上传文件？",cancel:"取消",persistent:!0,ok:"确定"}).onOk((function(){e.buy_content.upload_files=e.buy_content.upload_files.filter((function(e){return e.token!=t.token})),console.log("this.buy_content.upload_files:",e.buy_content.upload_files)})).onCancel((function(){})).onDismiss((function(){}))},on_show_upload_file_dialog:function(){var t=this;console.log("call on_show_upload_file_dialog"),this.show_upload_file_dialog=!1,this.$nextTick((function(){t.show_upload_file_dialog=!0})),this.$forceUpdate()}}},j=$,O=(o("32b1"),o("8336")),Q=o("62ad"),B=o("132d"),I=o("da13"),N=o("5d23"),S=o("1baa"),T=o("0fd9"),A=Object(v["a"])(j,h,p,!1,null,"3d83db25",null),V=A.exports;A.options.components=Object.assign(Object.create(A.options.components||null),A.options.components||{},{QDialog:w["n"],QCard:w["h"],QCardSection:w["j"],QSpace:w["E"],QBtn:w["f"],QInput:w["r"]}),A.options.directives=Object.assign(Object.create(A.options.directives||null),A.options.directives||{},{ClosePopup:w["a"]}),k()(A,{VBtn:O["a"],VCol:Q["a"],VIcon:B["a"],VListItem:I["a"],VListItemContent:N["a"],VListItemGroup:S["a"],VListItemTitle:N["c"],VRow:T["a"]});var E={release:{buy:!0,buy_theav:!0,buy_content:!0,setting:!0,update_file:!1,upload_video:!1}},R={price:0,content:"",upload_files:[]},L={name:"thread",mixins:[u["a"]],components:{attach_content:V},created:function(){var t=this;if(this.show_types=["videos"],window._t=this,!this.$store.state.hasLogin){this.$q.dialog({title:this.$l("title_board_message"),message:"对不起，请先登录",cancel:!1,ok:this.$l("login"),persistent:!0}).onOk((function(e){t.$router.push("/user/login")}));var e=this.$route.query.show_types;e&&(this.show_types=[],this.show_types.push(e))}this.create_editor(),this.forums_options=[],this.update_forums_options(this.$forum_conf.forums,this.forums_options);var o=this.getUrlVars();if(o.fid){var s=this.get_forum(o.fid);console.log("this_forum_conf:",s),s&&this.on_select_forum(s)}o.edit_id&&(this.edit_id=o.edit_id),console.log("forums_options:",this.forums_options)},data:function(){return{show_attach_content_dialog:!1,show_node_dialog:!1,editor_setting:{},loaded_quill:!1,editor:void 0,title:"",release_loading:!1,add_buy_content_open:!1,add_buy_download_open:!1,add_buy_theav_open:!1,attach_file_upload:void 0,thread:{title:"",setting:{not_reply:!1},fid:void 0},buy_download:{price:20},buy_content:Object.assign({},R),buy_theav:{price:100,id:""},post_success:!1,post_success_tip:"恭喜你，已成功提交，请等待审核通过。",edit_id:"",show_loading:!1,forums_options:[],forums_options_disabled:!1,this_forum_conf:Object.create(E),select_forum_conf:void 0,show_select_forum_text:void 0,post_response:void 0,buy_contents:[],show_types:["videos"]}},methods:{update_setting:function(){this.editor_setting.release=E.release,this.this_forum_conf.release&&(this.editor_setting.release=this.this_forum_conf.release),this.this_forum_conf.setting&&(this.thread.setting=this.this_forum_conf.setting),this.$forceUpdate()},on_dialog_select_forum:function(t){this.on_select_forum(t),this.show_node_dialog=!1,this.$forceUpdate()},on_select_forum:function(t){this.select_forum_conf=this.this_forum_conf=t;var e=this.this_forum_conf.release;e||(e={}),this.this_forum_conf.release=Object.assign({},E.release,e);var o=[];this.show_select_forum_text="",this.get_forum_list(this.select_forum_conf.fid,o);for(var s=0;s<o.length;++s)this.show_select_forum_text+=o[s]["name"]+"/";this.show_select_forum_text=this.show_select_forum_text.substr(0,this.show_select_forum_text.length-1),this.thread.fid=this.this_forum_conf.fid,this.update_setting()},on_release:function(){var t=this,e={thread_inner_html:this.editor.root.innerHTML,edit_id:this.edit_id,thread:this.thread};this.buy_contents&&this.buy_contents.length>0&&(e["buy_contents"]=this.buy_contents),this.add_buy_theav_open&&(e["buy_theav"]=this.buy_theav),this.release_loading=!0,this.$axios.post("/app/release/thread",e).then((function(e){t.release_loading=!1,e&&(t.post_success=!0,t.post_response=e),t.edit_id=e.data.id})).catch((function(e){t.release_loading=!1,t.$message("发布话题出错，请稍等再试或者联系我们。")}))},onReset:function(){},create_forum_list:function(){},on_select_node:function(){this.show_node_dialog=!1,this.show_node_dialog=!0,this.$forceUpdate()},add_buy_theav:function(){this.add_buy_theav_open=!this.add_buy_theav_open},show_edit:function(){var t=this;this.edit_id&&(console.log("show_edit:",this.edit_id),this.show_loading=!0,this.get_topic({id:this.edit_id,from_cache:!1,cb:function(e){t.thread=Object.assign(t.thread,e),t.thread.title=e.title,e.setting&&(t.thread.setting=e.setting),console.log("thread.content:",e.content),t.editor.root.innerHTML=e.content,console.log("thread.content2:"),e.buy_contents&&(t.buy_contents=e.buy_contents),console.log("this.buy_contents:",t.buy_contents),e.buy_theav&&(t.buy_theav=Object.assign(t.buy_theav,e.buy_theav),t.buy_theav.id&&(t.add_buy_theav_open=!0),t.thread.forum=e.fid,t.this_forum_conf=t.get_forum(e.fid),t.on_select_forum(t.this_forum_conf)),t.$forceUpdate(),t.show_loading=!1}}))},on_load_editor:function(){this.show_edit()},on_show_attach_content_dialog:function(t){var e=this;console.log("buy_content:",t),t||(t=Object.assign({},R),t.upload_files=[]),t&&(this.buy_content=t),this.show_attach_content_dialog=!1,this.$nextTick((function(){e.show_attach_content_dialog=!0,e.$forceUpdate()})),this.$forceUpdate()},on_submit_buy_content:function(t){console.log("on_submit_buy_content:",t);for(var e=!0,o=0;o<this.buy_contents.length;++o)if(this.buy_contents[o]==t){e=!1;break}e&&this.buy_contents.push(t),console.log("[on_submit_buy_content] is_add:",e),this.$forceUpdate()},create_editor:function(){console.log("call create_editor");var t=window.Quill;t&&!this.loaded_quill&&(this.loaded_quill=!0);var e=window.ImageResize;if(!t||!e)return setTimeout(this.create_editor,100);var o=document.getElementById("editor");if(!o)return setTimeout(this.create_editor,100);if(!window.htmlEditButton)return setTimeout(this.create_editor,100);var s=[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","image"],["clean"]];try{t.register("modules/htmlEditButton",window.htmlEditButton);var i=t.import("blots/block"),a=function(t){Object(_["a"])(o,t);var e=Object(d["a"])(o);function o(){return Object(c["a"])(this,o),e.apply(this,arguments)}return Object(r["a"])(o,null,[{key:"formats",value:function(t){return o.tagName.indexOf(t.tagName)+1}}]),o}(i);a.blotName="header",a.tagName=["H1","H2"],t.register(a);var u=function(t){Object(_["a"])(o,t);var e=Object(d["a"])(o);function o(){return Object(c["a"])(this,o),e.apply(this,arguments)}return o}(i);u.tagName="div",u.blotName="div",u.allowedChildren=i.allowedChildren,u.allowedChildren.push(i),t.register(u);var h=t.import("blots/block/embed"),p=function(t){Object(_["a"])(o,t);var e=Object(d["a"])(o);function o(){return Object(c["a"])(this,o),e.apply(this,arguments)}return Object(r["a"])(o,[{key:"format",value:function(t,e){"height"===t||"width"===t?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t,e):l(Object(n["a"])(o.prototype),"format",this).call(this,t,e)}}],[{key:"create",value:function(t){var e=l(Object(n["a"])(o),"create",this).call(this);return e.setAttribute("src",t),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",!0),e}},{key:"formats",value:function(t){var e={};return t.hasAttribute("height")&&(e.height=t.getAttribute("height")),t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}},{key:"value",value:function(t){return t.getAttribute("src")}}]),o}(h);p.blotName="video",p.tagName="iframe",t.register(p);try{this.editor=new t("#editor",{modules:{toolbar:s,htmlEditButton:{msg:"修改HTML源码",okText:"确定",cancelText:"取消",buttonHTML:"&lt;&gt;",buttonTitle:"显示HTML源码",syntax:!1},imageResize:{displayStyles:{backgroundColor:"black",border:"none",color:"white"},displaySize:!0}},theme:"snow"})}catch(f){console.error("[new Quill]e:",f),location.reload()}this.on_load_editor()}catch(f){console.log("create editor error:",f)}}}},U=L,z=(o("b853"),Object(v["a"])(U,s,i,!1,null,null,null));e["default"]=z.exports;z.options.components=Object.assign(Object.create(z.options.components||null),z.options.components||{},{QCardSection:w["j"],QSkeleton:w["C"],QBtn:w["f"],QMenu:w["x"],QList:w["w"],QItem:w["s"],QItemSection:w["t"],QIcon:w["p"],QSeparator:w["B"],QInput:w["r"],QCheckbox:w["k"]}),z.options.directives=Object.assign(Object.create(z.options.directives||null),z.options.directives||{},{ClosePopup:w["a"]}),k()(z,{VBtn:O["a"],VCol:Q["a"],VIcon:B["a"],VRow:T["a"]})},f0ff:function(t,e,o){}}]);
//# sourceMappingURL=chunk-0e57878c.3ba6e936.js.map