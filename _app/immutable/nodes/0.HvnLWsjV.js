import"../chunks/CWj6FrbW.js";import{au as D,av as Y,u as G,C as P,b as nt,h as q,a as j,f as st,g as J,a7 as ot,az as ft,ay as ct,s as vt,X as lt,q as ut,E as mt,B as dt,aI as pt,aC as _t,V as ht,aJ as gt,aK as wt,aE as yt,o as L,l as S,m as F,t as z,i as V,Y as l,n as y,k as W,j as K,ao as O,aL as kt,aM as Tt}from"../chunks/Bvw3pLdr.js";import{a as Et,b as bt,s as At}from"../chunks/CY2pcBI8.js";import{i as $}from"../chunks/3qRZHF70.js";import{b as U,e as Nt,t as R,a as A,c as Ct}from"../chunks/_2I6Oxza.js";import{s as Mt}from"../chunks/CzhuU24U.js";import{s as M,P as Q,B as H,T as Rt,D as It}from"../chunks/Cst458dh.js";import{a as Ot}from"../chunks/CZk4hhkA.js";import{p as b}from"../chunks/CCMq9Mxa.js";import{a as Bt,b as St}from"../chunks/CEP4FDvv.js";import{p as tt}from"../chunks/CfbH13bv.js";import{o as Ft}from"../chunks/DqmSUKzO.js";function Lt(a){var t=G,r=P;D(null),Y(null);try{return a()}finally{D(t),Y(r)}}function $t(a,t,r,e,o){var n=a,v="",d;nt(()=>{if(v===(v=t()??"")){q&&j();return}d!==void 0&&(ut(d),d=void 0),v!==""&&(d=st(()=>{if(q){J.data;for(var s=j(),i=s;s!==null&&(s.nodeType!==8||s.data!=="");)i=s,s=ot(s);if(s===null)throw ft(),ct;U(J,i),n=vt(s);return}var g=v+"",w=Nt(g);U(lt(w),w.lastChild),n.before(w)}))})}const xt=()=>performance.now(),E={tick:a=>requestAnimationFrame(a),now:()=>xt(),tasks:new Set};function at(){const a=E.now();E.tasks.forEach(t=>{t.c(a)||(E.tasks.delete(t),t.f())}),E.tasks.size!==0&&E.tick(at)}function zt(a){let t;return E.tasks.size===0&&E.tick(at),{promise:new Promise(r=>{E.tasks.add(t={c:a,f:r})}),abort(){E.tasks.delete(t)}}}function X(a,t){Lt(()=>{a.dispatchEvent(new CustomEvent(t))})}function Dt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Z(a){const t={},r=a.split(";");for(const e of r){const[o,n]=e.split(":");if(!o||n===void 0)break;const v=Dt(o.trim());t[v]=n.trim()}return t}const Yt=a=>a;function Ht(a,t,r,e){var o=(a&gt)!==0,n="in",v,d=t.inert,s=t.style.overflow,i,g;function w(){var p=G,_=P;D(null),Y(null);try{return v??(v=r()(t,(e==null?void 0:e())??{},{direction:n}))}finally{D(p),Y(_)}}var u={is_global:o,in(){t.inert=d,i==null||i.abort(),X(t,"introstart"),i=rt(t,w(),g,1,()=>{X(t,"introend"),i==null||i.abort(),i=v=void 0,t.style.overflow=s})},out(p){{p==null||p(),v=void 0;return}},stop:()=>{i==null||i.abort()}},m=P;if((m.transitions??(m.transitions=[])).push(u),Et){var f=o;if(!f){for(var c=m.parent;c&&(c.f&mt)!==0;)for(;(c=c.parent)&&(c.f&dt)===0;);f=!c||(c.f&pt)!==0}f&&_t(()=>{ht(()=>u.in())})}}function rt(a,t,r,e,o){if(wt(t)){var n,v=!1;return yt(()=>{if(!v){var c=t({direction:"in"});n=rt(a,c,r,e,o)}}),{abort:()=>{v=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(!(t!=null&&t.duration))return o(),{abort:L,deactivate:L,reset:L,t:()=>e};const{delay:d=0,css:s,tick:i,easing:g=Yt}=t;var w=[];if(i&&i(0,1),s){var u=Z(s(0,1));w.push(u,u)}var m=()=>1-e,f=a.animate(w,{duration:d});return f.onfinish=()=>{var c=1-e,p=e-c,_=t.duration*Math.abs(p),N=[];if(_>0){var C=!1;if(s)for(var I=Math.ceil(_/16.666666666666668),k=0;k<=I;k+=1){var x=c+p*g(k/I),h=Z(s(x,1-x));N.push(h),C||(C=h.overflow==="hidden")}C&&(a.style.overflow="hidden"),m=()=>{var T=f.currentTime;return c+p*g(T/_)},i&&zt(()=>{if(f.playState!=="running")return!1;var T=m();return i(T,1-T),!0})}f=a.animate(N,{duration:_,fill:"forwards"}),f.onfinish=()=>{m=()=>e,i==null||i(e,1-e),o()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=L)},deactivate:()=>{o=L},reset:()=>{},t:()=>m()}}function Pt(a,{speed:t=1}={}){const r=a.textContent;if(!(a.childNodes.length===1&&a.childNodes[0].nodeType===Node.TEXT_NODE&&r!==null))throw new Error("This transition only works on elements with a single text node child");return{duration:r.length/(t*.01),tick(n){const v=Math.trunc(r.length*n);a.textContent=r.slice(0,v)}}}var qt=R('<nav class="nav"><a class="nav__link" aria-label="К содержанию" title="К содержанию"><svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M11.8 16.4 22 8.8l-9-4.6-11 6.7v3l9.8 5.8L22 12.2v-.4l-10.2 7.6-9.4-5.7v-2.6l9.4 5.3z"></path></svg></a></nav>');function et(a,t){let r=tt(t,"isAmp",3,!1);var e=qt(),o=S(e);F(e),z(()=>M(o,"href",`${(r()?"/amp":"")??""}/soderzhanie`)),A(a,e)}var jt=R('<h1 class="hero__title"><span></span></h1>'),Jt=R('<section class="hero"><!> <!></section>');function Kt(a,t){V(t,!0);let r=tt(t,"isAmp",3,!1),e=St(!1);Ft(function(){Bt(e,!0)});var o=Jt(),n=S(o);{var v=s=>{var i=jt(),g=S(i);g.textContent=Q,F(i),Ht(1,g,()=>Pt),A(s,i)};$(n,s=>{l(e)&&s(v)})}var d=y(n,2);et(d,{get isAmp(){return r()}}),F(o),A(a,o),W()}function Ut(a){return a.replace(/\t|\n+|<!--.*?-->/g,"")}const it=99782506;let B;function Xt(a){Zt(),B&&B(it,"hit",a)}function Zt(){B||(B=(window||{}).ym,B&&B(it,"init",{accurateTrackBounce:!0,clickmap:!0,defer:!0,trackLinks:!0,webvisor:!0}))}var Gt=R('<meta name="yandex-verification" content="cb168677250fc238"> <meta name="google-site-verification" content="yBKIbN0igd4HXvH8JwDMU0fzuShqlRHBT0OmI0nZgZ8">',1),Vt=R('<link rel="amphtml">'),Wt=R('<meta name="description"> <link rel="canonical"> <meta property="og:title"> <meta property="og:description"> <meta property="og:url"> <!> <!>',1),Qt=R('<main class="main"><section class="main__section"><h1> </h1> <!> <!></section> <!></main>');function ua(a,t){V(t,!0);let r=O(()=>b.params.id?`/${b.params.id}`:b.route.id.replace("/amp","")),e=O(()=>Rt[`${l(r)}`]||""),o=O(()=>`${H}${b.url.pathname}`),n=O(()=>It[`${l(r)}`]||`Современная бытовая сказка о деде Андрее и бабке Тане «${l(e)}».`),v=O(()=>b.params.id?b.data[l(r)]:""),d=O(()=>{var u;return((u=b.route.id)==null?void 0:u.includes("/amp"))||!1});Ot(function(){Xt()});var s=Ct();bt(u=>{var m=Wt(),f=K(m),c=y(f,2),p=y(c,2),_=y(p,2),N=y(_,2),C=y(N,2);{var I=h=>{var T=Gt();Tt(2),A(h,T)};$(C,h=>{l(r)==="/"&&h(I)})}var k=y(C,2);{var x=h=>{var T=Vt();z(()=>M(T,"href",`${H}/amp${b.url.pathname??""}`)),A(h,T)};$(k,h=>{l(d)||h(x)})}z(h=>{kt.title=h,M(f,"content",l(n)),M(c,"href",`${H}${l(r)??""}`),M(p,"content",l(e)),M(_,"content",l(n)),M(N,"content",l(o))},[()=>[Q,l(e)].join(". ")]),A(u,m)});var i=K(s);{var g=u=>{var m=Qt(),f=S(m),c=S(f),p=S(c,!0);F(c);var _=y(c,2);$t(_,()=>Ut(l(v)));var N=y(_,2);Mt(N,()=>t.children),F(f);var C=y(f,2);{var I=k=>{et(k,{get isAmp(){return l(d)}})};$(C,k=>{l(r)!=="/soderzhanie"&&k(I)})}F(m),z(()=>At(p,l(e))),A(u,m)},w=u=>{Kt(u,{get isAmp(){return l(d)}})};$(i,u=>{l(e)?u(g):u(w,!1)})}A(a,s),W()}export{ua as component};
