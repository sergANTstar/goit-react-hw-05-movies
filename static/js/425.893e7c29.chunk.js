"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[425],{425:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(885),a={searchBar:"SearchBar_searchBar__cJ8dU",searchBar__form:"SearchBar_searchBar__form__QRN8x",searchBar__input:"SearchBar_searchBar__input__5JlP2",searchBar__btn:"SearchBar_searchBar__btn__G0pOJ"},c=t(66),o=(t(462),t(791)),s=t(504),i=t(871),u=t(933),h=t(184);function l(){var e=(0,o.useState)(),r=(0,n.Z)(e,2),t=r[0],l=r[1],_=(0,o.useState)([]),f=(0,n.Z)(_,2),p=f[0],d=f[1],m=(0,i.s0)(),g=(0,i.TH)();(0,o.useEffect)((function(){""!==t.trim()?u.UN(t).then((function(e){if(0===e.results.length)return(0,c.Am)("Sorry, no movies were found for your request",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});d(e.results)})):(0,c.Am)("enter the name of the movie",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[t]);return(0,h.jsxs)("div",{className:a.searchBar,children:[(0,h.jsxs)("form",{className:a.searchBar__form,onSubmit:function(e){m("/movies/?query=".concat(e)),l(e),d([])},children:[(0,h.jsx)("input",{className:a.searchBar__input,type:"text",value:t,autoComplete:"off",onChange:function(e){l(e.currentTarget.value.toLowerCase())},placeholder:"Search Films",autoFocus:!0}),(0,h.jsx)("button",{className:a.searchBar__btn,type:"submit",children:(0,h.jsx)("label",{className:a.searchBar__lable})})]}),(0,h.jsx)(c.Ix,{}),p&&(0,h.jsx)("ul",{children:p.map((function(e){return(0,h.jsx)(s.OL,{to:"/movies/".concat(e.id),state:g,children:(0,h.jsx)("p",{children:e.title})},e.id)}))})]})}},933:function(e,r,t){t.d(r,{IQ:function(){return l},Jh:function(){return _},UN:function(){return h},YJ:function(){return p},dU:function(){return f}});var n=t(861),a=t(757),c=t.n(a),o="https://api.themoviedb.org/3",s="0069cb276a083aad6acda19b3adb7038";function i(){return u.apply(this,arguments)}function u(){return u=(0,n.Z)(c().mark((function e(){var r,t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(r,t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function h(e){return i("".concat(o,"/search/movie?&query=").concat(e,"&api_key=").concat(s,"&language=en-US&page=1&include_adult=false"))}function l(e){return i("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function _(e){return i("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}function f(){return i("".concat(o,"/trending/movie/day?api_key=").concat(s))}function p(e){return i("".concat(o,"/movie/").concat(e,"?api_key=").concat(s))}}}]);
//# sourceMappingURL=425.893e7c29.chunk.js.map