(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b29c2e"],{"6f66":function(t,a,o){"use strict";var i=o("d846"),s=o.n(i);s.a},d846:function(t,a,o){},fefa:function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("div",{staticClass:"sub-navbar node-header node-header-with-node hide-ios"},[o("div",{staticClass:"container"},[o("div",{staticClass:"title"},[t._v(" "+t._s(t.forum_conf.name)+" "),t.forum_topic_data?o("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个主题")]):t._e(),t._m(0)]),o("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),o("div",{staticClass:"main-container container",attrs:{id:"main"}},[o("div",{staticClass:"row col-padding-0"},[o("div",{staticClass:"col-9 pr-4 mpr-0"},[t.forum_topic_data?o("div",{staticClass:"topics topics-node card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?o("div",{staticClass:"card-body item-list mb-4"},[o("div",{staticClass:"card-header"},[t._v(t._s(t.$l("thread.top")))]),t._l(t.forum_top_topic_data.datas,(function(t){return o("topic_item",{key:t.id,attrs:{topic_data:t}})})),o("q-separator")],2):t._e(),o("div",{staticClass:"card-body item-list"},t._l(t.forum_topic_data.datas,(function(t){return o("topic_item",{key:t.id,attrs:{topic_data:t}})})),1),o("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),t._l(t._g.PER_PAGE_COUNT,(function(a){return t.forum_topic_data&&t.forum_topic_data.datas?t._e():o("q-card-section",{key:a,staticClass:"p-0"},[o("q-skeleton",{attrs:{height:"50px"}}),o("q-separator")],1)}))],2),o("div",{staticClass:"sidebar col-3"},[o("ads_box_list",{staticClass:"mt-4"}),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body xxbtn"},[o("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color","text-color":"theme-color",label:"发布新话题"},on:{click:function(a){return t.go("/release/thread?fid="+t.fid)}}})],1)]),o("item_tip")],1)])])])},s=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"pull-right none"},[o("a",{staticClass:"btn btn-default button-block-node",attrs:{title:"","data-id":"25",href:"#"}},[o("i",{staticClass:"fa fa-eye-slash"}),t._v(" "),o("span",[t._v("忽略节点")])])])}],e=(o("b0c0"),o("7676")),n=o.n(e),c=o("077f"),_={name:"list",mixins:[c["a"]],components:{},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0}},created:function(){window._t=this,this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),console.log("forum_conf:",this.forum_conf),this.set_title(this.forum_conf.name)},methods:{on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:n()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data,console.log("on_load_top_topic:",t)},on_load_topic:function(t){console.log("on_load_topic:",t),this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),console.log("this.$route.params.id:",this.$route.params.id),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_list()}}},r=_,d=(o("6f66"),o("2877")),l=o("fe09"),p=o("6544"),u=o.n(p),f=o("891e"),m=Object(d["a"])(r,i,s,!1,null,"5cb06170",null);a["default"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QSeparator:l["A"],QCardSection:l["j"],QSkeleton:l["B"],QBtn:l["f"]}),u()(m,{VPagination:f["a"]})}}]);
//# sourceMappingURL=chunk-39b29c2e.d18eebe7.js.map