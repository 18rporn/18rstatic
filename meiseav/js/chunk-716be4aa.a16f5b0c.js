(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716be4aa"],{"166a":function(t,e,a){},"35d4":function(t,e,a){"use strict";var i=a("4432"),n=a.n(i);n.a},3860:function(t,e,a){"use strict";var i=a("604c");e["a"]=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},4432:function(t,e,a){},"604c":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("4de4"),a("7db0"),a("c740"),a("4160"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("a9e3"),a("2532"),a("159b");var i=a("5530"),n=(a("166a"),a("a452")),s=a("7560"),l=a("58df"),o=a("d9bd"),r=Object(l["a"])(n["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,a){return t.toggleMethod(t.getValue(e,a))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,a=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,a)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),a=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(a);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==a})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var a=this.getValue(t,e);t.isActive=this.toggleMethod(a)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var a=e.find((function(t){return!t.disabled}));if(a){var i=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],a=e.slice(),i=a.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&a.length-1<1||null!=this.max&&i<0&&a.length+1>this.max||(i>-1?a.splice(i,1):a.push(t),this.internalValue=a)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});r.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"7e58":function(t,e,a){},9296:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4 card"},[a("h1",{staticClass:"b__title"},[t._v(" 如何获取金币? ")]),a("div",{staticClass:"rounded-borders mt-3 mb-3"},[t._v(" 关于如何获取金币，这里有详细介绍 "),a("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[t._v("获取金币的方法")])],1),a("ads_box_list")],1)},n=[],s={name:"rightpanel"},l=s,o=a("2877"),r=Object(o["a"])(l,i,n,!1,null,"937f1c22",null);e["a"]=r.exports},a609:function(t,e,a){"use strict";var i=a("5530"),n=(a("7e58"),a("3860")),s=a("a9ad"),l=a("58df");e["a"]=Object(l["a"])(n["a"],s["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(i["a"])({},n["a"].options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},ada0:function(t){t.exports=JSON.parse('{"list":[{"name":"支付宝","pay_way":"alipay","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝(荐)","pay_way":"alipay_h5","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝1","pay_way":"ALIPAY2ALIQR","which_pay":"mypay","avaliable":false},{"name":"微信支付","pay_way":"wxwap","which_pay":"typay","avaliable":false},{"name":"支付宝1","pay_way":"yswx","which_pay":"typay","avaliable":false},{"name":"支付宝2","pay_way":"yszfb","which_pay":"typay","avaliable":false},{"name":"支付宝H5","pay_way":"sw516AlipayH5","which_pay":"gobuypay","avaliable":true},{"name":"支付宝扫码","pay_way":"sw516Alipay","which_pay":"gobuypay","avaliable":true},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay","avaliable":true,"class":"red"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"sw516AlipayH5"}')},d848:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 card"},[a("h1",{staticClass:"b__title"},[t._v(" 充值金币 ")]),t.vip_configs?a("ul",{staticClass:"product-info"},t._l(t.vip_configs,(function(e){return a("li",{key:e.id,class:{active:t.select_id==e.id},on:{click:function(a){return t.select_item(e["id"])}}},[a("div",{staticClass:"product-left"},[a("h3",[t._v(t._s(e["title"])+" ￥"+t._s(e["amount"]))]),a("p",{domProps:{innerHTML:t._s(e["description"])}})]),a("div",{staticClass:"product-right"},[a("q-radio",{attrs:{color:"theme-color",size:"md",name:e["id"],label:"",value:e["id"],val:e["id"]},model:{value:t.select_id,callback:function(e){t.select_id=e},expression:"select_id"}})],1)])})),0):t._e(),a("div",{staticClass:"pay_way mt-4"},[a("p",[t._v("支付方式:")]),a("v-btn-toggle",{attrs:{group:""},model:{value:t.pay_way,callback:function(e){t.pay_way=e},expression:"pay_way"}},t._l(t.avaliable_payways,(function(e){return a("v-btn",{key:e.pay_way,class:{"v-item--active":e.pay_way==t.pay_way},attrs:{value:e.pay_way}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("div",{staticClass:"submit xxbtn"},[a("q-btn",{attrs:{padding:"0px",loading:t.pay_loading,color:"theme-color","text-color":"theme-color",label:"点击支付"},on:{click:function(e){return t.click_pay()}}})],1)]),a("rightpanel")],1)},n=[],s=(a("4160"),a("c975"),a("159b"),a("a026")),l=a("ada0"),o=a("9296"),r={name:"buy_gold",components:{rightpanel:o["a"]},data:function(){return{vip_configs:void 0,pay_way:l.defalut,select_id:"200rmbgold",pay_url:"",pay_loading:!1,avaliable_conf:l,avaliable_payways:[]}},methods:{get_pay_item:function(t){for(var e=0;e<this.vip_configs.length;++e){var a=this.vip_configs[e];if(a["id"]==t)return a}},update_payways:function(){var t=this;this.avaliable_payways=[];var e=this.get_pay_item(this.select_id);e&&this.avaliable_conf.list.forEach((function(a){if(0!=a.avaliable){var i=a["pay_amounts"];i?i.indexOf(e["amount"])>=0&&t.avaliable_payways.push(a):t.avaliable_payways.push(a)}})),this.avaliable_payways.length},on_id_change:function(){s["a"].nextTick(this.update_payways())},select_item:function(t){this.select_id=t,this.update_payways()},click_pay:function(){var t=this;this.pay_url=!1;var e={"pay-way":this.pay_way,"vip-id":this.select_id,buygold:!0};this.pay_loading=!0,this.$axios.post("/app/pay/payment",e).then((function(e){t.pay_loading=!1;var a=e.data;t.$message("请求支付成功，请稍等 ，正在跳转");var i=a.pay_data.read_url;setTimeout((function(){t.navigateToUrl(i)}),200),t.pay_url=i})).catch((function(t){console.log("error:",t);var e="请求支付失败，请重新尝试或者更换支付方式";this.$message(e),this.pay_loading=!1}))}},created:function(){window._t=this,this.vip_configs=this.$buy_gold_conf["configs"],this.select_id||(this.select_id=this.vip_configs[0].id,console.log("select this.select_id:",this.select_id)),this.select_item(this.select_id)}},u=r,c=(a("35d4"),a("2877")),d=a("fe09"),h=a("6544"),p=a.n(h),y=a("8336"),f=a("a609"),v=Object(c["a"])(u,i,n,!1,null,"447810bd",null);e["default"]=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QRadio:d["z"],QBtn:d["e"]}),p()(v,{VBtn:y["a"],VBtnToggle:f["a"]})}}]);
//# sourceMappingURL=chunk-716be4aa.a16f5b0c.js.map