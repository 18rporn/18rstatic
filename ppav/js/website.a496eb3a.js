(function(t){function e(e){for(var o,r,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={website:0,"chunk-6f95ed28":0},a={website:0,"chunk-6f95ed28":0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-e89accd4":"99b3b2ac","chunk-be53103e":"f58da5a1"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-e89accd4":1,"chunk-be53103e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-e89accd4":"c2e62638","chunk-be53103e":"13f220b4"}[t]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],p.parentNode.removeChild(p),n(c)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;c.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("44db")},"29e8":function(t,e,n){},"3eea":function(t,e,n){},"44db":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("v-app",[n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]})],1)],1)],1)],1)},a=[],c=(n("557b"),n("507f"),n("3eea"),{name:"App",data:function(){return{}},created:function(){window.app=this,o["a"].prototype.$app=this},methods:{}}),i=c,s=n("2877"),u=n("fe09"),l=n("6544"),d=n.n(l),p=n("7496"),m=Object(s["a"])(i,r,a,!1,null,null,null),f=m.exports;m.options.components=Object.assign(Object.create(m.options.components||null),m.options.components||{},{QLayout:u["u"],QPageContainer:u["y"]}),d()(m,{VApp:p["a"]});n("1a78"),n("edb1"),n("87a1"),n("e3b3"),n("caec"),n("eedc");var h=n("2079"),v=n("e3c9"),b=n.n(v),_=(n("a4d3"),n("e01a"),n("8c4f")),y=n("e410"),g=n("58ca"),w=n("0284"),k=n.n(w),x=_["a"].prototype.push;_["a"].prototype.push=function(t){return x.call(this,t).catch((function(t){return t}))},o["a"].use(g["a"]),o["a"].use(_["a"]);var C=new _["a"]({routes:[{path:"/",name:"entry",component:y["default"],meta:{title:"网址发布"}}]});C.beforeEach((function(t,e,n){if(t.meta.content){var r=document.getElementsByTagName("head"),a=document.createElement("meta");document.querySelector('meta[name="keywords"]').setAttribute("content",t.meta.content.keywords),document.querySelector('meta[name="description"]').setAttribute("content",t.meta.content.description),a.content=t.meta.content,r[0].appendChild(a)}t.meta.title&&(document.title=t.meta.title,o["a"].prototype.set_title(t.meta.title)),n()})),o["a"].prototype.set_keywords=function(t){document.querySelector('meta[name="keywords"]').setAttribute("content",t)},o["a"].prototype.add_keywords=function(t){var e=document.querySelector('meta[name="keywords"]').getAttribute("content");e&&e.length>0?e+=","+t:e=t,document.querySelector('meta[name="keywords"]').setAttribute("content",e)},o["a"].prototype.set_description=function(t){document.querySelector('meta[name="description"]').setAttribute("content",t)},o["a"].prototype.add_description=function(t){var e=document.querySelector('meta[name="description"]').getAttribute("content");e&&e.length>0?e+=","+t:e=t,document.querySelector('meta[name="description"]').setAttribute("content",e)},o["a"].use(k.a,{id:"UA-169931030-2",router:C,autoTracking:{pageviewOnLoad:!1}});var j=C,O=n("71c2"),A=n("076e"),S=n("402c");n("346c"),n("a48c");o["a"].use(b.a),o["a"].config.productionTip=!1,o["a"].component("appheader",O["a"]),o["a"].component("appfooter",A["a"]),window.ga=new o["a"]({render:function(t){return t(f)},vuetify:S["a"],router:j,store:h["a"],created:function(){this.$store.dispatch("init"),this.init()}}).$mount("#app")},"5a50":function(t,e,n){"use strict";var o=n("29e8"),r=n.n(o);r.a},e410:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t.is_mobile()?n("div"):n("video",{attrs:{width:"100%",height:"100%",loop:"",muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{type:"video/mp4",src:"https://vd.kky.jjzrznp.cn/ok/hp1.mp4"}})]),n("div",{staticClass:"mask"}),n("div",{staticClass:"fixed-center"},[n("div",[n("h1",{staticClass:"text-white application_name font-weight-bold"},[t._v(t._s(t.$web_conf.application_name)+"网址发布")])]),n("div",{staticClass:"submit xxbtn row mb-2"},[n("q-btn",{staticClass:"full-width col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:"最新地址 : "+t.cn_tmp_host},on:{click:function(e){return t.go("https://"+t.cn_tmp_host)}}})],1),n("div",{staticClass:"submit xxbtn row mb-2"},[n("q-btn",{staticClass:"full-width col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:"永久地址 : "+t.$web_conf.domain},on:{click:function(e){return t.go("https://"+t.$web_conf.domain)}}})],1),t.ads_vpn_conf?n("div",{staticClass:"mb-10"},[t._m(0)]):t._e(),n("div",{staticClass:"text-white mb-3"},[t._v(" 其它推荐 ")]),n("div",{staticClass:"submit xxbtn row"},[t.ads_xyg_conf?n("q-btn",{staticClass:"col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:t.ads_xyg_conf.name},on:{click:function(e){return t.go(t.ads_xyg_conf.url)}}}):t._e(),t.ads_xyg_conf?n("q-btn",{staticClass:"col-auto mr-4",attrs:{color:"theme-color","text-color":"theme-color",label:t.ads_69av_conf.name},on:{click:function(e){return t.go(t.ads_69av_conf.url)}}}):t._e()],1)]),n("div",{staticClass:"fixed-bottom-left"},[n("h5",{staticClass:"text-white ml-10 description mb-10"},[t._v(" 成人漫画,H韩国漫画,H日本漫画,尽在 "+t._s(t.$web_conf.application_name)+" ")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:" text-white"},[n("span",{staticClass:"mr-4"},[t._v(" 如果无法打开，建议使用VPN访问我们的网站")])])}],a={name:"entry",data:function(){return{ads_vpn_conf:this.get_ads("vpn"),ads_xyg_conf:this.get_ads("xyg"),ads_69av_conf:this.get_ads("69av"),cn_tmp_host:void 0}},created:function(){window._t=this,this.cn_tmp_host=this.$web_conf.cn_tmp_hosts[0]}},c=a,i=(n("5a50"),n("2877")),s=n("fe09"),u=Object(i["a"])(c,o,r,!1,null,"4229796e",null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QBtn:s["f"]})}});
//# sourceMappingURL=website.a496eb3a.js.map