import{r as x}from"./singletons-12a22614.js";import{S as y,i as q,s as L,e as u,k as b,t as w,c as _,a as v,d,n as E,g as I,b as h,f as j,I as f,h as k,J as C,K as p,L as g}from"./vendor-c53e2aa3.js";const D=x,$=S;async function S(n,e){return D.goto(n,e,[])}function V(n){let e,i,o,a,c,s,l;return{c(){e=u("div"),i=u("div"),o=b(),a=u("p"),c=w(n[0]),this.h()},l(t){e=_(t,"DIV",{class:!0});var r=v(e);i=_(r,"DIV",{class:!0}),v(i).forEach(d),o=E(r),a=_(r,"P",{class:!0});var m=v(a);c=I(m,n[0]),m.forEach(d),r.forEach(d),this.h()},h(){h(i,"class","loader svelte-2vsuqw"),h(a,"class","text svelte-2vsuqw"),h(e,"class","verifyContainer svelte-2vsuqw")},m(t,r){j(t,e,r),f(e,i),f(e,o),f(e,a),f(a,c),l=!0},p(t,[r]){(!l||r&1)&&k(c,t[0])},i(t){l||(t&&C(()=>{s||(s=p(e,g,{},!0)),s.run(1)}),l=!0)},o(t){t&&(s||(s=p(e,g,{},!1)),s.run(0)),l=!1},d(t){t&&d(e),t&&s&&s.end()}}}function J(n,e,i){let{text:o="Loading..."}=e;return n.$$set=a=>{"text"in a&&i(0,o=a.text)},[o]}class z extends y{constructor(e){super();q(this,e,J,V,L,{text:0})}}export{z as L,$ as g};