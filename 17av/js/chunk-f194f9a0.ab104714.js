(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f194f9a0"],{"166a":function(t,a,e){},3860:function(t,a,e){"use strict";var i=e("604c");a["a"]=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},"604c":function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));e("4de4"),e("7db0"),e("c740"),e("4160"),e("caad"),e("c975"),e("fb6a"),e("a434"),e("a9e3"),e("2532"),e("159b");var i=e("5530"),s=(e("166a"),e("a452")),n=e("7560"),l=e("58df"),r=e("d9bd"),o=Object(l["a"])(s["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(a,e){return t.toggleMethod(t.getValue(a,e))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(a){return t.internalValue===a};var a=this.internalValue;return Array.isArray(a)?function(t){return a.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,a){return null==t.value||""===t.value?a:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var a=this,e=this.items.push(t)-1;t.$on("change",(function(){return a.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister:function(t){if(!this._isDestroyed){var a=this.items.indexOf(t),e=this.getValue(t,a);this.items.splice(a,1);var i=this.selectedValues.indexOf(e);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(e);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==e})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,a){var e=this.getValue(t,a);t.isActive=this.toggleMethod(e)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var a=this.items.slice();t&&a.reverse();var e=a.find((function(t){return!t.disabled}));if(e){var i=this.items.indexOf(e);this.updateInternalValue(this.getValue(e,i))}}},updateMultiple:function(t){var a=Array.isArray(this.internalValue)?this.internalValue:[],e=a.slice(),i=e.findIndex((function(a){return a===t}));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var a=t===this.internalValue;this.mandatory&&a||(this.internalValue=a?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"7e58":function(t,a,e){},"7fb4":function(t,a,e){},9296:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-4 card"},[e("h1",{staticClass:"b__title"},[t._v(" 如何获取金币? ")]),e("div",{staticClass:"rounded-borders mt-3 mb-3"},[t._v(" 关于如何获取金币，这里有详细介绍 "),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[t._v("获取金币的方法")])],1),e("ads_box_list")],1)},s=[],n={name:"rightpanel"},l=n,r=e("2877"),o=Object(r["a"])(l,i,s,!1,null,"937f1c22",null);a["a"]=o.exports},"9f4f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row m-100"},[e("div",{staticClass:"col-8 card"},[e("h1",{staticClass:"b__title"},[t._v(" 升级VIP ")]),t.vip_configs?e("ul",{staticClass:"product-info"},[e("div",{staticClass:"ccp_four_item_list cl"},t._l(t.vip_configs,(function(a){return e("div",{key:a.id,staticClass:"ccpoil_product col-6",class:{active:t.select_id==a.id},attrs:{"data-code":"0",title:"年度VIP"},on:{click:function(e){return t.select_item(a["id"])}}},[e("div",{staticClass:"ccpoil_product_name"},[t._v(t._s(a["title"]))]),a.day_pay?e("div",{staticClass:"ccpoil_marketing"},[t._v(t._s(a.day_pay)+" 元/天")]):t._e(),a.add_gold?e("div",{staticClass:"ccpoil_marketing "},[t._v(" 赠送 "),e("span",{staticClass:"font-weight-bold mr-1 ml-1 add_gold"},[t._v(t._s(a.add_gold))]),t._v(" 金币 ")]):t._e(),e("div",{staticClass:"ccpoil_price"},[e("div",{staticClass:"ccpoil_currency"},[t._v("￥")]),e("div",{staticClass:"ccpoil_final_price"},[t._v(t._s(a["amount"]))])])])})),0),t.faka?e("div",{staticClass:"vip__code"},[e("div",{staticClass:"tip flex"},[e("span",{staticClass:"q-mr-xs"},[t._v("支持使用微信，支付宝购买卡密，激活。")]),t._m(0),e("span",[t.avaliable_conf.faka?e("a",{staticClass:"text-red",attrs:{href:t.avaliable_conf.faka,target:"_blank"}},[t._v("购买卡密")]):t._e()])])]):t._e()]):t._e(),e("div",{staticClass:"pay_way mt-4"},[e("p",[t._v("支付方式:")]),e("v-btn-toggle",{staticClass:"flex-wrap",attrs:{group:""},model:{value:t.pay_way,callback:function(a){t.pay_way=a},expression:"pay_way"}},t._l(t.avaliable_payways,(function(a){return e("v-btn",{key:a.pay_way,class:{"v-item--active":a.pay_way==t.pay_way},attrs:{value:a.pay_way}},[t._v(" "+t._s(a.name)+" ")])})),1)],1),e("div",{staticClass:"submit xxbtn mt-3"},[e("v-btn",{staticClass:"pay-button",attrs:{color:"error",loading:t.pay_loading,large:"",dark:"",depressed:""},on:{click:function(a){return t.click_pay()}}},[t._v(" 点击支付 ")])],1)]),e("rightpanel")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"q-mr-xs"},[e("a",{staticClass:"text-red",attrs:{href:"/vip/code",target:"_blank"}},[t._v("卡密激活")])])}],n=(e("4160"),e("c975"),e("159b"),e("a026")),l=e("f51c"),r=e("ada0"),o=e("9296"),c={name:"vip",components:{rightpanel:o["a"]},data:function(){return{vip_configs:l["configs"],avaliable_conf:r,pay_way:r.defalut,which_pay:r.defalut,select_id:"1year",pay_url:"",pay_loading:!1,avaliable_payways:[]}},created:function(){window._t=this,this.update_payways(),this.$ga.event({eventCategory:"buy_vip",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin})},computed:{faka:function(){var t=this.get_pay_item(this.select_id);if(t)return t.faka}},methods:{get_pay_item:function(t){for(var a=0;a<this.vip_configs.length;++a){var e=this.vip_configs[a];if(e["id"]==t)return e}},update_payways:function(){var t=this;this.avaliable_payways=[];var a=this.get_pay_item(this.select_id);this.avaliable_conf.list.forEach((function(e){if(0!=e.avaliable&&(!e["only_mobile"]||t.is_mobile())){var i=e["pay_amounts"];i?(console.log("pay_amounts:",i," this_pay_item['amount']:",a["amount"]),i.indexOf(a["amount"])>=0&&t.avaliable_payways.push(e)):t.avaliable_payways.push(e)}})),a.faka&&this.avaliable_payways.push({name:"购买卡密",pay_way:"faka"})},on_id_change:function(){n["a"].nextTick(this.update_payways())},select_item:function(t){this.select_id=t,this.update_payways()},click_pay:function(){var t=this;if("faka"==this.pay_way){var a=this.get_pay_item(this.select_id);return this.navigateToUrl(a.faka)}if("crypto"==this.pay_way)return this.$router.push("/pay/crypto?vip_id="+this.select_id);this.pay_url=!1;var e={"pay-way":this.pay_way,"vip-id":this.select_id};this.pay_loading=!0,this.$axios.post("/app/pay/payment",e).then((function(a){t.pay_loading=!1;var e=a.data;t.$messageX("请求支付成功，请稍等 ，正在跳转");var i=e.pay_data.read_url;setTimeout((function(){t.navigateToUrl(i)}),200),t.pay_url=i})).catch((function(a){console.log("error:",a);var e="请求支付失败，请重新尝试或者更换支付方式";t.$messageX(e),t.pay_loading=!1}))}}},u=c,d=(e("a76c"),e("2877")),p=e("6544"),h=e.n(p),y=e("8336"),_=e("a609"),f=Object(d["a"])(u,i,s,!1,null,"5fa9f90c",null);a["default"]=f.exports;h()(f,{VBtn:y["a"],VBtnToggle:_["a"]})},a609:function(t,a,e){"use strict";var i=e("5530"),s=(e("7e58"),e("3860")),n=e("a9ad"),l=e("58df");a["a"]=Object(l["a"])(s["a"],n["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(i["a"])({},s["a"].options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},a76c:function(t,a,e){"use strict";var i=e("7fb4"),s=e.n(i);s.a},ada0:function(t){t.exports=JSON.parse('{"list":[{"name":"微信支付","pay_way":"wxpay","which_pay":"tspay","avaliable":false},{"name":"支付宝H5","pay_way":"alipay","which_pay":"tspay","avaliable":true},{"name":"支付宝(荐)","pay_way":"alipay_h5","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝1","pay_way":"ALIPAY2ALIQR","which_pay":"mypay","avaliable":false},{"name":"微信支付","pay_way":"wxwap","which_pay":"typay","avaliable":false},{"name":"支付宝1","pay_way":"yswx","which_pay":"typay","avaliable":false},{"name":"支付宝2","pay_way":"yszfb","which_pay":"typay","avaliable":false},{"name":"支付宝H5","pay_way":"sw516AlipayH5","which_pay":"gobuypay","avaliable":false},{"name":"支付宝扫码","pay_way":"sw516Alipay","which_pay":"gobuypay","avaliable":true},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay","avaliable":true,"class":"red"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"alipay"}')},f51c:function(t){t.exports=JSON.parse('{"configs":[{"id":"halfyear","days":90,"amount":120,"title":"三个月VIP","description":"三个月不限制看下载任何内容","actual_amount":120,"vip_degree":"vip2","day_pay":"0.5","add_gold":1000},{"id":"1year","days":365,"amount":210,"title":"一年VIP","description":"一年不限制看下载任何内容","actual_amount":210,"every_month":12,"vip_degree":"vip3","day_pay":"0.2","add_gold":2000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"3year","days":1096,"amount":300,"title":"三年VIP","description":"三年不限制看下载任何内容","actual_amount":300,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"forever","days":36500,"amount":400,"title":"终身VIP","description":"终身VIP,不限制看下载任何内容","actual_amount":400,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/D9146AE9"}]}')}}]);
//# sourceMappingURL=chunk-f194f9a0.ab104714.js.map