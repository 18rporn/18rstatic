(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44599792"],{5388:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginh ActionArea-dti99u-0 fnpDiG"},[r("div",{staticClass:"P-Login"},[e._m(0),r("div",{staticClass:"Panel"},[e._m(1),r("form",{staticClass:"AuthForm"},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"Field"},[r("q-input",{attrs:{outlined:"",label:"请输入用户名/邮箱"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1)]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"Field"},[r("q-input",{attrs:{type:"password",outlined:"",label:"请输入密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"SubmitField"},[r("v-btn",{staticClass:"xyg w-100",attrs:{loading:e.submit_loading,color:"primary"},on:{click:e.on_submit}},[e._v("登录")])],1)]),e._m(2),e._m(3)])])]),r("div")])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Tip text-secondary"},[r("span",[e._v("男人的两大爱好，1.劝风尘女子从良，2.拉良家妇女下水")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"G-Title mb-3 mt-3"},[r("h3",[e._v("用户登录")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-3 text-center"},[e._v("您还不是会员，"),r("span",{staticClass:"text-primary G-CursorPointer"},[r("a",{attrs:{href:"/user/register"}},[e._v("立即注册")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-3 text-center"},[e._v("忘记密码？"),r("span",{staticClass:"text-primary G-CursorPointer"},[e._v("点此找回")])])}],i=(r("ac1f"),r("5319"),r("4b13"),{name:"login",data:function(){return{submit_loading:!1,user:{},referrer:""}},created:function(){if(this.$store.state.hasLogin)return this.$router.replace("/");window._t=this,console.log("document.referrer:",document.referrer),console.log("this.$router",this.$router),document.referrer&&(this.referrer=document.referrer)},beforeRouteEnter:function(e,t,r){r((function(e){e.referrer=t.path,console.log("from:",t)}))},methods:{on_submit:function(){var e=this;if(!this.user.username||this.user.username.length<4)return this.$message("用户名过短,不少于4位",{theme:"error",position:"top-left",duration:5e3});if(!this.user.password||this.user.password.length<=6)return this.$message("密码过短，不能少于6位",{theme:"error",position:"top-left",duration:5e3});this.submit_loading=!0;var t=this.user;return t.referrer=this.referrer,this.$axios.post("/app/user/login",t).then((function(t){e.loading=!1;var r=t.data;console.log("response_data:",r);var s=r.user,n=r.token;e.$message("登录成功，正在跳转",{theme:"normal",position:"top-left",duration:5e3}),e.$store.commit("login",{userinfo:s,token:n}),e.referrer||(e.referrer="/"),console.log("this.referrer:",e.referrer),e.$router.push(e.referrer)})).catch((function(t){console.log("error:",t),e.submit_loading=!1})),!1}}}),o=i,a=(r("c47d"),r("2877")),u=r("fe09"),l=r("6544"),c=r.n(l),f=r("8336"),m=Object(a["a"])(o,s,n,!1,null,null,null);t["default"]=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QInput:u["r"]}),c()(m,{VBtn:f["a"]})},"5f34":function(e,t,r){},c47d:function(e,t,r){"use strict";var s=r("5f34"),n=r.n(s);n.a}}]);
//# sourceMappingURL=chunk-44599792.33b55f93.js.map