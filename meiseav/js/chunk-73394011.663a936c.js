(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73394011"],{"080b":function(a,t,e){},"5f60":function(a,t,e){"use strict";var i=e("080b"),o=e.n(i);o.a},"7be5":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 card"},[a.document?e("h1",{staticClass:"b__title"},[a._v(" "+a._s(a.document.title)+" ")]):a._e(),e("div",{staticClass:"vip__code"},[e("div",[a._v("卡密:")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入卡密"},domProps:{value:a.code},on:{input:function(t){t.target.composing||(a.code=t.target.value)}}})])]),e("div",{staticClass:"form-group mt-2"},[e("div",{staticClass:"SubmitField"},[e("v-btn",{staticClass:"xyg w-100",attrs:{loading:a.loading,color:"primary"},on:{click:a.on_submit}},[a._v("提交")])],1)]),e("v-alert",{staticClass:"mt-2",attrs:{outlined:"",type:"success",text:""}},[a._v(" 如果充值未到帐， 请联系客服邮箱："+a._s(a.$config.email)+",提供下网站的用户名和支付截图。 如果是由我们原因造成的，我们将额外补偿。 ")])],1),e("rightpanel")],1)},o=[],s=(e("f51c"),e("ada0"),e("9296")),n={name:"vipcode",components:{rightpanel:s["a"]},data:function(){return{loading:!1,code:""}},created:function(){},methods:{on_submit:function(){var a=this;if(this.code.length<=12)return this.$message("请输入卡密",{theme:"error",position:"top-left",duration:5e3});this.loading=!0;var t={code:this.code,action:"check"};this.$axios.post("/app/active/code",t).then((function(t){a.loading=!1;var e=t.data;console.log("response_data:",e);var i=e.vip_code;i&&(a.$message("已成功激活",{theme:"error",position:"top-left",duration:5e3}),setTimeout((function(){a.$router.push("/user/info")}),1e3))})).catch((function(t){console.log("error:",t),a.loading=!1}))}}},l=n,c=(e("5f60"),e("2877")),p=e("6544"),r=e.n(p),d=e("0798"),y=e("8336"),u=Object(c["a"])(l,i,o,!1,null,"06743203",null);t["default"]=u.exports;r()(u,{VAlert:d["a"],VBtn:y["a"]})},9296:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-4 card"},[e("h1",{staticClass:"b__title"},[a._v(" 如何获取金币? ")]),e("div",{staticClass:"rounded-borders mt-3 mb-3"},[a._v(" 关于如何获取金币，这里有详细介绍 "),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[a._v("获取金币的方法")])],1),e("ads_box_list")],1)},o=[],s={name:"rightpanel"},n=s,l=e("2877"),c=Object(l["a"])(n,i,o,!1,null,"937f1c22",null);t["a"]=c.exports},ada0:function(a){a.exports=JSON.parse('{"list":[{"name":"微信支付","pay_way":"wxpay","which_pay":"tspay","avaliable":false},{"name":"支付宝H5","pay_way":"alipay","which_pay":"tspay","pay_amounts":{"min":100,"max":500},"avaliable":true},{"name":"支付宝(荐)","pay_way":"alipay_h5","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝1","pay_way":"ALIPAY2ALIQR","which_pay":"mypay","avaliable":false},{"name":"微信支付","pay_way":"901","which_pay":"typay","avaliable":true},{"name":"微信支付2","pay_way":"802","which_pay":"typay","platform":["ios"],"avaliable":true},{"name":"支付宝2","pay_way":"zfbwap","pay_amounts":[100,200],"which_pay":"typay","avaliable":true},{"name":"支付宝3","pay_way":"zfbvipwap","which_pay":"typay","pay_amounts":[100,200],"avaliable":true},{"name":"支付宝H5","pay_way":"sw516AlipayH5","which_pay":"gobuypay","avaliable":false},{"name":"支付宝扫码","pay_way":"sw516Alipay","which_pay":"gobuypay","avaliable":false},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay","avaliable":true,"class":"red"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"alipay"}')},f51c:function(a){a.exports=JSON.parse('{"configs":[{"id":"halfyear","days":90,"amount":100,"title":"三个月VIP","description":"三个月不限制看下载任何内容","actual_amount":100,"vip_degree":"vip2","day_pay":"0.5","add_gold":1000},{"id":"1year","days":365,"amount":200,"title":"一年VIP","description":"一年不限制看下载任何内容","actual_amount":200,"every_month":12,"vip_degree":"vip3","day_pay":"0.2","add_gold":2000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"3year","days":1096,"amount":300,"title":"三年VIP","description":"三年不限制看下载任何内容","actual_amount":300,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"forever","days":36500,"amount":500,"title":"终身VIP","description":"终身VIP,不限制看下载任何内容","actual_amount":500,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/D9146AE9"}]}')}}]);
//# sourceMappingURL=chunk-73394011.663a936c.js.map