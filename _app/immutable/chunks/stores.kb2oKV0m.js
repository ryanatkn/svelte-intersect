import{z as n,A as c,y as i,k as o,h as f}from"./runtime.tR7Vvi4S.js";import{s as a}from"./entry.e1fJc1n7.js";function p(s,u,r){if(s==null)return u(void 0),r&&r(void 0),n;const e=s.subscribe(u,r);return e.unsubscribe?()=>e.unsubscribe():e}function v(s,u,r){const e=r[u]??(r[u]={store:null,source:i(void 0),unsubscribe:n});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=n;else{var t=!0;e.unsubscribe=p(s,b=>{t?e.source.v=b:f(e.source,b)}),t=!1}return o(e.source)}function m(){const s={};return c(()=>{for(var u in s)s[u].unsubscribe()}),s}const d=()=>{const s=a;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return d().page.subscribe(s)}};export{v as a,w as p,m as s};
