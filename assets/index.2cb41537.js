import{o as i,c as r,a as e,r as y,b as m,d as k,w as p,e as $,v as O,f as L,T as M,g as v,u as S,F as f,p as B,h as z,t as u,i as h,j as V,V as I}from"./vendor.f6302282.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};R();const F={class:"widget-icon"},g={props:{href:String},setup(o){const t=o,n=()=>{t.href&&window.open(t.href,"_blank")};return(c,s)=>(i(),r("div",{class:"widget",onClick:n},[e("div",F,[y(c.$slots,"default")])]))}},N=[],j=[];var x={FE:N,Podcast:j};var b=(o,t)=>{const n=o.__vccOpts||o;for(const[c,s]of t)n[c]=s;return n};const A={class:"modal-wrapper"},E=["onClick"],P={class:"modal-container"},T={props:{visible:{type:Boolean,default:!1}},emits:["clickOutside"],setup(o,{emit:t}){const n=o;m(!1);const c=()=>{t("clickOutside")};return(s,l)=>(i(),k(M,{name:"modal-fade"},{default:p(()=>[$(e("div",A,[e("div",{onClick:L(c,["self"]),class:"modal-mask"},null,8,E),e("div",P,[y(s.$slots,"default",{},void 0,!0)])],512),[[O,n.visible]])]),_:3}))}};var D=b(T,[["__scopeId","data-v-a516e640"]]);const C=o=>(B("data-v-1ce86785"),o=o(),z(),o),W={class:"flex h-full flex-row"},q={class:"h-full flex-grow-0 flex-shrink-0",style:{background:"rgb(247, 246, 243)","max-width":"250px"}},K={class:"flex flex-column h-full justify-between",style:{"padding-top":"10px","padding-bottom":"12px"}},G=C(()=>e("div",{class:"rss-menu-title"},"Rss\u6E90",-1)),H={class:"rss-menu-subtitle"},J=["onClick"],Q={class:"flex-grow relative h-full z-10"},U={class:"flex flex-direction w-full h-full"},X={class:"rss-content"},Y={class:"rss-item"},Z={style:{"margin-right":"10px"}},ee=["href"],se=C(()=>e("div",{class:"rss-divider"},[e("div",{class:"rss-divider-line"})],-1)),te={props:{visible:Boolean},emits:["click"],setup(o,{emit:t}){const n=o,c=Object.keys(x).map(_=>({area:_,projects:x[_]}));console.log(c);const s=m([]),l=()=>{t("clickOutside")},d=_=>{s.value=_.items};return(_,re)=>(i(),k(D,{visible:n.visible,onClickOutside:l},{default:p(()=>[e("div",W,[e("div",q,[e("div",K,[e("div",null,[G,(i(!0),r(f,null,v(S(c),a=>(i(),r(f,null,[e("div",H,u(a.area),1),(i(!0),r(f,null,v(a.projects,w=>(i(),r("div",{class:"rss-menu-item text-sm",onClick:ae=>d(w)},u(w.title),9,J))),256))],64))),256))])])]),e("div",Q,[e("div",U,[e("div",X,[(i(!0),r(f,null,v(s.value,a=>(i(),r("div",Y,[e("div",null,[e("span",Z,u(a.timestamp),1),e("a",{href:a.link},u(a.content),9,ee)]),se]))),256))])])])])]),_:1},8,["visible"]))}};var le=b(te,[["__scopeId","data-v-1ce86785"]]);const oe={class:"container"},ce=e("svg",{t:"1650006390167",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2828","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"60",height:"60"},[e("path",{d:"M190.3619 179.479263c31.818329 25.847061 43.760866 23.885073 103.558852 19.875793l563.645073-33.822969c11.942537 0 2.00464-11.942537-1.961988-13.904525L761.940229 83.938971c-17.913805-13.904525-41.84153-29.856341-87.649688-25.889713L128.559273 97.886148c-19.875793 1.961988-23.885073 11.942537-15.951816 19.875793z m33.822969 131.367902v593.032243c0 31.860981 15.909165 43.803518 51.779427 41.798878l619.433779-35.827609c35.870262-1.961988 39.879542-23.885073 39.879541-49.774787V271.010276c0-25.847061-9.937896-39.794238-31.903633-37.83225l-647.328132 37.83225c-23.885073 2.00464-31.860981 13.947177-31.860982 39.794237z m611.500523 31.775678c3.966628 17.913805 0 35.82761-17.913805 37.874902l-29.856341 5.971268v437.779268c-25.932365 13.947177-49.817438 21.923085-69.735883 21.923085-31.903633 0-39.879542-9.980548-63.764615-39.794238l-195.21782-306.49667v296.516122L520.956902 810.386408s0 35.82761-49.817438 35.82761l-137.424474 7.933256c-3.966628-7.933256 0-27.851701 13.947177-31.818329l35.827609-9.937897V420.291982L333.800294 416.282702c-4.00928-17.913805 5.971268-43.760866 33.82297-45.765506l147.405022-9.937896 203.193729 310.463298v-274.678341l-51.822078-5.928616c-3.966628-21.923085 11.942537-37.83225 31.860981-39.794238zM82.751115 44.144733l567.697005-41.798878c69.693231-5.971268 87.649688-2.00464 131.453206 29.856342l181.227992 127.358622c29.856341 21.880433 39.83689 27.851701 39.83689 51.736774v698.553084c0 43.760866-15.909165 69.693231-71.65522 73.617207l-659.313321 39.83689c-41.798878 2.00464-61.759975-3.966628-83.683059-31.860982l-133.457846-173.166779c-23.885073-31.860981-33.82297-55.703403-33.82297-83.597756V113.752661c0-35.784958 15.951817-65.683951 61.717323-69.607928z","p-id":"2829"})],-1),ne=e("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.731 455.731",style:{"enable-background":"new 0 0 455.731 455.731"},"xml:space":"preserve"},[e("g",null,[e("rect",{x:"0",y:"0",style:{fill:"#f78422"},width:"455.731",height:"455.731"}),e("g",null,[e("path",{style:{fill:"#ffffff"},d:`M296.208,159.16C234.445,97.397,152.266,63.382,64.81,63.382v64.348
            c70.268,0,136.288,27.321,185.898,76.931c49.609,49.61,76.931,115.63,76.931,185.898h64.348
            C391.986,303.103,357.971,220.923,296.208,159.16z`}),e("path",{style:{fill:"#ffffff"},d:`M64.143,172.273v64.348c84.881,0,153.938,69.056,153.938,153.939h64.348
            C282.429,270.196,184.507,172.273,64.143,172.273z`}),e("circle",{style:{fill:"#ffffff"},cx:"109.833",cy:"346.26",r:"46.088"})])])],-1),ie={setup(o){const t=m(!1),n=()=>{t.value=!0},c=()=>{t.value=!1};return(s,l)=>(i(),r(f,null,[e("div",oe,[h(g,{href:"https://notion.so"},{default:p(()=>[ce]),_:1}),h(g,{onClick:n},{default:p(()=>[ne]),_:1})]),h(le,{visible:t.value,onClickOutside:c},null,8,["visible"])],64))}};V(ie).use(I).mount("#app");