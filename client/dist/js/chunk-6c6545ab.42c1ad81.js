(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c6545ab"],{"0ac9":function(t,e,r){},"0dd7":function(t,e,r){},"0df9":function(t,e,r){},"11e9":function(t,e,r){var i=r("52a7"),a=r("4630"),s=r("6821"),n=r("6a99"),o=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=s(t),e=n(e,!0),c)try{return l(t,e)}catch(r){}if(o(t,e))return a(!i.f.call(t,e),t[e])}},"1db7":function(t,e,r){},"1ff8":function(t,e,r){},2375:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 h-100 justify-content-center align-items-center"},[r("div",{staticClass:"lds-ring"},[r("div"),r("div"),r("div"),r("div")])])}],s={},n=s,o=(r("f22a"),r("2877")),c=Object(o["a"])(n,i,a,!1,null,null,null);c.options.__file="Spinner.vue";e["a"]=c.exports},2781:function(t,e,r){"use strict";var i=r("0df9"),a=r.n(i);a.a},"28a5":function(t,e,r){"use strict";var i=r("aae3"),a=r("cb7c"),s=r("ebd6"),n=r("0390"),o=r("9def"),c=r("5f1b"),l=r("520a"),v=Math.min,u=[].push,d="split",f="length",m="lastIndex",h=!!function(){try{return new RegExp("x","y")}catch(t){}}();r("214f")("split",2,function(t,e,r,p){var _;return _="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[f]||2!="ab"[d](/(?:ab)*/)[f]||4!="."[d](/(.?)(.?)/)[f]||"."[d](/()()/)[f]>1||""[d](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return r.call(a,t,e);var s,n,o,c=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=void 0===e?4294967295:e>>>0,p=new RegExp(t.source,v+"g");while(s=l.call(p,a)){if(n=p[m],n>d&&(c.push(a.slice(d,s.index)),s[f]>1&&s.index<a[f]&&u.apply(c,s.slice(1)),o=s[0][f],d=n,c[f]>=h))break;p[m]===s.index&&p[m]++}return d===a[f]?!o&&p.test("")||c.push(""):c.push(a.slice(d)),c[f]>h?c.slice(0,h):c}:"0"[d](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,i){var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,i):_.call(String(a),r,i)},function(t,e){var i=p(_,t,this,e,_!==r);if(i.done)return i.value;var l=a(t),u=String(this),d=s(l,RegExp),f=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),g=new d(h?l:"^(?:"+l.source+")",m),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===u.length)return null===c(g,u)?[u]:[];var w=0,x=0,y=[];while(x<u.length){g.lastIndex=h?x:0;var C,j=c(g,h?u:u.slice(x));if(null===j||(C=v(o(g.lastIndex+(h?0:x)),u.length))===w)x=n(u,x,f);else{if(y.push(u.slice(w,x)),y.length===b)return y;for(var k=1;k<=j.length-1;k++)if(y.push(j[k]),y.length===b)return y;x=w=C}}return y.push(u.slice(w)),y}]})},"2e3d":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-auto col-md-auto d-flex align-items-center mr-1 mb-sm-0 user-score"},[t._m(0),r("percent-circle",{attrs:{vote_average:t.vote_average}})],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",{staticClass:"font-weight-bold mr-1 text-white"},[r("div",[t._v("User")]),r("div",[t._v("Score")])])}],s=(r("c5f6"),r("4378")),n={components:{PercentCircle:s["a"]},props:{vote_average:Number}},o=n,c=(r("e6bb"),r("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null);l.options.__file="UserScore.vue";e["a"]=l.exports},"323f":function(t,e,r){},3737:function(t,e,r){},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},4378:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{staticClass:"circle-chart",attrs:{viewBox:"0 0 36 36",width:"70",height:"70",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831"}}),r("path",{staticClass:"circle-chart__circle",attrs:{d:"M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831",stroke:t.determineColor(),"stroke-width":"2","stroke-dasharray":this.formatAverage(t.vote_average)+" 100","stroke-linecap":"round"}}),r("g",{staticClass:"circle-chart__info"},[r("text",{staticClass:"circle-chart__percent font-weight-bold",attrs:{"data-test":"movie-overview-average",x:"18",y:"17","alignment-baseline":"central","text-anchor":"middle","font-size":"8",fill:"#fff"}},[t.vote_average?[t._v(t._s(this.formatAverage(t.vote_average))+"%")]:[t._v("NR")]],2)])])])},a=[],s=(r("6b54"),r("28a5"),r("c5f6"),{props:{vote_average:Number},methods:{determineColor:function(){return 0===this.vote_average?"#48AE48":this.vote_average<5?"#f70963":"#48AE48"},formatAverage:function(t){return t?t.toString().split(".").join(""):"..."}}}),n=s,o=(r("b5a5"),r("2877")),c=Object(o["a"])(n,i,a,!1,null,null,null);c.options.__file="PercentCircle.vue";e["a"]=c.exports},"44eb":function(t,e,r){"use strict";var i=r("3737"),a=r.n(i);a.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5375:function(t,e,r){"use strict";var i=r("0dd7"),a=r.n(i);a.a},"5c33":function(t,e,r){},"5dbc":function(t,e,r){var i=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var s,n=e.constructor;return n!==r&&"function"==typeof n&&(s=n.prototype)!==r.prototype&&i(s)&&a&&a(t,s),t}},6394:function(t,e,r){"use strict";var i=r("1ff8"),a=r.n(i);a.a},"6b54":function(t,e,r){"use strict";r("3846");var i=r("cb7c"),a=r("0bfb"),s=r("9e1e"),n="toString",o=/./[n],c=function(t){r("2aba")(RegExp.prototype,n,t,!0)};r("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?a.call(t):void 0)}):o.name!=n&&c(function(){return o.call(this)})},"7ae9":function(t,e,r){"use strict";var i=r("7ba2"),a=r.n(i);a.a},"7ba2":function(t,e,r){},"8b97":function(t,e,r){var i=r("d3f4"),a=r("cb7c"),s=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return s(t,r),e?t.__proto__=r:i(t,r),t}}({},!1):void 0),check:s}},9093:function(t,e,r){var i=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},"9a8d":function(t,e,r){},aa77:function(t,e,r){var i=r("5ca1"),a=r("be13"),s=r("79e5"),n=r("fdef"),o="["+n+"]",c="​",l=RegExp("^"+o+o+"*"),v=RegExp(o+o+"*$"),u=function(t,e,r){var a={},o=s(function(){return!!n[t]()||c[t]()!=c}),l=a[t]=o?e(d):n[t];r&&(a[r]=l),i(i.P+i.F*o,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(v,"")),t};t.exports=u},aae3:function(t,e,r){var i=r("d3f4"),a=r("2d95"),s=r("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},b488:function(t,e,r){"use strict";var i=r("be94"),a=(r("96cf"),r("1da1")),s=(r("cadf"),r("551c"),r("097d"),r("c0a0"));e["a"]=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var r,a,n,o,c,l,v,u,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.urlPath,a=e.body,n=e.parameters,o=void 0===n?{}:n,c=new URL(r),l=Object(s["a"])(),v=Object(i["a"])({},o),c.search=new URLSearchParams(v),t.prev=5,t.next=8,fetch(c,{method:"POST",body:JSON.stringify(Object(i["a"])({},a)),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)}});case 8:return u=t.sent,t.next=11,u.json();case 11:return d=t.sent,t.abrupt("return",d);case 15:t.prev=15,t.t0=t["catch"](5),console.log(t.t0);case 18:case"end":return t.stop()}},t,this,[[5,15]])}));return function(e){return t.apply(this,arguments)}}()},b5a5:function(t,e,r){"use strict";var i=r("c3b7"),a=r.n(i);a.a},be76:function(t,e,r){"use strict";var i=r("9a8d"),a=r.n(i);a.a},c3b7:function(t,e,r){},c5f6:function(t,e,r){"use strict";var i=r("7726"),a=r("69a8"),s=r("2d95"),n=r("5dbc"),o=r("6a99"),c=r("79e5"),l=r("9093").f,v=r("11e9").f,u=r("86cc").f,d=r("aa77").trim,f="Number",m=i[f],h=m,p=m.prototype,_=s(r("2aeb")(p))==f,g="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():d(e,3);var r,i,a,s=e.charCodeAt(0);if(43===s||45===s){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var n,c=e.slice(2),l=0,v=c.length;l<v;l++)if(n=c.charCodeAt(l),n<48||n>a)return NaN;return parseInt(c,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(_?c(function(){p.valueOf.call(r)}):s(r)!=f)?n(new h(b(e)),r,m):b(e)};for(var w,x=r("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)a(h,w=x[y])&&!a(m,w)&&u(m,w,v(h,w));m.prototype=p,p.constructor=m,r("2aba")(i,f,m)}},ca64:function(t,e,r){},de15:function(t,e,r){"use strict";var i=r("ca64"),a=r.n(i);a.a},e20b:function(t,e,r){"use strict";var i=r("323f"),a=r.n(i);a.a},e22d:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-overview h-100"},[t.movie_details?[r("movie-description",{attrs:{movie_details:t.movie_details}}),r("cast-list",{attrs:{cast:t.cast}}),r("trailer-modal",{attrs:{trailer_id:t.trailer_id}})]:[r("spinner")]],2)},a=[],s=(r("28a5"),r("be94")),n=(r("96cf"),r("1da1")),o=(r("cadf"),r("551c"),r("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.setBackgroundImage,attrs:{"data-test":"movie-overview"}},[r("div",{staticClass:"movie-overview__background-image row"},[r("div",{staticClass:"col-sm-12 col-md-6 col-xl-4 movie-overview-poster-wrap"},[r("img",{staticClass:"movie-overview-poster p-1 h-100 w-100",attrs:{"data-test":"movie-overview__poster",src:t.getPosterPath(t.movie_details.poster_path)}})]),r("div",{staticClass:"col-sm-12 col-md-8 movie-overview__description p-2 d-flex justify-content-center"},[r("heading",{attrs:{release_date:t.movie_details.release_date,title:t.movie_details.title}}),r("div",{staticClass:"row d-flex justify-content-start align-items-center"},[r("user-score",{attrs:{vote_average:t.movie_details.vote_average}}),r("div",{staticClass:"movie-overview__add-to-user-list d-flex justify-content-center align-items-center mr-1 tooltip",style:"border-color: "+t.determineWatchlistFill,on:{click:function(e){t.addMovieToUsersList("watchlist")}}},[r("span",{staticClass:"tooltiptext"},[t._v(t._s(t.isInWatchlist?"Remove movie from your watchlist":"Add movie to your watchlist"))]),r("Bookmark",{staticClass:"../components/svgclass",attrs:{fill:t.determineWatchlistFill}})],1),r("div",{staticClass:"movie-overview__add-to-user-list d-flex justify-content-center align-items-center tooltip",style:"border-color: "+t.determineFavoritesFill,attrs:{"data-test":"movie-overview-favorites-button"},on:{click:function(e){t.addMovieToUsersList("favorites")}}},[r("span",{staticClass:"tooltiptext"},[t._v(t._s(t.isFavorite?"Remove movie from your favorites":"Add movie to your favorites"))]),r("Favorite",{staticClass:"../components/svgclass",attrs:{fill:t.determineFavoritesFill}})],1),r("div",{staticClass:"movie-overview__trailer-btn d-flex justify-content-center align-items-center ml-1 flex-column",attrs:{"data-test":"movie-overview-trailer-btn"},on:{click:t.showTrailer}},[r("div",{staticClass:"font-weight-bold"},[t._v("Play Trailer")]),r("play-video",{staticClass:"movie-overview__play-video-icon"})],1)],1),r("div",{staticClass:"mb-2"},[r("div",{staticClass:"d-flex mt-2 align-items-center"},[r("h3",{staticClass:"font-weight-bold mr-1"},[t._v("Overview")]),r("div",{staticClass:"movie-overview__watched-mark d-flex justify-content-center align-items-center flex-column tooltip",style:"border-color: "+t.determineWatchedFill,on:{click:function(e){t.addMovieToUsersList("watched")}}},[r("span",{staticClass:"tooltiptext"},[t._v(t._s(t.isWatched?"Remove from your watched movies":"Mark as watched"))]),r("check-mark",{staticClass:"../components/svgclass",attrs:{fill:t.determineWatchedFill}})],1)]),r("div",{attrs:{"data-test":"movie-overview-body"}},[t._v(t._s(t.movie_details.overview))])]),r("div",{staticClass:"row"},t._l(t.movie_details.genres,function(e,i){return r("div",{key:i,staticClass:"movie-overview__genres m-1 col-4 col-md-4 p-1",attrs:{"data-test":"movie-overview-genre"}},[t._v(t._s(e.name))])}),0)],1)])])}),c=[],l=r("2e3d"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"font-weight-bolder d-flex align-items-center mb-2"},[r("h1",{staticClass:"movie-overview__title",attrs:{"data-test":"movie-overview-title"}},[t._v(t._s(t.title))]),r("div",{staticClass:"font-weight-regular movie-overview__release-date",attrs:{"data-test":"movie-overview-release-date"}},[t._v("("+t._s(t.sliceDate(t.release_date))+")")])])},u=[],d={props:{release_date:String,title:String},methods:{sliceDate:function(t){return t?t.slice(0,4):"..."}}},f=d,m=(r("e20b"),r("2877")),h=Object(m["a"])(f,v,u,!1,null,null,null);h.options.__file="Heading.vue";var p=h.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 32 32",fill:t.fill}},[r("path",{attrs:{d:"M6 0v32l10-10 10 10v-32z"}})])},g=[],b={props:{fill:String}},w=b,x=(r("de15"),Object(m["a"])(w,_,g,!1,null,null,null));x.options.__file="Bookmark.vue";var y=x.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 32 32",fill:t.fill}},[r("path",{attrs:{d:"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"}})])},j=[],k={props:{fill:String}},O=k,F=(r("5375"),Object(m["a"])(O,C,j,!1,null,null,null));F.options.__file="Favorite.vue";var T=F.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"#fff"}},[r("path",{attrs:{d:"M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"}})])},S=[],P={},I=P,W=(r("fecf"),Object(m["a"])(I,E,S,!1,null,null,null));W.options.__file="PlayVideo.vue";var A=W.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 32 32",fill:t.fill}},[r("title",[t._v("checkmark")]),r("path",{attrs:{d:"M27 4l-15 15-7-7-5 5 12 12 20-20z"}})])},M=[],N={props:{fill:String}},U=N,$=(r("7ae9"),Object(m["a"])(U,R,M,!1,null,null,null));$.options.__file="CheckMark.vue";var L=$.exports,B=(r("c0a0"),r("89a1")),D=r("b488"),z=r("2f62"),V={components:{UserScore:l["a"],Bookmark:y,Favorite:T,PlayVideo:A,Heading:p,CheckMark:L},props:{movie_details:Object},computed:Object(s["a"])({},Object(z["b"])(["isFavorite","isInWatchlist","isWatched"]),{setBackgroundImage:function(){return{"background-image":"linear-gradient(59deg, rgba(25,20,20,0.7) 53%, rgba(25, 20, 20, 0.8) 76%), url(".concat(this.getPosterPath(this.movie_details.backdrop_path),")"),"background-repeat":"no repeat","background-position":"center","background-size":"cover",display:"flex","justify-content":"center"}},determineFavoritesFill:function(){var t=this.isFavorite;return t?"#f70963":"#fff"},determineWatchlistFill:function(){var t=this.isInWatchlist;return t?"#f70963":"#fff"},determineWatchedFill:function(){var t=this.isWatched;return t?"#48AE48":"#fff"}}),methods:Object(s["a"])({},Object(z["c"])(["addToFavorites","removeFromFavorites","addToWatchlist","removeFromWatchlist","addToWatched","removeFromWatched","showTrailer","closeTrailer"]),{getPosterPath:function(t){return Object(B["a"])(t)},addMovieToUsersList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this.movie_details.id,i={movie_id:r,type:e},t.next=4,Object(D["a"])({urlPath:"http://localhost:5000/user/add_to_".concat(e),body:i});case 4:a=t.sent,"watchlist"===e?"added"===a.status?this.addToWatchlist():this.removeFromWatchlist():"favorites"===e?"added"===a.status?this.addToFavorites():this.removeFromFavorites():"added"===a.status?this.addToWatched():this.removeFromWatched();case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},G=V,J=(r("e5f4"),Object(m["a"])(G,o,c,!1,null,null,null));J.options.__file="MovieDescription.vue";var H=J.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"trailer-modal-container d-flex h-100 "+t.checkTrailerState,attrs:{"data-test":"trailer-modal-container"}},[r("div",{staticClass:"trailer-modal-content-wrapper d-flex justify-content-center align-items-center flex-column"},[r("div",{staticClass:"trailer-modal-heading"},[r("div",{staticClass:"trailer-modal-heading-exit",on:{click:t.closeAndStopTrailer}},[r("div",{staticClass:"trailer-modal-heading-exit-line"}),r("div",{staticClass:"trailer-modal-heading-exit-line"})])]),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/"+t.trailer_id+"?rel=0"}})])])])},Y=[],q={props:{trailer_id:String},computed:Object(s["a"])({},Object(z["b"])(["isTrailerShown"]),{checkTrailerState:function(){var t=this.isTrailerShown;return t?(document.querySelector("iframe")&&(document.querySelector("iframe").src="https://www.youtube.com/embed/".concat(this.trailer_id,"?rel=0")),"visible"):"hidden"}}),methods:Object(s["a"])({},Object(z["c"])(["closeTrailer"]),{closeAndStopTrailer:function(){document.querySelector("iframe")&&(document.querySelector("iframe").src=""),this.closeTrailer()}})},K=q,Q=(r("be76"),Object(m["a"])(K,X,Y,!1,null,null,null));Q.options.__file="TrailerModal.vue";var Z=Q.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"2rem 0"}},[r("div",{staticClass:"movie-overview-heading mb-1"},[t._v("Top Billed Cast")]),r("div",{staticClass:"row"},t._l(t.cast,function(t,e){return r("div",{key:e,staticClass:"shadow-sm col-6 col-sm-auto col-md-auto d-flex justify-content-center"},[r("cast-list-item",{attrs:{profile_path:t.profile_path,name:t.name,character:t.character}})],1)}),0)])},et=[],rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-overview-cast-image-wrapper h-100 m-1",attrs:{"data-test":"movie-overview-cast-list-item"}},[r("img",{staticClass:"card-img-top img-fluid movie-overview-cast-image",attrs:{"data-test":"movie-overview-cast-list-item-img",src:t.getPosterPath(t.profile_path)}}),r("div",{staticClass:"card-title font-weight-bolder"},[r("div",{attrs:{"data-test":"movie-overview-cast-list-item-name"}},[t._v(t._s(t.name))]),r("div",{staticClass:"font-weight-normal",attrs:{"data-test":"movie-overview-cast-list-item-char-name"}},[t._v(t._s(t.character))])])])},it=[],at={props:{profile_path:String,name:String,character:String},methods:{getPosterPath:function(t){return Object(B["a"])(t)}}},st=at,nt=(r("44eb"),Object(m["a"])(st,rt,it,!1,null,null,null));nt.options.__file="CastListItem.vue";var ot=nt.exports,ct={components:{CastListItem:ot},props:{cast:Array}},lt=ct,vt=(r("2781"),Object(m["a"])(lt,tt,et,!1,null,null,null));vt.options.__file="CastList.vue";var ut=vt.exports,dt=r("2375"),ft=r("162c"),mt={components:{MovieDescription:H,CastList:ut,TrailerModal:Z,Spinner:dt["a"]},data:function(){return{cast:[],movie_details:{},trailer_id:""}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,r,i,a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.getIdFromUrl(),t.next=3,Object(ft["a"])({urlPath:"https://api.themoviedb.org/3/movie/".concat(e),toApi:!0});case 3:return r=t.sent,this.movie_details=r,t.next=7,Object(ft["a"])({urlPath:"https://api.themoviedb.org/3/movie/".concat(e,"/credits"),toApi:!0});case 7:return i=t.sent,this.cast=i.cast.slice(0,4),a="http://localhost:5000/user/check_if_favorited",s="http://localhost:5000/user/check_if_watchlisted",n="http://localhost:5000/user/check_if_watched",t.next=14,this.getUsersMovieData("favorites",a,this.addToFavorites);case 14:return t.next=16,this.getUsersMovieData("watchlist",s,this.addToWatchlist);case 16:return t.next=18,this.getUsersMovieData("watched",n,this.addToWatched);case 18:return t.next=20,this.getVideoTrailerData(this.movie_details.id);case 20:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.removeFromFavorites(),this.removeFromWatchlist(),this.removeFromWatched()},methods:Object(s["a"])({},Object(z["c"])(["addToFavorites","removeFromFavorites","addToWatchlist","removeFromWatchlist","addToWatched","removeFromWatched"]),{getUsersMovieData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r,i){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a={movie_id:this.movie_details.id,type:e},t.next=3,Object(D["a"])({urlPath:r,body:a});case 3:s=t.sent,s.data.isFavorited&&i();case 5:case"end":return t.stop()}},t,this)}));function e(e,r,i){return t.apply(this,arguments)}return e}(),getVideoTrailerData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/videos"),t.next=3,Object(ft["a"])({urlPath:r,toApi:!0});case 3:i=t.sent,this.trailer_id=i.results[0].key;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getPosterPath:function(t){return Object(B["a"])(t)},getIdFromUrl:function(){var t=window.location.pathname.split("/");return t[t.length-1]}})},ht=mt,pt=(r("6394"),Object(m["a"])(ht,i,a,!1,null,null,null));pt.options.__file="index.vue";e["default"]=pt.exports},e5f4:function(t,e,r){"use strict";var i=r("f02f"),a=r.n(i);a.a},e6bb:function(t,e,r){"use strict";var i=r("0ac9"),a=r.n(i);a.a},f02f:function(t,e,r){},f22a:function(t,e,r){"use strict";var i=r("5c33"),a=r.n(i);a.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},fecf:function(t,e,r){"use strict";var i=r("1db7"),a=r.n(i);a.a}}]);
//# sourceMappingURL=chunk-6c6545ab.42c1ad81.js.map