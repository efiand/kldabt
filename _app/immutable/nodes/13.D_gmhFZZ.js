import"../chunks/disclose-version.Bg9kRutz.js";import{S as G,b as J,h as k,s as M,a as P,T as Q,X as W,Y as K,H as j,r as S,c as R,f as T,Z as ee,_ as w,d as U,e as Z,p as ae,x as L,$ as re,a0 as te,a1 as se,a2 as ne,o as ie,a3 as le,a4 as fe,a5 as oe,a6 as ue,a7 as ve,a8 as ce,i as _e,j as pe,l as N,k as b,t as de,a9 as Y}from"../chunks/runtime.DA59O3ca.js";import{s as he}from"../chunks/render.C4bUBmYz.js";import{i as ge,m as ye,s as O}from"../chunks/sources.DzreO0Q7.js";import{a as V,t as $}from"../chunks/template.C1FOTr2D.js";import{c as Ee,t as ke}from"../chunks/constants.Aw1tmvF7.js";function me(r,e){return e}function xe(r,e,a,n){for(var o=[],i=e.length,u=0;u<i;u++)re(e[u].e,o,!0);var p=i>0&&o.length===0&&a!==null;if(p){var _=a.parentNode;te(_),_.append(a),n.clear(),m(r,e[0].prev,e[i-1].next)}se(o,()=>{for(var v=0;v<i;v++){var d=e[v];p||(n.delete(d.k),m(r,d.prev,d.next)),ne(d.e,!p)}})}function Ae(r,e,a,n,o,i=null){var u=r,p={flags:e,items:new Map,first:null};{var _=r;u=k?M(Q(_)):_.appendChild(G())}k&&P();var v=null,d=!1;J(()=>{var t=a(),c=W(t)?t:t==null?[]:K(t),s=c.length;if(d&&s===0)return;d=s===0;let l=!1;if(k){var g=u.data===j;g!==(s===0)&&(u=S(),M(u),R(!1),l=!0)}if(k){for(var x=null,y,f=0;f<s;f++){if(T.nodeType===8&&T.data===ee){u=T,l=!0,R(!1);break}var h=c[f],I=n(h,f);y=q(T,p,x,null,h,I,f,o,e),p.items.set(I,y),x=y}s>0&&M(S())}if(!k){var A=ie;Te(c,p,u,o,e,(A.f&w)!==0,n)}i!==null&&(s===0?v?U(v):v=Z(()=>i(u)):v!==null&&ae(v,()=>{v=null})),l&&R(!0)}),k&&(u=T)}function Te(r,e,a,n,o,i,u,p){var _=r.length,v=e.items,d=e.first,t=d,c,s=null,l=[],g=[],x,y,f,h;for(h=0;h<_;h+=1){if(x=r[h],y=u(x,h),f=v.get(y),f===void 0){var I=t?t.e.nodes_start:a;s=q(I,e,s,s===null?e.first:s.next,x,y,h,n,o),v.set(y,s),l=[],g=[],t=s.next;continue}if(Ie(f,x,h),f.e.f&w&&U(f.e),f!==t){if(c!==void 0&&c.has(f)){if(l.length<g.length){var A=g[0],E;s=A.prev;var D=l[0],C=l[l.length-1];for(E=0;E<l.length;E+=1)X(l[E],A,a);for(E=0;E<g.length;E+=1)c.delete(g[E]);m(e,D.prev,C.next),m(e,s,D),m(e,C,A),t=A,s=C,h-=1,l=[],g=[]}else c.delete(f),X(f,t,a),m(e,f.prev,f.next),m(e,f,s===null?e.first:s.next),m(e,s,f),s=f;continue}for(l=[],g=[];t!==null&&t.k!==y;)(i||!(t.e.f&w))&&(c??(c=new Set)).add(t),g.push(t),t=t.next;if(t===null)continue;f=t}l.push(f),s=f,t=f.next}if(t!==null||c!==void 0){for(var H=c===void 0?[]:K(c);t!==null;)(i||!(t.e.f&w))&&H.push(t),t=t.next;var z=H.length;if(z>0){var F=_===0?a:null;xe(e,H,F,v)}}L.first=e.first&&e.first.e,L.last=s&&s.e}function Ie(r,e,a,n){ge(r.v,e),r.i=a}function q(r,e,a,n,o,i,u,p,_,v){var d=(_&fe)!==0,t=(_&oe)===0,c=d?t?ye(o):O(o):o,s=_&le?O(u):u,l={i:s,v:c,k:i,a:null,e:null,prev:a,next:n};try{return l.e=Z(()=>p(r,c,s),k),l.e.prev=a&&a.e,l.e.next=n&&n.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),n!==null&&(n.prev=l,n.e.prev=l.e),l}finally{}}function X(r,e,a){for(var n=r.next?r.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=r.e.nodes_start;i!==n;){var u=ue(i);o.before(i),i=u}}function m(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ne(r,e,a,n){var o=r.__attributes??(r.__attributes={});k&&(o[e]=r.getAttribute(e),r.nodeName==="LINK")||o[e]!==(o[e]=a)&&(a==null?r.removeAttribute(e):typeof a!="string"&&we(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var B=new Map;function we(r){var e=B.get(r.nodeName);if(e)return e;B.set(r.nodeName,e=[]);for(var a,n=r,o=Element.prototype;o!==n;){a=ce(n);for(var i in a)a[i].set&&e.push(i);n=ve(n)}return e}var Ce=$('<li class="svelte-1nukyyk"><a class="svelte-1nukyyk"><span class="svelte-1nukyyk"> </span></a></li>'),He=$('<ol class="svelte-1nukyyk"></ol>');function Ye(r,e){pe(e,!0);var a=He();Ae(a,21,()=>Ee,me,(n,o)=>{var i=Ce(),u=b(i),p=b(u),_=b(p,!0);N(p),N(u),N(i),de(()=>{Ne(u,"href",Y(o)),he(_,ke[Y(o)])}),V(n,i)}),N(a),V(r,a),_e()}export{Ye as component};