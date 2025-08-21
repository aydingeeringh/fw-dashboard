const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/chunks/leaflet-src.BOAjM8CE.js","_app/immutable/chunks/VennDiagram.svelte_svelte_type_style_lang.CkZ_LV8G.js","_app/immutable/chunks/entry.C8PsA17A.js","_app/immutable/chunks/scheduler.ByCPKIuY.js","_app/immutable/chunks/index.ClPuRMaH.js","_app/immutable/chunks/preload-helper.D7HrI6pR.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/assets/VennDiagram.Bcm8uG87.css"])))=>i.map(i=>d[i]);
var vi=Object.defineProperty;var dr=n=>{throw TypeError(n)};var Ri=(n,e,r)=>e in n?vi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var Zt=(n,e,r)=>Ri(n,typeof e!="symbol"?e+"":e,r),_r=(n,e,r)=>e.has(n)||dr("Cannot "+r);var X=(n,e,r)=>(_r(n,e,"read from private field"),r?r.call(n):e.get(n)),Me=(n,e,r)=>e.has(n)?dr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r),ze=(n,e,r,t)=>(_r(n,e,"write to private field"),t?t.call(n,r):e.set(n,r),r);import{a4 as tr,a5 as ai,a as ve,y as Ee,m as T,k as E,a6 as Ce,z as Ve,a7 as pe,a8 as et,J as St,c as At,e as H,d as D,h as re,a9 as bt,E as rr,u as Ot,q as vt,r as Rt,D as oe,o as Nt,G as ir,aa as si,b as W,j as F,l as M,ab as Tt,ac as Wt,A as ke,B as Le,n as q,C as Ue,w as Ae,P as Ke,K as gr,L as hr,F as Ti,t as rt,I as it,H as nr,ad as Mi,ae as ki}from"../chunks/scheduler.ByCPKIuY.js";import{S as Re,i as Te,g as _e,t as O,c as ge,a as p,k as ui,b as Y,d as Z,m as J,e as j}from"../chunks/index.ClPuRMaH.js";import{m as Li,w as wt,p as Er,r as Jt,x as jt,J as pr,K as br,L as yi,t as Vi,M as Pt,q as Ci,A as Qt,y as Kt,v as Ii,z as We,B as st,F as Nr,G as Dt,h as Fe,N as ci,O as Hi,Q as gt,R as Di,S as fi,U as we,V as mi,W as wi,X as Pi,Y as ht,Z as Sr,g as Gt,_ as di,$ as Bi,a0 as Wi,a1 as Fi,a2 as Gi,a3 as zi,a4 as Xi,a5 as Ui,a6 as Ar,D as qi,a7 as Or,a8 as Yi,a9 as kt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CkZ_LV8G.js";import{w as $e,d as Ft,r as xt}from"../chunks/entry.C8PsA17A.js";import{h as Ne,p as Zi}from"../chunks/button.z-QNlCAg.js";import{H as Ji,D as Et,B as _i,a as ji,Q as tt}from"../chunks/QueryViewer.CV3bM2OH.js";import{p as Qi}from"../chunks/stores.0T_rOTg-.js";import{t as Ki,o as xi,g as $i,c as en,r as tn,b as rn,d as nn}from"../chunks/updater.PxW6UabA.js";import{h as vr,u as on}from"../chunks/await_block.LsyRshgW.js";import{_ as ln}from"../chunks/preload-helper.D7HrI6pR.js";function $t(n,e,r,t){const i=(n-(isNaN(e)?0:e))%t;let l=Math.abs(i)*2>=t?n+Math.sign(i)*(t-Math.abs(i)):n-i;isNaN(e)?!isNaN(r)&&l>r&&(l=Math.floor(r/t)*t):l<e?l=e:!isNaN(r)&&l>r&&(l=e+Math.floor((r-e)/t)*t);const o=t.toString(),a=o.indexOf("."),s=a>=0?o.length-a:0;if(s>0){const u=Math.pow(10,s);l=Math.round(l*u)/u}return l}const an={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:Bt}=Ci("slider"),sn=n=>{const e={...an,...n},r=Ki(Li(e,"value","onValueChange","defaultValue")),{min:t,max:i,step:l,orientation:o,dir:a,disabled:s}=r,u=e.value??$e(e.defaultValue),c=xi(u,e==null?void 0:e.onValueChange),f=wt($e(!1)),m=wt($e(0)),g=wt($e(null)),h=$i(["root"]),_=(V,y)=>{c.update(C=>{if(!C)return[V];if(C[y]===V)return C;const w=[...C],N=w[y]>V?-1:1;function B(){w[y]=w[y+N],w[y+N]=V;const le=v();le&&(le[y+N].focus(),g.set({thumb:le[y+N],index:y+N}))}if(N===-1&&V<w[y-1])return B(),w;if(N===1&&V>w[y+1])return B(),w;const A=t.get(),R=i.get(),G=l.get();return w[y]=$t(V,A,R,G),w})},v=()=>{const V=Qt(h.root);return V?Array.from(V.querySelectorAll('[data-melt-part="thumb"]')).filter(y=>Kt(y)):null},b=Ft([t,i],([V,y])=>C=>(C-V)/(y-V)*100),S=wt.derived([o,a],([V,y])=>V==="horizontal"?y==="rtl"?"rl":"lr":y==="rtl"?"tb":"bt"),P=Er(Bt(),{stores:[s,o,a],returned:([V,y,C])=>({dir:C,disabled:Jt(V),"data-disabled":Jt(V),"data-orientation":y,style:V?void 0:`touch-action: ${y==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":h.root})}),x=Er(Bt("range"),{stores:[c,S,b],returned:([V,y,C])=>{const w=V.length>1?C(Math.min(...V)??0):0,N=100-C(Math.max(...V)??0),B={position:"absolute"};switch(y){case"lr":{B.left=`${w}%`,B.right=`${N}%`;break}case"rl":{B.right=`${w}%`,B.left=`${N}%`;break}case"bt":{B.bottom=`${w}%`,B.top=`${N}%`;break}case"tb":{B.top=`${w}%`,B.bottom=`${N}%`;break}}return{style:jt(B)}}}),Q=pr(Bt("thumb"),{stores:[c,b,t,i,s,o,S],returned:([V,y,C,w,N,B,A])=>Array.from({length:V.length||1},(G,le)=>{m.get()<V.length&&m.update(U=>U+1);const K=V[le],z=`${y(K)}%`,I={position:"absolute"};switch(A){case"lr":{I.left=z,I.translate="-50% 0";break}case"rl":{I.right=z,I.translate="50% 0";break}case"bt":{I.bottom=z,I.translate="0 50%";break}case"tb":{I.top=z,I.translate="0 -50%";break}}return{role:"slider","aria-valuemin":C,"aria-valuemax":w,"aria-valuenow":K,"aria-disabled":Jt(N),"aria-orientation":B,"data-melt-part":"thumb","data-value":K,style:jt(I),tabindex:N?-1:0}}),action:V=>({destroy:Ii(V,"keydown",C=>{if(s.get())return;const w=C.currentTarget;if(!Kt(w))return;const N=v();if(!(N!=null&&N.length))return;const B=N.indexOf(w);if(m.set(B),![We.ARROW_LEFT,We.ARROW_RIGHT,We.ARROW_UP,We.ARROW_DOWN,We.HOME,We.END].includes(C.key))return;C.preventDefault();const A=t.get(),R=i.get(),G=l.get(),le=c.get(),se=o.get(),K=S.get(),z=le[B];switch(C.key){case We.HOME:{_(A,B);break}case We.END:{_(R,B);break}case We.ARROW_LEFT:{if(se!=="horizontal")break;C.metaKey?_(K==="rl"?R:A,B):K==="rl"&&z<R?_(z+G,B):K==="lr"&&z>A&&_(z-G,B);break}case We.ARROW_RIGHT:{if(se!=="horizontal")break;C.metaKey?_(K==="rl"?A:R,B):K==="rl"&&z>A?_(z-G,B):K==="lr"&&z<R&&_(z+G,B);break}case We.ARROW_UP:{C.metaKey?_(K==="tb"?A:R,B):K==="tb"&&z>A?_(z-G,B):K!=="tb"&&z<R&&_(z+G,B);break}case We.ARROW_DOWN:{C.metaKey?_(K==="tb"?R:A,B):K==="tb"&&z<R?_(z+G,B):K!=="tb"&&z>A&&_(z-G,B);break}}})})}),$=pr(Bt("tick"),{stores:[c,t,i,l,S],returned:([V,y,C,w,N])=>{const B=C-y;let A=Math.ceil(B/w);return B%w==0&&A++,Array.from({length:A},(R,G)=>{const le=`${G*(w/(C-y))*100}%`,se=G===0,K=G===A-1,z=se?0:K?-100:-50,I={position:"absolute"};switch(N){case"lr":{I.left=le,I.translate=`${z}% 0`;break}case"rl":{I.right=le,I.translate=`${-z}% 0`;break}case"bt":{I.bottom=le,I.translate=`0 ${-z}%`;break}case"tb":{I.top=le,I.translate=`0 ${z}%`;break}}const U=y+G*w;return{"data-bounded":(V.length===1?U<=V[0]:V[0]<=U&&U<=V[V.length-1])?!0:void 0,"data-value":U,style:jt(I)}})}});return br([P,t,i,s,o,S,l],([V,y,C,w,N,B,A])=>{if(!yi||w)return;const R=(I,U,ee,ie)=>{const ne=(I-ee)/(ie-ee)*(C-y)+y;if(ne<y)_(y,U);else if(ne>C)_(C,U);else{const te=A,ue=y,ce=Math.floor((ne-ue)/te),Pe=ue+ce*te+te/2,Oe=ue+(ce+1)*te+te/2,ye=ne>=Pe&&ne<Oe?(ce+1)*te+ue:ce*te+ue;ye<=C&&_(ye,U)}},G=I=>{const U=v();if(!U)return;U.forEach(ne=>ne.blur());const ee=U.map(ne=>{if(N==="horizontal"){const{left:te,right:ue}=ne.getBoundingClientRect();return Math.abs(I.clientX-(te+ue)/2)}else{const{top:te,bottom:ue}=ne.getBoundingClientRect();return Math.abs(I.clientY-(te+ue)/2)}}),ie=U[ee.indexOf(Math.min(...ee))],ae=U.indexOf(ie);return{thumb:ie,index:ae}},le=I=>{if(!f.get())return;I.preventDefault(),I.stopPropagation();const U=Qt(V["data-melt-id"]),ee=g.get();if(!U||!ee)return;ee.thumb.focus();const{left:ie,right:ae,top:ne,bottom:te}=U.getBoundingClientRect();switch(B){case"lr":{R(I.clientX,ee.index,ie,ae);break}case"rl":{R(I.clientX,ee.index,ae,ie);break}case"bt":{R(I.clientY,ee.index,te,ne);break}case"tb":{R(I.clientY,ee.index,ne,te);break}}},se=I=>{if(I.button!==0)return;const U=Qt(V["data-melt-id"]),ee=G(I);if(!ee||!U)return;const ie=I.target;!Kt(ie)||!U.contains(ie)||(I.preventDefault(),g.set(ee),ee.thumb.focus(),f.set(!0),le(I))},K=()=>{f.set(!1)},z=Vi(Pt(document,"pointerdown",se),Pt(document,"pointerup",K),Pt(document,"pointerleave",K),Pt(document,"pointermove",le));return()=>{z()}}),br([l,t,i,c],function([y,C,w,N]){const B=R=>$t(R,C,w,y)===R,A=R=>$t(R,C,w,y);N.some(R=>!B(R))&&c.update(R=>R.map(A))}),{elements:{root:P,thumbs:Q,range:x,ticks:$},states:{value:c},options:r}};function gi(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function un(n){const{NAME:e,PARTS:r}=gi(),t=en(e,r),i={...sn(tn(n)),getAttrs:t};return tr(e,i),{...i,updateOption:rn(i.options)}}function hi(){const{NAME:n}=gi();return ai(n)}const cn=n=>({builder:n&4,ticks:n&8,thumbs:n&16}),Rr=n=>({builder:n[2],ticks:n[3],thumbs:n[4]}),fn=n=>({builder:n&4,ticks:n&8,thumbs:n&16}),Tr=n=>({builder:n[2],ticks:n[3],thumbs:n[4]});function mn(n){let e,r,t,i;const l=n[19].default,o=At(l,n,n[18],Rr);let a=[n[2],n[8]],s={};for(let u=0;u<a.length;u+=1)s=pe(s,a[u]);return{c(){e=H("span"),o&&o.c(),this.h()},l(u){e=D(u,"SPAN",{});var c=re(e);o&&o.l(c),c.forEach(E),this.h()},h(){bt(e,s)},m(u,c){T(u,e,c),o&&o.m(e,null),n[20](e),r=!0,t||(i=rr(n[2].action(e)),t=!0)},p(u,c){o&&o.p&&(!r||c&262172)&&Ot(o,l,u,u[18],r?Rt(l,u[18],c,cn):vt(u[18]),Rr),bt(e,s=st(a,[c&4&&u[2],c&256&&u[8]]))},i(u){r||(p(o,u),r=!0)},o(u){O(o,u),r=!1},d(u){u&&E(e),o&&o.d(u),n[20](null),t=!1,i()}}}function dn(n){let e;const r=n[19].default,t=At(r,n,n[18],Tr);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,l){t&&t.m(i,l),e=!0},p(i,l){t&&t.p&&(!e||l&262172)&&Ot(t,r,i,i[18],e?Rt(r,i[18],l,fn):vt(i[18]),Tr)},i(i){e||(p(t,i),e=!0)},o(i){O(t,i),e=!1},d(i){t&&t.d(i)}}}function _n(n){let e,r,t,i;const l=[dn,mn],o=[];function a(s,u){return s[1]?0:1}return e=a(n),r=o[e]=l[e](n),{c(){r.c(),t=Ee()},l(s){r.l(s),t=Ee()},m(s,u){o[e].m(s,u),T(s,t,u),i=!0},p(s,[u]){let c=e;e=a(s),e===c?o[e].p(s,u):(_e(),O(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(s,u):(r=o[e]=l[e](s),r.c()),p(r,1),r.m(t.parentNode,t))},i(s){i||(p(r),i=!0)},o(s){O(r),i=!1},d(s){s&&E(t),o[e].d(s)}}}function gn(n,e,r){let t;const i=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let l=Ce(e,i),o,a,s,{$$slots:u={},$$scope:c}=e,{disabled:f=void 0}=e,{min:m=void 0}=e,{max:g=void 0}=e,{step:h=void 0}=e,{orientation:_=void 0}=e,{dir:v=void 0}=e,{value:b=void 0}=e,{onValueChange:S=void 0}=e,{asChild:P=!1}=e,{el:x=void 0}=e;const{elements:{root:Q,ticks:$,thumbs:V},states:{value:y},updateOption:C,getAttrs:w}=un({disabled:f,dir:v,min:m,max:g,step:h,orientation:_,defaultValue:b,onValueChange:({next:A})=>(b!==A&&(S==null||S(A),r(9,b=A)),A)});Ve(n,Q,A=>r(17,o=A)),Ve(n,$,A=>r(3,a=A)),Ve(n,V,A=>r(4,s=A));const N=w("root");function B(A){St[A?"unshift":"push"](()=>{x=A,r(0,x)})}return n.$$set=A=>{e=pe(pe({},e),et(A)),r(8,l=Ce(e,i)),"disabled"in A&&r(10,f=A.disabled),"min"in A&&r(11,m=A.min),"max"in A&&r(12,g=A.max),"step"in A&&r(13,h=A.step),"orientation"in A&&r(14,_=A.orientation),"dir"in A&&r(15,v=A.dir),"value"in A&&r(9,b=A.value),"onValueChange"in A&&r(16,S=A.onValueChange),"asChild"in A&&r(1,P=A.asChild),"el"in A&&r(0,x=A.el),"$$scope"in A&&r(18,c=A.$$scope)},n.$$.update=()=>{n.$$.dirty&512&&b!==void 0&&y.set(b),n.$$.dirty&1024&&C("disabled",f),n.$$.dirty&2048&&C("min",m),n.$$.dirty&4096&&C("max",g),n.$$.dirty&8192&&C("step",h),n.$$.dirty&16384&&C("orientation",_),n.$$.dirty&32768&&C("dir",v),n.$$.dirty&131072&&r(2,t=o),n.$$.dirty&4&&Object.assign(t,N)},[x,P,t,a,s,Q,$,V,l,b,f,m,g,h,_,v,S,o,c,u,B]}let hn=class extends Re{constructor(e){super(),Te(this,e,gn,_n,ve,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const En=n=>({builder:n&4}),Mr=n=>({builder:n[2]});function pn(n){let e,r,t,i=[n[2],n[4]],l={};for(let o=0;o<i.length;o+=1)l=pe(l,i[o]);return{c(){e=H("span"),this.h()},l(o){e=D(o,"SPAN",{}),re(e).forEach(E),this.h()},h(){bt(e,l)},m(o,a){T(o,e,a),n[8](e),r||(t=rr(n[2].action(e)),r=!0)},p(o,a){bt(e,l=st(i,[a&4&&o[2],a&16&&o[4]]))},i:oe,o:oe,d(o){o&&E(e),n[8](null),r=!1,t()}}}function bn(n){let e;const r=n[7].default,t=At(r,n,n[6],Mr);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,l){t&&t.m(i,l),e=!0},p(i,l){t&&t.p&&(!e||l&68)&&Ot(t,r,i,i[6],e?Rt(r,i[6],l,En):vt(i[6]),Mr)},i(i){e||(p(t,i),e=!0)},o(i){O(t,i),e=!1},d(i){t&&t.d(i)}}}function Nn(n){let e,r,t,i;const l=[bn,pn],o=[];function a(s,u){return s[1]?0:1}return e=a(n),r=o[e]=l[e](n),{c(){r.c(),t=Ee()},l(s){r.l(s),t=Ee()},m(s,u){o[e].m(s,u),T(s,t,u),i=!0},p(s,[u]){let c=e;e=a(s),e===c?o[e].p(s,u):(_e(),O(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(s,u):(r=o[e]=l[e](s),r.c()),p(r,1),r.m(t.parentNode,t))},i(s){i||(p(r),i=!0)},o(s){O(r),i=!1},d(s){s&&E(t),o[e].d(s)}}}function Sn(n,e,r){let t;const i=["asChild","el"];let l=Ce(e,i),o,{$$slots:a={},$$scope:s}=e,{asChild:u=!1}=e,{el:c=void 0}=e;const{elements:{range:f},getAttrs:m}=hi();Ve(n,f,_=>r(5,o=_));const g=m("range");function h(_){St[_?"unshift":"push"](()=>{c=_,r(0,c)})}return n.$$set=_=>{e=pe(pe({},e),et(_)),r(4,l=Ce(e,i)),"asChild"in _&&r(1,u=_.asChild),"el"in _&&r(0,c=_.el),"$$scope"in _&&r(6,s=_.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&r(2,t=o),n.$$.dirty&4&&Object.assign(t,g)},[c,u,t,f,l,o,s,a,h]}class An extends Re{constructor(e){super(),Te(this,e,Sn,Nn,ve,{asChild:1,el:0})}}const On=n=>({builder:n&4}),kr=n=>({builder:n[2]});function vn(n){let e,r,t,i=[n[2],n[4]],l={};for(let o=0;o<i.length;o+=1)l=pe(l,i[o]);return{c(){e=H("span"),this.h()},l(o){e=D(o,"SPAN",{}),re(e).forEach(E),this.h()},h(){bt(e,l)},m(o,a){T(o,e,a),n[8](e),r||(t=[rr(n[2].action(e)),Nt(e,"m-keydown",n[3])],r=!0)},p(o,a){bt(e,l=st(i,[a&4&&o[2],a&16&&o[4]]))},i:oe,o:oe,d(o){o&&E(e),n[8](null),r=!1,ir(t)}}}function Rn(n){let e;const r=n[7].default,t=At(r,n,n[6],kr);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,l){t&&t.m(i,l),e=!0},p(i,l){t&&t.p&&(!e||l&68)&&Ot(t,r,i,i[6],e?Rt(r,i[6],l,On):vt(i[6]),kr)},i(i){e||(p(t,i),e=!0)},o(i){O(t,i),e=!1},d(i){t&&t.d(i)}}}function Tn(n){let e,r,t,i;const l=[Rn,vn],o=[];function a(s,u){return s[1]?0:1}return e=a(n),r=o[e]=l[e](n),{c(){r.c(),t=Ee()},l(s){r.l(s),t=Ee()},m(s,u){o[e].m(s,u),T(s,t,u),i=!0},p(s,[u]){let c=e;e=a(s),e===c?o[e].p(s,u):(_e(),O(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(s,u):(r=o[e]=l[e](s),r.c()),p(r,1),r.m(t.parentNode,t))},i(s){i||(p(r),i=!0)},o(s){O(r),i=!1},d(s){s&&E(t),o[e].d(s)}}}function Mn(n,e,r){let t;const i=["asChild","el","thumb"];let l=Ce(e,i),{$$slots:o={},$$scope:a}=e,{asChild:s=!1}=e,{el:u=void 0}=e,{thumb:c}=e;const{getAttrs:f}=hi(),m=nn(),g=f("thumb");function h(_){St[_?"unshift":"push"](()=>{u=_,r(0,u)})}return n.$$set=_=>{e=pe(pe({},e),et(_)),r(4,l=Ce(e,i)),"asChild"in _&&r(1,s=_.asChild),"el"in _&&r(0,u=_.el),"thumb"in _&&r(5,c=_.thumb),"$$scope"in _&&r(6,a=_.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&r(2,t=c),n.$$.dirty&4&&Object.assign(t,g)},[u,s,t,m,l,c,a,o,h]}class Ei extends Re{constructor(e){super(),Te(this,e,Mn,Tn,ve,{asChild:1,el:0,thumb:5})}}function Lr(n,e,r){const t=n.slice();return t[5]=e[r],t}function yr(n){let e,r;return e=new Ei({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p:oe,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Vr(n){let e,r;return e=new Ei({props:{thumb:n[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&16&&(l.thumb=t[5]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function kn(n){let e,r,t,i,l;r=new An({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let o=Fe(n[4]??[]),a=[];for(let c=0;c<o.length;c+=1)a[c]=Vr(Lr(n,o,c));const s=c=>O(a[c],1,1,()=>{a[c]=null});let u=null;return o.length||(u=yr()),{c(){e=H("span"),Y(r.$$.fragment),t=W();for(let c=0;c<a.length;c+=1)a[c].c();i=Ee(),u&&u.c(),this.h()},l(c){e=D(c,"SPAN",{class:!0});var f=re(e);Z(r.$$.fragment,f),f.forEach(E),t=F(c);for(let m=0;m<a.length;m+=1)a[m].l(c);i=Ee(),u&&u.l(c),this.h()},h(){M(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(c,f){T(c,e,f),J(r,e,null),T(c,t,f);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(c,f);T(c,i,f),u&&u.m(c,f),l=!0},p(c,f){if(f&16){o=Fe(c[4]??[]);let m;for(m=0;m<o.length;m+=1){const g=Lr(c,o,m);a[m]?(a[m].p(g,f),p(a[m],1)):(a[m]=Vr(g),a[m].c(),p(a[m],1),a[m].m(i.parentNode,i))}for(_e(),m=o.length;m<a.length;m+=1)s(m);ge(),!o.length&&u?u.p(c,f):o.length?u&&(_e(),O(u,1,1,()=>{u=null}),ge()):(u=yr(),u.c(),p(u,1),u.m(i.parentNode,i))}},i(c){if(!l){p(r.$$.fragment,c);for(let f=0;f<o.length;f+=1)p(a[f]);l=!0}},o(c){O(r.$$.fragment,c),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)O(a[f]);l=!1},d(c){c&&(E(e),E(t),E(i)),j(r),Tt(a,c),u&&u.d(c)}}}function Ln(n){let e,r,t;const i=[{class:Nr("relative left-1.5 flex w-full touch-none select-none items-center",n[1])},n[2]];function l(a){n[3](a)}let o={$$slots:{default:[kn,({thumbs:a})=>({4:a}),({thumbs:a})=>a?16:0]},$$scope:{ctx:n}};for(let a=0;a<i.length;a+=1)o=pe(o,i[a]);return n[0]!==void 0&&(o.value=n[0]),e=new hn({props:o}),St.push(()=>ui(e,"value",l)),{c(){Y(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,s){J(e,a,s),t=!0},p(a,[s]){const u=s&6?st(i,[s&2&&{class:Nr("relative left-1.5 flex w-full touch-none select-none items-center",a[1])},s&4&&Dt(a[2])]):{};s&272&&(u.$$scope={dirty:s,ctx:a}),!r&&s&1&&(r=!0,u.value=a[0],si(()=>r=!1)),e.$set(u)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){O(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function yn(n,e,r){const t=["class","value"];let i=Ce(e,t),{class:l=void 0}=e,{value:o=[0]}=e;function a(s){o=s,r(0,o)}return n.$$set=s=>{e=pe(pe({},e),et(s)),r(2,i=Ce(e,t)),"class"in s&&r(1,l=s.class),"value"in s&&r(0,o=s.value)},[o,l,i,a]}class Vn extends Re{constructor(e){super(),Te(this,e,yn,Ln,ve,{class:1,value:0})}}function Cr(n){let e,r=(n[7]?gt(n[0],n[9]):n[0])+"",t,i,l,o=(n[7]?gt(n[1],n[9]):n[1])+"",a;return{c(){e=H("span"),t=ke(r),i=W(),l=H("span"),a=ke(o),this.h()},l(s){e=D(s,"SPAN",{class:!0});var u=re(e);t=Le(u,r),u.forEach(E),i=F(s),l=D(s,"SPAN",{class:!0});var c=re(l);a=Le(c,o),c.forEach(E),this.h()},h(){M(e,"class","absolute left-0 text-xs pt-1 -z-10"),M(l,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(s,u){T(s,e,u),q(e,t),T(s,i,u),T(s,l,u),q(l,a)},p(s,u){u&641&&r!==(r=(s[7]?gt(s[0],s[9]):s[0])+"")&&Ue(t,r),u&642&&o!==(o=(s[7]?gt(s[1],s[9]):s[1])+"")&&Ue(a,o)},d(s){s&&(E(e),E(i),E(l))}}}function Cn(n){let e,r,t,i,l,o=(n[7]?gt(n[11][n[5]],n[9]):n[11][n[5]])+"",a,s,u,c,f,m,g;function h(b){n[18](b)}let _={min:n[0],max:n[1],step:n[6],sizeClass:n[10]};n[8]!==void 0&&(_.value=n[8]),u=new Vn({props:_}),St.push(()=>ui(u,"value",h));let v=n[2]&&Cr(n);return{c(){e=H("div"),r=H("p"),t=ke(n[4]),i=ke(` :
			`),l=H("span"),a=ke(o),s=W(),Y(u.$$.fragment),f=W(),v&&v.c(),this.h()},l(b){e=D(b,"DIV",{class:!0});var S=re(e);r=D(S,"P",{class:!0});var P=re(r);t=Le(P,n[4]),i=Le(P,` :
			`),l=D(P,"SPAN",{class:!0});var x=re(l);a=Le(x,o),x.forEach(E),P.forEach(E),s=F(S),Z(u.$$.fragment,S),f=F(S),v&&v.l(S),S.forEach(E),this.h()},h(){M(l,"class","text-xs"),M(r,"class","pb-2 truncate text-xs"),M(e,"class",m=`relative ${n[10]} mb-10 select-none`)},m(b,S){T(b,e,S),q(e,r),q(r,t),q(r,i),q(r,l),q(l,a),q(e,s),J(u,e,null),q(e,f),v&&v.m(e,null),g=!0},p(b,S){(!g||S&16)&&Ue(t,b[4]),(!g||S&2720)&&o!==(o=(b[7]?gt(b[11][b[5]],b[9]):b[11][b[5]])+"")&&Ue(a,o);const P={};S&1&&(P.min=b[0]),S&2&&(P.max=b[1]),S&64&&(P.step=b[6]),S&1024&&(P.sizeClass=b[10]),!c&&S&256&&(c=!0,P.value=b[8],si(()=>c=!1)),u.$set(P),b[2]?v?v.p(b,S):(v=Cr(b),v.c(),v.m(e,null)):v&&(v.d(1),v=null),(!g||S&1024&&m!==(m=`relative ${b[10]} mb-10 select-none`))&&M(e,"class",m)},i(b){g||(p(u.$$.fragment,b),g=!0)},o(b){O(u.$$.fragment,b),g=!1},d(b){b&&E(e),j(u),v&&v.d()}}}function In(n){let e,r;return e=new Ji({props:{enabled:n[3],$$slots:{default:[Cn]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,[i]){const l={};i&8&&(l.enabled=t[3]),i&16781303&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Hn(n,e){n>e&&console.error("min cannot be greater than max")}function Dn(n,e,r){var w,N,B;let t,i;const l=ci();Ve(n,l,A=>r(11,i=A));let{title:o}=e,{name:a}=e,{min:s=0}=e,{max:u=100}=e,{step:c=1}=e,{showMaxMin:f=!0}=e,{hideDuringPrint:m=!0}=e,{defaultValue:g=0}=e,h=[g],{fmt:_=void 0}=e,{size:v=""}=e,b,{data:S=null}=e;function P(A,R){if(A=Di(A),isNaN(A)){console.error(`${R} must be a number`);return}return A}s!==void 0&&(s=P(s,"min")),u!==void 0&&(u=P(u,"max")),u!==void 0&&s!==void 0&&Hn(s,u);const x=A=>({medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[A.toLowerCase()]||"w-40";let Q,{maxColumn:$=void 0}=e,{minColumn:V=void 0}=e,y=!1;if(!y)try{if(Q=void 0,S){if(typeof S=="string")throw Error(`Received: data=${S}, expected: data={${S}}`);Array.isArray(S)||(S=[S]),$&&((w=S[0])!=null&&w[$])&&(u=S[0][$]),V&&((N=S[0])!=null&&N[V])&&(s=S[0][V]),typeof g=="string"&&((B=S[0])!=null&&B[g])&&(h=[S[0][g]]),y=!0}else if($||V)throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(A){Q=A.message,console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${Q}`)}function C(A){h=A,r(8,h)}return n.$$set=A=>{"title"in A&&r(4,o=A.title),"name"in A&&r(5,a=A.name),"min"in A&&r(0,s=A.min),"max"in A&&r(1,u=A.max),"step"in A&&r(6,c=A.step),"showMaxMin"in A&&r(2,f=A.showMaxMin),"hideDuringPrint"in A&&r(3,m=A.hideDuringPrint),"defaultValue"in A&&r(13,g=A.defaultValue),"fmt"in A&&r(7,_=A.fmt),"size"in A&&r(15,v=A.size),"data"in A&&r(14,S=A.data),"maxColumn"in A&&r(16,$=A.maxColumn),"minColumn"in A&&r(17,V=A.minColumn)},n.$$.update=()=>{n.$$.dirty&4&&r(2,f=f==="true"||f===!0),n.$$.dirty&8&&r(3,m=m==="true"||m===!0),n.$$.dirty&24579&&g!==void 0&&!S&&(r(13,g=P(g,"defaultValue")),g!==void 0&&(g<s?console.error("defaultValue cannot be less than min"):g>u&&console.error("defaultValue cannot be greater than max"))),n.$$.dirty&288&&Wt(l,i[a]=h,i),n.$$.dirty&32768&&r(10,t=x(v)),n.$$.dirty&128&&(_?r(9,b=Hi(_,"number")):r(9,b=void 0))},[s,u,f,m,o,a,c,_,h,b,t,i,l,g,S,v,$,V,C]}class wn extends Re{constructor(e){super(),Te(this,e,Dn,In,ve,{title:4,name:5,min:0,max:1,step:6,showMaxMin:2,hideDuringPrint:3,defaultValue:13,fmt:7,size:15,data:14,maxColumn:16,minColumn:17})}}function Pn(n){let e,r;const t=[n[4],{data:we.isQuery(n[7])?Array.from(n[7]):n[7]}];let i={};for(let l=0;l<t.length;l+=1)i=pe(i,t[l]);return e=new wn({props:i}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,o){J(e,l,o),r=!0},p(l,o){const a=o&144?st(t,[o&16&&Dt(l[4]),o&128&&{data:we.isQuery(l[7])?Array.from(l[7]):l[7]}]):{};e.$set(a)},i(l){r||(p(e.$$.fragment,l),r=!0)},o(l){O(e.$$.fragment,l),r=!1},d(l){j(e,l)}}}function Ir(n){let e,r;return e=new mi({props:{emptyMessage:n[2],emptySet:n[1],chartType:Gn,isInitial:n[3]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&4&&(l.emptyMessage=t[2]),i&2&&(l.emptySet=t[1]),i&8&&(l.isInitial=t[3]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Bn(n){let e,r,t=!n[4].placeholder&&Ir(n);return{c(){e=H("span"),t&&t.c(),this.h()},l(i){e=D(i,"SPAN",{slot:!0});var l=re(e);t&&t.l(l),l.forEach(E),this.h()},h(){M(e,"slot","empty")},m(i,l){T(i,e,l),t&&t.m(e,null),r=!0},p(i,l){i[4].placeholder?t&&(_e(),O(t,1,1,()=>{t=null}),ge()):t?(t.p(i,l),l&16&&p(t,1)):(t=Ir(i),t.c(),p(t,1),t.m(e,null))},i(i){r||(p(t),r=!0)},o(i){O(t),r=!1},d(i){i&&E(e),t&&t.d()}}}function Wn(n){let e,r="Loading...";return{c(){e=H("span"),e.textContent=r,this.h()},l(t){e=D(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-exu0be"&&(e.textContent=r),this.h()},h(){M(e,"slot","skeleton"),M(e,"class","text-gray-500")},m(t,i){T(t,e,i)},p:oe,d(t){t&&E(e)}}}function Fn(n){let e,r;return e=new fi({props:{data:n[0],$$slots:{skeleton:[Wn],empty:[Bn],default:[Pn,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,[i]){const l={};i&1&&(l.data=t[0]),i&414&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}let Gn="Slider";function zn(n,e,r){let t,{data:i}=e;const l=we.isQuery(i)?i.hash:void 0;let o=(i==null?void 0:i.hash)===l,{emptySet:a=void 0}=e,{emptyMessage:s=void 0}=e;return n.$$set=u=>{r(6,e=pe(pe({},e),et(u))),"data"in u&&r(0,i=u.data),"emptySet"in u&&r(1,a=u.emptySet),"emptyMessage"in u&&r(2,s=u.emptyMessage)},n.$$.update=()=>{n.$$.dirty&1&&r(3,o=(i==null?void 0:i.hash)===l),r(4,t=Object.fromEntries(Object.entries(e).filter(([,u])=>u!==void 0)))},e=et(e),[i,a,s,o,t]}class Xn extends Re{constructor(e){super(),Te(this,e,zn,Fn,ve,{data:0,emptySet:1,emptyMessage:2})}}const Un={trailing:!0};function qn(n,e=25,r={}){if(r={...Un,...r},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let t,i,l=[],o,a;const s=(u,c)=>(o=Yn(n,u,c),o.finally(()=>{if(o=null,r.trailing&&a&&!i){const f=s(u,a);return a=null,f}}),o);return function(...u){return o?(r.trailing&&(a=u),o):new Promise(c=>{const f=!i&&r.leading;clearTimeout(i),i=setTimeout(()=>{i=null;const m=r.leading?t:s(this,u);for(const g of l)g(m);l=[]},e),f?(t=s(this,u),c(t)):l.push(c)})}}async function Yn(n,e,r){return await n.apply(e,r)}function Zn(n){n.Map.mergeOptions({smoothWheelZoom:!0,smoothSensitivity:1}),n.Map.SmoothWheelZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"wheel",this._onWheelScroll,this)},removeHooks:function(){n.DomEvent.off(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(e){this._isWheeling||this._onWheelStart(e),this._onWheeling(e)},_onWheelStart:function(e){var r=this._map;this._isWheeling=!0,this._wheelMousePosition=r.mouseEventToContainerPoint(e),this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),this._wheelStartLatLng=r.containerPointToLatLng(this._wheelMousePosition),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),r._panAnim&&r._panAnim.stop(),this._goalZoom=r.getZoom(),this._prevCenter=r.getCenter(),this._prevZoom=r.getZoom(),this._zoomAnimationId=requestAnimationFrame(this._updateWheelZoom.bind(this))},_onWheeling:function(e){var r=this._map;this._goalZoom=this._goalZoom+n.DomEvent.getWheelDelta(e)*.003*r.options.smoothSensitivity,(this._goalZoom<r.getMinZoom()||this._goalZoom>r.getMaxZoom())&&(this._goalZoom=r._limitZoom(this._goalZoom)),this._wheelMousePosition=this._map.mouseEventToContainerPoint(e),clearTimeout(this._timeoutId),this._timeoutId=setTimeout(this._onWheelEnd.bind(this),200),n.DomEvent.preventDefault(e),n.DomEvent.stopPropagation(e)},_onWheelEnd:function(){this._isWheeling=!1,cancelAnimationFrame(this._zoomAnimationId),this._map._moveEnd(!0)},_updateWheelZoom:function(){var e=this._map;if(!(!e.getCenter().equals(this._prevCenter)||e.getZoom()!=this._prevZoom)){this._zoom=e.getZoom()+(this._goalZoom-e.getZoom())*.3,this._zoom=Math.floor(this._zoom*100)/100;var r=this._wheelMousePosition.subtract(this._centerPoint);r.x===0&&r.y===0||(e.options.smoothWheelZoom==="center"?this._center=this._startLatLng:this._center=e.unproject(e.project(this._wheelStartLatLng,this._zoom).subtract(r),this._zoom),this._moved||(e._moveStart(!0,!1),this._moved=!0),e._move(this._center,this._zoom),this._prevCenter=e.getCenter(),this._prevZoom=e.getZoom(),this._zoomAnimationId=requestAnimationFrame(this._updateWheelZoom.bind(this)))}}}),n.Map.addInitHook("addHandler","smoothWheelZoom",n.Map.SmoothWheelZoom)}let De;var Se,Qe,nt,dt,ot,Xe,pt,lt,yt,at,Vt,Ct,It,Ht;const Lt=class Lt{constructor(){Me(this,Se);Me(this,Qe,null);Me(this,nt,new Map);Me(this,dt);Me(this,ot,wi());Me(this,Xe);Me(this,pt,!1);Me(this,lt);Zt(this,"updateBounds",qn(()=>{if(ze(this,Xe,De.latLngBounds()),X(this,Se).eachLayer(e=>{(e instanceof De.Marker||e instanceof De.CircleMarker||e instanceof De.GeoJSON)&&X(this,Xe).extend(e.getBounds?e.getBounds():e.getLatLng())}),X(this,Xe).isValid())X(this,Se).fitBounds(X(this,Xe),{maxZoom:12}),X(this,lt)&&X(this,Se).setZoom(X(this,lt));else throw console.error("Bounds are invalid!",X(this,Xe)),new Error("Bounds are invalid!")},100));Me(this,at,$e(new Map));Zt(this,"allGeoJsonLoaded",Ft(X(this,at),e=>Array.from(e.values()).every(Boolean)));Me(this,Vt,$e("bottomLeft"));Me(this,Ct,$e([]));Me(this,It,[]);Me(this,Ht,$e(void 0));ze(this,Qe,null),ze(this,nt,new Map)}get initPromise(){return X(this,ot).promise}get mapEl(){return X(this,dt)}async init(e,r,t,i,l=!1,o){if(De||(X(this,ot).start(),De=await ln(()=>import("../chunks/leaflet-src.BOAjM8CE.js").then(s=>s.l),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(s=>{const u=s.default;return Zn(u),u}).catch(s=>{X(this,ot).reject(s)})),ze(this,lt,i),X(this,dt)){const s=new Error("Evidence Map already initialized");throw X(this,ot).reject(s),s}ze(this,dt,e),ze(this,Se,De.map(X(this,dt),{zoomControl:!1,scrollWheelZoom:!1,smoothWheelZoom:!0,smoothSensitivity:5}).setView(t,i??5)),l&&ze(this,pt,!0);const a=this.processBasemapUrl(r);De.tileLayer(a,{subdomains:"abcd",maxZoom:20,className:"__evidence-leaflet-tile-layer__",attribution:o}).addTo(X(this,Se)),o||X(this,Se).removeControl(X(this,Se).attributionControl),ze(this,Xe,De.latLngBounds()),X(this,ot).resolve()}cleanup(){X(this,Se).remove()}addArea(e,r,t,i,l,o,a,s,u){if(!De)throw new Error("Leaflet is not yet available");this.lastSelectedLayer||(this.lastSelectedLayer=null),this.originalStyles||(this.originalStyles=new Map);const c=De.geoJSON(t,{...i,onEachFeature:(f,m)=>{this.originalStyles.set(m,i),m.on("click",()=>{this.lastSelectedLayer===m?(m.setStyle(this.originalStyles.get(m)),s(e,r),this.lastSelectedLayer=null):(this.lastSelectedLayer&&this.lastSelectedLayer.setStyle(this.originalStyles.get(this.lastSelectedLayer)),m.bringToFront(),m.setStyle(l),a(e,r),this.lastSelectedLayer=m),o(f),u&&(window.location.href=u)})}}).addTo(X(this,Se));return X(this,Xe).extend(c.getBounds()),X(this,pt)?X(this,Se).setZoom(X(this,lt)??5):this.updateBounds(),c.bringToBack(),c}addCircle(e,r,t,i,l,o,a,s,u){if(!De)throw new Error("Leaflet is not yet available");X(this,Se).getPane(t.pane)||(X(this,Se).createPane(t.pane),X(this,It).forEach((f,m)=>{f===t.pane&&(X(this,Se).getPane(f).style.zIndex=400+m)}));const c=De.circleMarker(l,t);return c.addTo(X(this,Se)),this.updateMarkerStyle(c,t),c.on("click",()=>{if(o(),X(this,Qe)===c){const f={...X(this,nt).get(c)};this.updateMarkerStyle(c,f),ze(this,Qe,null),s(r),o(null)}else{if(X(this,Qe)){const f={...X(this,nt).get(X(this,Qe))};this.updateMarkerStyle(X(this,Qe),f)}this.updateMarkerStyle(c,i),ze(this,Qe,c),a(e,r),o(c)}c.bringToFront(),u&&(window.location.href=u)}),l&&Array.isArray(l)&&l.length===2&&!X(this,pt)?(X(this,Xe).extend(l),this.updateBounds()):X(this,Se).setZoom(X(this,lt)??5),c}updateMarkerStyle(e,r){e.setStyle(r),X(this,nt).has(e)||X(this,nt).set(e,{...r})}buildTooltip(e,r){let t="",i=r.map(l=>({id:l.id,title:l.title??l.id,showColumnName:l.showColumnName===void 0?!0:l.showColumnName,fieldClass:l.fieldClass??"default-field-class",valueClass:l.valueClass??"default-value-class",fmt:l.fmt??"num0",formatColumnTitle:l.formatColumnTitle===void 0&&l.title===void 0?!0:l.formatColumnTitle,contentType:l.contentType??"text",linkLabel:l.linkLabel??void 0}));if(i)for(let l=0;l<i.length;l++)t+=`<div class='flex justify-between items-center ${i[l].rowClass||""}'>`+(i[l].showColumnName?`<span class='font-bold pr-5 ${i[l].fieldClass}'>${i[l].formatColumnTitle?Pi(i[l].title):i[l].title}</span>`:"")+(i[l].contentType==="link"?`<a href='${e[i[l].id]}' class='${i[l].valueClass}'>${i[l].linkLabel?i[l].linkLabel:ht(e[i[l].id],i[l].fmt)}</a>`:`<span class='${i[l].valueClass}'>${ht(e[i[l].id],i[l].fmt)}</span>`)+"</div>";return t}attachTooltip(e,r,t,i){i==="hover"?e.bindTooltip(r,t):i==="click"?e.bindPopup(r,t):console.error("tooltipType must be 'hover' or 'click'")}processBasemapUrl(e){const r=window.devicePixelRatio||1;let t=e;return t.includes("{r}")&&(t=t.replace("{r}",r>1?"@2x":"")),t.includes("{ext}")&&(t=t.replace("{ext}","png")),t}get geoJsonData(){return xt(X(this,at))}async loadGeoJson(e){const r=X(Lt,yt).get(e);if(r)return r;const t=fetch(e).then(l=>l.json()).catch(l=>{X(this,at).update(o=>(o.delete(e),o)),console.error(`Failed to load GeoJSON at URL '${e}': ${l}`)});X(Lt,yt).set(e,t),X(this,at).update(l=>l.set(e,null));const i=await t;return X(this,at).update(l=>(i?l.set(e,i):l.delete(e),l)),i}handleLegendValues(e,r,t){if(t==="categorical"){r=[...new Set(r)];let l=0;for(;e.length<r.length;)l>=e.length&&(l=0),e.push(e[l]),l++}else t==="scalar"&&r.forEach(i=>{typeof i!="number"&&i!==null&&console.error("Scalar legend requires numeric values or null."),typeof i=="number"&&isNaN(i)&&console.error("Scalar legend requires valid numeric values.")});return r}handleFillColor(e,r,t,i,l,o){if(!r)return o.colors.primary;if(e[r])return typeof e[r]=="string"?i[t.indexOf(e[r])]:l(e[r])}updateLegendPosition(e){X(this,Vt).set(e)}get legendPosition(){let e;return X(this,Vt).subscribe(r=>e=r)(),e}buildLegend(e,r,t,i,l,o,a,s,u,c){const f=()=>({colorPalette:e,values:r,minValue:t,maxValue:i,legendType:l,valueFmt:o,chartType:a,legendId:s,value:u,legend:c});X(this,Ct).update(m=>{const g=m.findIndex(h=>h.legendId===s);return g!==-1?m.map((h,_)=>_===g?{...c,...f()}:h):s!==void 0?[...m,f()]:m})}get legendData(){return xt(X(this,Ct))}async initializeData(e,{corordinates:r,value:t,checkInputs:i,min:l,max:o,colorPalette:a,legendType:s,valueFmt:u,chartType:c,legendId:f,legend:m,theme:g}){await e.fetch(),i(e,r);let h=e.map(S=>S[t]),_=Math.min(...h),v=Math.max(...h),b;return s||(typeof h[0]=="number"?s="scalar":s="categorical"),s&&!a&&(a=s==="categorical"?g.colorPalettes.default:g.colorScales.default,a=a.map(S=>Sr(S).hex())),b=Sr.scale(a).domain([l??_,o??v]),m&&t&&(h=this.handleLegendValues(a,h,s),this.buildLegend(a,h,_,v,s,u,c,f,t,m)),{values:h,colorPalette:a,colorScale:b}}registerPane(e){return X(this,It).push(e),e}handleInternalError(e){e&&X(this,Ht).set(e)}get internalError(){return xt(X(this,Ht))}};Se=new WeakMap,Qe=new WeakMap,nt=new WeakMap,dt=new WeakMap,ot=new WeakMap,Xe=new WeakMap,pt=new WeakMap,lt=new WeakMap,yt=new WeakMap,at=new WeakMap,Vt=new WeakMap,Ct=new WeakMap,It=new WeakMap,Ht=new WeakMap,Me(Lt,yt,new Map);let er=Lt;const pi=Symbol("EvidenceMapContext");function Hr(n,e,r){const t=n.slice();return t[7]=e[r],t[9]=r,t}function Dr(n){let e,r,t,i,l,o=(n[7]||"No value")+"",a,s,u;return{c(){e=H("div"),r=H("span"),i=W(),l=H("span"),a=ke(o),u=W(),this.h()},l(c){e=D(c,"DIV",{class:!0});var f=re(e);r=D(f,"SPAN",{class:!0,style:!0}),re(r).forEach(E),i=F(f),l=D(f,"SPAN",{class:!0,title:!0});var m=re(l);a=Le(m,o),m.forEach(E),u=F(f),f.forEach(E),this.h()},h(){M(r,"class",t="inline-block h-[8px] "+(n[0].chartType==="Area Map"?"":"rounded-full")+" w-[8px]"),Ke(r,"background-color",n[0].colorPalette[n[9]]),M(l,"class","inline-block ml-2 truncate max-w-[calc(100%-16px)]"),M(l,"title",s=n[7]),M(e,"class","flex items-center")},m(c,f){T(c,e,f),q(e,r),q(e,i),q(e,l),q(l,a),q(e,u)},p(c,f){f&1&&t!==(t="inline-block h-[8px] "+(c[0].chartType==="Area Map"?"":"rounded-full")+" w-[8px]")&&M(r,"class",t),f&1&&Ke(r,"background-color",c[0].colorPalette[c[9]]),f&1&&o!==(o=(c[7]||"No value")+"")&&Ue(a,o),f&1&&s!==(s=c[7])&&M(l,"title",s)},d(c){c&&E(e)}}}function Jn(n){let e,r,t,i,l,o,a,s,u,c=Fe(n[0].values),f=[];for(let m=0;m<c.length;m+=1)f[m]=Dr(Hr(n,c,m));return{c(){e=H("div"),r=H("div"),t=H("div"),i=H("p"),l=ke(n[3]),o=W(),a=H("div");for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){e=D(m,"DIV",{class:!0});var g=re(e);r=D(g,"DIV",{style:!0,class:!0});var h=re(r);t=D(h,"DIV",{class:!0});var _=re(t);i=D(_,"P",{});var v=re(i);l=Le(v,n[3]),v.forEach(E),_.forEach(E),o=F(h),a=D(h,"DIV",{class:!0});var b=re(a);for(let S=0;S<f.length;S+=1)f[S].l(b);b.forEach(E),h.forEach(E),g.forEach(E),this.h()},h(){M(t,"class","flex flex-wrap flex-col font-semibold"),M(a,"class","text-xs pr-1 w-full"),M(r,"style",s=`max-height: ${n[1]?"0px":`${n[2]-50}px`};`),M(r,"class",u="pretty-scrollbar flex flex-col transition-[opacity, max-height, overflow-y] duration-[350ms] ease-in-out w-full min-w-24 "+(n[4]?"overflow-y-auto":"overflow-hidden")+" "+(n[1]?"opacity-0":"")),M(e,"class","flex w-full")},m(m,g){T(m,e,g),q(e,r),q(r,t),q(t,i),q(i,l),q(r,o),q(r,a);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(a,null)},p(m,[g]){if(g&1){c=Fe(m[0].values);let h;for(h=0;h<c.length;h+=1){const _=Hr(m,c,h);f[h]?f[h].p(_,g):(f[h]=Dr(_),f[h].c(),f[h].m(a,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=c.length}g&6&&s!==(s=`max-height: ${m[1]?"0px":`${m[2]-50}px`};`)&&M(r,"style",s),g&2&&u!==(u="pretty-scrollbar flex flex-col transition-[opacity, max-height, overflow-y] duration-[350ms] ease-in-out w-full min-w-24 "+(m[4]?"overflow-y-auto":"overflow-hidden")+" "+(m[1]?"opacity-0":""))&&M(r,"class",u)},i:oe,o:oe,d(m){m&&E(e),Tt(f,m)}}}function jn(n,e,r){let{legend:t}=e,{hideLegend:i=!1}=e,{height:l=300}=e,{capitalize:o}=e,a=o(t.value)||"No value",u=t.values.length*16>l-50;return n.$$set=c=>{"legend"in c&&r(0,t=c.legend),"hideLegend"in c&&r(1,i=c.hideLegend),"height"in c&&r(2,l=c.height),"capitalize"in c&&r(5,o=c.capitalize)},[t,i,l,a,u,o]}class Qn extends Re{constructor(e){super(),Te(this,e,jn,Jn,ve,{legend:0,hideLegend:1,height:2,capitalize:5})}}function Kn(n){let e,r,t,i,l,o,a,s,u,c,f=(n[0].valueFmt?ht(n[0].minValue,n[0].valueFmt):n[0].minValue)+"",m,g,h,_=(n[0].valueFmt?ht(n[0].maxValue,n[0].valueFmt):n[0].maxValue)+"",v,b;return{c(){e=H("div"),r=H("div"),t=H("span"),i=ke(n[6]),l=W(),o=H("div"),a=H("span"),s=W(),u=H("div"),c=H("span"),m=ke(f),g=W(),h=H("span"),v=ke(_),this.h()},l(S){e=D(S,"DIV",{class:!0});var P=re(e);r=D(P,"DIV",{class:!0});var x=re(r);t=D(x,"SPAN",{});var Q=re(t);i=Le(Q,n[6]),Q.forEach(E),x.forEach(E),l=F(P),o=D(P,"DIV",{class:!0});var $=re(o);a=D($,"SPAN",{style:!0,class:!0});var V=re(a);V.forEach(E),s=F($),u=D($,"DIV",{class:!0});var y=re(u);c=D(y,"SPAN",{class:!0});var C=re(c);m=Le(C,f),C.forEach(E),g=F(y),h=D(y,"SPAN",{class:!0});var w=re(h);v=Le(w,_),w.forEach(E),y.forEach(E),$.forEach(E),P.forEach(E),this.h()},h(){M(r,"class","flex flex-wrap flex-col font-semibold"),Ke(a,"background",n[0].colorPalette?`linear-gradient(to right, ${n[0].colorPalette.join(", ")})`:n[2].colors["base-100"]),M(a,"class","relative h-2 min-w-56"),M(c,"class","text-[10px] inline-block"),M(h,"class","text-[10px] inline-block"),M(u,"class","flex justify-between"),M(o,"class","flex flex-col justify-center overflow-hidden h-8 w-full"),M(e,"class",b="flex flex-col "+(n[1]?n[4]:n[5])+" transition-[opacity, max-height, overflow-y] duration-[350ms] ease-in-out w-full")},m(S,P){T(S,e,P),q(e,r),q(r,t),q(t,i),q(e,l),q(e,o),q(o,a),q(o,s),q(o,u),q(u,c),q(c,m),q(u,g),q(u,h),q(h,v)},p(S,[P]){P&5&&Ke(a,"background",S[0].colorPalette?`linear-gradient(to right, ${S[0].colorPalette.join(", ")})`:S[2].colors["base-100"]),P&1&&f!==(f=(S[0].valueFmt?ht(S[0].minValue,S[0].valueFmt):S[0].minValue)+"")&&Ue(m,f),P&1&&_!==(_=(S[0].valueFmt?ht(S[0].maxValue,S[0].valueFmt):S[0].maxValue)+"")&&Ue(v,_),P&2&&b!==(b="flex flex-col "+(S[1]?S[4]:S[5])+" transition-[opacity, max-height, overflow-y] duration-[350ms] ease-in-out w-full")&&M(e,"class",b)},i:oe,o:oe,d(S){S&&E(e)}}}function xn(n,e,r){let t;const{theme:i}=Gt();Ve(n,i,f=>r(2,t=f));let{legend:l}=e,{hideLegend:o=!1}=e,{capitalize:a}=e,s="max-h-[0px] opacity-0",u="max-h-[300px]",c=a(l.value);return n.$$set=f=>{"legend"in f&&r(0,l=f.legend),"hideLegend"in f&&r(1,o=f.hideLegend),"capitalize"in f&&r(7,a=f.capitalize)},[l,o,t,i,s,u,c,a]}class $n extends Re{constructor(e){super(),Te(this,e,xn,Kn,ve,{legend:0,hideLegend:1,capitalize:7})}}function eo(n){let e,r,t,i,l,o,a=n[0]?"Show Legend":"Hide Legend",s,u,c;return{c(){e=H("button"),r=gr("svg"),t=gr("polyline"),l=W(),o=H("span"),s=ke(a),this.h()},l(f){e=D(f,"BUTTON",{class:!0,"aria-label":!0});var m=re(e);r=hr(m,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var g=re(r);t=hr(g,"polyline",{points:!0}),re(t).forEach(E),g.forEach(E),l=F(m),o=D(m,"SPAN",{class:!0});var h=re(o);s=Le(h,a),h.forEach(E),m.forEach(E),this.h()},h(){M(t,"points","14 17 10 12 14 7"),M(r,"xmlns","http://www.w3.org/2000/svg"),M(r,"width",`8
		`),M(r,"height","8"),M(r,"viewBox","6 6 12 12"),M(r,"fill","none"),M(r,"stroke","currentColor"),M(r,"stroke-width","1"),M(r,"stroke-linecap","round"),M(r,"stroke-linejoin","round"),M(r,"class",i="transform transition-transform duration-300 ease-in-out text-left text-base-content-muted "+(n[0]?n[3][n[2]].hide:n[3][n[2]].show)),M(o,"class","sr-only"),M(e,"class","flex z-[1] items-center px-[8px] py-[1.5px]"),M(e,"aria-label","Toggle Legend")},m(f,m){T(f,e,m),q(e,r),q(r,t),q(e,l),q(e,o),q(o,s),u||(c=[Nt(e,"click",function(){Ti(n[1])&&n[1].apply(this,arguments)}),Nt(e,"dblclick",to)],u=!0)},p(f,[m]){n=f,m&5&&i!==(i="transform transition-transform duration-300 ease-in-out text-left text-base-content-muted "+(n[0]?n[3][n[2]].hide:n[3][n[2]].show))&&M(r,"class",i),m&1&&a!==(a=n[0]?"Show Legend":"Hide Legend")&&Ue(s,a)},i:oe,o:oe,d(f){f&&E(e),u=!1,ir(c)}}}const to=n=>n.stopPropagation();function ro(n,e,r){let{hideLegend:t=!1}=e,{handleLegendToggle:i}=e,{legendPosition:l="bottomLeft"}=e,o="down";l.includes("top")?o="up":l.includes("bottom")&&(o="down");const a={down:{show:"rotate-[270deg]",hide:"rotate-90"},up:{show:"rotate-90",hide:"rotate-[270deg]"}};return n.$$set=s=>{"hideLegend"in s&&r(0,t=s.hideLegend),"handleLegendToggle"in s&&r(1,i=s.handleLegendToggle),"legendPosition"in s&&r(4,l=s.legendPosition)},[t,i,o,a,l]}class io extends Re{constructor(e){super(),Te(this,e,ro,eo,ve,{hideLegend:0,handleLegendToggle:1,legendPosition:4})}}function wr(n,e,r){const t=n.slice();return t[14]=e[r],t}function Pr(n,e,r){const t=n.slice();return t[14]=e[r],t}function Br(n){let e,r,t,i,l,o,a,s,u,c,f,m,g=n[4].length>0&&Wr(n),h=n[5].length>0&&Gr(n);return a=new io({props:{handleLegendToggle:n[11],hideLegend:n[6],multiLegend:n[7],legendPosition:n[1]}}),{c(){e=H("div"),r=H("div"),g&&g.c(),t=W(),h&&h.c(),l=W(),o=H("div"),Y(a.$$.fragment),this.h()},l(_){e=D(_,"DIV",{class:!0,role:!0});var v=re(e);r=D(v,"DIV",{class:!0});var b=re(r);g&&g.l(b),t=F(b),h&&h.l(b),b.forEach(E),l=F(v),o=D(v,"DIV",{class:!0});var S=re(o);Z(a.$$.fragment,S),S.forEach(E),v.forEach(E),this.h()},h(){M(r,"class",i="bg-base-100 background-blur "+n[13][n[1]]+" svelte-168cccw"),M(o,"class",s="bg-base-100 background-blur flex justify-center w-fit transition-[border-radius] ease-in-out "+(n[1].includes("bottom")?"shadow-bottom":"")+" svelte-168cccw"),rt(o,"rounded",n[6]),rt(o,"delay-[225ms]",n[6]),rt(o,"rounded-b",!n[6]&&n[1].includes("bottom")),rt(o,"rounded-t",!n[6]&&!n[1].includes("bottom")),M(e,"class",u="absolute z-[401] m-4 flex max-w-60 legend-font "+n[12]()+" "+(n[9][n[1]]??"top-3 left-[-9px]")+" svelte-168cccw"),M(e,"role","group")},m(_,v){T(_,e,v),q(e,r),g&&g.m(r,null),q(r,t),h&&h.m(r,null),q(e,l),q(e,o),J(a,o,null),c=!0,f||(m=[Nt(e,"wheel",oo),Nt(e,"dblclick",lo)],f=!0)},p(_,v){_[4].length>0?g?(g.p(_,v),v&16&&p(g,1)):(g=Wr(_),g.c(),p(g,1),g.m(r,t)):g&&(_e(),O(g,1,1,()=>{g=null}),ge()),_[5].length>0?h?(h.p(_,v),v&32&&p(h,1)):(h=Gr(_),h.c(),p(h,1),h.m(r,null)):h&&(_e(),O(h,1,1,()=>{h=null}),ge()),(!c||v&2&&i!==(i="bg-base-100 background-blur "+_[13][_[1]]+" svelte-168cccw"))&&M(r,"class",i);const b={};v&64&&(b.hideLegend=_[6]),v&128&&(b.multiLegend=_[7]),v&2&&(b.legendPosition=_[1]),a.$set(b),(!c||v&2&&s!==(s="bg-base-100 background-blur flex justify-center w-fit transition-[border-radius] ease-in-out "+(_[1].includes("bottom")?"shadow-bottom":"")+" svelte-168cccw"))&&M(o,"class",s),(!c||v&66)&&rt(o,"rounded",_[6]),(!c||v&66)&&rt(o,"delay-[225ms]",_[6]),(!c||v&66)&&rt(o,"rounded-b",!_[6]&&_[1].includes("bottom")),(!c||v&66)&&rt(o,"rounded-t",!_[6]&&!_[1].includes("bottom")),(!c||v&2&&u!==(u="absolute z-[401] m-4 flex max-w-60 legend-font "+_[12]()+" "+(_[9][_[1]]??"top-3 left-[-9px]")+" svelte-168cccw"))&&M(e,"class",u)},i(_){c||(p(g),p(h),p(a.$$.fragment,_),c=!0)},o(_){O(g),O(h),O(a.$$.fragment,_),c=!1},d(_){_&&E(e),g&&g.d(),h&&h.d(),j(a),f=!1,ir(m)}}}function Wr(n){let e,r,t=Fe(n[4]),i=[];for(let o=0;o<t.length;o+=1)i[o]=Fr(Pr(n,t,o));const l=o=>O(i[o],1,1,()=>{i[o]=null});return{c(){e=H("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=D(o,"DIV",{class:!0});var a=re(e);for(let s=0;s<i.length;s+=1)i[s].l(a);a.forEach(E),this.h()},h(){M(e,"class","flex flex-wrap hover:cursor-default")},m(o,a){T(o,e,a);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null);r=!0},p(o,a){if(a&2260){t=Fe(o[4]);let s;for(s=0;s<t.length;s+=1){const u=Pr(o,t,s);i[s]?(i[s].p(u,a),p(i[s],1)):(i[s]=Fr(u),i[s].c(),p(i[s],1),i[s].m(e,null))}for(_e(),s=t.length;s<i.length;s+=1)l(s);ge()}},i(o){if(!r){for(let a=0;a<t.length;a+=1)p(i[a]);r=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)O(i[a]);r=!1},d(o){o&&E(e),Tt(i,o)}}}function Fr(n){let e,r,t,i,l;return r=new Qn({props:{height:n[2],legend:n[14],handleLegendToggle:n[11],hideLegend:n[6],multiLegend:n[7],capitalize:bi}}),{c(){e=H("div"),Y(r.$$.fragment),t=W(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=re(e);Z(r.$$.fragment,a),t=F(a),a.forEach(E),this.h()},h(){M(e,"class",i="border-l first:border-none flex transition-[border, padding] ease-in-out duration-[350ms] px-2 truncate "+(n[7]?"w-1/2":"max-w-48")+" "+(n[6]?" py-0":" py-1"))},m(o,a){T(o,e,a),J(r,e,null),q(e,t),l=!0},p(o,a){const s={};a&4&&(s.height=o[2]),a&16&&(s.legend=o[14]),a&64&&(s.hideLegend=o[6]),a&128&&(s.multiLegend=o[7]),r.$set(s),(!l||a&192&&i!==(i="border-l first:border-none flex transition-[border, padding] ease-in-out duration-[350ms] px-2 truncate "+(o[7]?"w-1/2":"max-w-48")+" "+(o[6]?" py-0":" py-1")))&&M(e,"class",i)},i(o){l||(p(r.$$.fragment,o),l=!0)},o(o){O(r.$$.fragment,o),l=!1},d(o){o&&E(e),j(r)}}}function Gr(n){let e,r,t=Fe(n[5]),i=[];for(let o=0;o<t.length;o+=1)i[o]=zr(wr(n,t,o));const l=o=>O(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ee()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ee()},m(o,a){for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(o,a);T(o,e,a),r=!0},p(o,a){if(a&2272){t=Fe(o[5]);let s;for(s=0;s<t.length;s+=1){const u=wr(o,t,s);i[s]?(i[s].p(u,a),p(i[s],1)):(i[s]=zr(u),i[s].c(),p(i[s],1),i[s].m(e.parentNode,e))}for(_e(),s=t.length;s<i.length;s+=1)l(s);ge()}},i(o){if(!r){for(let a=0;a<t.length;a+=1)p(i[a]);r=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)O(i[a]);r=!1},d(o){o&&E(e),Tt(i,o)}}}function zr(n){let e,r,t,i,l;return r=new $n({props:{legend:n[14],handleLegendToggle:n[11],hideLegend:n[6],multiLegend:n[7],capitalize:bi}}),{c(){e=H("div"),Y(r.$$.fragment),t=W(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=re(e);Z(r.$$.fragment,a),t=F(a),a.forEach(E),this.h()},h(){M(e,"class",i="border-t border-base-300 first:border-none overflow-hidden transition-[border, padding] duration-[350ms] ease-in-out px-2 "+(n[6]?"py-0 border-none":"py-1"))},m(o,a){T(o,e,a),J(r,e,null),q(e,t),l=!0},p(o,a){const s={};a&32&&(s.legend=o[14]),a&64&&(s.hideLegend=o[6]),a&128&&(s.multiLegend=o[7]),r.$set(s),(!l||a&64&&i!==(i="border-t border-base-300 first:border-none overflow-hidden transition-[border, padding] duration-[350ms] ease-in-out px-2 "+(o[6]?"py-0 border-none":"py-1")))&&M(e,"class",i)},i(o){l||(p(r.$$.fragment,o),l=!0)},o(o){O(r.$$.fragment,o),l=!1},d(o){o&&E(e),j(r)}}}function no(n){let e,r,t=n[8].length>0&&Br(n);return{c(){t&&t.c(),e=Ee()},l(i){t&&t.l(i),e=Ee()},m(i,l){t&&t.m(i,l),T(i,e,l),r=!0},p(i,[l]){i[8].length>0?t?(t.p(i,l),l&256&&p(t,1)):(t=Br(i),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(_e(),O(t,1,1,()=>{t=null}),ge())},i(i){r||(p(t),r=!0)},o(i){O(t),r=!1},d(i){i&&E(e),t&&t.d(i)}}}function bi(n){return n&&n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}const oo=n=>n.stopPropagation(),lo=n=>n.stopPropagation();function ao(n,e,r){let t,i,l=oe,o=()=>(l(),l=it(_,Q=>r(4,i=Q)),_),a,s,u=oe,c=()=>(u(),u=it(m,Q=>r(8,s=Q)),m);n.$$.on_destroy.push(()=>l()),n.$$.on_destroy.push(()=>u());const f={topLeft:"top-[-9px] left-[-9px]",topRight:"top-[-9px] right-[-9px]",bottomLeft:"bottom-[-9px] left-[-9px]",bottomRight:"bottom-[-9px] right-[-9px] "};let{legendData:m}=e;c();let{legendPosition:g="bottomLeft"}=e,{height:h=300}=e,{categoricalLegendData:_=Ft(m,Q=>Q.filter($=>$.legendType==="categorical"))}=e;o();let v=Ft(m,Q=>Q.filter($=>$.legendType==="scalar"));Ve(n,v,Q=>r(5,a=Q));let b=!1;const S=()=>{r(6,b=!b)},P=()=>{let Q="";return g.includes("bottom")?Q+="flex-col":Q+="flex-col-reverse",g.includes("Right")&&(Q+=" items-end"),Q},x={bottomLeft:"rounded-t rounded-br shadow-bottom-right",bottomRight:"rounded-t rounded-bl shadow-bottom-left",topLeft:"rounded-b rounded-tr z-[405] shadow-bottom",topRight:"rounded-b rounded-tl z-[405] shadow-bottom"};return n.$$set=Q=>{"legendData"in Q&&c(r(0,m=Q.legendData)),"legendPosition"in Q&&r(1,g=Q.legendPosition),"height"in Q&&r(2,h=Q.height),"categoricalLegendData"in Q&&o(r(3,_=Q.categoricalLegendData))},n.$$.update=()=>{n.$$.dirty&48&&r(7,t=i.length>1||a.length>1||a.length>0&&i.length>0)},[m,g,h,_,i,a,b,t,s,f,v,S,P,x]}class so extends Re{constructor(e){super(),Te(this,e,ao,no,ve,{legendData:0,legendPosition:1,height:2,categoricalLegendData:3})}}function uo(n){let e,r,t,i,l,o,a,s,u,c=n[1]&&Xr(n);const f=n[18].default,m=At(f,n,n[17],null);let g=n[6]&&Ur(n),h=!n[7]&&qr(n);return{c(){e=H("div"),c&&c.c(),r=W(),t=H("div"),i=H("div"),m&&m.c(),l=W(),g&&g.c(),o=W(),h&&h.c(),this.h()},l(_){e=D(_,"DIV",{class:!0});var v=re(e);c&&c.l(v),r=F(v),t=D(v,"DIV",{class:!0,style:!0});var b=re(t);i=D(b,"DIV",{class:!0});var S=re(i);m&&m.l(S),S.forEach(E),l=F(b),g&&g.l(b),b.forEach(E),o=F(v),h&&h.l(v),v.forEach(E),this.h()},h(){M(i,"class","svelte-z9gk2f"),M(t,"class","z-0 rounded-md focus:outline-none svelte-z9gk2f"),Ke(t,"height",n[0]+"px"),M(e,"class","relative break-inside-avoid svelte-z9gk2f")},m(_,v){T(_,e,v),c&&c.m(e,null),q(e,r),q(e,t),q(t,i),m&&m.m(i,null),q(t,l),g&&g.m(t,null),n[20](t),q(e,o),h&&h.m(e,null),a=!0,s||(u=Nt(i,"dispatcherror",n[19]),s=!0)},p(_,v){_[1]?c?c.p(_,v):(c=Xr(_),c.c(),c.m(e,r)):c&&(c.d(1),c=null),m&&m.p&&(!a||v&131072)&&Ot(m,f,_,_[17],a?Rt(f,_[17],v,null):vt(_[17]),null),_[6]?g?(g.p(_,v),v&64&&p(g,1)):(g=Ur(_),g.c(),p(g,1),g.m(t,null)):g&&(_e(),O(g,1,1,()=>{g=null}),ge()),(!a||v&1)&&Ke(t,"height",_[0]+"px"),_[7]?h&&(_e(),O(h,1,1,()=>{h=null}),ge()):h?(h.p(_,v),v&128&&p(h,1)):(h=qr(_),h.c(),p(h,1),h.m(e,null))},i(_){a||(p(m,_),p(g),p(h),a=!0)},o(_){O(m,_),O(g),O(h),a=!1},d(_){_&&E(e),c&&c.d(),m&&m.d(_),g&&g.d(),n[20](null),h&&h.d(),s=!1,u()}}}function co(n){let e,r;return e=new di({props:{error:n[5],title:n[3]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&32&&(l.error=t[5]),i&8&&(l.title=t[3]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Xr(n){let e,r;return{c(){e=H("h4"),r=ke(n[1]),this.h()},l(t){e=D(t,"H4",{class:!0});var i=re(e);r=Le(i,n[1]),i.forEach(E),this.h()},h(){M(e,"class","markdown mb-2")},m(t,i){T(t,e,i),q(e,r)},p(t,i){i&2&&Ue(r,t[1])},d(t){t&&E(e)}}}function Ur(n){let e,r;return e=new so({props:{legendData:n[9],legendPosition:n[2],height:n[0]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&4&&(l.legendPosition=t[2]),i&1&&(l.height=t[0]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function qr(n){let e,r,t;return r=new Bi({}),{c(){e=H("div"),Y(r.$$.fragment),this.h()},l(i){e=D(i,"DIV",{class:!0,style:!0});var l=re(e);Z(r.$$.fragment,l),l.forEach(E),this.h()},h(){M(e,"class","absolute left-0 right-0 bottom-0 w-full *:m-0 bg-base-100 svelte-z9gk2f"),Ke(e,"height",n[0]+"px")},m(i,l){T(i,e,l),J(r,e,null),t=!0},p(i,l){(!t||l&1)&&Ke(e,"height",i[0]+"px")},i(i){t||(p(r.$$.fragment,i),t=!0)},o(i){O(r.$$.fragment,i),t=!1},d(i){i&&E(e),j(r)}}}function fo(n){let e,r,t,i;const l=[co,uo],o=[];function a(s,u){return s[5]?0:1}return e=a(n),r=o[e]=l[e](n),{c(){r.c(),t=Ee()},l(s){r.l(s),t=Ee()},m(s,u){o[e].m(s,u),T(s,t,u),i=!0},p(s,[u]){let c=e;e=a(s),e===c?o[e].p(s,u):(_e(),O(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(s,u):(r=o[e]=l[e](s),r.c()),p(r,1),r.m(t.parentNode,t))},i(s){i||(p(r),i=!0)},o(s){O(r),i=!1},d(s){s&&E(t),o[e].d(s)}}}const mo=39.077;function _o(n,e,r){let t,i,l,{$$slots:o={},$$scope:a}=e,s,{startingLat:u=void 0}=e,{startingLong:c=void 0}=e,{startingZoom:f=void 0}=e;const m=-180,g=u||c;let{height:h=300}=e,{basemap:_=void 0}=e,{title:v=void 0}=e,b,{attribution:S=void 0}=e;const P=new er;tr(pi,P);const x=P.allGeoJsonLoaded;Ve(n,x,N=>r(7,l=N));let Q=P.legendData;Ve(n,Q,N=>r(6,i=N));let{legendPosition:$="bottomLeft"}=e,V=P.internalError;Ve(n,V,N=>r(16,t=N));let{chartType:y="Map"}=e;nr(async()=>{try{const N=u??!1?[u,c]:[mo,m];return await P.init(s,_??"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",N,f,g,S),()=>P.cleanup()}catch(N){r(5,b=N.message),console.error(N)}});const C=N=>r(5,b=N.detail);function w(N){St[N?"unshift":"push"](()=>{s=N,r(4,s)})}return n.$$set=N=>{"startingLat"in N&&r(11,u=N.startingLat),"startingLong"in N&&r(12,c=N.startingLong),"startingZoom"in N&&r(13,f=N.startingZoom),"height"in N&&r(0,h=N.height),"basemap"in N&&r(14,_=N.basemap),"title"in N&&r(1,v=N.title),"attribution"in N&&r(15,S=N.attribution),"legendPosition"in N&&r(2,$=N.legendPosition),"chartType"in N&&r(3,y=N.chartType),"$$scope"in N&&r(17,a=N.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&$&&P.updateLegendPosition($),n.$$.dirty&65536&&t!==void 0&&r(5,b=t)},[h,v,$,y,s,b,i,l,x,Q,V,u,c,f,_,S,t,a,o,C,w]}class go extends Re{constructor(e){super(),Te(this,e,_o,fo,ve,{startingLat:11,startingLong:12,startingZoom:13,height:0,basemap:14,title:1,attribution:15,legendPosition:2,chartType:3})}}const ho=n=>({data:n&1024}),Yr=n=>({data:n[10]});function Zr(n){let e,r;return{c(){e=H("h4"),r=ke(n[1]),this.h()},l(t){e=D(t,"H4",{class:!0});var i=re(e);r=Le(i,n[1]),i.forEach(E),this.h()},h(){M(e,"class","markdown mb-2")},m(t,i){T(t,e,i),q(e,r)},p(t,i){i&2&&Ue(r,t[1])},d(t){t&&E(e)}}}function Eo(n){let e;const r=n[8].default,t=At(r,n,n[9],Yr);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,l){t&&t.m(i,l),e=!0},p(i,l){t&&t.p&&(!e||l&1536)&&Ot(t,r,i,i[9],e?Rt(r,i[9],l,ho):vt(i[9]),Yr)},i(i){e||(p(t,i),e=!0)},o(i){O(t,i),e=!1},d(i){t&&t.d(i)}}}function po(n){let e,r;const t=[n[7],{title:void 0}];let i={$$slots:{default:[Eo]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)i=pe(i,t[l]);return e=new go({props:i}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,o){J(e,l,o),r=!0},p(l,o){const a=o&128?st(t,[o&128&&Dt(l[7]),o&0&&{title:void 0}]):{};o&1536&&(a.$$scope={dirty:o,ctx:l}),e.$set(a)},i(l){r||(p(e.$$.fragment,l),r=!0)},o(l){O(e.$$.fragment,l),r=!1},d(l){j(e,l)}}}function bo(n){let e,r;return e=new mi({props:{slot:"empty",emptyMessage:n[3],emptySet:n[2],chartType:n[4],isInitial:n[5]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&8&&(l.emptyMessage=t[3]),i&4&&(l.emptySet=t[2]),i&16&&(l.chartType=t[4]),i&32&&(l.isInitial=t[5]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function No(n){let e,r;return e=new di({props:{slot:"error",title:n[4],error:n[6]??n[10].error.message}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i&16&&(l.title=t[4]),i&1088&&(l.error=t[6]??t[10].error.message),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function So(n){let e,r,t,i,l=n[1]&&Zr(n);return t=new fi({props:{data:n[0],$$slots:{error:[No,({loaded:o})=>({10:o}),({loaded:o})=>o?1024:0],empty:[bo],default:[po,({loaded:o})=>({10:o}),({loaded:o})=>o?1024:0]},$$scope:{ctx:n}}}),{c(){e=H("div"),l&&l.c(),r=W(),Y(t.$$.fragment),this.h()},l(o){e=D(o,"DIV",{style:!0});var a=re(e);l&&l.l(a),r=F(a),Z(t.$$.fragment,a),a.forEach(E),this.h()},h(){Ke(e,"margin-top","15px"),Ke(e,"margin-bottom","10px")},m(o,a){T(o,e,a),l&&l.m(e,null),q(e,r),J(t,e,null),i=!0},p(o,[a]){o[1]?l?l.p(o,a):(l=Zr(o),l.c(),l.m(e,r)):l&&(l.d(1),l=null);const s={};a&1&&(s.data=o[0]),a&1788&&(s.$$scope={dirty:a,ctx:o}),t.$set(s)},i(o){i||(p(t.$$.fragment,o),i=!0)},o(o){O(t.$$.fragment,o),i=!1},d(o){o&&E(e),l&&l.d(),j(t)}}}function Ao(n,e,r){const t=["data","title","emptySet","emptyMessage","chartType","isInitial","error"];let i=Ce(e,t),{$$slots:l={},$$scope:o}=e,{data:a}=e,{title:s=void 0}=e,{emptySet:u=void 0}=e,{emptyMessage:c=void 0}=e,{chartType:f=void 0}=e,{isInitial:m=!0}=e,{error:g=void 0}=e;return n.$$set=h=>{e=pe(pe({},e),et(h)),r(7,i=Ce(e,t)),"data"in h&&r(0,a=h.data),"title"in h&&r(1,s=h.title),"emptySet"in h&&r(2,u=h.emptySet),"emptyMessage"in h&&r(3,c=h.emptyMessage),"chartType"in h&&r(4,f=h.chartType),"isInitial"in h&&r(5,m=h.isInitial),"error"in h&&r(6,g=h.error),"$$scope"in h&&r(9,o=h.$$scope)},[a,s,u,c,f,m,g,i,l,o]}class Oo extends Re{constructor(e){super(),Te(this,e,Ao,So,ve,{data:0,title:1,emptySet:2,emptyMessage:3,chartType:4,isInitial:5,error:6})}}function vo(n,e,r){let{map:t=void 0}=e,{options:i=void 0}=e,{selectedOptions:l=void 0}=e,{coords:o=void 0}=e,{onclick:a=void 0}=e,{setInput:s=void 0}=e,{unsetInput:u=void 0}=e,{tooltip:c=void 0}=e,{tooltipOptions:f=void 0}=e,{tooltipType:m=void 0}=e,{showTooltip:g=void 0}=e,{item:h=void 0}=e,{link:_=void 0}=e,{name:v=void 0}=e;return nr(()=>{const b=t.addCircle(h,v,i,l,o,a,s,u,h[_]);if(g){const S=t.buildTooltip(h,c);t.attachTooltip(b,S,f,m)}return()=>b.remove()}),n.$$set=b=>{"map"in b&&r(0,t=b.map),"options"in b&&r(1,i=b.options),"selectedOptions"in b&&r(2,l=b.selectedOptions),"coords"in b&&r(3,o=b.coords),"onclick"in b&&r(4,a=b.onclick),"setInput"in b&&r(5,s=b.setInput),"unsetInput"in b&&r(6,u=b.unsetInput),"tooltip"in b&&r(7,c=b.tooltip),"tooltipOptions"in b&&r(8,f=b.tooltipOptions),"tooltipType"in b&&r(9,m=b.tooltipType),"showTooltip"in b&&r(10,g=b.showTooltip),"item"in b&&r(11,h=b.item),"link"in b&&r(12,_=b.link),"name"in b&&r(13,v=b.name)},[t,i,l,o,a,s,u,c,f,m,g,h,_,v]}class Ro extends Re{constructor(e){super(),Te(this,e,vo,null,ve,{map:0,options:1,selectedOptions:2,coords:3,onclick:4,setInput:5,unsetInput:6,tooltip:7,tooltipOptions:8,tooltipType:9,showTooltip:10,item:11,link:12,name:13})}}function Jr(n,e,r){const t=n.slice();return t[68]=e[r],t}function To(n){let e=n[33].handleInternalError(n[71])+"",r;return{c(){r=ke(e)},l(t){r=Le(t,e)},m(t,i){T(t,r,i)},p(t,i){i[0]&268435520&&e!==(e=t[33].handleInternalError(t[71])+"")&&Ue(r,e)},i:oe,o:oe,d(t){t&&E(r)}}}function Mo(n){let e,r,t=Fe(n[27]),i=[];for(let o=0;o<t.length;o+=1)i[o]=jr(Jr(n,t,o));const l=o=>O(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ee()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ee()},m(o,a){for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(o,a);T(o,e,a),r=!0},p(o,a){if(a[0]&2017460159|a[1]&1767){t=Fe(o[27]);let s;for(s=0;s<t.length;s+=1){const u=Jr(o,t,s);i[s]?(i[s].p(u,a),p(i[s],1)):(i[s]=jr(u),i[s].c(),p(i[s],1),i[s].m(e.parentNode,e))}for(_e(),s=t.length;s<i.length;s+=1)l(s);ge()}},i(o){if(!r){for(let a=0;a<t.length;a+=1)p(i[a]);r=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)O(i[a]);r=!1},d(o){o&&E(e),Tt(i,o)}}}function jr(n){let e,r;function t(){return n[57](n[68])}function i(){return n[58](n[68])}function l(){return n[59](n[68])}return e=new Ro({props:{map:n[33],options:{fillColor:n[29]??n[33].handleFillColor(n[68],n[9],n[19],n[21],n[20],n[28]),radius:n[10]?n[37](n[68][n[10]]):n[0],fillOpacity:n[2],opacity:n[2],weight:n[1],color:n[30],className:`outline-none ${n[14]}`,markerType:n[18],pane:n[38]},selectedOptions:{fillColor:n[31],fillOpacity:n[4],opacity:n[4],weight:n[3],color:n[32],className:`outline-none ${n[15]}`},coords:[n[68][n[7]],n[68][n[8]]],onclick:t,setInput:i,unsetInput:l,tooltip:n[16],tooltipOptions:n[36],tooltipType:n[17],item:n[68],link:n[11],showTooltip:n[5]}}),{c(){Y(e.$$.fragment)},l(o){Z(e.$$.fragment,o)},m(o,a){J(e,o,a),r=!0},p(o,a){n=o;const s={};a[0]&2017216007&&(s.options={fillColor:n[29]??n[33].handleFillColor(n[68],n[9],n[19],n[21],n[20],n[28]),radius:n[10]?n[37](n[68][n[10]]):n[0],fillOpacity:n[2],opacity:n[2],weight:n[1],color:n[30],className:`outline-none ${n[14]}`,markerType:n[18],pane:n[38]}),a[0]&32792|a[1]&3&&(s.selectedOptions={fillColor:n[31],fillOpacity:n[4],opacity:n[4],weight:n[3],color:n[32],className:`outline-none ${n[15]}`}),a[0]&134218112&&(s.coords=[n[68][n[7]],n[68][n[8]]]),a[0]&134225920&&(s.onclick=t),a[0]&134221824&&(s.setInput=i),a[0]&134221824&&(s.unsetInput=l),a[0]&65536&&(s.tooltip=n[16]),a[0]&131072&&(s.tooltipType=n[17]),a[0]&134217728&&(s.item=n[68]),a[0]&2048&&(s.link=n[11]),a[0]&32&&(s.showTooltip=n[5]),e.$set(s)},i(o){r||(p(e.$$.fragment,o),r=!0)},o(o){O(e.$$.fragment,o),r=!1},d(o){j(e,o)}}}function ko(n){return{c:oe,l:oe,m:oe,p:oe,i:oe,o:oe,d:oe}}function Lo(n){let e,r,t,i={ctx:n,current:null,token:null,hasCatch:!0,pending:ko,then:Mo,catch:To,error:71,blocks:[,,,]};return vr(r=Promise.all([n[33].initPromise,n[6].fetch(),n[39](n[28])]),i),{c(){e=Ee(),i.block.c()},l(l){e=Ee(),i.block.l(l)},m(l,o){T(l,e,o),i.block.m(l,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,t=!0},p(l,o){n=l,i.ctx=n,o[0]&268435520&&r!==(r=Promise.all([n[33].initPromise,n[6].fetch(),n[39](n[28])]))&&vr(r,i)||on(i,n,o)},i(l){t||(p(i.block),t=!0)},o(l){for(let o=0;o<3;o+=1){const a=i.blocks[o];O(a)}t=!1},d(l){l&&E(e),i.block.d(l),i.token=null,i=null}}}function yo(n,e,r){let t,i,l,o,a,s,u,c=oe,f=()=>(c(),c=it(se,k=>r(27,u=k)),se),m,g=oe,h=()=>(g(),g=it(l,k=>r(64,m=k)),l),_,v,b=oe,S=()=>(b(),b=it(i,k=>r(29,v=k)),i),P,x=oe,Q=()=>(x(),x=it(t,k=>r(30,P=k)),t),$,V=oe,y=()=>(V(),V=it(o,k=>r(31,$=k)),o),C,w=oe,N=()=>(w(),w=it(a,k=>r(32,C=k)),a);n.$$.on_destroy.push(()=>c()),n.$$.on_destroy.push(()=>g()),n.$$.on_destroy.push(()=>b()),n.$$.on_destroy.push(()=>x()),n.$$.on_destroy.push(()=>V()),n.$$.on_destroy.push(()=>w());const B=ai(pi);if(!B)throw new Error("Evidence Map Context has not been set. Points will not function");const{theme:A,resolveColor:R,resolveColorPalette:G}=Gt();Ve(n,A,k=>r(28,_=k));const le=ci();Ve(n,le,k=>r(63,s=k));let{data:se}=e;f();let{lat:K=void 0}=e,{long:z=void 0}=e,{value:I=void 0}=e,{valueFmt:U=void 0}=e,{sizeFmt:ee=void 0}=e,{size:ie=void 0}=e,{legendType:ae=void 0}=e,{chartType:ne="Point Map"}=e,{legend:te=!0}=e;if(ie){if(ie=Number(ie),isNaN(ie))throw Error("size must be a number");if(ie<0)throw Error("size cannot be negative")}else ie=5;let{sizeCol:ue=void 0}=e,{min:ce=void 0}=e,{max:Pe=void 0}=e,{link:Oe=void 0}=e,{pointName:ye=void 0}=e,{name:d=void 0}=e,{onclick:L=()=>{}}=e,{borderWidth:he=void 0}=e;if(he){if(he=Number(he),isNaN(he))throw Error("borderWidth must be a number");if(he<0)throw Error("borderWidth cannot be negative")}else he=.75;let{borderColor:qe="white"}=e,{color:Ye=void 0}=e,{colorPalette:Ze=void 0}=e,{opacity:be=void 0}=e;if(be){if(be=Number(be),isNaN(be))throw Error("opacity must be a number");if(be<0)throw Error("opacity cannot be negative")}else be=1;let{pointClass:Ie=void 0}=e,{selectedBorderWidth:de=void 0}=e;if(de){if(de=Number(de),isNaN(de))throw Error("selectedBorderWidth must be a number");if(de<0)throw Error("selectedBorderWidth cannot be negative")}else de=.75;let{selectedColor:Je="accent"}=e,{selectedBorderColor:ct="accent-content"}=e,{selectedOpacity:Be=void 0}=e;if(Be){if(Be=Number(Be),isNaN(Be))throw Error("selectedOpacity must be a number");if(Be<0)throw Error("selectedOpacity cannot be negative")}else Be=1;let{selectedPointClass:je=void 0}=e,{showTooltip:Ge=!0}=e,{tooltip:He=[]}=e;He.length===0&&(ye&&He.push({id:ye,showColumnName:!1,valueClass:"font-bold text-sm"}),I&&He.push({id:I,fmt:U}),ue&&ue!==I&&He.push({id:ue,fmt:ee})),He.length===0&&(Ge=!1);let{tooltipClass:ft=void 0}=e,{tooltipType:_t="hover"}=e;const Mt={permanent:!1,direction:"auto",sticky:!0,opacity:1,className:`${ft}`,interactive:!0};let{maxSize:fe=25}=e;function zt(k){return Math.sqrt(k/lr*ar)}let Xt,Ut,or,lr,ar,qt,{pointStyle:sr="points"}=e,ur=B.registerPane(Wi());async function Ni(k){if(se){let xe={corordinates:[K,z],value:I,checkInputs:Gi,min:ce,max:Pe,colorPalette:m,legendType:ae,valueFmt:U,chartType:ne,legendId:ur,legend:te,theme:k};r(19,{values:Xt,colorPalette:qt,colorScale:Ut}=await B.initializeData(se,xe),Xt,r(21,qt),r(20,Ut)),ue&&(or=Fi(se,ue),lr=or[1],ar=Math.pow(fe,2)),d&&u.length>0&&cr(u[0],d)}}function cr(k,xe){Wt(le,s[xe]=Object.fromEntries(Object.keys(k).map(mt=>[mt,!0])),s)}function fr(k,xe){Wt(le,s[xe]=Object.fromEntries(Object.entries(k).map(([mt,Yt])=>[mt,typeof Yt=="string"?Yt.replaceAll("'","''"):Yt])),s)}function mr(k,xe){le.update(mt=>(Object.prototype.hasOwnProperty.call(mt,xe)&&delete mt[xe],mt)),cr(k,xe)}const Si=k=>{L(k)},Ai=k=>{d&&fr(k,d)},Oi=k=>{d&&mr(k,d)};return n.$$set=k=>{"data"in k&&f(r(6,se=k.data)),"lat"in k&&r(7,K=k.lat),"long"in k&&r(8,z=k.long),"value"in k&&r(9,I=k.value),"valueFmt"in k&&r(42,U=k.valueFmt),"sizeFmt"in k&&r(43,ee=k.sizeFmt),"size"in k&&r(0,ie=k.size),"legendType"in k&&r(44,ae=k.legendType),"chartType"in k&&r(45,ne=k.chartType),"legend"in k&&r(46,te=k.legend),"sizeCol"in k&&r(10,ue=k.sizeCol),"min"in k&&r(47,ce=k.min),"max"in k&&r(48,Pe=k.max),"link"in k&&r(11,Oe=k.link),"pointName"in k&&r(49,ye=k.pointName),"name"in k&&r(12,d=k.name),"onclick"in k&&r(13,L=k.onclick),"borderWidth"in k&&r(1,he=k.borderWidth),"borderColor"in k&&r(50,qe=k.borderColor),"color"in k&&r(51,Ye=k.color),"colorPalette"in k&&r(52,Ze=k.colorPalette),"opacity"in k&&r(2,be=k.opacity),"pointClass"in k&&r(14,Ie=k.pointClass),"selectedBorderWidth"in k&&r(3,de=k.selectedBorderWidth),"selectedColor"in k&&r(53,Je=k.selectedColor),"selectedBorderColor"in k&&r(54,ct=k.selectedBorderColor),"selectedOpacity"in k&&r(4,Be=k.selectedOpacity),"selectedPointClass"in k&&r(15,je=k.selectedPointClass),"showTooltip"in k&&r(5,Ge=k.showTooltip),"tooltip"in k&&r(16,He=k.tooltip),"tooltipClass"in k&&r(55,ft=k.tooltipClass),"tooltipType"in k&&r(17,_t=k.tooltipType),"maxSize"in k&&r(56,fe=k.maxSize),"pointStyle"in k&&r(18,sr=k.pointStyle)},n.$$.update=()=>{n.$$.dirty[1]&524288&&Q(r(26,t=R(qe))),n.$$.dirty[1]&1048576&&S(r(25,i=R(Ye))),n.$$.dirty[1]&2097152&&h(r(24,l=G(Ze))),n.$$.dirty[1]&4194304&&y(r(23,o=R(Je))),n.$$.dirty[1]&8388608&&N(r(22,a=R(ct)))},[ie,he,be,de,Be,Ge,se,K,z,I,ue,Oe,d,L,Ie,je,He,_t,sr,Xt,Ut,qt,a,o,l,i,t,u,_,v,P,$,C,B,A,le,Mt,zt,ur,Ni,fr,mr,U,ee,ae,ne,te,ce,Pe,ye,qe,Ye,Ze,Je,ct,ft,fe,Si,Ai,Oi]}class Vo extends Re{constructor(e){super(),Te(this,e,yo,Lo,ve,{data:6,lat:7,long:8,value:9,valueFmt:42,sizeFmt:43,size:0,legendType:44,chartType:45,legend:46,sizeCol:10,min:47,max:48,link:11,pointName:49,name:12,onclick:13,borderWidth:1,borderColor:50,color:51,colorPalette:52,opacity:2,pointClass:14,selectedBorderWidth:3,selectedColor:53,selectedBorderColor:54,selectedOpacity:4,selectedPointClass:15,showTooltip:5,tooltip:16,tooltipClass:55,tooltipType:17,maxSize:56,pointStyle:18},null,[-1,-1,-1])}}function Co(n){let e,r;const t=[{sizeCol:n[0]},{opacity:n[1]},{legendType:n[3]},{colorPalette:n[5]},{legend:n[4]},{pointStyle:n[2]},n[6]];let i={};for(let l=0;l<t.length;l+=1)i=pe(i,t[l]);return e=new Vo({props:i}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,o){J(e,l,o),r=!0},p(l,[o]){const a=o&127?st(t,[o&1&&{sizeCol:l[0]},o&2&&{opacity:l[1]},o&8&&{legendType:l[3]},o&32&&{colorPalette:l[5]},o&16&&{legend:l[4]},o&4&&{pointStyle:l[2]},o&64&&Dt(l[6])]):{};e.$set(a)},i(l){r||(p(e.$$.fragment,l),r=!0)},o(l){O(e.$$.fragment,l),r=!1},d(l){j(e,l)}}}function Io(n,e,r){let t;const i=["size","opacity","pointStyle","legendType","colorPalette","legend"];let l=Ce(e,i);const{resolveColorPalette:o}=Gt();let{size:a=void 0}=e,{opacity:s=.8}=e,{pointStyle:u="bubbles"}=e,{legendType:c=void 0}=e,{colorPalette:f=void 0}=e,{legend:m=!0}=e;return n.$$set=g=>{e=pe(pe({},e),et(g)),r(6,l=Ce(e,i)),"size"in g&&r(0,a=g.size),"opacity"in g&&r(1,s=g.opacity),"pointStyle"in g&&r(2,u=g.pointStyle),"legendType"in g&&r(3,c=g.legendType),"colorPalette"in g&&r(7,f=g.colorPalette),"legend"in g&&r(4,m=g.legend)},n.$$.update=()=>{n.$$.dirty&128&&r(5,t=o(f))},[a,s,u,c,m,t,l,f]}class Ho extends Re{constructor(e){super(),Te(this,e,Io,Co,ve,{size:0,opacity:1,pointStyle:2,legendType:3,colorPalette:7,legend:4})}}function Do(n){let e,r;const t=[{data:n[15]},{lat:n[2]},{long:n[3]},{size:n[4]},{colorPalette:n[18]},{legendType:n[12]},{legend:n[13]},n[19]];let i={};for(let l=0;l<t.length;l+=1)i=pe(i,t[l]);return e=new Ho({props:i}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,o){J(e,l,o),r=!0},p(l,o){const a=o&831516?st(t,[o&32768&&{data:l[15]},o&4&&{lat:l[2]},o&8&&{long:l[3]},o&16&&{size:l[4]},o&262144&&{colorPalette:l[18]},o&4096&&{legendType:l[12]},o&8192&&{legend:l[13]},o&524288&&Dt(l[19])]):{};e.$set(a)},i(l){r||(p(e.$$.fragment,l),r=!0)},o(l){O(e.$$.fragment,l),r=!1},d(l){j(e,l)}}}function wo(n){let e,r;return e=new Oo({props:{data:n[15],startingLat:n[5],startingLong:n[6],startingZoom:n[7],height:n[8],basemap:n[9],title:n[10],legendPosition:n[11],isInitial:n[17],chartType:Po,emptySet:n[0],emptyMessage:n[1],error:n[16],attribution:n[14],$$slots:{default:[Do,({data:t})=>({15:t}),({data:t})=>t?32768:0]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,[i]){const l={};i&32768&&(l.data=t[15]),i&32&&(l.startingLat=t[5]),i&64&&(l.startingLong=t[6]),i&128&&(l.startingZoom=t[7]),i&256&&(l.height=t[8]),i&512&&(l.basemap=t[9]),i&1024&&(l.title=t[10]),i&2048&&(l.legendPosition=t[11]),i&131072&&(l.isInitial=t[17]),i&1&&(l.emptySet=t[0]),i&2&&(l.emptyMessage=t[1]),i&65536&&(l.error=t[16]),i&16384&&(l.attribution=t[14]),i&9220124&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}const Po="Bubble Map";function Bo(n,e,r){let t,i;const l=["emptySet","emptyMessage","data","lat","long","size","startingLat","startingLong","startingZoom","height","basemap","title","legendPosition","legendType","colorPalette","legend","attribution"];let o=Ce(e,l);const{resolveColorPalette:a}=Gt();let{emptySet:s=void 0}=e,{emptyMessage:u=void 0}=e,c,{data:f}=e;f||(c="data is required");let{lat:m=void 0}=e;m||(c="lat is required (column containing latitude data)");let{long:g=void 0}=e;g||(c="long is required (column containing longitude data)");let{size:h=void 0}=e;h||(c="size is required (column containing values representing the size of the bubbles)");let{startingLat:_=void 0}=e,{startingLong:v=void 0}=e,{startingZoom:b=void 0}=e,{height:S=300}=e,{basemap:P=void 0}=e,{title:x=void 0}=e,{legendPosition:Q="bottomLeft"}=e,{legendType:$=void 0}=e,{colorPalette:V=void 0}=e,{legend:y=!0}=e,{attribution:C=void 0}=e;const w=we.isQuery(f)?f.hash:void 0;return n.$$set=N=>{e=pe(pe({},e),et(N)),r(19,o=Ce(e,l)),"emptySet"in N&&r(0,s=N.emptySet),"emptyMessage"in N&&r(1,u=N.emptyMessage),"data"in N&&r(15,f=N.data),"lat"in N&&r(2,m=N.lat),"long"in N&&r(3,g=N.long),"size"in N&&r(4,h=N.size),"startingLat"in N&&r(5,_=N.startingLat),"startingLong"in N&&r(6,v=N.startingLong),"startingZoom"in N&&r(7,b=N.startingZoom),"height"in N&&r(8,S=N.height),"basemap"in N&&r(9,P=N.basemap),"title"in N&&r(10,x=N.title),"legendPosition"in N&&r(11,Q=N.legendPosition),"legendType"in N&&r(12,$=N.legendType),"colorPalette"in N&&r(20,V=N.colorPalette),"legend"in N&&r(13,y=N.legend),"attribution"in N&&r(14,C=N.attribution)},n.$$.update=()=>{n.$$.dirty&1048576&&r(18,t=a(V)),n.$$.dirty&32768&&r(17,i=(f==null?void 0:f.hash)===w)},[s,u,m,g,h,_,v,b,S,P,x,Q,$,y,C,f,c,i,t,o,V]}class ut extends Re{constructor(e){super(),Te(this,e,Bo,wo,ve,{emptySet:0,emptyMessage:1,data:15,lat:2,long:3,size:4,startingLat:5,startingLong:6,startingZoom:7,height:8,basemap:9,title:10,legendPosition:11,legendType:12,colorPalette:20,legend:13,attribution:14})}}function Qr(n,e,r){const t=n.slice();return t[66]=e[r],t}function Wo(n){let e,r=me.title+"",t;return{c(){e=H("h1"),t=ke(r),this.h()},l(i){e=D(i,"H1",{class:!0});var l=re(e);t=Le(l,r),l.forEach(E),this.h()},h(){M(e,"class","title")},m(i,l){T(i,e,l),q(e,t)},p:oe,d(i){i&&E(e)}}}function Fo(n){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:oe,p:oe,d:oe}}function Go(n){let e,r,t,i,l;return document.title=e=me.title,{c(){r=W(),t=H("meta"),i=W(),l=H("meta"),this.h()},l(o){r=F(o),t=D(o,"META",{property:!0,content:!0}),i=F(o),l=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a;M(t,"property","og:title"),M(t,"content",((o=me.og)==null?void 0:o.title)??me.title),M(l,"name","twitter:title"),M(l,"content",((a=me.og)==null?void 0:a.title)??me.title)},m(o,a){T(o,r,a),T(o,t,a),T(o,i,a),T(o,l,a)},p(o,a){a&0&&e!==(e=me.title)&&(document.title=e)},d(o){o&&(E(r),E(t),E(i),E(l))}}}function zo(n){var l,o;let e,r,t=(me.description||((l=me.og)==null?void 0:l.description))&&Xo(),i=((o=me.og)==null?void 0:o.image)&&Uo();return{c(){t&&t.c(),e=W(),i&&i.c(),r=Ee()},l(a){t&&t.l(a),e=F(a),i&&i.l(a),r=Ee()},m(a,s){t&&t.m(a,s),T(a,e,s),i&&i.m(a,s),T(a,r,s)},p(a,s){var u,c;(me.description||(u=me.og)!=null&&u.description)&&t.p(a,s),(c=me.og)!=null&&c.image&&i.p(a,s)},d(a){a&&(E(e),E(r)),t&&t.d(a),i&&i.d(a)}}}function Xo(n){let e,r,t,i,l;return{c(){e=H("meta"),r=W(),t=H("meta"),i=W(),l=H("meta"),this.h()},l(o){e=D(o,"META",{name:!0,content:!0}),r=F(o),t=D(o,"META",{property:!0,content:!0}),i=F(o),l=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a,s;M(e,"name","description"),M(e,"content",me.description??((o=me.og)==null?void 0:o.description)),M(t,"property","og:description"),M(t,"content",((a=me.og)==null?void 0:a.description)??me.description),M(l,"name","twitter:description"),M(l,"content",((s=me.og)==null?void 0:s.description)??me.description)},m(o,a){T(o,e,a),T(o,r,a),T(o,t,a),T(o,i,a),T(o,l,a)},p:oe,d(o){o&&(E(e),E(r),E(t),E(i),E(l))}}}function Uo(n){let e,r,t;return{c(){e=H("meta"),r=W(),t=H("meta"),this.h()},l(i){e=D(i,"META",{property:!0,content:!0}),r=F(i),t=D(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;M(e,"property","og:image"),M(e,"content",Ar((i=me.og)==null?void 0:i.image)),M(t,"name","twitter:image"),M(t,"content",Ar((l=me.og)==null?void 0:l.image))},m(i,l){T(i,e,l),T(i,r,l),T(i,t,l)},p:oe,d(i){i&&(E(e),E(r),E(t))}}}function Kr(n){let e,r;return e=new tt({props:{queryID:"link_data",queryResult:n[1]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&2&&(l.queryResult=t[1]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function xr(n){let e,r;return e=new tt({props:{queryID:"category",queryResult:n[2]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&4&&(l.queryResult=t[2]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function $r(n){let e,r;return e=new tt({props:{queryID:"pay_offs",queryResult:n[3]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&8&&(l.queryResult=t[3]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ei(n){let e,r;return e=new tt({props:{queryID:"sectors",queryResult:n[4]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&16&&(l.queryResult=t[4]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ti(n){let e,r;return e=new tt({props:{queryID:"years",queryResult:n[5]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&32&&(l.queryResult=t[5]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ri(n){let e,r;return e=new tt({props:{queryID:"base_data",queryResult:n[6]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&64&&(l.queryResult=t[6]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ii(n){let e,r;return e=new tt({props:{queryID:"regions",queryResult:n[7]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.queryResult=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ni(n){let e,r;return e=new tt({props:{queryID:"pos_tsr",queryResult:n[8]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&256&&(l.queryResult=t[8]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function oi(n){let e,r;return e=new tt({props:{queryID:"pos_dp",queryResult:n[9]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&512&&(l.queryResult=t[9]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function li(n){let e,r;return{c(){e=H("a"),this.h()},l(t){e=D(t,"A",{href:!0}),re(e).forEach(E),this.h()},h(){M(e,"href",r=n[66].link)},m(t,i){T(t,e,i)},p(t,i){i[0]&2&&r!==(r=t[66].link)&&M(e,"href",r)},d(t){t&&E(e)}}}function qo(n){let e,r,t,i,l,o,a,s,u,c;return e=new kt({props:{id:"region"}}),t=new kt({props:{id:"Intrinsic value",fmt:"usd",contentType:"bar",barColor:"#45c4d3",colGroup:"Performance"}}),l=new kt({props:{id:"Market capitalization",fmt:"usd",contentType:"bar",barColor:"#fcd031",colGroup:"Perception"}}),a=new kt({props:{id:"Total shareholder return",fmt:"pct2",contentType:"bar",barColor:"#50c778",negativeBarColor:"#fe4a49",colGroup:"Pay off"}}),u=new kt({props:{id:"discount_or_premium",title:"Discount/Premium",fmt:"pct2",contentType:"bar",barColor:"#50c778",negativeBarColor:"#fe4a49",colGroup:"Pay off"}}),{c(){Y(e.$$.fragment),r=W(),Y(t.$$.fragment),i=W(),Y(l.$$.fragment),o=W(),Y(a.$$.fragment),s=W(),Y(u.$$.fragment)},l(f){Z(e.$$.fragment,f),r=F(f),Z(t.$$.fragment,f),i=F(f),Z(l.$$.fragment,f),o=F(f),Z(a.$$.fragment,f),s=F(f),Z(u.$$.fragment,f)},m(f,m){J(e,f,m),T(f,r,m),J(t,f,m),T(f,i,m),J(l,f,m),T(f,o,m),J(a,f,m),T(f,s,m),J(u,f,m),c=!0},p:oe,i(f){c||(p(e.$$.fragment,f),p(t.$$.fragment,f),p(l.$$.fragment,f),p(a.$$.fragment,f),p(u.$$.fragment,f),c=!0)},o(f){O(e.$$.fragment,f),O(t.$$.fragment,f),O(l.$$.fragment,f),O(a.$$.fragment,f),O(u.$$.fragment,f),c=!1},d(f){f&&(E(r),E(i),E(o),E(s)),j(e,f),j(t,f),j(l,f),j(a,f),j(u,f)}}}function Yo(n){let e,r;return e=new qi({props:{data:n[7],link:"link",sort:"log_intrinsic_value desc",$$slots:{default:[qo]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),i[2]&128&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Zo(n){let e,r,t,i,l,o;e=new _i({props:{data:n[3],name:"pay_offs",value:"metric_name",defaultValue:"TSR",color:"#fe4a49"}});const a=[$o,xo,Ko,Qo],s=[];function u(c,f){return c[0].pay_offs=="TSR"?0:c[9].length==5?1:c[9].length==0?2:3}return t=u(n),i=s[t]=a[t](n),{c(){Y(e.$$.fragment),r=W(),i.c(),l=Ee()},l(c){Z(e.$$.fragment,c),r=F(c),i.l(c),l=Ee()},m(c,f){J(e,c,f),T(c,r,f),s[t].m(c,f),T(c,l,f),o=!0},p(c,f){const m={};f[0]&8&&(m.data=c[3]),e.$set(m);let g=t;t=u(c),t===g?s[t].p(c,f):(_e(),O(s[g],1,1,()=>{s[g]=null}),ge(),i=s[t],i?i.p(c,f):(i=s[t]=a[t](c),i.c()),p(i,1),i.m(l.parentNode,l))},i(c){o||(p(e.$$.fragment,c),p(i),o=!0)},o(c){O(e.$$.fragment,c),O(i),o=!1},d(c){c&&(E(r),E(l)),j(e,c),s[t].d(c)}}}function Jo(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"log_intrinsic_value",value:"Intrinsic value",valueFmt:"usd2b",pointName:"region",colorPalette:["#828081","#fe4a49"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"Intrinsic value",fmt:"usd2b",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function jo(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"log_market_cap",value:"Market capitalization",valueFmt:"usd2b",pointName:"region",colorPalette:["#828081","#fe4a49"],selectedColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"Market capitalization",fmt:"usd2b",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Qo(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_dp",value:"Discount/Premium",valueFmt:"pct",pointName:"region",colorPalette:["#fe4a49","#828081","#50c778"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"discount_or_premium",title:"Discount/Premium",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Ko(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_dp",value:"Discount/Premium",valueFmt:"pct",pointName:"region",colorPalette:["#fe4a49","#828081"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"discount_or_premium",title:"Discount/Premium",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function xo(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_dp",value:"Discount/Premium",valueFmt:"pct",pointName:"region",colorPalette:["#828081","#50c778"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"discount_or_premium",title:"Discount/Premium",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function $o(n){let e,r,t,i;const l=[rl,tl,el],o=[];function a(s,u){return s[8].length==5?0:s[8].length==0?1:2}return e=a(n),r=o[e]=l[e](n),{c(){r.c(),t=Ee()},l(s){r.l(s),t=Ee()},m(s,u){o[e].m(s,u),T(s,t,u),i=!0},p(s,u){let c=e;e=a(s),e===c?o[e].p(s,u):(_e(),O(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(s,u):(r=o[e]=l[e](s),r.c()),p(r,1),r.m(t.parentNode,t))},i(s){i||(p(r),i=!0)},o(s){O(r),i=!1},d(s){s&&E(t),o[e].d(s)}}}function el(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_tsr",value:"Total shareholder return",valueFmt:"pct",pointName:"region",colorPalette:["#fe4a49","#828081","#50c778"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"tsr",title:"Total shareholder return",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function tl(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_tsr",value:"Total shareholder return",valueFmt:"pct",pointName:"region",colorPalette:["#fe4a49","#828081"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"tsr",title:"Total shareholder return",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function rl(n){let e,r;return e=new ut({props:{data:n[7],lat:"lat",long:"long",size:"normalized_tsr",value:"Total shareholder return",valueFmt:"pct",pointName:"region",colorPalette:["#828081","#50c778"],selectedColor:"#45c4d3",selectedBorderColor:"#45c4d3",tooltipType:"hover",link:"link",tooltip:[{id:"region",showColumnName:!1,valueClass:"text-lg font-semibold"},{id:"tsr",title:"Total shareholder return",fmt:"pct",fieldClass:"font-light",valueClass:"font-semibold text-[#45c4d3]"}]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){J(e,t,i),r=!0},p(t,i){const l={};i[0]&128&&(l.data=t[7]),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function il(n){let e,r="A comprehensive proprietary valuation approach that addresses the four main drivers of enterprise value: profitability, competition, growth, and cost of capital. This method goes beyond traditional discounted cash flow (DCF) models by incorporating insights into competitive advantage periods as well as market dynamics.",t,i,l=`<em class="markdown">Calculation:</em>
A modified Discounted Cash Flow (DCF):`,o,a,s='<li class="markdown">Sum of all future cash flows discounted to present value</li> <li class="markdown">Adjustments for debt and cash positions</li> <li class="markdown">Modified long term assumptions</li>';return{c(){e=H("p"),e.textContent=r,t=W(),i=H("p"),i.innerHTML=l,o=W(),a=H("ul"),a.innerHTML=s,this.h()},l(u){e=D(u,"P",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-cc3pbw"&&(e.textContent=r),t=F(u),i=D(u,"P",{class:!0,"data-svelte-h":!0}),Ae(i)!=="svelte-150ph1t"&&(i.innerHTML=l),o=F(u),a=D(u,"UL",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-166ggr7"&&(a.innerHTML=s),this.h()},h(){M(e,"class","markdown"),M(i,"class","markdown"),M(a,"class","markdown")},m(u,c){T(u,e,c),T(u,t,c),T(u,i,c),T(u,o,c),T(u,a,c)},p:oe,d(u){u&&(E(e),E(t),E(i),E(o),E(a))}}}function nl(n){let e,r="The total value of a company's outstanding shares in the stock market, reflecting the market's perception of the company's worth.",t,i,l=`<em class="markdown">Calculation:</em>
Current share price × Total number of outstanding shares`;return{c(){e=H("p"),e.textContent=r,t=W(),i=H("p"),i.innerHTML=l,this.h()},l(o){e=D(o,"P",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-1wpw531"&&(e.textContent=r),t=F(o),i=D(o,"P",{class:!0,"data-svelte-h":!0}),Ae(i)!=="svelte-ssb2ag"&&(i.innerHTML=l),this.h()},h(){M(e,"class","markdown"),M(i,"class","markdown")},m(o,a){T(o,e,a),T(o,t,a),T(o,i,a)},p:oe,d(o){o&&(E(e),E(t),E(i))}}}function ol(n){let e,r="A measure of the total financial benefits generated for shareholders, including both capital gains and dividends.",t,i,l=`<em class="markdown">Calculation:</em>
((End share price - Initial share price) + Dividends) ÷ Initial share price × 100%`;return{c(){e=H("p"),e.textContent=r,t=W(),i=H("p"),i.innerHTML=l,this.h()},l(o){e=D(o,"P",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-5hl8b5"&&(e.textContent=r),t=F(o),i=D(o,"P",{class:!0,"data-svelte-h":!0}),Ae(i)!=="svelte-bvh145"&&(i.innerHTML=l),this.h()},h(){M(e,"class","markdown"),M(i,"class","markdown")},m(o,a){T(o,e,a),T(o,t,a),T(o,i,a)},p:oe,d(o){o&&(E(e),E(t),E(i))}}}function ll(n){let e,r="The percentage difference between a company's market price and its intrinsic value, indicating potential over or undervaluation.",t,i,l=`<em class="markdown">Calculation:</em>
((Market Price - Intrinsic Value) ÷ Intrinsic Value) × 100%`,o,a,s='<li class="markdown">Positive percentage = Premium</li> <li class="markdown">Negative percentage = Discount</li>';return{c(){e=H("p"),e.textContent=r,t=W(),i=H("p"),i.innerHTML=l,o=W(),a=H("ul"),a.innerHTML=s,this.h()},l(u){e=D(u,"P",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-19jva5e"&&(e.textContent=r),t=F(u),i=D(u,"P",{class:!0,"data-svelte-h":!0}),Ae(i)!=="svelte-15pampu"&&(i.innerHTML=l),o=F(u),a=D(u,"UL",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-1majd1w"&&(a.innerHTML=s),this.h()},h(){M(e,"class","markdown"),M(i,"class","markdown"),M(a,"class","markdown")},m(u,c){T(u,e,c),T(u,t,c),T(u,i,c),T(u,o,c),T(u,a,c)},p:oe,d(u){u&&(E(e),E(t),E(i),E(o),E(a))}}}function al(n){let e,r='<a href="#categories">Categories</a>',t,i,l='<a href="#performance">Performance</a>',o,a,s="A measure of a company's fundamental worth, determined by its inherent characteristics and future cash flows, independent of its market price.",u,c,f,m,g='<a href="#perception">Perception</a>',h,_,v="A measure of the collective market sentiment and investor expectations about a company's value, potential and future prospects.",b,S,P,x,Q='<a href="#pay-off">Pay Off</a>',$,V,y="A measure that quantifies actual returns and value created for shareholders, comparing market valuation against fundamental worth.",C,w,N,B,A;return c=new Et({props:{title:"Intrinsic Value",$$slots:{default:[il]},$$scope:{ctx:n}}}),S=new Et({props:{title:"Market Capitalisation",$$slots:{default:[nl]},$$scope:{ctx:n}}}),w=new Et({props:{title:"Total shareholder return",$$slots:{default:[ol]},$$scope:{ctx:n}}}),B=new Et({props:{title:"Discount/Premium",$$slots:{default:[ll]},$$scope:{ctx:n}}}),{c(){e=H("h2"),e.innerHTML=r,t=W(),i=H("h3"),i.innerHTML=l,o=W(),a=H("p"),a.textContent=s,u=W(),Y(c.$$.fragment),f=W(),m=H("h3"),m.innerHTML=g,h=W(),_=H("p"),_.textContent=v,b=W(),Y(S.$$.fragment),P=W(),x=H("h3"),x.innerHTML=Q,$=W(),V=H("p"),V.textContent=y,C=W(),Y(w.$$.fragment),N=W(),Y(B.$$.fragment),this.h()},l(R){e=D(R,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-5a6bg8"&&(e.innerHTML=r),t=F(R),i=D(R,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ae(i)!=="svelte-47t9gc"&&(i.innerHTML=l),o=F(R),a=D(R,"P",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-nynaa0"&&(a.textContent=s),u=F(R),Z(c.$$.fragment,R),f=F(R),m=D(R,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ae(m)!=="svelte-1ceoxj9"&&(m.innerHTML=g),h=F(R),_=D(R,"P",{class:!0,"data-svelte-h":!0}),Ae(_)!=="svelte-1trh7vl"&&(_.textContent=v),b=F(R),Z(S.$$.fragment,R),P=F(R),x=D(R,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ae(x)!=="svelte-11rplo1"&&(x.innerHTML=Q),$=F(R),V=D(R,"P",{class:!0,"data-svelte-h":!0}),Ae(V)!=="svelte-1orueea"&&(V.textContent=y),C=F(R),Z(w.$$.fragment,R),N=F(R),Z(B.$$.fragment,R),this.h()},h(){M(e,"class","markdown"),M(e,"id","categories"),M(i,"class","markdown"),M(i,"id","performance"),M(a,"class","markdown"),M(m,"class","markdown"),M(m,"id","perception"),M(_,"class","markdown"),M(x,"class","markdown"),M(x,"id","pay-off"),M(V,"class","markdown")},m(R,G){T(R,e,G),T(R,t,G),T(R,i,G),T(R,o,G),T(R,a,G),T(R,u,G),J(c,R,G),T(R,f,G),T(R,m,G),T(R,h,G),T(R,_,G),T(R,b,G),J(S,R,G),T(R,P,G),T(R,x,G),T(R,$,G),T(R,V,G),T(R,C,G),J(w,R,G),T(R,N,G),J(B,R,G),A=!0},p(R,G){const le={};G[2]&128&&(le.$$scope={dirty:G,ctx:R}),c.$set(le);const se={};G[2]&128&&(se.$$scope={dirty:G,ctx:R}),S.$set(se);const K={};G[2]&128&&(K.$$scope={dirty:G,ctx:R}),w.$set(K);const z={};G[2]&128&&(z.$$scope={dirty:G,ctx:R}),B.$set(z)},i(R){A||(p(c.$$.fragment,R),p(S.$$.fragment,R),p(w.$$.fragment,R),p(B.$$.fragment,R),A=!0)},o(R){O(c.$$.fragment,R),O(S.$$.fragment,R),O(w.$$.fragment,R),O(B.$$.fragment,R),A=!1},d(R){R&&(E(e),E(t),E(i),E(o),E(a),E(u),E(f),E(m),E(h),E(_),E(b),E(P),E(x),E($),E(V),E(C),E(N)),j(c,R),j(S,R),j(w,R),j(B,R)}}}function sl(n){let e,r,t,i,l,o,a,s,u,c,f,m,g,h,_,v,b,S,P,x,Q,$,V,y,C,w,N,B,A=typeof me<"u"&&me.title&&me.hide_title!==!0&&Wo();function R(d,L){return typeof me<"u"&&me.title?Go:Fo}let le=R()(n),se=typeof me=="object"&&zo(),K=n[1]&&Kr(n),z=n[2]&&xr(n),I=n[3]&&$r(n),U=n[4]&&ei(n),ee=n[5]&&ti(n),ie=n[6]&&ri(n),ae=n[7]&&ii(n),ne=n[8]&&ni(n),te=n[9]&&oi(n),ue=Fe(n[1]),ce=[];for(let d=0;d<ue.length;d+=1)ce[d]=li(Qr(n,ue,d));v=new Xn({props:{title:"Year",name:"year_slider",data:n[5],defaultValue:"max_year",maxColumn:"max_year",minColumn:"min_year",size:"large"}}),S=new Et({props:{title:"Data breakdown",$$slots:{default:[Yo]},$$scope:{ctx:n}}}),x=new _i({props:{data:n[2],name:"button",value:"metric",label:"category",display:"tabs",defaultValue:"intrinsic_value",color:"#fe4a49"}}),$=new ji({props:{data:n[4],name:"sector_multi",value:"sector",title:"Sectors",multiple:"true",selectAllByDefault:"true"}});const Pe=[jo,Jo,Zo],Oe=[];function ye(d,L){return d[0].button=="market_cap"?0:d[0].button=="intrinsic_value"?1:2}return y=ye(n),C=Oe[y]=Pe[y](n),N=new Et({props:{title:"Definitions",$$slots:{default:[al]},$$scope:{ctx:n}}}),{c(){A&&A.c(),e=W(),le.c(),r=H("meta"),t=H("meta"),se&&se.c(),i=Ee(),l=W(),K&&K.c(),o=W(),z&&z.c(),a=W(),I&&I.c(),s=W(),U&&U.c(),u=W(),ee&&ee.c(),c=W(),ie&&ie.c(),f=W(),ae&&ae.c(),m=W(),ne&&ne.c(),g=W(),te&&te.c(),h=W();for(let d=0;d<ce.length;d+=1)ce[d].c();_=W(),Y(v.$$.fragment),b=W(),Y(S.$$.fragment),P=W(),Y(x.$$.fragment),Q=W(),Y($.$$.fragment),V=W(),C.c(),w=W(),Y(N.$$.fragment),this.h()},l(d){A&&A.l(d),e=F(d);const L=Mi("svelte-6lktun",document.head);le.l(L),r=D(L,"META",{name:!0,content:!0}),t=D(L,"META",{name:!0,content:!0}),se&&se.l(L),i=Ee(),L.forEach(E),l=F(d),K&&K.l(d),o=F(d),z&&z.l(d),a=F(d),I&&I.l(d),s=F(d),U&&U.l(d),u=F(d),ee&&ee.l(d),c=F(d),ie&&ie.l(d),f=F(d),ae&&ae.l(d),m=F(d),ne&&ne.l(d),g=F(d),te&&te.l(d),h=F(d);for(let he=0;he<ce.length;he+=1)ce[he].l(d);_=F(d),Z(v.$$.fragment,d),b=F(d),Z(S.$$.fragment,d),P=F(d),Z(x.$$.fragment,d),Q=F(d),Z($.$$.fragment,d),V=F(d),C.l(d),w=F(d),Z(N.$$.fragment,d),this.h()},h(){M(r,"name","twitter:card"),M(r,"content","summary"),M(t,"name","twitter:site"),M(t,"content","@evidence_dev")},m(d,L){A&&A.m(d,L),T(d,e,L),le.m(document.head,null),q(document.head,r),q(document.head,t),se&&se.m(document.head,null),q(document.head,i),T(d,l,L),K&&K.m(d,L),T(d,o,L),z&&z.m(d,L),T(d,a,L),I&&I.m(d,L),T(d,s,L),U&&U.m(d,L),T(d,u,L),ee&&ee.m(d,L),T(d,c,L),ie&&ie.m(d,L),T(d,f,L),ae&&ae.m(d,L),T(d,m,L),ne&&ne.m(d,L),T(d,g,L),te&&te.m(d,L),T(d,h,L);for(let he=0;he<ce.length;he+=1)ce[he]&&ce[he].m(d,L);T(d,_,L),J(v,d,L),T(d,b,L),J(S,d,L),T(d,P,L),J(x,d,L),T(d,Q,L),J($,d,L),T(d,V,L),Oe[y].m(d,L),T(d,w,L),J(N,d,L),B=!0},p(d,L){if(typeof me<"u"&&me.title&&me.hide_title!==!0&&A.p(d,L),le.p(d,L),typeof me=="object"&&se.p(d,L),d[1]?K?(K.p(d,L),L[0]&2&&p(K,1)):(K=Kr(d),K.c(),p(K,1),K.m(o.parentNode,o)):K&&(_e(),O(K,1,1,()=>{K=null}),ge()),d[2]?z?(z.p(d,L),L[0]&4&&p(z,1)):(z=xr(d),z.c(),p(z,1),z.m(a.parentNode,a)):z&&(_e(),O(z,1,1,()=>{z=null}),ge()),d[3]?I?(I.p(d,L),L[0]&8&&p(I,1)):(I=$r(d),I.c(),p(I,1),I.m(s.parentNode,s)):I&&(_e(),O(I,1,1,()=>{I=null}),ge()),d[4]?U?(U.p(d,L),L[0]&16&&p(U,1)):(U=ei(d),U.c(),p(U,1),U.m(u.parentNode,u)):U&&(_e(),O(U,1,1,()=>{U=null}),ge()),d[5]?ee?(ee.p(d,L),L[0]&32&&p(ee,1)):(ee=ti(d),ee.c(),p(ee,1),ee.m(c.parentNode,c)):ee&&(_e(),O(ee,1,1,()=>{ee=null}),ge()),d[6]?ie?(ie.p(d,L),L[0]&64&&p(ie,1)):(ie=ri(d),ie.c(),p(ie,1),ie.m(f.parentNode,f)):ie&&(_e(),O(ie,1,1,()=>{ie=null}),ge()),d[7]?ae?(ae.p(d,L),L[0]&128&&p(ae,1)):(ae=ii(d),ae.c(),p(ae,1),ae.m(m.parentNode,m)):ae&&(_e(),O(ae,1,1,()=>{ae=null}),ge()),d[8]?ne?(ne.p(d,L),L[0]&256&&p(ne,1)):(ne=ni(d),ne.c(),p(ne,1),ne.m(g.parentNode,g)):ne&&(_e(),O(ne,1,1,()=>{ne=null}),ge()),d[9]?te?(te.p(d,L),L[0]&512&&p(te,1)):(te=oi(d),te.c(),p(te,1),te.m(h.parentNode,h)):te&&(_e(),O(te,1,1,()=>{te=null}),ge()),L[0]&2){ue=Fe(d[1]);let de;for(de=0;de<ue.length;de+=1){const Je=Qr(d,ue,de);ce[de]?ce[de].p(Je,L):(ce[de]=li(Je),ce[de].c(),ce[de].m(_.parentNode,_))}for(;de<ce.length;de+=1)ce[de].d(1);ce.length=ue.length}const he={};L[0]&32&&(he.data=d[5]),v.$set(he);const qe={};L[0]&128|L[2]&128&&(qe.$$scope={dirty:L,ctx:d}),S.$set(qe);const Ye={};L[0]&4&&(Ye.data=d[2]),x.$set(Ye);const Ze={};L[0]&16&&(Ze.data=d[4]),$.$set(Ze);let be=y;y=ye(d),y===be?Oe[y].p(d,L):(_e(),O(Oe[be],1,1,()=>{Oe[be]=null}),ge(),C=Oe[y],C?C.p(d,L):(C=Oe[y]=Pe[y](d),C.c()),p(C,1),C.m(w.parentNode,w));const Ie={};L[2]&128&&(Ie.$$scope={dirty:L,ctx:d}),N.$set(Ie)},i(d){B||(p(K),p(z),p(I),p(U),p(ee),p(ie),p(ae),p(ne),p(te),p(v.$$.fragment,d),p(S.$$.fragment,d),p(x.$$.fragment,d),p($.$$.fragment,d),p(C),p(N.$$.fragment,d),B=!0)},o(d){O(K),O(z),O(I),O(U),O(ee),O(ie),O(ae),O(ne),O(te),O(v.$$.fragment,d),O(S.$$.fragment,d),O(x.$$.fragment,d),O($.$$.fragment,d),O(C),O(N.$$.fragment,d),B=!1},d(d){d&&(E(e),E(l),E(o),E(a),E(s),E(u),E(c),E(f),E(m),E(g),E(h),E(_),E(b),E(P),E(Q),E(V),E(w)),A&&A.d(d),le.d(d),E(r),E(t),se&&se.d(d),E(i),K&&K.d(d),z&&z.d(d),I&&I.d(d),U&&U.d(d),ee&&ee.d(d),ie&&ie.d(d),ae&&ae.d(d),ne&&ne.d(d),te&&te.d(d),Tt(ce,d),j(v,d),j(S,d),j(x,d),j($,d),Oe[y].d(d),j(N,d)}}}const me={title:"Futureworld shareholder value analytics"};function ul(n,e,r){let t,i;Ve(n,Qi,fe=>r(48,t=fe)),Ve(n,Or,fe=>r(53,i=fe));let{data:l}=e,{data:o={},customFormattingSettings:a,__db:s,inputs:u}=l;Wt(Or,i="6666cd76f96956469e7be39d750cc7d9",i);let c=zi($e(u));ki(c.subscribe(fe=>r(0,u=fe))),tr(Yi,{getCustomFormats:()=>a.customFormats||[]});const f=(fe,zt)=>Zi(s.query,fe,{query_name:zt});Xi(f),t.params,nr(()=>!0);let m={initialData:void 0,initialError:void 0},g=Ne`SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL`,h=`SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL`;o.link_data_data&&(o.link_data_data instanceof Error?m.initialError=o.link_data_data:m.initialData=o.link_data_data,o.link_data_columns&&(m.knownColumns=o.link_data_columns));let _,v=!1;const b=we.createReactive({callback:fe=>{r(1,_=fe)},execFn:f},{id:"link_data",...m});b(h,{noResolve:g,...m}),globalThis[Symbol.for("link_data")]={get value(){return _}};let S={initialData:void 0,initialError:void 0},P=Ne`SELECT
  *
FROM
  (SELECT 
    'market_cap' as metric, 'Perception' as category,  'usd' as unit, 2 as "order"
  UNION ALL
  SELECT 'intrinsic_value', 'Performance', 'usd', 1
  UNION ALL
  SELECT 'tsr', 'Pay off', 'pct', 3)
ORDER BY "order"`,x=`SELECT
  *
FROM
  (SELECT 
    'market_cap' as metric, 'Perception' as category,  'usd' as unit, 2 as "order"
  UNION ALL
  SELECT 'intrinsic_value', 'Performance', 'usd', 1
  UNION ALL
  SELECT 'tsr', 'Pay off', 'pct', 3)
ORDER BY "order"`;o.category_data&&(o.category_data instanceof Error?S.initialError=o.category_data:S.initialData=o.category_data,o.category_columns&&(S.knownColumns=o.category_columns));let Q,$=!1;const V=we.createReactive({callback:fe=>{r(2,Q=fe)},execFn:f},{id:"category",...S});V(x,{noResolve:P,...S}),globalThis[Symbol.for("category")]={get value(){return Q}};let y={initialData:void 0,initialError:void 0},C=Ne`SELECT
  *
FROM
  (SELECT 
    'tsr' as metric, 'TSR' as metric_name, 1 as "order"
  UNION ALL
  SELECT 'discount_or_premium', 'Discount/Premium', 2)
ORDER BY "order"`,w=`SELECT
  *
FROM
  (SELECT 
    'tsr' as metric, 'TSR' as metric_name, 1 as "order"
  UNION ALL
  SELECT 'discount_or_premium', 'Discount/Premium', 2)
ORDER BY "order"`;o.pay_offs_data&&(o.pay_offs_data instanceof Error?y.initialError=o.pay_offs_data:y.initialData=o.pay_offs_data,o.pay_offs_columns&&(y.knownColumns=o.pay_offs_columns));let N,B=!1;const A=we.createReactive({callback:fe=>{r(3,N=fe)},execFn:f},{id:"pay_offs",...y});A(w,{noResolve:C,...y}),globalThis[Symbol.for("pay_offs")]={get value(){return N}};let R={initialData:void 0,initialError:void 0},G=Ne`SELECT
    DISTINCT sector
FROM
    regions
WHERE sector IS NOT NULL`,le=`SELECT
    DISTINCT sector
FROM
    regions
WHERE sector IS NOT NULL`;o.sectors_data&&(o.sectors_data instanceof Error?R.initialError=o.sectors_data:R.initialData=o.sectors_data,o.sectors_columns&&(R.knownColumns=o.sectors_columns));let se,K=!1;const z=we.createReactive({callback:fe=>{r(4,se=fe)},execFn:f},{id:"sectors",...R});z(le,{noResolve:G,...R}),globalThis[Symbol.for("sectors")]={get value(){return se}};let I={initialData:void 0,initialError:void 0},U=Ne`WITH min_max AS (
    SELECT 
        MIN(year) as min_year,
        MAX(year) as max_year
    FROM regions
    WHERE year IS NOT NULL
)
SELECT 
    distinct r.year,
    m.min_year,
    m.max_year
FROM 
    regions r
CROSS JOIN min_max m
WHERE r.year IS NOT NULL
ORDER BY r.year`,ee=`WITH min_max AS (
    SELECT 
        MIN(year) as min_year,
        MAX(year) as max_year
    FROM regions
    WHERE year IS NOT NULL
)
SELECT 
    distinct r.year,
    m.min_year,
    m.max_year
FROM 
    regions r
CROSS JOIN min_max m
WHERE r.year IS NOT NULL
ORDER BY r.year`;o.years_data&&(o.years_data instanceof Error?I.initialError=o.years_data:I.initialData=o.years_data,o.years_columns&&(I.knownColumns=o.years_columns));let ie,ae=!1;const ne=we.createReactive({callback:fe=>{r(5,ie=fe)},execFn:f},{id:"years",...I});ne(ee,{noResolve:U,...I}),globalThis[Symbol.for("years")]={get value(){return ie}};let te={initialData:void 0,initialError:void 0},ue=Ne`WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data`,ce=`WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data`;o.base_data_data&&(o.base_data_data instanceof Error?te.initialError=o.base_data_data:te.initialData=o.base_data_data,o.base_data_columns&&(te.knownColumns=o.base_data_columns));let Pe,Oe=!1;const ye=we.createReactive({callback:fe=>{r(6,Pe=fe)},execFn:f},{id:"base_data",...te});ye(ce,{noResolve:ue,...te}),globalThis[Symbol.for("base_data")]={get value(){return Pe}};let d={initialData:void 0,initialError:void 0},L=Ne`SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region`,he=`SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region`;o.regions_data&&(o.regions_data instanceof Error?d.initialError=o.regions_data:d.initialData=o.regions_data,o.regions_columns&&(d.knownColumns=o.regions_columns));let qe,Ye=!1;const Ze=we.createReactive({callback:fe=>{r(7,qe=fe)},execFn:f},{id:"regions",...d});Ze(he,{noResolve:L,...d}),globalThis[Symbol.for("regions")]={get value(){return qe}};let be={initialData:void 0,initialError:void 0},Ie=Ne`SELECT
  tsr
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE tsr >= 0`,de=`SELECT
  tsr
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE tsr >= 0`;o.pos_tsr_data&&(o.pos_tsr_data instanceof Error?be.initialError=o.pos_tsr_data:be.initialData=o.pos_tsr_data,o.pos_tsr_columns&&(be.knownColumns=o.pos_tsr_columns));let Je,ct=!1;const Be=we.createReactive({callback:fe=>{r(8,Je=fe)},execFn:f},{id:"pos_tsr",...be});Be(de,{noResolve:Ie,...be}),globalThis[Symbol.for("pos_tsr")]={get value(){return Je}};let je={initialData:void 0,initialError:void 0},Ge=Ne`SELECT
  discount_or_premium
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE discount_or_premium >= 0`,He=`SELECT
  discount_or_premium
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE discount_or_premium >= 0`;o.pos_dp_data&&(o.pos_dp_data instanceof Error?je.initialError=o.pos_dp_data:je.initialData=o.pos_dp_data,o.pos_dp_columns&&(je.knownColumns=o.pos_dp_columns));let ft,_t=!1;const Mt=we.createReactive({callback:fe=>{r(9,ft=fe)},execFn:f},{id:"pos_dp",...je});return Mt(He,{noResolve:Ge,...je}),globalThis[Symbol.for("pos_dp")]={get value(){return ft}},n.$$set=fe=>{"data"in fe&&r(10,l=fe.data)},n.$$.update=()=>{n.$$.dirty[0]&1024&&r(11,{data:o={},customFormattingSettings:a,__db:s}=l,o),n.$$.dirty[0]&2048&&Ui.set(Object.keys(o).length>0),n.$$.dirty[1]&131072&&t.params,n.$$.dirty[0]&61440&&(g||!v?g||(b(h,{noResolve:g,...m}),r(15,v=!0)):b(h,{noResolve:g})),n.$$.dirty[0]&983040&&(P||!$?P||(V(x,{noResolve:P,...S}),r(19,$=!0)):V(x,{noResolve:P})),n.$$.dirty[0]&15728640&&(C||!B?C||(A(w,{noResolve:C,...y}),r(23,B=!0)):A(w,{noResolve:C})),n.$$.dirty[0]&251658240&&(G||!K?G||(z(le,{noResolve:G,...R}),r(27,K=!0)):z(le,{noResolve:G})),n.$$.dirty[0]&1879048192|n.$$.dirty[1]&1&&(U||!ae?U||(ne(ee,{noResolve:U,...I}),r(31,ae=!0)):ne(ee,{noResolve:U})),n.$$.dirty[0]&1&&r(33,ue=Ne`WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data`),n.$$.dirty[0]&1&&r(34,ce=`WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data`),n.$$.dirty[1]&30&&(ue||!Oe?ue||(ye(ce,{noResolve:ue,...te}),r(35,Oe=!0)):ye(ce,{noResolve:ue})),n.$$.dirty[0]&1&&r(37,L=Ne`SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region`),n.$$.dirty[0]&1&&r(38,he=`SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region`),n.$$.dirty[1]&480&&(L||!Ye?L||(Ze(he,{noResolve:L,...d}),r(39,Ye=!0)):Ze(he,{noResolve:L})),n.$$.dirty[0]&1&&r(41,Ie=Ne`SELECT
  tsr
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE tsr >= 0`),n.$$.dirty[0]&1&&r(42,de=`SELECT
  tsr
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE tsr >= 0`),n.$$.dirty[1]&7680&&(Ie||!ct?Ie||(Be(de,{noResolve:Ie,...be}),r(43,ct=!0)):Be(de,{noResolve:Ie})),n.$$.dirty[0]&1&&r(45,Ge=Ne`SELECT
  discount_or_premium
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE discount_or_premium >= 0`),n.$$.dirty[0]&1&&r(46,He=`SELECT
  discount_or_premium
FROM
  (SELECT 
    *
FROM
    (WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${u.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${u.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data) b
JOIN (SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL) l ON b.region = l.region)
WHERE discount_or_premium >= 0`),n.$$.dirty[1]&122880&&(Ge||!_t?Ge||(Mt(He,{noResolve:Ge,...je}),r(47,_t=!0)):Mt(He,{noResolve:Ge}))},r(13,g=Ne`SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL`),r(14,h=`SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL`),r(17,P=Ne`SELECT
  *
FROM
  (SELECT 
    'market_cap' as metric, 'Perception' as category,  'usd' as unit, 2 as "order"
  UNION ALL
  SELECT 'intrinsic_value', 'Performance', 'usd', 1
  UNION ALL
  SELECT 'tsr', 'Pay off', 'pct', 3)
ORDER BY "order"`),r(18,x=`SELECT
  *
FROM
  (SELECT 
    'market_cap' as metric, 'Perception' as category,  'usd' as unit, 2 as "order"
  UNION ALL
  SELECT 'intrinsic_value', 'Performance', 'usd', 1
  UNION ALL
  SELECT 'tsr', 'Pay off', 'pct', 3)
ORDER BY "order"`),r(21,C=Ne`SELECT
  *
FROM
  (SELECT 
    'tsr' as metric, 'TSR' as metric_name, 1 as "order"
  UNION ALL
  SELECT 'discount_or_premium', 'Discount/Premium', 2)
ORDER BY "order"`),r(22,w=`SELECT
  *
FROM
  (SELECT 
    'tsr' as metric, 'TSR' as metric_name, 1 as "order"
  UNION ALL
  SELECT 'discount_or_premium', 'Discount/Premium', 2)
ORDER BY "order"`),r(25,G=Ne`SELECT
    DISTINCT sector
FROM
    regions
WHERE sector IS NOT NULL`),r(26,le=`SELECT
    DISTINCT sector
FROM
    regions
WHERE sector IS NOT NULL`),r(29,U=Ne`WITH min_max AS (
    SELECT 
        MIN(year) as min_year,
        MAX(year) as max_year
    FROM regions
    WHERE year IS NOT NULL
)
SELECT 
    distinct r.year,
    m.min_year,
    m.max_year
FROM 
    regions r
CROSS JOIN min_max m
WHERE r.year IS NOT NULL
ORDER BY r.year`),r(30,ee=`WITH min_max AS (
    SELECT 
        MIN(year) as min_year,
        MAX(year) as max_year
    FROM regions
    WHERE year IS NOT NULL
)
SELECT 
    distinct r.year,
    m.min_year,
    m.max_year
FROM 
    regions r
CROSS JOIN min_max m
WHERE r.year IS NOT NULL
ORDER BY r.year`),[u,_,Q,N,se,ie,Pe,qe,Je,ft,l,o,m,g,h,v,S,P,x,$,y,C,w,B,R,G,le,K,I,U,ee,ae,te,ue,ce,Oe,d,L,he,Ye,be,Ie,de,ct,je,Ge,He,_t,t]}class Al extends Re{constructor(e){super(),Te(this,e,ul,sl,ve,{data:10},null,[-1,-1,-1])}}export{Al as component};
