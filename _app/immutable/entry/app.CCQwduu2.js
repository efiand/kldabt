const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CcqKtNuf.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.CPBXKBJz.js","../chunks/render.BGpIV7s5.js","../chunks/template.CtK1zXCh.js","../chunks/index-client.C3sTe_e8.js","../chunks/store.DIfPeomW.js","../chunks/stores.DS_5T33d.js","../chunks/entry.sFcDW6KS.js","../chunks/constants.Aw1tmvF7.js","../assets/0.RFWs8ihU.css","../nodes/1.bM_GcM1U.js","../nodes/2.RBcn971s.js","../nodes/3.BBz1FRjT.js","../nodes/4.CeAxF_WK.js","../nodes/5.HoZ9UDXU.js","../nodes/6.CGVHqKNK.js","../nodes/7.CVqmXNfi.js","../nodes/8.BogNCucb.js","../nodes/9.BapJSRlP.js","../nodes/10.rMNrEujt.js","../nodes/11.w5YhbXcH.js","../nodes/12.BRnvf6Cm.js","../nodes/13.J5Ow-_9k.js","../assets/13.CnQXd56-.css","../nodes/14.C5_IOyIA.js","../nodes/15.YDJRZk7c.js","../nodes/16.FfvnUStP.js"])))=>i.map(i=>d[i]);
var X=t=>{throw TypeError(t)};var p=(t,e,s)=>e.has(t)||X("Cannot "+s);var b=(t,e,s)=>(p(t,e,"read from private field"),s?s.call(t):e.get(t)),U=(t,e,s)=>e.has(t)?X("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),M=(t,e,s,d)=>(p(t,e,"write to private field"),d?d.call(t,s):e.set(t,s),s);import{am as z,an as ue,ao as fe,ap as le,U as k,aq as j,g as E,i as J,ar as ce,R as _e,C as de,k as $,m as ve,q as me,E as he,y as ge,l as ye,z as Ee,as as Pe,at as be,u as Q,au as Re,av as Oe,aw as ke,aa as Ie,a0 as we,ax as Ae,ae as ee,ay as Te,az as Le,aA as De,aB as ne,aC as q,aD as Se,aE as xe,ac as Ve,aF as Ce,B as ze,f as N,p as Be,a as Ne,s as je,c as qe,r as Fe,aG as Ue,t as Me}from"../chunks/runtime.CPBXKBJz.js";import{b as S,a as I,m as se,h as Ye,c as Ge,u as Ke,d as Y,s as Ze}from"../chunks/render.BGpIV7s5.js";import"../chunks/disclose-version.Bg9kRutz.js";import{o as He,i as G}from"../chunks/index-client.C3sTe_e8.js";import{a as V,t as ie,c as K,d as We}from"../chunks/template.CtK1zXCh.js";import{c as Je}from"../chunks/store.DIfPeomW.js";function x(t,e=null,s){if(typeof t!="object"||t===null||z in t)return t;const d=_e(t);if(d!==ue&&d!==fe)return t;var a=new Map,_=de(t),o=S(0);_&&a.set("length",S(t.length));var i;return new Proxy(t,{defineProperty(u,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&le();var f=a.get(r);return f===void 0?(f=S(n.value),a.set(r,f)):I(f,x(n.value,i)),!0},deleteProperty(u,r){var n=a.get(r);if(n===void 0)r in u&&a.set(r,S(k));else{if(_&&typeof r=="string"){var f=a.get("length"),l=Number(r);Number.isInteger(l)&&l<f.v&&I(f,l)}I(n,k),te(o)}return!0},get(u,r,n){var m;if(r===z)return t;var f=a.get(r),l=r in u;if(f===void 0&&(!l||(m=j(u,r))!=null&&m.writable)&&(f=S(x(l?u[r]:k,i)),a.set(r,f)),f!==void 0){var c=E(f);return c===k?void 0:c}return Reflect.get(u,r,n)},getOwnPropertyDescriptor(u,r){var n=Reflect.getOwnPropertyDescriptor(u,r);if(n&&"value"in n){var f=a.get(r);f&&(n.value=E(f))}else if(n===void 0){var l=a.get(r),c=l==null?void 0:l.v;if(l!==void 0&&c!==k)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return n},has(u,r){var c;if(r===z)return!0;var n=a.get(r),f=n!==void 0&&n.v!==k||Reflect.has(u,r);if(n!==void 0||J!==null&&(!f||(c=j(u,r))!=null&&c.writable)){n===void 0&&(n=S(f?x(u[r],i):k),a.set(r,n));var l=E(n);if(l===k)return!1}return f},set(u,r,n,f){var O;var l=a.get(r),c=r in u;if(_&&r==="length")for(var m=n;m<l.v;m+=1){var v=a.get(m+"");v!==void 0?I(v,k):m in u&&(v=S(k),a.set(m+"",v))}l===void 0?(!c||(O=j(u,r))!=null&&O.writable)&&(l=S(void 0),I(l,x(n,i)),a.set(r,l)):(c=l.v!==k,I(l,x(n,i)));var h=Reflect.getOwnPropertyDescriptor(u,r);if(h!=null&&h.set&&h.set.call(f,n),!c){if(_&&typeof r=="string"){var A=a.get("length"),R=Number(r);Number.isInteger(R)&&R>=A.v&&I(A,R+1)}te(o)}return!0},ownKeys(u){E(o);var r=Reflect.ownKeys(u).filter(l=>{var c=a.get(l);return c===void 0||c.v!==k});for(var[n,f]of a)f.v!==k&&!(n in u)&&r.push(n);return r},setPrototypeOf(){ce()}})}function te(t,e=1){I(t,t.v+e)}function Z(t,e,s){$&&ve();var d=t,a,_;me(()=>{a!==(a=e())&&(_&&(Ee(_),_=null),a&&(_=ge(()=>s(d,a))))},he),$&&(d=ye)}function re(t,e){return t===e||(t==null?void 0:t[z])===e}function H(t={},e,s,d){return Pe(()=>{var a,_;return be(()=>{a=_,_=[],Q(()=>{t!==s(..._)&&(e(t,..._),a&&re(s(...a),t)&&e(null,...a))})}),()=>{Re(()=>{_&&re(s(..._),t)&&e(null,..._)})}}),t}function Qe(t){for(var e=J,s=J;e!==null&&!(e.f&(we|Ae));)e=e.parent;try{return ee(e),t()}finally{ee(s)}}function W(t,e,s,d){var F;var a=(s&Te)!==0,_=!Le,o=(s&De)!==0,i=(s&Se)!==0,u=!1,r;o?[r,u]=Je(()=>t[e]):r=t[e];var n=z in t||ne in t,f=((F=j(t,e))==null?void 0:F.set)??(n&&o&&e in t?P=>t[e]=P:void 0),l=d,c=!0,m=!1,v=()=>(m=!0,c&&(c=!1,i?l=Q(d):l=d),l);r===void 0&&d!==void 0&&(f&&_&&Oe(),r=v(),f&&f(r));var h;if(h=()=>{var P=t[e];return P===void 0?v():(c=!0,m=!1,P)},!(s&ke))return h;if(f){var A=t.$$legacy;return function(P,D){return arguments.length>0?((!D||A||u)&&f(D?h():P),P):h()}}var R=!1,O=!1,T=se(r),g=Qe(()=>q(()=>{var P=h(),D=E(T);return R?(R=!1,O=!0,D):(O=!1,T.v=P)}));return a||(g.equals=Ie),function(P,D){if(arguments.length>0){const C=D?E(g):o?x(P):P;return g.equals(C)||(R=!0,I(T,C),m&&l!==void 0&&(l=C),Q(()=>E(g))),P}return E(g)}}function Xe(t){return class extends pe{constructor(e){super({component:t,...e})}}}var L,w;class pe{constructor(e){U(this,L);U(this,w);var _;var s=new Map,d=(o,i)=>{var u=se(i);return s.set(o,u),u};const a=new Proxy({...e.props||{},$$events:{}},{get(o,i){return E(s.get(i)??d(i,Reflect.get(o,i)))},has(o,i){return i===ne?!0:(E(s.get(i)??d(i,Reflect.get(o,i))),Reflect.has(o,i))},set(o,i,u){return I(s.get(i)??d(i,u),u),Reflect.set(o,i,u)}});M(this,w,(e.hydrate?Ye:Ge)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((_=e==null?void 0:e.props)!=null&&_.$$host)||e.sync===!1)&&xe(),M(this,L,a.$$events);for(const o of Object.keys(b(this,w)))o==="$set"||o==="$destroy"||o==="$on"||Ve(this,o,{get(){return b(this,w)[o]},set(i){b(this,w)[o]=i},enumerable:!0});b(this,w).$set=o=>{Object.assign(a,o)},b(this,w).$destroy=()=>{Ke(b(this,w))}}$set(e){b(this,w).$set(e)}$on(e,s){b(this,L)[e]=b(this,L)[e]||[];const d=(...a)=>s.call(this,...a);return b(this,L)[e].push(d),()=>{b(this,L)[e]=b(this,L)[e].filter(a=>a!==d)}}$destroy(){b(this,w).$destroy()}}L=new WeakMap,w=new WeakMap;const $e="modulepreload",et=function(t,e){return new URL(t,e).href},ae={},y=function(e,s,d){let a=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(s.map(r=>{if(r=et(r,d),r in ae)return;ae[r]=!0;const n=r.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!d)for(let m=o.length-1;m>=0;m--){const v=o[m];if(v.href===r&&(!n||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":$e,n||(c.as="script"),c.crossOrigin="",c.href=r,u&&c.setAttribute("nonce",u),document.head.appendChild(c),n)return new Promise((m,v)=>{c.addEventListener("load",m),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function _(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return a.then(o=>{for(const i of o||[])i.status==="rejected"&&_(i.reason);return e().catch(_)})},dt={};var tt=ie('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),rt=ie("<!> <!>",1);function at(t,e){Ne(e,!0);let s=W(e,"components",23,()=>[]),d=W(e,"data_0",3,null),a=W(e,"data_1",3,null);Ce(()=>e.stores.page.set(e.page)),ze(()=>{e.stores,e.page,e.constructors,s(),e.form,d(),a(),e.stores.page.notify()});let _=Y(!1),o=Y(!1),i=Y(null);He(()=>{const v=e.stores.page.subscribe(()=>{E(_)&&(I(o,!0),Ue().then(()=>{I(i,x(document.title||"untitled page"))}))});return I(_,!0),v});const u=q(()=>e.constructors[1]);var r=rt(),n=N(r);{var f=v=>{var h=K();const A=q(()=>e.constructors[0]);var R=N(h);Z(R,()=>E(A),(O,T)=>{H(T(O,{get data(){return d()},get form(){return e.form},children:(g,F)=>{var P=K(),D=N(P);Z(D,()=>E(u),(C,oe)=>{H(oe(C,{get data(){return a()},get form(){return e.form}}),B=>s()[1]=B,()=>{var B;return(B=s())==null?void 0:B[1]})}),V(g,P)},$$slots:{default:!0}}),g=>s()[0]=g,()=>{var g;return(g=s())==null?void 0:g[0]})}),V(v,h)},l=v=>{var h=K();const A=q(()=>e.constructors[0]);var R=N(h);Z(R,()=>E(A),(O,T)=>{H(T(O,{get data(){return d()},get form(){return e.form}}),g=>s()[0]=g,()=>{var g;return(g=s())==null?void 0:g[0]})}),V(v,h)};G(n,v=>{e.constructors[1]?v(f):v(l,!1)})}var c=je(n,2);{var m=v=>{var h=tt(),A=qe(h);{var R=O=>{var T=We();Me(()=>Ze(T,E(i))),V(O,T)};G(A,O=>{E(o)&&O(R)})}Fe(h),V(v,h)};G(c,v=>{E(_)&&v(m)})}V(t,r),Be()}const vt=Xe(at),mt=[()=>y(()=>import("../nodes/0.CcqKtNuf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>y(()=>import("../nodes/1.bM_GcM1U.js"),__vite__mapDeps([11,1,2,3,4,6,7,8]),import.meta.url),()=>y(()=>import("../nodes/2.RBcn971s.js"),__vite__mapDeps([12,1]),import.meta.url),()=>y(()=>import("../nodes/3.BBz1FRjT.js"),__vite__mapDeps([13,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/4.CeAxF_WK.js"),__vite__mapDeps([14,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/5.HoZ9UDXU.js"),__vite__mapDeps([15,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/6.CGVHqKNK.js"),__vite__mapDeps([16,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/7.CVqmXNfi.js"),__vite__mapDeps([17,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/8.BogNCucb.js"),__vite__mapDeps([18,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/9.BapJSRlP.js"),__vite__mapDeps([19,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/10.rMNrEujt.js"),__vite__mapDeps([20,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/11.w5YhbXcH.js"),__vite__mapDeps([21,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/12.BRnvf6Cm.js"),__vite__mapDeps([22,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/13.J5Ow-_9k.js"),__vite__mapDeps([23,1,2,3,4,9,24]),import.meta.url),()=>y(()=>import("../nodes/14.C5_IOyIA.js"),__vite__mapDeps([25,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/15.YDJRZk7c.js"),__vite__mapDeps([26,1,2,4]),import.meta.url),()=>y(()=>import("../nodes/16.FfvnUStP.js"),__vite__mapDeps([27,1,2,4]),import.meta.url)],ht=[],gt={"/":[2],"/kasha":[3],"/kozlodoev":[4],"/nesostoyavshayasya-svadba":[5],"/semejnaya-ssora":[6],"/skazka-2":[7],"/skazka-3":[8],"/skazka-4":[9],"/skazka-o-byke":[10],"/skazka-o-korole-andree-i-koroleve-tane":[11],"/skazka-o-porosyonke":[12],"/soderzhanie":[13],"/v-orkestre":[14],"/v-shkole":[15],"/vodka-i-eyo-posledstviya":[16]},nt={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},st=Object.fromEntries(Object.entries(nt.transport).map(([t,e])=>[t,e.decode])),yt=(t,e)=>st[t](e);export{yt as decode,st as decoders,gt as dictionary,nt as hooks,dt as matchers,mt as nodes,vt as root,ht as server_loads};