import{H as n,I as i,z as o,e as c,f}from"./runtime.aTuocfth.js";import{s as a}from"./entry.tf8-EcB0.js";function p(s,u,r){if(s==null)return u(void 0),r&&r(void 0),n;const e=s.subscribe(u,r);return e.unsubscribe?()=>e.unsubscribe():e}function v(s,u,r){const e=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:n});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)c(e.source,void 0),e.unsubscribe=n;else{var t=!0;e.unsubscribe=p(s,b=>{t?e.source.v=b:c(e.source,b)}),t=!1}return f(e.source)}function m(){const s={};return i(()=>{for(var u in s)s[u].unsubscribe()}),s}const d=()=>{const s=a;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return d().page.subscribe(s)}};export{v as a,w as p,m as s};
