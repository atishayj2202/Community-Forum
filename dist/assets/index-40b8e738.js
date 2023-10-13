(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function oi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const te={},Yt=[],Me=()=>{},Wl=()=>!1,Kl=/^on[^a-z]/,$r=t=>Kl.test(t),ai=t=>t.startsWith("onUpdate:"),ue=Object.assign,ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ql=Object.prototype.hasOwnProperty,K=(t,e)=>ql.call(t,e),$=Array.isArray,Xt=t=>Br(t)==="[object Map]",Sa=t=>Br(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",li=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Ta=t=>ne(t)&&H(t.then)&&H(t.catch),Ra=Object.prototype.toString,Br=t=>Ra.call(t),Jl=t=>Br(t).slice(8,-1),Ca=t=>Br(t)==="[object Object]",ui=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ur=oi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gl=/-(\w)/g,Ye=jr(t=>t.replace(Gl,(e,n)=>n?n.toUpperCase():"")),Yl=/\B([A-Z])/g,hn=jr(t=>t.replace(Yl,"-$1").toLowerCase()),Hr=jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ls=jr(t=>t?`on${Hr(t)}`:""),On=(t,e)=>!Object.is(t,e),fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Tr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ps=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qi;const Os=()=>qi||(qi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fi(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?eu(r):fi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(ne(t))return t}}const Xl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Zl=/\/\*[^]*?\*\//g;function eu(t){const e={};return t.replace(Zl,"").split(Xl).forEach(n=>{if(n){const r=n.split(Ql);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function di(t){let e="";if(ce(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=di(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nu=oi(tu);function Aa(t){return!!t||t===""}const _e=t=>ce(t)?t:t==null?"":$(t)||ne(t)&&(t.toString===Ra||!H(t.toString))?JSON.stringify(t,Pa,2):String(t),Pa=(t,e)=>e&&e.__v_isRef?Pa(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Sa(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!$(e)&&!Ca(e)?String(e):e;let ke;class ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function su(t,e=ke){e&&e.active&&e.effects.push(t)}function iu(){return ke}const hi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oa=t=>(t.w&Ct)>0,ka=t=>(t.n&Ct)>0,ou=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ct},au=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Oa(s)&&!ka(s)?s.delete(t):e[n++]=s,s.w&=~Ct,s.n&=~Ct}e.length=n}},ks=new WeakMap;let In=0,Ct=1;const Ns=30;let Ne;const Ut=Symbol(""),xs=Symbol("");class pi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,su(this,r)}run(){if(!this.active)return this.fn();let e=Ne,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ne,Ne=this,Et=!0,Ct=1<<++In,In<=Ns?ou(this):Ji(this),this.fn()}finally{In<=Ns&&au(this),Ct=1<<--In,Ne=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Ji(this),this.onStop&&this.onStop(),this.active=!1)}}function Ji(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const Na=[];function pn(){Na.push(Et),Et=!1}function mn(){const t=Na.pop();Et=t===void 0?!0:t}function we(t,e,n){if(Et&&Ne){let r=ks.get(t);r||ks.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=hi()),xa(s)}}function xa(t,e){let n=!1;In<=Ns?ka(t)||(t.n|=Ct,n=!Oa(t)):n=!t.has(Ne),n&&(t.add(Ne),Ne.deps.push(t))}function ct(t,e,n,r,s,i){const o=ks.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?ui(n)&&a.push(o.get("length")):(a.push(o.get(Ut)),Xt(t)&&a.push(o.get(xs)));break;case"delete":$(t)||(a.push(o.get(Ut)),Xt(t)&&a.push(o.get(xs)));break;case"set":Xt(t)&&a.push(o.get(Ut));break}if(a.length===1)a[0]&&Ds(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ds(hi(c))}}function Ds(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&Gi(r);for(const r of n)r.computed||Gi(r)}function Gi(t,e){(t!==Ne||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const cu=oi("__proto__,__v_isRef,__isVue"),Da=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(li)),lu=mi(),uu=mi(!1,!0),fu=mi(!0),Yi=du();function du(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const r=q(this)[e].apply(this,n);return mn(),r}}),t}function hu(t){const e=q(this);return we(e,"has",t),e.hasOwnProperty(t)}function mi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Pu:$a:e?Fa:Ua).get(r))return r;const o=$(r);if(!t){if(o&&K(Yi,s))return Reflect.get(Yi,s,i);if(s==="hasOwnProperty")return hu}const a=Reflect.get(r,s,i);return(li(s)?Da.has(s):cu(s))||(t||we(r,"get",s),e)?a:pe(a)?o&&ui(s)?a:a.value:ne(a)?t?ja(a):zr(a):a}}const pu=Ma(),mu=Ma(!0);function Ma(t=!1){return function(n,r,s,i){let o=n[r];if(sn(o)&&pe(o)&&!pe(s))return!1;if(!t&&(!Rr(s)&&!sn(s)&&(o=q(o),s=q(s)),!$(n)&&pe(o)&&!pe(s)))return o.value=s,!0;const a=$(n)&&ui(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?On(s,o)&&ct(n,"set",r,s):ct(n,"add",r,s)),c}}function gu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ct(t,"delete",e,void 0),r}function _u(t,e){const n=Reflect.has(t,e);return(!li(e)||!Da.has(e))&&we(t,"has",e),n}function yu(t){return we(t,"iterate",$(t)?"length":Ut),Reflect.ownKeys(t)}const La={get:lu,set:pu,deleteProperty:gu,has:_u,ownKeys:yu},bu={get:fu,set(t,e){return!0},deleteProperty(t,e){return!0}},vu=ue({},La,{get:uu,set:mu}),gi=t=>t,Vr=t=>Reflect.getPrototypeOf(t);function rr(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);n||(e!==i&&we(s,"get",e),we(s,"get",i));const{has:o}=Vr(s),a=r?gi:n?bi:kn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function sr(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return e||(t!==s&&we(r,"has",t),we(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ir(t,e=!1){return t=t.__v_raw,!e&&we(q(t),"iterate",Ut),Reflect.get(t,"size",t)}function Xi(t){t=q(t);const e=q(this);return Vr(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Qi(t,e){e=q(e);const n=q(this),{has:r,get:s}=Vr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?On(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function Zi(t){const e=q(this),{has:n,get:r}=Vr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function eo(){const t=q(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function or(t,e){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=e?gi:t?bi:kn;return!t&&we(a,"iterate",Ut),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function ar(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=Xt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?gi:e?bi:kn;return!e&&we(i,"iterate",c?xs:Ut),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:this}}function wu(){const t={get(i){return rr(this,i)},get size(){return ir(this)},has:sr,add:Xi,set:Qi,delete:Zi,clear:eo,forEach:or(!1,!1)},e={get(i){return rr(this,i,!1,!0)},get size(){return ir(this)},has:sr,add:Xi,set:Qi,delete:Zi,clear:eo,forEach:or(!1,!0)},n={get(i){return rr(this,i,!0)},get size(){return ir(this,!0)},has(i){return sr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:or(!0,!1)},r={get(i){return rr(this,i,!0,!0)},get size(){return ir(this,!0)},has(i){return sr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ar(i,!1,!1),n[i]=ar(i,!0,!1),e[i]=ar(i,!1,!0),r[i]=ar(i,!0,!0)}),[t,n,e,r]}const[Eu,Iu,Su,Tu]=wu();function _i(t,e){const n=e?t?Tu:Su:t?Iu:Eu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Ru={get:_i(!1,!1)},Cu={get:_i(!1,!0)},Au={get:_i(!0,!1)},Ua=new WeakMap,Fa=new WeakMap,$a=new WeakMap,Pu=new WeakMap;function Ou(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ku(t){return t.__v_skip||!Object.isExtensible(t)?0:Ou(Jl(t))}function zr(t){return sn(t)?t:yi(t,!1,La,Ru,Ua)}function Ba(t){return yi(t,!1,vu,Cu,Fa)}function ja(t){return yi(t,!0,bu,Au,$a)}function yi(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ku(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qt(t){return sn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function Rr(t){return!!(t&&t.__v_isShallow)}function Ha(t){return Qt(t)||sn(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Va(t){return Tr(t,"__v_skip",!0),t}const kn=t=>ne(t)?zr(t):t,bi=t=>ne(t)?ja(t):t;function za(t){Et&&Ne&&(t=q(t),xa(t.dep||(t.dep=hi())))}function Wa(t,e){t=q(t);const n=t.dep;n&&Ds(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Nu(t){return Ka(t,!1)}function xu(t){return Ka(t,!0)}function Ka(t,e){return pe(t)?t:new Du(t,e)}class Du{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:kn(e)}get value(){return za(this),this._value}set value(e){const n=this.__v_isShallow||Rr(e)||sn(e);e=n?e:q(e),On(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),Wa(this))}}function Zt(t){return pe(t)?t.value:t}const Mu={get:(t,e,n)=>Zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qa(t){return Qt(t)?t:new Proxy(t,Mu)}class Lu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pi(e,()=>{this._dirty||(this._dirty=!0,Wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return za(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Uu(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Me):(r=t.get,s=t.set),new Lu(r,s,i||!s,n)}function It(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Wr(i,e,n)}return s}function Le(t,e,n,r){if(H(t)){const i=It(t,e,n,r);return i&&Ta(i)&&i.catch(o=>{Wr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Le(t[i],e,n,r));return s}function Wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,a]);return}}Fu(t,n,s,r)}function Fu(t,e,n,r=!0){console.error(t)}let Nn=!1,Ms=!1;const he=[];let ze=0;const en=[];let rt=null,xt=0;const Ja=Promise.resolve();let vi=null;function Ga(t){const e=vi||Ja;return t?e.then(this?t.bind(this):t):e}function $u(t){let e=ze+1,n=he.length;for(;e<n;){const r=e+n>>>1;xn(he[r])<t?e=r+1:n=r}return e}function wi(t){(!he.length||!he.includes(t,Nn&&t.allowRecurse?ze+1:ze))&&(t.id==null?he.push(t):he.splice($u(t.id),0,t),Ya())}function Ya(){!Nn&&!Ms&&(Ms=!0,vi=Ja.then(Qa))}function Bu(t){const e=he.indexOf(t);e>ze&&he.splice(e,1)}function ju(t){$(t)?en.push(...t):(!rt||!rt.includes(t,t.allowRecurse?xt+1:xt))&&en.push(t),Ya()}function to(t,e=Nn?ze+1:0){for(;e<he.length;e++){const n=he[e];n&&n.pre&&(he.splice(e,1),e--,n())}}function Xa(t){if(en.length){const e=[...new Set(en)];if(en.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>xn(n)-xn(r)),xt=0;xt<rt.length;xt++)rt[xt]();rt=null,xt=0}}const xn=t=>t.id==null?1/0:t.id,Hu=(t,e)=>{const n=xn(t)-xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qa(t){Ms=!1,Nn=!0,he.sort(Hu);const e=Me;try{for(ze=0;ze<he.length;ze++){const n=he[ze];n&&n.active!==!1&&It(n,null,14)}}finally{ze=0,he.length=0,Xa(),Nn=!1,vi=null,(he.length||en.length)&&Qa()}}function Vu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[l]||te;p&&(s=n.map(y=>ce(y)?y.trim():y)),d&&(s=n.map(Ps))}let a,c=r[a=ls(e)]||r[a=ls(Ye(e))];!c&&i&&(c=r[a=ls(hn(e))]),c&&Le(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Le(u,t,6,s)}}function Za(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Za(u,e,!0);l&&(a=!0,ue(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ue(o,i),ne(t)&&r.set(t,o),o)}function Kr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,hn(e))||K(t,e))}let Re=null,qr=null;function Cr(t){const e=Re;return Re=t,qr=t&&t.type.__scopeId||null,e}function Vn(t){qr=t}function zn(){qr=null}function Gt(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ho(-1);const i=Cr(e);let o;try{o=t(...s)}finally{Cr(i),r._d&&ho(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function us(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:p,setupState:y,ctx:g,inheritAttrs:I}=t;let x,k;const N=Cr(t);try{if(n.shapeFlag&4){const L=s||r;x=Ve(l.call(L,L,d,i,y,p,g)),k=c}else{const L=e;x=Ve(L.length>1?L(i,{attrs:c,slots:a,emit:u}):L(i,null)),k=e.props?c:zu(c)}}catch(L){Rn.length=0,Wr(L,t,1),x=re(Dn)}let V=x;if(k&&I!==!1){const L=Object.keys(k),{shapeFlag:oe}=V;L.length&&oe&7&&(o&&L.some(ai)&&(k=Wu(k,o)),V=on(V,k))}return n.dirs&&(V=on(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),x=V,Cr(N),x}const zu=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},Wu=(t,e)=>{const n={};for(const r in t)(!ai(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ku(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?no(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(o[p]!==r[p]&&!Kr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?no(r,o,u):!0:!!o;return!1}function no(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Kr(n,i))return!0}return!1}function qu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ju=t=>t.__isSuspense;function Gu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ju(t)}const cr={};function dr(t,e,n){return ec(t,e,n)}function ec(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){var a;const c=iu()===((a=fe)==null?void 0:a.scope)?fe:null;let u,l=!1,d=!1;if(pe(t)?(u=()=>t.value,l=Rr(t)):Qt(t)?(u=()=>t,r=!0):$(t)?(d=!0,l=t.some(L=>Qt(L)||Rr(L)),u=()=>t.map(L=>{if(pe(L))return L.value;if(Qt(L))return Mt(L);if(H(L))return It(L,c,2)})):H(t)?e?u=()=>It(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),Le(t,c,3,[y])}:u=Me,e&&r){const L=u;u=()=>Mt(L())}let p,y=L=>{p=N.onStop=()=>{It(L,c,4)}},g;if(Ln)if(y=Me,e?n&&Le(e,c,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const L=zf();g=L.__watcherHandles||(L.__watcherHandles=[])}else return Me;let I=d?new Array(t.length).fill(cr):cr;const x=()=>{if(N.active)if(e){const L=N.run();(r||l||(d?L.some((oe,ae)=>On(oe,I[ae])):On(L,I)))&&(p&&p(),Le(e,c,3,[L,I===cr?void 0:d&&I[0]===cr?[]:I,y]),I=L)}else N.run()};x.allowRecurse=!!e;let k;s==="sync"?k=x:s==="post"?k=()=>be(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),k=()=>wi(x));const N=new pi(u,k);e?n?x():I=N.run():s==="post"?be(N.run.bind(N),c&&c.suspense):N.run();const V=()=>{N.stop(),c&&c.scope&&ci(c.scope.effects,N)};return g&&g.push(V),V}function Yu(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?tc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=fe;an(this);const a=ec(s,i.bind(r),n);return o?an(o):Ft(),a}function tc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Mt(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Mt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Mt(t[n],e);else if(Sa(t)||Xt(t))t.forEach(n=>{Mt(n,e)});else if(Ca(t))for(const n in t)Mt(t[n],e);return t}function Ls(t,e){const n=Re;if(n===null)return t;const r=Xr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=te]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Mt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Ot(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pn(),Le(c,n,8,[t.el,a,t,e]),mn())}}function nc(t,e){return H(t)?(()=>ue({name:t.name},e,{setup:t}))():t}const hr=t=>!!t.type.__asyncLoader,rc=t=>t.type.__isKeepAlive;function Xu(t,e){sc(t,"a",e)}function Qu(t,e){sc(t,"da",e)}function sc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rc(s.parent.vnode)&&Zu(r,e,n,s),s=s.parent}}function Zu(t,e,n,r){const s=Jr(e,t,r,!0);ic(()=>{ci(r[e],s)},n)}function Jr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pn(),an(n);const a=Le(e,n,t,o);return Ft(),mn(),a});return r?s.unshift(i):s.push(i),i}}const ut=t=>(e,n=fe)=>(!Ln||t==="sp")&&Jr(t,(...r)=>e(...r),n),ef=ut("bm"),tf=ut("m"),nf=ut("bu"),rf=ut("u"),sf=ut("bum"),ic=ut("um"),of=ut("sp"),af=ut("rtg"),cf=ut("rtc");function lf(t,e=fe){Jr("ec",t,e)}const oc="components";function St(t,e){return ff(oc,t,!0,e)||t}const uf=Symbol.for("v-ndc");function ff(t,e,n=!0,r=!1){const s=Re||fe;if(s){const i=s.type;if(t===oc){const a=jf(i,!1);if(a&&(a===e||a===Ye(e)||a===Hr(Ye(e))))return i}const o=ro(s[t]||i[t],e)||ro(s.appContext[t],e);return!o&&r?i:o}}function ro(t,e){return t&&(t[e]||t[Ye(e)]||t[Hr(Ye(e))])}function ac(t,e,n,r){let s;const i=n&&n[r];if($(t)||ce(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Us=t=>t?yc(t)?Xr(t)||t.proxy:Us(t.parent):null,Tn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Us(t.parent),$root:t=>Us(t.root),$emit:t=>t.emit,$options:t=>Ei(t),$forceUpdate:t=>t.f||(t.f=()=>wi(t.update)),$nextTick:t=>t.n||(t.n=Ga.bind(t.proxy)),$watch:t=>Yu.bind(t)}),fs=(t,e)=>t!==te&&!t.__isScriptSetup&&K(t,e),df={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fs(r,e))return o[e]=1,r[e];if(s!==te&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==te&&K(n,e))return o[e]=4,n[e];Fs&&(o[e]=0)}}const l=Tn[e];let d,p;if(l)return e==="$attrs"&&we(t,"get",e),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==te&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fs(s,e)?(s[e]=n,!0):r!==te&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&K(t,o)||fs(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Tn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function so(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fs=!0;function hf(t){const e=Ei(t),n=t.proxy,r=t.ctx;Fs=!1,e.beforeCreate&&io(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:y,updated:g,activated:I,deactivated:x,beforeDestroy:k,beforeUnmount:N,destroyed:V,unmounted:L,render:oe,renderTracked:ae,renderTriggered:Ee,errorCaptured:Pe,serverPrefetch:Fe,expose:Te,inheritAttrs:ft,components:Pt,directives:$e,filters:yn}=e;if(u&&pf(u,r,null),o)for(const Q in o){const J=o[Q];H(J)&&(r[Q]=J.bind(n))}if(s){const Q=s.call(n,n);ne(Q)&&(t.data=zr(Q))}if(Fs=!0,i)for(const Q in i){const J=i[Q],tt=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):Me,dt=!H(J)&&H(J.set)?J.set.bind(n):Me,Be=xe({get:tt,set:dt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Be.value,set:ye=>Be.value=ye})}if(a)for(const Q in a)cc(a[Q],r,n,Q);if(c){const Q=H(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(J=>{pr(J,Q[J])})}l&&io(l,t,"c");function le(Q,J){$(J)?J.forEach(tt=>Q(tt.bind(n))):J&&Q(J.bind(n))}if(le(ef,d),le(tf,p),le(nf,y),le(rf,g),le(Xu,I),le(Qu,x),le(lf,Pe),le(cf,ae),le(af,Ee),le(sf,N),le(ic,L),le(of,Fe),$(Te))if(Te.length){const Q=t.exposed||(t.exposed={});Te.forEach(J=>{Object.defineProperty(Q,J,{get:()=>n[J],set:tt=>n[J]=tt})})}else t.exposed||(t.exposed={});oe&&t.render===Me&&(t.render=oe),ft!=null&&(t.inheritAttrs=ft),Pt&&(t.components=Pt),$e&&(t.directives=$e)}function pf(t,e,n=Me){$(t)&&(t=$s(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=ot(s.from||r,s.default,!0):i=ot(s.from||r):i=ot(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function io(t,e,n){Le($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cc(t,e,n,r){const s=r.includes(".")?tc(n,r):()=>n[r];if(ce(t)){const i=e[t];H(i)&&dr(s,i)}else if(H(t))dr(s,t.bind(n));else if(ne(t))if($(t))t.forEach(i=>cc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&dr(s,i,t)}}function Ei(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ar(c,u,o,!0)),Ar(c,e,o)),ne(e)&&i.set(e,c),c}function Ar(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ar(t,i,n,!0),s&&s.forEach(o=>Ar(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mf={data:oo,props:ao,emits:ao,methods:Sn,computed:Sn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Sn,directives:Sn,watch:_f,provide:oo,inject:gf};function oo(t,e){return e?t?function(){return ue(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function gf(t,e){return Sn($s(t),$s(e))}function $s(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ue(Object.create(null),t,e):e}function ao(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ue(Object.create(null),so(t),so(e??{})):e}function _f(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=ge(t[r],e[r]);return n}function lc(){return{app:null,config:{isNativeTag:Wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function bf(t,e){return function(r,s=null){H(r)||(r=ue({},r)),s!=null&&!ne(s)&&(s=null);const i=lc(),o=new Set;let a=!1;const c=i.app={_uid:yf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wf,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,d){if(!a){const p=re(r,s);return p.appContext=i,l&&e?e(p,u):t(p,u,d),a=!0,c._container=u,u.__vue_app__=c,Xr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){Pr=c;try{return u()}finally{Pr=null}}};return c}}let Pr=null;function pr(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function ot(t,e,n=!1){const r=fe||Re;if(r||Pr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Pr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function vf(t,e,n,r=!1){const s={},i={};Tr(i,Yr,1),t.propsDefaults=Object.create(null),uc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ba(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(Kr(t.emitsOptions,p))continue;const y=e[p];if(c)if(K(i,p))y!==i[p]&&(i[p]=y,u=!0);else{const g=Ye(p);s[g]=Bs(c,a,g,y,t,!1)}else y!==i[p]&&(i[p]=y,u=!0)}}}else{uc(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!K(e,d)&&((l=hn(d))===d||!K(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Bs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!K(e,d))&&(delete i[d],u=!0)}u&&ct(t,"set","$attrs")}function uc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ur(c))continue;const u=e[c];let l;s&&K(s,l=Ye(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Kr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=q(n),u=a||te;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Bs(s,c,d,u[d],t,!K(u,d))}}return o}function Bs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(an(s),r=u[n]=c.call(null,e),Ft())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function fc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=d=>{c=!0;const[p,y]=fc(d,e,!0);ue(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ne(t)&&r.set(t,Yt),Yt;if($(i))for(let l=0;l<i.length;l++){const d=Ye(i[l]);co(d)&&(o[d]=te)}else if(i)for(const l in i){const d=Ye(l);if(co(d)){const p=i[l],y=o[d]=$(p)||H(p)?{type:p}:ue({},p);if(y){const g=fo(Boolean,y.type),I=fo(String,y.type);y[0]=g>-1,y[1]=I<0||g<I,(g>-1||K(y,"default"))&&a.push(d)}}}const u=[o,a];return ne(t)&&r.set(t,u),u}function co(t){return t[0]!=="$"}function lo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uo(t,e){return lo(t)===lo(e)}function fo(t,e){return $(e)?e.findIndex(n=>uo(n,t)):H(e)&&uo(e,t)?0:-1}const dc=t=>t[0]==="_"||t==="$stable",Ii=t=>$(t)?t.map(Ve):[Ve(t)],Ef=(t,e,n)=>{if(e._n)return e;const r=Gt((...s)=>Ii(e(...s)),n);return r._c=!1,r},hc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dc(s))continue;const i=t[s];if(H(i))e[s]=Ef(s,i,r);else if(i!=null){const o=Ii(i);e[s]=()=>o}}},pc=(t,e)=>{const n=Ii(e);t.slots.default=()=>n},If=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),Tr(e,"_",n)):hc(e,t.slots={})}else t.slots={},e&&pc(t,e);Tr(t.slots,Yr,1)},Sf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hc(e,s)),o=e}else e&&(pc(t,e),o={default:1});if(i)for(const a in s)!dc(a)&&!(a in o)&&delete s[a]};function js(t,e,n,r,s=!1){if($(t)){t.forEach((p,y)=>js(p,e&&($(e)?e[y]:e),n,r,s));return}if(hr(r)&&!s)return;const i=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===te?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(ce(u)?(l[u]=null,K(d,u)&&(d[u]=null)):pe(u)&&(u.value=null)),H(c))It(c,a,12,[o,l]);else{const p=ce(c),y=pe(c);if(p||y){const g=()=>{if(t.f){const I=p?K(d,c)?d[c]:l[c]:c.value;s?$(I)&&ci(I,i):$(I)?I.includes(i)||I.push(i):p?(l[c]=[i],K(d,c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,K(d,c)&&(d[c]=o)):y&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,be(g,n)):g()}}}const be=Gu;function Tf(t){return Rf(t)}function Rf(t,e){const n=Os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:y=Me,insertStaticContent:g}=t,I=(f,h,m,_=null,w=null,E=null,A=!1,T=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!vn(f,h)&&(_=v(f),ye(f,w,E,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:S,ref:U,shapeFlag:D}=h;switch(S){case Gr:x(f,h,m,_);break;case Dn:k(f,h,m,_);break;case mr:f==null&&N(h,m,_,A);break;case Se:Pt(f,h,m,_,w,E,A,T,R);break;default:D&1?oe(f,h,m,_,w,E,A,T,R):D&6?$e(f,h,m,_,w,E,A,T,R):(D&64||D&128)&&S.process(f,h,m,_,w,E,A,T,R,C)}U!=null&&w&&js(U,f&&f.ref,E,h||f,!h)},x=(f,h,m,_)=>{if(f==null)r(h.el=a(h.children),m,_);else{const w=h.el=f.el;h.children!==f.children&&u(w,h.children)}},k=(f,h,m,_)=>{f==null?r(h.el=c(h.children||""),m,_):h.el=f.el},N=(f,h,m,_)=>{[f.el,f.anchor]=g(f.children,h,m,_,f.el,f.anchor)},V=({el:f,anchor:h},m,_)=>{let w;for(;f&&f!==h;)w=p(f),r(f,m,_),f=w;r(h,m,_)},L=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},oe=(f,h,m,_,w,E,A,T,R)=>{A=A||h.type==="svg",f==null?ae(h,m,_,w,E,A,T,R):Fe(f,h,w,E,A,T,R)},ae=(f,h,m,_,w,E,A,T)=>{let R,S;const{type:U,props:D,shapeFlag:F,transition:B,dirs:z}=f;if(R=f.el=o(f.type,E,D&&D.is,D),F&8?l(R,f.children):F&16&&Pe(f.children,R,null,_,w,E&&U!=="foreignObject",A,T),z&&Ot(f,null,_,"created"),Ee(R,f,f.scopeId,A,_),D){for(const X in D)X!=="value"&&!ur(X)&&i(R,X,null,D[X],E,f.children,_,w,de);"value"in D&&i(R,"value",null,D.value),(S=D.onVnodeBeforeMount)&&He(S,_,f)}z&&Ot(f,null,_,"beforeMount");const ee=(!w||w&&!w.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(R),r(R,h,m),((S=D&&D.onVnodeMounted)||ee||z)&&be(()=>{S&&He(S,_,f),ee&&B.enter(R),z&&Ot(f,null,_,"mounted")},w)},Ee=(f,h,m,_,w)=>{if(m&&y(f,m),_)for(let E=0;E<_.length;E++)y(f,_[E]);if(w){let E=w.subTree;if(h===E){const A=w.vnode;Ee(f,A,A.scopeId,A.slotScopeIds,w.parent)}}},Pe=(f,h,m,_,w,E,A,T,R=0)=>{for(let S=R;S<f.length;S++){const U=f[S]=T?_t(f[S]):Ve(f[S]);I(null,U,h,m,_,w,E,A,T)}},Fe=(f,h,m,_,w,E,A)=>{const T=h.el=f.el;let{patchFlag:R,dynamicChildren:S,dirs:U}=h;R|=f.patchFlag&16;const D=f.props||te,F=h.props||te;let B;m&&kt(m,!1),(B=F.onVnodeBeforeUpdate)&&He(B,m,h,f),U&&Ot(h,f,m,"beforeUpdate"),m&&kt(m,!0);const z=w&&h.type!=="foreignObject";if(S?Te(f.dynamicChildren,S,T,m,_,z,E):A||J(f,h,T,null,m,_,z,E,!1),R>0){if(R&16)ft(T,h,D,F,m,_,w);else if(R&2&&D.class!==F.class&&i(T,"class",null,F.class,w),R&4&&i(T,"style",D.style,F.style,w),R&8){const ee=h.dynamicProps;for(let X=0;X<ee.length;X++){const se=ee[X],Oe=D[se],Wt=F[se];(Wt!==Oe||se==="value")&&i(T,se,Oe,Wt,w,f.children,m,_,de)}}R&1&&f.children!==h.children&&l(T,h.children)}else!A&&S==null&&ft(T,h,D,F,m,_,w);((B=F.onVnodeUpdated)||U)&&be(()=>{B&&He(B,m,h,f),U&&Ot(h,f,m,"updated")},_)},Te=(f,h,m,_,w,E,A)=>{for(let T=0;T<h.length;T++){const R=f[T],S=h[T],U=R.el&&(R.type===Se||!vn(R,S)||R.shapeFlag&70)?d(R.el):m;I(R,S,U,null,_,w,E,A,!0)}},ft=(f,h,m,_,w,E,A)=>{if(m!==_){if(m!==te)for(const T in m)!ur(T)&&!(T in _)&&i(f,T,m[T],null,A,h.children,w,E,de);for(const T in _){if(ur(T))continue;const R=_[T],S=m[T];R!==S&&T!=="value"&&i(f,T,S,R,A,h.children,w,E,de)}"value"in _&&i(f,"value",m.value,_.value)}},Pt=(f,h,m,_,w,E,A,T,R)=>{const S=h.el=f?f.el:a(""),U=h.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:B}=h;B&&(T=T?T.concat(B):B),f==null?(r(S,m,_),r(U,m,_),Pe(h.children,m,U,w,E,A,T,R)):D>0&&D&64&&F&&f.dynamicChildren?(Te(f.dynamicChildren,F,m,w,E,A,T),(h.key!=null||w&&h===w.subTree)&&mc(f,h,!0)):J(f,h,m,U,w,E,A,T,R)},$e=(f,h,m,_,w,E,A,T,R)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?w.ctx.activate(h,m,_,A,R):yn(h,m,_,w,E,A,R):Ht(f,h,R)},yn=(f,h,m,_,w,E,A)=>{const T=f.component=Lf(f,_,w);if(rc(f)&&(T.ctx.renderer=C),Uf(T),T.asyncDep){if(w&&w.registerDep(T,le),!f.el){const R=T.subTree=re(Dn);k(null,R,h,m)}return}le(T,f,h,m,w,E,A)},Ht=(f,h,m)=>{const _=h.component=f.component;if(Ku(f,h,m))if(_.asyncDep&&!_.asyncResolved){Q(_,h,m);return}else _.next=h,Bu(_.update),_.update();else h.el=f.el,_.vnode=h},le=(f,h,m,_,w,E,A)=>{const T=()=>{if(f.isMounted){let{next:U,bu:D,u:F,parent:B,vnode:z}=f,ee=U,X;kt(f,!1),U?(U.el=z.el,Q(f,U,A)):U=z,D&&fr(D),(X=U.props&&U.props.onVnodeBeforeUpdate)&&He(X,B,U,z),kt(f,!0);const se=us(f),Oe=f.subTree;f.subTree=se,I(Oe,se,d(Oe.el),v(Oe),f,w,E),U.el=se.el,ee===null&&qu(f,se.el),F&&be(F,w),(X=U.props&&U.props.onVnodeUpdated)&&be(()=>He(X,B,U,z),w)}else{let U;const{el:D,props:F}=h,{bm:B,m:z,parent:ee}=f,X=hr(h);if(kt(f,!1),B&&fr(B),!X&&(U=F&&F.onVnodeBeforeMount)&&He(U,ee,h),kt(f,!0),D&&G){const se=()=>{f.subTree=us(f),G(D,f.subTree,f,w,null)};X?h.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=us(f);I(null,se,m,_,f,w,E),h.el=se.el}if(z&&be(z,w),!X&&(U=F&&F.onVnodeMounted)){const se=h;be(()=>He(U,ee,se),w)}(h.shapeFlag&256||ee&&hr(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&be(f.a,w),f.isMounted=!0,h=m=_=null}},R=f.effect=new pi(T,()=>wi(S),f.scope),S=f.update=()=>R.run();S.id=f.uid,kt(f,!0),S()},Q=(f,h,m)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,wf(f,h.props,_,m),Sf(f,h.children,m),pn(),to(),mn()},J=(f,h,m,_,w,E,A,T,R=!1)=>{const S=f&&f.children,U=f?f.shapeFlag:0,D=h.children,{patchFlag:F,shapeFlag:B}=h;if(F>0){if(F&128){dt(S,D,m,_,w,E,A,T,R);return}else if(F&256){tt(S,D,m,_,w,E,A,T,R);return}}B&8?(U&16&&de(S,w,E),D!==S&&l(m,D)):U&16?B&16?dt(S,D,m,_,w,E,A,T,R):de(S,w,E,!0):(U&8&&l(m,""),B&16&&Pe(D,m,_,w,E,A,T,R))},tt=(f,h,m,_,w,E,A,T,R)=>{f=f||Yt,h=h||Yt;const S=f.length,U=h.length,D=Math.min(S,U);let F;for(F=0;F<D;F++){const B=h[F]=R?_t(h[F]):Ve(h[F]);I(f[F],B,m,null,w,E,A,T,R)}S>U?de(f,w,E,!0,!1,D):Pe(h,m,_,w,E,A,T,R,D)},dt=(f,h,m,_,w,E,A,T,R)=>{let S=0;const U=h.length;let D=f.length-1,F=U-1;for(;S<=D&&S<=F;){const B=f[S],z=h[S]=R?_t(h[S]):Ve(h[S]);if(vn(B,z))I(B,z,m,null,w,E,A,T,R);else break;S++}for(;S<=D&&S<=F;){const B=f[D],z=h[F]=R?_t(h[F]):Ve(h[F]);if(vn(B,z))I(B,z,m,null,w,E,A,T,R);else break;D--,F--}if(S>D){if(S<=F){const B=F+1,z=B<U?h[B].el:_;for(;S<=F;)I(null,h[S]=R?_t(h[S]):Ve(h[S]),m,z,w,E,A,T,R),S++}}else if(S>F)for(;S<=D;)ye(f[S],w,E,!0),S++;else{const B=S,z=S,ee=new Map;for(S=z;S<=F;S++){const Ie=h[S]=R?_t(h[S]):Ve(h[S]);Ie.key!=null&&ee.set(Ie.key,S)}let X,se=0;const Oe=F-z+1;let Wt=!1,zi=0;const bn=new Array(Oe);for(S=0;S<Oe;S++)bn[S]=0;for(S=B;S<=D;S++){const Ie=f[S];if(se>=Oe){ye(Ie,w,E,!0);continue}let je;if(Ie.key!=null)je=ee.get(Ie.key);else for(X=z;X<=F;X++)if(bn[X-z]===0&&vn(Ie,h[X])){je=X;break}je===void 0?ye(Ie,w,E,!0):(bn[je-z]=S+1,je>=zi?zi=je:Wt=!0,I(Ie,h[je],m,null,w,E,A,T,R),se++)}const Wi=Wt?Cf(bn):Yt;for(X=Wi.length-1,S=Oe-1;S>=0;S--){const Ie=z+S,je=h[Ie],Ki=Ie+1<U?h[Ie+1].el:_;bn[S]===0?I(null,je,m,Ki,w,E,A,T,R):Wt&&(X<0||S!==Wi[X]?Be(je,m,Ki,2):X--)}}},Be=(f,h,m,_,w=null)=>{const{el:E,type:A,transition:T,children:R,shapeFlag:S}=f;if(S&6){Be(f.component.subTree,h,m,_);return}if(S&128){f.suspense.move(h,m,_);return}if(S&64){A.move(f,h,m,C);return}if(A===Se){r(E,h,m);for(let D=0;D<R.length;D++)Be(R[D],h,m,_);r(f.anchor,h,m);return}if(A===mr){V(f,h,m);return}if(_!==2&&S&1&&T)if(_===0)T.beforeEnter(E),r(E,h,m),be(()=>T.enter(E),w);else{const{leave:D,delayLeave:F,afterLeave:B}=T,z=()=>r(E,h,m),ee=()=>{D(E,()=>{z(),B&&B()})};F?F(E,z,ee):ee()}else r(E,h,m)},ye=(f,h,m,_=!1,w=!1)=>{const{type:E,props:A,ref:T,children:R,dynamicChildren:S,shapeFlag:U,patchFlag:D,dirs:F}=f;if(T!=null&&js(T,null,m,f,!0),U&256){h.ctx.deactivate(f);return}const B=U&1&&F,z=!hr(f);let ee;if(z&&(ee=A&&A.onVnodeBeforeUnmount)&&He(ee,h,f),U&6)nr(f.component,m,_);else{if(U&128){f.suspense.unmount(m,_);return}B&&Ot(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,m,w,C,_):S&&(E!==Se||D>0&&D&64)?de(S,h,m,!1,!0):(E===Se&&D&384||!w&&U&16)&&de(R,h,m),_&&Vt(f)}(z&&(ee=A&&A.onVnodeUnmounted)||B)&&be(()=>{ee&&He(ee,h,f),B&&Ot(f,null,h,"unmounted")},m)},Vt=f=>{const{type:h,el:m,anchor:_,transition:w}=f;if(h===Se){zt(m,_);return}if(h===mr){L(f);return}const E=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:T}=w,R=()=>A(m,E);T?T(f.el,E,R):R()}else E()},zt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},nr=(f,h,m)=>{const{bum:_,scope:w,update:E,subTree:A,um:T}=f;_&&fr(_),w.stop(),E&&(E.active=!1,ye(A,f,h,m)),T&&be(T,h),be(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},de=(f,h,m,_=!1,w=!1,E=0)=>{for(let A=E;A<f.length;A++)ye(f[A],h,m,_,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),O=(f,h,m)=>{f==null?h._vnode&&ye(h._vnode,null,null,!0):I(h._vnode||null,f,h,null,null,null,m),to(),Xa(),h._vnode=f},C={p:I,um:ye,m:Be,r:Vt,mt:yn,mc:Pe,pc:J,pbc:Te,n:v,o:t};let M,G;return e&&([M,G]=e(C)),{render:O,hydrate:M,createApp:bf(O,M)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mc(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_t(s[i]),a.el=o.el),n||mc(o,a)),a.type===Gr&&(a.el=o.el)}}function Cf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Af=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Rn=[];let De=null;function ve(t=!1){Rn.push(De=t?null:[])}function Pf(){Rn.pop(),De=Rn[Rn.length-1]||null}let Mn=1;function ho(t){Mn+=t}function gc(t){return t.dynamicChildren=Mn>0?De||Yt:null,Pf(),Mn>0&&De&&De.push(t),t}function Ce(t,e,n,r,s,i){return gc(P(t,e,n,r,s,i,!0))}function po(t,e,n,r,s){return gc(re(t,e,n,r,s,!0))}function Hs(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const Yr="__vInternal",_c=({key:t})=>t??null,gr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||pe(t)||H(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_c(e),ref:e&&gr(e),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?(Si(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Mn>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const re=Of;function Of(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uf)&&(t=Dn),Hs(t)){const a=on(t,e,!0);return n&&Si(a,n),Mn>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(t)]=a:De.push(a)),a.patchFlag|=-2,a}if(Hf(t)&&(t=t.__vccOpts),e){e=kf(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=di(a)),ne(c)&&(Ha(c)&&!$(c)&&(c=ue({},c)),e.style=fi(c))}const o=ce(t)?1:Ju(t)?128:Af(t)?64:ne(t)?4:H(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function kf(t){return t?Ha(t)||Yr in t?ue({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?xf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_c(a),ref:e&&e.ref?n&&s?$(s)?s.concat(gr(e)):[s,gr(e)]:gr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _r(t=" ",e=0){return re(Gr,null,t,e)}function Nf(t,e){const n=re(mr,null,t);return n.staticCount=e,n}function Ve(t){return t==null||typeof t=="boolean"?re(Dn):$(t)?re(Se,null,t.slice()):typeof t=="object"?_t(t):re(Gr,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function Si(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Si(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yr in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[_r(e)]):n=8);t.children=e,t.shapeFlag|=n}function xf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=di([e.class,r.class]));else if(s==="style")e.style=fi([e.style,r.style]);else if($r(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Le(t,e,7,[n,r])}const Df=lc();let Mf=0;function Lf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Df,i={uid:Mf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fc(r,s),emitsOptions:Za(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vu.bind(null,i),t.ce&&t.ce(i),i}let fe=null,Ti,Kt,mo="__VUE_INSTANCE_SETTERS__";(Kt=Os()[mo])||(Kt=Os()[mo]=[]),Kt.push(t=>fe=t),Ti=t=>{Kt.length>1?Kt.forEach(e=>e(t)):Kt[0](t)};const an=t=>{Ti(t),t.scope.on()},Ft=()=>{fe&&fe.scope.off(),Ti(null)};function yc(t){return t.vnode.shapeFlag&4}let Ln=!1;function Uf(t,e=!1){Ln=e;const{props:n,children:r}=t.vnode,s=yc(t);vf(t,n,s,e),If(t,r);const i=s?Ff(t,e):void 0;return Ln=!1,i}function Ff(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Va(new Proxy(t.ctx,df));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Bf(t):null;an(t),pn();const i=It(r,t,0,[t.props,s]);if(mn(),Ft(),Ta(i)){if(i.then(Ft,Ft),e)return i.then(o=>{go(t,o,e)}).catch(o=>{Wr(o,t,0)});t.asyncDep=i}else go(t,i,e)}else bc(t,e)}function go(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=qa(e)),bc(t,n)}let _o;function bc(t,e,n){const r=t.type;if(!t.render){if(!e&&_o&&!r.render){const s=r.template||Ei(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ue(ue({isCustomElement:i,delimiters:a},o),c);r.render=_o(s,u)}}t.render=r.render||Me}an(t),pn(),hf(t),mn(),Ft()}function $f(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}}))}function Bf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $f(t)},slots:t.slots,emit:t.emit,expose:e}}function Xr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qa(Va(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tn)return Tn[n](t)},has(e,n){return n in e||n in Tn}}))}function jf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Hf(t){return H(t)&&"__vccOpts"in t}const xe=(t,e)=>Uu(t,e,Ln);function vc(t,e,n){const r=arguments.length;return r===2?ne(e)&&!$(e)?Hs(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hs(n)&&(n=[n]),re(t,e,n))}const Vf=Symbol.for("v-scx"),zf=()=>ot(Vf),Wf="3.3.4",Kf="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,yo=Dt&&Dt.createElement("template"),qf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Dt.createElementNS(Kf,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=r?`<svg>${t}</svg>`:t;const a=yo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gf(t,e,n){const r=t.style,s=ce(n);if(n&&!s){if(e&&!ce(e))for(const i in e)n[i]==null&&Vs(r,i,"");for(const i in n)Vs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const bo=/\s*!important$/;function Vs(t,e,n){if($(n))n.forEach(r=>Vs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yf(t,e);bo.test(n)?t.setProperty(hn(r),n.replace(bo,""),"important"):t[r]=n}}const vo=["Webkit","Moz","ms"],ds={};function Yf(t,e){const n=ds[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return ds[e]=r;r=Hr(r);for(let s=0;s<vo.length;s++){const i=vo[s]+r;if(i in t)return ds[e]=i}return e}const wo="http://www.w3.org/1999/xlink";function Xf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wo,e.slice(6,e.length)):t.setAttributeNS(wo,e,n);else{const i=nu(e);n==null||i&&!Aa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Qf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Aa(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function qt(t,e,n,r){t.addEventListener(e,n,r)}function Zf(t,e,n,r){t.removeEventListener(e,n,r)}function ed(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=td(e);if(r){const u=i[e]=sd(r,s);qt(t,a,u,c)}else o&&(Zf(t,a,o,c),i[e]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function td(t){let e;if(Eo.test(t)){e={};let r;for(;r=t.match(Eo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let hs=0;const nd=Promise.resolve(),rd=()=>hs||(nd.then(()=>hs=0),hs=Date.now());function sd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(id(r,n.value),e,5,[r])};return n.value=t,n.attached=rd(),n}function id(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Io=/^on[a-z]/,od=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Jf(t,r,s):e==="style"?Gf(t,n,r):$r(e)?ai(e)||ed(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ad(t,e,r,s))?Qf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xf(t,e,r,s))};function ad(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Io.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Io.test(e)&&ce(n)?!1:e in t}const So=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>fr(e,n):e};function cd(t){t.target.composing=!0}function To(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=So(s);const i=r||s.props&&s.props.type==="number";qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ps(a)),t._assign(a)}),n&&qt(t,"change",()=>{t.value=t.value.trim()}),e||(qt(t,"compositionstart",cd),qt(t,"compositionend",To),qt(t,"change",To))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=So(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ps(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ld=["ctrl","shift","alt","meta"],ud={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ld.some(n=>t[`${n}Key`]&&!e.includes(n))},wc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ud[e[s]];if(i&&i(n,e))return}return t(n,...r)},fd=ue({patchProp:od},qf);let Ro;function dd(){return Ro||(Ro=Tf(fd))}const hd=(...t)=>{const e=dd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pd(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function pd(t){return ce(t)?document.querySelector(t):t}const ps="/assets/github-24a2bb69.png",md="/assets/linkedin-d839da4c.png",gd="/assets/instagram-f9083aa6.png";const Qe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_d={name:"AppBar"},yd={id:"appbar1"},bd=Nf('<div data-v-b5588708><a href="https://github.com/atishayj2202/Forum-Backend" target="_blank" rel="noopener" data-v-b5588708><img src="'+ps+'" height="100%" data-v-b5588708></a></div><div data-v-b5588708><a href="https://www.linkedin.com/in/atishaya-jain-5215b7169/" target="_blank" rel="noopener" data-v-b5588708><img src="'+md+'" height="100%" data-v-b5588708></a></div><div data-v-b5588708><a href="https://www.github.com/atishayj2202/" target="_blank" rel="noopener" data-v-b5588708><img src="'+ps+'" height="100%" data-v-b5588708></a></div><div data-v-b5588708><a href="https://www.instagram.com/atishayj2202/" target="_blank" rel="noopener" data-v-b5588708><img src="'+gd+'" height="100%" data-v-b5588708></a></div><div data-v-b5588708><a href="https://github.com/atishayj2202/Community-Forum" target="_blank" rel="noopener" data-v-b5588708><img src="'+ps+'" height="100%" data-v-b5588708></a></div>',5),vd=[bd];function wd(t,e,n,r,s,i){return ve(),Ce("div",yd,vd)}const Ed=Qe(_d,[["render",wd],["__scopeId","data-v-b5588708"]]),Id="/assets/logo-b12d6f39.png";const Sd={name:"Mainbar",methods:{openNav:function(){document.getElementById("myNav").style.width="100%"},closeNav:function(t){document.getElementById("myNav").style.width="0",this.$router.push(t);const e=document.getElementById("abx");e.style.visibility="hidden",e.style.height="0"}}},Td=t=>(Vn("data-v-b5811576"),t=t(),zn(),t),Rd={id:"appbar1"},Cd=Td(()=>P("img",{src:Id,style:{height:"80px"}},null,-1)),Ad={class:"bigger"},Pd={class:"smaller"},Od={class:"xyz"},kd={id:"myNav",class:"overlay"},Nd={class:"overlay-content"};function xd(t,e,n,r,s,i){const o=St("router-link");return ve(),Ce("div",Rd,[P("div",null,[re(o,{to:"/"},{default:Gt(()=>[Cd]),_:1})]),P("div",Ad,[P("ul",null,[P("li",null,[re(o,{to:"/"},{default:Gt(()=>[_r("Recent")]),_:1})]),P("li",null,[re(o,{to:"/new"},{default:Gt(()=>[_r("New Post")]),_:1})]),P("li",null,[re(o,{to:"/profile"},{default:Gt(()=>[_r("Profile")]),_:1})])])]),P("div",Pd,[P("div",Od,[P("a",{onClick:e[0]||(e[0]=a=>i.openNav()),style:{cursor:"grab"}},"☰")]),P("div",kd,[P("a",{href:"javascript:void(0)",class:"closebtn",onClick:e[1]||(e[1]=a=>i.closeNav(""))},"X"),P("div",Nd,[P("a",{onClick:e[2]||(e[2]=a=>i.closeNav("/"))},"Recent"),P("a",{onClick:e[3]||(e[3]=a=>i.closeNav("/new"))},"New Post"),P("a",{onClick:e[4]||(e[4]=a=>i.closeNav("/profile"))},"Profile")])])])])}const Dd=Qe(Sd,[["render",xd],["__scopeId","data-v-b5811576"]]);const Md={name:"App",components:{Appbar:Ed,Mainbar:Dd},mounted(){document.body.style.backgroundColor="#27282c"}};function Ld(t,e,n,r,s,i){const o=St("Appbar"),a=St("Mainbar"),c=St("router-view");return ve(),Ce(Se,null,[re(o),re(a),re(c)],64)}const Ud=Qe(Md,[["render",Ld]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof window<"u";function Fd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Y=Object.assign;function ms(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const Cn=()=>{},Ue=Array.isArray,$d=/\/$/,Bd=t=>t.replace($d,"");function gs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=zd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function jd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(e.matched[r],n.matched[s])&&Ec(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ec(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vd(t[n],e[n]))return!1;return!0}function Vd(t,e){return Ue(t)?Ao(t,e):Ue(e)?Ao(e,t):t===e}function Ao(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Un;(function(t){t.pop="pop",t.push="push"})(Un||(Un={}));var An;(function(t){t.back="back",t.forward="forward",t.unknown=""})(An||(An={}));function Wd(t){if(!t)if(Jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Bd(t)}const Kd=/^[^#]+#/;function qd(t,e){return t.replace(Kd,"#")+e}function Jd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Jd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const Ws=new Map;function Yd(t,e){Ws.set(t,e)}function Xd(t){const e=Ws.get(t);return Ws.delete(t),e}let Qd=()=>location.protocol+"//"+location.host;function Ic(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Co(c,"")}return Co(n,t)+r+s}function Zd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=Ic(t,location),g=n.value,I=e.value;let x=0;if(p){if(n.value=y,e.value=p,o&&o===g){o=null;return}x=I?p.position-I.position:0}else r(y);s.forEach(k=>{k(n.value,g,{delta:x,type:Un.pop,direction:x?x>0?An.forward:An.back:An.unknown})})};function c(){o=n.value}function u(p){s.push(p);const y=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(y),y}function l(){const{history:p}=window;p.state&&p.replaceState(Y({},p.state,{scroll:Qr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qr():null}}function eh(t){const{history:e,location:n}=window,r={value:Ic(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Qd()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(y){console.error(y),n[l?"replace":"assign"](p)}}function o(c,u){const l=Y({},e.state,Oo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Y({},s.value,e.state,{forward:c,scroll:Qr()});i(l.current,l,!0);const d=Y({},Oo(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function th(t){t=Wd(t);const e=eh(t),n=Zd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:qd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nh(t){return typeof t=="string"||t&&typeof t=="object"}function Sc(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tc=Symbol("");var ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ko||(ko={}));function ln(t,e){return Y(new Error,{type:t,[Tc]:!0},e)}function nt(t,e){return t instanceof Error&&Tc in t&&(e==null||!!(t.type&e))}const No="[^/]+?",rh={sensitive:!1,strict:!1,start:!0,end:!0},sh=/[.+*?^${}()[\]/\\]/g;function ih(t,e){const n=Y({},rh,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let y=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(sh,"\\$&"),y+=40;else if(p.type===1){const{value:g,repeatable:I,optional:x,regexp:k}=p;i.push({name:g,repeatable:I,optional:x});const N=k||No;if(N!==No){y+=10;try{new RegExp(`(${N})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${g}" (${N}): `+L.message)}}let V=I?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(V=x&&u.length<2?`(?:/${V})`:"/"+V),x&&(V+="?"),s+=V,y+=20,x&&(y+=-8),I&&(y+=-20),N===".*"&&(y+=-50)}l.push(y)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let p=1;p<l.length;p++){const y=l[p]||"",g=i[p-1];d[g.name]=y&&g.repeatable?y.split("/"):y}return d}function c(u){let l="",d=!1;for(const p of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const y of p)if(y.type===0)l+=y.value;else if(y.type===1){const{value:g,repeatable:I,optional:x}=y,k=g in u?u[g]:"";if(Ue(k)&&!I)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const N=Ue(k)?k.join("/"):k;if(!N)if(x)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);l+=N}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function oh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ah(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=oh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xo(r))return 1;if(xo(s))return-1}return s.length-r.length}function xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ch={type:0,value:""},lh=/[a-zA-Z0-9_]/;function uh(t){if(!t)return[[]];if(t==="/")return[[ch]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:lh.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function fh(t,e,n){const r=ih(uh(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dh(t,e){const n=[],r=new Map;e=Lo({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,d,p){const y=!p,g=hh(l);g.aliasOf=p&&p.record;const I=Lo(e,l),x=[g];if("alias"in l){const V=typeof l.alias=="string"?[l.alias]:l.alias;for(const L of V)x.push(Y({},g,{components:p?p.record.components:g.components,path:L,aliasOf:p?p.record:g}))}let k,N;for(const V of x){const{path:L}=V;if(d&&L[0]!=="/"){const oe=d.record.path,ae=oe[oe.length-1]==="/"?"":"/";V.path=d.record.path+(L&&ae+L)}if(k=fh(V,d,I),p?p.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),y&&l.name&&!Mo(k)&&o(l.name)),g.children){const oe=g.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],k,p&&p.children[ae])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return N?()=>{o(N)}:Cn}function o(l){if(Sc(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&ah(l,n[d])>=0&&(l.record.path!==n[d].record.path||!Rc(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!Mo(l)&&r.set(l.record.name,l)}function u(l,d){let p,y={},g,I;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw ln(1,{location:l});I=p.record.name,y=Y(Do(d.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),l.params&&Do(l.params,p.keys.map(N=>N.name))),g=p.stringify(y)}else if("path"in l)g=l.path,p=n.find(N=>N.re.test(g)),p&&(y=p.parse(g),I=p.record.name);else{if(p=d.name?r.get(d.name):n.find(N=>N.re.test(d.path)),!p)throw ln(1,{location:l,currentLocation:d});I=p.record.name,y=Y({},d.params,l.params),g=p.stringify(y)}const x=[];let k=p;for(;k;)x.unshift(k.record),k=k.parent;return{name:I,path:g,params:y,matched:x,meta:mh(x)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Do(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ph(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ph(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Mo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mh(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function Lo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rc(t,e){return e.children.some(n=>n===t||Rc(t,n))}const Cc=/#/g,gh=/&/g,_h=/\//g,yh=/=/g,bh=/\?/g,Ac=/\+/g,vh=/%5B/g,wh=/%5D/g,Pc=/%5E/g,Eh=/%60/g,Oc=/%7B/g,Ih=/%7C/g,kc=/%7D/g,Sh=/%20/g;function Ri(t){return encodeURI(""+t).replace(Ih,"|").replace(vh,"[").replace(wh,"]")}function Th(t){return Ri(t).replace(Oc,"{").replace(kc,"}").replace(Pc,"^")}function Ks(t){return Ri(t).replace(Ac,"%2B").replace(Sh,"+").replace(Cc,"%23").replace(gh,"%26").replace(Eh,"`").replace(Oc,"{").replace(kc,"}").replace(Pc,"^")}function Rh(t){return Ks(t).replace(yh,"%3D")}function Ch(t){return Ri(t).replace(Cc,"%23").replace(bh,"%3F")}function Ah(t){return t==null?"":Ch(t).replace(_h,"%2F")}function Or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ph(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ac," "),o=i.indexOf("="),a=Or(o<0?i:i.slice(0,o)),c=o<0?null:Or(i.slice(o+1));if(a in e){let u=e[a];Ue(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Uo(t){let e="";for(let n in t){const r=t[n];if(n=Rh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&Ks(i)):[r&&Ks(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Oh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const kh=Symbol(""),Fo=Symbol(""),Ci=Symbol(""),Nc=Symbol(""),qs=Symbol("");function wn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(ln(4,{from:n,to:e})):d instanceof Error?a(d):nh(d)?a(ln(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function _s(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Nh(a)){const u=(a.__vccOpts||a)[e];u&&s.push(yt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Fd(u)?u.default:u;i.components[o]=l;const p=(l.__vccOpts||l)[e];return p&&yt(p,n,r,i,o)()}))}}return s}function Nh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $o(t){const e=ot(Ci),n=ot(Nc),r=xe(()=>e.resolve(Zt(t.to))),s=xe(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(cn.bind(null,l));if(p>-1)return p;const y=Bo(c[u-2]);return u>1&&Bo(l)===y&&d[d.length-1].path!==y?d.findIndex(cn.bind(null,c[u-2])):p}),i=xe(()=>s.value>-1&&Lh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ec(n.params,r.value.params));function a(c={}){return Mh(c)?e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(Cn):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const xh=nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(t,{slots:e}){const n=zr($o(t)),{options:r}=ot(Ci),s=xe(()=>({[jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dh=xh;function Mh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t??e??n,Uh=nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ot(qs),s=xe(()=>t.route||r.value),i=ot(Fo,0),o=xe(()=>{let u=Zt(i);const{matched:l}=s.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=xe(()=>s.value.matched[o.value]);pr(Fo,xe(()=>o.value+1)),pr(kh,a),pr(qs,s);const c=Nu();return dr(()=>[c.value,a.value,t.name],([u,l,d],[p,y,g])=>{l&&(l.instances[d]=u,y&&y!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),u&&l&&(!y||!cn(l,y)||!p)&&(l.enterCallbacks[d]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,d=a.value,p=d&&d.components[l];if(!p)return Ho(n.default,{Component:p,route:u});const y=d.props[l],g=y?y===!0?u.params:typeof y=="function"?y(u):y:null,x=vc(p,Y({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Ho(n.default,{Component:x,route:u})||x}}});function Ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fh=Uh;function $h(t){const e=dh(t.routes,t),n=t.parseQuery||Ph,r=t.stringifyQuery||Uo,s=t.history,i=wn(),o=wn(),a=wn(),c=xu(pt);let u=pt;Jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ms.bind(null,v=>""+v),d=ms.bind(null,Ah),p=ms.bind(null,Or);function y(v,O){let C,M;return Sc(v)?(C=e.getRecordMatcher(v),M=O):M=v,e.addRoute(M,C)}function g(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function I(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function k(v,O){if(O=Y({},O||c.value),typeof v=="string"){const m=gs(n,v,O.path),_=e.resolve({path:m.path},O),w=s.createHref(m.fullPath);return Y(m,_,{params:p(_.params),hash:Or(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in v)C=Y({},v,{path:gs(n,v.path,O.path).path});else{const m=Y({},v.params);for(const _ in m)m[_]==null&&delete m[_];C=Y({},v,{params:d(m)}),O.params=d(O.params)}const M=e.resolve(C,O),G=v.hash||"";M.params=l(p(M.params));const f=jd(r,Y({},v,{hash:Th(G),path:M.path})),h=s.createHref(f);return Y({fullPath:f,hash:G,query:r===Uo?Oh(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function N(v){return typeof v=="string"?gs(n,v,c.value.path):Y({},v)}function V(v,O){if(u!==v)return ln(8,{from:O,to:v})}function L(v){return Ee(v)}function oe(v){return L(Y(N(v),{replace:!0}))}function ae(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),Y({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function Ee(v,O){const C=u=k(v),M=c.value,G=v.state,f=v.force,h=v.replace===!0,m=ae(C);if(m)return Ee(Y(N(m),{state:typeof m=="object"?Y({},G,m.state):G,force:f,replace:h}),O||C);const _=C;_.redirectedFrom=O;let w;return!f&&Hd(r,M,C)&&(w=ln(16,{to:_,from:M}),Be(M,M,!0,!1)),(w?Promise.resolve(w):Te(_,M)).catch(E=>nt(E)?nt(E,2)?E:dt(E):J(E,_,M)).then(E=>{if(E){if(nt(E,2))return Ee(Y({replace:h},N(E.to),{state:typeof E.to=="object"?Y({},G,E.to.state):G,force:f}),O||_)}else E=Pt(_,M,!0,h,G);return ft(_,M,E),E})}function Pe(v,O){const C=V(v,O);return C?Promise.reject(C):Promise.resolve()}function Fe(v){const O=zt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Te(v,O){let C;const[M,G,f]=Bh(v,O);C=_s(M.reverse(),"beforeRouteLeave",v,O);for(const m of M)m.leaveGuards.forEach(_=>{C.push(yt(_,v,O))});const h=Pe.bind(null,v,O);return C.push(h),de(C).then(()=>{C=[];for(const m of i.list())C.push(yt(m,v,O));return C.push(h),de(C)}).then(()=>{C=_s(G,"beforeRouteUpdate",v,O);for(const m of G)m.updateGuards.forEach(_=>{C.push(yt(_,v,O))});return C.push(h),de(C)}).then(()=>{C=[];for(const m of f)if(m.beforeEnter)if(Ue(m.beforeEnter))for(const _ of m.beforeEnter)C.push(yt(_,v,O));else C.push(yt(m.beforeEnter,v,O));return C.push(h),de(C)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),C=_s(f,"beforeRouteEnter",v,O),C.push(h),de(C))).then(()=>{C=[];for(const m of o.list())C.push(yt(m,v,O));return C.push(h),de(C)}).catch(m=>nt(m,8)?m:Promise.reject(m))}function ft(v,O,C){a.list().forEach(M=>Fe(()=>M(v,O,C)))}function Pt(v,O,C,M,G){const f=V(v,O);if(f)return f;const h=O===pt,m=Jt?history.state:{};C&&(M||h?s.replace(v.fullPath,Y({scroll:h&&m&&m.scroll},G)):s.push(v.fullPath,G)),c.value=v,Be(v,O,C,h),dt()}let $e;function yn(){$e||($e=s.listen((v,O,C)=>{if(!nr.listening)return;const M=k(v),G=ae(M);if(G){Ee(Y(G,{replace:!0}),M).catch(Cn);return}u=M;const f=c.value;Jt&&Yd(Po(f.fullPath,C.delta),Qr()),Te(M,f).catch(h=>nt(h,12)?h:nt(h,2)?(Ee(h.to,M).then(m=>{nt(m,20)&&!C.delta&&C.type===Un.pop&&s.go(-1,!1)}).catch(Cn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),J(h,M,f))).then(h=>{h=h||Pt(M,f,!1),h&&(C.delta&&!nt(h,8)?s.go(-C.delta,!1):C.type===Un.pop&&nt(h,20)&&s.go(-1,!1)),ft(M,f,h)}).catch(Cn)}))}let Ht=wn(),le=wn(),Q;function J(v,O,C){dt(v);const M=le.list();return M.length?M.forEach(G=>G(v,O,C)):console.error(v),Promise.reject(v)}function tt(){return Q&&c.value!==pt?Promise.resolve():new Promise((v,O)=>{Ht.add([v,O])})}function dt(v){return Q||(Q=!v,yn(),Ht.list().forEach(([O,C])=>v?C(v):O()),Ht.reset()),v}function Be(v,O,C,M){const{scrollBehavior:G}=t;if(!Jt||!G)return Promise.resolve();const f=!C&&Xd(Po(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return Ga().then(()=>G(v,O,f)).then(h=>h&&Gd(h)).catch(h=>J(h,v,O))}const ye=v=>s.go(v);let Vt;const zt=new Set,nr={currentRoute:c,listening:!0,addRoute:y,removeRoute:g,hasRoute:x,getRoutes:I,resolve:k,options:t,push:L,replace:oe,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:tt,install(v){const O=this;v.component("RouterLink",Dh),v.component("RouterView",Fh),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(c)}),Jt&&!Vt&&c.value===pt&&(Vt=!0,L(s.location).catch(G=>{}));const C={};for(const G in pt)Object.defineProperty(C,G,{get:()=>c.value[G],enumerable:!0});v.provide(Ci,O),v.provide(Nc,Ba(C)),v.provide(qs,c);const M=v.unmount;zt.add(v),v.unmount=function(){zt.delete(v),zt.size<1&&(u=pt,$e&&$e(),$e=null,c.value=pt,Vt=!1,Q=!1),M()}}};function de(v){return v.reduce((O,C)=>O.then(()=>Fe(C)),Promise.resolve())}return nr}function Bh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>cn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>cn(u,c))||s.push(c))}return[n,r,s]}const jh={name:"PostTile",props:{post:Object},computed:{limit_body(){return this.post.body.length>=200?this.post.body.slice(0,200)+"...":this.post.body}}},Hh={class:"post-tile"},Vh={id:"Bar"};function zh(t,e,n,r,s,i){const o=St("router-link");return ve(),Ce("div",Hh,[re(o,{to:"/post/"+n.post.id},{default:Gt(()=>[P("h2",null,_e(n.post.title),1),P("h4",null,"By "+_e(n.post.author_name),1),P("p",null,_e(i.limit_body),1),P("div",Vh,[P("div",null,"👍 "+_e(n.post.likes),1),P("div",null,"💬 "+_e(n.post.comments),1),P("div",null,"👎 "+_e(n.post.unlikes),1)])]),_:1},8,["to"])])}const Wh=Qe(jh,[["render",zh],["__scopeId","data-v-cd0415b1"]]);function xc(t,e){return function(){return t.apply(e,arguments)}}const{toString:Kh}=Object.prototype,{getPrototypeOf:Ai}=Object,Zr=(t=>e=>{const n=Kh.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ze=t=>(t=t.toLowerCase(),e=>Zr(e)===t),es=t=>e=>typeof e===t,{isArray:gn}=Array,Fn=es("undefined");function qh(t){return t!==null&&!Fn(t)&&t.constructor!==null&&!Fn(t.constructor)&&Ae(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Dc=Ze("ArrayBuffer");function Jh(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Dc(t.buffer),e}const Gh=es("string"),Ae=es("function"),Mc=es("number"),ts=t=>t!==null&&typeof t=="object",Yh=t=>t===!0||t===!1,yr=t=>{if(Zr(t)!=="object")return!1;const e=Ai(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Xh=Ze("Date"),Qh=Ze("File"),Zh=Ze("Blob"),ep=Ze("FileList"),tp=t=>ts(t)&&Ae(t.pipe),np=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ae(t.append)&&((e=Zr(t))==="formdata"||e==="object"&&Ae(t.toString)&&t.toString()==="[object FormData]"))},rp=Ze("URLSearchParams"),sp=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),gn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Lc(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Uc=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fc=t=>!Fn(t)&&t!==Uc;function Js(){const{caseless:t}=Fc(this)&&this||{},e={},n=(r,s)=>{const i=t&&Lc(e,s)||s;yr(e[i])&&yr(r)?e[i]=Js(e[i],r):yr(r)?e[i]=Js({},r):gn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Wn(arguments[r],n);return e}const ip=(t,e,n,{allOwnKeys:r}={})=>(Wn(e,(s,i)=>{n&&Ae(s)?t[i]=xc(s,n):t[i]=s},{allOwnKeys:r}),t),op=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ap=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},cp=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ai(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lp=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},up=t=>{if(!t)return null;if(gn(t))return t;let e=t.length;if(!Mc(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},fp=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ai(Uint8Array)),dp=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},hp=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},pp=Ze("HTMLFormElement"),mp=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Vo=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),gp=Ze("RegExp"),$c=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Wn(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},_p=t=>{$c(t,(e,n)=>{if(Ae(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ae(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yp=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return gn(t)?r(t):r(String(t).split(e)),n},bp=()=>{},vp=(t,e)=>(t=+t,Number.isFinite(t)?t:e),ys="abcdefghijklmnopqrstuvwxyz",zo="0123456789",Bc={DIGIT:zo,ALPHA:ys,ALPHA_DIGIT:ys+ys.toUpperCase()+zo},wp=(t=16,e=Bc.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ep(t){return!!(t&&Ae(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ip=t=>{const e=new Array(10),n=(r,s)=>{if(ts(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=gn(r)?[]:{};return Wn(r,(o,a)=>{const c=n(o,s+1);!Fn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Sp=Ze("AsyncFunction"),Tp=t=>t&&(ts(t)||Ae(t))&&Ae(t.then)&&Ae(t.catch),b={isArray:gn,isArrayBuffer:Dc,isBuffer:qh,isFormData:np,isArrayBufferView:Jh,isString:Gh,isNumber:Mc,isBoolean:Yh,isObject:ts,isPlainObject:yr,isUndefined:Fn,isDate:Xh,isFile:Qh,isBlob:Zh,isRegExp:gp,isFunction:Ae,isStream:tp,isURLSearchParams:rp,isTypedArray:fp,isFileList:ep,forEach:Wn,merge:Js,extend:ip,trim:sp,stripBOM:op,inherits:ap,toFlatObject:cp,kindOf:Zr,kindOfTest:Ze,endsWith:lp,toArray:up,forEachEntry:dp,matchAll:hp,isHTMLForm:pp,hasOwnProperty:Vo,hasOwnProp:Vo,reduceDescriptors:$c,freezeMethods:_p,toObjectSet:yp,toCamelCase:mp,noop:bp,toFiniteNumber:vp,findKey:Lc,global:Uc,isContextDefined:Fc,ALPHABET:Bc,generateString:wp,isSpecCompliantForm:Ep,toJSONObject:Ip,isAsyncFn:Sp,isThenable:Tp};function W(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jc=W.prototype,Hc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Hc[t]={value:t}});Object.defineProperties(W,Hc);Object.defineProperty(jc,"isAxiosError",{value:!0});W.from=(t,e,n,r,s,i)=>{const o=Object.create(jc);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Rp=null;function Gs(t){return b.isPlainObject(t)||b.isArray(t)}function Vc(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function Wo(t,e,n){return t?t.concat(e).map(function(s,i){return s=Vc(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Cp(t){return b.isArray(t)&&!t.some(Gs)}const Ap=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function ns(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,x){return!b.isUndefined(x[I])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!c&&b.isBlob(g))throw new W("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function l(g,I,x){let k=g;if(g&&!x&&typeof g=="object"){if(b.endsWith(I,"{}"))I=r?I:I.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&Cp(g)||(b.isFileList(g)||b.endsWith(I,"[]"))&&(k=b.toArray(g)))return I=Vc(I),k.forEach(function(V,L){!(b.isUndefined(V)||V===null)&&e.append(o===!0?Wo([I],L,i):o===null?I:I+"[]",u(V))}),!1}return Gs(g)?!0:(e.append(Wo(x,I,i),u(g)),!1)}const d=[],p=Object.assign(Ap,{defaultVisitor:l,convertValue:u,isVisitable:Gs});function y(g,I){if(!b.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+I.join("."));d.push(g),b.forEach(g,function(k,N){(!(b.isUndefined(k)||k===null)&&s.call(e,k,b.isString(N)?N.trim():N,I,p))===!0&&y(k,I?I.concat(N):[N])}),d.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return y(t),e}function Ko(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pi(t,e){this._pairs=[],t&&ns(t,this,e)}const zc=Pi.prototype;zc.append=function(e,n){this._pairs.push([e,n])};zc.toString=function(e){const n=e?function(r){return e.call(this,r,Ko)}:Ko;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pp(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wc(t,e,n){if(!e)return t;const r=n&&n.encode||Pp,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Pi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Op{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const qo=Op,Kc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kp=typeof URLSearchParams<"u"?URLSearchParams:Pi,Np=typeof FormData<"u"?FormData:null,xp=typeof Blob<"u"?Blob:null,Dp=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mp=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),qe={isBrowser:!0,classes:{URLSearchParams:kp,FormData:Np,Blob:xp},isStandardBrowserEnv:Dp,isStandardBrowserWebWorkerEnv:Mp,protocols:["http","https","file","blob","url","data"]};function Lp(t,e){return ns(t,new qe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return qe.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Up(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Fp(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function qc(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Fp(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Up(r),s,n,0)}),n}return null}function $p(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Oi={transitional:Kc,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(qc(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lp(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ns(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$p(e)):e}],transformResponse:[function(e){const n=this.transitional||Oi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qe.classes.FormData,Blob:qe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Oi.headers[t]={}});const ki=Oi,Bp=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jp=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Bp[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Jo=Symbol("internals");function En(t){return t&&String(t).trim().toLowerCase()}function br(t){return t===!1||t==null?t:b.isArray(t)?t.map(br):String(t)}function Hp(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Vp=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function bs(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function zp(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Wp(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class rs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=En(c);if(!l)throw new Error("header name must be a non-empty string");const d=b.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||c]=br(a))}const o=(a,c)=>b.forEach(a,(u,l)=>i(u,l,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Vp(e)?o(jp(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=En(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Hp(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=En(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||bs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=En(o),o){const a=b.findKey(r,o);a&&(!n||bs(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||bs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=br(s),delete n[i];return}const a=e?zp(i):String(i).trim();a!==i&&delete n[i],n[a]=br(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Jo]=this[Jo]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=En(o);r[a]||(Wp(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}rs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(rs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(rs);const at=rs;function vs(t,e){const n=this||ki,r=e||n,s=at.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Jc(t){return!!(t&&t.__CANCEL__)}function Kn(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(Kn,W,{__CANCEL__:!0});function Kp(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qp=qe.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),b.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),b.isString(i)&&c.push("path="+i),b.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Jp(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Gp(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Gc(t,e){return t&&!Jp(e)?Gp(t,e):e}const Yp=qe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Xp(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Qp(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const y=l&&u-l;return y?Math.round(p*1e3/y):void 0}}function Go(t,e){let n=0;const r=Qp(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const Zp=typeof XMLHttpRequest<"u",em=Zp&&function(t){return new Promise(function(n,r){let s=t.data;const i=at.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let u;b.isFormData(s)&&(qe.isStandardBrowserEnv||qe.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?b.isString(u=i.getContentType())&&i.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",I=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+I))}const d=Gc(t.baseURL,t.url);l.open(t.method.toUpperCase(),Wc(d,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function p(){if(!l)return;const g=at.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),x={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:t,request:l};Kp(function(N){n(N),c()},function(N){r(N),c()},x),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new W("Request aborted",W.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let I=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const x=t.transitional||Kc;t.timeoutErrorMessage&&(I=t.timeoutErrorMessage),r(new W(I,x.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,l)),l=null},qe.isStandardBrowserEnv){const g=(t.withCredentials||Yp(d))&&t.xsrfCookieName&&qp.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&b.forEach(i.toJSON(),function(I,x){l.setRequestHeader(x,I)}),b.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",Go(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Go(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{l&&(r(!g||g.type?new Kn(null,t,l):g),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const y=Xp(d);if(y&&qe.protocols.indexOf(y)===-1){r(new W("Unsupported protocol "+y+":",W.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Ys={http:Rp,xhr:em};b.forEach(Ys,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Yo=t=>`- ${t}`,tm=t=>b.isFunction(t)||t===null||t===!1,Yc={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!tm(n)&&(r=Ys[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Yo).join(`
`):" "+Yo(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ys};function ws(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kn(null,t)}function Xo(t){return ws(t),t.headers=at.from(t.headers),t.data=vs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Yc.getAdapter(t.adapter||ki.adapter)(t).then(function(r){return ws(t),r.data=vs.call(t,t.transformResponse,r),r.headers=at.from(r.headers),r},function(r){return Jc(r)||(ws(t),r&&r.response&&(r.response.data=vs.call(t,t.transformResponse,r.response),r.response.headers=at.from(r.response.headers))),Promise.reject(r)})}const Qo=t=>t instanceof at?t.toJSON():t;function un(t,e){e=e||{};const n={};function r(u,l,d){return b.isPlainObject(u)&&b.isPlainObject(l)?b.merge.call({caseless:d},u,l):b.isPlainObject(l)?b.merge({},l):b.isArray(l)?l.slice():l}function s(u,l,d){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function i(u,l){if(!b.isUndefined(l))return r(void 0,l)}function o(u,l){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,d){if(d in e)return r(u,l);if(d in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Qo(u),Qo(l),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(l){const d=c[l]||s,p=d(t[l],e[l],l);b.isUndefined(p)&&d!==a||(n[l]=p)}),n}const Xc="1.5.1",Ni={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ni[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Zo={};Ni.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Xc+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!Zo[o]&&(Zo[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function nm(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Xs={assertOptions:nm,validators:Ni},mt=Xs.validators;class kr{constructor(e){this.defaults=e,this.interceptors={request:new qo,response:new qo}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=un(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Xs.assertOptions(r,{silentJSONParsing:mt.transitional(mt.boolean),forcedJSONParsing:mt.transitional(mt.boolean),clarifyTimeoutError:mt.transitional(mt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:Xs.assertOptions(s,{encode:mt.function,serialize:mt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=at.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(n)===!1||(c=c&&I.synchronous,a.unshift(I.fulfilled,I.rejected))});const u=[];this.interceptors.response.forEach(function(I){u.push(I.fulfilled,I.rejected)});let l,d=0,p;if(!c){const g=[Xo.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),p=g.length,l=Promise.resolve(n);d<p;)l=l.then(g[d++],g[d++]);return l}p=a.length;let y=n;for(d=0;d<p;){const g=a[d++],I=a[d++];try{y=g(y)}catch(x){I.call(this,x);break}}try{l=Xo.call(this,y)}catch(g){return Promise.reject(g)}for(d=0,p=u.length;d<p;)l=l.then(u[d++],u[d++]);return l}getUri(e){e=un(this.defaults,e);const n=Gc(e.baseURL,e.url);return Wc(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){kr.prototype[e]=function(n,r){return this.request(un(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(un(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}kr.prototype[e]=n(),kr.prototype[e+"Form"]=n(!0)});const vr=kr;class xi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Kn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new xi(function(s){e=s}),cancel:e}}}const rm=xi;function sm(t){return function(n){return t.apply(null,n)}}function im(t){return b.isObject(t)&&t.isAxiosError===!0}const Qs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qs).forEach(([t,e])=>{Qs[e]=t});const om=Qs;function Qc(t){const e=new vr(t),n=xc(vr.prototype.request,e);return b.extend(n,vr.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Qc(un(t,s))},n}const ie=Qc(ki);ie.Axios=vr;ie.CanceledError=Kn;ie.CancelToken=rm;ie.isCancel=Jc;ie.VERSION=Xc;ie.toFormData=ns;ie.AxiosError=W;ie.Cancel=ie.CanceledError;ie.all=function(e){return Promise.all(e)};ie.spread=sm;ie.isAxiosError=im;ie.mergeConfig=un;ie.AxiosHeaders=at;ie.formToJSON=t=>qc(b.isHTMLForm(t)?new FormData(t):t);ie.getAdapter=Yc.getAdapter;ie.HttpStatusCode=om;ie.default=ie;const We=ie,am={name:"Recent",data:function(){return{posts:[]}},components:{PostTile:Wh},mounted(){We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/get_all_post/").then(t=>{try{const e=JSON.parse(t.data);e.Status==="Error"||e.Status==="Not Success"?(this.posts=[],alert("No Post Found")):this.posts=e.Data}catch(e){console.error("Error parsing JSON:",e)}}).catch(t=>{console.error("Error fetching data:",t)})}};function cm(t,e,n,r,s,i){const o=St("PostTile");return ve(!0),Ce(Se,null,ac(t.posts,a=>(ve(),Ce("div",{key:a.id},[re(o,{post:a},null,8,["post"])]))),128)}const lm=Qe(am,[["render",cm]]);function um(t){const e=new Date;e.setDate(e.getDate()+100),document.cookie=encodeURIComponent("uid")+"="+encodeURIComponent(t)+"; expires="+e.toUTCString()+"; path=/"}function ss(){const t=document.cookie.split("; ");for(let e=0;e<t.length;e++){const n=t[e].split("=");if(n[0]==="uid")return{status:!0,uid:decodeURIComponent(n[1]).toString()}}return{status:!1}}function fm(){document.cookie="uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}const dm={name:"PostTile",data:function(){return{post:{},comments:[],newComment:{body:""}}},mounted(){this.init()},methods:{addLike(){We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_like/?pid="+this.$route.params.id).then(t=>{this.init(),console.log(t.data)}).catch(t=>{console.log(t)})},unLike(){We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_unlike/?pid="+this.$route.params.id).then(t=>{this.init(),console.log(t.data)}).catch(t=>{console.log(t)})},init(){We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/get_single_post/?pid="+this.$route.params.id).then(t=>{try{const e=JSON.parse(t.data);e.Status==="Error"||e.Status==="Not Success"?alert("Wrong Post ID Selected"):(this.post=e.Data[0],We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/get_comments/?pid="+this.$route.params.id).then(n=>{try{const r=JSON.parse(n.data);r.Status==="Error"||r.Status==="Not Success"?this.comments=[]:this.comments=r.Data}catch(r){console.error("Error parsing JSON:",r)}}).catch(n=>{console.error("Error fetching data:",n)}))}catch(e){console.error("Error parsing JSON:",e)}}).catch(t=>{console.error("Error fetching data:",t)})},add_comment:function(){const t=ss();if(t.status===!1)alert("Pls Login to Comment");else{var e={pid:this.$route.params.id,author_id:t.uid,body:this.newComment.body};We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_comment/",null,{params:e}).then(n=>{n.data.status==="Error"?alert("Unexpected Error"):this.init()}).catch(n=>{alert(n)})}}}},et=t=>(Vn("data-v-82b757fa"),t=t(),zn(),t),hm=et(()=>P("br",null,null,-1)),pm=et(()=>P("br",null,null,-1)),mm=et(()=>P("br",null,null,-1)),gm=et(()=>P("br",null,null,-1)),_m={id:"Bar"},ym=et(()=>P("br",null,null,-1)),bm=et(()=>P("br",null,null,-1)),vm=et(()=>P("br",null,null,-1)),wm=et(()=>P("h3",null,"Comments",-1)),Em={class:"comment"},Im=et(()=>P("h3",null,"Add a Comment",-1)),Sm={class:"form-group"},Tm=et(()=>P("button",{type:"submit"},"Add Comment",-1));function Rm(t,e,n,r,s,i){return ve(),Ce("div",null,[P("h1",null,_e(t.post.title),1),P("h4",null,"By "+_e(t.post.author_name),1),hm,P("p",null,_e(t.post.body),1),pm,mm,gm,P("div",_m,[P("div",{onClick:e[0]||(e[0]=(...o)=>i.addLike&&i.addLike(...o))},"👍 "+_e(t.post.likes),1),P("div",null,"💬 "+_e(t.post.comments),1),P("div",{onClick:e[1]||(e[1]=(...o)=>i.unLike&&i.unLike(...o))},"👎 "+_e(t.post.unlikes),1)]),ym,bm,vm,wm,(ve(!0),Ce(Se,null,ac(t.comments,o=>(ve(),Ce("div",{key:o.id,class:"comment"},[P("p",null,_e(o.body),1),P("h4",null,"By "+_e(o.author_name),1)]))),128)),P("div",Em,[Im,P("form",{onSubmit:e[3]||(e[3]=wc((...o)=>i.add_comment&&i.add_comment(...o),["prevent"]))},[P("div",Sm,[Ls(P("textarea",{id:"commentText","onUpdate:modelValue":e[2]||(e[2]=o=>t.newComment.body=o),placeholder:"Comment",required:""},null,512),[[zs,t.newComment.body]])]),Tm],32)])])}const Cm=Qe(dm,[["render",Rm],["__scopeId","data-v-82b757fa"]]);const Am={name:"CreatePost",data(){return{newPost:{title:"",body:""}}},methods:{createPost(){const t=ss();t.status?We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/get_user/",null,{params:{id:t.uid}}).then(e=>{const r=JSON.parse(e.data).Data.name;We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/add_post/",null,{params:{title:this.newPost.title,body:this.newPost.body,author_name:r,author_id:t.uid}}).then(s=>{JSON.parse(s.data).Status==="Success"?(alert("Posted"),this.$router.push("/")):alert("Unexpected Error, Unable to post")}).catch(s=>{alert("Unexpected Error, Unable to post"),console.log(s)})}).catch(e=>{console.log(e)}):alert("Pls login to post")}}},Zc=t=>(Vn("data-v-aac8a790"),t=t(),zn(),t),Pm=Zc(()=>P("h1",null,"Create a New Post",-1)),Om={class:"form-group"},km={class:"form-group"},Nm=Zc(()=>P("button",{type:"submit"},"Create Post",-1));function xm(t,e,n,r,s,i){return ve(),Ce(Se,null,[Pm,P("form",{onSubmit:e[2]||(e[2]=wc((...o)=>i.createPost&&i.createPost(...o),["prevent"]))},[P("div",Om,[Ls(P("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>s.newPost.title=o),required:"",placeholder:"Title"},null,512),[[zs,s.newPost.title]])]),P("div",km,[Ls(P("textarea",{id:"body","onUpdate:modelValue":e[1]||(e[1]=o=>s.newPost.body=o),required:"",placeholder:"Body"},null,512),[[zs,s.newPost.body]])]),Nm],32)],64)}const Dm=Qe(Am,[["render",xm],["__scopeId","data-v-aac8a790"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(p=64)),r.push(n[l],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(el(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new Lm;const p=i<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Um=function(t){const e=el(t);return tl.encodeByteArray(e,!0)},nl=function(t){return Um(t).replace(/\./g,"")},rl=function(t){try{return tl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=()=>Fm().__FIREBASE_DEFAULTS__,Bm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rl(t[1]);return e&&JSON.parse(e)},Di=()=>{try{return $m()||Bm()||jm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hm=t=>{var e,n;return(n=(e=Di())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sl=()=>{var t;return(t=Di())===null||t===void 0?void 0:t.config},il=t=>{var e;return(e=Di())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Wm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jm(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ym,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Xm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new At(s,a,r)}}function Xm(t,e){return t.replace(Qm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qm=/\{\$([^}]+)}/g;function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ea(i)&&ea(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ea(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eg(t,e){const n=new tg(t,e);return n.subscribe.bind(n)}class tg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ng(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Es),s.error===void 0&&(s.error=Es),s.complete===void 0&&(s.complete=Es);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ng(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Es(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sg(t){return t===Nt?void 0:t}function ig(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const ag={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},cg=Z.INFO,lg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ug=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=cg,this._logHandler=ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const fg=(t,e)=>e.some(n=>t instanceof n);let ta,na;function dg(){return ta||(ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const al=new WeakMap,Zs=new WeakMap,cl=new WeakMap,Is=new WeakMap,Mi=new WeakMap;function pg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&al.set(n,t)}).catch(()=>{}),Mi.set(e,t),e}function mg(t){if(Zs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zs.set(t,e)}let ei={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gg(t){ei=t(ei)}function _g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ss(this),e,...n);return cl.set(r,e.sort?e.sort():[e]),Tt(r)}:hg().includes(t)?function(...e){return t.apply(Ss(this),e),Tt(al.get(this))}:function(...e){return Tt(t.apply(Ss(this),e))}}function yg(t){return typeof t=="function"?_g(t):(t instanceof IDBTransaction&&mg(t),fg(t,dg())?new Proxy(t,ei):t)}function Tt(t){if(t instanceof IDBRequest)return pg(t);if(Is.has(t))return Is.get(t);const e=yg(t);return e!==t&&(Is.set(t,e),Mi.set(e,t)),e}const Ss=t=>Mi.get(t);function bg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vg=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],Ts=new Map;function ra(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ts.get(e))return Ts.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Ts.set(e,i),i}gg(t=>({...t,get:(e,n,r)=>ra(e,n)||t.get(e,n,r),has:(e,n)=>!!ra(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ig(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ti="@firebase/app",sa="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new ol("@firebase/app"),Sg="@firebase/app-compat",Tg="@firebase/analytics-compat",Rg="@firebase/analytics",Cg="@firebase/app-check-compat",Ag="@firebase/app-check",Pg="@firebase/auth",Og="@firebase/auth-compat",kg="@firebase/database",Ng="@firebase/database-compat",xg="@firebase/functions",Dg="@firebase/functions-compat",Mg="@firebase/installations",Lg="@firebase/installations-compat",Ug="@firebase/messaging",Fg="@firebase/messaging-compat",$g="@firebase/performance",Bg="@firebase/performance-compat",jg="@firebase/remote-config",Hg="@firebase/remote-config-compat",Vg="@firebase/storage",zg="@firebase/storage-compat",Wg="@firebase/firestore",Kg="@firebase/firestore-compat",qg="firebase",Jg="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",Gg={[ti]:"fire-core",[Sg]:"fire-core-compat",[Rg]:"fire-analytics",[Tg]:"fire-analytics-compat",[Ag]:"fire-app-check",[Cg]:"fire-app-check-compat",[Pg]:"fire-auth",[Og]:"fire-auth-compat",[kg]:"fire-rtdb",[Ng]:"fire-rtdb-compat",[xg]:"fire-fn",[Dg]:"fire-fn-compat",[Mg]:"fire-iid",[Lg]:"fire-iid-compat",[Ug]:"fire-fcm",[Fg]:"fire-fcm-compat",[$g]:"fire-perf",[Bg]:"fire-perf-compat",[jg]:"fire-rc",[Hg]:"fire-rc-compat",[Vg]:"fire-gcs",[zg]:"fire-gcs-compat",[Wg]:"fire-fst",[Kg]:"fire-fst-compat","fire-js":"fire-js",[qg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,ri=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(ri.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,t);for(const n of xr.values())Yg(n,t);return!0}function ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new qn("app","Firebase",Xg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=Jg;function ul(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(n||(n=sl()),!n)throw Rt.create("no-options");const i=xr.get(s);if(i){if(Nr(n,i.options)&&Nr(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const o=new og(s);for(const c of ri.values())o.addComponent(c);const a=new Qg(n,r,o);return xr.set(s,a),a}function Zg(t=ni){const e=xr.get(t);if(!e&&t===ni&&sl())return ul();if(!e)throw Rt.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Gg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}$n(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebase-heartbeat-database",t_=1,Bn="firebase-heartbeat-store";let Rs=null;function fl(){return Rs||(Rs=bg(e_,t_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),Rs}async function n_(t){try{return await(await fl()).transaction(Bn).objectStore(Bn).get(dl(t))}catch(e){if(e instanceof At)Bt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(n.message)}}}async function ia(t,e){try{const r=(await fl()).transaction(Bn,"readwrite");await r.objectStore(Bn).put(e,dl(t)),await r.done}catch(n){if(n instanceof At)Bt.warn(n.message);else{const r=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function dl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=1024,s_=30*24*60*60*1e3;class i_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=s_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oa(),{heartbeatsToSend:n,unsentEntries:r}=o_(this._heartbeatsCache.heartbeats),s=nl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function oa(){return new Date().toISOString().substring(0,10)}function o_(t,e=r_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),aa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),aa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jm()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function aa(t){return nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){$n(new fn("platform-logger",e=>new Eg(e),"PRIVATE")),$n(new fn("heartbeat",e=>new i_(e),"PRIVATE")),tn(ti,sa,t),tn(ti,sa,"esm2017"),tn("fire-js","")}c_("");function Li(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=hl,pl=new qn("auth","Firebase",hl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new ol("@firebase/auth");function u_(t,...e){Dr.logLevel<=Z.WARN&&Dr.warn(`Auth (${Gn}): ${t}`,...e)}function wr(t,...e){Dr.logLevel<=Z.ERROR&&Dr.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,...e){throw Ui(t,...e)}function Je(t,...e){return Ui(t,...e)}function ml(t,e,n){const r=Object.assign(Object.assign({},l_()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function f_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(t,"argument-error"),ml(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pl.create(t,...e)}function j(t,e,...n){if(!t)throw Ui(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wr(e),new Error(e)}function lt(t,e){t||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d_(){return ca()==="http:"||ca()==="https:"}function ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||Wm()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=zm()||Km()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Yn(3e4,6e4);function _l(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return yl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gl.fetch()(bl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},m_),e);try{const s=new y_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw lr(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ml(t,l,u);Xe(t,l)}}catch(s){if(s instanceof At)throw s;Xe(t,"network-request-failed",{message:String(s)})}}async function __(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&Xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fi(t.config,s):`${t.config.apiScheme}://${s}`}class y_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),g_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function v_(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w_(t,e=!1){const n=_n(t),r=await n.getIdToken(e),s=$i(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(Cs(s.auth_time)),issuedAtTime:Pn(Cs(s.iat)),expirationTime:Pn(Cs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cs(t){return Number(t)*1e3}function $i(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=rl(n);return s?JSON.parse(s):(wr("Failed to decode base64 JWT payload"),null)}catch(s){return wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function E_(t){const e=$i(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&I_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function I_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jn(t,v_(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?C_(i.providerUserInfo):[],a=R_(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function T_(t){const e=_n(t);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function C_(t){return t.map(e=>{var{providerId:n}=e,r=Li(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e){const n=await yl(t,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await A_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Li(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w_(this,e)}reload(){return T_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jn(this,b_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:L,isAnonymous:oe,providerData:ae,stsTokenManager:Ee}=n;j(V&&Ee,e,"internal-error");const Pe=Hn.fromJSON(this.name,Ee);j(typeof V=="string",e,"internal-error"),gt(d,e.name),gt(p,e.name),j(typeof L=="boolean",e,"internal-error"),j(typeof oe=="boolean",e,"internal-error"),gt(y,e.name),gt(g,e.name),gt(I,e.name),gt(x,e.name),gt(k,e.name),gt(N,e.name);const Fe=new $t({uid:V,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:oe,photoURL:g,phoneNumber:y,tenantId:I,stsTokenManager:Pe,createdAt:k,lastLoginAt:N});return ae&&Array.isArray(ae)&&(Fe.providerData=ae.map(Te=>Object.assign({},Te))),x&&(Fe._redirectEventId=x),Fe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hn;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map;function it(t){lt(t instanceof Function,"Expected a class definition");let e=la.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,la.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const ua=wl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(it(ua),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||it(ua);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=$t._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new nn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(El(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rl(e))return"Blackberry";if(Cl(e))return"Webos";if(Bi(e))return"Safari";if((e.includes("chrome/")||Il(e))&&!e.includes("edge/"))return"Chrome";if(Tl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function El(t=me()){return/firefox\//i.test(t)}function Bi(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Il(t=me()){return/crios\//i.test(t)}function Sl(t=me()){return/iemobile/i.test(t)}function Tl(t=me()){return/android/i.test(t)}function Rl(t=me()){return/blackberry/i.test(t)}function Cl(t=me()){return/webos/i.test(t)}function is(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P_(t=me()){var e;return is(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O_(){return qm()&&document.documentMode===10}function Al(t=me()){return is(t)||Tl(t)||Cl(t)||Rl(t)||/windows phone/i.test(t)||Sl(t)}function k_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e=[]){let n;switch(t){case"Browser":n=fa(me());break;case"Worker":n=`${fa(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",_l(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=6;class M_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new da(this),this.idTokenSubscription=new da(this),this.beforeStateQueue=new N_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_n(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await x_(this),n=new M_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return _n(t)}class da{constructor(e){this.auth=e,this.observer=null,this.addObserver=eg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function F_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})}function $_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){const n=ll(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nr(i,e??{}))return s;Xe(s,"already-initialized")}return n.initialize({options:e})}function j_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H_(t,e,n){const r=os(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ol(e),{host:o,port:a}=V_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||z_()}function Ol(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V_(t){const e=Ol(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ha(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ha(o)}}}function ha(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function z_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){return __(t,"POST","/v1/accounts:signInWithIdp",_l(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="http://localhost";class jt extends kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Li(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:W_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ji{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Qn{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ke.credential(n,r)}catch{return null}}}Ke.GOOGLE_SIGN_IN_METHOD="google.com";Ke.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Qn{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Qn{constructor(){super("twitter.com")}static credential(e,n){return jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=pa(r);return new dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pa(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lr(e,n,r,s)}}function Nl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lr._fromErrorAndOperation(t,i,e,r):i})}async function K_(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await jn(t,Nl(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=$i(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),dn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t,e,n=!1){const r="signIn",s=await Nl(t,r,e),i=await dn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function G_(t,e,n,r){return _n(t).onIdTokenChanged(e,n,r)}function Y_(t,e,n){return _n(t).beforeAuthStateChanged(e,n)}const Ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ur,"1"),this.storage.removeItem(Ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){const t=me();return Bi(t)||is(t)}const Q_=1e3,Z_=10;class Dl extends xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X_()&&k_(),this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);O_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dl.type="LOCAL";const ey=Dl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ml.type="SESSION";const Ll=Ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await ty(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Hi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function ry(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oy(){return Ul()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebaseLocalStorageDb",ay=1,Fr="firebaseLocalStorage",$l="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function cy(){const t=indexedDB.deleteDatabase(Fl);return new Zn(t).toPromise()}function ii(){const t=indexedDB.open(Fl,ay);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fr,{keyPath:$l})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fr)?e(r):(r.close(),await cy(),e(await ii()))})})}async function ma(t,e,n){const r=cs(t,!0).put({[$l]:e,value:n});return new Zn(r).toPromise()}async function ly(t,e){const n=cs(t,!1).get(e),r=await new Zn(n).toPromise();return r===void 0?null:r.value}function ga(t,e){const n=cs(t,!0).delete(e);return new Zn(n).toPromise()}const uy=800,fy=3;class Bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(oy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sy(),!this.activeServiceWorker)return;this.sender=new ny(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await ma(e,Ur,"1"),await ga(e,Ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ma(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ly(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ga(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cs(s,!1).getAll();return new Zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bl.type="LOCAL";const dy=Bl;new Yn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t,e){return e?it(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends kl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hy(t){return J_(t.auth,new Vi(t),t.bypassAuthState)}function py(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),q_(n,new Vi(t),t.bypassAuthState)}async function my(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),K_(n,new Vi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hy;case"linkViaPopup":case"linkViaRedirect":return my;case"reauthViaPopup":case"reauthViaRedirect":return py;default:Xe(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new Yn(2e3,1e4);async function _y(t,e,n){const r=os(t);f_(t,e,ji);const s=jl(r,n);return new Lt(r,"signInViaPopup",e,s).executeNotNull()}class Lt extends Hl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gy.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="pendingRedirect",Ir=new Map;class by extends Hl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await vy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vy(t,e){const n=Iy(e),r=Ey(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wy(t,e){Ir.set(t._key(),e)}function Ey(t){return it(t._redirectPersistence)}function Iy(t){return Er(yy,t.config.apiKey,t.name)}async function Sy(t,e,n=!1){const r=os(t),s=jl(r,e),o=await new by(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=10*60*1e3;class Ry{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ty&&this.cachedEventUids.clear(),this.cachedEventUids.has(_a(e))}saveEventToCache(e){this.cachedEventUids.add(_a(e)),this.lastProcessedEventTime=Date.now()}}function _a(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oy=/^https?/;async function ky(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ay(t);for(const n of e)try{if(Ny(n))return}catch{}Xe(t,"unauthorized-domain")}function Ny(t){const e=si(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Oy.test(n))return!1;if(Py.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Yn(3e4,6e4);function ya(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dy(t){return new Promise((e,n)=>{var r,s,i;function o(){ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ya(),n(Je(t,"network-request-failed"))},timeout:xy.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=$_("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},F_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function My(t){return Sr=Sr||Dy(t),Sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Yn(5e3,15e3),Uy="__/auth/iframe",Fy="emulator/auth/iframe",$y={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},By=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jy(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fi(e,Fy):`https://${t.config.authDomain}/${Uy}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=By.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jn(r).slice(1)}`}async function Hy(t){const e=await My(t),n=Ge().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:jy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$y,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},Ly.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zy=500,Wy=600,Ky="_blank",qy="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jy(t,e,n,r=zy,s=Wy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vy),{width:r.toString(),height:s.toString(),top:i,left:o}),u=me().toLowerCase();n&&(a=Il(u)?Ky:n),El(u)&&(e=e||qy,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[y,g])=>`${p}${y}=${g},`,"");if(P_(u)&&a!=="_self")return Gy(e||"",a),new ba(null);const d=window.open(e||"",a,l);j(d,t,"popup-blocked");try{d.focus()}catch{}return new ba(d)}function Gy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="__/auth/handler",Xy="emulator/auth/handler",Qy=encodeURIComponent("fac");async function va(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof ji){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries(i||{}))o[l]=d}if(e instanceof Qn){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Qy}=${encodeURIComponent(c)}`:"";return`${Zy(t)}?${Jn(a).slice(1)}${u}`}function Zy({config:t}){return t.emulator?Fi(t,Xy):`https://${t.authDomain}/${Yy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="webStorageSupport";class eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ll,this._completeRedirectFn=Sy,this._overrideRedirectResult=wy}async _openPopup(e,n,r,s){var i;lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await va(e,n,r,si(),s);return Jy(e,o,Hi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await va(e,n,r,si(),s);return ry(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hy(e),r=new Ry(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(As,{type:As},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[As];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ky(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||Bi()||is()}}const tb=eb;var wa="@firebase/auth",Ea="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sb(t){$n(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pl(t)},u=new L_(r,s,i,c);return j_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new fn("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new nb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(wa,Ea,rb(t)),tn(wa,Ea,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=5*60,ob=il("authIdTokenMaxAge")||ib;let Ia=null;const ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ob)return;const s=n==null?void 0:n.token;Ia!==s&&(Ia=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cb(t=Zg()){const e=ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=B_(t,{popupRedirectResolver:tb,persistence:[dy,ey,Ll]}),r=il("authTokenSyncURL");if(r){const i=ab(r);Y_(n,i,()=>i(n.currentUser)),G_(n,o=>i(o))}const s=Hm("auth");return s&&H_(n,`http://${s}`),n}sb("Browser");const lb={name:"SignIn",methods:{loginWithGoogle(){const t=new Ke,e=cb();_y(e,t).then(n=>{Ke.credentialFromResult(n);const r=n.user,s={name:r.displayName.toString(),uid:r.uid.toString()};We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/create_user/",null,{params:s}).then(i=>{const o=JSON.parse(i.data);um(o.Data.toString()),window.location.reload()}).catch(i=>{console.log(i)})}).catch(n=>{const r=n.code,s=n.message;console.log(r+s)})}}},er=t=>(Vn("data-v-813a92ff"),t=t(),zn(),t),ub=er(()=>P("h1",null,"Please Log In First",-1)),fb=er(()=>P("br",null,null,-1)),db=er(()=>P("br",null,null,-1)),hb=er(()=>P("br",null,null,-1)),pb=er(()=>P("br",null,null,-1));function mb(t,e,n,r,s,i){return ve(),Ce("div",null,[ub,fb,db,hb,pb,P("button",{class:"login-button",onClick:e[0]||(e[0]=(...o)=>i.loginWithGoogle&&i.loginWithGoogle(...o))},"Sign In/Up with Google")])}const gb=Qe(lb,[["render",mb],["__scopeId","data-v-813a92ff"]]);const _b={name:"ProfileView",data(){return{username:"Loading"}},mounted(){const t=ss();t.status?We.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/get_user/",null,{params:{id:t.uid}}).then(e=>{const n=JSON.parse(e.data);console.log(n.Data),this.username=n.Data.name}).catch(e=>{console.log(e)}):window.location.reload()},methods:{signOut(){fm(),window.location.reload()}}},tr=t=>(Vn("data-v-5ee3d8cb"),t=t(),zn(),t),yb=tr(()=>P("h1",null,"You have logged in successfully",-1)),bb=tr(()=>P("br",null,null,-1)),vb=tr(()=>P("br",null,null,-1)),wb=tr(()=>P("br",null,null,-1)),Eb=tr(()=>P("br",null,null,-1));function Ib(t,e,n,r,s,i){return ve(),Ce("div",null,[yb,P("p",null,"Hi, "+_e(s.username),1),bb,vb,wb,Eb,P("button",{class:"sign-out-button",onClick:e[0]||(e[0]=(...o)=>i.signOut&&i.signOut(...o))},"Sign Out")])}const Sb=Qe(_b,[["render",Ib],["__scopeId","data-v-5ee3d8cb"]]),Tb={name:"Profile",components:{ProfileView:Sb,SignIn:gb},data(){return{authCheck:!1}},mounted(){ss().status===!1?this.authCheck=!1:this.authCheck=!0}};function Rb(t,e,n,r,s,i){const o=St("ProfileView"),a=St("SignIn");return s.authCheck?(ve(),po(o,{key:0})):(ve(),po(a,{key:1}))}const Cb=Qe(Tb,[["render",Rb]]),Ab=$h({history:th("/"),routes:[{name:"Recent",component:lm,path:"/"},{name:"CreatePost",component:Dm,path:"/new"},{name:"Profile",component:Cb,path:"/profile"},{path:"/post/:id",name:"single-post",component:Cm},{path:"/:catchAll(.*)",name:"Error",component:Error}]});var Pb="firebase",Ob="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(Pb,Ob,"app");const kb={apiKey:"AIzaSyAm2AJHY6HNYFHyDh5gAPPu5ef2kv-Lgss",authDomain:"community-forum-401517.firebaseapp.com",projectId:"community-forum-401517",storageBucket:"community-forum-401517.appspot.com",messagingSenderId:"902466457382",appId:"1:902466457382:web:fcae325223905777207be7"};ul(kb);const zl=hd(Ud);zl.use(Ab);zl.mount("#app");
