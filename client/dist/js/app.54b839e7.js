(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02bf":function(e,t,r){"use strict";var n=r("e570"),a=r.n(n);a.a},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("4eb5"),o=r.n(a),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],l=(r("034f"),r("2877")),u={},c=Object(l["a"])(u,s,i,!1,null,null,null),p=c.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._m(0),r("section",[e.created?e._e():r("form",{on:{submit:function(t){return t.preventDefault(),e.createShortUrl(t)}}},[e.errorMessage?r("div",{staticClass:"error"},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"url",id:"url",placeholder:"enter a url",required:""},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.slug,expression:"slug"}],attrs:{id:"slug",maxlength:"5",placeholder:"enter a slug (optional)"},domProps:{value:e.slug},on:{input:function(t){t.target.composing||(e.slug=t.target.value)}}}),r("button",{staticClass:"create"},[e._v("KILL URL")])]),e.created?r("div",{staticClass:"created"},[r("div",{staticClass:"result"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],staticClass:"link",domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.link,expression:"link",arg:"copy"}],staticClass:"copy"},[e._v("Copy")])]),r("button",{staticClass:"back",on:{click:e.reset}},[e._v("CREATE A NEW URL")])]):e._e()]),e._m(1)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("img",{staticClass:"logo",attrs:{src:r("cf05")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("p",[e._v("Made with ❤️ by "),r("a",{attrs:{href:"https://maeldonn.github.io/",target:"_blank"}},[e._v("maeldonn")])])])}],m=(r("caad"),r("2532"),r("498a"),r("9911"),r("bc3a")),g=r("d370"),h=g.object({url:g.string().trim().pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/).required(),slug:g.string().trim().pattern(/^[\w\-]+$/i).max(5)}),b={name:"Home",data:function(){return{url:"",slug:"",link:null,created:!1,errorMessage:"",isLoading:!1}},watch:{url:{handler:function(){this.errorMessage=""}},slug:{handler:function(){this.errorMessage=""}}},methods:{createShortUrl:function(){var e=this;this.validateData()&&m.post("/",{url:this.url,slug:this.slug||void 0},{headers:{"content-type":"application/json"}}).then((function(t){e.link=t.data.link,e.created=!0})).catch((function(t){t.message.includes("409")?e.errorMessage="Slug is already in use":t.message.includes("429")?e.errorMessage="You are sending too many requests. Try again in 60 seconds.":e.errorMessage="Impossible to create a short url. Please retry later."}))},validateData:function(){var e=h.validate({url:this.url,slug:this.slug||void 0});return!e.error||(e.error.message.includes("url")?this.errorMessage="URL is not valid":this.errorMessage="Slug is not valid",!1)},reset:function(){this.url="",this.slug="",this.link=null,this.created=!1}}},_=b,y=(r("02bf"),Object(l["a"])(_,f,v,!1,null,"2623f347",null)),w=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"not-found"},[r("h1",[e._v("404 not found")]),r("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"Home"},role:"button"}},[e._v("Go back Home")])],1)},x=[],M={},j=Object(l["a"])(M,k,x,!1,null,null,null),O=j.exports;n["a"].use(d["a"]);var C=[{path:"/",name:"Home",component:w,meta:{title:"URLkiller"}},{path:"/*",name:"404",component:O,meta:{title:"URLkiller - 404"}}],P=new d["a"]({mode:"history",base:"/",routes:C});P.beforeEach((function(e,t,r){document.title=e.meta.title,r()}));var E=P;n["a"].config.productionTip=!1,n["a"].use(o.a),new n["a"]({router:E,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.0329e402.png"},e570:function(e,t,r){}});
//# sourceMappingURL=app.54b839e7.js.map