(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b4b33fe"],{"67f5":function(s,t,e){"use strict";var i=e("993b"),r=e.n(i);r.a},"6d31":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"loginh ActionArea-dti99u-0 fnpDiG"},[e("div",{staticClass:"P-Login"},[s._m(0),e("div",{staticClass:"Panel"},[s._m(1),e("form",{staticClass:"AuthForm"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"Field"},[e("q-input",{attrs:{outlined:"",label:"邮箱"},model:{value:s.user.email,callback:function(t){s.$set(s.user,"email",t)},expression:"user.email"}})],1)]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"Field"},[e("q-input",{attrs:{outlined:"",label:"用户名"},model:{value:s.user.username,callback:function(t){s.$set(s.user,"username",t)},expression:"user.username"}})],1)]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"Field"},[e("q-input",{attrs:{type:"password",outlined:"",label:"请输入密码"},model:{value:s.user.password1,callback:function(t){s.$set(s.user,"password1",t)},expression:"user.password1"}})],1)]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"Field"},[e("q-input",{attrs:{type:"password",outlined:"",label:"请再次输入密码"},model:{value:s.user.password2,callback:function(t){s.$set(s.user,"password2",t)},expression:"user.password2"}})],1)]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"SubmitField"},[e("v-btn",{staticClass:"xyg w-100",attrs:{loading:s.submit_loading,color:"primary"},on:{click:s.on_submit}},[s._v(s._s(s.$l("register")))])],1)]),s._m(2)])])]),e("div")])},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"Tip text-secondary"},[e("span",[s._v("男人的两大爱好，1.劝风尘女子从良，2.拉良家妇女下水")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"G-Title mb-3 mt-3"},[e("h3",[s._v("用户登录")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v(" 已有账号 "),e("a",{attrs:{href:"/user/login"}},[s._v("立即登录")])])}],a=(e("ac1f"),e("5319"),e("4b13"),{name:"login",data:function(){return{submit_loading:!1,user:{}}},created:function(){if(window._t=this,console.log("_t:",this),this.$store.state.hasLogin)return this.$router.replace("/")},methods:{on_submit:function(){var s=this;if(!this.user.username||this.user.username.length<4)return this.$messageX("用户名过短,不少于4位",{theme:"error",position:"top-left",duration:5e3});if(!this.user.password1||this.user.password1.length<6)return this.$messageX("密码过短，不能少于6位",{theme:"error",position:"top-left",duration:5e3});if(this.user.password1!=this.user.password2)return this.$messageX("两次密码不相同",{theme:"error",position:"top-left",duration:5e3});if(this.user.email.length<3)return this.$messageX("请输入正确的邮箱",{theme:"error",position:"top-left",duration:5e3});this.submit_loading=!0;var t=this.user,e=this.get_from_source();return e&&(t["f"]=e),this.$axios.post("/app/user/register",t).then((function(t){s.submit_loading=!1;var e=t.data;console.log("response_data:",e);var i=e.user_info,r=e.token;s.$messageX("注册成功，正在跳转,如果没有跳转，你手动刷新页面。",{theme:"normal",position:"top-left",duration:5e3}),s.$store.commit("login",{userinfo:i,token:r}),s.$router.push("/")})).catch((function(t){s.submit_loading=!1,s.$message("出现错误，请刷新网页或者稍后再试",{theme:"error"})})),!1}}}),o=a,n=(e("67f5"),e("2877")),u=e("fe09"),l=e("6544"),c=e.n(l),d=e("8336"),p=Object(n["a"])(o,i,r,!1,null,null,null);t["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QInput:u["r"]}),c()(p,{VBtn:d["a"]})},"993b":function(s,t,e){}}]);
//# sourceMappingURL=chunk-1b4b33fe.edd9bcc5.js.map