!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-shadow"]=t():e["style/player-shadow"]=t()}(globalThis,(()=>(()=>{var e,t,o={190:(e,t,o)=>{var r=o(218)((function(e){return e[1]}));r.push([e.id,"#bilibili-player,\n#bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-30) !important;\n}\nbody.dark #bilibili-player,\nbody.dark #bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-20) !important;\n}\n\n#bilibili-player-placeholder,\n.bpx-player-container {\n  box-shadow: none !important;\n}",""]),e.exports=r},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(n[a]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&n[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},66:(e,t,o)=>{var r=o(190);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var p=2&r&&o;"object"==typeof p&&!~e.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(i,a),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>o});const e=coreApis.componentApis.define,t=coreApis.utils.urls,o=(0,e.defineComponentMetadata)({name:"playerShadow",displayName:"播放器投影",entry:none,instantStyles:[{name:"playerShadow",style:()=>Promise.resolve().then(n.t.bind(n,66,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"为播放器添加主题色投影."},urlInclude:t.allVideoUrls,commitHash:"fad0f317dbd97b76322cf8118c067015c0b9d992",coreVersion:"2.9.3"})})(),i=i.component})()));