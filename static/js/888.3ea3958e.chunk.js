"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{450:function(e,t,n){n.d(t,{Z:function(){return s}});var a="BackButton_back__btn__+0odO",i="BackButton_back__btn__text__oCPUr",c=n(184);function s(e){var t=e.onClick,n=e.nameBtn;return(0,c.jsx)("button",{type:"button",onClick:t,className:a,children:(0,c.jsx)("span",{className:i,children:n})})}},888:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(885),i="MovieDetails_movieDetails__EqwEX",c="MovieDetails_movieDetails__block__ef0U0",s="MovieDetails_movieCard__LWJIF",r="MovieDetails_movieCard__block__BV6fs",o="MovieDetails_movieCard__img__hEH-T",l="MovieDetails_movieCard__list__0hG6a",_="MovieDetails_movieCard__header__wQnl+",d="MovieDetails_movieCard__text__eIxKN",u="MovieDetails_movieCard__additionalBlock__HaKep",v="MovieDetails_movieCard__additional__r5Cf8",m="MovieDetails_movieCard__additionalText__bj+s9",h=n(871),f=n(450),p=n(933),x=n(501),j=n(791),g=n(184);function k(){var e=(0,h.UO)().movieId,t=(0,j.useState)(null),n=(0,a.Z)(t,2),k=n[0],N=n[1],b=(0,h.s0)(),C=(0,h.TH)();(0,j.useEffect)((function(){p.YJ(e).then((function(e){return N(e)}))}),[e]);var w;return(0,g.jsx)("div",{className:i,children:k&&(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)(f.Z,{onClick:function(){C.state?b(C.state.pathname+C.state.search):b("/")},nameBtn:"go BACK",width:"100px"},k.id),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:s,children:[(0,g.jsxs)("div",{className:r,children:[(0,g.jsx)("img",{className:o,src:"".concat((w=k.poster_path,w?"https://image.tmdb.org/t/p/w300".concat(w):"https://i.postimg.cc/G2jSRfZG/images.png")),alt:k.title},k.id),(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("h2",{className:_,children:[k.title," (",k.release_date.slice(0,4),")"]}),(0,g.jsxs)("p",{className:d,children:["Use Score: ",Math.round(k.vote_average/10*100),"%"]}),(0,g.jsx)("h3",{className:_,children:"Overwiew"}),(0,g.jsx)("p",{className:d,children:k.overview}),(0,g.jsx)("h3",{className:_,children:"Genres"}),(0,g.jsx)("p",{className:d,children:"".concat(function(e){if(e)return e.map((function(e){return e.name})).join(", ")}(k.genres))})]})]}),(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)("h2",{children:" Additional information "}),(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)(x.OL,{to:"/movies/".concat(k.id,"/cast"),state:C.state,children:(0,g.jsx)("p",{className:m,children:"Cast"})}),(0,g.jsx)(x.OL,{to:"/movies/".concat(k.id,"/reviews"),state:C.state,children:(0,g.jsx)("p",{className:m,children:"Reviews"})})]})]})]}),(0,g.jsx)(h.j3,{})]})]})})}},933:function(e,t,n){n.d(t,{IQ:function(){return d},Jh:function(){return u},UN:function(){return _},YJ:function(){return m},dU:function(){return v}});var a=n(861),i=n(757),c=n.n(i),s="https://api.themoviedb.org/3",r="0069cb276a083aad6acda19b3adb7038";function o(){return l.apply(this,arguments)}function l(){return l=(0,a.Z)(c().mark((function e(){var t,n,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,n);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function _(e){return o("".concat(s,"/search/movie?&query=").concat(e,"&api_key=").concat(r,"&language=en-US&page=1&include_adult=false"))}function d(e){return o("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US"))}function u(e){return o("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}function v(){return o("".concat(s,"/trending/movie/day?api_key=").concat(r))}function m(e){return o("".concat(s,"/movie/").concat(e,"?api_key=").concat(r))}}}]);
//# sourceMappingURL=888.3ea3958e.chunk.js.map