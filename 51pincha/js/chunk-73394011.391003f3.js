(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73394011"],{"080b":function(a,t,e){},"5f60":function(a,t,e){"use strict";var i=e("080b"),o=e.n(i);o.a},"7be5":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 card"},[a.document?e("h1",{staticClass:"b__title"},[a._v(" "+a._s(a.document.title)+" ")]):a._e(),e("div",{staticClass:"vip__code"},[e("div",[a._v("卡密:")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入卡密"},domProps:{value:a.code},on:{input:function(t){t.target.composing||(a.code=t.target.value)}}})])]),e("div",{staticClass:"form-group mt-2"},[e("div",{staticClass:"SubmitField"},[e("v-btn",{staticClass:"xyg w-100",attrs:{loading:a.loading,color:"primary"},on:{click:a.on_submit}},[a._v("提交")])],1)]),e("v-alert",{staticClass:"mt-2",attrs:{outlined:"",type:"success",text:""}},[a._v(" 如果充值未到帐， 请联系客服邮箱："+a._s(a.$config.email)+",提供下网站的用户名和支付截图。 如果是由我们原因造成的，我们将额外补偿。 ")])],1),e("rightpanel")],1)},o=[],s=(e("f51c"),e("ada0"),e("9296")),n={name:"vipcode",components:{rightpanel:s["a"]},data:function(){return{loading:!1,code:""}},created:function(){},methods:{on_submit:function(){var a=this;if(this.code.length<=12)return this.$message("请输入卡密",{theme:"error",position:"top-left",duration:5e3});this.loading=!0;var t={code:this.code,action:"check"};this.$axios.post("/app/active/code",t).then((function(t){a.loading=!1;var e=t.data;console.log("response_data:",e);var i=e.vip_code;i&&(a.$message("已成功激活",{theme:"error",position:"top-left",duration:5e3}),setTimeout((function(){a.$router.push("/user/info")}),1e3))})).catch((function(t){console.log("error:",t),a.loading=!1}))}}},l=n,c=(e("5f60"),e("2877")),r=e("6544"),d=e.n(r),p=e("0798"),u=e("8336"),_=Object(c["a"])(l,i,o,!1,null,"06743203",null);t["default"]=_.exports;d()(_,{VAlert:p["a"],VBtn:u["a"]})},9296:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-4 card"},[e("h1",{staticClass:"b__title"},[a._v(" 如何获取金币? ")]),e("div",{staticClass:"rounded-borders mt-3 mb-3"},[a._v(" 关于如何获取金币，这里有详细介绍 "),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[a._v("获取金币的方法")])],1),e("ads_box_list")],1)},o=[],s={name:"rightpanel"},n=s,l=e("2877"),c=Object(l["a"])(n,i,o,!1,null,"937f1c22",null);t["a"]=c.exports},ada0:function(a){a.exports=JSON.parse('{"list":[{"name":"支宝扫码","pay_way":"Alipay_QR","which_pay":"xpay","avaliable":false},{"name":"支付宝(荐)","pay_way":"alipay","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝(推荐)","pay_way":"ALIPAY2ALIQR","which_pay":"mypay","avaliable":true},{"name":"微信支付","pay_way":"wxwap","which_pay":"hypay","pay_amounts":[100,200],"avaliable":true},{"name":"支付宝1","pay_way":"zfbwap","which_pay":"hypay","only_mobile":true,"avaliable":true},{"name":"支付宝2","pay_way":"Alipay_H5","which_pay":"xpay","only_mobile":true,"avaliable":false},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay","avaliable":true,"class":"red"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"ALIPAY2ALIQR"}')},f51c:function(a){a.exports=JSON.parse('{"configs":[{"id":"90day","days":90,"amount":328,"title":"三月VIP","description":"VIP时长三月,可免费查看所有性息","actual_amount":328,"every_month":33,"vip_degree":"vip1","add_gold":3000,"faka1":"https://787fk.com//details/1C0E8BCF","faka2":"https://www.98fak.com/details/789BDF90"},{"id":"1year","days":365,"amount":399,"title":"一年VIP","description":"VIP时长一年,可免费查看所有性息","actual_amount":399,"every_month":21,"vip_degree":"vip2","add_gold":5000,"faka1":"https://787fk.com//details/83F956D9","faka2":"https://www.98fak.com/details/ED0A5120"},{"id":"3year","days":1056,"amount":499,"title":"三年VIP","description":"VIP时长三年,可免费查看所有性息","actual_amount":499,"every_month":9,"vip_degree":"vip3","add_gold":12000,"faka1":"https://787fk.com//details/7D90500C","faka2":"https://www.98fak.com/details/A70461B8"},{"id":"forever","days":36500,"amount":699,"title":"终身VIP","description":"终身VIP,可免费查看所有性息","actual_amount":699,"every_month":9,"vip_degree":"vip4","add_gold":100000,"faka1":"https://787fk.com//details/971DE4DF","faka2":"https://www.98fak.com/details/BEBD797A"}]}')}}]);
//# sourceMappingURL=chunk-73394011.391003f3.js.map