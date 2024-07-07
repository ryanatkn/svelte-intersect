import{T as Be,O as Ue,Q as Je,a as o,t as k,y as W,s as a,f as O,c as n,z as Ke}from"../chunks/disclose-version.GU8E7gNk.js";import{H as $,E as Ge,Z as He,_ as Qe,J as Ze,h as Ve,u as Xe,$ as Ye,A as $e,K as ea,I as aa,p as ee,t as b,k as ae,f as r,y as A,a0 as L}from"../chunks/runtime.21xi6-QE.js";import{a as ta,s as S}from"../chunks/render.8rKscaRc.js";import{p as ra,i as E}from"../chunks/props.4e94DXvV.js";import{s as je,a as M,f as sa,t as Q,b as V,e as se,c as oe,d as ne,i as we,g as na,h as ke,p as oa,j as xe,L as ia,k as va}from"../chunks/package.zJ_dsYWR.js";import{s as R}from"../chunks/snippet.Tj7UBVNG.js";import{s as Ee,a as Fe,p as Te}from"../chunks/stores.qcKSJ25F.js";import{b as _a}from"../chunks/entry.WcPeBBo9.js";const Ne=typeof window<"u",la=Ne?requestAnimationFrame:$,da=Ne?()=>performance.now():()=>Date.now(),J={tick:l=>la(l),now:()=>da(),tasks:new Set};function Oe(l){J.tasks.forEach(e=>{e.c(l)||(J.tasks.delete(e),e.f())}),J.tasks.size!==0&&J.tick(Oe)}function ca(l){let e;return J.tasks.size===0&&J.tick(Oe),{promise:new Promise(i=>{J.tasks.add(e={c:l,f:i})}),abort(){J.tasks.delete(e)}}}function Y(l,e){l.dispatchEvent(new CustomEvent(e))}function ua(l){const e=l.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function pa(l){const e={},i=l.split(";");for(const p of i){const[v,_]=p.split(":");if(!v||_===void 0)break;const d=ua(v.trim());e[d]=_.trim()}return e}const ga=l=>l;function ma(l,e,i,p){var v=(l&Be)!==0,_=(l&Ue)!==0,d=(l&Je)!==0,C=v&&_?"both":v?"in":"out",z,c=e.inert,f,j,N;function w(){return z??(z=i()(e,p==null?void 0:p(),{direction:C}))}var T={is_global:d,in(){e.inert=c,v?(Y(e,"introstart"),f=ie(e,w(),j,1,()=>{Y(e,"introend"),f=z=void 0})):(j==null||j.abort(),N==null||N())},out(g){_?(e.inert=!0,Y(e,"outrostart"),j=ie(e,w(),f,0,()=>{Y(e,"outroend"),j=z=void 0,g==null||g()}),N=j.reset):g==null||g()},stop:()=>{f==null||f.abort(),j==null||j.abort()}},x=Ve;if((x.transitions??(x.transitions=[])).push(T),v&&ta){let g=d;if(!g){for(var F=x.parent;F&&F.f&Ge;)for(;(F=F.parent)&&!(F.f&He););g=!F||(F.f&Qe)!==0}g&&Ze(()=>{Xe(()=>T.in())})}}function ie(l,e,i,p,v){if(Ye(e)){var _;return $e(()=>{var I=e({direction:p===1?"in":"out"});_=ie(l,I,i,p,v)}),{abort:()=>_.abort(),deactivate:()=>_.deactivate(),reset:()=>_.reset(),t:I=>_.t(I)}}if(i==null||i.deactivate(),!(e!=null&&e.duration))return v==null||v(),{abort:$,deactivate:$,reset:$,t:()=>p};var{delay:d=0,duration:C,css:z,tick:c,easing:f=ga}=e,j=J.now()+d,N=(i==null?void 0:i.t(j))??1-p,w=p-N;C*=Math.abs(w);var T=j+C,x,F;if(z){for(var g=[],P=Math.ceil(C/16.666666666666668),q=0;q<=P;q+=1){var B=N+w*f(q/P),H=z(B,1-B);g.push(pa(H))}x=l.animate(g,{delay:d,duration:C,easing:"linear",fill:"forwards"}),x.finished.then(()=>{v==null||v(),p===1&&x.cancel()}).catch(I=>{if(x.startTime!==null&&x.currentTime!==null)throw I})}else N===0&&(c==null||c(0,1)),F=ca(I=>{if(I>=T)return c==null||c(p,1-p),v==null||v(),!1;if(I>=j){var K=N+w*f((I-j)/C);c==null||c(K,1-K)}return!0});return{abort:()=>{x==null||x.cancel(),F==null||F.abort()},deactivate:()=>{v=void 0},reset:()=>{p===0&&(c==null||c(1,0))},t:I=>{var K=N+w*f((I-j)/C);return Math.min(1,Math.max(0,K))}}}function ha(l,e,i,p,v){var _=()=>{p(i[l])};i.addEventListener(e,_),v?ea(()=>{i[l]=v()}):_(),(i===document.body||i===window||i===document)&&aa(()=>{i.removeEventListener(e,_)})}function fa(l){const e=l-1;return e*e*e+1}function ya(l,{delay:e=0,duration:i=400,easing:p=fa,axis:v="y"}={}){const _=getComputedStyle(l),d=+_.opacity,C=v==="y"?"height":"width",z=parseFloat(_[C]),c=v==="y"?["top","bottom"]:["left","right"],f=c.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),j=parseFloat(_[`padding${f[0]}`]),N=parseFloat(_[`padding${f[1]}`]),w=parseFloat(_[`margin${f[0]}`]),T=parseFloat(_[`margin${f[1]}`]),x=parseFloat(_[`border${f[0]}Width`]),F=parseFloat(_[`border${f[1]}Width`]);return{delay:e,duration:i,easing:p,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*d};${C}: ${g*z}px;padding-${c[0]}: ${g*j}px;padding-${c[1]}: ${g*N}px;margin-${c[0]}: ${g*w}px;margin-${c[1]}: ${g*T}px;border-${c[0]}-width: ${g*x}px;border-${c[1]}-width: ${g*F}px;`}}var ja=k("<div><!></div>"),ka=k("<details><summary><!></summary> <!></details>");function xa(l,e){ee(e,!0);let i=ra(e,"open",7);var p=ka();let v;var _=n(p);let d;var C=n(_);R(C,()=>e.summary);var z=a(a(_,!0));E(z,()=>e.eager,c=>{var f=W(),j=O(f);R(j,()=>e.children),o(c,f)},c=>{var f=W(),j=O(f);E(j,i,N=>{var w=ja();ma(3,w,()=>ya);var T=n(w);R(T,()=>e.children),o(N,w)},null,!0),o(c,f)}),b(()=>{v=je(p,v,{...e.attrs},!0,""),d=je(_,d,{...e.summary_attrs},!0,"")}),ha("open","toggle",p,c=>i(c),i),o(l,p),ae()}var ba=k('<div class="repo_name svelte-19y7aej"> <!></div>'),wa=k('<div class="description svelte-19y7aej"> </div>'),Ea=k('<div class="motto svelte-19y7aej"> </div>'),Fa=k('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),Ta=k('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),Na=k('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),Oa=k('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),Aa=k('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),Ca=k('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),Ia=k('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),za=k('<div class="logo svelte-19y7aej"><img></div>'),La=k("<li> </li>"),Sa=k('<ul class="declarations unstyled svelte-19y7aej"></ul>'),Wa=k('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),qa=k('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),Ma=k("raw data for <code>pkg: Package_Meta</code>",1),Ra=k("<pre><code> </code></pre>"),Da=k('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function Pa(l,e){ee(e,!0);const i=Ee(),p=()=>Fe(Te,"$page",i),v=A(()=>e.pkg),_=A(()=>{let{package_json:u,src_json:t}=r(v);return[u,t]}),d=A(()=>r(_)[0]),C=A(()=>r(_)[1]),z=A(()=>r(C)),c=A(()=>{let{modules:u}=r(z);return[u]}),f=A(()=>r(c)[0]),j=A(()=>r(d).repository?ne(ke(ke(typeof r(d).repository=="string"?r(d).repository:r(d).repository.url,".git"),"/"),"git+"):null),N=A(()=>r(d).license&&r(j)?r(j)+"/blob/main/LICENSE":null),w=(u,t)=>u+"/blob/main/src/lib/"+(t.endsWith(".js")?t.slice(0,-3)+".ts":t),T=A(()=>r(d).exports&&Object.keys(r(d).exports)),x=A(()=>r(d).exports?Object.keys(r(d).exports).map(u=>{const t=ne(u,"./");return t==="."?"index.js":t}):null),F=A(()=>e.pkg.homepage_url?se(e.pkg.homepage_url,"/")+(e.pkg.package_json.logo?ne(e.pkg.package_json.logo,"/"):"favicon.png"):void 0),g=e.pkg.package_json.logo_alt??`logo for ${e.pkg.repo_name}`;var P=Da(),q=n(P),B=n(q),H=n(B),I=n(H),K=n(I);E(K,()=>e.repo_name,u=>{var t=W(),m=O(t);R(m,()=>e.repo_name,()=>e.pkg.repo_name),o(u,t)},u=>{var t=ba(),m=n(t),h=a(m);E(h,()=>r(d).glyph,s=>{var y=Ke(s);b(()=>S(y,` ${r(d).glyph??""}`)),o(s,y)}),b(()=>S(m,e.pkg.repo_name)),o(u,t)});var ve=a(a(I,!0));E(ve,()=>e.children,u=>{var t=W(),m=O(t);R(m,()=>e.children,()=>e.pkg),o(u,t)});var _e=a(a(ve,!0));E(_e,()=>r(d).description,u=>{var t=W(),m=O(t);E(m,()=>e.description,h=>{var s=W(),y=O(s);R(y,()=>e.description,()=>r(d).description),o(h,s)},h=>{var s=wa(),y=n(s);b(()=>S(y,r(d).description)),o(h,s)}),o(u,t)});var le=a(a(_e,!0));E(le,()=>r(d).motto,u=>{var t=W(),m=O(t);E(m,()=>e.motto,h=>{var s=W(),y=O(s);R(y,()=>e.motto,()=>r(d).motto),o(h,s)},h=>{var s=Ea(),y=n(s);b(()=>S(y,r(d).motto)),o(h,s)}),o(u,t)});var de=a(a(le,!0));E(de,()=>e.pkg.npm_url,u=>{var t=W(),m=O(t);E(m,()=>e.npm_url,h=>{var s=W(),y=O(s);R(y,()=>e.npm_url,()=>e.pkg.npm_url),o(h,s)},h=>{var s=Fa(),y=n(s);b(()=>S(y,`npm i -D ${r(d).name??""}`)),o(h,s)}),o(u,t)});var Ae=a(a(de,!0)),ce=n(Ae);E(ce,()=>e.pkg.homepage_url,u=>{var t=W(),m=O(t);E(m,()=>e.homepage_url,h=>{var s=W(),y=O(s);R(y,()=>e.homepage_url,()=>e.pkg.homepage_url),o(h,s)},h=>{var s=Ta(),y=O(s),G=a(a(y,!0)),Z=n(G),U=n(Z);M(U,"alt",g);var X=a(U,!0);b(()=>S(X,` ${sa(e.pkg.homepage_url)??""}`)),b(()=>{M(Z,"href",e.pkg.homepage_url),Q(Z,"selected",e.pkg.homepage_url===p().url.href),M(U,"src",r(F)),V(U,"width","16px"),V(U,"height","16px"),V(U,"margin-right","var(--space_xs)")}),o(h,s)}),o(u,t)});var ue=a(a(ce,!0));E(ue,()=>e.pkg.repo_url,u=>{var t=Na(),m=O(t),h=a(a(m,!0)),s=n(h),y=n(s);b(()=>{M(s,"href",e.pkg.repo_url),S(y,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),o(u,t)});var pe=a(a(ue,!0));E(pe,()=>e.pkg.npm_url,u=>{var t=Oa(),m=O(t),h=a(a(m,!0)),s=n(h),y=n(s);b(()=>{M(s,"href",e.pkg.npm_url),S(y,r(d).name)}),o(u,t)});var ge=a(a(pe,!0));E(ge,()=>e.pkg.changelog_url,u=>{var t=Aa(),m=O(t),h=a(a(m,!0)),s=n(h),y=n(s);b(()=>{M(s,"href",e.pkg.changelog_url),S(y,r(d).version)}),o(u,t)});var me=a(a(ge,!0));E(me,()=>r(N),u=>{var t=Ca(),m=O(t),h=a(a(m,!0)),s=n(h),y=n(s);b(()=>{M(s,"href",r(N)),S(y,r(d).license)}),o(u,t)});var Ce=a(a(me,!0));E(Ce,()=>e.pkg.homepage_url,u=>{var t=Ia(),m=O(t),h=a(a(m,!0)),s=n(h);b(()=>M(s,"href",`${se(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var y=a(a(s,!0));b(()=>M(y,"href",`${se(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),o(u,t)});var Ie=a(a(B,!0));E(Ie,()=>r(F),u=>{var t=za(),m=n(t);M(m,"alt",g),b(()=>{M(m,"src",r(F)),V(m,"width","var(--size, var(--icon_size_xl2))"),V(m,"height","var(--size, var(--icon_size_xl2))")}),o(u,t)});var he=a(a(q,!0));E(he,()=>r(x)&&e.pkg.repo_url,u=>{var t=qa(),m=n(t);oe(m,79,()=>r(x),(h,s)=>L(h),(h,s,y)=>{var G=Wa();const Z=A(()=>w(e.pkg.repo_url,L(s))),U=A(()=>{var D;return(D=r(T))==null?void 0:D[L(y)]}),X=A(()=>{var D;return r(U)&&((D=r(f))==null?void 0:D[r(U)])});b(()=>Q(G,"ts",L(s).endsWith(".js"))),b(()=>Q(G,"svelte",L(s).endsWith(".svelte"))),b(()=>Q(G,"css",L(s).endsWith(".css"))),b(()=>Q(G,"json",L(s).endsWith(".json")));var Se=n(G),te=n(Se),We=n(te),qe=a(a(te,!0));E(qe,()=>{var D;return(D=r(X))==null?void 0:D.declarations.length},D=>{var fe=Sa();oe(fe,73,()=>r(X).declarations,we,(Me,ye,Ya)=>{let Re=()=>L(L(ye)).name,De=()=>L(L(ye)).kind;var re=La(),Pe=n(re);b(()=>{na(re,`declaration chip ${De()??""}_declaration svelte-19y7aej`),S(Pe,Re())}),o(Me,re)}),o(D,fe)}),b(()=>{M(te,"href",r(Z)),S(We,L(s))}),o(h,G)}),o(u,t)});var ze=a(a(he,!0)),Le=n(ze);xa(Le,{summary:t=>{var m=Ma();o(t,m)},children:(t,m)=>{var h=Ra(),s=n(h),y=n(s);b(()=>S(y,JSON.stringify(e.pkg,null,"	"))),o(t,h)},$$slots:{default:!0}}),o(l,P),ae()}const Ba=l=>l.split("/").filter(e=>e&&e!=="."&&e!==".."),Ua=l=>{const e=[],i=Ba(l);i.length&&e.push({type:"separator",path:"/"});let p="";for(let v=0;v<i.length;v++){const _=i[v];p+="/"+_,e.push({type:"piece",name:_,path:p}),v!==i.length-1&&e.push({type:"separator",path:p})}return e};var Ja=k("•",1),Ka=k('<a class="svelte-44vg7j"> </a>'),Ga=k("/",1),Ha=k('<span class="separator svelte-44vg7j"><!></span>'),Qa=k('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function be(l,e){ee(e,!0);const i=Ee(),p=()=>Fe(Te,"$page",i),v=A(()=>e.path??p().url.pathname),_=A(()=>e.selected_path===null?null:e.selected_path??r(v)),d=A(()=>e.base_path??_a),C=A(()=>Ua(r(v))),z=A(()=>r(d)||"/");var c=Qa(),f=n(c),j=n(f);E(j,()=>e.children,w=>{var T=W(),x=O(T);R(x,()=>e.children),o(w,T)},w=>{var T=Ja();o(w,T)});var N=a(f);oe(N,65,()=>r(C),we,(w,T,x)=>{var F=W(),g=O(F);E(g,()=>L(T).type==="piece",P=>{var q=Ka(),B=n(q);b(()=>{M(q,"href",r(d)+L(T).path),Q(q,"selected",L(T).path===r(_)),S(B,L(T).name)}),o(P,q)},P=>{var q=Ha(),B=n(q);E(B,()=>e.separator,H=>{var I=W(),K=O(I);R(K,()=>e.separator),o(H,I)},H=>{var I=Ga();o(H,I)}),o(P,q)}),o(w,F)}),b(()=>{M(f,"href",r(z)),Q(f,"selected",r(z)===r(_))}),o(l,c),ae()}var Za=k("🧶",1),Va=k("🧶",1),Xa=k('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header><h1 class="my_xl3 svelte-1pyh03k"> </h1></header> <!></section> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!> <!></section></main>');function it(l,e){ee(e,!0);const i=oa(xe.homepage,xe,va);var p=Xa(),v=n(p),_=n(v),d=n(_),C=n(d),z=a(a(_,!0));be(z,{children:(x,F)=>{var g=Za();o(x,g)},$$slots:{default:!0}});var c=a(a(v,!0)),f=n(c),j=n(f);Pa(j,{pkg:i});var N=a(a(c,!0)),w=n(N);ia(w,{pkg:i});var T=a(a(w,!0));be(T,{children:(x,F)=>{var g=Va();o(x,g)},$$slots:{default:!0}}),b(()=>S(C,i.repo_name)),o(l,p),ae()}export{it as component};
