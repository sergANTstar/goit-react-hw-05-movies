"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[471],{471:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a=r(885),o="SearchBar_moviaList__1M7J0",n="SearchBar_moviaList__item__Gt3gv",c="SearchBar_moviaList__img__IlJOP",s="SearchBar_moviaList__title__GW+L7",i=r(6066),u=(r(5462),r(2791)),m=r(501),_=r(6871),l=r(1933),h={searchForm:"SearchForm_searchForm__NsJpF",searchForm__form:"SearchForm_searchForm__form__-l1KT",searchForm__input:"SearchForm_searchForm__input__i6El6",searchForm__btn:"SearchForm_searchForm__btn__BRG3D"},f=r(184);function d(e){var t=e.moviaSearch,r=e.submit,o=(0,u.useState)(t),n=(0,a.Z)(o,2),c=n[0],s=n[1];return(0,f.jsx)("div",{className:h.searchForm,children:(0,f.jsxs)("form",{className:h.searchForm__form,onSubmit:function(e){e.preventDefault(),""!==c.trim()?r(c):(0,i.Am)("enter the name of the movie",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[(0,f.jsx)("input",{className:h.searchForm__input,type:"text",value:c,autoComplete:"off",onChange:function(e){s(e.currentTarget.value.toLowerCase())},placeholder:"Search Films",autoFocus:!0}),(0,f.jsx)("button",{className:h.searchForm__btn,type:"submit",children:(0,f.jsx)("label",{className:h.searchForm__lable})})]})})}function v(){var e=(0,m.lr)(),t=(0,a.Z)(e,1)[0],r=(0,u.useState)(t.get("query")||""),h=(0,a.Z)(r,2),v=h[0],g=h[1],p=(0,u.useState)([]),F=(0,a.Z)(p,2),b=F[0],S=F[1],j=(0,_.s0)(),x=(0,_.TH)();(0,u.useEffect)((function(){v&&l.UN(v).then((function(e){if(0===e.data.results.length)return(0,i.Am)("Sorry, no movies were found for your request",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});S(e.data.results)}))}),[v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{moviaSearch:v,submit:function(e){j("/movies/?query=".concat(e)),g(e),S([])}}),(0,f.jsx)("div",{children:b&&(0,f.jsx)("ul",{className:o,children:b.map((function(e){return(0,f.jsx)("li",{className:n,children:(0,f.jsxs)(m.OL,{to:"/movies/".concat(e.id),state:x,children:[(0,f.jsx)("img",{src:"".concat((t=e.poster_path,t?"https://image.tmdb.org/t/p/w300".concat(t):"https://i.postimg.cc/G2jSRfZG/images.png")),alt:e.title,className:c}),(0,f.jsx)("h3",{className:s,children:e.title})]})},e.id);var t}))})})]})}},1933:function(e,t,r){r.d(t,{IQ:function(){return u},Jh:function(){return i},UN:function(){return m},YJ:function(){return s},dU:function(){return c}});var a=r(4569),o=r.n(a);o().defaults.baseURL="https://api.themoviedb.org/3";var n="api_key=0069cb276a083aad6acda19b3adb7038",c=function(){return o().get("/trending/movie/day?".concat(n))},s=function(e){return o().get("/movie/".concat(e,"?").concat(n))},i=function(e){return o().get("/movie/".concat(e,"/reviews?").concat(n,"&page=1"))},u=function(e){return o().get("/movie/".concat(e,"/credits?").concat(n))},m=function(e){return o().get("/search/movie?".concat(n,"&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=471.737bf7fd.chunk.js.map