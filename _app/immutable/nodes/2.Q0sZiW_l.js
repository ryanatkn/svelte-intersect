import{h as B,d as me,b as ue,U as Be,N as We,m as ye,i as ke,g as Ne,u as Ve,c as k,s as o,a as w,t as M,A as R,f as D,r as y,B as _e,F as J}from"../chunks/disclose-version.Q3e3qT4T.js";import{b as ze,$ as De,n as Le,c as Oe,E as Xe,r as Ye,d as Je,l as Ke,H as Qe,u as $e,I as Me,a0 as et,p as ce,a as de,t as q,k as A,w as Z,a1 as tt,s as at}from"../chunks/runtime.tR7Vvi4S.js";import{l as xe,m as Fe,n as nt,a as O,b as we,f as rt,t as X,o as st,s as Ae,r as oe,c as it,p as ot,L as lt,j as ut,k as ct}from"../chunks/package.9bqEHhRl.js";import{e as Se,s as W,d as dt}from"../chunks/render.Jfev1iKI.js";import{i as z,p as K}from"../chunks/props.0klm-CEn.js";import{s as N}from"../chunks/snippet.mnhb072Y.js";import{s as Re,a as qe,p as Ze}from"../chunks/stores.kb2oKV0m.js";import{b as gt}from"../chunks/entry.e1fJc1n7.js";import{h as vt}from"../chunks/html.uTGT8QlO.js";function ft(d,l,r){B&&me();var c=d,g=Be,p;ze(()=>{De(g,g=l())&&(p&&Le(p),p=Oe(()=>r(c)))}),B&&(c=ue)}function pt(d,l,r,c,g,p){let b=B;B&&me();var u,m,x=null;B&&ue.nodeType===1&&(x=ue,me());var P=B?ue:d,I,F=Fe;ze(()=>{const T=l()||null;var j=g?g():r||T==="svg"?We:null;if(T!==u){var _=Fe;xe(F),I&&(T===null?Le(I,()=>{I=null,m=null}):T===m?Ye(I):(Je(I),Se(!1))),T&&T!==m&&(I=Oe(()=>{if(x=B?x:j?document.createElementNS(j,T):document.createElement(T),Ne(x,x),c){var h=B?x.firstChild:x.appendChild(Ve());B&&(h===null?ye(!1):ke(h)),c(x,h)}Ke.nodes.end=x,P.before(x)})),u=T,u&&(m=u),Se(!0),xe(_)}},Xe),b&&(ye(!0),ke(P))}function ht(d,l,r){Qe(()=>{var c=$e(()=>l(d,r==null?void 0:r())||{});if(r&&(c!=null&&c.update)){var g=!1,p={};Me(()=>{var b=r();et(b),g&&De(p,b)&&(p=b,c.update(b))}),g=!0}if(c!=null&&c.destroy)return()=>c.destroy()})}function mt(d,l,r,c=r){d.addEventListener(l,r);const g=d.__on_r;g?d.__on_r=()=>{g(),c()}:d.__on_r=c,nt()}function le(d,l,r){mt(d,"input",()=>{r(Ee(d)?Ie(d.value):d.value)}),Me(()=>{var c=l();if(B&&d.defaultValue!==d.value){r(d.value);return}Ee(d)&&c===Ie(d.value)||d.type==="date"&&!c&&!d.value||(d.value=c??"")})}function Ee(d){var l=d.type;return l==="number"||l==="range"}function Ie(d){return d===""?null:+d}var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _t(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var He={exports:{}};(function(d){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(c){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,b={},u={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof m?new m(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++p}),a.__id},clone:function a(e,t){t=t||{};var s,n;switch(u.util.type(e)){case"Object":if(n=u.util.objId(e),t[n])return t[n];s={},t[n]=s;for(var i in e)e.hasOwnProperty(i)&&(s[i]=a(e[i],t));return s;case"Array":return n=u.util.objId(e),t[n]?t[n]:(s=[],t[n]=s,e.forEach(function(f,v){s[v]=a(f,t)}),s);default:return e}},getLanguage:function(a){for(;a;){var e=g.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(g,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var s="no-"+e;a;){var n=a.classList;if(n.contains(e))return!0;if(n.contains(s))return!1;a=a.parentElement}return!!t}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(a,e){var t=u.util.clone(u.languages[a]);for(var s in e)t[s]=e[s];return t},insertBefore:function(a,e,t,s){s=s||u.languages;var n=s[a],i={};for(var f in n)if(n.hasOwnProperty(f)){if(f==e)for(var v in t)t.hasOwnProperty(v)&&(i[v]=t[v]);t.hasOwnProperty(f)||(i[f]=n[f])}var S=s[a];return s[a]=i,u.languages.DFS(u.languages,function(C,U){U===S&&C!=a&&(this[C]=i)}),i},DFS:function a(e,t,s,n){n=n||{};var i=u.util.objId;for(var f in e)if(e.hasOwnProperty(f)){t.call(e,f,e[f],s||f);var v=e[f],S=u.util.type(v);S==="Object"&&!n[i(v)]?(n[i(v)]=!0,a(v,t,null,n)):S==="Array"&&!n[i(v)]&&(n[i(v)]=!0,a(v,t,f,n))}}},plugins:{},highlightAll:function(a,e){u.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var s={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),u.hooks.run("before-all-elements-highlight",s);for(var n=0,i;i=s.elements[n++];)u.highlightElement(i,e===!0,s.callback)},highlightElement:function(a,e,t){var s=u.util.getLanguage(a),n=u.languages[s];u.util.setLanguage(a,s);var i=a.parentElement;i&&i.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(i,s);var f=a.textContent,v={element:a,language:s,grammar:n,code:f};function S(U){v.highlightedCode=U,u.hooks.run("before-insert",v),v.element.innerHTML=v.highlightedCode,u.hooks.run("after-highlight",v),u.hooks.run("complete",v),t&&t.call(v.element)}if(u.hooks.run("before-sanity-check",v),i=v.element.parentElement,i&&i.nodeName.toLowerCase()==="pre"&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!v.code){u.hooks.run("complete",v),t&&t.call(v.element);return}if(u.hooks.run("before-highlight",v),!v.grammar){S(u.util.encode(v.code));return}if(e&&c.Worker){var C=new Worker(u.filename);C.onmessage=function(U){S(U.data)},C.postMessage(JSON.stringify({language:v.language,code:v.code,immediateClose:!0}))}else S(u.highlight(v.code,v.grammar,v.language))},highlight:function(a,e,t){var s={code:a,grammar:e,language:t};if(u.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=u.tokenize(s.code,s.grammar),u.hooks.run("after-tokenize",s),m.stringify(u.util.encode(s.tokens),s.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var s in t)e[s]=t[s];delete e.rest}var n=new I;return F(n,n.head,a),P(a,n,e,n.head,0),j(n)},hooks:{all:{},add:function(a,e){var t=u.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=u.hooks.all[a];if(!(!t||!t.length))for(var s=0,n;n=t[s++];)n(e)}},Token:m};c.Prism=u;function m(a,e,t,s){this.type=a,this.content=e,this.alias=t,this.length=(s||"").length|0}m.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var s="";return e.forEach(function(S){s+=a(S,t)}),s}var n={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(n.classes,i):n.classes.push(i)),u.hooks.run("wrap",n);var f="";for(var v in n.attributes)f+=" "+v+'="'+(n.attributes[v]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+f+">"+n.content+"</"+n.tag+">"};function x(a,e,t,s){a.lastIndex=e;var n=a.exec(t);if(n&&s&&n[1]){var i=n[1].length;n.index+=i,n[0]=n[0].slice(i)}return n}function P(a,e,t,s,n,i){for(var f in t)if(!(!t.hasOwnProperty(f)||!t[f])){var v=t[f];v=Array.isArray(v)?v:[v];for(var S=0;S<v.length;++S){if(i&&i.cause==f+","+S)return;var C=v[S],U=C.inside,Q=!!C.lookbehind,te=!!C.greedy,ge=C.alias;if(te&&!C.pattern.global){var ae=C.pattern.toString().match(/[imsuy]*$/)[0];C.pattern=RegExp(C.pattern.source,ae+"g")}for(var $=C.pattern||C,L=s.next,H=n;L!==e.tail&&!(i&&H>=i.reach);H+=L.value.length,L=L.next){var Y=L.value;if(e.length>a.length)return;if(!(Y instanceof m)){var ne=1,G;if(te){if(G=x($,H,a,Q),!G||G.index>=a.length)break;var re=G.index,Ue=G.index+G[0].length,V=H;for(V+=L.value.length;re>=V;)L=L.next,V+=L.value.length;if(V-=L.value.length,H=V,L.value instanceof m)continue;for(var ee=L;ee!==e.tail&&(V<Ue||typeof ee.value=="string");ee=ee.next)ne++,V+=ee.value.length;ne--,Y=a.slice(H,V),G.index-=H}else if(G=x($,0,Y,Q),!G)continue;var re=G.index,se=G[0],ve=Y.slice(0,re),be=Y.slice(re+se.length),fe=H+Y.length;i&&fe>i.reach&&(i.reach=fe);var ie=L.prev;ve&&(ie=F(e,ie,ve),H+=ve.length),T(e,ie,ne);var Ge=new m(f,U?u.tokenize(se,U):se,ge,se);if(L=F(e,ie,Ge),be&&F(e,L,be),ne>1){var pe={cause:f+","+S,reach:fe};P(a,e,t,L.prev,H,pe),i&&pe.reach>i.reach&&(i.reach=pe.reach)}}}}}}function I(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function F(a,e,t){var s=e.next,n={value:t,prev:e,next:s};return e.next=n,s.prev=n,a.length++,n}function T(a,e,t){for(var s=e.next,n=0;n<t&&s!==a.tail;n++)s=s.next;e.next=s,s.prev=e,a.length-=n}function j(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!c.document)return c.addEventListener&&(u.disableWorkerMessageHandler||c.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,s=e.code,n=e.immediateClose;c.postMessage(u.highlight(s,u.languages[t],t)),n&&c.close()},!1)),u;var _=u.util.currentScript();_&&(u.filename=_.src,_.hasAttribute("data-manual")&&(u.manual=!0));function h(){u.manual||u.highlightAll()}if(!u.manual){var E=document.readyState;E==="loading"||E==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return u}(l);d.exports&&(d.exports=r),typeof Te<"u"&&(Te.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(g,p){var b={};b["language-"+p]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[p]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};u["language-"+p]={pattern:/[\s\S]+/,inside:r.languages[p]};var m={};m[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:u},r.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(c,g){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:r.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(c){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var p=c.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",g=function(_,h){return"✖ Error "+_+" while fetching file: "+h},p="✖ Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="data-src-status",m="loading",x="loaded",P="failed",I="pre[data-src]:not(["+u+'="'+x+'"]):not(['+u+'="'+m+'"])';function F(_,h,E){var a=new XMLHttpRequest;a.open("GET",_,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?h(a.responseText):a.status>=400?E(g(a.status,a.statusText)):E(p))},a.send(null)}function T(_){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(h){var E=Number(h[1]),a=h[2],e=h[3];return a?e?[E,Number(e)]:[E,void 0]:[E,E]}}r.hooks.add("before-highlightall",function(_){_.selector+=", "+I}),r.hooks.add("before-sanity-check",function(_){var h=_.element;if(h.matches(I)){_.code="",h.setAttribute(u,m);var E=h.appendChild(document.createElement("CODE"));E.textContent=c;var a=h.getAttribute("data-src"),e=_.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=b[t]||t}r.util.setLanguage(E,e),r.util.setLanguage(h,e);var s=r.plugins.autoloader;s&&s.loadLanguages(e),F(a,function(n){h.setAttribute(u,x);var i=T(h.getAttribute("data-range"));if(i){var f=n.split(/\r\n?|\n/g),v=i[0],S=i[1]==null?f.length:i[1];v<0&&(v+=f.length),v=Math.max(0,Math.min(v-1,f.length)),S<0&&(S+=f.length),S=Math.max(0,Math.min(S,f.length)),n=f.slice(v,S).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(v+1))}E.textContent=n,r.highlightElement(E)},function(n){h.setAttribute(u,P),E.textContent=n})}}),r.plugins.fileHighlight={highlight:function(h){for(var E=(h||document).querySelectorAll(I),a=0,e;e=E[a++];)r.highlightElement(e)}};var j=!1;r.fileHighlight=function(){j||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),j=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(He);var bt=He.exports;const Pe=_t(bt),je="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+je+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+je+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",d=>{d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(l,r){const c={};c["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[r]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;const g={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};g["language-"+r]={pattern:/[\s\S]+/,inside:Prism.languages[r]};const p={};p[l]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,l),"i"),lookbehind:!0,greedy:!0,inside:g},Prism.languages.insertBefore("svelte","cdata",p)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var yt=M('<div class="repo_name svelte-1widkfd"> </div>'),kt=M("<img>"),xt=M("<blockquote> </blockquote>"),Ft=M('<p class="text_align_center"> <!></p>'),wt=M('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),At=M('<a class="chip svelte-1widkfd">repo</a>'),St=M('<a class="chip svelte-1widkfd" title="version"> </a>'),Et=M('<a class="chip svelte-1widkfd">npm</a>'),It=M('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),Tt=M('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function Pt(d,l){ce(l,!0);const r=Re(),c=()=>qe(Ze,"$page",r),g=Z(()=>l.pkg.package_json);var p=Tt(),b=k(p),u=k(b);z(u,()=>l.repo_name,e=>{var t=R(),s=D(t);N(s,()=>l.repo_name,()=>l.pkg.repo_name),w(e,t)},e=>{var t=yt(),s=k(t);y(t),q(()=>W(s,l.pkg.repo_name)),w(e,t)});var m=o(u,!0);m.nodeValue="  ";var x=o(m);z(x,()=>l.pkg.logo_url,e=>{var t=R(),s=D(t);z(s,()=>l.logo,n=>{var i=R(),f=D(i);N(f,()=>l.logo,()=>l.pkg.logo_url,()=>l.pkg.logo_alt),w(n,i)},n=>{var i=kt();q(()=>{O(i,"src",l.pkg.logo_url),O(i,"alt",l.pkg.logo_alt),we(i,"width","var(--size, var(--icon_size_xl2))"),we(i,"height","var(--size, var(--icon_size_xl2))")}),w(n,i)}),w(e,t)}),y(b);var P=o(o(b,!0));z(P,()=>A(g).motto,e=>{var t=R(),s=D(t);z(s,()=>l.motto,n=>{var i=R(),f=D(i);N(f,()=>l.motto,()=>A(g).motto,()=>A(g).glyph),w(n,i)},n=>{var i=xt(),f=k(i);y(i),q(()=>W(f,`${A(g).motto??""}
				${A(g).glyph??""}`)),w(n,i)}),w(e,t)});var I=o(o(P,!0));z(I,()=>A(g).description,e=>{var t=R(),s=D(t);z(s,()=>l.description,n=>{var i=R(),f=D(i);N(f,()=>l.description,()=>A(g).description,()=>A(g).glyph),w(n,i)},n=>{var i=Ft(),f=k(i),v=o(f);z(v,()=>!A(g).motto,S=>{var C=_e();q(()=>W(C,A(g).glyph)),w(S,C)}),y(i),q(()=>W(f,`${A(g).description??""} `)),w(n,i)}),w(e,t)});var F=o(o(I,!0));z(F,()=>l.children,e=>{var t=R(),s=D(t);N(s,()=>l.children),w(e,t)});var T=o(o(F,!0));z(T,()=>l.pkg.homepage_url,e=>{var t=R(),s=D(t);z(s,()=>l.homepage_url,n=>{var i=R(),f=D(i);N(f,()=>l.homepage_url,()=>l.pkg.homepage_url),w(n,i)},n=>{var i=wt(),f=k(i),v=k(f);q(()=>W(v,rt(l.pkg.homepage_url))),y(f),y(i),q(()=>{O(f,"href",l.pkg.homepage_url),X(f,"selected",l.pkg.homepage_url===c().url.href)}),w(n,i)}),w(e,t)});var j=o(o(T,!0)),_=k(j);z(_,()=>l.pkg.repo_url,e=>{var t=At();q(()=>O(t,"href",l.pkg.repo_url)),w(e,t)});var h=o(o(_,!0));z(h,()=>l.pkg.changelog_url,e=>{var t=St(),s=k(t);y(t),q(()=>{O(t,"href",l.pkg.changelog_url),W(s,A(g).version)}),w(e,t)});var E=o(o(h,!0));z(E,()=>l.pkg.npm_url,e=>{var t=Et();q(()=>O(t,"href",l.pkg.npm_url)),w(e,t)}),y(j);var a=o(o(j,!0));z(a,()=>l.pkg.npm_url,e=>{var t=R(),s=D(t);z(s,()=>l.npm_url,n=>{var i=R(),f=D(i);N(f,()=>l.npm_url,()=>l.pkg.npm_url),w(n,i)},n=>{var i=It(),f=k(i);y(i),q(()=>W(f,`npm i -D ${A(g).name??""}`)),w(n,i)}),w(e,t)}),y(p),w(d,p),de()}var jt=M('<div class="icon svelte-1s6rl33"><!></div>'),Ct=M('<!> <div class="content svelte-1s6rl33"><!></div> <!>',1);function zt(d,l){ce(l,!0);const r=Re(),c=()=>qe(Ze,"$page",r),g=a=>{var e=jt(),t=k(e);z(t,()=>typeof A(_)=="string",s=>{var n=_e();q(()=>W(n,A(_))),w(s,n)},s=>{var n=R(),i=D(n);N(i,()=>A(_)),w(s,n)}),y(e),w(a,e)},p=K(l,"align",3,"left"),b=Z(()=>!!l.href),u=Z(()=>A(b)&&c().url.pathname===l.href),m=Z(()=>l.tag??(A(b)?"a":"div")),x=Z(()=>A(b)?{href:l.href}:void 0),P=Z(()=>p()==="left"),I=Z(()=>p()==="right"),F=Z(()=>p()==="above"),T=Z(()=>p()==="below"),j=Z(()=>A(b)?"🔗":"🪧"),_=Z(()=>l.icon??A(j));var h=R(),E=D(h);pt(E,()=>A(m),!1,(a,e)=>{let t;q(()=>{t=st(a,t,{class:"card",...l.attrs,...A(x)},"svelte-1s6rl33"),X(a,"link",A(b)),X(a,"selected",A(u)),X(a,"left",A(P)),X(a,"right",A(I)),X(a,"above",A(F)),X(a,"below",A(T))});var s=Ct(),n=D(s);z(n,()=>p()==="left"||p()==="above",S=>{g(S)});var i=o(o(n,!0)),f=k(i);N(f,()=>l.children),y(i);var v=o(o(i,!0));z(v,()=>p()==="right"||p()==="below",S=>{g(S)}),w(e,s)}),w(d,h),de()}(function(d){d.languages.typescript=d.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),d.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete d.languages.typescript.parameter,delete d.languages.typescript["literal-property"];var l=d.languages.extend("typescript",{});delete l["class-name"],d.languages.typescript["class-name"].inside=l,d.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:l}}}}),d.languages.ts=d.languages.typescript})(Prism);var Dt=M("<pre><code><!></code></pre>");function Ce(d,l){ce(l,!0);const r=K(l,"lang",3,"svelte"),c=K(l,"inline",3,!1),g=Z(()=>r()===null?null:Pe.languages[r()]),p=Z(()=>A(g)===null?null:l.content&&Pe.highlight(l.content,A(g),r())),b=Z(()=>A(p)??l.content);var u=Dt();let m;var x=k(u);let P;var I=k(x);z(I,()=>l.children,F=>{var T=R(),j=D(T);N(j,()=>l.children,()=>A(b)),w(F,T)},F=>{var T=R(),j=D(T);z(j,()=>A(p)!==null,_=>{var h=R(),E=D(h);vt(E,()=>A(p),!1,!1),w(_,h)},_=>{var h=_e();q(()=>W(h,l.content)),w(_,h)},!0),w(F,T)}),y(x),y(u),q(()=>{m=Ae(u,m,{...l.pre_attrs},"svelte-1a6bj2n"),X(u,"inline",c()),P=Ae(x,P,{...l.code_attrs},"svelte-1a6bj2n")}),w(d,u),de()}const Lt=(d,l)=>{let r,c,g,p,b,u,m;const x=F=>{u=0,typeof F=="function"?(r=F,c=void 0,g=void 0,p=void 0):(r=F.onintersect,c=F.ondisconnect,g=F.count,p=F.options)},P=()=>{m&&(m.disconnect(),c&&c({intersecting:b,intersections:u,el:d,observer:m}),m=null)},I=()=>{m&&P(),g!==0&&(m=new IntersectionObserver(F=>{b=F[0].isIntersecting,r&&m&&r({intersecting:b,intersections:u,el:d,observer:m,disconnect:P}),b?u++:g&&g>0&&u>=g&&P()},p),m.observe(d))};return x(l),I(),{update:F=>{x(F),I()},destroy:P}};var Ot=M('<li class="box svelte-19bknr2"><div class="box"> </div></li>'),Mt=M('<div class="demo svelte-19bknr2"><label class="box" title="IntersectionObserver options.threshold"><div class="title"><code>options.threshold</code></div> <div class="threshold svelte-19bknr2"><input type="number" class="svelte-19bknr2"> <input type="range" class="svelte-19bknr2"></div></label> <label class="box" title="disconnect the observer after the element enters and leaves the viewport this many times"><div class="title"><code>count</code></div> <div class="count svelte-19bknr2"><input type="number" class="svelte-19bknr2"> <input type="range" class="svelte-19bknr2"></div></label> <ul class="box svelte-19bknr2"></ul></div>');function he(d,l){const r=()=>typeof window>"u"?51:window.innerHeight/30;let c=K(l,"threshold",15,0),g=K(l,"count",31,()=>-1),p=K(l,"items_count",19,r);const b=Z(()=>Array.from({length:p()},(e,t)=>t));var u=Mt(),m=k(u),x=k(m);k(x),y(x);var P=o(o(x,!0)),I=k(P);oe(I),O(I,"step",.1),O(I,"min",0),O(I,"max",1);var F=o(o(I,!0));oe(F),O(F,"step",.1),O(F,"min",0),O(F,"max",1),y(P),y(m);var T=o(o(m,!0)),j=k(T);k(j),y(j);var _=o(o(j,!0)),h=k(_);oe(h),O(h,"min",-1),O(h,"max",3),O(h,"step",1);var E=o(o(h,!0));oe(E),O(E,"min",-1),O(E,"max",3),O(E,"step",1),y(_),y(T);var a=o(o(T,!0));it(a,20,()=>A(b),(e,t)=>e,(e,t,s)=>{var n=Ot(),i=k(n),f=k(i);y(i),y(n),q(()=>W(f,t)),ht(n,(v,S)=>Lt(v,S),()=>({onintersect:v=>{const{intersecting:S,el:C}=v;C.classList.toggle("intersecting",S),console.log("onintersect params",v)},ondisconnect:v=>{console.log("ondisconnect params",v)},count:g(),options:{threshold:c()}})),w(e,n)}),y(a),y(u),le(I,c,e=>c(e)),le(F,c,e=>c(e)),le(h,g,e=>g(e)),le(E,g,e=>g(e)),w(d,u)}const Rt=(d,l)=>tt(l);var qt=M("<!> <!> <!>",1),Zt=M(`<section><h2 class="mt_0">demo</h2> <div class="mb_lg"><!></div> <div class="mb_lg"><!></div> <p>An <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold"><code>options.threshold</code></a> of <code>0</code> triggers the event when the element is inside the viewport at least a pixel,
		and a value of <code>1</code> triggers the event when it is fully inside the viewport. See also <code>options.root</code> and <code>options.rootMargin</code> in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver">IntersectionObserver docs</a>.</p> <p>A <code>count</code> of <code>1</code> disconnects the observer after the element enters and
		leaves the viewport one time, like <code>'once'</code> for events. Similar for any positive integer.</p> <p>A <code>count</code> that's negative or <code>undefined</code> makes it so it will never automatically
		disconnect.</p> <p>A <code>count</code> of <code>0</code> disables <code>onintersect</code> and never creates the <code>IntersectionObserver</code>.</p> <p>See also the <a href="https://github.com/ryanatkn/svelte-intersect#readme">API docs</a> and <a href="https://github.com/ryanatkn/svelte-intersect/blob/main/src/routes/Demo.svelte">demo source code</a>.</p> <p></p></section> <section class="box"><button type="button" class="mb_lg">reset state</button></section> <section class="w_100"><div class="box row gap_lg flex_wrap"><!></div></section>`,1);function Ht(d){let l=at(0);var r=Zt(),c=D(r),g=k(c),p=o(o(g,!0)),b=k(p);Ce(b,{lang:"ts",content:"import {intersect} from 'svelte-intersect';"}),y(p);var u=o(o(p,!0)),m=k(u);Ce(m,{content:`<li
	use:intersect={{
		onintersect: ({intersecting, intersections, el, obeserver, disconnect}) =>
			el.classList.toggle('intersecting', intersecting),
		ondisconnect: ({intersecting, intersections, el, obeserver}) => { /* */ },
		count,
		options: {threshold},
	}}
>`}),y(u);var x=o(o(u,!0)),P=o(k(x));k(P),y(P);var I=o(o(P,!0)),F=o(o(I,!0)),T=o(o(F,!0)),j=o(o(T,!0));o(o(j,!0)),J(),y(x);var _=o(o(x,!0)),h=o(k(_)),E=o(o(h,!0));o(o(E,!0)),J(),y(_);var a=o(o(_,!0)),e=o(k(a));o(o(e,!0)),J(),y(a);var t=o(o(a,!0)),s=o(k(t)),n=o(o(s,!0)),i=o(o(n,!0));o(o(i,!0)),J(),y(t);var f=o(o(t,!0)),v=o(k(f));o(o(v,!0)),J(),y(f),o(o(f,!0)),y(c);var S=o(o(c,!0)),C=k(S);C.__click=[Rt,l],y(S);var U=o(o(S,!0)),Q=k(U),te=k(Q);ft(te,()=>A(l),ge=>{var ae=qt(),$=D(ae);he($,{});var L=o(o($,!0));he(L,{threshold:1});var H=o(o(L,!0));he(H,{count:1}),w(ge,ae)}),y(Q),y(U),w(d,r)}dt(["click"]);var Ut=M("docs",1),Gt=M('<main class="box mb_xl7"><div class="width_md px_lg"><section><header class="box"><h1 class="my_xl3">svelte-intersect</h1> <!></header></section> <section class="box"><!> <a class="chip mt_xl3">about</a></section> <!> <!></div></main>');function $t(d,l){ce(l,!0);const r=ot(ct,ut);var c=Gt(),g=k(c),p=k(g),b=k(p),u=k(b),m=o(o(u,!0));Pt(m,{pkg:r,repo_name:_=>{}}),y(b),y(p);var x=o(o(p,!0)),P=k(x);zt(P,{href:"https://github.com/ryanatkn/svelte-intersect#readme",attrs:{class:"card mb_lg"},icon:_=>{},children:(_,h)=>{J();var E=Ut();w(_,E)},$$slots:{default:!0}});var I=o(o(P,!0));O(I,"href",`${gt??""}/about`),y(x);var F=o(o(x,!0));Ht(F);var T=o(o(F,!0));lt(T,{pkg:r,root_url:"https://www.ryanatkn.com/"}),y(g),y(c),w(d,c),de()}export{$t as component};
