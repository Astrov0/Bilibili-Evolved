!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/simplify/comments"]=t():n["style/simplify/comments"]=t()}(globalThis,(()=>(()=>{var n,t,e={127:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,".bili-comment .reply-item .sub-user-info,\n.bili-comment .reply-item .sub-user-name {\n  line-height: 1.5 !important;\n}\n.bili-comment .reply-item .sub-user-info {\n  margin-bottom: 4px !important;\n  max-height: 19.5px !important;\n}\n.bili-comment .reply-item .note-content {\n  flex-basis: 100% !important;\n  margin-bottom: 4px !important;\n}\n.bili-comment .reply-item .image-exhibition {\n  flex-basis: 100% !important;\n  margin-bottom: 8px !important;\n}\n.bili-comment .reply-item .reply-operation-warp,\n.bili-comment .reply-item .sub-reply-operation-warp {\n  right: -5px !important;\n}\nbody.simplifyComments-switch-userLevel .bili-comment .reply-item .user-level,\nbody.simplifyComments-switch-userLevel .bili-comment .reply-item .sub-user-level {\n  display: none !important;\n}\nbody.simplifyComments-switch-userPendent .bili-comment .reply-item .bili-avatar-pendent-dom {\n  display: none !important;\n}\nbody.simplifyComments-switch-decorateAndTime .bili-comment .reply-item .reply-decorate {\n  display: none !important;\n}\nbody.simplifyComments-switch-decorateAndTime .bili-comment .reply-item .reply-time,\nbody.simplifyComments-switch-decorateAndTime .bili-comment .reply-item .sub-reply-time {\n  position: absolute !important;\n  top: 0 !important;\n  right: 0 !important;\n  margin-right: 0 !important;\n  line-height: 1.5 !important;\n}\nbody.simplifyComments-switch-decorateAndTime .bili-comment .reply-item .sub-reply-time {\n  top: 8px !important;\n}\nbody.simplifyComments-switch-fansMedal .bili-comment .reply-item .fan-badge {\n  display: none !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .root-reply:not(.reply-content-container) {\n  padding: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  flex-wrap: wrap !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .reply-content-container {\n  display: block !important;\n  flex-basis: 100% !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .root-reply,\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .reply-info,\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .sub-reply-info {\n  position: static !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .reply-info,\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .sub-reply-info {\n  display: inline-flex !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .reply-tag-list {\n  display: inline-flex !important;\n  margin: 2px 0 0 18px !important;\n}\nbody.simplifyComments-switch-subReplyNewLine .bili-comment .reply-item .reply-tag-list .reply-tag-item {\n  padding: 4px 6px !important;\n}\nbody.simplifyComments-switch-eventBanner .bili-comment .reply-notice {\n  display: none !important;\n}\nbody.simplifyComments-switch-replyEditor .bili-comment .reply-box-send .send-text {\n  font-size: 14px !important;\n}\nbody.simplifyComments-switch-replyEditor .bili-comment .reply-box-textarea {\n  line-height: normal !important;\n}",""]),n.exports=i},259:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-rich-text) #contents img,\n:host(bili-rich-text) #contents a i {\n  max-width: 1.4em;\n  max-height: 1.4em;\n}",""]),n.exports=i},915:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comment-renderer) bili-comment-user-sailing-card {\n  display: none;\n}",""]),n.exports=i},232:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comments-header-renderer) bili-comments-notice {\n  display: none;\n}",""]),n.exports=i},859:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comment-user-info) bili-comment-user-medal {\n  display: none;\n}",""]),n.exports=i},100:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comment-box) #pub button {\n  font-size: 14px;\n}\n\n:host(bili-checkbox) #label {\n  font-size: 15px;\n}\n\n:host(bili-comment-textarea) #input {\n  font-size: 13px;\n}\n:host(bili-comment-textarea) #input,\n:host(bili-comment-textarea) #input::placeholder {\n  line-height: normal;\n}",""]),n.exports=i},303:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comment-reply-renderer) bili-comment-user-info {\n  display: block;\n}",""]),n.exports=i},932:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-comment-user-info) #user-level {\n  display: none;\n}",""]),n.exports=i},515:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,":host(bili-rich-text) #contents img,\n:host(bili-rich-text) #contents a i {\n  max-width: 1.4em;\n  max-height: 1.4em;\n}\n\n@container style(--simplifyComments-switch-replyEditor: true) {\n  :host(bili-comment-box) #pub button {\n    font-size: 14px;\n  }\n\n  :host(bili-checkbox) #label {\n    font-size: 15px;\n  }\n\n  :host(bili-comment-textarea) #input {\n    font-size: 13px;\n  }\n  :host(bili-comment-textarea) #input,\n:host(bili-comment-textarea) #input::placeholder {\n    line-height: normal;\n  }\n}\n@container style(--simplifyComments-switch-userLevel: true) {\n  :host(bili-comment-user-info) #user-level {\n    display: none;\n  }\n}\n@container style(--simplifyComments-switch-decorateAndTime: true) {\n  :host(bili-comment-renderer) bili-comment-user-sailing-card {\n    display: none;\n  }\n}\n@container style(--simplifyComments-switch-fansMedal: true) {\n  :host(bili-comment-user-info) bili-comment-user-medal {\n    display: none;\n  }\n}\n@container style(--simplifyComments-switch-subReplyNewLine: true) {\n  :host(bili-comment-reply-renderer) bili-comment-user-info {\n    display: block;\n  }\n}\n@container style(--simplifyComments-switch-eventBanner: true) {\n  :host(bili-comments-header-renderer) bili-comments-notice {\n    display: none;\n  }\n}",""]),n.exports=i},79:(n,t,e)=>{var i=e(218)((function(n){return n[1]}));i.push([n.id,'@charset "UTF-8";\n.bb-comment .comment-send-lite {\n  position: sticky !important;\n  bottom: 0 !important;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0)) !important;\n  pointer-events: none;\n  width: calc(100% + 12px) !important;\n  margin: 0 0 0 -12px !important;\n  padding-left: 97px !important;\n}\nbody.dark .bb-comment .comment-send-lite {\n  background: linear-gradient(to top, #222, rgba(255, 255, 255, 0)) !important;\n}\n.bb-comment .comment-send-lite .comment-emoji-lite {\n  background-color: #fff;\n}\n.bb-comment .comment-send-lite .comment-submit {\n  height: 64px !important;\n  padding: 4px 15px !important;\n  position: relative !important;\n  right: 0 !important;\n  margin-left: 10px !important;\n}\n.bb-comment .comment-send-lite .textarea-container .baffle {\n  line-height: 65px !important;\n}\n.bb-comment .comment-send-lite .textarea-container .baffle,\n.bb-comment .comment-send-lite .textarea-container .ipt-txt {\n  height: 65px !important;\n  width: calc(100% - 80px) !important;\n}\n.bb-comment .comment-send-lite > * {\n  pointer-events: initial;\n}\n.bb-comment .loading-state {\n  font-size: 14px !important;\n  height: 1.4em !important;\n  line-height: 1.4 !important;\n  margin: 12px 0 !important;\n}\n.bb-comment .loading-state + .bottom-page {\n  margin: 0 !important;\n}\n.bb-comment .nameplate,\n.bb-comment .comment-header .tabs-order li.on::after,\n.bb-comment .true-love,\n.bb-comment .medal,\n.bb-comment .medal-level,\n.bb-comment .reply-notice,\n.bb-comment .sailing,\n.bb-comment .perfect-reply {\n  display: none !important;\n}\n.bb-comment .comment-send-lite .comment-emoji,\n.bb-comment .comment-send .comment-emoji {\n  box-shadow: none !important;\n}\n.bb-comment .comment-send-lite .comment-emoji span,\n.bb-comment .comment-send .comment-emoji span {\n  opacity: 0.4;\n  color: black;\n}\n.bb-comment .comment-send-lite .comment-emoji .face,\n.bb-comment .comment-send .comment-emoji .face {\n  transition: all 0.2s ease-out;\n  height: 16px !important;\n  width: 16px !important;\n  background-position: center !important;\n  opacity: 0.4;\n  display: inline-flex !important;\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-send-lite .comment-emoji .face,\nbody.dark .bb-comment .comment-send .comment-emoji .face {\n  color: #eee;\n}\n.bb-comment .comment-send-lite .comment-emoji .face::before,\n.bb-comment .comment-send .comment-emoji .face::before {\n  content: "\\f01f5";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.bb-comment .comment-send-lite .comment-emoji .text,\n.bb-comment .comment-send .comment-emoji .text {\n  transition: all 0.2s ease-out;\n}\nbody.dark .bb-comment .comment-send-lite .comment-emoji .text,\nbody.dark .bb-comment .comment-send .comment-emoji .text {\n  filter: brightness(0) invert(1) !important;\n}\n.bb-comment .comment-send-lite .comment-emoji.open span,\n.bb-comment .comment-send-lite .comment-emoji.open .face, .bb-comment .comment-send-lite .comment-emoji:hover span,\n.bb-comment .comment-send-lite .comment-emoji:hover .face,\n.bb-comment .comment-send .comment-emoji.open span,\n.bb-comment .comment-send .comment-emoji.open .face,\n.bb-comment .comment-send .comment-emoji:hover span,\n.bb-comment .comment-send .comment-emoji:hover .face {\n  opacity: 1;\n}\n.bb-comment .comment-list .list-item {\n  position: relative;\n}\n.bb-comment .comment-list .list-item .info {\n  margin-top: 0 !important;\n  display: flex;\n  align-items: center;\n}\n.bb-comment .comment-list .list-item .info .floor {\n  opacity: 0.7;\n  order: 1;\n}\n.bb-comment .comment-list .list-item .info .reply {\n  order: 2;\n}\n.bb-comment .comment-list .list-item .info .reply-tags {\n  order: 3;\n  display: flex !important;\n  margin: 0 !important;\n}\n.bb-comment .comment-list .list-item .info .reply-tags span {\n  margin: 0 4px 0 0 !important;\n  font-size: 12px !important;\n  line-height: normal !important;\n  display: flex !important;\n  height: auto !important;\n  padding: 2px 6px !important;\n}\n.bb-comment .comment-list .list-item .info .operation {\n  order: 4;\n  flex-grow: 1;\n  display: flex !important;\n  justify-content: flex-end;\n  margin: 0 !important;\n  padding: 3px !important;\n}\n.bb-comment .comment-list .list-item .info > * {\n  display: flex;\n  align-items: center;\n}\n.bb-comment .comment-list .list-item .info .like i,\n.bb-comment .comment-list .list-item .info .hate i {\n  transition: all 0.2s ease-out;\n  height: 16px !important;\n  width: 16px !important;\n  background-position: center !important;\n  opacity: 0.4;\n  display: inline-flex !important;\n}\n.bb-comment .comment-list .list-item .info .like span,\n.bb-comment .comment-list .list-item .info .hate span {\n  opacity: 0.4;\n  transition: all 0.2s ease-out;\n  color: black;\n}\nbody.dark .bb-comment .comment-list .list-item .info .like span,\nbody.dark .bb-comment .comment-list .list-item .info .hate span {\n  color: #eee !important;\n}\n.bb-comment .comment-list .list-item .info .like.liked > *, .bb-comment .comment-list .list-item .info .like.hated > *, .bb-comment .comment-list .list-item .info .like:hover > *,\n.bb-comment .comment-list .list-item .info .hate.liked > *,\n.bb-comment .comment-list .list-item .info .hate.hated > *,\n.bb-comment .comment-list .list-item .info .hate:hover > * {\n  opacity: 1;\n}\n.bb-comment .comment-list .list-item .info .like i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-list .list-item .info .like i {\n  color: #eee;\n}\n.bb-comment .comment-list .list-item .info .like i::before {\n  content: "\\f0514";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.bb-comment .comment-list .list-item .info .like.liked i, .bb-comment .comment-list .list-item .info .like.liked:hover i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-list .list-item .info .like.liked i, body.dark .bb-comment .comment-list .list-item .info .like.liked:hover i {\n  color: #eee;\n}\n.bb-comment .comment-list .list-item .info .like.liked i::before, .bb-comment .comment-list .list-item .info .like.liked:hover i::before {\n  content: "\\f0513";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.bb-comment .comment-list .list-item .info .like.liked i, .bb-comment .comment-list .list-item .info .like.liked i + span, body.dark .bb-comment .comment-list .list-item .info .like.liked i, .bb-comment .comment-list .list-item .info .like.liked:hover i, .bb-comment .comment-list .list-item .info .like.liked:hover i + span, body.dark .bb-comment .comment-list .list-item .info .like.liked:hover i {\n  color: var(--theme-color) !important;\n}\n.bb-comment .comment-list .list-item .info .hate i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-list .list-item .info .hate i {\n  color: #eee;\n}\n.bb-comment .comment-list .list-item .info .hate i::before {\n  content: "\\f0512";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.bb-comment .comment-list .list-item .info .hate.hated i, .bb-comment .comment-list .list-item .info .hate.hated:hover i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-list .list-item .info .hate.hated i, body.dark .bb-comment .comment-list .list-item .info .hate.hated:hover i {\n  color: #eee;\n}\n.bb-comment .comment-list .list-item .info .hate.hated i::before, .bb-comment .comment-list .list-item .info .hate.hated:hover i::before {\n  content: "\\f0511";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.bb-comment .comment-list .list-item .info .hate.hated i, .bb-comment .comment-list .list-item .info .hate.hated i + span, body.dark .bb-comment .comment-list .list-item .info .hate.hated i, .bb-comment .comment-list .list-item .info .hate.hated:hover i, .bb-comment .comment-list .list-item .info .hate.hated:hover i + span, body.dark .bb-comment .comment-list .list-item .info .hate.hated:hover i {\n  color: var(--theme-color) !important;\n}\n.bb-comment .comment-list .list-item .info .operation:hover {\n  background: transparent !important;\n}\n.bb-comment .comment-list .list-item .info .operation .spot {\n  transition: all 0.2s ease-out;\n  height: 16px !important;\n  width: 16px !important;\n  background-position: center !important;\n  opacity: 0.4;\n  display: inline-flex !important;\n  background: none !important;\n  color: #000;\n}\nbody.dark .bb-comment .comment-list .list-item .info .operation .spot {\n  color: #eee;\n}\n.bb-comment .comment-list .list-item .info .operation .spot::before {\n  content: "\\f01d9";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\nbody.dark .bb-comment .comment-list .list-item .info .operation .spot {\n  filter: brightness(0) invert(1) !important;\n}\n.bb-comment .comment-list .list-item .info .operation .spot:hover {\n  opacity: 1;\n}\n.bb-comment .comment-list .list-item .text {\n  white-space: pre-wrap;\n}\n.bb-comment .comment-list .list-item .user {\n  margin-right: 120px;\n}\n.bb-comment .comment-list .list-item .user .level {\n  visibility: hidden;\n  width: 0;\n  margin: 0;\n}\n.bb-comment .comment-list .list-item .user .text-con {\n  white-space: pre-wrap;\n  display: block;\n  margin: 0 !important;\n}\n.bb-comment .comment-list .list-item .user-face .hot-follow,\n.bb-comment .comment-list .list-item .con .vote-container {\n  display: none !important;\n}\n.bb-comment .comment-list .list-item > .con .level-link {\n  display: none !important;\n}\n.bb-comment .comment-list .list-item > .con > .reply-box {\n  transform: translateX(0%);\n}\n.bb-comment .comment-list .list-item > .con > .info {\n  margin-top: 4px;\n}\n.bb-comment .comment-list .list-item > .con > .info > .time-location,\n.bb-comment .comment-list .list-item > .con > .info > .time {\n  position: absolute;\n  right: 8px;\n  top: 24px;\n  margin: 0 !important;\n  opacity: 0.5;\n  line-height: normal;\n  color: black;\n}\nbody.dark .bb-comment .comment-list .list-item > .con > .info > .time-location,\nbody.dark .bb-comment .comment-list .list-item > .con > .info > .time,\nbody.dark .bb-comment .comment-list .list-item > .con > .info > .floor {\n  filter: brightness(0) invert(1) !important;\n}\n.bb-comment .comment-list .list-item > .con > .info > .plad {\n  display: none !important;\n}\n.bb-comment .comment-list .reply-con {\n  position: relative;\n}\n.bb-comment .comment-list .reply-con > .info > .time-location,\n.bb-comment .comment-list .reply-con > .info > .time {\n  position: absolute;\n  right: 8px;\n  top: 0px;\n  margin: 0;\n  opacity: 0.5;\n  line-height: normal;\n  color: black;\n}\nbody.dark .bb-comment .comment-list .reply-con > .info > .time-location,\nbody.dark .bb-comment .comment-list .reply-con > .info > .time {\n  filter: brightness(0) invert(1) !important;\n}\n.bb-comment .reply-item {\n  position: relative;\n}\nbody.dark .bb-comment .reply-item > .info > .time {\n  filter: brightness(0) invert(1) !important;\n}\n.bb-comment .reply-notice .notice-item {\n  background-color: rgba(0, 0, 0, 0.0666666667) !important;\n  border: none !important;\n  display: flex !important;\n  align-items: center;\n  padding: 10px 14px !important;\n}\nbody.dark .bb-comment .reply-notice .notice-item {\n  background-color: #333 !important;\n}\n.bb-comment .reply-notice .notice-item .icon-notice {\n  order: 0;\n  position: static !important;\n  margin-right: 12px;\n  background: url(\'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" viewBox="0 0 24 24"><path fill="black" d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" /></svg>\') !important;\n}\n.bb-comment .reply-notice .notice-item a {\n  order: 1;\n  flex-grow: 1;\n  color: black !important;\n}\nbody.dark .bb-comment .reply-notice .notice-item a {\n  color: #eee !important;\n}\n.bb-comment .reply-notice .notice-item .icon-close-notice {\n  order: 2;\n  position: static !important;\n  background: url(\'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" viewBox="0 0 24 24"><path fill="black" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>\') !important;\n}\n.bb-comment .reply-notice .notice-item .icon-close-notice,\n.bb-comment .reply-notice .notice-item .icon-notice {\n  height: 18px;\n  width: 18px;\n  background-position: center !important;\n  opacity: 0.4;\n}\n.bb-comment .comment-send:not(.no-login) {\n  position: relative !important;\n}\n.bb-comment .comment-send-lite:not(.no-login),\n.bb-comment .comment-send:not(.no-login) {\n  padding-top: 15px !important;\n}\n.bb-comment .comment-send-lite:not(.no-login) .dynamic-repost,\n.bb-comment .comment-send:not(.no-login) .dynamic-repost {\n  margin-left: 81px !important;\n  margin-top: 4px;\n}\n.bb-comment .comment-send-lite:not(.no-login) .comment-emoji,\n.bb-comment .comment-send:not(.no-login) .comment-emoji {\n  position: absolute !important;\n  right: 0;\n  top: 51px;\n  width: 68px !important;\n  background: #fff;\n  box-sizing: content-box !important;\n}\n.bb-comment .comment-send-lite:not(.no-login) .comment-submit,\n.bb-comment .comment-send:not(.no-login) .comment-submit {\n  height: 34px !important;\n  font-size: 0;\n}\n.bb-comment .comment-send-lite:not(.no-login) .comment-submit body.dark,\n.bb-comment .comment-send:not(.no-login) .comment-submit body.dark {\n  color: var(--theme-color) !important;\n}\n.bb-comment .comment-send-lite:not(.no-login) .comment-submit::after,\n.bb-comment .comment-send:not(.no-login) .comment-submit::after {\n  content: "发表";\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n}\nbody.dark .bb-comment .comment-send-lite:not(.no-login) .comment-submit::after,\nbody.dark .bb-comment .comment-send:not(.no-login) .comment-submit::after {\n  color: var(--foreground-color);\n}\n\nbody.dark .panel-area .bb-comment .comment-send-lite {\n  background: linear-gradient(to top, #444 30%, transparent) !important;\n}\n\n.dynamic-list-item-wrap .info .plat {\n  display: none !important;\n}\n.dynamic-list-item-wrap .reply-box .time-location,\n.dynamic-list-item-wrap .reply-box .time {\n  position: absolute;\n  right: 8px;\n  top: 0px;\n  margin: 0;\n  opacity: 0.5;\n  line-height: normal;\n  color: black;\n  top: 10px;\n}\n.dynamic-list-item-wrap .reply-item > .info {\n  display: flex;\n  align-items: center;\n}\n.dynamic-list-item-wrap .reply-item > .info .floor {\n  opacity: 0.7;\n  order: 1;\n}\n.dynamic-list-item-wrap .reply-item > .info .reply {\n  order: 2;\n}\n.dynamic-list-item-wrap .reply-item > .info .reply-tags {\n  order: 3;\n  display: flex !important;\n  margin: 0 !important;\n}\n.dynamic-list-item-wrap .reply-item > .info .reply-tags span {\n  margin: 0 4px 0 0 !important;\n  font-size: 12px !important;\n  line-height: normal !important;\n  display: flex !important;\n  height: auto !important;\n  padding: 2px 6px !important;\n}\n.dynamic-list-item-wrap .reply-item > .info .operation {\n  order: 4;\n  flex-grow: 1;\n  display: flex !important;\n  justify-content: flex-end;\n  margin: 0 !important;\n  padding: 3px !important;\n}\n\n.reply-item > .info > .time-location,\n.reply-item > .info > .time {\n  position: absolute;\n  right: 8px;\n  top: 24px;\n  margin: 0 !important;\n  opacity: 0.5;\n  line-height: normal;\n  color: black;\n  top: 12px;\n}\nbody.dark .reply-item > .info > .time-location,\nbody.dark .reply-item > .info > .time {\n  filter: brightness(0) invert(1) !important;\n}\n\n.reply-box .item-user > a {\n  margin-right: 8px;\n}\n.reply-box .item-user .text {\n  display: block;\n}\n\n.comment-area .dynamic-level {\n  display: none !important;\n}\n\n.dynamic-like i,\n.dynamic-hate i {\n  transition: all 0.2s ease-out;\n}\n\n.dynamic-like i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-like i {\n  color: #eee;\n}\n.dynamic-like i::before {\n  content: "\\f0514";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-like:hover i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-like:hover i {\n  color: #eee;\n}\n.dynamic-like:hover i::before {\n  content: "\\f0513";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-like:hover i, .dynamic-like:hover i + span, body.dark .dynamic-like:hover i {\n  color: var(--theme-color) !important;\n}\n\n.dynamic-liked:hover i,\n.dynamic-liked i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-liked:hover i,\nbody.dark .dynamic-liked i {\n  color: #eee;\n}\n.dynamic-liked:hover i::before,\n.dynamic-liked i::before {\n  content: "\\f0513";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-liked:hover i, .dynamic-liked:hover i + span, body.dark .dynamic-liked:hover i,\n.dynamic-liked i,\n.dynamic-liked i + span,\nbody.dark .dynamic-liked i {\n  color: var(--theme-color) !important;\n}\n\n.dynamic-hate i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-hate i {\n  color: #eee;\n}\n.dynamic-hate i::before {\n  content: "\\f0512";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-hate:hover i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-hate:hover i {\n  color: #eee;\n}\n.dynamic-hate:hover i::before {\n  content: "\\f0511";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-hate:hover i, .dynamic-hate:hover i + span, body.dark .dynamic-hate:hover i {\n  color: var(--theme-color) !important;\n}\n\n.dynamic-hated:hover i,\n.dynamic-hated i {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-hated:hover i,\nbody.dark .dynamic-hated i {\n  color: #eee;\n}\n.dynamic-hated:hover i::before,\n.dynamic-hated i::before {\n  content: "\\f0511";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\n.dynamic-hated:hover i, .dynamic-hated:hover i + span, body.dark .dynamic-hated:hover i,\n.dynamic-hated i,\n.dynamic-hated i + span,\nbody.dark .dynamic-hated i {\n  color: var(--theme-color) !important;\n}\n\n.dynamic-spot {\n  background: none !important;\n  color: #000;\n}\nbody.dark .dynamic-spot {\n  color: #eee;\n}\n.dynamic-spot::before {\n  content: "\\f01d9";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\nbody.dark .dynamic-spot {\n  filter: brightness(0) invert(1) !important;\n}\n\n.textarea-container .comm-tool .comm-emoji .icon-face {\n  background: none !important;\n  color: #000;\n}\nbody.dark .textarea-container .comm-tool .comm-emoji .icon-face {\n  color: #eee;\n}\n.textarea-container .comm-tool .comm-emoji .icon-face::before {\n  content: "\\f01f5";\n  display: inline-block;\n  font: normal normal normal 24px/1 "Material Design Icons";\n  font-size: 16px;\n  line-height: 1;\n  width: 16px;\n  height: 16px;\n}\nbody.dark .textarea-container .comm-tool .comm-emoji .icon-face {\n  filter: brightness(0) invert(1) !important;\n}\n\n.dynamic-spot,\n.textarea-container .comm-tool .comm-emoji .icon-face {\n  height: 16px !important;\n  width: 16px !important;\n  background-position: center !important;\n  opacity: 0.4;\n  display: inline-flex !important;\n}\n\n.comment-list .opera-list {\n  right: 20px !important;\n  top: -72px !important;\n}\n\n.v-wrap #comment {\n  z-index: 21 !important;\n}\n\n.l-con .tag-channel-pane {\n  z-index: 22 !important;\n}',""]),n.exports=i},218:n=>{"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,i){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(i)for(var m=0;m<this.length;m++){
// eslint-disable-next-line prefer-destructuring
var r=this[m][0];null!=r&&(o[r]=!0)}for(var a=0;a<n.length;a++){var l=[].concat(n[a]);i&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},359:(n,t,e)=>{var i=e(127);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},564:(n,t,e)=>{var i=e(259);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},202:(n,t,e)=>{var i=e(915);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},977:(n,t,e)=>{var i=e(232);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},117:(n,t,e)=>{var i=e(859);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},162:(n,t,e)=>{var i=e(100);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},154:(n,t,e)=>{var i=e(303);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},435:(n,t,e)=>{var i=e(932);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},62:(n,t,e)=>{var i=e(515);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},161:(n,t,e)=>{var i=e(79);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},685:(n,t,e)=>{var i={"./base.scss":564,"./decorate-and-time.scss":202,"./event-banner.scss":977,"./fans-medal.scss":117,"./reply-editor.scss":162,"./sub-reply-new-line.scss":154,"./user-level.scss":435};function o(n){var t=m(n);return e(t)}function m(n){if(!e.o(i,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=m,n.exports=o,o.id=685},807:n=>{function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=807,n.exports=t},849:n=>{"use strict";n.exports="去除或优化评论区内的元素, 可配置以下选项 (描述的是勾选时的效果):\n\n> 配置项仅对新版评论区有效\n\n- `用户等级`: 隐藏用户等级标识. (隐藏后, 可以通过鼠标停留在头像上, 在弹出的资料卡小窗中查看)\n- `装扮 & 时间`: 隐藏装扮图片, 并把发送时间移动到装扮的位置.\n- `头像框`: 隐藏头像框.\n- `回复换行`:\n  - 楼中楼回复也另起一行显示, 和一级回复保持一致.\n  - `热评`, `UP 主点赞` 等标记和点赞栏放在同一行.\n- `编辑框`: 将提示文本居上, 符合用户实际输入文字的位置, 并将发布按钮的字号略微调小.\n- `粉丝勋章`: 隐藏用户的粉丝勋章.\n- `小喇叭横幅`: 隐藏评论区顶部的小喇叭横幅\n"},267:n=>{"use strict";n.exports=coreApis.containerQuery},986:n=>{"use strict";n.exports=coreApis.settings},137:n=>{"use strict";n.exports=coreApis.shadowRoot},356:n=>{"use strict";n.exports=coreApis.style}},i={};function o(n){var t=i[n];if(void 0!==t)return t.exports;var m=i[n]={id:n,exports:{}};return e[n](m,m.exports,o),m.exports}t=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,o.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var m=Object.create(null);o.r(m);var r={};n=n||[null,t({}),t([]),t(t)];for(var a=2&i&&e;"object"==typeof a&&!~n.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((n=>r[n]=()=>e[n]));return r.default=()=>e,o.d(m,r),m},o.d=(n,t)=>{for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var m={};return(()=>{"use strict";o.d(m,{component:()=>e});const n=coreApis.componentApis.switchOptions,t="simplifyComments",e=(0,n.wrapSwitchOptions)({name:"simplifyOptions",switchProps:{checkedIcon:"mdi-checkbox-marked-circle",notCheckedIcon:"mdi-checkbox-blank-circle-outline"},dimAt:!1,switches:{userLevel:{defaultValue:!0,displayName:"用户等级"},decorateAndTime:{defaultValue:!0,displayName:"装扮 & 时间"},userPendent:{defaultValue:!1,displayName:"头像框"},subReplyNewLine:{defaultValue:!0,displayName:"回复换行"},replyEditor:{defaultValue:!0,displayName:"编辑框"},fansMedal:{defaultValue:!1,displayName:"粉丝勋章"},eventBanner:{defaultValue:!0,displayName:"小喇叭横幅"}}})({name:t,displayName:"简化评论区",entry:async n=>{let{metadata:i,settings:m}=n;const{addStyle:r,getDefaultStyleID:a}=await Promise.resolve().then(o.t.bind(o,356,23)),{isContainerStyleQuerySupported:l}=await Promise.resolve().then(o.t.bind(o,267,23)),{addComponentListener:c}=await Promise.resolve().then(o.t.bind(o,986,23));if(c(i.name,(n=>{document.body.classList.toggle("simplify-comment",n)}),!0),l()){const{shadowRootStyles:n}=await Promise.resolve().then(o.t.bind(o,137,23)),e=await Promise.resolve().then(o.t.bind(o,62,23)).then((n=>n.default));n.toggleWithComponent(i.name,{id:t,style:e})}else{const{shadowRootStyles:n}=await Promise.resolve().then(o.t.bind(o,137,23)),t=o(685);Object.keys(m.options).forEach((i=>{if(!i.startsWith("switch-"))return;const o=`${e.name}.${i}`,m=lodash.kebabCase(i.replace(/^switch-/,"")),l=`./${m}.scss`;t.keys().includes(l)&&c(o,(e=>{if(e){const e=t(l);r(e,m),n.addStyle({id:o,style:e})}else document.getElementById(a(m))?.remove(),n.removeStyle(o)}),!0)}))}},instantStyles:[{name:"simplifyCommentsv1",style:()=>Promise.resolve().then(o.t.bind(o,161,23))},{name:"simplifyCommentsv2",style:()=>Promise.resolve().then(o.t.bind(o,359,23))}],tags:[componentsTags.style],commitHash:"dbb859e2e120781fc7506fb65d2a64896eeee4da",coreVersion:"2.9.3",description:(()=>{const n=o(807);return{...Object.fromEntries(n.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],n(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,849,17)).then((n=>n.default))}})()})})(),m=m.component})()));