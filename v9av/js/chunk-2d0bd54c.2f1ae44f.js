(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd54c"],{"2c16":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card card-lg"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"card-title"},[t._v("忘记了密码?")]),e("form",{staticClass:"new_user",attrs:{id:"new_user","accept-charset":"UTF-8",method:"post"},on:{submit:function(a){return a.preventDefault(),t.on_submit(a)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",name:"user[email]",id:"user_email"},domProps:{value:t.user.email},on:{input:function(a){a.target.composing||t.$set(t.user,"email",a.target.value)}}}),e("p",{staticClass:"form-text text-muted"},[t._v("此功能将会发送一个找回密码的特别链接到你的邮箱，通过改链接可以进入重置密码的页面。")])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group input-group-lg"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.captcha,expression:"user.captcha"}],staticClass:"form-control",attrs:{placeholder:"验证码",name:"_rucaptcha",type:"text",autocorrect:"off",autocapitalize:"off",pattern:"[0-9a-zA-Z]*",autocomplete:"off",maxlength:"4"},domProps:{value:t.user.captcha},on:{input:function(a){a.target.composing||t.$set(t.user,"captcha",a.target.value)}}}),e("div",{staticClass:"input-group-append input-group-captcha"},[t.encoded_string?e("span",{staticClass:"input-group-text",staticStyle:{padding:"3px 4px",background:"#fff"}},[e("a",{staticClass:"rucaptcha-image-box",attrs:{href:"#"}},[e("img",{staticClass:"rucaptcha-image",attrs:{src:"data:image/png;base64,"+t.encoded_string},on:{click:t.init}})])]):t._e()])])]),t._m(0)])])])]),e("div",{staticClass:"col"})])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-actions"},[e("input",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"submit",name:"commit",value:"找回密码","data-disable-with":"正在提交"}})])}],c={name:"forgot",created:function(){this.init()},data:function(){return{encoded_string:void 0,captcha_key:void 0,user:{},submit_loading:!1}},methods:{on_submit:function(){var t=this;this.submit_loading=!0;var a=this.user;return a.key=this.captcha_key,console.log("captcha_key:",this.captcha_key),this.$axios.post("/app/user/forgot",a).then((function(a){t.$message("已发送邮件，请前往邮箱查看。",{theme:"error",position:"top-left",duration:5e3})})).catch((function(a){console.log("error:",a),t.submit_loading=!1})),!1},init:function(){var t=this;this.$axios.get("/app/user/forgot").then((function(a){t.encoded_string=a.data.encoded_string,t.captcha_key=a.data.key})).catch((function(t){}))}}},o=c,r=e("2877"),n=Object(r["a"])(o,s,i,!1,null,"60d68d80",null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0bd54c.2f1ae44f.js.map