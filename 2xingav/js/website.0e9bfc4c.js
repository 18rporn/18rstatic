(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={website:0,"chunk-6f95ed28":0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(){return Promise.resolve()},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("44db")},"29e8":function(t,e,n){},"3eea":function(t,e,n){},"44db":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("v-app",[n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]})],1)],1)],1)],1)},r=[],c=(n("557b"),n("507f"),n("3eea"),{name:"App",data:function(){return{}},created:function(){window.app=this,o["a"].prototype.$app=this},methods:{}}),i=c,s=n("2877"),u=n("fe09"),l=n("6544"),p=n.n(l),d=n("7496"),m=Object(s["a"])(i,a,r,!1,null,null,null),f=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QLayout:u["t"],QPageContainer:u["x"]}),p()(m,{VApp:d["a"]});n("1a78"),n("edb1"),n("87a1"),n("e3b3"),n("caec"),n("eedc");var h=n("2079"),_=n("e3c9"),b=n.n(_),v=(n("a4d3"),n("e01a"),n("8c4f")),y=n("e410"),w=n("58ca"),g=n("0284"),x=n.n(g),k=v["a"].prototype.push;v["a"].prototype.push=function(t){return k.call(this,t).catch((function(t){return t}))},o["a"].use(w["a"]),o["a"].use(v["a"]);var C=new v["a"]({routes:[{path:"/",name:"entry",component:y["default"],meta:{title:"网址发布"}}]});C.beforeEach((function(t,e,n){if(t.meta.content){var a=document.getElementsByTagName("head"),r=document.createElement("meta");document.querySelector('meta[name="keywords"]').setAttribute("content",t.meta.content.keywords),document.querySelector('meta[name="description"]').setAttribute("content",t.meta.content.description),r.content=t.meta.content,a[0].appendChild(r)}t.meta.title&&(document.title=t.meta.title,o["a"].prototype.set_title(t.meta.title)),n()})),o["a"].prototype.set_keywords=function(t){document.querySelector('meta[name="keywords"]').setAttribute("content",t)},o["a"].prototype.add_keywords=function(t){var e=document.querySelector('meta[name="keywords"]').getAttribute("content");e&&e.length>0?e+=","+t:e=t,document.querySelector('meta[name="keywords"]').setAttribute("content",e)},o["a"].prototype.set_description=function(t){document.querySelector('meta[name="description"]').setAttribute("content",t)},o["a"].prototype.add_description=function(t){var e=document.querySelector('meta[name="description"]').getAttribute("content");e&&e.length>0?e+=","+t:e=t,document.querySelector('meta[name="description"]').setAttribute("content",e)},o["a"].use(x.a,{id:"UA-169931030-2",router:C,autoTracking:{pageviewOnLoad:!1}});var O=C,j=n("71c2"),q=n("076e"),S=n("402c");n("346c"),n("a48c");o["a"].use(b.a),o["a"].config.productionTip=!1,o["a"].component("appheader",j["a"]),o["a"].component("appfooter",q["a"]),window.ga=new o["a"]({render:function(t){return t(f)},vuetify:S["a"],router:O,store:h["a"],created:function(){this.$store.dispatch("init"),this.init()}}).$mount("#app")},"5a50":function(t,e,n){"use strict";var o=n("29e8"),a=n.n(o);a.a},e410:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t.is_mobile()?n("div"):n("video",{attrs:{width:"100%",height:"100%",loop:"",muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{type:"video/mp4",src:"https://vd.kky.jjzrznp.cn/ok/hp1.mp4"}})]),n("div",{staticClass:"mask"}),n("div",{staticClass:"fixed-center"},[n("div",[n("h1",{staticClass:"text-white application_name font-weight-bold"},[t._v(t._s(t.$web_conf.application_name)+"网址发布")])]),n("div",{staticClass:"submit xxbtn row mb-2"},[n("q-btn",{staticClass:"full-width col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:"最新地址 : "+t.cn_tmp_host},on:{click:function(e){return t.go("https://"+t.cn_tmp_host)}}})],1),n("div",{staticClass:"submit xxbtn row mb-2"},[n("q-btn",{staticClass:"full-width col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:"永久地址 : "+t.$web_conf.domain},on:{click:function(e){return t.go("https://"+t.$web_conf.domain)}}})],1),t.ads_vpn_conf?n("div",{staticClass:"mb-10"},[t._m(0)]):t._e(),n("div",{staticClass:"text-white mb-3"},[t._v(" 其它推荐 ")]),n("div",{staticClass:"submit xxbtn row"},[t.ads_xyg_conf?n("q-btn",{staticClass:"col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:t.ads_xyg_conf.name},on:{click:function(e){return t.go(t.ads_xyg_conf.url)}}}):t._e(),t.ads_xyg_conf?n("q-btn",{staticClass:"col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:t.ads_69av_conf.name},on:{click:function(e){return t.go(t.ads_69av_conf.url)}}}):t._e()],1)]),n("div",{staticClass:"fixed-bottom-left"},[n("h5",{staticClass:"text-white ml-10 description mb-10"},[t._v(" 成人漫画,H韩国漫画,H日本漫画,尽在 "+t._s(t.$web_conf.application_name)+" ")])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:" text-white"},[n("span",{staticClass:"mr-4"},[t._v(" 如果无法打开，建议使用VPN访问我们的网站")])])}],r={name:"entry",data:function(){return{ads_vpn_conf:this.get_ads("vpn"),ads_xyg_conf:this.get_ads("xyg"),ads_69av_conf:this.get_ads("69av"),cn_tmp_host:void 0}},created:function(){window._t=this,this.cn_tmp_host=this.$web_conf.cn_tmp_hosts[0]}},c=r,i=(n("5a50"),n("2877")),s=n("fe09"),u=Object(i["a"])(c,o,a,!1,null,"4229796e",null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QBtn:s["e"]})}});
//# sourceMappingURL=website.0e9bfc4c.js.map