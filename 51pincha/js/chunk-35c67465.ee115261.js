(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c67465"],{"166a":function(t,a,e){},"2f1f":function(t,a,e){},3860:function(t,a,e){"use strict";var i=e("604c");a["a"]=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},"604c":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("4de4"),e("7db0"),e("c740"),e("4160"),e("caad"),e("c975"),e("fb6a"),e("a434"),e("a9e3"),e("2532"),e("159b");var i=e("5530"),s=(e("166a"),e("a452")),n=e("7560"),l=e("58df"),o=e("d9bd"),r=Object(l["a"])(s["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(a,e){return t.toggleMethod(t.getValue(a,e))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(a){return t.internalValue===a};var a=this.internalValue;return Array.isArray(a)?function(t){return a.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,a){return null==t.value||""===t.value?a:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var a=this,e=this.items.push(t)-1;t.$on("change",(function(){return a.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister:function(t){if(!this._isDestroyed){var a=this.items.indexOf(t),e=this.getValue(t,a);this.items.splice(a,1);var i=this.selectedValues.indexOf(e);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(e);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==e})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,a){var e=this.getValue(t,a);t.isActive=this.toggleMethod(e)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var a=this.items.slice();t&&a.reverse();var e=a.find((function(t){return!t.disabled}));if(e){var i=this.items.indexOf(e);this.updateInternalValue(this.getValue(e,i))}}},updateMultiple:function(t){var a=Array.isArray(this.internalValue)?this.internalValue:[],e=a.slice(),i=e.findIndex((function(a){return a===t}));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var a=t===this.internalValue;this.mandatory&&a||(this.internalValue=a?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});r.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"778c":function(t,a,e){"use strict";var i=e("2f1f"),s=e.n(i);s.a},"7e58":function(t,a,e){},9296:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-4 card"},[e("div",{staticClass:"bg-white my-2",attrs:{id:"Help"}},[e("div",{staticClass:"G-Title"},[t._v("升级帮助")]),e("div",{staticClass:"p-3"},[e("div",{staticClass:"font-weight-bold text-dark"},[t._v("充值成功了，为什么还不能看信息?")]),t._m(0),e("br"),e("div",{staticClass:"font-weight-bold text-dark"},[t._v("充值中碰到问题，升级失败了怎么办？")]),e("div",[t._v("请提供你的相关账号以及支付截图，然后发邮件给："+t._s(t.$config.email)+"，我们会尽快给你处理。")]),e("br"),e("div",{staticClass:"font-weight-bold text-dark"},[t._v("有事怎么联系客服?")]),e("div",[t._v("请提供你的账号以及详细描述你的问题，然后发邮件给："+t._s(t.$config.email)+"，我们会尽快给你处理。")])])]),e("ads_box_list")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("第一次充值成为VIP会员后，请"),e("span",{staticClass:"text-primary"},[t._v("重新刷新页面")]),t._v("或者退出用户名重新登录一下即可。")])}],n={name:"rightpanel"},l=n,o=e("2877"),r=Object(o["a"])(l,i,s,!1,null,"2c1cc216",null);a["a"]=r.exports},"9f4f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 card"},[e("h1",{staticClass:"b__title"},[t._v(" 升级VIP ")]),t.vip_configs?e("ul",{staticClass:"product-info"},[e("div",{staticClass:"ccp_four_item_list cl"},t._l(t.vip_configs,(function(a){return e("div",{key:a.id,staticClass:"ccpoil_product col-6",class:{active:t.select_id==a.id},attrs:{"data-code":"0",title:"年度VIP"},on:{click:function(e){return t.select_item(a["id"])}}},[e("div",{staticClass:"ccpoil_product_name"},[t._v(t._s(a["title"]))]),a.day_pay?e("div",{staticClass:"ccpoil_marketing"},[t._v(t._s(a.day_pay)+" 元/天")]):t._e(),a.description?e("div",{staticClass:"ccpoil_marketing "},[t._v(" "+t._s(a.description)+" ")]):t._e(),e("div",{staticClass:"ccpoil_price"},[e("div",{staticClass:"ccpoil_currency"},[t._v("￥")]),e("div",{staticClass:"ccpoil_final_price"},[t._v(t._s(a["amount"]))])])])})),0)]):t._e(),t.faka?e("div",{staticClass:"vip__code"},[e("p",{staticClass:"tip"},[t._v(" 支持使用微信，支付宝购买卡密，激活。 ")]),e("p",[e("a",{attrs:{href:t.faka,target:"_blank"}},[t._v("点此购买")])]),t._m(0)]):t._e(),e("div",{staticClass:"pay_way mt-4"},[e("p",[t._v("支付方式:")]),e("v-btn-toggle",{attrs:{group:""},model:{value:t.pay_way,callback:function(a){t.pay_way=a},expression:"pay_way"}},t._l(t.avaliable_payways,(function(a){return e("v-btn",{key:a.pay_way,class:{"v-item--active":a.pay_way==t.pay_way},attrs:{value:a.pay_way}},[t._v(" "+t._s(a.name)+" ")])})),1)],1),e("div",{staticClass:"submit xxbtn mt-3"},[e("v-btn",{staticClass:"pay-button",attrs:{color:"error",loading:t.pay_loading,large:"",dark:"",depressed:""},on:{click:function(a){return t.click_pay()}}},[e("v-icon",{attrs:{small:""}},[t._v("payments")]),t._v(" 点击支付 ")],1)],1),e("v-alert",{staticClass:"mt-2",attrs:{outlined:"",type:"success",text:""}},[t._v(" 如果充值未到帐， 请联系客服邮箱："+t._s(t.$config.email)+",提供下网站的用户名和支付截图。 如果是由我们原因造成的，我们将额外补偿。 ")])],1),e("rightpanel")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("a",{staticStyle:{"font-size":"1.5rem"},attrs:{href:"/vip/code",target:"_blank"}},[t._v("卡密激活")])])}],n=(e("4160"),e("c975"),e("159b"),e("a026")),l=e("f51c"),o=e("ada0"),r=e("9296"),c={name:"vip",components:{rightpanel:r["a"]},data:function(){return{vip_configs:l["configs"],avaliable_conf:o,pay_way:o.defalut,select_id:"1year",pay_url:"",pay_loading:!1,avaliable_payways:[],pay_order:void 0}},created:function(){window._t=this,this.update_payways(),this.$ga&&this.$ga.event({eventCategory:"buy_vip",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin})},computed:{faka:function(){var t=this.get_pay_item(this.select_id);if(t)return t.faka}},methods:{get_pay_item:function(t){for(var a=0;a<this.vip_configs.length;++a){var e=this.vip_configs[a];if(e["id"]==t)return e}},update_payways:function(){var t=this;this.avaliable_payways=[];var a=this.get_pay_item(this.select_id);this.avaliable_conf.list.forEach((function(e){if(0!=e.avaliable&&("faka"!=e["pay_way"]||t.faka)){var i=e["pay_amounts"];i?(console.log("pay_amounts:",i," this_pay_item['amount']:",a["amount"]),i.indexOf(a["amount"])>=0&&t.avaliable_payways.push(e)):t.avaliable_payways.push(e)}}))},on_id_change:function(){n["default"].nextTick(this.update_payways())},select_item:function(t){this.select_id=t,this.update_payways()},click_pay:function(){var t=this;if("faka"==this.pay_way)return this.navigateToUrl(this.faka);if("crypto"==this.pay_way)return this.$router.push("/pay/crypto?vip_id="+this.select_id);this.pay_url=!1;var a={"pay-way":this.pay_way,"vip-id":this.select_id};this.pay_loading=!0,this.$axios.post("/app/pay/payment",a).then((function(a){t.pay_loading=!1;var e=a.data;t.$messageX("请求支付成功，请稍等 ，正在跳转"),t.pay_order=e,console.log("pay_order:",t.pay_order);var i=e.pay_data.read_url;setTimeout((function(){t.navigateToUrl(i)}),100),t.show_after_pay_dialog(),t.pay_url=i})).catch((function(a){console.log("error:",a);var e="请求支付失败，请重新尝试或者更换支付方式";t.$messageX(e),t.pay_loading=!1,t.show_after_pay_dialog()}))},show_pay_success:function(){var t=this;this.$q.dialog({title:"提示",message:"恭喜你，已成功支付",cancel:"继续",persistent:!0,ok:"返回"}).onOk((function(){t.back_page()})).onCancel((function(){})).onDismiss((function(){}))},show_after_pay_dialog:function(){var t=this;this.$q.dialog({title:"提示",message:"是否已完成支付?(付款后5分钟内到帐，如果没有，请联系客服邮箱("+this.$config.email+")",cancel:"没有支付",persistent:!0,ok:"已支付"}).onOk((function(){t.$q.loading.show({message:"正在检测订单状态",sanitize:!0}),t.$axios.get("/app/pay/order/"+t.pay_order.order_id).then((function(a){var e=a.data;console.log("pay order:",e),t.$q.loading.hide();var i=e.pay_order;t.$messageX("未检测到订单支付成功。"),i&&"success"==i.status?t.show_pay_success():t.show_after_pay_dialog()})).catch((function(a){t.$q.loading.hide(),t.$messageX("网络出错，请重新尝试。"),t.show_after_pay_dialog()}))})).onCancel((function(){})).onDismiss((function(){}))}}},u=c,d=(e("778c"),e("2877")),p=e("6544"),h=e.n(p),_=e("0798"),f=e("8336"),v=e("5530"),y=(e("7e58"),e("3860")),m=e("a9ad"),g=e("58df"),w=Object(g["a"])(y["a"],m["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},y["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(v["a"])({},y["a"].options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),b=e("132d"),k=Object(d["a"])(u,i,s,!1,null,"5a89650a",null);a["default"]=k.exports;h()(k,{VAlert:_["a"],VBtn:f["a"],VBtnToggle:w,VIcon:b["a"]})},ada0:function(t){t.exports=JSON.parse('{"list":[{"name":"支付宝扫码","pay_way":"ALI_QR","avaliable":false},{"name":"微信支付","pay_way":"6022","pay_amounts":[50,100,200],"which_pay":"tj","avaliable":false},{"name":"微信扫码","pay_way":"WX_QR","avaliable":false},{"name":"微信H5","pay_way":"WX_H5","avaliable":false},{"name":"支付宝扫码","pay_way":"Alipay_QR","which_pay":"xpay","avaliable":false},{"name":"支付宝","pay_way":"Alipay_H5","which_pay":"xpay"},{"name":"卡密(微信支付)","pay_way":"faka","which_pay":"xpay"},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"Alipay_H5"}')},f51c:function(t){t.exports=JSON.parse('{"configs":[{"id":"90day","days":90,"amount":328,"title":"三月VIP","description":"VIP时长三月,可免费查看所有性息","actual_amount":328,"every_month":33,"vip_degree":"vip1","add_gold":0,"faka":"https://787fk.com//details/1C0E8BCF","faka2":"https://www.98fak.com/details/789BDF90"},{"id":"1year","days":365,"amount":399,"title":"一年VIP","description":"VIP时长一年,可免费查看所有性息","actual_amount":399,"every_month":21,"vip_degree":"vip2","add_gold":0,"faka":"https://787fk.com//details/83F956D9","faka2":"https://www.98fak.com/details/ED0A5120"},{"id":"3year","days":1096,"amount":499,"title":"三年VIP","description":"VIP时长三年,可免费查看所有性息","actual_amount":499,"every_month":9,"vip_degree":"vip3","add_gold":0,"faka":"https://787fk.com//details/7D90500C","faka2":"https://www.98fak.com/details/A70461B8"},{"id":"forever","days":36500,"amount":699,"title":"终身VIP","description":"终身VIP,可免费查看所有性息","actual_amount":699,"every_month":9,"vip_degree":"vip4","add_gold":0,"faka":"https://787fk.com//details/971DE4DF","faka2":"https://www.98fak.com/details/BEBD797A"}]}')}}]);
//# sourceMappingURL=chunk-35c67465.ee115261.js.map