(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01d6fdf1"],{"13b3":function(t,e,i){},"166a":function(t,e,i){},"18a6":function(t,e,i){"use strict";var n=i("9c33"),s=i.n(n);s.a},"36a1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("node_list_dialog",{attrs:{show:t.show_node_dialog},on:{on_select_forum:t.on_select_forum}}),i("div",{staticClass:"sub-navbar node-header  hide-ios"},[i("div",{staticClass:"container"},[i("ul",{staticClass:"filter nav nav-pills"},[i("li",[i("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v(t._s(t.$l("thread.all_node"))+" "),i("span",{staticClass:"caret-right"})])]),i("li",{class:{active:"index"==t.show_what}},[i("a",{attrs:{href:"/topics/index"}},[t._v("默认")])]),i("li",{class:{active:"essence"==t.show_what}},[i("router-link",{attrs:{to:"/topics/essence"}},[i("i",{staticClass:"fa fa-award"}),t._v(" "+t._s(t.$l("thread.essence"))+" ")])],1),t._m(0),i("li",{class:{active:"last"==t.show_what}},[i("router-link",{attrs:{to:"/topics/last"}},[t._v(t._s(t.$l("thread.last")))])],1)])])]),i("div",{staticClass:"main-container container row",attrs:{id:"main"}},[i("div",{staticClass:"col-9 pr-4 mpr-0 topic_container"},[i("div",{staticClass:"card"},[i(t.show_what,{tag:"component"})],1)]),i("div",{staticClass:"sidebar col-3"},[i("ads_box_list",{staticClass:"mt-4"}),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body xxbtn"},[i("q-btn",{staticClass:"full-width",attrs:{padding:"0px",color:"theme-color","text-color":"theme-color",label:"发布新话题"},on:{click:function(e){return t.go("/release/thread?fid="+t.fid)}}})],1)]),i("item_tip")],1)])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"none"},[i("a",{attrs:{href:"/topics/popular","data-turbolinks-action":"replace"}},[t._v("优质帖子")])])}],a=i("077f"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topics topics-node card"},[i("ads_banner_list"),t.forum_topic_data?i("div",{staticClass:"card-body item-list"},t._l(t.forum_topic_data.datas,(function(t){return i("topic_item",{key:t.id,attrs:{show_node:!0,topic_data:t}})})),1):t._e()],1)},r=[],c={name:"essence",mixins:[a["a"]],created:function(){this.load_list(),this.set_title(this.$l("thread.essence"))},data:function(){return{page:1,page_num:void 0,forum_topic_data:void 0}},methods:{on_load_topic:function(t){this.forum_topic_data=t.data},load_list:function(){var t=this.getUrlVars(),e=!this.$web_conf.debug;t.from_cache&&(e=JSON.parse(t.from_cache)),this.get_topic_list({start:0,limit:this._g.PER_PAGE_COUNT,settoessence:!0,from_cache:e,cb:this.on_load_topic})}}},l=c,u=i("2877"),h=Object(u["a"])(l,o,r,!1,null,"7a802777",null),d=h.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topics topics-node card"},[i("ads_banner_list"),t.forum_topic_data?i("div",{staticClass:"card-body item-list"},t._l(t.forum_topic_data.datas,(function(t){return i("topic_item",{key:t.id,attrs:{show_node:!0,topic_data:t}})})),1):t._e(),t.forum_topic_data?i("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)},p=[],v=i("7676"),m=i.n(v),_={name:"last",mixins:[a["a"]],data:function(){return{page:1,page_num:void 0,forum_topic_data:void 0}},created:function(){this.set_title(this.$l("thread.last")),this.load_list()},methods:{on_page_change:function(){console.log("[on_page_change]page:",this.page),this.$router.push({query:m()(this.$route.query,{page:this.page})})},on_load_topic:function(t){this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT),console.log("page_num:",this.page_num)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page));var e=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({start:e,limit:this._g.PER_PAGE_COUNT,from_cache:this.from_cache(),cb:this.on_load_topic})}},watch:{$route:function(t,e){console.log("last watch $route"),this.forum_topic_data=void 0,this.load_list()}}},g=_,w=i("6544"),b=i.n(w),y=i("891e"),x=Object(u["a"])(g,f,p,!1,null,"1b054cd6",null),C=x.exports;b()(x,{VPagination:y["a"]});var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-carousel",{attrs:{cycle:"",interval:"4000",height:"300","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.carousel_threads,(function(e){return i("v-carousel-item",{key:e["id"],attrs:{to:"/topic/"+e["id"]}},[i("div",[i("div",{staticClass:"absolute-bottom custom-caption"},[i("div",{staticClass:"text-subtitle1"},[t._v(t._s(e.title))])]),i("img",{attrs:{src:t.screen_shots_list(e)[1]}})])])})),1)],1),t.is_mobile()?i("q-separator",{staticClass:"mb-1"}):t._e(),t.indextop_threads?i("v-col",{staticClass:"indextop_threads",class:{"pl-2":!t.is_mobile()},attrs:{cols:"6"}},t._l(t.indextop_threads,(function(t){return i("index_topic_item",{key:t.id,attrs:{topic_data:t}})})),1):t._e()],1),i("v-row",{staticClass:"mt-3"},[i("node_list",{attrs:{show_index:!0},on:{on_select_forum:t.on_select_forum}})],1),i("ads_banner_list"),t.last_threads?i("v-row",[i("div",{staticClass:"card-header"},[t._v("最新")]),i("div",{staticClass:"card-body topics row",staticStyle:{"padding-top":"8px"}},[i("div",{staticClass:" topics-group"},t._l(t.last_threads,(function(t){return i("topic_item",{key:t.id,attrs:{show_node:!0,topic_data:t}})})),1)]),i("div",{staticClass:"card-footer  underline"},[i("router-link",{attrs:{to:"/topics/last"}},[t._v("查看更多最新...")])],1)]):t._e()],1)},O=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"index_topic_item"},[i("v-col",{attrs:{cols:"9"}},[i("h2",[i("router-link",{attrs:{to:"/topic/"+t.topic_data.id}},[t._v(t._s(t.topic_data.title))])],1)]),i("v-col",[i("div",{staticClass:"release_time"},[t._v(t._s(t.showDate(t.topic_data.release_time)))])])],1)},T=[],V={name:"index_topic_item",props:{topic_data:{}}},j=V,E=(i("d17c"),i("62ad")),S=i("0fd9"),A=Object(u["a"])(j,I,T,!1,null,"1105e6f4",null),B=A.exports;b()(A,{VCol:E["a"],VRow:S["a"]});var k=i("a85e"),D={name:"index",mixins:[a["a"]],components:{index_topic_item:B,node_list:k["a"]},computed:{},data:function(){return{slide:"style",last_threads:void 0,carousel_threads:void 0,indextop_threads:void 0}},methods:{on_select_forum:function(t){var e="/forum/"+t.fid;this.$router.push(e)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads()},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,this.init(),this.listener_init=this.$hub.on("event:init",(function(){console.log("call event:init"),t.init(),t.$forceUpdate()}))}},P=D,G=(i("e550"),i("fe09")),H=(i("a9e3"),i("5530")),N=(i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("4160"),i("159b"),i("80d2")),R=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))};function M(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function X(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),R(e)}function Y(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function q(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return M(t,e)},touchend:function(t){return X(t,e)},touchmove:function(t){return Y(t,e)}}}function L(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(s){var o=q(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=o,Object(N["q"])(o).forEach((function(t){s.addEventListener(t,o[t],a)}))}}function U(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];Object(N["q"])(s).forEach((function(t){n.removeEventListener(t,s[t])})),delete n._touchHandlers[i.context._uid]}}var W={inserted:L,unbind:U},z=W,J=i("afdd"),F=i("9d26"),Q=i("604c"),K=Q["a"].extend({name:"v-window",directives:{Touch:z},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(H["a"])(Object(H["a"])({},Q["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(J["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(t){t.stopPropagation(),i()}}},[this.$createElement(F["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),Z=i("37c6"),tt=i("3860"),et=i("d9bd"),it=K.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(H["a"])(Object(H["a"])({},K.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(et["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:K.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(J["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(F["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(tt["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(Z["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=K.options.render.call(this,t);return e.data.style="height: ".concat(Object(N["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),nt=i("9d65"),st=i("4e82"),at=i("58df"),ot=Object(at["a"])(nt["a"],Object(st["a"])("windowGroup","v-window-item","v-window")),rt=ot.extend().extend().extend({name:"v-window-item",directives:{Touch:z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(N["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(N["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),ct=i("adda"),lt=i("1c87"),ut=Object(at["a"])(rt,lt["a"]),ht=ut.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(ct["a"],{staticClass:"v-carousel__item",props:Object(H["a"])(Object(H["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(N["l"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),dt=Object(u["a"])(P,$,O,!1,null,null,null),ft=dt.exports;dt.options.components=Object.assign(Object.create(dt.options.components||null),dt.options.components||{},{QSeparator:G["B"]}),b()(dt,{VCarousel:it,VCarouselItem:ht,VCol:E["a"],VRow:S["a"]});var pt={name:"topics",components:{essence:d,last:C,index:ft},mixins:[a["a"]],data:function(){return{show_what:"info",show_node_dialog:!1}},created:function(){var t=this.$route.params.type;console.log("type:",t),t||(t="index"),this.show_what=t},methods:{on_click_show_node:function(){console.log("this.show_node_dialog:",this.show_node_dialog),this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var e="/forum/"+t.fid;this.$router.push(e)}},watch:{$route:function(t,e){var i=this.$route.params.type;console.log("type:",i),i||(i="index"),this.show_what=i,console.log("topics route change"),this.$forceUpdate()}}},vt=pt,mt=(i("18a6"),Object(u["a"])(vt,n,s,!1,null,"640258d6",null));e["default"]=mt.exports;mt.options.components=Object.assign(Object.create(mt.options.components||null),mt.options.components||{},{QBtn:G["f"]})},3860:function(t,e,i){"use strict";var n=i("604c");e["a"]=n["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n["a"].options.computed.classes.call(this)}},methods:{genData:n["a"].options.methods.genData}})},"3ca6":function(t,e,i){},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var n=i("5530"),s=(i("166a"),i("a452")),a=i("7560"),o=i("58df"),r=i("d9bd"),c=Object(o["a"])(s["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),s=i("5530"),a=(i("4b85"),i("a026")),o=i("d9f7"),r=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(r["u"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(r["u"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,s=e.data,a=e.children,r=(e.parent,"");for(var c in i)r+=String(i[c]);var l=p.get(r);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var n=i[t],s=f(e,t,n);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(r,l)}(),t(i.tag,Object(o["a"])(s,{class:l}),a)}})},"63b7":function(t,e,i){},"9c33":function(t,e,i){},c2bd:function(t,e,i){},d17c:function(t,e,i){"use strict";var n=i("c2bd"),s=i.n(n);s.a},e550:function(t,e,i){"use strict";var n=i("3ca6"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-01d6fdf1.1f042cf1.js.map