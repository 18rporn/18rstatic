(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd86ade"],{3459:function(t,i,s){},"5f3f":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.provinces_list&&t.target_region?s("v-row",{staticClass:"box region-list"},[t._l(t.provinces_list,(function(i){return s("v-btn",{key:i,class:{active:t.region==i||t.target_region.province==i},attrs:{depressed:"",color:"white","text-color":"black"},on:{click:function(s){return t.on_provinces_click(i)}}},[t._v(" "+t._s(i)+" ")])})),s("q-separator",{attrs:{inset:""}}),t.city_list?s("v-row",t._l(t.city_list,(function(i){return s("v-btn",{key:i,class:{active:t.region==i||t.target_region.city==i},attrs:{depressed:"",color:"white","text-color":"black"},on:{click:function(s){return t.on_provinces_click(i)}}},[t._v(" "+t._s(i))])})),1):t._e()],2):t._e()},a=[],n={name:"region_list",props:{region:void 0,type:void 0,basepath:void 0},data:function(){return{provinces_list:void 0,city_list:void 0,province:void 0,target_region:void 0}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;this.target_region||(this.target_region={province:void 0}),this.listener_init=this.$hub.on("event:init",(function(){t.update_data(),t.$forceUpdate()})),this.update_data()},methods:{on_provinces_click:function(t){this.basepath||(this.basepath=this.$route.path);var i=this.basepath;this.type&&(i=this.updateQueryStringParameter(i,"type",this.type)),i=this.updateQueryStringParameter(i,"r",t),this.$router.push(i)},update_data:function(){try{this.province&&(this.city_list=this.$store.state.init.data.region_conf[this.province]),!this.city_list&&this.region&&(this.city_list=this.$store.state.init.data.region_conf[this.region],this.city_list&&(this.province=this.region),console.log("[update_data] province:",this.province),this.target_region&&this.target_region.province&&(this.city_list=this.$store.state.init.data.region_conf[this.target_region.province],this.city_list&&(this.province=this.target_region.province)))}catch(t){}try{this.provinces_list=this.$store.state.init.data.provinces_list,console.log("provinces_list:",this.provinces_list),console.log("target_region:",this.target_region)}catch(t){}this.$forceUpdate()}}},o=n,r=(s("647a"),s("2877")),c=s("fe09"),l=s("6544"),d=s.n(l),h=s("8336"),_=s("0fd9"),p=Object(r["a"])(o,e,a,!1,null,"5e6b5f5b",null);i["a"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QSeparator:c["A"],QColor:c["k"]}),d()(p,{VBtn:h["a"],VRow:_["a"]})},"647a":function(t,i,s){"use strict";var e=s("3459"),a=s.n(e);a.a},f4e9:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-row",[t.is_mobile()?s("region_list",{staticClass:"mb-2",attrs:{basepath:"/cha/list?type=2"}}):t._e(),t.index_datas?s("div",{staticClass:"col-9"},[s("v-row",{staticClass:"index-playlist "},[s("div",{staticClass:"card-header title"},[t._v("兼职/楼凤")]),s("v-row",[s("div",{staticClass:" row pr-4 mpr-0 cha-container"},[s("div",{staticClass:"row"},[s("cha_list",{attrs:{cha_datas:t.index_datas["latest:thread"]}})],1)])]),s("v-btn",{staticClass:" ml-auto mt-3",attrs:{loading:t.loading,disabled:t.loading,color:"primary"},on:{click:function(i){return t.go("/cha/list?type=2")}}},[s("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-more ")]),t._v(" 查看更多 ")],1)],1),s("v-row",{staticClass:"index-playlist"},[s("div",{staticClass:"card-header title"},[t._v("洗浴按摩")]),s("v-row",[s("div",{staticClass:" row pr-4 mpr-0 cha-container"},[s("div",{staticClass:"row"},[s("cha_list",{attrs:{cha_datas:t.index_datas["latest:thread:massage"]}})],1)])]),s("v-btn",{staticClass:"ml-auto mt-3",attrs:{loading:t.loading,disabled:t.loading,color:"primary"},on:{click:function(i){return t.go("/cha/list?type=1")}}},[s("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-more ")]),t._v(" 查看更多 ")],1)],1)],1):s("div",{staticClass:"col-9"},[s("page_loading")],1),s("div",{staticClass:"col-3"},[t.is_mobile()?t._e():s("region_list",{staticClass:"mb-2",attrs:{basepath:"/cha/list?type=2"}}),s("item_tip"),s("ads_box_list")],1)],1)},a=[],n=s("5f3f"),o=s("92ae"),r={name:"index",components:{cha_list:o["a"],region_list:n["a"]},created:function(){var t=this;this.listener_init=this.$hub.on("event:init",(function(){console.log("call index event:init"),t.init(),t.$forceUpdate()})),this.init()},data:function(){return{index_datas:void 0}},methods:{init:function(){try{this.index_datas=this.$store.state.init.data.index_datas.index_datas}catch(t){}}},computed:{},destroyed:function(){this.listener_init.off()}},c=r,l=s("2877"),d=s("6544"),h=s.n(d),_=s("8336"),p=s("132d"),v=s("0fd9"),u=Object(l["a"])(c,e,a,!1,null,"81cbe806",null);i["default"]=u.exports;h()(u,{VBtn:_["a"],VIcon:p["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-0fd86ade.73eabd22.js.map