import{q as Ce,G as de,h as C,i as Q,d as we,k as ke,l as se,m as V,b as O,v as Ae,I as H,J as K,K as Z,x as Ee,L as Te,M as Ne,N as Ie,O as Se,Q as xe,R as Le,c as S,a as T,S as Oe,r as x,s as k,t as he,A as M,f as P}from"./disclose-version.4WUFGOf4.js";import{l as De,c as Re,r as ge,m as pe,q as He,X as Me,A as U,h as re,e as ae,z as Pe,s as ne,Y as Ge,Z as Ye,n as ze,i as qe,S as Be,a as We,_ as Qe,$ as Ve,j as ie,a0 as Ze,t as Y,f as le,x as oe,p as Fe,k as Ke}from"./runtime.aTuocfth.js";import{c as fe,d as Ue,s as Xe}from"./render.4bOSEVug.js";import{p as z,i as D}from"./props.fr22KYMs.js";import{s as G}from"./snippet.UUXt4Om7.js";let q=null;function mt(e){q=e}function bt(e,t){return t}function Je(e,t,s,r){for(var a=[],u=t.length,i=0;i<u;i++)Ge(t[i].e,a,!0);var d=u>0&&a.length===0&&s!==null;if(d){var y=s.parentNode;Ee(y),y.append(s),r.clear(),A(e,t[0].prev,t[u-1].next)}Ye(a,()=>{for(var p=0;p<u;p++){var m=t[p];d||(r.delete(m.k),A(e,m.prev,m.next)),ze(m.e,!d)}})}function Ct(e,t,s,r,a,u=null){var i=e,d={flags:t,items:new Map,first:null},y=(t&de)!==0;if(y){var p=e;i=C?Q(p.firstChild):p.appendChild(Ce())}C&&we();var m=null;De(()=>{var n=s(),f=Re(n)?n:n==null?[]:Array.from(n),l=f.length,h=d.flags;h&Z&&!qe(f)&&!(Be in f)&&!(We in f)&&(h^=Z,h&Ne&&!(h&H)&&(h^=H));let g=!1;if(C){var v=i.data===ke;v!==(l===0)&&(i=se(),Q(i),V(!1),g=!0)}if(C){for(var _=null,b,o=0;o<l;o++){if(O.nodeType===8&&O.data===Ae){i=O,g=!0,V(!1);break}var c=f[o],E=r(c,o);b=ye(O,d,_,null,c,E,o,a,h),d.items.set(E,b),_=b}l>0&&Q(se())}C||je(f,d,i,a,h,r),u!==null&&(l===0?m?ge(m):m=pe(()=>u(i)):m!==null&&He(m,()=>{m=null})),g&&V(!0)}),C&&(i=O)}function je(e,t,s,r,a,u){var J,j,$,ee;var i=(a&Te)!==0,d=(a&(H|K))!==0,y=e.length,p=t.items,m=t.first,n=m,f=new Set,l=null,h=new Set,g=[],v=[],_,b,o,c;if(i)for(c=0;c<y;c+=1)_=e[c],b=u(_,c),o=p.get(b),o!==void 0&&((J=o.a)==null||J.measure(),h.add(o));for(c=0;c<y;c+=1){if(_=e[c],b=u(_,c),o=p.get(b),o===void 0){var E=n?n.e.nodes.start:s;l=ye(E,t,l,l===null?t.first:l.next,_,b,c,r,a),p.set(b,l),g=[],v=[],n=l.next;continue}if(d&&$e(o,_,c,a),o.e.f&Me&&(ge(o.e),i&&((j=o.a)==null||j.unfix(),h.delete(o))),o!==n){if(f.has(o)){if(g.length<v.length){var I=v[0],w;l=I.prev;var X=g[0],B=g[g.length-1];for(w=0;w<g.length;w+=1)ce(g[w],I,s);for(w=0;w<v.length;w+=1)f.delete(v[w]);A(t,X.prev,B.next),A(t,l,X),A(t,B,I),n=I,l=B,c-=1,g=[],v=[]}else f.delete(o),ce(o,n,s),A(t,o.prev,o.next),A(t,o,l===null?t.first:l.next),A(t,l,o),l=o;continue}for(g=[],v=[];n!==null&&n.k!==b;)f.add(n),v.push(n),n=n.next;if(n===null)continue;o=n}g.push(o),l=o,n=o.next}const L=Array.from(f);for(;n!==null;)L.push(n),n=n.next;var W=L.length;if(W>0){var be=a&de&&y===0?s:null;if(i){for(c=0;c<W;c+=1)($=L[c].a)==null||$.measure();for(c=0;c<W;c+=1)(ee=L[c].a)==null||ee.fix()}Je(t,L,be,p)}i&&U(()=>{var te;for(o of h)(te=o.a)==null||te.apply()}),re.first=t.first&&t.first.e,re.last=l&&l.e}function $e(e,t,s,r){r&H&&ae(e.v,t),r&K?ae(e.i,s):e.i=s}function ye(e,t,s,r,a,u,i,d,y){var p=q;try{var m=(y&H)!==0,n=(y&Z)===0,f=m?n?Pe(a):ne(a):a,l=y&K?ne(i):i,h={i:l,v:f,k:u,a:null,e:null,prev:s,next:r};return q=h,h.e=pe(()=>d(e,f,l),C),h.e.prev=s&&s.e,h.e.next=r&&r.e,s===null?t.first=h:(s.next=h,s.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{q=p}}function ce(e,t,s){for(var r=e.next?e.next.e.nodes.start:s,a=t?t.e.nodes.start:s,u=e.e.nodes.start;u!==r;){var i=u.nextSibling;a.before(u),u=i}}function A(e,t,s){t===null?e.first=s:(t.next=s,t.e.next=s&&s.e),s!==null&&(s.prev=t,s.e.prev=t&&t.e)}function et(e,t){if(t){const s=document.body;e.autofocus=!0,U(()=>{document.activeElement===s&&e.focus()})}}let ue=!1;function tt(){ue||(ue=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const s of e.target.elements)(t=s.__on_r)==null||t.call(s)})},{capture:!0}))}function wt(e){if(C){var t=!1,s=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;N(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;N(e,"checked",null),e.checked=a}}};e.__on_r=s,Ve(s),tt()}}function N(e,t,s){s=s==null?null:s+"";var r=e.__attributes??(e.__attributes={});C&&(r[t]=e.getAttribute(t),t==="src"||t==="href"||t==="srcset")||r[t]!==(r[t]=s)&&(t==="loading"&&(e[Qe]=s),s===null?e.removeAttribute(t):e.setAttribute(t,s))}function st(e,t,s){if(t in e){var r=e[t],a=typeof r=="boolean"&&s===""?!0:s;(typeof r!="object"||r!==a)&&(e[t]=a)}else N(e,t,s)}function me(e,t,s,r,a){var u=a.length!==0,i=t||{},d=e.tagName==="OPTION";for(var y in t)y in s||(s[y]=null);u&&!s.class&&(s.class="");var p=ve.get(e.nodeName);p||ve.set(e.nodeName,p=at(e));var m=e.__attributes??(e.__attributes={}),n=[];for(const v in s){let _=s[v];if(d&&v==="value"&&_==null){e.value=e.__value="",i[v]=_;continue}var f=i[v];if(_!==f){i[v]=_;var l=v[0]+v[1];if(l!=="$$")if(l==="on"){const b={},o="$$"+v;let c=v.slice(2);var h=Le.includes(c);if(Ie(c)&&(c=c.slice(0,-7),b.capture=!0),!h&&f){if(_!=null)continue;e.removeEventListener(c,i[o],b),i[o]=null}if(_!=null)if(h)e[`__${c}`]=_,Ue([c]);else{let E=function(I){i[v].call(this,I)};t?i[o]=fe(c,e,E,b):n.push([v,_,()=>i[o]=fe(c,e,E,b)])}}else if(_==null)m[v]=null,e.removeAttribute(v);else if(v==="style")e.style.cssText=_+"";else if(v==="autofocus")et(e,!!_);else if(v==="__value"||v==="value")e.value=e[v]=e.__value=_;else{var g=v;r&&(g=g.toLowerCase(),g=Se[g]||g),p.includes(g)?C&&(g==="src"||g==="href"||g==="srcset")||(e[g]=_):typeof _!="function"&&(u&&g==="class"&&(_&&(_+=" "),_+=a),N(e,g,_))}}}return t||U(()=>{if(e.isConnected)for(const[v,_,b]of n)i[v]===_&&b()}),i}function kt(e,t,s,r){if(e.tagName.includes("-")){for(var a in t)a in s||(s[a]=null);for(a in s)st(e,a,s[a]);return s}return me(e,t,s,e.namespaceURI!==xe,r)}var rt=["width","height"],ve=new Map;function at(e){for(var t=[],s,r=ie(e);r.constructor.name!=="Element";){s=Ze(r);for(var a in s)s[a].set&&!rt.includes(a)&&t.push(a);r=ie(r)}return t}function At(e,t){var s=e.__className,r=nt(t);C&&e.className===r?e.__className=r:(s!==r||C&&e.className!==r)&&(t==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function nt(e){return e??""}function it(e,t,s){s?e.classList.add(t):e.classList.remove(t)}function _e(e,t,s,r){const a=e.style,u=a.getPropertyValue(t);s==null?u!==""&&a.removeProperty(t):u!==s&&a.setProperty(t,s,r?"important":"")}const R=(e,t)=>!t||!e.startsWith(t)?e:e.substring(t.length),F=(e,t)=>!t||!e.endsWith(t)?e:e.substring(0,e.length-t.length),lt=(e,t)=>e.endsWith(t)?e:e+t,ot=e=>F(R(R(e,"https://"),"www."),"/");var ft=Oe(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function ct(e,t){const s=z(t,"fill",3,"var(--text_color, #000)"),r=z(t,"size",3,"var(--space_xl7, 64px)"),a=z(t,"label",3,"the GitHub icon, an octocat silhouette"),u=oe(()=>t.width??r()),i=oe(()=>t.height??r());var d=ft();let y;var p=S(d);x(d),Y(()=>{y=me(d,y,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t.attrs,"aria-label":a(),class:t.classes},!1,"svelte-16ciom8"),it(d,"inline",t.inline),_e(d,"width",le(u)),_e(d,"height",le(i)),N(p,"fill",s())}),T(e,d)}var ut=he('<div class="root_url svelte-cs8o0f"><a> </a></div>'),vt=he('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function Et(e,t){Fe(t,!0);const s=z(t,"root_url",3,null);var r=vt(),a=S(r);D(a,()=>t.children,n=>{var f=M(),l=P(f);G(l,()=>t.children),T(n,f)});var u=k(k(a,!0)),i=S(u);D(i,()=>t.logo_header,n=>{var f=M(),l=P(f);G(l,()=>t.logo_header),T(n,f)});var d=k(k(i,!0)),y=S(d);D(y,()=>t.logo,n=>{var f=M(),l=P(f);G(l,()=>t.logo),T(n,f)},n=>{ct(n,{})}),x(d);var p=k(k(d,!0));D(p,()=>t.logo_footer,n=>{var f=M(),l=P(f);G(l,()=>t.logo_footer),T(n,f)}),x(u);var m=k(k(u,!0));D(m,s,n=>{var f=ut(),l=S(f),h=S(l);Y(()=>Xe(h,ot(s()))),x(l),x(f),Y(()=>N(l,"href",s())),T(n,f)}),x(r),Y(()=>N(d,"href",t.pkg.repo_url)),T(e,r),Ke()}const Tt=(e,t)=>{const{name:s}=e,a=(l=>l?F(R(F(l,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!a)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const u=e.homepage??null,i=!e.private&&!!e.exports&&e.version!=="0.0.1",d=i?"https://www.npmjs.com/package/"+e.name:null,y=i&&a?a+"/blob/main/CHANGELOG.md":null,p=_t(s),m=a?R(a,"https://github.com/").split("/")[0]:null,n=u?lt(u,"/")+(e.logo?R(e.logo,"/"):"favicon.png"):null,f=e.logo_alt??`logo for ${p}`;return{package_json:e,src_json:t,name:s,repo_name:p,repo_url:a,owner_name:m,homepage_url:u,logo_url:n,logo_alt:f,npm_url:d,changelog_url:y,published:i}},_t=e=>e[0]==="@"?e.split("/")[1]:e,Nt={name:"svelte-intersect",version:"0.14.2",description:"a Svelte action for IntersectionObserver",license:"MIT",glyph:"💠",logo:"logo.svg",logo_alt:"a friendly pixelated spider facing you",public:!0,homepage:"https://ryanatkn.github.io/svelte-intersect/",repository:"https://github.com/ryanatkn/svelte-intersect",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/svelte-intersect/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.11","@ryanatkn/eslint-config":"^0.4.2","@ryanatkn/fuz":"^0.118.2","@ryanatkn/fuz_code":"^0.17.0","@ryanatkn/gro":"^0.133.4","@ryanatkn/moss":"^0.11.1","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1",eslint:"^9.7.0","eslint-plugin-svelte":"^2.43.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.195","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.4","typescript-eslint":"^8.0.0-alpha.44",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{".":{types:"./dist/index.d.ts",default:"./dist/index.js"},"./package.json":"./package.json"}},It={name:"svelte-intersect",version:"0.14.2",modules:{".":{path:"index.ts",declarations:[{name:"Intersect_Params",kind:"type"},{name:"Intersect_Params_Or_Callback",kind:"type"},{name:"intersect",kind:"function"},{name:"On_Intersect",kind:"type"},{name:"Intersect_State",kind:"type"},{name:"On_Disconnect",kind:"type"},{name:"Disconnect_State",kind:"type"}]},"./package.json":{path:"package.json",declarations:[]}}};export{Et as L,N as a,_e as b,Ct as c,R as d,lt as e,ot as f,At as g,F as h,bt as i,It as j,Nt as k,mt as l,q as m,tt as n,kt as o,Tt as p,wt as r,me as s,it as t};