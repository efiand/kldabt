import"../chunks/CWj6FrbW.js";import{a4 as z,a5 as D,a6 as Q,T as P,t as $,h as j,a as U,ar as ot,g as q,a1 as ft,ad as ct,ac as lt,s as vt,K as I,b as ut,E as V,f as dt,as as R,_ as pt,at as _t,au as ht,ah as mt,v as wt,av as gt,aw as kt,aj as yt,l as O,m as S,i as Z,ao as Tt,A as Et,an as At,B as bt,x as v,n as k,k as tt,j as G,aq as B,ax as Nt}from"../chunks/B7WR8UeV.js";import{d as J,e as Ct,f as Rt,t as x,a as E,c as Mt,g as $t,s as Ot}from"../chunks/L6Vh0iO6.js";import{i as L}from"../chunks/BjStwJ0F.js";import{s as T,P as at,B as Y,T as St,D as xt}from"../chunks/DeHDWjZB.js";import{a as Bt}from"../chunks/dbPmgow0.js";import{p as C}from"../chunks/CyCUOGeN.js";import{p as et}from"../chunks/QrKb_9dB.js";function Ft(a){var t=Q,e=P;z(null),D(null);try{return a()}finally{z(t),D(e)}}function It(a,t,e=!1,r=!1,s=!1){var i=a,c="";$(()=>{var h=P;if(c===(c=t()??"")){j&&U();return}if(h.nodes_start!==null&&(ot(h.nodes_start,h.nodes_end),h.nodes_start=h.nodes_end=null),c!==""){if(j){q.data;for(var f=U(),n=f;f!==null&&(f.nodeType!==8||f.data!=="");)n=f,f=ft(f);if(f===null)throw ct(),lt;J(q,n),i=vt(f);return}var d=c+"";e?d=`<svg>${d}</svg>`:r&&(d=`<math>${d}</math>`);var o=Ct(d);if((e||r)&&(o=I(o)),J(I(o),o.lastChild),e||r)for(;I(o);)i.before(I(o));else i.before(o)}})}function Lt(a,t,...e){var r=a,s=R,i;ut(()=>{s!==(s=t())&&(i&&(pt(i),i=null),i=dt(()=>s(r,...e)))},V),j&&(r=q)}const zt=()=>performance.now(),y={tick:a=>requestAnimationFrame(a),now:()=>zt(),tasks:new Set};function rt(){const a=y.now();y.tasks.forEach(t=>{t.c(a)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(rt)}function Dt(a){let t;return y.tasks.size===0&&y.tick(rt),{promise:new Promise(e=>{y.tasks.add(t={c:a,f:e})}),abort(){y.tasks.delete(t)}}}function W(a,t){Ft(()=>{a.dispatchEvent(new CustomEvent(t))})}function Pt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function X(a){const t={},e=a.split(";");for(const r of e){const[s,i]=r.split(":");if(!s||i===void 0)break;const c=Pt(s.trim());t[c]=i.trim()}return t}const Yt=a=>a;function jt(a,t,e,r){var s=(a&gt)!==0,i="in",c,h=t.inert,f=t.style.overflow,n,d;function o(){var _=Q,g=P;z(null),D(null);try{return c??(c=e()(t,(r==null?void 0:r())??{},{direction:i}))}finally{z(_),D(g)}}var m={is_global:s,in(){t.inert=h,n==null||n.abort(),W(t,"introstart"),n=it(t,o(),d,1,()=>{W(t,"introend"),n==null||n.abort(),n=c=void 0,t.style.overflow=f})},out(_){{_==null||_(),c=void 0;return}},stop:()=>{n==null||n.abort()}},p=P;if((p.transitions??(p.transitions=[])).push(m),Rt){var l=s;if(!l){for(var u=p.parent;u&&(u.f&V)!==0;)for(;(u=u.parent)&&(u.f&_t)===0;);l=!u||(u.f&ht)!==0}l&&mt(()=>{wt(()=>m.in())})}}function it(a,t,e,r,s){if(kt(t)){var i,c=!1;return yt(()=>{if(!c){var u=t({direction:"in"});i=it(a,u,e,r,s)}}),{abort:()=>{c=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!(t!=null&&t.duration))return s(),{abort:R,deactivate:R,reset:R,t:()=>r};const{delay:h=0,css:f,tick:n,easing:d=Yt}=t;var o=[];if(n&&n(0,1),f){var m=X(f(0,1));o.push(m,m)}var p=()=>1-r,l=a.animate(o,{duration:h});return l.onfinish=()=>{var u=1-r,_=r-u,g=t.duration*Math.abs(_),A=[];if(g>0){var b=!1;if(f)for(var w=Math.ceil(g/16.666666666666668),N=0;N<=w;N+=1){var H=u+_*d(N/w),K=X(f(H,1-H));A.push(K),b||(b=K.overflow==="hidden")}b&&(a.style.overflow="hidden"),p=()=>{var F=l.currentTime;return u+_*d(F/g)},n&&Dt(()=>{if(l.playState!=="running")return!1;var F=p();return n(F,1-F),!0})}l=a.animate(A,{duration:g,fill:"forwards"}),l.onfinish=()=>{p=()=>r,n==null||n(r,1-r),s()}},{abort:()=>{l&&(l.cancel(),l.effect=null,l.onfinish=R)},deactivate:()=>{s=R},reset:()=>{},t:()=>p()}}function qt(a,{speed:t=1}={}){const e=a.textContent;if(!(a.childNodes.length===1&&a.childNodes[0].nodeType===Node.TEXT_NODE&&e!==null))throw new Error("This transition only works on elements with a single text node child");return{duration:e.length/(t*.01),tick(i){const c=Math.trunc(e.length*i);delete a.dataset.hidden,a.textContent=e.slice(0,c)}}}var Ht=x('<nav class="nav"><a class="nav__link" aria-label="К содержанию" title="К содержанию"><svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M11.8 16.4 22 8.8l-9-4.6-11 6.7v3l9.8 5.8L22 12.2v-.4l-10.2 7.6-9.4-5.7v-2.6l9.4 5.3z"></path></svg></a></nav>');function nt(a,t){let e=et(t,"isAmp",3,!1);var r=Ht(),s=O(r);S(r),$(()=>T(s,"href",`/kldabt${e()?"/amp":""}/soderzhanie`)),E(a,r)}var Kt=x('<h1 class="hero__title"><span></span></h1>'),Ut=x('<section class="hero"><!> <!></section>');function Gt(a,t){Z(t,!0);let e=et(t,"isAmp",3,!1),r=Tt(Et(e()));At(function(){bt(r,!0)});var s=Ut(),i=O(s);{var c=f=>{var n=Kt(),d=O(n);d.textContent=at,S(n),$(()=>T(d,"data-hidden",e()?void 0:"")),jt(1,d,()=>qt),E(f,n)};L(i,f=>{v(r)&&f(c)})}var h=k(i,2);nt(h,{get isAmp(){return e()}}),S(s),E(a,s),tt()}function Jt(a){return a.replace(/\t|\n+|<!--.*?-->/g,"")}const st=99782506;let M;function Wt(a={},t=window.location.href){Xt(),M&&M(st,"hit",t,a)}function Xt(){M||(M=(window||{}).ym,M&&M(st,"init",{accurateTrackBounce:!0,clickmap:!0,defer:!0,trackLinks:!0,webvisor:!0}))}var Qt=x('<link rel="amphtml">'),Vt=x('<meta name="description"> <link rel="canonical"> <meta property="og:title"> <meta property="og:description"> <meta property="og:url"> <!>',1),Zt=x('<main class="main"><section class="main__section"><h1> </h1> <!> <!></section> <!></main>');function fa(a,t){Z(t,!0);let e=B(()=>C.params.id?`/${C.params.id}`:(C.route.id||"/").replace("/amp","")),r=B(()=>St[`${v(e)}`]||""),s=B(()=>xt[`${v(e)}`]||`Современная бытовая сказка о деде Андрее и бабке Тане «${v(r)}».`),i=B(()=>C.params.id?C.data[v(e)]:""),c=B(()=>!!C.data.isAmp);Bt(function({from:o}){Wt({referer:(o==null?void 0:o.url.toString())||""})});var h=Mt();$t(o=>{var m=Vt(),p=G(m),l=k(p,2),u=k(l,2),_=k(u,2),g=k(_,2),A=k(g,2);{var b=w=>{var N=Qt();$(()=>T(N,"href",`${Y}/amp${v(e)??""}`)),E(w,N)};L(A,w=>{v(c)||w(b)})}$(w=>{Nt.title=w,T(p,"content",v(s)),T(l,"href",`${Y}${v(e)??""}`),T(u,"content",v(r)),T(_,"content",v(s)),T(g,"content",`${Y}${v(e)??""}`)},[()=>[at,v(r)].join(". ")]),E(o,m)});var f=G(h);{var n=o=>{var m=Zt(),p=O(m),l=O(p),u=O(l,!0);S(l);var _=k(l,2);It(_,()=>Jt(v(i)));var g=k(_,2);Lt(g,()=>t.children),S(p);var A=k(p,2);{var b=w=>{nt(w,{get isAmp(){return v(c)}})};L(A,w=>{v(e)!=="/soderzhanie"&&w(b)})}S(m),$(()=>Ot(u,v(r))),E(o,m)},d=o=>{Gt(o,{get isAmp(){return v(c)}})};L(f,o=>{v(r)?o(n):o(d,!1)})}E(a,h),tt()}export{fa as component};
