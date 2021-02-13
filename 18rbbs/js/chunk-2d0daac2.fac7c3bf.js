(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daac2"],{"6d31":function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card card-lg"},[e("div",{staticClass:"card-body"},[s._m(0),e("form",{staticClass:"new_user",attrs:{id:"new_user",action:"/account","accept-charset":"UTF-8",method:"post"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"user_login"}},[s._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"用户名",hint:"谨慎填写，以后不可修改，建议用 Twitter ID。",type:"text",name:"user[login]",id:"user_login"},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"user_email"}},[s._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",name:"user[email]",id:"user_email"},domProps:{value:s.user.email},on:{input:function(t){t.target.composing||s.$set(s.user,"email",t.target.value)}}})]),s._m(1),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"user_password"}},[s._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password1,expression:"user.password1"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"密码",type:"password",name:"user[password]",id:"user_password"},domProps:{value:s.user.password1},on:{input:function(t){t.target.composing||s.$set(s.user,"password1",t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"user_password_confirmation"}},[s._v("确认密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password2,expression:"user.password2"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"确认密码",type:"password",name:"user[password_confirmation]",id:"user_password_confirmation"},domProps:{value:s.user.password2},on:{input:function(t){t.target.composing||s.$set(s.user,"password2",t.target.value)}}})]),e("div",{staticClass:"form-actions"},[e("input",{staticClass:"btn btn-lg btn-primary",attrs:{disabled:s.submit_loading,type:"submit",name:"commit",value:"提交注册信息","data-disable-with":"正在提交"},on:{click:s.on_submit}})])])])])]),e("div",{staticClass:"col"})])},a=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"card-title"},[s._v(" 注册新用户 "),e("div",{staticClass:"actions hide-ios"},[e("a",{attrs:{href:"/account/login"}},[s._v("登录")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox custom-checkbox-lg"},[e("input",{attrs:{name:"user[email_public]",type:"hidden",value:"0"}}),e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",checked:"checked",name:"user[email_public]",id:"user_email_public"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"user_email_public"}},[s._v("公开 Email")])])])}],o=(e("ac1f"),e("5319"),e("4b13"),{name:"login",data:function(){return{submit_loading:!1,user:{}}},created:function(){if(window._t=this,this.$store.state.hasLogin)return this.$router.replace("/")},methods:{on_submit:function(){var s=this;if(!this.user.username||this.user.username.length<4)return this.$messageX("用户名过短,不少于4位",{theme:"error",position:"top-left",duration:5e3});if(!this.user.password1||this.user.password1.length<6)return this.$messageX("密码过短，不能少于6位",{theme:"error",position:"top-left",duration:5e3});if(this.user.password1!=this.user.password2)return this.$messageX("两次密码不相同",{theme:"error",position:"top-left",duration:5e3});if(this.user.email.length<3)return this.$messageX("请输入正确的邮箱",{theme:"error",position:"top-left",duration:5e3});this.submit_loading=!0;var t=this.user,e=this.get_from_source();return e&&(t["f"]=e),this.$axios.post("/app/user/register",t).then((function(t){s.submit_loading=!1;var e=t.data,r=e.user_info,a=e.token;s.$messageX("注册成功，正在跳转,如果没有跳转，你手动刷新页面。",{theme:"normal",position:"top-left",duration:5e3}),s.$store.commit("login",{userinfo:r,token:a}),s.$router.push("/")})).catch((function(t){s.submit_loading=!1,s.$message("出现错误，请刷新网页或者稍后再试",{theme:"error"})})),!1}}}),i=o,l=e("2877"),n=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0daac2.fac7c3bf.js.map