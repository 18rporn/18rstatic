(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-606431f5"],{"166a":function(t,a,e){},"1e51":function(t,a,e){"use strict";var i=e("86ef"),n=e.n(i);n.a},3860:function(t,a,e){"use strict";var i=e("604c");a["a"]=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},"604c":function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));e("4de4"),e("7db0"),e("c740"),e("4160"),e("caad"),e("c975"),e("fb6a"),e("a434"),e("a9e3"),e("2532"),e("159b");var i=e("5530"),n=(e("166a"),e("a452")),s=e("7560"),l=e("58df"),r=e("d9bd"),o=Object(l["a"])(n["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(a,e){return t.toggleMethod(t.getValue(a,e))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(a){return t.internalValue===a};var a=this.internalValue;return Array.isArray(a)?function(t){return a.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,a){return null==t.value||""===t.value?a:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var a=this,e=this.items.push(t)-1;t.$on("change",(function(){return a.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister:function(t){if(!this._isDestroyed){var a=this.items.indexOf(t),e=this.getValue(t,a);this.items.splice(a,1);var i=this.selectedValues.indexOf(e);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(e);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==e})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,a){var e=this.getValue(t,a);t.isActive=this.toggleMethod(e)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var a=this.items.slice();t&&a.reverse();var e=a.find((function(t){return!t.disabled}));if(e){var i=this.items.indexOf(e);this.updateInternalValue(this.getValue(e,i))}}},updateMultiple:function(t){var a=Array.isArray(this.internalValue)?this.internalValue:[],e=a.slice(),i=e.findIndex((function(a){return a===t}));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var a=t===this.internalValue;this.mandatory&&a||(this.internalValue=a?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"7e58":function(t,a,e){},"86ef":function(t,a,e){},9296:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-4 card"},[e("h1",{staticClass:"b__title"},[t._v(" 如何获取金币? ")]),e("div",{staticClass:"rounded-borders mt-3 mb-3"},[t._v(" 关于如何获取金币，这里有详细介绍 "),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[t._v("获取金币的方法")])],1),e("ads_box_list")],1)},n=[],s={name:"rightpanel"},l=s,r=e("2877"),o=Object(r["a"])(l,i,n,!1,null,"937f1c22",null);a["a"]=o.exports},"9f4f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 card"},[e("h1",{staticClass:"b__title"},[t._v(" 升级VIP ")]),t.vip_configs?e("ul",{staticClass:"product-info"},[e("div",{staticClass:"ccp_four_item_list cl"},t._l(t.vip_configs,(function(a){return e("div",{key:a.id,staticClass:"ccpoil_product col-6",class:{active:t.select_id==a.id},attrs:{"data-code":"0",title:"年度VIP"},on:{click:function(e){return t.select_item(a["id"])}}},[e("div",{staticClass:"ccpoil_product_name"},[t._v(t._s(a["title"]))]),a.day_pay?e("div",{staticClass:"ccpoil_marketing"},[t._v(t._s(a.day_pay)+" 元/天")]):t._e(),a.add_gold?e("div",{staticClass:"ccpoil_marketing "},[t._v(" 赠送 "),e("span",{staticClass:"font-weight-bold mr-1 ml-1 add_gold"},[t._v(t._s(a.add_gold))]),t._v(" 金币 ")]):t._e(),e("div",{staticClass:"ccpoil_price"},[e("div",{staticClass:"ccpoil_currency"},[t._v("￥")]),e("div",{staticClass:"ccpoil_final_price"},[t._v(t._s(a["amount"]))])])])})),0)]):t._e(),e("div",{staticClass:"pay_way mt-4"},[e("p",[t._v("支付方式:")]),e("v-btn-toggle",{attrs:{group:""},model:{value:t.pay_way,callback:function(a){t.pay_way=a},expression:"pay_way"}},t._l(t.avaliable_payways,(function(a){return e("v-btn",{key:a.pay_way,class:{"v-item--active":a.pay_way==t.pay_way},attrs:{value:a.pay_way}},[t._v(" "+t._s(a.name)+" ")])})),1)],1),e("div",{staticClass:"submit xxbtn mt-3"},[e("v-btn",{staticClass:"pay-button",attrs:{color:"error",loading:t.pay_loading,large:"",dark:"",depressed:""},on:{click:function(a){return t.click_pay()}}},[t._v(" 点击支付 ")])],1)]),e("rightpanel")],1)},n=[],s=(e("4160"),e("c975"),e("159b"),e("a026")),l=e("f51c"),r=e("ada0"),o=e("9296"),u={name:"vip",components:{rightpanel:o["a"]},data:function(){return{vip_configs:l["configs"],avaliable_conf:r,pay_way:r.defalut,select_id:"1year",pay_url:"",pay_loading:!1,avaliable_payways:[]}},created:function(){window._t=this,this.update_payways(),this.$ga.event({eventCategory:"buy_vip",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin})},methods:{get_pay_item:function(t){for(var a=0;a<this.vip_configs.length;++a){var e=this.vip_configs[a];if(e["id"]==t)return e}},update_payways:function(){var t=this;this.avaliable_payways=[];var a=this.get_pay_item(this.select_id);this.avaliable_conf.list.forEach((function(e){if(0!=e.avaliable){var i=e["pay_amounts"];i?i.indexOf(a["amount"])>=0&&t.avaliable_payways.push(e):t.avaliable_payways.push(e)}}))},on_id_change:function(){s["a"].nextTick(this.update_payways())},select_item:function(t){this.select_id=t,this.update_payways()},click_pay:function(){var t=this;this.pay_url=!1;var a={"pay-way":this.pay_way,"vip-id":this.select_id};this.pay_loading=!0,this.$axios.post("/app/pay/payment",a).then((function(a){t.pay_loading=!1;var e=a.data;t.$messageX("请求支付成功，请稍等 ，正在跳转");var i=e.pay_data.read_url;setTimeout((function(){t.navigateToUrl(i)}),200),t.pay_url=i})).catch((function(a){var e="请求支付失败，请重新尝试或者更换支付方式";t.$messageX(e),t.pay_loading=!1}))}}},c=u,d=(e("1e51"),e("2877")),p=e("6544"),h=e.n(p),_=e("8336"),f=e("a609"),y=Object(d["a"])(c,i,n,!1,null,"ab0f7184",null);a["default"]=y.exports;h()(y,{VBtn:_["a"],VBtnToggle:f["a"]})},a609:function(t,a,e){"use strict";var i=e("5530"),n=(e("7e58"),e("3860")),s=e("a9ad"),l=e("58df");a["a"]=Object(l["a"])(n["a"],s["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(i["a"])({},n["a"].options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},ada0:function(t){t.exports=JSON.parse('{"list":[{"name":"支付宝扫码","pay_way":"ALI_QR","avaliable":false},{"name":"支付宝","pay_way":"932","which_pay":"js","avaliable":false},{"name":"支付宝H5(2)","pay_way":"ALI_H5","avaliable":false},{"name":"微信支付","pay_way":"6022","pay_amounts":[50,100,200],"which_pay":"tj","avaliable":false},{"name":"微信扫码","pay_way":"WX_QR","avaliable":false},{"name":"微信H5","pay_way":"WX_H5","avaliable":false},{"name":"支付宝扫码","pay_way":"Alipay_QR","which_pay":"xpay"},{"name":"支付宝H5","pay_way":"Alipay_H5","which_pay":"xpay"},{"name":"卡密(微信支付)","pay_way":"faka","which_pay":"xpay"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"Alipay_H5"}')},f51c:function(t){t.exports=JSON.parse('{"configs":[{"id":"halfyear","days":90,"amount":99,"title":"三个月VIP","description":"三个月不限制看下载任何内容","actual_amount":99,"vip_degree":"vip2","day_pay":"0.5","add_gold":1000,"faka":"https://www.junwfk.com//details/BE1E4172"},{"id":"1year","days":365,"amount":199,"title":"一年VIP","description":"一年不限制看下载任何内容","actual_amount":199,"every_month":199,"vip_degree":"vip3","day_pay":"0.2","add_gold":2000,"faka":"https://www.junwfk.com//details/B82441C4"},{"id":"3year","days":1096,"amount":299,"title":"三年VIP","description":"三年不限制看下载任何内容","actual_amount":299,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka":"https://www.junwfk.com//details/B82441C4"},{"id":"threeyear","days":36500,"amount":399,"title":"终身VIP","description":"终身VIP,不限制看下载任何内容","actual_amount":399,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka":"https://www.junwfk.com//details/D9146AE9"}]}')}}]);
//# sourceMappingURL=chunk-606431f5.6ee543e3.js.map