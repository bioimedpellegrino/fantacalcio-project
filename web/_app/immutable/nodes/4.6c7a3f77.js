import{s as Ht,o as Lt,r as Nt,n as kt}from"../chunks/scheduler.ce710c66.js";import{S as Pt,i as Mt,g as u,s as H,h as d,j as D,x as K,c as N,f as g,k as h,a as at,A as r,p as ct,t as S,b as it,d as L,m as Q,n as W,B as rt,o as lt,E as Ot,e as Ct,r as ft,u as ut,v as dt,w as mt}from"../chunks/index.86f09419.js";import{e as vt}from"../chunks/each.e59479a4.js";import{g as Rt,A as St,a as Ut}from"../chunks/ArrowUp.d2b6beb7.js";import{a as jt,c as Yt}from"../chunks/public.fd60c40c.js";import{g as Tt}from"../chunks/getStats.0701dc1f.js";import{L as zt}from"../chunks/Loader.0c74833e.js";import{G as wt}from"../chunks/GreenButton.31f8d7a6.js";function qt(a){return jt.post(Yt,{input:a}).then(t=>t.data.output).catch(t=>{throw console.error(t),t})}function Et(a,t,l){const e=a.slice();return e[29]=t[l],e}function Dt(a,t,l){const e=a.slice();return e[29]=t[l],e}function Gt(a){let t,l;return t=new zt({}),{c(){ft(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,n){dt(t,e,n),l=!0},p:kt,i(e){l||(L(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){mt(t,e)}}}function Ft(a){let t,l,e,n,f,o,i,c,y,m,p="Playmaker",b,T,s="Ruolo",x,_,C="Squadra",B,P,j="Valore",q,U,$,E,V,F="< Previous",R,v,Y="Next >",X,Z,M;const et=[Kt,Jt],J=[];function ot(z,k){return z[2].ascending?0:1}i=ot(a),c=J[i]=et[i](a);let tt=vt(a[10]),A=[];for(let z=0;z<tt.length;z+=1)A[z]=$t(Dt(a,tt,z));const O=z=>S(A[z],1,1,()=>{A[z]=null});return{c(){t=u("div"),l=u("table"),e=u("thead"),n=u("tr"),f=u("th"),o=Q(`Nome
								`),c.c(),y=H(),m=u("th"),m.textContent=p,b=H(),T=u("th"),T.textContent=s,x=H(),_=u("th"),_.textContent=C,B=H(),P=u("th"),P.textContent=j,q=H(),U=u("tbody");for(let z=0;z<A.length;z+=1)A[z].c();$=H(),E=u("div"),V=u("button"),V.textContent=F,R=H(),v=u("button"),v.textContent=Y,this.h()},l(z){t=d(z,"DIV",{class:!0});var k=D(t);l=d(k,"TABLE",{class:!0});var I=D(l);e=d(I,"THEAD",{class:!0});var w=D(e);n=d(w,"TR",{});var G=D(n);f=d(G,"TH",{class:!0});var pt=D(f);o=W(pt,`Nome
								`),c.l(pt),pt.forEach(g),y=N(G),m=d(G,"TH",{class:!0,"data-svelte-h":!0}),K(m)!=="svelte-1ovvr48"&&(m.textContent=p),b=N(G),T=d(G,"TH",{class:!0,"data-svelte-h":!0}),K(T)!=="svelte-19v9jxl"&&(T.textContent=s),x=N(G),_=d(G,"TH",{class:!0,"data-svelte-h":!0}),K(_)!=="svelte-1l9zz0l"&&(_.textContent=C),B=N(G),P=d(G,"TH",{class:!0,"data-svelte-h":!0}),K(P)!=="svelte-qzr58q"&&(P.textContent=j),G.forEach(g),w.forEach(g),q=N(I),U=d(I,"TBODY",{class:!0});var ht=D(U);for(let _t=0;_t<A.length;_t+=1)A[_t].l(ht);ht.forEach(g),I.forEach(g),$=N(k),E=d(k,"DIV",{class:!0});var nt=D(E);V=d(nt,"BUTTON",{class:!0,"data-svelte-h":!0}),K(V)!=="svelte-1trzc8k"&&(V.textContent=F),R=N(nt),v=d(nt,"BUTTON",{class:!0,"data-svelte-h":!0}),K(v)!=="svelte-1ai2lh2"&&(v.textContent=Y),nt.forEach(g),k.forEach(g),this.h()},h(){h(f,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left"),h(m,"class","whitespace-nowrap p-2 font-medium text-primary text-xl font-bold text-left hidden sm:table-cell"),h(T,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left hidden sm:table-cell"),h(_,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left"),h(P,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left hidden sm:table-cell"),h(e,"class","ltr:text-left rtl:text-right"),h(U,"class","divide-y divide-gray-200"),h(l,"class","min-w-full divide-y-2 divide-gray-200 bg-white text-sm"),h(V,"class","mr-2"),h(v,"class","ml-2"),h(E,"class","flex justify-center mt-4 font-bold text-primary"),h(t,"class","overflow-x-auto")},m(z,k){at(z,t,k),r(t,l),r(l,e),r(e,n),r(n,f),r(f,o),J[i].m(f,null),r(n,y),r(n,m),r(n,b),r(n,T),r(n,x),r(n,_),r(n,B),r(n,P),r(l,q),r(l,U);for(let I=0;I<A.length;I+=1)A[I]&&A[I].m(U,null);r(t,$),r(t,E),r(E,V),r(E,R),r(E,v),X=!0,Z||(M=[rt(f,"click",a[15]),rt(_,"click",a[16]),rt(P,"click",a[17]),rt(V,"click",a[19]),rt(v,"click",a[20])],Z=!0)},p(z,k){let I=i;if(i=ot(z),i!==I&&(ct(),S(J[I],1,1,()=>{J[I]=null}),it(),c=J[i],c||(c=J[i]=et[i](z),c.c()),L(c,1),c.m(f,null)),k[0]&5120){tt=vt(z[10]);let w;for(w=0;w<tt.length;w+=1){const G=Dt(z,tt,w);A[w]?(A[w].p(G,k),L(A[w],1)):(A[w]=$t(G),A[w].c(),L(A[w],1),A[w].m(U,null))}for(ct(),w=tt.length;w<A.length;w+=1)O(w);it()}},i(z){if(!X){L(c);for(let k=0;k<tt.length;k+=1)L(A[k]);X=!0}},o(z){S(c),A=A.filter(Boolean);for(let k=0;k<A.length;k+=1)S(A[k]);X=!1},d(z){z&&g(t),J[i].d(),Ot(A,z),Z=!1,Nt(M)}}}function Jt(a){let t,l;return t=new St({}),{c(){ft(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,n){dt(t,e,n),l=!0},i(e){l||(L(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){mt(t,e)}}}function Kt(a){let t,l;return t=new Ut({}),{c(){ft(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,n){dt(t,e,n),l=!0},i(e){l||(L(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){mt(t,e)}}}function $t(a){let t,l,e=a[29].name+"",n,f,o,i=a[29].playmaker?"Yes":"No",c,y,m,p=a[29].role+"",b,T,s,x=a[29].team+"",_,C,B,P=a[29].value+"",j,q,U,$,E,V;function F(){return a[18](a[29])}return $=new wt({props:{clickAction:F,text:"Compara"}}),{c(){t=u("tr"),l=u("td"),n=Q(e),f=H(),o=u("td"),c=Q(i),y=H(),m=u("td"),b=Q(p),T=H(),s=u("td"),_=Q(x),C=H(),B=u("td"),j=Q(P),q=H(),U=u("td"),ft($.$$.fragment),E=H(),this.h()},l(R){t=d(R,"TR",{class:!0});var v=D(t);l=d(v,"TD",{class:!0});var Y=D(l);n=W(Y,e),Y.forEach(g),f=N(v),o=d(v,"TD",{class:!0});var X=D(o);c=W(X,i),X.forEach(g),y=N(v),m=d(v,"TD",{class:!0});var Z=D(m);b=W(Z,p),Z.forEach(g),T=N(v),s=d(v,"TD",{class:!0});var M=D(s);_=W(M,x),M.forEach(g),C=N(v),B=d(v,"TD",{class:!0});var et=D(B);j=W(et,P),et.forEach(g),q=N(v),U=d(v,"TD",{class:!0});var J=D(U);ut($.$$.fragment,J),J.forEach(g),E=N(v),v.forEach(g),this.h()},h(){h(l,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(o,"class","whitespace-nowrap p-2 font-medium text-gray-900 hidden sm:table-cell"),h(m,"class","whitespace-nowrap p-2 font-medium text-gray-900 hidden sm:table-cell"),h(s,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(B,"class","whitespace-nowrap p-2 font-medium text-gray-900 hidden sm:table-cell"),h(U,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(t,"class","border-b")},m(R,v){at(R,t,v),r(t,l),r(l,n),r(t,f),r(t,o),r(o,c),r(t,y),r(t,m),r(m,b),r(t,T),r(t,s),r(s,_),r(t,C),r(t,B),r(B,j),r(t,q),r(t,U),dt($,U,null),r(t,E),V=!0},p(R,v){a=R,(!V||v[0]&1024)&&e!==(e=a[29].name+"")&&lt(n,e),(!V||v[0]&1024)&&i!==(i=a[29].playmaker?"Yes":"No")&&lt(c,i),(!V||v[0]&1024)&&p!==(p=a[29].role+"")&&lt(b,p),(!V||v[0]&1024)&&x!==(x=a[29].team+"")&&lt(_,x),(!V||v[0]&1024)&&P!==(P=a[29].value+"")&&lt(j,P);const Y={};v[0]&1024&&(Y.clickAction=F),$.$set(Y)},i(R){V||(L($.$$.fragment,R),V=!0)},o(R){S($.$$.fragment,R),V=!1},d(R){R&&g(t),mt($)}}}function At(a){let t,l,e,n,f,o=a[4].name+"",i,c,y,m,p,b,T,s,x="Nome",_,C,B="Playmaker",P,j,q="Squadra",U,$,E="Valore",V,F,R,v,Y,X="< Previous",Z,M,et="Next >",J,ot,tt,A=vt(a[10]),O=[];for(let k=0;k<A.length;k+=1)O[k]=Bt(Et(a,A,k));const z=k=>S(O[k],1,1,()=>{O[k]=null});return{c(){t=u("div"),l=u("div"),e=u("p"),n=Q("Con chi vuoi comparare "),f=u("strong"),i=Q(o),c=Q(" ?"),y=H(),m=u("div"),p=u("table"),b=u("thead"),T=u("tr"),s=u("th"),s.textContent=x,_=H(),C=u("th"),C.textContent=B,P=H(),j=u("th"),j.textContent=q,U=H(),$=u("th"),$.textContent=E,V=H(),F=u("tbody");for(let k=0;k<O.length;k+=1)O[k].c();R=H(),v=u("div"),Y=u("button"),Y.textContent=X,Z=H(),M=u("button"),M.textContent=et,this.h()},l(k){t=d(k,"DIV",{class:!0,role:!0});var I=D(t);l=d(I,"DIV",{class:!0});var w=D(l);e=d(w,"P",{class:!0});var G=D(e);n=W(G,"Con chi vuoi comparare "),f=d(G,"STRONG",{});var pt=D(f);i=W(pt,o),pt.forEach(g),c=W(G," ?"),G.forEach(g),w.forEach(g),y=N(I),m=d(I,"DIV",{class:!0});var ht=D(m);p=d(ht,"TABLE",{class:!0});var nt=D(p);b=d(nt,"THEAD",{class:!0});var _t=D(b);T=d(_t,"TR",{});var st=D(T);s=d(st,"TH",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-8bxdr5"&&(s.textContent=x),_=N(st),C=d(st,"TH",{class:!0,"data-svelte-h":!0}),K(C)!=="svelte-1ovvr48"&&(C.textContent=B),P=N(st),j=d(st,"TH",{class:!0,"data-svelte-h":!0}),K(j)!=="svelte-1l9zz0l"&&(j.textContent=q),U=N(st),$=d(st,"TH",{class:!0,"data-svelte-h":!0}),K($)!=="svelte-d20kfc"&&($.textContent=E),st.forEach(g),_t.forEach(g),V=N(nt),F=d(nt,"TBODY",{class:!0});var yt=D(F);for(let bt=0;bt<O.length;bt+=1)O[bt].l(yt);yt.forEach(g),nt.forEach(g),R=N(ht),v=d(ht,"DIV",{class:!0});var gt=D(v);Y=d(gt,"BUTTON",{class:!0,"data-svelte-h":!0}),K(Y)!=="svelte-1trzc8k"&&(Y.textContent=X),Z=N(gt),M=d(gt,"BUTTON",{class:!0,"data-svelte-h":!0}),K(M)!=="svelte-1ai2lh2"&&(M.textContent=et),gt.forEach(g),ht.forEach(g),I.forEach(g),this.h()},h(){h(e,"class","font-medium text-2xl text-primary font-semibold sm:text-lg"),h(l,"class","flex items-center gap-4"),h(s,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left"),h(C,"class","whitespace-nowrap p-2 font-medium text-primary text-xl font-bold text-left hidden sm:table-cell"),h(j,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left"),h($,"class","whitespace-nowrap p-2 font-medium text-primary font-bold text-xl text-left hidden sm:table-cell hidden sm:table-cell hidden sm:table-cell"),h(b,"class","ltr:text-left rtl:text-right"),h(F,"class","divide-y divide-gray-200"),h(p,"class","min-w-full divide-y-2 divide-gray-200 bg-gray-200 text-sm"),h(Y,"class","mr-2"),h(M,"class","ml-2"),h(v,"class","flex justify-center mt-4 font-bold text-primary"),h(m,"class","overflow-x-auto"),h(t,"class","fixed bg-gray-100 rounded-2xl border border-blue-100 inset-0 bg-opacity-80 z-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8"),h(t,"role","alert")},m(k,I){at(k,t,I),r(t,l),r(l,e),r(e,n),r(e,f),r(f,i),r(e,c),r(t,y),r(t,m),r(m,p),r(p,b),r(b,T),r(T,s),r(T,_),r(T,C),r(T,P),r(T,j),r(T,U),r(T,$),r(p,V),r(p,F);for(let w=0;w<O.length;w+=1)O[w]&&O[w].m(F,null);r(m,R),r(m,v),r(v,Y),r(v,Z),r(v,M),J=!0,ot||(tt=[rt(s,"click",a[21]),rt(j,"click",a[22]),rt($,"click",a[23]),rt(Y,"click",a[25]),rt(M,"click",a[26])],ot=!0)},p(k,I){if((!J||I[0]&16)&&o!==(o=k[4].name+"")&&lt(i,o),I[0]&9232){A=vt(k[10]);let w;for(w=0;w<A.length;w+=1){const G=Et(k,A,w);O[w]?(O[w].p(G,I),L(O[w],1)):(O[w]=Bt(G),O[w].c(),L(O[w],1),O[w].m(F,null))}for(ct(),w=A.length;w<O.length;w+=1)z(w);it()}},i(k){if(!J){for(let I=0;I<A.length;I+=1)L(O[I]);J=!0}},o(k){O=O.filter(Boolean);for(let I=0;I<O.length;I+=1)S(O[I]);J=!1},d(k){k&&g(t),Ot(O,k),ot=!1,Nt(tt)}}}function It(a){let t,l,e=a[29].name+"",n,f,o,i=a[29].playmaker?"Yes":"No",c,y,m,p=a[29].team+"",b,T,s,x=a[29].value+"",_,C,B,P,j,q;function U(){return a[24](a[29])}return P=new wt({props:{clickAction:U,text:"Conferma"}}),{c(){t=u("tr"),l=u("td"),n=Q(e),f=H(),o=u("td"),c=Q(i),y=H(),m=u("td"),b=Q(p),T=H(),s=u("td"),_=Q(x),C=H(),B=u("td"),ft(P.$$.fragment),j=H(),this.h()},l($){t=d($,"TR",{class:!0});var E=D(t);l=d(E,"TD",{class:!0});var V=D(l);n=W(V,e),V.forEach(g),f=N(E),o=d(E,"TD",{class:!0});var F=D(o);c=W(F,i),F.forEach(g),y=N(E),m=d(E,"TD",{class:!0});var R=D(m);b=W(R,p),R.forEach(g),T=N(E),s=d(E,"TD",{class:!0});var v=D(s);_=W(v,x),v.forEach(g),C=N(E),B=d(E,"TD",{class:!0});var Y=D(B);ut(P.$$.fragment,Y),Y.forEach(g),j=N(E),E.forEach(g),this.h()},h(){h(l,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(o,"class","whitespace-nowrap p-2 font-medium text-gray-900 hidden sm:table-cell"),h(m,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(s,"class","whitespace-nowrap p-2 font-medium text-gray-900 hidden sm:table-cell"),h(B,"class","whitespace-nowrap p-2 font-medium text-gray-900"),h(t,"class","border-b")},m($,E){at($,t,E),r(t,l),r(l,n),r(t,f),r(t,o),r(o,c),r(t,y),r(t,m),r(m,b),r(t,T),r(t,s),r(s,_),r(t,C),r(t,B),dt(P,B,null),r(t,j),q=!0},p($,E){a=$,(!q||E[0]&1024)&&e!==(e=a[29].name+"")&&lt(n,e),(!q||E[0]&1024)&&i!==(i=a[29].playmaker?"Yes":"No")&&lt(c,i),(!q||E[0]&1024)&&p!==(p=a[29].team+"")&&lt(b,p),(!q||E[0]&1024)&&x!==(x=a[29].value+"")&&lt(_,x);const V={};E[0]&1024&&(V.clickAction=U),P.$set(V)},i($){q||(L(P.$$.fragment,$),q=!0)},o($){S(P.$$.fragment,$),q=!1},d($){$&&g(t),mt(P)}}}function Bt(a){let t,l,e=a[29].role==a[4].role&&a[29].name!=a[4].name&&It(a);return{c(){e&&e.c(),t=Ct()},l(n){e&&e.l(n),t=Ct()},m(n,f){e&&e.m(n,f),at(n,t,f),l=!0},p(n,f){n[29].role==n[4].role&&n[29].name!=n[4].name?e?(e.p(n,f),f[0]&1040&&L(e,1)):(e=It(n),e.c(),L(e,1),e.m(t.parentNode,t)):e&&(ct(),S(e,1,1,()=>{e=null}),it())},i(n){l||(L(e),l=!0)},o(n){S(e),l=!1},d(n){n&&g(t),e&&e.d(n)}}}function Vt(a){let t,l,e,n;const f=[Wt,Qt],o=[];function i(c,y){return c[6]?0:1}return l=i(a),e=o[l]=f[l](a),{c(){t=u("div"),e.c(),this.h()},l(c){t=d(c,"DIV",{class:!0,role:!0});var y=D(t);e.l(y),y.forEach(g),this.h()},h(){h(t,"class","fixed bg-gray-100 rounded-2xl border border-blue-100 inset-0 bg-opacity-90 z-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 overflow-y-auto"),h(t,"role","alert")},m(c,y){at(c,t,y),o[l].m(t,null),n=!0},p(c,y){let m=l;l=i(c),l===m?o[l].p(c,y):(ct(),S(o[m],1,1,()=>{o[m]=null}),it(),e=o[l],e?e.p(c,y):(e=o[l]=f[l](c),e.c()),L(e,1),e.m(t,null))},i(c){n||(L(e),n=!0)},o(c){S(e),n=!1},d(c){c&&g(t),o[l].d()}}}function Qt(a){let t,l='<p class="text-2xl font-extrabold sm:text-lg text-primary justify-center text-center">Il verdetto dell&#39;AI:</p>',e,n,f,o,i,c,y,m;return y=new wt({props:{text:"Ho capito",clickAction:a[14]}}),{c(){t=u("div"),t.innerHTML=l,e=H(),n=u("div"),f=u("p"),o=Q(a[7]),i=H(),c=u("div"),ft(y.$$.fragment),this.h()},l(p){t=d(p,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-12uk9pg"&&(t.innerHTML=l),e=N(p),n=d(p,"DIV",{class:!0});var b=D(n);f=d(b,"P",{class:!0});var T=D(f);o=W(T,a[7]),T.forEach(g),i=N(b),c=d(b,"DIV",{class:!0});var s=D(c);ut(y.$$.fragment,s),s.forEach(g),b.forEach(g),this.h()},h(){h(t,"class","flex mt-10 items-center gap-4 mt-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"),h(f,"class","mt-4 text-xl text-primary bg-gray-100"),h(c,"class","mt-6"),h(n,"class","grid grid-cols-1 overflow-y: auto")},m(p,b){at(p,t,b),at(p,e,b),at(p,n,b),r(n,f),r(f,o),r(n,i),r(n,c),dt(y,c,null),m=!0},p(p,b){(!m||b[0]&128)&&lt(o,p[7])},i(p){m||(L(y.$$.fragment,p),m=!0)},o(p){S(y.$$.fragment,p),m=!1},d(p){p&&(g(t),g(e),g(n)),mt(y)}}}function Wt(a){let t,l;return t=new zt({}),{c(){ft(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,n){dt(t,e,n),l=!0},p:kt,i(e){l||(L(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){mt(t,e)}}}function Xt(a){let t,l,e,n="Tutti i giocatori",f,o,i,c,y,m;const p=[Ft,Gt],b=[];function T(_,C){return _[0]?0:1}o=T(a),i=b[o]=p[o](a);let s=a[9]&&At(a),x=a[5]&&!a[8]&&Vt(a);return{c(){t=u("div"),l=u("div"),e=u("h2"),e.textContent=n,f=H(),i.c(),c=H(),s&&s.c(),y=H(),x&&x.c(),this.h()},l(_){t=d(_,"DIV",{class:!0});var C=D(t);l=d(C,"DIV",{class:!0});var B=D(l);e=d(B,"H2",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-8hihhe"&&(e.textContent=n),f=N(B),i.l(B),B.forEach(g),c=N(C),s&&s.l(C),y=N(C),x&&x.l(C),C.forEach(g),this.h()},h(){h(e,"class","text-2xl text-primary font-bold text-center mb-5"),h(l,"class","h-32 rounded-lg lg:col-span-2"),h(t,"class","grid grid-cols-1 gap-4 lg:gap-8 mx-auto justify-center sm:w-auto")},m(_,C){at(_,t,C),r(t,l),r(l,e),r(l,f),b[o].m(l,null),r(t,c),s&&s.m(t,null),r(t,y),x&&x.m(t,null),m=!0},p(_,C){let B=o;o=T(_),o===B?b[o].p(_,C):(ct(),S(b[B],1,1,()=>{b[B]=null}),it(),i=b[o],i?i.p(_,C):(i=b[o]=p[o](_),i.c()),L(i,1),i.m(l,null)),_[9]?s?(s.p(_,C),C[0]&512&&L(s,1)):(s=At(_),s.c(),L(s,1),s.m(t,y)):s&&(ct(),S(s,1,1,()=>{s=null}),it()),_[5]&&!_[8]?x?(x.p(_,C),C[0]&288&&L(x,1)):(x=Vt(_),x.c(),L(x,1),x.m(t,null)):x&&(ct(),S(x,1,1,()=>{x=null}),it())},i(_){m||(L(i),L(s),L(x),m=!0)},o(_){S(i),S(s),S(x),m=!1},d(_){_&&g(t),b[o].d(),s&&s.d(),x&&x.d()}}}let xt=11;function Zt(a,t,l){let e,n,f,o=1,i=1,c,y,m=!1,p=!1,b,T=!1;Lt(async()=>{l(0,f=await Rt()),l(3,i=Math.ceil(f.length/xt))});let s={col:"team",ascending:!0},x=!1;function _(M){l(8,T=!1),l(4,c=M),l(9,x=!0)}function C(M){y=M,l(9,x=!1),P()}function B(){l(8,T=!0),l(4,c=null),y=null,l(6,p=!1),l(5,m=!1)}async function P(){l(5,m=!0),l(6,p=!0);let M=Array.of(await Tt(c.id),await Tt(y.id));l(7,b=await qt(M)),l(6,p=!1)}const j=()=>e("name"),q=()=>e("team"),U=()=>e("value"),$=M=>_(M),E=()=>l(1,o=Math.max(1,o-1)),V=()=>l(1,o=Math.min(i,o+1)),F=()=>e("name"),R=()=>e("team"),v=()=>e("value"),Y=M=>C(M),X=()=>l(1,o=Math.max(1,o-1)),Z=()=>l(1,o=Math.min(i,o+1));return a.$$.update=()=>{a.$$.dirty[0]&5&&l(11,e=M=>{s.col==M?l(2,s.ascending=!s.ascending,s):(l(2,s.col=M,s),l(2,s.ascending=!0,s));let et=s.ascending?1:-1;const J=(ot,tt)=>{const A=ot[M],O=tt[M];return A<O?-1*et:A>O?1*et:0};l(0,f=f.sort(J))}),a.$$.dirty[0]&3&&l(10,n=f?f.slice((o-1)*xt,o*xt):[])},[f,o,s,i,c,m,p,b,T,x,n,e,_,C,B,j,q,U,$,E,V,F,R,v,Y,X,Z]}class te extends Pt{constructor(t){super(),Mt(this,t,Zt,Xt,Ht,{},null,[-1,-1])}}function ee(a){let t,l;return t=new te({}),{c(){ft(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,n){dt(t,e,n),l=!0},p:kt,i(e){l||(L(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){mt(t,e)}}}class fe extends Pt{constructor(t){super(),Mt(this,t,null,ee,Ht,{})}}export{fe as component};
