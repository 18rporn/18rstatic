(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-078b3284"],{"615b":function(t,s,a){},"8fac":function(t,s,a){"use strict";var e=a("df23"),i=a.n(e);i.a},"99d9":function(t,s,a){"use strict";a.d(s,"a",(function(){return n})),a.d(s,"b",(function(){return c})),a.d(s,"c",(function(){return r}));var e=a("b0af"),i=a("80d2"),n=Object(i["g"])("v-card__actions"),o=Object(i["g"])("v-card__subtitle"),c=Object(i["g"])("v-card__text"),r=Object(i["g"])("v-card__title");e["a"]},b0af:function(t,s,a){"use strict";a("0481"),a("4069"),a("a9e3");var e=a("5530"),i=(a("615b"),a("10d2")),n=a("297c"),o=a("1c87"),c=a("58df");s["a"]=Object(c["a"])(n["a"],o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(e["a"])(Object(e["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(e["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var s=this.generateRouteLink(),a=s.tag,e=s.data;return e.style=this.styles,this.isClickable&&(e.attrs=e.attrs||{},e.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,e),[this.genProgress(),this.$slots.default])}})},df23:function(t,s,a){},f26b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-card",{staticClass:"mx-auto mb-3",attrs:{"max-width":"666",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[t.is_valid?a("v-list-item-content",[a("h1",{staticClass:" mb-4 text-h5"},[a("i",{staticClass:"fab fa-bitcoin"}),t._v(" 数字货币支付 ")]),a("v-list-item-subtitle",[a("p",[t._v(" 发送 "),a("span",{staticClass:"font-weight-bold amount"},[t._v(t._s(t.send_amount)+" USDT (ERC20 )")]),t._v(" 到 ")]),a("p",[a("span",{staticClass:"addr"},[t._v(t._s(t.crypto_conf.erc20_usdt_list[0]))])])]),a("p",{staticClass:"mt-2 mb-2"},[t._v("或")]),a("v-list-item-subtitle",[a("p",[t._v(" 发送 "),a("span",{staticClass:"font-weight-bold amount"},[t._v(t._s(t.send_amount)+" USDT (TRC20 )")]),t._v(" 到 ")]),a("p",[a("span",{staticClass:"addr"},[t._v(t._s(t.crypto_conf.trc20_usdt_list[0]))])])])],1):a("v-card-text",[a("page_loading",{attrs:{loading_text:"正在获取支付信息"}})],1)],1),a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" 支付之后，请将支付截图和注册邮箱或用户名，发邮件到 "),a("span",{staticClass:"font-weight-bold mr-3"},[t._v(t._s(t.$config.email))])]),t.vip_config?a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" 当前购买的是 "),a("span",{staticClass:"vip_config_title"},[t._v(t._s(t.vip_config["title"]))]),t._v(" ，如果需要购买其它会员 ，请查看 "),a("a",{attrs:{href:"/vip/upgrade"}},[t._v("购买会员")])]):t._e()],1)},i=[],n=(a("b680"),{name:"crypto",data:function(){return{vip_id:void 0,crypto_conf:void 0,vip_config:void 0}},computed:{is_valid:function(){return this.crypto_conf&&this.vip_config},send_amount:function(){return(this.vip_config["amount"]/6.3).toFixed(2)}},created:function(){this.vip_id=this.$route.query.vip_id,console.log("this.this.$route.query:",this.$route.query),this.request_pay()},methods:{request_pay:function(){var t=this;this.$axios.get("/app/pay/crypto",{params:{action:"pay",vip_id:this.vip_id}}).then((function(s){console.log("response:",s),t.crypto_conf=s.data.crypto_conf,t.vip_config=s.data.vip_config})).catch((function(t){}))}}}),o=n,c=(a("8fac"),a("2877")),r=a("6544"),d=a.n(r),l=a("0798"),u=a("b0af"),v=a("99d9"),_=a("da13"),p=a("5d23"),f=Object(c["a"])(o,e,i,!1,null,null,null);s["default"]=f.exports;d()(f,{VAlert:l["a"],VCard:u["a"],VCardText:v["b"],VListItem:_["a"],VListItemContent:p["a"],VListItemSubtitle:p["b"]})}}]);
//# sourceMappingURL=chunk-078b3284.18697ec5.js.map