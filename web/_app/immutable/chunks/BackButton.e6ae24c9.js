import{s as _,n as h}from"./scheduler.ce710c66.js";import{S as g,i as x,g as u,m as p,h as d,j as m,n as A,f,k as r,a as b,A as k,B as v,o as y}from"./index.86f09419.js";function B(s){let t,n,o,l,c;return{c(){t=u("a"),n=u("span"),o=p(s[1]),this.h()},l(e){t=d(e,"A",{class:!0,href:!0});var a=m(t);n=d(a,"SPAN",{class:!0});var i=m(n);o=A(i,s[1]),i.forEach(f),a.forEach(f),this.h()},h(){r(n,"class","block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"),r(t,"class","group inline-block rounded-full bg-gradient-to-r from-secondary via-secondary to-light p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"),r(t,"href",s[0])},m(e,a){b(e,t,a),k(t,n),k(n,o),l||(c=v(t,"click",s[4]),l=!0)},p(e,[a]){a&2&&y(o,e[1]),a&1&&r(t,"href",e[0])},i:h,o:h,d(e){e&&f(t),l=!1,c()}}}function w(s,t,n){let{href:o="#"}=t,{text:l="Download"}=t,{clickAction:c=null}=t;function e(){c&&c()}const a=()=>e();return s.$$set=i=>{"href"in i&&n(0,o=i.href),"text"in i&&n(1,l=i.text),"clickAction"in i&&n(3,c=i.clickAction)},[o,l,e,c,a]}class E extends g{constructor(t){super(),x(this,t,w,B,_,{href:0,text:1,clickAction:3})}}export{E as B};
