import{V as f,W as i,ab as v,A as u,ac as p,ad as h,h as d,f as s,a as E,s as T}from"./DXHkmHUF.js";function g(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=u;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,c=!r.startsWith("<!>");return()=>{if(d)return a(s,null),s;n===void 0&&(n=g(c?r:"<!>"+r),e||(n=i(n)));var o=_||v?document.importNode(n,!0):n.cloneNode(!0);if(e){var m=i(o),l=o.lastChild;a(m,l)}else a(o,o);return o}}function M(r=""){if(!d){var t=f(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=f()),T(e)),a(e,e),e}function b(){if(d)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=f();return r.append(t,e),a(t,e),r}function A(r,t){if(d){u.nodes_end=s,E();return}r!==null&&r.before(t)}export{A as a,a as b,b as c,M as d,g as e,y as t};
