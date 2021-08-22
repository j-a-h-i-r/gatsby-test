/*! For license information please see 1943edf48358ec375759a10206b57d36c98a5e6d-07b3907e09a2a81c119e.js.LICENSE.txt */
(self.webpackChunkblog=self.webpackChunkblog||[]).push([[178],{1684:function(t,n,e){"use strict";e.d(n,{Z:function(){return Qt}});var r=e(7294),a=e(5444),i=e(8014);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){c(t,n,e[n])}))}return t}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){},m={},d={},p={mark:u,measure:u};try{"undefined"!=typeof window&&(m=window),"undefined"!=typeof document&&(d=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(p=performance)}catch(Jt){}var h=(m.navigator||{}).userAgent,g=void 0===h?"":h,y=m,b=d,v=p,w=(y.document,!!b.documentElement&&!!b.head&&"function"==typeof b.addEventListener&&"function"==typeof b.createElement),k=(~g.indexOf("MSIE")||g.indexOf("Trident/"),"svg-inline--fa"),x="data-fa-i2svg",O=(function(){try{}catch(Jt){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),_=O.concat([11,12,13,14,15,16,17,18,19,20]),E={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",E.GROUP,E.SWAP_OPACITY,E.PRIMARY,E.SECONDARY].concat(O.map((function(t){return"".concat(t,"x")}))).concat(_.map((function(t){return"w-".concat(t)}))),y.FontAwesomeConfig||{});if(b&&"function"==typeof b.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var n=f(t,2),e=n[0],r=n[1],a=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var n=b.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}(e));null!=a&&(j[r]=a)}))}var A=l({},{familyPrefix:"fa",replacementClass:k,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},j);A.autoReplaceSvg||(A.observeMutations=!1);var M=l({},A);y.FontAwesomeConfig=M;var z=y||{};z.___FONT_AWESOME___||(z.___FONT_AWESOME___={}),z.___FONT_AWESOME___.styles||(z.___FONT_AWESOME___.styles={}),z.___FONT_AWESOME___.hooks||(z.___FONT_AWESOME___.hooks={}),z.___FONT_AWESOME___.shims||(z.___FONT_AWESOME___.shims=[]);var P=z.___FONT_AWESOME___,S=[];w&&((b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState)||b.addEventListener("DOMContentLoaded",(function t(){b.removeEventListener("DOMContentLoaded",t),1,S.map((function(t){return t()}))})));var C,I="pending",N="settled",T="fulfilled",L="rejected",R=function(){},W=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,D="undefined"==typeof setImmediate?setTimeout:setImmediate,Y=[];function F(){for(var t=0;t<Y.length;t++)Y[t][0](Y[t][1]);Y=[],C=!1}function X(t,n){Y.push([t,n]),C||(C=!0,D(F,0))}function B(t){var n=t.owner,e=n._state,r=n._data,a=t[e],i=t.then;if("function"==typeof a){e=T;try{r=a(r)}catch(Jt){G(i,Jt)}}U(i,r)||(e===T&&H(i,r),e===L&&G(i,r))}function U(t,n){var e;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===o(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(r){e||(e=!0,n===r?q(t,r):H(t,r))}),(function(n){e||(e=!0,G(t,n))})),!0}}catch(Jt){return e||G(t,Jt),!0}return!1}function H(t,n){t!==n&&U(t,n)||q(t,n)}function q(t,n){t._state===I&&(t._state=N,t._data=n,X(Z,t))}function G(t,n){t._state===I&&(t._state=N,t._data=n,X(K,t))}function V(t){t._then=t._then.forEach(B)}function Z(t){t._state=T,V(t)}function K(t){t._state=L,V(t),!t._handled&&W&&e.g.process.emit("unhandledRejection",t._data,t)}function Q(t){e.g.process.emit("rejectionHandled",t)}function J(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof J==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,n){function e(t){G(n,t)}try{t((function(t){H(n,t)}),e)}catch(Jt){e(Jt)}}(t,this)}J.prototype={constructor:J,_state:I,_then:null,_data:void 0,_handled:!1,then:function(t,n){var e={owner:this,then:new this.constructor(R),fulfilled:t,rejected:n};return!n&&!t||this._handled||(this._handled=!0,this._state===L&&W&&X(Q,this)),this._state===T||this._state===L?X(B,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}},J.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new J((function(n,e){var r=[],a=0;function i(t){return a++,function(e){r[t]=e,--a||n(r)}}for(var o,s=0;s<t.length;s++)(o=t[s])&&"function"==typeof o.then?o.then(i(s),e):r[s]=o;a||n(r)}))},J.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new J((function(n,e){for(var r,a=0;a<t.length;a++)(r=t[a])&&"function"==typeof r.then?r.then(n,e):n(r)}))},J.resolve=function(t){return t&&"object"===o(t)&&t.constructor===J?t:new J((function(n){n(t)}))},J.reject=function(t){return new J((function(n,e){e(t)}))};var $={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tt(t){if(t&&w){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=b.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return b.head.insertBefore(n,r),t}}function nt(){for(var t=12,n="";t-- >0;)n+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return n}function et(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rt(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,": ").concat(t[e],";")}),"")}function at(t){return t.size!==$.size||t.x!==$.x||t.y!==$.y||t.rotate!==$.rotate||t.flipX||t.flipY}function it(t){var n=t.transform,e=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var ot={x:0,y:0,width:"100%",height:"100%"};function st(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function ct(t){var n=t.icons,e=n.main,r=n.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,c=t.title,f=t.maskId,u=t.titleId,m=t.extra,d=t.watchable,p=void 0!==d&&d,h=r.found?r:e,g=h.width,y=h.height,b="fak"===a,v=b?"":"fa-w-".concat(Math.ceil(g/y*16)),w=[M.replacementClass,i?"".concat(M.familyPrefix,"-").concat(i):"",v].filter((function(t){return-1===m.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(m.classes).join(" "),k={children:[],attributes:l({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},O=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};p&&(k.attributes[x]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||nt())},children:[c]});var _=l({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:o,symbol:s,styles:l({},O,m.styles)}),E=r.found&&e.found?function(t){var n,e=t.children,r=t.attributes,a=t.main,i=t.mask,o=t.maskId,s=t.transform,c=a.width,f=a.icon,u=i.width,m=i.icon,d=it({transform:s,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:l({},ot,{fill:"white"})},h=f.children?{children:f.children.map(st)}:{},g={tag:"g",attributes:l({},d.inner),children:[st(l({tag:f.tag,attributes:l({},f.attributes,d.path)},h))]},y={tag:"g",attributes:l({},d.outer),children:[g]},b="mask-".concat(o||nt()),v="clip-".concat(o||nt()),w={tag:"mask",attributes:l({},ot,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(n=m,"g"===n.tag?n.children:[n])},w]};return e.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},ot)}),{children:e,attributes:r}}(_):function(t){var n=t.children,e=t.attributes,r=t.main,a=t.transform,i=rt(t.styles);if(i.length>0&&(e.style=i),at(a)){var o=it({transform:a,containerWidth:r.width,iconWidth:r.width});n.push({tag:"g",attributes:l({},o.outer),children:[{tag:"g",attributes:l({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:l({},r.icon.attributes,o.path)}]}]})}else n.push(r.icon);return{children:n,attributes:e}}(_),j=E.children,A=E.attributes;return _.children=j,_.attributes=A,s?function(t){var n=t.prefix,e=t.iconName,r=t.children,a=t.attributes,i=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},a,{id:!0===i?"".concat(n,"-").concat(M.familyPrefix,"-").concat(e):i}),children:r}]}]}(_):function(t){var n=t.children,e=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(at(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=rt(l({},i,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}(_)}var lt=function(){},ft=(M.measurePerformance&&v&&v.mark&&v.measure,function(t,n,e,r){var a,i,o,s=Object.keys(t),c=s.length,l=void 0!==r?function(t,n){return function(e,r,a,i){return t.call(n,e,r,a,i)}}(n,r):n;for(void 0===e?(a=1,o=t[s[0]]):(a=0,o=e);a<c;a++)o=l(o,t[i=s[a]],i,t);return o});function ut(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(n).reduce((function(t,e){var r=n[e];return!!r.icon?t[r.iconName]=r.icon:t[e]=r,t}),{});"function"!=typeof P.hooks.addPack||a?P.styles[t]=l({},P.styles[t]||{},i):P.hooks.addPack(t,i),"fas"===t&&ut("fa",n)}var mt=P.styles,dt=P.shims,pt=function(){var t=function(t){return ft(mt,(function(n,e,r){return n[r]=ft(e,t,{}),n}),{})};t((function(t,n,e){return n[3]&&(t[n[3]]=e),t})),t((function(t,n,e){var r=n[2];return t[e]=e,r.forEach((function(n){t[n]=e})),t}));var n="far"in mt;ft(dt,(function(t,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||n||(a="fas"),t[r]={prefix:a,iconName:i},t}),{})};pt();P.styles;function ht(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}function gt(t){var n=t.tag,e=t.attributes,r=void 0===e?{}:e,a=t.children,i=void 0===a?[]:a;return"string"==typeof t?et(t):"<".concat(n," ").concat(function(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,'="').concat(et(t[e]),'" ')}),"").trim()}(r),">").concat(i.map(gt).join(""),"</").concat(n,">")}var yt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,n){var e=n.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return t.flipX=!0,t;if(r&&"v"===a)return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(r){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a}return t}),n):n};function bt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}bt.prototype=Object.create(Error.prototype),bt.prototype.constructor=bt;var vt={fill:"currentColor"},wt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},kt={tag:"path",attributes:l({},vt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},xt=l({},wt,{attributeName:"opacity"});l({},vt,{cx:"256",cy:"364",r:"28"}),l({},wt,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},xt,{values:"1;0;1;1;0;1;"}),l({},vt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},xt,{values:"1;0;0;0;0;1;"}),l({},vt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},xt,{values:"0;0;1;1;0;0;"}),P.styles;function Ot(t){var n=t[0],e=t[1],r=f(t.slice(4),1)[0];return{found:!0,width:n,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(M.familyPrefix,"-").concat(E.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.familyPrefix,"-").concat(E.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(M.familyPrefix,"-").concat(E.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}P.styles;function _t(){var t="fa",n=k,e=M.familyPrefix,r=M.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==t||r!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return a}function Et(){M.autoAddCss&&!Pt&&(tt(_t()),Pt=!0)}function jt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return gt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(w){var n=b.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function At(t){var n=t.prefix,e=void 0===n?"fa":n,r=t.iconName;if(r)return ht(zt.definitions,e,r)||ht(P.styles,e,r)}var Mt,zt=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,e,r;return n=t,(e=[{key:"add",value:function(){for(var t=this,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(n){t.definitions[n]=l({},t.definitions[n]||{},a[n]),ut(n,a[n]),pt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var e=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(e).map((function(n){var r=e[n],a=r.prefix,i=r.iconName,o=r.icon;t[a]||(t[a]={}),t[a][i]=o})),t}}])&&s(n.prototype,e),r&&s(n,r),t}()),Pt=!1,St={transform:function(t){return yt(t)}},Ct=(Mt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.transform,r=void 0===e?$:e,a=n.symbol,i=void 0!==a&&a,o=n.mask,s=void 0===o?null:o,c=n.maskId,f=void 0===c?null:c,u=n.title,m=void 0===u?null:u,d=n.titleId,p=void 0===d?null:d,h=n.classes,g=void 0===h?[]:h,y=n.attributes,b=void 0===y?{}:y,v=n.styles,w=void 0===v?{}:v;if(t){var k=t.prefix,x=t.iconName,O=t.icon;return jt(l({type:"icon"},t),(function(){return Et(),M.autoA11y&&(m?b["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(p||nt()):(b["aria-hidden"]="true",b.focusable="false")),ct({icons:{main:Ot(O),mask:s?Ot(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:l({},$,r),symbol:i,title:m,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(t||{}).icon?t:At(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:At(r||{})),Mt(e,l({},n,{mask:r}))}),It=e(5697),Nt=e.n(It);function Tt(t){return(Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Lt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Rt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Wt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Rt(Object(e),!0).forEach((function(n){Lt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Rt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Dt(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function Yt(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Ft(t){return n=t,(n-=0)==n?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,n){return n?n.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var n}function Xt(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,n){var e,r=n.indexOf(":"),a=Ft(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:t[a]=i,t}),{})}var Bt=!1;try{Bt=!0}catch(Jt){}function Ut(t){return t&&"object"===Tt(t)&&t.prefix&&t.iconName&&t.icon?t:St.icon?St.icon(t):null===t?null:t&&"object"===Tt(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function Ht(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Lt({},t,n):{}}function qt(t){var n=t.forwardedRef,e=Dt(t,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,s=e.title,c=e.titleId,l=Ut(r),f=Ht("classes",[].concat(Yt(function(t){var n,e=t.spin,r=t.pulse,a=t.fixedWidth,i=t.inverse,o=t.border,s=t.listItem,c=t.flip,l=t.size,f=t.rotation,u=t.pull,m=(Lt(n={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),Lt(n,"fa-rotate-".concat(f),null!=f&&0!==f),Lt(n,"fa-pull-".concat(u),null!=u),Lt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(m).map((function(t){return m[t]?t:null})).filter((function(t){return t}))}(e)),Yt(o.split(" ")))),u=Ht("transform","string"==typeof e.transform?St.transform(e.transform):e.transform),m=Ht("mask",Ut(a)),d=Ct(l,Wt({},f,{},u,{},m,{symbol:i,title:s,titleId:c}));if(!d)return function(){var t;!Bt&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",l),null;var p=d.abstract,h={ref:n};return Object.keys(e).forEach((function(t){qt.defaultProps.hasOwnProperty(t)||(h[t]=e[t])})),Gt(p[0],h)}qt.displayName="FontAwesomeIcon",qt.propTypes={border:Nt().bool,className:Nt().string,mask:Nt().oneOfType([Nt().object,Nt().array,Nt().string]),fixedWidth:Nt().bool,inverse:Nt().bool,flip:Nt().oneOf(["horizontal","vertical","both"]),icon:Nt().oneOfType([Nt().object,Nt().array,Nt().string]),listItem:Nt().bool,pull:Nt().oneOf(["right","left"]),pulse:Nt().bool,rotation:Nt().oneOf([0,90,180,270]),size:Nt().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Nt().bool,symbol:Nt().oneOfType([Nt().bool,Nt().string]),title:Nt().string,transform:Nt().oneOfType([Nt().string,Nt().object]),swapOpacity:Nt().bool},qt.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Gt=function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return t(n,e)})),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.attrs.className=r,delete e.attributes.class;break;case"style":t.attrs.style=Xt(r);break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?t.attrs[n.toLowerCase()]=r:t.attrs[Ft(n)]=r}return t}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=Dt(r,["style"]);return i.attrs.style=Wt({},i.attrs.style,{},s),n.apply(void 0,[e.tag,Wt({},i.attrs,{},c)].concat(Yt(a)))}.bind(null,r.createElement),Vt={border:"none",background:"none",cursor:"pointer"};function Zt(){var t=(0,r.useState)("light"),n=t[0],e=t[1];function a(t){var n="light"===t?"dark":"light";document.documentElement.classList.remove(n),document.documentElement.classList.add(t)}return(0,r.useEffect)((function(){var t=localStorage.getItem("theme")||"light";a(t),e(t)}),[]),r.createElement("button",{type:"button",style:Vt,onClick:function(){var t="light"===n?"dark":"light";localStorage.setItem("theme",t),a(t),e(t)}},"light"===n?r.createElement(qt,{icon:i.DBF}):r.createElement(qt,{icon:i.enB,color:"rgb(252,211,77)"}))}var Kt={display:"flex",justifyContent:"space-between",alignItems:"flex-start"},Qt=function(t){var n,e=t.location,i=t.title,o=t.children,s="/"===e.pathname;return n=s?r.createElement("div",{style:Kt},r.createElement("h1",{className:"main-heading"},r.createElement(a.Link,{to:"/"},i)),r.createElement(Zt,null)):r.createElement("div",{style:Kt},r.createElement(a.Link,{className:"header-link-home",to:"/"},i),r.createElement(Zt,null)),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},n),r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},6179:function(t,n,e){"use strict";var r=e(7294),a=e(5414),i=e(5444),o=function(t){var n,e,o,s=t.description,c=t.lang,l=t.meta,f=t.title,u=(0,i.useStaticQuery)("2841359383").site,m=s||u.siteMetadata.description,d=null===(n=u.siteMetadata)||void 0===n?void 0:n.title;return r.createElement(a.q,{htmlAttributes:{lang:c},title:f,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:m},{property:"og:title",content:f},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(e=u.siteMetadata)||void 0===e||null===(o=e.social)||void 0===o?void 0:o.twitter)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:m}].concat(l)})};o.defaultProps={lang:"en",meta:[],description:""},n.Z=o}}]);
//# sourceMappingURL=1943edf48358ec375759a10206b57d36c98a5e6d-07b3907e09a2a81c119e.js.map