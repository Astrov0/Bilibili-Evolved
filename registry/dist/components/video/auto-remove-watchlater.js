!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/auto-remove-watchlater"]=t():e["video/auto-remove-watchlater"]=t()}(globalThis,(()=>(()=>{var e,t,o={955:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=955,e.exports=t},219:e=>{"use strict";e.exports="在稍后再看页面播放结束时, 自动将当前视频移出稍后再看.\n注意:\n- 一定要播放结束, 快结束时手动切走不算\n- b 站的稍后再看列表不会实时刷新\n"}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,n),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,n.d(a,i),a},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";n.d(a,{component:()=>c});const e=coreApis.componentApis.define,t=coreApis.observer,o=coreApis.utils.urls,r=coreApis.componentApis.video.playerAgent,i=coreApis.componentApis.video.watchlater,c=(0,e.defineComponentMetadata)({name:"autoRemoveWatchlater",displayName:"自动移出稍后再看",tags:[componentsTags.video],urlInclude:[...o.watchlaterUrls,...o.videoUrls],entry:()=>{(0,t.videoChange)((async e=>{let{aid:t}=e;(await r.playerAgent.query.video.element()).addEventListener("ended",(async()=>{(await(0,i.getWatchlaterList)()).includes(parseInt(t))&&await(0,i.toggleWatchlater)(t)}))}))},commitHash:"fab3f2b804e9a155b70e83a9340ce1d4c4bf19a3",coreVersion:"2.9.3",description:(()=>{const e=n(955);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,219,17)).then((e=>e.default))}})()})})(),a=a.component})()));