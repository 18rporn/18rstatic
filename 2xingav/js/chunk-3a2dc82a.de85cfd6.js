(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2dc82a"],{"4b22":function(t,s,a){"use strict";var e=a("5a26"),i=a.n(e);i.a},"4d18":function(t,s,a){},"5a26":function(t,s,a){},e489:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"notifications card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-title  clearfix"},[t._v(" 所有通知 "),a("span",{staticClass:"counter"},[t._v(t._s(t.total_count))]),t._m(0)]),t.message_list?a("div",{staticClass:"message-list"},[a("ul",t._l(t.message_list,(function(t){return a("message_item",{key:t["_id"],attrs:{message_data:t}})})),1)]):t._e(),a("div",{staticClass:"q-pa-lg flex flex-center"},[t.page_num>1?a("q-pagination",{staticClass:"mt-3",attrs:{max:t.is_mobile()?4:7,"direction-links":!0},on:{input:t.on_page_change},model:{value:t.page,callback:function(s){t.page=s},expression:"page"}}):t._e()],1),t.message_list?t._e():a("div",{staticClass:"notification-group"},[a("div",{staticClass:"no-records"},[t._v("没有通知")])])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"actions"},[a("a",{staticClass:"text-danger",attrs:{id:"btn-remove-all","data-remote":"true",rel:"nofollow","data-method":"delete",href:"/notifications/clean"}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "),a("span",[t._v("清空")])])])}],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._m(0),a("div",{staticClass:"message-content"},[a("h2",[t._v("系统消息 · "),a("time",{staticClass:"b2timeago",attrs:{datetime:"{[message.time]}",itemprop:"datePublished","data-tid":"19"}},[t._v(" "+t._s(t.showDate(t.message_data.time))+" ")])]),a("div",{domProps:{innerHTML:t._s(t.message_data.message_html)}})])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-icon"},[a("img",{staticClass:"avatar",attrs:{src:"https://cdn.jsdelivr.net/gh/hrkacc/img@2.4.2/wp-content/themes/b2/Assets/fontend/images/default-avatar.png"}})])}],c={name:"message_item",props:{message_data:void 0},created:function(){}},l=c,r=(a("4b22"),a("2877")),_=Object(r["a"])(l,n,o,!1,null,null,null),m=_.exports,d={name:"notify",components:{message_item:m},data:function(){return{page_num:void 0,page:1,message_list:[],total_count:void 0,PAGE_LIMIT:30}},created:function(){this.load_message_list(this.page)},methods:{update_pagination:function(){this.page_num=parseInt(this.total_count/this.PAGE_LIMIT)+1},on_page_change:function(t){this.pgae=parseInt(t),this.load_message_list(this.page)},load_message_list:function(t){var s=this;this.message_list=[];var a=(parseInt(t)-1)*this.PAGE_LIMIT,e=this.PAGE_LIMIT;this.$axios.get("/app/message/list",{params:{id:this.id,start:a,limit:e}}).then((function(t){console.log("response:",t),s.message_list=t.data.messages,s.total_count=t.data.total_count,s.update_pagination(),s.on_message_loaded()})).catch((function(t){}))},on_message_loaded:function(){for(var t=this,s=[],a=0;a<this.message_list.length;++a)1==this.message_list[a].status&&s.push(this.message_list[a]["_id"]);s&&this.$axios.post("/app/message/read",{user_message_ids:s}).then((function(s){t.update_user_info()})).catch((function(t){}))}}},u=d,g=(a("e650"),a("fe09")),p=Object(r["a"])(u,e,i,!1,null,null,null);s["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QPagination:g["y"]})},e650:function(t,s,a){"use strict";var e=a("4d18"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-3a2dc82a.de85cfd6.js.map