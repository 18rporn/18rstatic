(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f719"],{b43d:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"thread_view"},[i("div",{staticClass:"row col-padding-0"},[i("div",{staticClass:"col-9 pr-4 mpr-0"},[i("div",{staticClass:"topic-detail card border-none"},[i("div",{staticClass:"card-header media clearfix"},[i("div",{staticClass:"media-body"},[i("h1",{staticClass:"media-heading"},[i("span",{staticClass:"title"},[i("span",[t._v("#")]),t._v(" "+t._s(t.name)+" ")])])])]),t.topic_data_object?i("div",{staticClass:"card-body item-list mb-4"},t._l(t.topic_data_object.datas,(function(t){return i("video_item",{key:t.id,staticClass:"col-4",attrs:{topic_data:t}})})),1):t._e(),i("div",{staticClass:"card-footer clearfix"})])]),i("div",{staticClass:"sidebar col-3"},[i("ads_box_list",{staticClass:"mt-4"}),i("item_tip")],1)])])])},e=[],c=(i("b0c0"),i("077f")),d={name:"genre",mixins:[c["a"]],data:function(){return{name:void 0,topic_data_object:void 0}},created:function(){this.name=this.$route.params.name,console.log("createactress :",this.name),this.set_title(this.name),this.add_keywords(this.name),this.add_description(this.name),this.load_av_datas()},methods:{load_av_datas:function(){this.get_topic_list({start:0,limit:this._g.PER_PAGE_COUNT,from_cache:this.from_cache(),video_genre:this.name,cb:this.on_load_topic})},on_load_topic:function(t){console.log("on_load_topic:",t),this.topic_data_object=t.data}}},o=d,n=i("2877"),l=Object(n["a"])(o,s,e,!1,null,"4da73875",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20f719.d1f3b9aa.js.map