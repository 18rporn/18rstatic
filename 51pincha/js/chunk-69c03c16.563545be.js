(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69c03c16"],{"17b3":function(t,i,e){},3459:function(t,i,e){},"5f3f":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.provinces_list&&t.target_region?e("v-row",{staticClass:"box region-list"},[t._l(t.provinces_list,(function(i){return e("v-btn",{key:i,class:{active:t.region==i||t.target_region.province==i},attrs:{depressed:"",color:"white","text-color":"black"},on:{click:function(e){return t.on_provinces_click(i)}}},[t._v(" "+t._s(i)+" ")])})),e("q-separator",{attrs:{inset:""}}),t.city_list?e("v-row",t._l(t.city_list,(function(i){return e("v-btn",{key:i,class:{active:t.region==i||t.target_region.city==i},attrs:{depressed:"",color:"white","text-color":"black"},on:{click:function(e){return t.on_provinces_click(i)}}},[t._v(" "+t._s(i))])})),1):t._e()],2):t._e()},n=[],s={name:"region_list",props:{region:void 0,type:void 0,basepath:void 0},data:function(){return{provinces_list:void 0,city_list:void 0,province:void 0,target_region:void 0}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;this.target_region||(this.target_region={province:void 0}),this.listener_init=this.$hub.on("event:init",(function(){t.update_data(),t.$forceUpdate()})),this.update_data()},methods:{on_provinces_click:function(t){this.basepath||(this.basepath=this.$route.path);var i=this.basepath;this.type&&(i=this.updateQueryStringParameter(i,"type",this.type)),i=this.updateQueryStringParameter(i,"r",t),this.$router.push(i)},update_data:function(){try{this.province&&(this.city_list=this.$store.state.init.data.region_conf[this.province]),!this.city_list&&this.region&&(this.city_list=this.$store.state.init.data.region_conf[this.region],this.city_list&&(this.province=this.region),console.log("[update_data] province:",this.province),this.target_region&&this.target_region.province&&(this.city_list=this.$store.state.init.data.region_conf[this.target_region.province],this.city_list&&(this.province=this.target_region.province)))}catch(t){}try{this.provinces_list=this.$store.state.init.data.provinces_list,console.log("provinces_list:",this.provinces_list),console.log("target_region:",this.target_region)}catch(t){}this.$forceUpdate()}}},r=s,o=(e("647a"),e("2877")),c=e("fe09"),l=e("6544"),h=e.n(l),u=e("8336"),p=e("0fd9"),g=Object(o["a"])(r,a,n,!1,null,"5e6b5f5b",null);i["a"]=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QSeparator:c["A"],QColor:c["k"]}),h()(g,{VBtn:u["a"],VRow:p["a"]})},"647a":function(t,i,e){"use strict";var a=e("3459"),n=e.n(a);n.a},7264:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-row",[t.cha_datas?e("region_list",{attrs:{type:t.type,target_region:t.target_region,region:t.region},on:{"update:type":function(i){t.type=i},"update:target_region":function(i){t.target_region=i},"update:region":function(i){t.region=i}}}):t._e(),e("v-row",{staticClass:"index-playlist"},[e("div",{staticClass:"card-header title"},[t._v(t._s(t.title))]),t.cha_datas?e("v-row",[e("div",{staticClass:"col-9 row pr-4 mpr-0 cha-container"},[e("div",{staticClass:"row"},[e("cha_list",{attrs:{cha_datas:t.cha_datas}})],1),e("div",{},[t.page_num>1?e("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(i){t.page=i},expression:"page"}}):t._e()],1)]),e("div",{staticClass:"col-3 pr-4 mpr-0 video_container"},[e("item_tip"),e("ads_box_list")],1)]):e("div",{staticClass:"w-100"},[e("page_loading")],1)],1)],1)},n=[],s=e("5f3f"),r=e("d8fa"),o=e("92ae"),c={name:"list",mixins:[r["a"]],components:{region_list:s["a"],cha_list:o["a"]},data:function(){return{cha_datas:void 0,start:0,limit:this._g.PER_PAGE_COUNT,total_count:void 0,title:void 0,region:void 0,type:void 0,page:1,page_num:void 0,target_region:{}}},created:function(){this.load_list()},methods:{load_list:function(){var t=this.region=this.$route.query.r,i=this.$route.query.p,e=this.type=this.$route.query.type;this.page=parseInt(this.$route.query.page),this.page||(this.page=1),console.log("type:",e);var a="";2==e?a+=" 兼职/楼凤":1==e&&(a+=" 洗浴按摩/会所"),t&&(a=a+"  "+t),this.title=a,this.set_title(this.title),this.update_start(),this.get_list({t:e,p:i,r:t,start:this.start,limit:this.limit,cb:this.on_list})},on_list:function(t){console.log("[on_list]response:",t),this.cha_datas=t.data.datas,this.total_count=t.data.total_count,this.target_region.province=t.data.province,this.target_region.city=t.data.city;var i=parseInt(this.total_count/this._g.PER_PAGE_COUNT);this.page_num=i,console.log("page_num:",this.page_num),this.$forceUpdate()},on_page_change:function(t){var i=this.update_url_param({page:this.page});console.log("on_page_change:",i),this.$router.push(i)},update_start:function(){this.start=(this.page-1)*this.limit}},watch:{$route:function(t,i){this.cha_datas=void 0,this.$nextTick(this.load_list)}}},l=c,h=e("2877"),u=e("6544"),p=e.n(u),g=e("891e"),v=e("0fd9"),d=Object(h["a"])(l,a,n,!1,null,"bfee6854",null);i["default"]=d.exports;p()(d,{VPagination:g["a"],VRow:v["a"]})},"891e":function(t,i,e){"use strict";e("99af"),e("d81d"),e("a9e3"),e("d3b7"),e("25f0");var a=e("2909"),n=e("5530"),s=(e("17b3"),e("9d26")),r=e("dc22"),o=e("a9ad"),c=e("de2c"),l=e("7560"),h=e("58df");i["a"]=Object(h["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var i=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=i)return this.range(1,this.length);var e=i%2===0?1:0,n=Math.floor(i/2),s=this.length-n+1+e;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-e;return[1,"..."].concat(Object(a["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var c=this.value+n-1-e;return[].concat(Object(a["a"])(this.range(1,c)),["...",this.length])}if(this.value===s){var l=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(l,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,i){var e=[];t=t>0?t:1;for(var a=t;a<=i;a++)e.push(a);return e},genIcon:function(t,i,e,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{type:"button","aria-label":n},on:e?{}:{click:a}},[t(s["a"],[i])])])},genItem:function(t,i){var e=this,a=i===this.value&&(this.color||"primary"),n=i===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var i=this;return this.items.map((function(e,a){return t("li",{key:a},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):i.genItem(t,e)])}))},genList:function(t,i){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},i)}},render:function(t){var i=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,i)])}})}}]);
//# sourceMappingURL=chunk-69c03c16.563545be.js.map