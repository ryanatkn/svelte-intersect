import{i as b,S as R,a as o,o as P,b as O,d as x,s as m,c as S,e as r,g as w,f as _,h as T,u as D,j as E}from"./runtime.aTuocfth.js";import{U as u}from"./disclose-version.4WUFGOf4.js";function h(e,t=null,s){if(typeof e=="object"&&e!=null&&!b(e)&&!(R in e)){if(o in e){const n=e[o];if(n.t===e||n.p===e)return n.p}const f=E(e);if(f===P||f===O){const n=new Proxy(e,I);return x(e,o,{value:{s:new Map,v:m(0),a:S(e),p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function g(e,t=1){r(e,e.v+t)}const I={defineProperty(e,t,s){if(s.value){const f=e[o],n=f.s.get(t);n!==void 0&&r(n,h(s.value,f))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[o],f=s.s.get(t),n=s.a,i=delete e[t];if(n&&i){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&r(a,l)}return f!==void 0&&r(f,u),i&&g(s.v),i},get(e,t,s){var i;if(t===o)return Reflect.get(e,o);const f=e[o];let n=f.s.get(t);if(n===void 0&&(!(t in e)||(i=w(e,t))!=null&&i.writable)&&(n=m(h(e[t],f)),f.s.set(t,n)),n!==void 0){const a=_(n);return a===u?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[o].s.get(t);n&&(s.value=_(n))}return s},has(e,t){var i;if(t===o)return!0;const s=e[o],f=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||T!==null&&(!f||(i=w(e,t))!=null&&i.writable))&&(n===void 0&&(n=m(f?h(e[t],s):u),s.s.set(t,n)),_(n)===u)?!1:f},set(e,t,s,f){const n=e[o];let i=n.s.get(t);i===void 0&&(D(()=>f[t]),i=n.s.get(t)),i!==void 0&&r(i,h(s,n));const a=n.a,l=!(t in e);if(a&&t==="length")for(let c=s;c<e.length;c+=1){const d=n.s.get(c+"");d!==void 0&&r(d,u)}var y=Reflect.getOwnPropertyDescriptor(e,t);if(y!=null&&y.set?y.set.call(f,s):e[t]=s,l){if(a){const c=n.s.get("length"),d=e.length;c!==void 0&&c.v!==d&&r(c,d)}g(n.v)}return!0},ownKeys(e){const t=e[o];return _(t.v),Reflect.ownKeys(e)}};export{h as p};