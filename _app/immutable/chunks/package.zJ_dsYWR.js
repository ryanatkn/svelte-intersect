import{m as me,E as ve,h as C,p as $,H as be,B as ee,r as Ce,d as we,i as W,n as ke,C as D,D as F,F as V,u as Ae,G as Ee,I as Te,J as Se,K as Ie,L as Ne,M as xe,a as E,N as Le,c as N,t as _e,y as O,s as k,f as H}from"./disclose-version.GU8E7gNk.js";import{l as De,c as Oe,r as de,n as ge,v as He,T as Re,A as U,h as te,e as se,m as Me,s as re,U as Ge,V as Pe,q as Ye,i as Be,S as ze,a as We,W as Ve,X as qe,j as ae,Y as Fe,t as M,f as ne,y as ie,p as Ue,k as Ke}from"./runtime.21xi6-QE.js";import{c as le,d as Qe,s as Xe}from"./render.8rKscaRc.js";import{p as G,i as L}from"./props.4e94DXvV.js";import{s as R}from"./snippet.Tj7UBVNG.js";let P=null;function ht(t){P=t}function pt(t,e){return e}function Ze(t,e,s,r){for(var a=[],u=e.length,f=0;f<u;f++)Ge(e[f].e,a,!0);var g=u>0&&a.length===0&&s!==null;if(g){var p=s.parentNode;Ae(p),p.append(s),r.clear(),A(t,e[0].prev,e[u-1].next)}Pe(a,()=>{for(var h=0;h<u;h++){var y=e[h];g||(r.delete(y.k),A(t,y.prev,y.next)),Ye(y.e,!g)}})}function yt(t,e,s,r,a,u=null){var f={flags:e,items:new Map,first:null},g=(e&ve)!==0;if(g){var p=t;t=C?$(p.firstChild):p.appendChild(me())}var h=null;De(()=>{var y=s(),n=Oe(y)?y:y==null?[]:Array.from(y),c=n.length,l=f.flags;l&V&&!Be(n)&&!(ze in n)&&!(We in n)&&(l^=V,l&Te&&!(l&D)&&(l^=D));let v=!1;if(C){var _=t.data===be;(_!==(c===0)||ee===void 0)&&(Ce(we),W(!1),v=!0)}if(C){for(var o=ee,m=null,b,i=0;i<c;i++){if(o.nodeType!==8||o.data!==ke){v=!0,W(!1);break}o=$(o);var d=n[i],S=r(d,i);b=he(o,f,m,null,d,S,i,a,l),f.items.set(S,b),o=o.nextSibling,m=b}if(c>0)for(;o!==t;){var I=o.nextSibling;o.remove(),o=I}}C||Je(n,f,t,a,l,r),u!==null&&(c===0?h?de(h):h=ge(()=>u(t)):h!==null&&He(h,()=>{h=null})),v&&W(!0)})}function Je(t,e,s,r,a,u){var Q,X,Z,J;var f=(a&Ee)!==0,g=(a&(D|F))!==0,p=t.length,h=e.items,y=e.first,n=y,c=new Set,l=null,v=new Set,_=[],o=[],m,b,i,d;if(f)for(d=0;d<p;d+=1)m=t[d],b=u(m,d),i=h.get(b),i!==void 0&&((Q=i.a)==null||Q.measure(),v.add(i));for(d=0;d<p;d+=1){if(m=t[d],b=u(m,d),i=h.get(b),i===void 0){var S=n?n.e.nodes.start:s;l=he(S,e,l,l===null?e.first:l.next,m,b,d,r,a),h.set(b,l),_=[],o=[],n=l.next;continue}if(g&&je(i,m,d,a),i.e.f&Re&&(de(i.e),f&&((X=i.a)==null||X.unfix(),v.delete(i))),i!==n){if(c.has(i)){if(_.length<o.length){var I=o[0],w;l=I.prev;var K=_[0],B=_[_.length-1];for(w=0;w<_.length;w+=1)oe(_[w],I,s);for(w=0;w<o.length;w+=1)c.delete(o[w]);A(e,K.prev,B.next),A(e,l,K),A(e,B,I),n=I,l=B,d-=1,_=[],o=[]}else c.delete(i),oe(i,n,s),A(e,i.prev,i.next),A(e,i,l===null?e.first:l.next),A(e,l,i),l=i;continue}for(_=[],o=[];n!==null&&n.k!==b;)c.add(n),o.push(n),n=n.next;if(n===null)continue;i=n}_.push(i),l=i,n=i.next}const x=Array.from(c);for(;n!==null;)x.push(n),n=n.next;var z=x.length;if(z>0){var ye=a&ve&&p===0?s:null;if(f){for(d=0;d<z;d+=1)(Z=x[d].a)==null||Z.measure();for(d=0;d<z;d+=1)(J=x[d].a)==null||J.fix()}Ze(e,x,ye,h)}f&&U(()=>{var j;for(i of v)(j=i.a)==null||j.apply()}),te.first=e.first&&e.first.e,te.last=l&&l.e}function je(t,e,s,r){r&D&&se(t.v,e),r&F?se(t.i,s):t.i=s}function he(t,e,s,r,a,u,f,g,p){var h=P;try{var y=(p&D)!==0,n=(p&V)===0,c=y?n?Me(a):re(a):a,l=p&F?re(f):f,v={i:l,v:c,k:u,a:null,e:null,prev:s,next:r};return P=v,v.e=ge(()=>g(t,c,l),C),v.e.prev=s&&s.e,v.e.next=r&&r.e,s===null?e.first=v:(s.next=v,s.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{P=h}}function oe(t,e,s){for(var r=t.next?t.next.e.nodes.start:s,a=e?e.e.nodes.start:s,u=t.e.nodes.start;u!==r;){var f=u.nextSibling;a.before(u),u=f}}function A(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function $e(t,e){if(e){const s=document.body;t.autofocus=!0,U(()=>{document.activeElement===s&&t.focus()})}}let fe=!1;function et(){fe||(fe=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const s of t.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function mt(t){if(C){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;T(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var a=t.checked;T(t,"checked",null),t.checked=a}}};t.__on_r=s,qe(s),et()}}function T(t,e,s){s=s==null?null:s+"";var r=t.__attributes??(t.__attributes={});C&&(r[e]=t.getAttribute(e),e==="src"||e==="href"||e==="srcset")||r[e]!==(r[e]=s)&&(e==="loading"&&(t[Ve]=s),s===null?t.removeAttribute(e):t.setAttribute(e,s))}function tt(t,e,s){if(e in t){var r=t[e],a=typeof r=="boolean"&&s===""?!0:s;(typeof r!="object"||r!==a)&&(t[e]=a)}else T(t,e,s)}function pe(t,e,s,r,a){var u=a.length!==0,f=e||{};for(var g in e)g in s||(s[g]=null);u&&!s.class&&(s.class="");var p=ue.get(t.nodeName);p||ue.set(t.nodeName,p=rt(t));var h=t.__attributes??(t.__attributes={}),y=[];for(const _ in s){let o=s[_];var n=f[_];if(o!==n){f[_]=o;var c=_[0]+_[1];if(c!=="$$")if(c==="on"){const m={},b="$$"+_;let i=_.slice(2);var l=xe.includes(i);if(Se(i)&&(i=i.slice(0,-7),m.capture=!0),!l&&n){if(o!=null)continue;t.removeEventListener(i,f[b],m),f[b]=null}if(o!=null)if(l)t[`__${i}`]=o,Qe([i]);else{let d=function(S){f[_].call(this,S)};e?f[b]=le(i,t,d,m):y.push([_,o,()=>f[b]=le(i,t,d,m)])}}else if(o==null)h[_]=null,t.removeAttribute(_);else if(_==="style")t.style.cssText=o+"";else if(_==="autofocus")$e(t,!!o);else if(_==="__value"||_==="value")t.value=t[_]=t.__value=o;else{var v=_;r&&(v=v.toLowerCase(),v=Ie[v]||v),p.includes(v)?C&&(v==="src"||v==="href"||v==="srcset")||(t[v]=o):typeof o!="function"&&(u&&v==="class"&&(o&&(o+=" "),o+=a),T(t,v,o))}}}return e||U(()=>{if(t.isConnected)for(const[_,o,m]of y)f[_]===o&&m()}),f}function bt(t,e,s,r){if(t.tagName.includes("-")){for(var a in e)a in s||(s[a]=null);for(a in s)tt(t,a,s[a]);return s}return pe(t,e,s,t.namespaceURI!==Ne,r)}var st=["width","height"],ue=new Map;function rt(t){for(var e=[],s,r=ae(t);r.constructor.name!=="Element";){s=Fe(r);for(var a in s)s[a].set&&!st.includes(a)&&e.push(a);r=ae(r)}return e}function Ct(t,e){var s=t.__className,r=at(e);C&&t.className===r?t.__className=r:(s!==r||C&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function at(t){return t??""}function wt(t,e,s){s?t.classList.add(e):t.classList.remove(e)}function ce(t,e,s,r){const a=t.style,u=a.getPropertyValue(e);s==null?u!==""&&a.removeProperty(e):u!==s&&a.setProperty(e,s,r?"important":"")}const Y=(t,e)=>!e||!t.startsWith(e)?t:t.substring(e.length),q=(t,e)=>!e||!t.endsWith(e)?t:t.substring(0,t.length-e.length),kt=(t,e)=>t.endsWith(e)?t:t+e,nt=t=>q(Y(Y(t,"https://"),"www."),"/");var it=Le(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function lt(t,e){const s=G(e,"fill",3,"var(--text_color, #000)"),r=G(e,"size",3,"var(--space_xl7, 64px)"),a=G(e,"label",3,"the GitHub icon, an octocat silhouette"),u=ie(()=>e.width??r()),f=ie(()=>e.height??r());var g=it();let p;var h=N(g);M(()=>{p=pe(g,p,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e.attrs,"aria-label":a(),class:e.classes},!1,""),ce(g,"width",ne(u)),ce(g,"height",ne(f)),T(h,"fill",s())}),E(t,g)}var ot=_e('<div class="root_url svelte-cs8o0f"><a> </a></div>'),ft=_e('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function At(t,e){Ue(e,!0);const s=G(e,"root_url",3,null);var r=ft(),a=N(r);L(a,()=>e.children,n=>{var c=O(),l=H(c);R(l,()=>e.children),E(n,c)});var u=k(k(a,!0)),f=N(u);L(f,()=>e.logo_header,n=>{var c=O(),l=H(c);R(l,()=>e.logo_header),E(n,c)});var g=k(k(f,!0)),p=N(g);L(p,()=>e.logo,n=>{var c=O(),l=H(c);R(l,()=>e.logo),E(n,c)},n=>{lt(n,{})});var h=k(k(g,!0));L(h,()=>e.logo_footer,n=>{var c=O(),l=H(c);R(l,()=>e.logo_footer),E(n,c)});var y=k(k(u,!0));L(y,s,n=>{var c=ot(),l=N(c),v=N(l);M(()=>Xe(v,nt(s()))),M(()=>T(l,"href",s())),E(n,c)}),M(()=>T(g,"href",e.pkg.repo_url)),E(t,r),Ke()}const Et=(t,e,s)=>{const{name:r}=e,u=(c=>c?q(Y(q(c,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),f=e.homepage??null,g=!e.private&&!!e.exports&&e.version!=="0.0.1",p=g?"https://www.npmjs.com/package/"+e.name:null,h=g&&u?u+"/blob/main/CHANGELOG.md":null,y=ut(r),n=u?Y(u,"https://github.com/").split("/")[0]:null;return{url:t,package_json:e,src_json:s,name:r,repo_name:y,repo_url:u,owner_name:n,homepage_url:f,npm_url:p,changelog_url:h,published:g}},ut=t=>t[0]==="@"?t.split("/")[1]:t,Tt={name:"svelte-intersect",version:"0.14.2",description:"a Svelte action for IntersectionObserver",license:"MIT",glyph:"💠",logo:"logo.svg",logo_alt:"a friendly pixelated spider facing you",public:!0,homepage:"https://ryanatkn.github.io/svelte-intersect/",repository:"https://github.com/ryanatkn/svelte-intersect",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/svelte-intersect/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.4","@ryanatkn/eslint-config":"^0.4.0","@ryanatkn/fuz":"^0.108.4","@ryanatkn/fuz_code":"^0.15.2","@ryanatkn/gro":"^0.129.13","@ryanatkn/moss":"^0.7.1","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1",eslint:"^9.6.0","eslint-plugin-svelte":"^2.41.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.175","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.3","typescript-eslint":"^8.0.0-alpha.39",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{".":{types:"./dist/index.d.ts",default:"./dist/index.js"},"./package.json":"./package.json"}},St={name:"svelte-intersect",version:"0.14.2",modules:{".":{path:"index.ts",declarations:[{name:"Intersect_Params",kind:"type"},{name:"Intersect_Params_Or_Callback",kind:"type"},{name:"intersect",kind:"function"},{name:"On_Intersect",kind:"type"},{name:"Intersect_State",kind:"type"},{name:"On_Disconnect",kind:"type"},{name:"Disconnect_State",kind:"type"}]},"./package.json":{path:"package.json",declarations:[]}}};export{At as L,T as a,ce as b,yt as c,Y as d,kt as e,nt as f,Ct as g,q as h,pt as i,Tt as j,St as k,ht as l,P as m,et as n,bt as o,Et as p,mt as r,pe as s,wt as t};
