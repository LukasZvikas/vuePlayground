(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0604f138"],{"0fce":function(t,e,r){},"162c":function(t,e,r){"use strict";var n=r("be94"),i=(r("96cf"),r("1da1")),o=(r("cadf"),r("551c"),r("097d"),r("c0a0")),a=r("670b");function s(t){var e={};return t||(e.Authorization="Bearer ".concat(Object(o["a"])()||null)),e}e["a"]=function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,i,o,c,u,l,h,f,p,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.urlPath,i=e.parameters,o=void 0===i?{}:i,c=e.toApi,u=void 0!==c&&c,l=new URL(r),h=Object(n["a"])({api_key:a.TMDB_API_KEY},o),l.search=new URLSearchParams(h),f=s(u),t.prev=5,t.next=8,fetch(l,{headers:f});case 8:return p=t.sent,t.next=11,p.json();case 11:return d=t.sent,t.abrupt("return",d);case 15:throw t.prev=15,t.t0=t["catch"](5),new Error(t.t0);case 18:case"end":return t.stop()}},t,this,[[5,15]])}));return function(e){return t.apply(this,arguments)}}()},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)})}}r.d(e,"a",function(){return i})},"1e5f":function(t,e,r){},"4e94":function(t,e,r){"use strict";var n=r("e004"),i=r.n(n);i.a},"670b":function(t,e,r){t.exports=r("bb3e")},"95c7":function(t,e,r){"use strict";var n=r("a7cf"),i=r.n(n);i.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(M([])));w&&w!==n&&i.call(w,a)&&(m=w);var y=j.prototype=x.prototype=Object.create(m);L.prototype=y.constructor=j,j.constructor=L,j[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[s]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var i=new E(b(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=k(t,r,a),o}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function L(){}function j(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,o,a){var s=_(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var r;function n(t,n){function i(){return new Promise(function(r,i){e(t,n,r,i)})}return r=r?r.then(i,i):i()}this._invoke=n}function k(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return N()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=I(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function I(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98ca":function(t,e,r){"use strict";var n=r("1e5f"),i=r.n(n);i.a},a7cf:function(t,e,r){},bb3e:function(t,e){},d102:function(t,e,r){t.exports=r.p+"img/guardians.d3927ee7.jpg"},d2ad:function(t,e,r){"use strict";var n=r("0fce"),i=r.n(n);i.a},e004:function(t,e,r){},ed52:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-wrap"},[r("image-heading"),r("carousel-list",{attrs:{movies:t.popularMovies,title:"Popular Movies",caroID:"carousel-1"}}),r("carousel-list",{attrs:{movies:t.comingSoon,title:"Coming Soon",caroID:"carousel-2"}})],1)},i=[],o=(r("96cf"),r("1da1")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-list-wrapper"},[r("div",{staticClass:"d-flex justify-content-center align-items-center"},[r("div",{staticClass:"heading-2",attrs:{"data-test":t.caroID}},[t._v(t._s(t.title))])]),r("div",{staticClass:"carousel slide",attrs:{id:t.caroID,"data-ride":"carousel"}},[r("div",{staticClass:"carousel-inner"},t._l(t.sliceMovieArray(t.movies),function(t,e){return r("CarouselListItem",{key:e,class:{active:0===e},attrs:{movies:t,"data-test":"carousel"}})}),1),r("a",{staticClass:"carousel-control-prev",attrs:{href:"#"+t.caroID,role:"button","data-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Previous")])]),r("a",{staticClass:"carousel-control-next",attrs:{href:"#"+t.caroID,role:"button","data-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Next")])])])])},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carousel-item"},[r("div",{staticClass:"row",staticStyle:{padding:"0"}},t._l(t.movies,function(e){return r("div",{key:e.id},[r("div",{staticClass:"movie-item-box",attrs:{"data-test":"carousel-item"},on:{click:function(r){t.showMovieDetails(e.id)}}},[r("img",{staticClass:"img-fluid",staticStyle:{height:"100%"},attrs:{src:t.getPoster(e.poster_path),"data-test":"carousel-item-img"}}),r("div",{staticClass:"movie-item-box-title",attrs:{"data-test":"carousel-item-title"}},[t._v(t._s(e.title))])])])}),0)])},u=[],l={props:{movies:{}},methods:{getPoster:function(t){return"http://image.tmdb.org/t/p/w500".concat(t)},showMovieDetails:function(t){this.$router.push({path:"/movie/".concat(t)})}}},h=l,f=(r("95c7"),r("2877")),p=Object(f["a"])(h,c,u,!1,null,null,null);p.options.__file="CarouselListItem.vue";var d=p.exports,v={components:{CarouselListItem:d},props:{movies:Array,title:String,caroID:String},data:function(){return{window:{width:window.innerWidth}}},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{sliceMovieArray:function(t){var e=t.length,r=0,n=this.columnSetter(),i=[];while(e>0)this.window.width>=720?(i.push(t.slice(r,n)),r+=4,n+=4,e-=4):this.window.width<720&&(i.push(t.slice(r,n)),r+=2,n+=2,e-=2);return i},columnSetter:function(){switch(!0){case this.window.width>=1120:return 4;case this.window.width>=960:return 3;case this.window.width<=540:return 1;case this.window.width<960:return 2}},handleResize:function(){this.window.width=window.innerWidth}}},m=v,g=(r("d2ad"),Object(f["a"])(m,a,s,!1,null,null,null));g.options.__file="CarouselList.vue";var w=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 mb-3",staticStyle:{height:"30rem"}},[n("div",{staticClass:"position-absolute w-100",staticStyle:{height:"30rem","background-color":"rgba(0,0,0,0.7)"}}),n("img",{staticClass:"h-100 w-100",staticStyle:{"object-fit":"cover"},attrs:{src:r("d102")}}),n("div",{staticClass:"position-absolute w-100",staticStyle:{top:"40%",left:"50%",transform:"translate(-50%, -50%)"}},[t._m(0),n("div",{staticClass:"w-100 d-flex justify-content-center"},[n("div",{staticClass:"d-flex justify-content-around align-item-center row w-50"},[t._l(t.decideNavLinks,function(e,r){return[n("router-link",{key:r,staticClass:"heading-button d-flex text-center align-items-center justify-content-center font-weight-bold col-8 col-md-3 mx-1 mb-1",staticStyle:{padding:"1rem!important"},attrs:{to:e.href}},[t._v(t._s(e.name))])]})],2)])])])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-light text-center mb-1",staticStyle:{"font-size":"3rem"}},[t._v("\n      Welcome to\n      "),r("span",{staticClass:"font-weight-bold heading-1",staticStyle:{"font-size":"3rem"}},[t._v("MovieHub")])])}],_=(r("6762"),r("be94")),x=r("2f62"),L={data:function(){return{navItems:[{href:"/favorites",name:"Favorites"},{href:"/search",name:"Search"},{href:"/login",name:"Login"},{href:"/signup",name:"Sign Up"},{href:"/profile",name:"Profile"},{href:"/watchlist",name:"Watchlist"}],headerState:!1}},computed:Object(_["a"])({},Object(x["b"])(["isLoggedIn"]),{decideNavLinks:function(){var t=["/login","/signup"],e=["/profile","/favorites","/watchlist"],r=this.navItems.filter(function(t){return!e.includes(t.href)}),n=this.navItems.filter(function(e){return!t.includes(e.href)});return this.isLoggedIn?n:r},isUserLoggedIn:function(){return this.isLoggedIn}})},j=L,C=(r("4e94"),Object(f["a"])(j,y,b,!1,null,null,null));C.options.__file="ImageHeading.vue";var E=C.exports,k=r("162c"),I={components:{CarouselList:w,ImageHeading:E},data:function(){return{popularMovies:[],comingSoon:[]}},created:function(){this.getPopularMovies("popular"),this.getPopularMovies("upcoming")},methods:{getPopularMovies:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var r,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e),n={sort_by:"popularity.desc",region:"US"},t.next=4,Object(k["a"])({urlPath:r,params:n});case 4:i=t.sent,t.t0=e,t.next="popular"===t.t0?8:"upcoming"===t.t0?10:12;break;case 8:return this.popularMovies=i.results,t.abrupt("break",12);case 10:return this.comingSoon=i.results,t.abrupt("break",12);case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},O=I,P=(r("98ca"),Object(f["a"])(O,n,i,!1,null,null,null));P.options.__file="index.vue";e["default"]=P.exports}}]);
//# sourceMappingURL=chunk-0604f138.d97b5f0a.js.map