(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac057"],{1882:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"site-content",attrs:{id:"content"}},[e("div",{staticClass:"author wrapper",attrs:{id:"author"}},[e("div",{staticClass:"author-table b2-radius mg-t row col-padding-0"},[e("div",{staticClass:"col-3 author-page-right mpr-0 pr-3"},[e("div",{staticClass:"author-page-right-in box card"},[e("div",{staticClass:"user-sidebar",class:{active:"node"==t.show_what}},[e("div",{staticClass:"user-sidebar-info"},[e("a",{staticClass:"link-block",on:{click:function(a){return t.go("/admin/node")}}}),e("p",[e("v-icon",{attrs:{color:"grey",small:!0}},[t._v("fas fa-user-friends")]),t._v(" 我的板块 ")],1),e("div",{staticClass:"author-sidebar-down"},[e("v-icon",{attrs:{color:"grey",dark:""}},[t._v("keyboard_arrow_right")])],1)])]),e("div",{staticClass:"user-sidebar",class:{active:"topic"==t.show_what}},[e("div",{staticClass:"user-sidebar-info"},[e("a",{staticClass:"link-block",on:{click:function(a){return t.go("/admin/topic")}}}),e("p",[e("v-icon",{attrs:{color:"grey",small:!0}},[t._v("fas fa-user-friends")]),t._v(" 审核的帖子 ")],1),e("div",{staticClass:"author-sidebar-down"},[e("v-icon",{attrs:{color:"grey",dark:""}},[t._v("keyboard_arrow_right")])],1)])])])]),e("div",{staticClass:"col-9"},[e("div",{staticClass:"card"},[e(t.show_what,{tag:"component",attrs:{userinfo:t.$store.state.user.userinfo}})],1)])])])])},o=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{staticClass:"full-width"},[e("q-tabs",{attrs:{shrink:"",stretch:"",align:"left",breakpoint:0},on:{input:t.on_tab_event},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"released",label:"已发布"}}),e("q-tab",{attrs:{name:"verifying",label:"待审核"}})],1),e("q-separator"),e("q-tab-panels",{staticClass:"mb-5",attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{staticClass:"p-0",attrs:{name:"released"}},[t.topic_object.released?e("div",{staticClass:"topics topics-node card"},[0==t.topic_object.released.total_count?e("div",[e("v-alert",{attrs:{type:"info"}},[t._v(" 没有发布的话题 ")]),e("v-row",{attrs:{align:"center"}},[e("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(a){return t.go("/release/thread")}}},[t._v(" 发布新话题 ")])],1)],1):e("div",t._l(t.topic_object["released"].datas,(function(t){return e("topic_item",{key:t.id,attrs:{topic_data:t}})})),1)]):t._e()]),e("q-tab-panel",{staticClass:"p-0",attrs:{name:"verifying"}},[t.topic_object.verifying?e("div",{staticClass:"topics topics-node card"},[0==t.topic_object.verifying.total_count?e("div",[e("v-alert",{attrs:{type:"info"}},[t._v(" 没有审核的话题 ")]),e("v-row",{attrs:{align:"center"}},[e("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(a){return t.go("/release/thread")}}},[t._v(" 发布新话题 ")])],1)],1):e("div",t._l(t.topic_object["verifying"].datas,(function(t){return e("topic_edit_item",{key:t.id,attrs:{verifying:!0,topic_data:t}})})),1)]):t._e()])],1)],1)},n=[],r=e("53ca"),c=e("9d56"),l={name:"topic",components:{topic_edit_item:c["a"]},data:function(){return{tab:"released",topic_object:{}}},created:function(){var t=this.show_released;if(location.hash){var a="show_"+location.hash.substr(1),e=this[a];console.log("type:",Object(r["a"])(e)),"function"==typeof e&&(t=e)}t()},methods:{on_tab_event:function(t){console.log("on_tab_event:",t);var a="show_"+t,e=this[a];e&&e()},show_released:function(){var t=this;this.tab="released",this.$axios.get("/app/topic/list",{params:{start:0,limit:30,admin:1,type:"released"}}).then((function(a){console.log("topic list:",a),t.topic_object["released"]=a.data,console.log("topic_object:",t.topic_object),t.$forceUpdate()})).catch((function(t){console.log("error:",t)}))},show_verifying:function(){var t=this;this.tab="verifying",this.$axios.get("/app/topic/list",{params:{start:0,limit:30,admin:!0,type:"verifying"}}).then((function(a){console.log("topic list:",a),t.topic_object["verifying"]=a.data,console.log("topic_object:",t.topic_object),t.$forceUpdate()})).catch((function(t){}))}}},d=l,p=e("2877"),u=e("fe09"),h=e("6544"),b=e.n(h),v=e("0798"),f=e("8336"),_=e("0fd9"),g=Object(p["a"])(d,s,n,!1,null,"1644344b",null),m=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QCard:u["h"],QTabs:u["K"],QTab:u["G"],QSeparator:u["B"],QTabPanels:u["I"],QTabPanel:u["H"]}),b()(g,{VAlert:v["a"],VBtn:f["a"],VRow:_["a"]});var w={name:"index",components:{topic:m},data:function(){return{show_what:"info",user:{},visit_uid:void 0}},watch:{$route:function(t,a){this.show_what=this.$route.params.id}},created:function(){var t=this;console.log("user ceneter created:",this.$route.params.id),window._t=this,this.$store.state.hasLogin,"5eef233beb94dc31801bd9aa".length==this.$route.params.id.length?this.visit_uid=this.$route.params.id:this.show_what=this.$route.params.id,this.listener_login=this.$hub.on("event:login",(function(a){t.$forceUpdate()}))},destroyed:function(){this.listener_login.off()}},y=w,C=e("132d"),k=Object(p["a"])(y,i,o,!1,null,"f7b83760",null);a["default"]=k.exports;b()(k,{VIcon:C["a"]})}}]);
//# sourceMappingURL=chunk-2d0ac057.1337efa4.js.map