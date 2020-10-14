(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},3915:function(e,t,r){"use strict";var n=r("f746"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("4eb5"),o=r.n(a),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],u=(r("034f"),r("2877")),l={},c=Object(u["a"])(l,i,s,!1,null,null,null),d=c.exports,f=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),e.created||e.isLoading?e._e():n("section",{staticClass:"form"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.createShortUrl(t)}}},[e.errorMessage?n("div",{staticClass:"error"},[e._v(e._s(e.errorMessage))]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"url",id:"url",placeholder:"enter a url"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.slug,expression:"slug"}],attrs:{id:"slug",maxlength:"5",placeholder:"enter a slug (optional)"},domProps:{value:e.slug},on:{input:function(t){t.target.composing||(e.slug=t.target.value)}}}),n("button",[e._v("KILL URL")])])]),e.isLoading?n("section",[n("img",{attrs:{src:r("5c3d"),alt:""}})]):e._e(),e.created&&!e.isLoading?n("section",{staticClass:"created"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.link,expression:"link",arg:"copy"}]},[e._v("COPY")]),n("button",{on:{click:e.reset}},[e._v("GO BACK")])]):e._e(),n("Footer")],1)},m=[],v=(r("caad"),r("2532"),r("498a"),r("9911"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("img",{staticClass:"logo",attrs:{src:r("cf05")}})])}],h={name:"Header"},b=h,_=(r("67ff"),Object(u["a"])(b,v,g,!1,null,"68476edb",null)),w=_.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("p",[e._v(" Made with ❤️ by "),r("a",{attrs:{href:"https://maeldonn.github.io/",target:"_blank"}},[e._v("maeldonn")])])])}],O={name:"Footer"},k=O,j=(r("e5c6"),Object(u["a"])(k,y,x,!1,null,"1ac2047a",null)),M=j.exports,L=r("bc3a"),P=r("d370"),$=P.object({url:P.string().trim().pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/).required(),slug:P.string().trim().pattern(/^[\w\-]+$/i).max(5)}),C={name:"Home",components:{Header:w,Footer:M},data:function(){return{url:"",slug:"",link:null,created:!1,errorMessage:"",isLoading:!1}},watch:{url:{handler:function(){this.errorMessage=""}},slug:{handler:function(){this.errorMessage=""}}},methods:{createShortUrl:function(){var e=this;this.validateData()&&(this.isLoading=!0,L.post("/",{url:this.url,slug:this.slug||void 0},{headers:{"content-type":"application/json"}}).then((function(t){setTimeout((function(){e.link=t.data.link,e.created=!0,e.isLoading=!1}),1e3)})).catch((function(t){setTimeout((function(){t.message.includes("409")?e.errorMessage="Slug is already in use":t.message.includes("429")?e.errorMessage="You are sending too many requests. Try again in 60 seconds.":e.errorMessage="Impossible to create a short url. Please retry later.",e.isLoading=!1}),1e3)})))},validateData:function(){var e=$.validate({url:this.url,slug:this.slug||void 0});return!e.error||(e.error.message.includes("url")?this.errorMessage="URL is not valid":this.errorMessage="Slug is not valid",!1)},reset:function(){this.url="",this.slug="",this.link=null,this.created=!1}}},E=C,S=(r("8e19"),Object(u["a"])(E,p,m,!1,null,"3cc9d03f",null)),H=S.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"not-found"},[r("Header"),r("section",[e._m(0),r("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"Home"},role:"button"}},[r("button",[e._v("GO BACK")])])],1),r("Footer")],1)},T=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("4"),r("span",[e._v("0")]),e._v("4")])}],U={name:"NotFound",components:{Header:w,Footer:M}},A=U,N=(r("3915"),Object(u["a"])(A,F,T,!1,null,"7592d08a",null)),R=N.exports;n["a"].use(f["a"]);var z=[{path:"/",name:"Home",component:H,meta:{title:"URLkiller"}},{path:"/*",name:"404",component:R,meta:{title:"URLkiller - 404"}}],D=new f["a"]({mode:"history",base:"/",routes:z});D.beforeEach((function(e,t,r){document.title=e.meta.title,r()}));var K=D;n["a"].config.productionTip=!1,n["a"].use(o.a),new n["a"]({router:K,render:function(e){return e(d)}}).$mount("#app")},"5c3d":function(e,t,r){e.exports=r.p+"img/spinner.15e0371d.svg"},"67ff":function(e,t,r){"use strict";var n=r("cd9c"),a=r.n(n);a.a},"85ec":function(e,t,r){},"8e19":function(e,t,r){"use strict";var n=r("ca08"),a=r.n(n);a.a},"9d5a":function(e,t,r){},ca08:function(e,t,r){},cd9c:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.0329e402.png"},e5c6:function(e,t,r){"use strict";var n=r("9d5a"),a=r.n(n);a.a},f746:function(e,t,r){}});
//# sourceMappingURL=app.9504553d.js.map