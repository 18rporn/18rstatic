(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b29c2e"],{"6f66":function(t,a,i){"use strict";var o=i("d846"),s=i.n(o);s.a},d846:function(t,a,i){},fefa:function(t,a,i){"use strict";i.r(a);var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"sub-navbar node-header node-header-with-node hide-ios"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.forum_conf.name)+" "),t.forum_topic_data?i("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个主题")]):t._e(),t._m(0)]),i("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),i("div",{staticClass:"main-container container",attrs:{id:"main"}},[i("div",{staticClass:"row col-padding-0"},[i("div",{staticClass:"col-9 pr-4 mpr-0"},[t.forum_topic_data?i("div",{staticClass:"topics topics-node card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?i("div",{staticClass:"card-body item-list mb-4"},[i("div",{staticClass:"card-header"},[t._v(t._s(t.$l("thread.top")))]),t._l(t.forum_top_topic_data.datas,(function(t){return i("topic_item",{key:t.id,attrs:{topic_data:t}})})),i("q-separator")],2):t._e(),i("div",{staticClass:"card-body item-list"},t._l(t.forum_topic_data.datas,(function(t){return i("topic_item",{key:t.id,attrs:{topic_data:t}})})),1),i("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),t._l(t._g.PER_PAGE_COUNT,(function(a){return t.forum_topic_data&&t.forum_topic_data.datas?t._e():i("q-card-section",{key:a,staticClass:"p-0"},[i("q-skeleton",{attrs:{height:"50px"}}),i("q-separator")],1)}))],2),i("div",{staticClass:"sidebar col-3"},[i("ads_box_list",{staticClass:"mt-4"}),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body xxbtn"},[i("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color","text-color":"theme-color",label:"发布新话题"},on:{click:function(a){return t.go("/release/thread?fid="+t.fid)}}})],1)]),i("item_tip")],1)])])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"pull-right none"},[i("a",{staticClass:"btn btn-default button-block-node",attrs:{title:"","data-id":"25",href:"#"}},[i("i",{staticClass:"fa fa-eye-slash"}),t._v(" "),i("span",[t._v("忽略节点")])])])}],e=(i("b0c0"),i("7676")),n=i.n(e),c=i("077f"),_={name:"list",mixins:[c["a"]],components:{},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0}},created:function(){window._t=this,this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),this.set_title(this.forum_conf.name)},methods:{on_page_change:function(){this.$router.push({query:n()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data},on_load_topic:function(t){this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_list()}}},r=_,d=(i("6f66"),i("2877")),l=i("fe09"),p=i("6544"),u=i.n(p),f=i("891e"),m=Object(d["a"])(r,o,s,!1,null,"5cb06170",null);a["default"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QSeparator:l["x"],QCardSection:l["g"],QSkeleton:l["y"],QBtn:l["d"]}),u()(m,{VPagination:f["a"]})}}]);
//# sourceMappingURL=chunk-39b29c2e.c025c256.js.map