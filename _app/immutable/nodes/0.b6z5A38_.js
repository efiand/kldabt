import"../chunks/Bg9kRutz.js";import{as as z,at as H,q as Z,A as Y,b as nt,h as q,a as j,e as st,f as J,a6 as ot,ay as ft,ax as ct,s as vt,W as lt,o as ut,E as mt,B as dt,aH as pt,aB as _t,T as ht,aI as gt,aJ as wt,aD as yt,n as F,k as S,l as x,t as D,g as G,X as l,m as y,j as Q,i as K,am as B,aK as kt,aL as Tt}from"../chunks/DXHkmHUF.js";import{a as bt,b as Et,s as At}from"../chunks/DhQBMkir.js";import{i as L}from"../chunks/CU5GtzTC.js";import{b as U,e as Nt,t as I,a as A,c as Ct}from"../chunks/CtQ0_rRo.js";import{s as Rt}from"../chunks/CONc6LkP.js";import{s as R,P as V,B as P,T as It,D as Mt}from"../chunks/CGVeifcN.js";import{a as Bt}from"../chunks/BQ7FtU9f.js";import{p as E}from"../chunks/DmWBCEBq.js";import{a as Ot,b as St}from"../chunks/DhCASU3_.js";import{p as tt}from"../chunks/DlB2Ih2D.js";import{o as xt}from"../chunks/Bipbw4Up.js";function Ft(a){var t=Z,r=Y;z(null),H(null);try{return a()}finally{z(t),H(r)}}function Lt(a,t,r,e,o){var n=a,v="",d;nt(()=>{if(v===(v=t()??"")){q&&j();return}d!==void 0&&(ut(d),d=void 0),v!==""&&(d=st(()=>{if(q){J.data;for(var s=j(),i=s;s!==null&&(s.nodeType!==8||s.data!=="");)i=s,s=ot(s);if(s===null)throw ft(),ct;U(J,i),n=vt(s);return}var g=v+"",w=Nt(g);U(lt(w),w.lastChild),n.before(w)}))})}const $t=()=>performance.now(),b={tick:a=>requestAnimationFrame(a),now:()=>$t(),tasks:new Set};function at(){const a=b.now();b.tasks.forEach(t=>{t.c(a)||(b.tasks.delete(t),t.f())}),b.tasks.size!==0&&b.tick(at)}function Dt(a){let t;return b.tasks.size===0&&b.tick(at),{promise:new Promise(r=>{b.tasks.add(t={c:a,f:r})}),abort(){b.tasks.delete(t)}}}function X(a,t){Ft(()=>{a.dispatchEvent(new CustomEvent(t))})}function zt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function W(a){const t={},r=a.split(";");for(const e of r){const[o,n]=e.split(":");if(!o||n===void 0)break;const v=zt(o.trim());t[v]=n.trim()}return t}const Ht=a=>a;function Pt(a,t,r,e){var o=(a&gt)!==0,n="in",v,d=t.inert,s=t.style.overflow,i,g;function w(){var p=Z,_=Y;z(null),H(null);try{return v??(v=r()(t,(e==null?void 0:e())??{},{direction:n}))}finally{z(p),H(_)}}var u={is_global:o,in(){t.inert=d,i==null||i.abort(),X(t,"introstart"),i=rt(t,w(),g,1,()=>{X(t,"introend"),i==null||i.abort(),i=v=void 0,t.style.overflow=s})},out(p){{p==null||p(),v=void 0;return}},stop:()=>{i==null||i.abort()}},m=Y;if((m.transitions??(m.transitions=[])).push(u),bt){var f=o;if(!f){for(var c=m.parent;c&&c.f&mt;)for(;(c=c.parent)&&!(c.f&dt););f=!c||(c.f&pt)!==0}f&&_t(()=>{ht(()=>u.in())})}}function rt(a,t,r,e,o){if(wt(t)){var n,v=!1;return yt(()=>{if(!v){var c=t({direction:"in"});n=rt(a,c,r,e,o)}}),{abort:()=>{v=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(!(t!=null&&t.duration))return o(),{abort:F,deactivate:F,reset:F,t:()=>e};const{delay:d=0,css:s,tick:i,easing:g=Ht}=t;var w=[];if(i&&i(0,1),s){var u=W(s(0,1));w.push(u,u)}var m=()=>1-e,f=a.animate(w,{duration:d});return f.onfinish=()=>{var c=1-e,p=e-c,_=t.duration*Math.abs(p),N=[];if(_>0){var C=!1;if(s)for(var M=Math.ceil(_/16.666666666666668),k=0;k<=M;k+=1){var $=c+p*g(k/M),h=W(s($,1-$));N.push(h),C||(C=h.overflow==="hidden")}C&&(a.style.overflow="hidden"),m=()=>{var T=f.currentTime;return c+p*g(T/_)},i&&Dt(()=>{if(f.playState!=="running")return!1;var T=m();return i(T,1-T),!0})}f=a.animate(N,{duration:_,fill:"forwards"}),f.onfinish=()=>{m=()=>e,i==null||i(e,1-e),o()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=F)},deactivate:()=>{o=F},reset:()=>{},t:()=>m()}}function Yt(a,{speed:t=1}={}){const r=a.textContent;if(!(a.childNodes.length===1&&a.childNodes[0].nodeType===Node.TEXT_NODE&&r!==null))throw new Error("This transition only works on elements with a single text node child");return{duration:r.length/(t*.01),tick(n){const v=Math.trunc(r.length*n);a.textContent=r.slice(0,v)}}}var qt=I('<nav class="nav"><a class="nav__link" aria-label="К содержанию" title="К содержанию"><svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M11.8 16.4 22 8.8l-9-4.6-11 6.7v3l9.8 5.8L22 12.2v-.4l-10.2 7.6-9.4-5.7v-2.6l9.4 5.3z"></path></svg></a></nav>');function et(a,t){let r=tt(t,"isAmp",3,!1);var e=qt(),o=S(e);x(e),D(()=>R(o,"href",`${(r()?"/amp":"")??""}/soderzhanie`)),A(a,e)}var jt=I('<h1 class="hero__title"><span></span></h1>'),Jt=I('<section class="hero"><!> <!></section>');function Kt(a,t){G(t,!0);let r=tt(t,"isAmp",3,!1),e=St(!1);xt(function(){Ot(e,!0)});var o=Jt(),n=S(o);{var v=s=>{var i=jt(),g=S(i);g.textContent=V,x(i),Pt(1,g,()=>Yt),A(s,i)};L(n,s=>{l(e)&&s(v)})}var d=y(n,2);et(d,{get isAmp(){return r()}}),x(o),A(a,o),Q()}function Ut(a){return a.replace(/\t|\n+|<!--.*?-->/g,"")}const it=99782506;let O;function Xt(a){Wt(),O&&O(it,"hit",a)}function Wt(){O||(O=(window||{}).ym,O&&O(it,"init",{accurateTrackBounce:!0,clickmap:!0,defer:!0,trackLinks:!0,webvisor:!0}))}var Zt=I('<meta name="yandex-verification" content="cb168677250fc238"> <meta name="google-site-verification" content="yBKIbN0igd4HXvH8JwDMU0fzuShqlRHBT0OmI0nZgZ8">',1),Gt=I('<link rel="amphtml">'),Qt=I('<meta name="description"> <link rel="canonical"> <meta property="og:title"> <meta property="og:description"> <meta property="og:url"> <!> <!>',1),Vt=I('<main class="main"><section class="main__section"><h1> </h1> <!> <!></section> <!></main>');function ua(a,t){G(t,!0);let r=B(()=>E.params.id?`/${E.params.id}`:E.route.id.replace("/amp","")),e=B(()=>It[`${l(r)}`]||""),o=B(()=>`${P}${E.url.pathname}`),n=B(()=>Mt[`${l(r)}`]||`Современная бытовая сказка о деде Андрее и бабке Тане «${l(e)}».`),v=B(()=>E.params.id?E.data[l(r)]:""),d=B(()=>{var u;return((u=E.route.id)==null?void 0:u.includes("/amp"))||!1});Bt(function(){Xt()});var s=Ct();Et(u=>{var m=Qt(),f=K(m),c=y(f,2),p=y(c,2),_=y(p,2),N=y(_,2),C=y(N,2);{var M=h=>{var T=Zt();Tt(2),A(h,T)};L(C,h=>{l(r)==="/"&&h(M)})}var k=y(C,2);{var $=h=>{var T=Gt();D(()=>R(T,"href",`${P}/amp${E.url.pathname??""}`)),A(h,T)};L(k,h=>{l(d)||h($)})}D(h=>{kt.title=h,R(f,"content",l(n)),R(c,"href",`${P}${l(r)??""}`),R(p,"content",l(e)),R(_,"content",l(n)),R(N,"content",l(o))},[()=>[V,l(e)].join(". ")]),A(u,m)});var i=K(s);{var g=u=>{var m=Vt(),f=S(m),c=S(f),p=S(c,!0);x(c);var _=y(c,2);Lt(_,()=>Ut(l(v)));var N=y(_,2);Rt(N,()=>t.children),x(f);var C=y(f,2);{var M=k=>{et(k,{get isAmp(){return l(d)}})};L(C,k=>{l(r)!=="/soderzhanie"&&k(M)})}x(m),D(()=>At(p,l(e))),A(u,m)},w=u=>{Kt(u,{get isAmp(){return l(d)}})};L(i,u=>{l(e)?u(g):u(w,!1)})}A(a,s),Q()}export{ua as component};
