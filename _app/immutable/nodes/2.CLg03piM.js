import{h as G,d as me,b as ue,U as Ge,Q as We,m as ye,i as ke,g as Ne,q as Je,c as F,s as i,a as A,t as R,A as M,f as D,r as k,B as _e,F as K}from"../chunks/disclose-version.4WUFGOf4.js";import{l as De,a1 as Xe,q as Le,m as Oe,E as Ye,r as Ve,n as Ke,h as Qe,J as $e,u as et,K as Re,a2 as tt,p as ce,k as de,t as Z,f as S,x as q,W as xe,a3 as at,s as nt}from"../chunks/runtime.aTuocfth.js";import{l as Fe,m as we,n as rt,a as O,b as Ae,f as st,t as Y,o as it,s as Se,r as oe,c as ot,p as lt,L as ut,j as ct,k as dt}from"../chunks/package.ckxoxDhU.js";import{b as Ee,s as W,d as gt}from"../chunks/render.4bOSEVug.js";import{i as z,p as Q}from"../chunks/props.fr22KYMs.js";import{s as N}from"../chunks/snippet.UUXt4Om7.js";import{s as Me,a as qe,p as Ze}from"../chunks/stores.1s5QTvTi.js";import{b as vt}from"../chunks/entry.tf8-EcB0.js";import{h as ft}from"../chunks/html.ErW-LNFo.js";function pt(g,o,r){G&&me();var d=g,f=Ge,h;De(()=>{Xe(f,f=o())&&(h&&Le(h),h=Oe(()=>r(d)))}),G&&(d=ue)}function ht(g,o,r,d,f,h){let _=G;G&&me();var u,b,x=null;G&&ue.nodeType===1&&(x=ue,me());var j=G?ue:g,I,w=we;De(()=>{const T=o()||null;var P=f?f():r||T==="svg"?We:null;if(T!==u){var y=we;Fe(w),I&&(T===null?Le(I,()=>{I=null,b=null}):T===b?Ve(I):(Ke(I),Ee(!1))),T&&T!==b&&(I=Oe(()=>{if(x=G?x:P?document.createElementNS(P,T):document.createElement(T),Ne(x,x),d){var m=G?x.firstChild:x.appendChild(Je());G&&(m===null?ye(!1):ke(m)),d(x,m)}Qe.nodes.end=x,j.before(x)})),u=T,u&&(b=u),Ee(!0),Fe(y)}},Ye),_&&(ye(!0),ke(j))}function mt(g,o,r){$e(()=>{var d=et(()=>o(g,r==null?void 0:r())||{});if(r&&(d!=null&&d.update)){var f=!1;Re(()=>{var h=r();tt(h),f&&d.update(h)}),f=!0}if(d!=null&&d.destroy)return()=>d.destroy()})}function _t(g,o,r,d=r){g.addEventListener(o,r);const f=g.__on_r;f?g.__on_r=()=>{f(),d()}:g.__on_r=d,rt()}function le(g,o,r){_t(g,"input",()=>{r(Ie(g)?Te(g.value):g.value)}),Re(()=>{var d=o();if(G&&g.defaultValue!==g.value){r(g.value);return}Ie(g)&&d===Te(g.value)||g.type==="date"&&!d&&!g.value||(g.value=d??"")})}function Ie(g){var o=g.type;return o==="number"||o==="range"}function Te(g){return g===""?null:+g}var je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bt(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Ue={exports:{}};(function(g){var o=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(d){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,_={},u={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof b?new b(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,l){l=l||{};var n,a;switch(u.util.type(e)){case"Object":if(a=u.util.objId(e),l[a])return l[a];n={},l[a]=n;for(var c in e)e.hasOwnProperty(c)&&(n[c]=t(e[c],l));return n;case"Array":return a=u.util.objId(e),l[a]?l[a]:(n=[],l[a]=n,e.forEach(function(v,s){n[s]=t(v,l)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=f.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(f,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var l in e)if(e[l].src==t)return e[l]}return null}},isActive:function(t,e,l){for(var n="no-"+e;t;){var a=t.classList;if(a.contains(e))return!0;if(a.contains(n))return!1;t=t.parentElement}return!!l}},languages:{plain:_,plaintext:_,text:_,txt:_,extend:function(t,e){var l=u.util.clone(u.languages[t]);for(var n in e)l[n]=e[n];return l},insertBefore:function(t,e,l,n){n=n||u.languages;var a=n[t],c={};for(var v in a)if(a.hasOwnProperty(v)){if(v==e)for(var s in l)l.hasOwnProperty(s)&&(c[s]=l[s]);l.hasOwnProperty(v)||(c[v]=a[v])}var p=n[t];return n[t]=c,u.languages.DFS(u.languages,function(C,U){U===p&&C!=t&&(this[C]=c)}),c},DFS:function t(e,l,n,a){a=a||{};var c=u.util.objId;for(var v in e)if(e.hasOwnProperty(v)){l.call(e,v,e[v],n||v);var s=e[v],p=u.util.type(s);p==="Object"&&!a[c(s)]?(a[c(s)]=!0,t(s,l,null,a)):p==="Array"&&!a[c(s)]&&(a[c(s)]=!0,t(s,l,v,a))}}},plugins:{},highlightAll:function(t,e){u.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,l){var n={callback:l,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),u.hooks.run("before-all-elements-highlight",n);for(var a=0,c;c=n.elements[a++];)u.highlightElement(c,e===!0,n.callback)},highlightElement:function(t,e,l){var n=u.util.getLanguage(t),a=u.languages[n];u.util.setLanguage(t,n);var c=t.parentElement;c&&c.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(c,n);var v=t.textContent,s={element:t,language:n,grammar:a,code:v};function p(U){s.highlightedCode=U,u.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u.hooks.run("after-highlight",s),u.hooks.run("complete",s),l&&l.call(s.element)}if(u.hooks.run("before-sanity-check",s),c=s.element.parentElement,c&&c.nodeName.toLowerCase()==="pre"&&!c.hasAttribute("tabindex")&&c.setAttribute("tabindex","0"),!s.code){u.hooks.run("complete",s),l&&l.call(s.element);return}if(u.hooks.run("before-highlight",s),!s.grammar){p(u.util.encode(s.code));return}if(e&&d.Worker){var C=new Worker(u.filename);C.onmessage=function(U){p(U.data)},C.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else p(u.highlight(s.code,s.grammar,s.language))},highlight:function(t,e,l){var n={code:t,grammar:e,language:l};if(u.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=u.tokenize(n.code,n.grammar),u.hooks.run("after-tokenize",n),b.stringify(u.util.encode(n.tokens),n.language)},tokenize:function(t,e){var l=e.rest;if(l){for(var n in l)e[n]=l[n];delete e.rest}var a=new I;return w(a,a.head,t),j(t,a,e,a.head,0),P(a)},hooks:{all:{},add:function(t,e){var l=u.hooks.all;l[t]=l[t]||[],l[t].push(e)},run:function(t,e){var l=u.hooks.all[t];if(!(!l||!l.length))for(var n=0,a;a=l[n++];)a(e)}},Token:b};d.Prism=u;function b(t,e,l,n){this.type=t,this.content=e,this.alias=l,this.length=(n||"").length|0}b.stringify=function t(e,l){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(p){n+=t(p,l)}),n}var a={type:e.type,content:t(e.content,l),tag:"span",classes:["token",e.type],attributes:{},language:l},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(a.classes,c):a.classes.push(c)),u.hooks.run("wrap",a);var v="";for(var s in a.attributes)v+=" "+s+'="'+(a.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+v+">"+a.content+"</"+a.tag+">"};function x(t,e,l,n){t.lastIndex=e;var a=t.exec(l);if(a&&n&&a[1]){var c=a[1].length;a.index+=c,a[0]=a[0].slice(c)}return a}function j(t,e,l,n,a,c){for(var v in l)if(!(!l.hasOwnProperty(v)||!l[v])){var s=l[v];s=Array.isArray(s)?s:[s];for(var p=0;p<s.length;++p){if(c&&c.cause==v+","+p)return;var C=s[p],U=C.inside,J=!!C.lookbehind,te=!!C.greedy,ge=C.alias;if(te&&!C.pattern.global){var ae=C.pattern.toString().match(/[imsuy]*$/)[0];C.pattern=RegExp(C.pattern.source,ae+"g")}for(var $=C.pattern||C,L=n.next,H=a;L!==e.tail&&!(c&&H>=c.reach);H+=L.value.length,L=L.next){var V=L.value;if(e.length>t.length)return;if(!(V instanceof b)){var ne=1,B;if(te){if(B=x($,H,t,J),!B||B.index>=t.length)break;var re=B.index,He=B.index+B[0].length,X=H;for(X+=L.value.length;re>=X;)L=L.next,X+=L.value.length;if(X-=L.value.length,H=X,L.value instanceof b)continue;for(var ee=L;ee!==e.tail&&(X<He||typeof ee.value=="string");ee=ee.next)ne++,X+=ee.value.length;ne--,V=t.slice(H,X),B.index-=H}else if(B=x($,0,V,J),!B)continue;var re=B.index,se=B[0],ve=V.slice(0,re),be=V.slice(re+se.length),fe=H+V.length;c&&fe>c.reach&&(c.reach=fe);var ie=L.prev;ve&&(ie=w(e,ie,ve),H+=ve.length),T(e,ie,ne);var Be=new b(v,U?u.tokenize(se,U):se,ge,se);if(L=w(e,ie,Be),be&&w(e,L,be),ne>1){var pe={cause:v+","+p,reach:fe};j(t,e,l,L.prev,H,pe),c&&pe.reach>c.reach&&(c.reach=pe.reach)}}}}}}function I(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function w(t,e,l){var n=e.next,a={value:l,prev:e,next:n};return e.next=a,n.prev=a,t.length++,a}function T(t,e,l){for(var n=e.next,a=0;a<l&&n!==t.tail;a++)n=n.next;e.next=n,n.prev=e,t.length-=a}function P(t){for(var e=[],l=t.head.next;l!==t.tail;)e.push(l.value),l=l.next;return e}if(!d.document)return d.addEventListener&&(u.disableWorkerMessageHandler||d.addEventListener("message",function(t){var e=JSON.parse(t.data),l=e.language,n=e.code,a=e.immediateClose;d.postMessage(u.highlight(n,u.languages[l],l)),a&&d.close()},!1)),u;var y=u.util.currentScript();y&&(u.filename=y.src,y.hasAttribute("data-manual")&&(u.manual=!0));function m(){u.manual||u.highlightAll()}if(!u.manual){var E=document.readyState;E==="loading"||E==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return u}(o);g.exports&&(g.exports=r),typeof je<"u"&&(je.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(f,h){var _={};_["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[h]},_.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:_}};u["language-"+h]={pattern:/[\s\S]+/,inside:r.languages[h]};var b={};b[f]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return f}),"i"),lookbehind:!0,greedy:!0,inside:u},r.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(d,f){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[f,"language-"+f],inside:r.languages[f]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(d){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+f.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var h=d.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",f=function(y,m){return"✖ Error "+y+" while fetching file: "+m},h="✖ Error: File does not exist or is empty",_={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="data-src-status",b="loading",x="loaded",j="failed",I="pre[data-src]:not(["+u+'="'+x+'"]):not(['+u+'="'+b+'"])';function w(y,m,E){var t=new XMLHttpRequest;t.open("GET",y,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?m(t.responseText):t.status>=400?E(f(t.status,t.statusText)):E(h))},t.send(null)}function T(y){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(m){var E=Number(m[1]),t=m[2],e=m[3];return t?e?[E,Number(e)]:[E,void 0]:[E,E]}}r.hooks.add("before-highlightall",function(y){y.selector+=", "+I}),r.hooks.add("before-sanity-check",function(y){var m=y.element;if(m.matches(I)){y.code="",m.setAttribute(u,b);var E=m.appendChild(document.createElement("CODE"));E.textContent=d;var t=m.getAttribute("data-src"),e=y.language;if(e==="none"){var l=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=_[l]||l}r.util.setLanguage(E,e),r.util.setLanguage(m,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),w(t,function(a){m.setAttribute(u,x);var c=T(m.getAttribute("data-range"));if(c){var v=a.split(/\r\n?|\n/g),s=c[0],p=c[1]==null?v.length:c[1];s<0&&(s+=v.length),s=Math.max(0,Math.min(s-1,v.length)),p<0&&(p+=v.length),p=Math.max(0,Math.min(p,v.length)),a=v.slice(s,p).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(s+1))}E.textContent=a,r.highlightElement(E)},function(a){m.setAttribute(u,j),E.textContent=a})}}),r.plugins.fileHighlight={highlight:function(m){for(var E=(m||document).querySelectorAll(I),t=0,e;e=E[t++];)r.highlightElement(e)}};var P=!1;r.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ue);var yt=Ue.exports;const Pe=bt(yt),Ce="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+Ce+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+Ce+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",g=>{g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(o,r){const d={};d["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[r]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;const f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};f["language-"+r]={pattern:/[\s\S]+/,inside:Prism.languages[r]};const h={};h[o]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,o),"i"),lookbehind:!0,greedy:!0,inside:f},Prism.languages.insertBefore("svelte","cdata",h)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var kt=R('<div class="repo_name svelte-1widkfd"> </div>'),xt=R("<img>"),Ft=R("<blockquote> </blockquote>"),wt=R('<p class="text_align_center"> <!></p>'),At=R('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),St=R('<a class="chip svelte-1widkfd">repo</a>'),Et=R('<a class="chip svelte-1widkfd" title="version"> </a>'),It=R('<a class="chip svelte-1widkfd">npm</a>'),Tt=R('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),jt=R('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function Pt(g,o){ce(o,!0);const r=Me(),d=()=>qe(Ze,"$page",r),f=q(()=>o.pkg),h=q(()=>{let{package_json:n}=S(f);return[n]}),_=q(()=>S(h)[0]);var u=jt(),b=F(u),x=F(b);z(x,()=>o.repo_name,n=>{var a=M(),c=D(a);N(c,()=>o.repo_name,()=>o.pkg.repo_name),A(n,a)},n=>{var a=kt(),c=F(a);k(a),Z(()=>W(c,o.pkg.repo_name)),A(n,a)});var j=i(x,!0);j.nodeValue="  ";var I=i(j);z(I,()=>o.pkg.logo_url,n=>{var a=M(),c=D(a);z(c,()=>o.logo,v=>{var s=M(),p=D(s);N(p,()=>o.logo,()=>o.pkg.logo_url,()=>o.pkg.logo_alt),A(v,s)},v=>{var s=xt();Z(()=>{O(s,"src",o.pkg.logo_url),O(s,"alt",o.pkg.logo_alt),Ae(s,"width","var(--size, var(--icon_size_xl2))"),Ae(s,"height","var(--size, var(--icon_size_xl2))")}),A(v,s)}),A(n,a)}),k(b);var w=i(i(b,!0));z(w,()=>S(_).motto,n=>{var a=M(),c=D(a);z(c,()=>o.motto,v=>{var s=M(),p=D(s);N(p,()=>o.motto,()=>S(_).motto,()=>S(_).glyph),A(v,s)},v=>{var s=Ft(),p=F(s);k(s),Z(()=>W(p,`${S(_).motto??""}
				${S(_).glyph??""}`)),A(v,s)}),A(n,a)});var T=i(i(w,!0));z(T,()=>S(_).description,n=>{var a=M(),c=D(a);z(c,()=>o.description,v=>{var s=M(),p=D(s);N(p,()=>o.description,()=>S(_).description,()=>S(_).glyph),A(v,s)},v=>{var s=wt(),p=F(s),C=i(p);z(C,()=>!S(_).motto,U=>{var J=_e();Z(()=>W(J,S(_).glyph)),A(U,J)}),k(s),Z(()=>W(p,`${S(_).description??""} `)),A(v,s)}),A(n,a)});var P=i(i(T,!0));z(P,()=>o.children,n=>{var a=M(),c=D(a);N(c,()=>o.children),A(n,a)});var y=i(i(P,!0));z(y,()=>o.pkg.homepage_url,n=>{var a=M(),c=D(a);z(c,()=>o.homepage_url,v=>{var s=M(),p=D(s);N(p,()=>o.homepage_url,()=>o.pkg.homepage_url),A(v,s)},v=>{var s=At(),p=F(s),C=F(p);Z(()=>W(C,st(o.pkg.homepage_url))),k(p),k(s),Z(()=>{O(p,"href",o.pkg.homepage_url),Y(p,"selected",o.pkg.homepage_url===d().url.href)}),A(v,s)}),A(n,a)});var m=i(i(y,!0)),E=F(m);z(E,()=>o.pkg.repo_url,n=>{var a=St();Z(()=>O(a,"href",o.pkg.repo_url)),A(n,a)});var t=i(i(E,!0));z(t,()=>o.pkg.changelog_url,n=>{var a=Et(),c=F(a);k(a),Z(()=>{O(a,"href",o.pkg.changelog_url),W(c,S(_).version)}),A(n,a)});var e=i(i(t,!0));z(e,()=>o.pkg.npm_url,n=>{var a=It();Z(()=>O(a,"href",o.pkg.npm_url)),A(n,a)}),k(m);var l=i(i(m,!0));z(l,()=>o.pkg.npm_url,n=>{var a=M(),c=D(a);z(c,()=>o.npm_url,v=>{var s=M(),p=D(s);N(p,()=>o.npm_url,()=>o.pkg.npm_url),A(v,s)},v=>{var s=Tt(),p=F(s);k(s),Z(()=>W(p,`npm i -D ${S(_).name??""}`)),A(v,s)}),A(n,a)}),k(u),A(g,u),de()}var Ct=R('<div class="icon svelte-1s6rl33"><!></div>'),zt=R('<!> <div class="content svelte-1s6rl33"><!></div> <!>',1);function Dt(g,o){ce(o,!0);const r=Me(),d=()=>qe(Ze,"$page",r),f=t=>{var e=Ct(),l=F(e);z(l,()=>typeof S(y)=="string",n=>{var a=_e();Z(()=>W(a,S(y))),A(n,a)},n=>{var a=M(),c=D(a);N(c,()=>S(y)),A(n,a)}),k(e),A(t,e)},h=Q(o,"align",3,"left"),_=q(()=>!!o.href),u=q(()=>S(_)&&d().url.pathname===o.href),b=q(()=>o.tag??(S(_)?"a":"div")),x=q(()=>S(_)?{href:o.href}:void 0),j=q(()=>h()==="left"),I=q(()=>h()==="right"),w=q(()=>h()==="above"),T=q(()=>h()==="below"),P=q(()=>S(_)?"🔗":"🪧"),y=q(()=>o.icon??S(P));var m=M(),E=D(m);ht(E,()=>S(b),!1,(t,e)=>{let l;Z(()=>{l=it(t,l,{class:"card",...o.attrs,...S(x)},"svelte-1s6rl33"),Y(t,"link",S(_)),Y(t,"selected",S(u)),Y(t,"left",S(j)),Y(t,"right",S(I)),Y(t,"above",S(w)),Y(t,"below",S(T))});var n=zt(),a=D(n);z(a,()=>h()==="left"||h()==="above",p=>{f(p)});var c=i(i(a,!0)),v=F(c);N(v,()=>o.children),k(c);var s=i(i(c,!0));z(s,()=>h()==="right"||h()==="below",p=>{f(p)}),A(e,n)}),A(g,m),de()}(function(g){g.languages.typescript=g.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),g.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete g.languages.typescript.parameter,delete g.languages.typescript["literal-property"];var o=g.languages.extend("typescript",{});delete o["class-name"],g.languages.typescript["class-name"].inside=o,g.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),g.languages.ts=g.languages.typescript})(Prism);var Lt=R("<pre><code><!></code></pre>");function ze(g,o){ce(o,!0);const r=Q(o,"lang",3,"svelte"),d=Q(o,"inline",3,!1),f=q(()=>r()===null?null:Pe.languages[r()]),h=q(()=>S(f)===null?null:o.content&&Pe.highlight(o.content,S(f),r())),_=q(()=>S(h)??o.content);var u=Lt();let b;var x=F(u);let j;var I=F(x);z(I,()=>o.children,w=>{var T=M(),P=D(T);N(P,()=>o.children,()=>S(_)),A(w,T)},w=>{var T=M(),P=D(T);z(P,()=>S(h)!==null,y=>{var m=M(),E=D(m);ft(E,()=>S(h),!1,!1),A(y,m)},y=>{var m=_e();Z(()=>W(m,o.content)),A(y,m)},!0),A(w,T)}),k(x),k(u),Z(()=>{b=Se(u,b,{...o.pre_attrs},!0,"svelte-1a6bj2n"),Y(u,"inline",d()),j=Se(x,j,{...o.code_attrs},!0,"svelte-1a6bj2n")}),A(g,u),de()}const Ot=(g,o)=>{let r,d,f,h,_,u,b;const x=w=>{u=0,typeof w=="function"?(r=w,d=void 0,f=void 0,h=void 0):(r=w.onintersect,d=w.ondisconnect,f=w.count,h=w.options)},j=()=>{b&&(b.disconnect(),d&&d({intersecting:_,intersections:u,el:g,observer:b}),b=null)},I=()=>{b&&j(),f!==0&&(b=new IntersectionObserver(w=>{_=w[0].isIntersecting,r&&b&&r({intersecting:_,intersections:u,el:g,observer:b,disconnect:j}),_?u++:f&&f>0&&u>=f&&j()},h),b.observe(g))};return x(o),I(),{update:w=>{x(w),I()},destroy:j}};var Rt=R('<li class="box svelte-19bknr2"><div class="box"> </div></li>'),Mt=R('<div class="demo svelte-19bknr2"><label class="box" title="IntersectionObserver options.threshold"><div class="title"><code>options.threshold</code></div> <div class="threshold svelte-19bknr2"><input type="number" class="svelte-19bknr2"> <input type="range" class="svelte-19bknr2"></div></label> <label class="box" title="disconnect the observer after the element enters and leaves the viewport this many times"><div class="title"><code>count</code></div> <div class="count svelte-19bknr2"><input type="number" class="svelte-19bknr2"> <input type="range" class="svelte-19bknr2"></div></label> <ul class="box svelte-19bknr2"></ul></div>');function he(g,o){const r=()=>typeof window>"u"?51:window.innerHeight/30;let d=Q(o,"threshold",7,0),f=Q(o,"count",15,()=>-1),h=Q(o,"items_count",11,r);const _=q(()=>Array.from({length:h()},(e,l)=>l));var u=Mt(),b=F(u),x=F(b);F(x),k(x);var j=i(i(x,!0)),I=F(j);oe(I),O(I,"step",.1),O(I,"min",0),O(I,"max",1);var w=i(i(I,!0));oe(w),O(w,"step",.1),O(w,"min",0),O(w,"max",1),k(j),k(b);var T=i(i(b,!0)),P=F(T);F(P),k(P);var y=i(i(P,!0)),m=F(y);oe(m),O(m,"min",-1),O(m,"max",3),O(m,"step",1);var E=i(i(m,!0));oe(E),O(E,"min",-1),O(E,"max",3),O(E,"step",1),k(y),k(T);var t=i(i(T,!0));ot(t,76,()=>S(_),(e,l)=>xe(e),(e,l,n)=>{var a=Rt(),c=F(a),v=F(c);k(c),k(a),Z(()=>W(v,xe(l))),mt(a,(s,p)=>Ot(s,p),()=>({onintersect:s=>{const{intersecting:p,el:C}=s;C.classList.toggle("intersecting",p),console.log("onintersect params",s)},ondisconnect:s=>{console.log("ondisconnect params",s)},count:f(),options:{threshold:d()}})),A(e,a)}),k(t),k(u),le(I,d,e=>d(e)),le(w,d,e=>d(e)),le(m,f,e=>f(e)),le(E,f,e=>f(e)),A(g,u)}const qt=(g,o)=>at(o);var Zt=R("<!> <!> <!>",1),Ut=R(`<section><h2 class="mt_0">demo</h2> <div class="mb_lg"><!></div> <div class="mb_lg"><!></div> <p>An <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold"><code>options.threshold</code></a> of <code>0</code> triggers the event when the element is inside the viewport at least a pixel,
		and a value of <code>1</code> triggers the event when it is fully inside the viewport. See also <code>options.root</code> and <code>options.rootMargin</code> in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver">IntersectionObserver docs</a>.</p> <p>A <code>count</code> of <code>1</code> disconnects the observer after the element enters and
		leaves the viewport one time, like <code>'once'</code> for events. Similar for any positive integer.</p> <p>A <code>count</code> that's negative or <code>undefined</code> makes it so it will never automatically
		disconnect.</p> <p>A <code>count</code> of <code>0</code> disables <code>onintersect</code> and never creates the <code>IntersectionObserver</code>.</p> <p>See also the <a href="https://github.com/ryanatkn/svelte-intersect#readme">API docs</a> and <a href="https://github.com/ryanatkn/svelte-intersect/blob/main/src/routes/Demo.svelte">demo source code</a>.</p> <p></p></section> <section class="box"><button type="button" class="mb_lg">reset state</button></section> <section class="w_100"><div class="box row gap_lg flex_wrap"><!></div></section>`,1);function Ht(g){let o=nt(0);var r=Ut(),d=D(r),f=F(d),h=i(i(f,!0)),_=F(h);ze(_,{lang:"ts",content:"import {intersect} from 'svelte-intersect';"}),k(h);var u=i(i(h,!0)),b=F(u);ze(b,{content:`<li
	use:intersect={{
		onintersect: ({intersecting, intersections, el, obeserver, disconnect}) =>
			el.classList.toggle('intersecting', intersecting),
		ondisconnect: ({intersecting, intersections, el, obeserver}) => { /* */ },
		count,
		options: {threshold},
	}}
>`}),k(u);var x=i(i(u,!0)),j=i(F(x));F(j),k(j);var I=i(i(j,!0)),w=i(i(I,!0)),T=i(i(w,!0)),P=i(i(T,!0));i(i(P,!0)),K(),k(x);var y=i(i(x,!0)),m=i(F(y)),E=i(i(m,!0));i(i(E,!0)),K(),k(y);var t=i(i(y,!0)),e=i(F(t));i(i(e,!0)),K(),k(t);var l=i(i(t,!0)),n=i(F(l)),a=i(i(n,!0)),c=i(i(a,!0));i(i(c,!0)),K(),k(l);var v=i(i(l,!0)),s=i(F(v));i(i(s,!0)),K(),k(v),i(i(v,!0)),k(d);var p=i(i(d,!0)),C=F(p);C.__click=[qt,o],k(p);var U=i(i(p,!0)),J=F(U),te=F(J);pt(te,()=>S(o),ge=>{var ae=Zt(),$=D(ae);he($,{});var L=i(i($,!0));he(L,{threshold:1});var H=i(i(L,!0));he(H,{count:1}),A(ge,ae)}),k(J),k(U),A(g,r)}gt(["click"]);var Bt=R("docs",1),Gt=R('<main class="box mb_xl7"><div class="width_md px_lg"><section><header class="box"><h1 class="my_xl3">svelte-intersect</h1> <!></header></section> <section class="box"><!> <a class="chip mt_xl3">about</a></section> <!> <!></div></main>');function ea(g,o){ce(o,!0);const r=lt(dt,ct);var d=Gt(),f=F(d),h=F(f),_=F(h),u=F(_),b=i(i(u,!0));Pt(b,{pkg:r,repo_name:y=>{}}),k(_),k(h);var x=i(i(h,!0)),j=F(x);Dt(j,{href:"https://github.com/ryanatkn/svelte-intersect#readme",attrs:{class:"card mb_lg"},icon:y=>{},children:(y,m)=>{K();var E=Bt();A(y,E)},$$slots:{default:!0}});var I=i(i(j,!0));O(I,"href",`${vt??""}/about`),k(x);var w=i(i(x,!0));Ht(w);var T=i(i(w,!0));ut(T,{pkg:r,root_url:"https://www.ryanatkn.com/"}),k(f),k(d),A(g,d),de()}export{ea as component};