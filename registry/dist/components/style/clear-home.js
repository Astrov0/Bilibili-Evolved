!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports["style/clear-home"]=a():e["style/clear-home"]=a()}(globalThis,(()=>(()=>{"use strict";var e={d:(a,l)=>{for(var t in l)e.o(l,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:l[t]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)},a={};e.d(a,{component:()=>c});const l=coreApis.componentApis.define,t=coreApis.settings,d=[];let s=!1,i=!0;const o=(0,l.defineOptionsMetadata)({广告:{displayName:"广告",defaultValue:!0},番剧:{displayName:"番剧",defaultValue:!0},电影:{displayName:"电影",defaultValue:!0},国创:{displayName:"国创",defaultValue:!0},电视剧:{displayName:"电视剧",defaultValue:!0},综艺:{displayName:"综艺",defaultValue:!0},纪录片:{displayName:"纪录片",defaultValue:!0},动画:{displayName:"动画",defaultValue:!0},游戏:{displayName:"游戏",defaultValue:!0},鬼畜:{displayName:"鬼畜",defaultValue:!0},音乐:{displayName:"音乐",defaultValue:!0},舞蹈:{displayName:"舞蹈",defaultValue:!0},影视:{displayName:"影视",defaultValue:!0},娱乐:{displayName:"娱乐",defaultValue:!0},知识:{displayName:"知识",defaultValue:!0},科技:{displayName:"科技",defaultValue:!0},资讯:{displayName:"资讯",defaultValue:!0},美食:{displayName:"美食",defaultValue:!0},生活:{displayName:"生活",defaultValue:!0},汽车:{displayName:"汽车",defaultValue:!0},时尚:{displayName:"时尚",defaultValue:!0},运动:{displayName:"运动",defaultValue:!0},动物圈:{displayName:"动物圈",defaultValue:!0},VLOG:{displayName:"VLOG",defaultValue:!0},搞笑:{displayName:"搞笑",defaultValue:!0},单机游戏:{displayName:"单机游戏",defaultValue:!0},虚拟UP主:{displayName:"虚拟UP主",defaultValue:!0},公益:{displayName:"公益",defaultValue:!0},公开课:{displayName:"公开课",defaultValue:!0},专栏:{displayName:"专栏",defaultValue:!0},直播:{displayName:"直播",defaultValue:!0},赛事:{displayName:"赛事",defaultValue:!0},活动:{displayName:"活动",defaultValue:!0},课堂:{displayName:"课堂",defaultValue:!0},社区中心:{displayName:"社区中心",defaultValue:!0},新歌热榜:{displayName:"新歌热榜",defaultValue:!0},漫画:{displayName:"漫画",defaultValue:!0}});function u(e){for(const a of e)if(a.classList)if(a.classList.contains("floor-single-card")){const e=a.querySelector(".badge").textContent;e&&d.includes(e)&&a.remove()}else a.classList.contains("bili-live-card")?s&&a.remove():(a.classList.contains("bili-video-card")||a.classList.contains("feed-card"))&&i&&(a.querySelector(".bili-video-card__info--ad")||a.querySelector(".bili-video-card__info--creative-ad"))&&a.remove()}function n(e){const a=[];for(const l of e){const e=l.target;if(!(e.classList&&e.classList.contains("carousel-transform")||"SPAN"===e.tagName)&&l.addedNodes.length>0)for(const e of l.addedNodes){const l=e;"#text"===l.nodeName||l.classList&&l.classList.contains("bili-watch-later")||a.push(l)}}a.length>0&&u(a)}const c=(0,l.defineComponentMetadata)({name:"clear-home",author:{name:"RieN7",link:"https://github.com/rien7"},tags:[componentsTags.style],displayName:"首页净化",description:"删除首页特定类型的卡片",entry:async e=>{let{metadata:a,settings:l}=e;const o=document.querySelector("main > .feed2 > .recommended-container_floor-aside > .container");if(!o)return;new MutationObserver(n).observe(o,{childList:!0}),Object.keys(l.options).forEach((e=>{(0,t.addComponentListener)(`${a.name}.${e}`,(a=>{if(a){if("广告"===e)return void(i=!0);d.push(e),"直播"===e&&(s=!0)}}),!0)}));u(o.children)},options:o,commitHash:"fad0f317dbd97b76322cf8118c067015c0b9d992",coreVersion:"2.9.3"});return a=a.component})()));