"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{450:function(n,t,e){e.d(t,{Z:function(){return o}});var c="BackButton_back__btn__+0odO",r="BackButton_back__btn__text__oCPUr",a=e(184);function o(n){var t=n.onClick,e=n.nameBtn;return(0,a.jsx)("button",{type:"button",onClick:t,className:c,children:(0,a.jsx)("span",{className:r,children:e})})}},247:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var c=e(885),r=e(791),a=e(871),o=e(933),i=e(450),u=e(184);function s(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],s=t[1],f=a.UO.movieId;(0,r.useEffect)((function(){o.IQ(f).then((function(n){return s(n.cast)}))}),[f]);return(0,u.jsx)(u.Fragment,{children:e&&(0,u.jsxs)("div",{children:[e.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"".concat((t=n.profile_path,null===t?"https://i.postimg.cc/G2jSRfZG/images.png":"https://image.tmdb.org/t/p/w300".concat(t))),alt:n.name,width:"240"}),(0,u.jsx)("p",{children:n.name}),(0,u.jsxs)("p",{children:[" ","Character:",(0,u.jsxs)("p",{children:[" ",n.character," "]})," "]})]},n.id);var t})),(0,u.jsx)(i.Z,{onClick:function(){window.scrollTo({top:100,behavior:"smooth"})},nameBtn:"go UP"})]})})}},933:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return d},UN:function(){return f},YJ:function(){return h},dU:function(){return l}});var c=e(861),r=e(757),a=e.n(r),o="https://api.themoviedb.org/3",i="0069cb276a083aad6acda19b3adb7038";function u(){return s.apply(this,arguments)}function s(){return s=(0,c.Z)(a().mark((function n(){var t,e,c,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(t,e);case 4:if(!(c=n.sent).ok){n.next=11;break}return n.next=8,c.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(n){return u("".concat(o,"/search/movie?&query=").concat(n,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"))}function p(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function d(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function l(){return u("".concat(o,"/trending/movie/day?api_key=").concat(i))}function h(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(i))}}}]);
//# sourceMappingURL=247.538e6239.chunk.js.map