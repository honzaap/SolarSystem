const Tf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Tf();function Oa(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Ef="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Af=Oa(Ef);function Fu(i){return!!i||i===""}function Ua(i){if(Le(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=ut(n)?Rf(n):Ua(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ut(i))return i;if(at(i))return i}}const Cf=/;(?![^(]*\))/g,Lf=/:(.+)/;function Rf(i){const e={};return i.split(Cf).forEach(t=>{if(t){const n=t.split(Lf);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Xr(i){let e="";if(ut(i))e=i;else if(Le(i))for(let t=0;t<i.length;t++){const n=Xr(i[t]);n&&(e+=n+" ")}else if(at(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}function Pf(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=Ur(i[n],e[n]);return t}function Ur(i,e){if(i===e)return!0;let t=xl(i),n=xl(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=Ns(i),n=Ns(e),t||n)return i===e;if(t=Le(i),n=Le(e),t||n)return t&&n?Pf(i,e):!1;if(t=at(i),n=at(e),t||n){if(!t||!n)return!1;const s=Object.keys(i).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ur(i[o],e[o]))return!1}}return String(i)===String(e)}const Df=i=>ut(i)?i:i==null?"":Le(i)||at(i)&&(i.toString===ku||!Ie(i.toString))?JSON.stringify(i,Ou,2):String(i),Ou=(i,e)=>e&&e.__v_isRef?Ou(i,e.value):Ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:Uu(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!Le(e)&&!Bu(e)?String(e):e,Je={},Xi=[],Kt=()=>{},If=()=>!1,Nf=/^on[^a-z]/,Kr=i=>Nf.test(i),za=i=>i.startsWith("onUpdate:"),mt=Object.assign,ka=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ff=Object.prototype.hasOwnProperty,ke=(i,e)=>Ff.call(i,e),Le=Array.isArray,Ki=i=>Ks(i)==="[object Map]",Uu=i=>Ks(i)==="[object Set]",xl=i=>Ks(i)==="[object Date]",Ie=i=>typeof i=="function",ut=i=>typeof i=="string",Ns=i=>typeof i=="symbol",at=i=>i!==null&&typeof i=="object",zu=i=>at(i)&&Ie(i.then)&&Ie(i.catch),ku=Object.prototype.toString,Ks=i=>ku.call(i),Of=i=>Ks(i).slice(8,-1),Bu=i=>Ks(i)==="[object Object]",Ba=i=>ut(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Pr=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Uf=/-(\w)/g,ln=Yr(i=>i.replace(Uf,(e,t)=>t?t.toUpperCase():"")),zf=/\B([A-Z])/g,as=Yr(i=>i.replace(zf,"-$1").toLowerCase()),Zr=Yr(i=>i.charAt(0).toUpperCase()+i.slice(1)),po=Yr(i=>i?`on${Zr(i)}`:""),zr=(i,e)=>!Object.is(i,e),Dr=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},kr=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},kf=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let vl;const Bf=()=>vl||(vl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let sn;class Vf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&sn&&(this.parent=sn,this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Hf(i,e=sn){e&&e.active&&e.effects.push(i)}const Va=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Vu=i=>(i.w&Gn)>0,Hu=i=>(i.n&Gn)>0,Gf=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Gn},Wf=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Vu(s)&&!Hu(s)?s.delete(i):e[t++]=s,s.w&=~Gn,s.n&=~Gn}e.length=t}},ra=new WeakMap;let Ss=0,Gn=1;const oa=30;let qt;const ui=Symbol(""),aa=Symbol("");class Ha{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Hf(this,n)}run(){if(!this.active)return this.fn();let e=qt,t=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Bn=!0,Gn=1<<++Ss,Ss<=oa?Gf(this):yl(this),this.fn()}finally{Ss<=oa&&Wf(this),Gn=1<<--Ss,qt=this.parent,Bn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(yl(this),this.onStop&&this.onStop(),this.active=!1)}}function yl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Bn=!0;const Gu=[];function ls(){Gu.push(Bn),Bn=!1}function cs(){const i=Gu.pop();Bn=i===void 0?!0:i}function Dt(i,e,t){if(Bn&&qt){let n=ra.get(i);n||ra.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Va()),Wu(s)}}function Wu(i,e){let t=!1;Ss<=oa?Hu(i)||(i.n|=Gn,t=!Vu(i)):t=!i.has(qt),t&&(i.add(qt),qt.deps.push(i))}function wn(i,e,t,n,s,r){const o=ra.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Le(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Le(i)?Ba(t)&&a.push(o.get("length")):(a.push(o.get(ui)),Ki(i)&&a.push(o.get(aa)));break;case"delete":Le(i)||(a.push(o.get(ui)),Ki(i)&&a.push(o.get(aa)));break;case"set":Ki(i)&&a.push(o.get(ui));break}if(a.length===1)a[0]&&la(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);la(Va(l))}}function la(i,e){const t=Le(i)?i:[...i];for(const n of t)n.computed&&bl(n);for(const n of t)n.computed||bl(n)}function bl(i,e){(i!==qt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const jf=Oa("__proto__,__v_isRef,__isVue"),ju=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Ns)),qf=Ga(),Xf=Ga(!1,!0),Kf=Ga(!0),Ml=Yf();function Yf(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let r=0,o=this.length;r<o;r++)Dt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map($e)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ls();const n=$e(this)[e].apply(this,t);return cs(),n}}),i}function Ga(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?hd:Zu:e?Yu:Ku).get(n))return n;const o=Le(n);if(!i&&o&&ke(Ml,s))return Reflect.get(Ml,s,r);const a=Reflect.get(n,s,r);return(Ns(s)?ju.has(s):jf(s))||(i||Dt(n,"get",s),e)?a:Mt(a)?o&&Ba(s)?a:a.value:at(a)?i?$u(a):qa(a):a}}const Zf=qu(),$f=qu(!0);function qu(i=!1){return function(t,n,s,r){let o=t[n];if(Fs(o)&&Mt(o)&&!Mt(s))return!1;if(!i&&!Fs(s)&&(ca(s)||(s=$e(s),o=$e(o)),!Le(t)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=Le(t)&&Ba(n)?Number(n)<t.length:ke(t,n),l=Reflect.set(t,n,s,r);return t===$e(r)&&(a?zr(s,o)&&wn(t,"set",n,s):wn(t,"add",n,s)),l}}function Jf(i,e){const t=ke(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&wn(i,"delete",e,void 0),n}function Qf(i,e){const t=Reflect.has(i,e);return(!Ns(e)||!ju.has(e))&&Dt(i,"has",e),t}function ed(i){return Dt(i,"iterate",Le(i)?"length":ui),Reflect.ownKeys(i)}const Xu={get:qf,set:Zf,deleteProperty:Jf,has:Qf,ownKeys:ed},td={get:Kf,set(i,e){return!0},deleteProperty(i,e){return!0}},nd=mt({},Xu,{get:Xf,set:$f}),Wa=i=>i,$r=i=>Reflect.getPrototypeOf(i);function tr(i,e,t=!1,n=!1){i=i.__v_raw;const s=$e(i),r=$e(e);t||(e!==r&&Dt(s,"get",e),Dt(s,"get",r));const{has:o}=$r(s),a=n?Wa:t?Ya:Ka;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function nr(i,e=!1){const t=this.__v_raw,n=$e(t),s=$e(i);return e||(i!==s&&Dt(n,"has",i),Dt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function ir(i,e=!1){return i=i.__v_raw,!e&&Dt($e(i),"iterate",ui),Reflect.get(i,"size",i)}function Sl(i){i=$e(i);const e=$e(this);return $r(e).has.call(e,i)||(e.add(i),wn(e,"add",i,i)),this}function wl(i,e){e=$e(e);const t=$e(this),{has:n,get:s}=$r(t);let r=n.call(t,i);r||(i=$e(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?zr(e,o)&&wn(t,"set",i,e):wn(t,"add",i,e),this}function Tl(i){const e=$e(this),{has:t,get:n}=$r(e);let s=t.call(e,i);s||(i=$e(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&wn(e,"delete",i,void 0),r}function El(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&wn(i,"clear",void 0,void 0),t}function sr(i,e){return function(n,s){const r=this,o=r.__v_raw,a=$e(o),l=e?Wa:i?Ya:Ka;return!i&&Dt(a,"iterate",ui),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function rr(i,e,t){return function(...n){const s=this.__v_raw,r=$e(s),o=Ki(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Wa:e?Ya:Ka;return!e&&Dt(r,"iterate",l?aa:ui),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(i){return function(...e){return i==="delete"?!1:this}}function id(){const i={get(r){return tr(this,r)},get size(){return ir(this)},has:nr,add:Sl,set:wl,delete:Tl,clear:El,forEach:sr(!1,!1)},e={get(r){return tr(this,r,!1,!0)},get size(){return ir(this)},has:nr,add:Sl,set:wl,delete:Tl,clear:El,forEach:sr(!1,!0)},t={get(r){return tr(this,r,!0)},get size(){return ir(this,!0)},has(r){return nr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:sr(!0,!1)},n={get(r){return tr(this,r,!0,!0)},get size(){return ir(this,!0)},has(r){return nr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=rr(r,!1,!1),t[r]=rr(r,!0,!1),e[r]=rr(r,!1,!0),n[r]=rr(r,!0,!0)}),[i,t,e,n]}const[sd,rd,od,ad]=id();function ja(i,e){const t=e?i?ad:od:i?rd:sd;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ke(t,s)&&s in n?t:n,s,r)}const ld={get:ja(!1,!1)},cd={get:ja(!1,!0)},ud={get:ja(!0,!1)},Ku=new WeakMap,Yu=new WeakMap,Zu=new WeakMap,hd=new WeakMap;function fd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dd(i){return i.__v_skip||!Object.isExtensible(i)?0:fd(Of(i))}function qa(i){return Fs(i)?i:Xa(i,!1,Xu,ld,Ku)}function pd(i){return Xa(i,!1,nd,cd,Yu)}function $u(i){return Xa(i,!0,td,ud,Zu)}function Xa(i,e,t,n,s){if(!at(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=dd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Yi(i){return Fs(i)?Yi(i.__v_raw):!!(i&&i.__v_isReactive)}function Fs(i){return!!(i&&i.__v_isReadonly)}function ca(i){return!!(i&&i.__v_isShallow)}function Ju(i){return Yi(i)||Fs(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function Qu(i){return kr(i,"__v_skip",!0),i}const Ka=i=>at(i)?qa(i):i,Ya=i=>at(i)?$u(i):i;function md(i){Bn&&qt&&(i=$e(i),Wu(i.dep||(i.dep=Va())))}function gd(i,e){i=$e(i),i.dep&&la(i.dep)}function Mt(i){return!!(i&&i.__v_isRef===!0)}function _d(i){return Mt(i)?i.value:i}const xd={get:(i,e,t)=>_d(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Mt(s)&&!Mt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function eh(i){return Yi(i)?i:new Proxy(i,xd)}class vd{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ha(e,()=>{this._dirty||(this._dirty=!0,gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=$e(this);return md(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yd(i,e,t=!1){let n,s;const r=Ie(i);return r?(n=i,s=Kt):(n=i.get,s=i.set),new vd(n,s,r||!s,t)}function Vn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){Jr(r,e,t)}return s}function kt(i,e,t,n){if(Ie(i)){const r=Vn(i,e,t,n);return r&&zu(r)&&r.catch(o=>{Jr(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(kt(i[r],e,t,n));return s}function Jr(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Vn(l,null,10,[i,o,a]);return}}bd(i,t,s,n)}function bd(i,e,t,n=!0){console.error(i)}let Br=!1,ua=!1;const Rt=[];let xn=0;const Ls=[];let ws=null,Hi=0;const Rs=[];let On=null,Gi=0;const th=Promise.resolve();let Za=null,ha=null;function Md(i){const e=Za||th;return i?e.then(this?i.bind(this):i):e}function Sd(i){let e=xn+1,t=Rt.length;for(;e<t;){const n=e+t>>>1;Os(Rt[n])<i?e=n+1:t=n}return e}function nh(i){(!Rt.length||!Rt.includes(i,Br&&i.allowRecurse?xn+1:xn))&&i!==ha&&(i.id==null?Rt.push(i):Rt.splice(Sd(i.id),0,i),ih())}function ih(){!Br&&!ua&&(ua=!0,Za=th.then(oh))}function wd(i){const e=Rt.indexOf(i);e>xn&&Rt.splice(e,1)}function sh(i,e,t,n){Le(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),ih()}function Td(i){sh(i,ws,Ls,Hi)}function Ed(i){sh(i,On,Rs,Gi)}function Qr(i,e=null){if(Ls.length){for(ha=e,ws=[...new Set(Ls)],Ls.length=0,Hi=0;Hi<ws.length;Hi++)ws[Hi]();ws=null,Hi=0,ha=null,Qr(i,e)}}function rh(i){if(Qr(),Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,On){On.push(...e);return}for(On=e,On.sort((t,n)=>Os(t)-Os(n)),Gi=0;Gi<On.length;Gi++)On[Gi]();On=null,Gi=0}}const Os=i=>i.id==null?1/0:i.id;function oh(i){ua=!1,Br=!0,Qr(i),Rt.sort((t,n)=>Os(t)-Os(n));const e=Kt;try{for(xn=0;xn<Rt.length;xn++){const t=Rt[xn];t&&t.active!==!1&&Vn(t,null,14)}}finally{xn=0,Rt.length=0,rh(),Br=!1,Za=null,(Rt.length||Ls.length||Rs.length)&&oh(i)}}function Ad(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Je;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Je;f&&(s=t.map(m=>m.trim())),h&&(s=t.map(kf))}let a,l=n[a=po(e)]||n[a=po(ln(e))];!l&&r&&(l=n[a=po(as(e))]),l&&kt(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,kt(c,i,6,s)}}function ah(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ie(i)){const l=c=>{const u=ah(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(n.set(i,null),null):(Le(r)?r.forEach(l=>o[l]=null):mt(o,r),n.set(i,o),o)}function eo(i,e){return!i||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(i,e[0].toLowerCase()+e.slice(1))||ke(i,as(e))||ke(i,e))}let Ut=null,to=null;function Vr(i){const e=Ut;return Ut=i,to=i&&i.type.__scopeId||null,e}function lh(i){to=i}function ch(){to=null}function Cd(i,e=Ut,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Ul(-1);const r=Vr(e),o=i(...s);return Vr(r),n._d&&Ul(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function mo(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:p}=i;let d,_;const w=Vr(i);try{if(t.shapeFlag&4){const E=s||n;d=rn(u.call(E,E,h,r,m,f,g)),_=l}else{const E=e;d=rn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),_=e.props?l:Ld(l)}}catch(E){Ps.length=0,Jr(E,i,1),d=Mn(bn)}let A=d;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:M}=A;E.length&&M&7&&(o&&E.some(za)&&(_=Rd(_,o)),A=Wn(A,_))}return t.dirs&&(A=Wn(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,Vr(w),d}const Ld=i=>{let e;for(const t in i)(t==="class"||t==="style"||Kr(t))&&((e||(e={}))[t]=i[t]);return e},Rd=(i,e)=>{const t={};for(const n in i)(!za(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Pd(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Al(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!eo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Al(n,o,c):!0:!!o;return!1}function Al(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!eo(t,r))return!0}return!1}function Dd({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Id=i=>i.__isSuspense;function Nd(i,e){e&&e.pendingBranch?Le(i)?e.effects.push(...i):e.effects.push(i):Ed(i)}function Fd(i,e){if(ct){let t=ct.provides;const n=ct.parent&&ct.parent.provides;n===t&&(t=ct.provides=Object.create(n)),t[i]=e}}function go(i,e,t=!1){const n=ct||Ut;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ie(e)?e.call(n.proxy):e}}const Cl={};function _o(i,e,t){return uh(i,e,t)}function uh(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=Je){const a=ct;let l,c=!1,u=!1;if(Mt(i)?(l=()=>i.value,c=ca(i)):Yi(i)?(l=()=>i,n=!0):Le(i)?(u=!0,c=i.some(_=>Yi(_)||ca(_)),l=()=>i.map(_=>{if(Mt(_))return _.value;if(Yi(_))return ai(_);if(Ie(_))return Vn(_,a,2)})):Ie(i)?e?l=()=>Vn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(i,a,3,[f])}:l=Kt,e&&n){const _=l;l=()=>ai(_())}let h,f=_=>{h=d.onStop=()=>{Vn(_,a,4)}};if(zs)return f=Kt,e?t&&kt(e,a,3,[l(),u?[]:void 0,f]):l(),Kt;let m=u?[]:Cl;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((w,A)=>zr(w,m[A])):zr(_,m)))&&(h&&h(),kt(e,a,3,[_,m===Cl?void 0:m,f]),m=_)}else d.run()};g.allowRecurse=!!e;let p;s==="sync"?p=g:s==="post"?p=()=>Et(g,a&&a.suspense):p=()=>Td(g);const d=new Ha(l,p);return e?t?g():m=d.run():s==="post"?Et(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&ka(a.scope.effects,d)}}function Od(i,e,t){const n=this.proxy,s=ut(i)?i.includes(".")?hh(n,i):()=>n[i]:i.bind(n,n);let r;Ie(e)?r=e:(r=e.handler,t=e);const o=ct;Ji(this);const a=uh(s,r.bind(n),t);return o?Ji(o):hi(),a}function hh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function ai(i,e){if(!at(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Mt(i))ai(i.value,e);else if(Le(i))for(let t=0;t<i.length;t++)ai(i[t],e);else if(Uu(i)||Ki(i))i.forEach(t=>{ai(t,e)});else if(Bu(i))for(const t in i)ai(i[t],e);return i}function Ud(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mh(()=>{i.isMounted=!0}),gh(()=>{i.isUnmounting=!0}),i}const Nt=[Function,Array],zd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(i,{slots:e}){const t=Ep(),n=Ud();let s;return()=>{const r=e.default&&dh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const p of r)if(p.type!==bn){o=p;break}}const a=$e(i),{mode:l}=a;if(n.isLeaving)return xo(o);const c=Ll(o);if(!c)return xo(o);const u=fa(c,a,n,t);da(c,u);const h=t.subTree,f=h&&Ll(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,m=!0)}if(f&&f.type!==bn&&(!si(c,f)||m)){const p=fa(f,a,n,t);if(da(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update()},xo(o);l==="in-out"&&c.type!==bn&&(p.delayLeave=(d,_,w)=>{const A=fh(n,f);A[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},kd=zd;function fh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function fa(i,e,t,n){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=e,A=String(i.key),E=fh(t,i),M=(y,C)=>{y&&kt(y,n,9,C)},D=(y,C)=>{const z=C[1];M(y,C),Le(y)?y.every(O=>O.length<=1)&&z():y.length<=1&&z()},N={mode:r,persisted:o,beforeEnter(y){let C=a;if(!t.isMounted)if(s)C=p||a;else return;y._leaveCb&&y._leaveCb(!0);const z=E[A];z&&si(i,z)&&z.el._leaveCb&&z.el._leaveCb(),M(C,[y])},enter(y){let C=l,z=c,O=u;if(!t.isMounted)if(s)C=d||l,z=_||c,O=w||u;else return;let le=!1;const ee=y._enterCb=F=>{le||(le=!0,F?M(O,[y]):M(z,[y]),N.delayedLeave&&N.delayedLeave(),y._enterCb=void 0)};C?D(C,[y,ee]):ee()},leave(y,C){const z=String(i.key);if(y._enterCb&&y._enterCb(!0),t.isUnmounting)return C();M(h,[y]);let O=!1;const le=y._leaveCb=ee=>{O||(O=!0,C(),ee?M(g,[y]):M(m,[y]),y._leaveCb=void 0,E[z]===i&&delete E[z])};E[z]=i,f?D(f,[y,le]):le()},clone(y){return fa(y,e,t,n)}};return N}function xo(i){if(no(i))return i=Wn(i),i.children=null,i}function Ll(i){return no(i)?i.children?i.children[0]:void 0:i}function da(i,e){i.shapeFlag&6&&i.component?da(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function dh(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let o=i[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===jt?(o.patchFlag&128&&s++,n=n.concat(dh(o.children,e,a))):(e||o.type!==bn)&&n.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const Ir=i=>!!i.type.__asyncLoader,no=i=>i.type.__isKeepAlive;function Bd(i,e){ph(i,"a",e)}function Vd(i,e){ph(i,"da",e)}function ph(i,e,t=ct){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(io(e,n,t),t){let s=t.parent;for(;s&&s.parent;)no(s.parent.vnode)&&Hd(n,e,t,s),s=s.parent}}function Hd(i,e,t,n){const s=io(e,i,n,!0);_h(()=>{ka(n[e],s)},t)}function io(i,e,t=ct,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ls(),Ji(t);const a=kt(e,t,i,o);return hi(),cs(),a});return n?s.unshift(r):s.push(r),r}}const Tn=i=>(e,t=ct)=>(!zs||i==="sp")&&io(i,e,t),Gd=Tn("bm"),mh=Tn("m"),Wd=Tn("bu"),jd=Tn("u"),gh=Tn("bum"),_h=Tn("um"),qd=Tn("sp"),Xd=Tn("rtg"),Kd=Tn("rtc");function Yd(i,e=ct){io("ec",i,e)}function or(i,e){const t=Ut;if(t===null)return i;const n=ro(t)||t.proxy,s=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Je]=e[r];Ie(o)&&(o={mounted:o,updated:o}),o.deep&&ai(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return i}function Yn(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(ls(),kt(l,t,8,[i.el,a,i,e]),cs())}}const xh="components";function Zd(i,e){return Jd(xh,i,!0,e)||i}const $d=Symbol();function Jd(i,e,t=!0,n=!1){const s=Ut||ct;if(s){const r=s.type;if(i===xh){const a=Pp(r,!1);if(a&&(a===e||a===ln(e)||a===Zr(ln(e))))return r}const o=Rl(s[i]||r[i],e)||Rl(s.appContext[i],e);return!o&&n?r:o}}function Rl(i,e){return i&&(i[e]||i[ln(e)]||i[Zr(ln(e))])}const pa=i=>i?Ph(i)?ro(i)||i.proxy:pa(i.parent):null,Hr=mt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>pa(i.parent),$root:i=>pa(i.root),$emit:i=>i.emit,$options:i=>yh(i),$forceUpdate:i=>i.f||(i.f=()=>nh(i.update)),$nextTick:i=>i.n||(i.n=Md.bind(i.proxy)),$watch:i=>Od.bind(i)}),Qd={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(n!==Je&&ke(n,e))return o[e]=1,n[e];if(s!==Je&&ke(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&ke(c,e))return o[e]=3,r[e];if(t!==Je&&ke(t,e))return o[e]=4,t[e];ma&&(o[e]=0)}}const u=Hr[e];let h,f;if(u)return e==="$attrs"&&Dt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Je&&ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return s!==Je&&ke(s,e)?(s[e]=t,!0):n!==Je&&ke(n,e)?(n[e]=t,!0):ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==Je&&ke(i,o)||e!==Je&&ke(e,o)||(a=r[0])&&ke(a,o)||ke(n,o)||ke(Hr,o)||ke(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let ma=!0;function ep(i){const e=yh(i),t=i.proxy,n=i.ctx;ma=!1,e.beforeCreate&&Pl(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:A,unmounted:E,render:M,renderTracked:D,renderTriggered:N,errorCaptured:y,serverPrefetch:C,expose:z,inheritAttrs:O,components:le,directives:ee,filters:F}=e;if(c&&tp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const j in o){const W=o[j];Ie(W)&&(n[j]=W.bind(t))}if(s){const j=s.call(t,t);at(j)&&(i.data=qa(j))}if(ma=!0,r)for(const j in r){const W=r[j],G=Ie(W)?W.bind(t,t):Ie(W.get)?W.get.bind(t,t):Kt,J=!Ie(W)&&Ie(W.set)?W.set.bind(t):Kt,ce=Ip({get:G,set:J});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>ce.value,set:re=>ce.value=re})}if(a)for(const j in a)vh(a[j],n,t,j);if(l){const j=Ie(l)?l.call(t):l;Reflect.ownKeys(j).forEach(W=>{Fd(W,j[W])})}u&&Pl(u,i,"c");function V(j,W){Le(W)?W.forEach(G=>j(G.bind(t))):W&&j(W.bind(t))}if(V(Gd,h),V(mh,f),V(Wd,m),V(jd,g),V(Bd,p),V(Vd,d),V(Yd,y),V(Kd,D),V(Xd,N),V(gh,w),V(_h,E),V(qd,C),Le(z))if(z.length){const j=i.exposed||(i.exposed={});z.forEach(W=>{Object.defineProperty(j,W,{get:()=>t[W],set:G=>t[W]=G})})}else i.exposed||(i.exposed={});M&&i.render===Kt&&(i.render=M),O!=null&&(i.inheritAttrs=O),le&&(i.components=le),ee&&(i.directives=ee)}function tp(i,e,t=Kt,n=!1){Le(i)&&(i=ga(i));for(const s in i){const r=i[s];let o;at(r)?"default"in r?o=go(r.from||s,r.default,!0):o=go(r.from||s):o=go(r),Mt(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Pl(i,e,t){kt(Le(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function vh(i,e,t,n){const s=n.includes(".")?hh(t,n):()=>t[n];if(ut(i)){const r=e[i];Ie(r)&&_o(s,r)}else if(Ie(i))_o(s,i.bind(t));else if(at(i))if(Le(i))i.forEach(r=>vh(r,e,t,n));else{const r=Ie(i.handler)?i.handler.bind(t):e[i.handler];Ie(r)&&_o(s,r,i)}}function yh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Gr(l,c,o,!0)),Gr(l,e,o)),r.set(e,l),l}function Gr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Gr(i,r,t,!0),s&&s.forEach(o=>Gr(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=np[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const np={data:Dl,props:ei,emits:ei,methods:ei,computed:ei,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ei,directives:ei,watch:sp,provide:Dl,inject:ip};function Dl(i,e){return e?i?function(){return mt(Ie(i)?i.call(this,this):i,Ie(e)?e.call(this,this):e)}:e:i}function ip(i,e){return ei(ga(i),ga(e))}function ga(i){if(Le(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function yt(i,e){return i?[...new Set([].concat(i,e))]:e}function ei(i,e){return i?mt(mt(Object.create(null),i),e):e}function sp(i,e){if(!i)return e;if(!e)return i;const t=mt(Object.create(null),i);for(const n in e)t[n]=yt(i[n],e[n]);return t}function rp(i,e,t,n=!1){const s={},r={};kr(r,so,1),i.propsDefaults=Object.create(null),bh(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:pd(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function op(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=$e(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(eo(i.emitsOptions,f))continue;const m=e[f];if(l)if(ke(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=ln(f);s[g]=_a(l,a,g,m,i,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{bh(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=as(h))===h||!ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=_a(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ke(e,h)&&!0)&&(delete r[h],c=!0)}c&&wn(i,"set","$attrs")}function bh(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pr(l))continue;const c=e[l];let u;s&&ke(s,u=ln(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:eo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=$e(t),c=a||Je;for(let u=0;u<r.length;u++){const h=r[u];t[h]=_a(s,l,h,c[h],i,!ke(c,h))}}return o}function _a(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ie(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Ji(s),n=c[t]=l.call(null,e),hi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===as(t))&&(n=!0))}return n}function Mh(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ie(i)){const u=h=>{l=!0;const[f,m]=Mh(h,e,!0);mt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return n.set(i,Xi),Xi;if(Le(r))for(let u=0;u<r.length;u++){const h=ln(r[u]);Il(h)&&(o[h]=Je)}else if(r)for(const u in r){const h=ln(u);if(Il(h)){const f=r[u],m=o[h]=Le(f)||Ie(f)?{type:f}:f;if(m){const g=Ol(Boolean,m.type),p=Ol(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||ke(m,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function Il(i){return i[0]!=="$"}function Nl(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Fl(i,e){return Nl(i)===Nl(e)}function Ol(i,e){return Le(e)?e.findIndex(t=>Fl(t,i)):Ie(e)&&Fl(e,i)?0:-1}const Sh=i=>i[0]==="_"||i==="$stable",$a=i=>Le(i)?i.map(rn):[rn(i)],ap=(i,e,t)=>{if(e._n)return e;const n=Cd((...s)=>$a(e(...s)),t);return n._c=!1,n},wh=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Sh(s))continue;const r=i[s];if(Ie(r))e[s]=ap(s,r,n);else if(r!=null){const o=$a(r);e[s]=()=>o}}},Th=(i,e)=>{const t=$a(e);i.slots.default=()=>t},lp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),kr(e,"_",t)):wh(e,i.slots={})}else i.slots={},e&&Th(i,e);kr(i.slots,so,1)},cp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=Je;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(mt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,wh(e,s)),o=e}else e&&(Th(i,e),o={default:1});if(r)for(const a in s)!Sh(a)&&!(a in o)&&delete s[a]};function Eh(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let up=0;function hp(i,e){return function(n,s=null){Ie(n)||(n=Object.assign({},n)),s!=null&&!at(s)&&(s=null);const r=Eh(),o=new Set;let a=!1;const l=r.app={_uid:up++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Np,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ie(c.install)?(o.add(c),c.install(l,...u)):Ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Mn(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ro(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function xa(i,e,t,n,s=!1){if(Le(i)){i.forEach((f,m)=>xa(f,e&&(Le(e)?e[m]:e),t,n,s));return}if(Ir(n)&&!s)return;const r=n.shapeFlag&4?ro(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ut(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):Mt(c)&&(c.value=null)),Ie(l))Vn(l,a,12,[o,u]);else{const f=ut(l),m=Mt(l);if(f||m){const g=()=>{if(i.f){const p=f?u[l]:l.value;s?Le(p)&&ka(p,r):Le(p)?p.includes(r)||p.push(r):f?(u[l]=[r],ke(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Et(g,t)):g()}}}const Et=Nd;function fp(i){return dp(i)}function dp(i,e){const t=Bf();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Kt,cloneNode:g,insertStaticContent:p}=i,d=(T,R,B,$=null,Q=null,ie=null,se=!1,ae=null,ue=!!R.dynamicChildren)=>{if(T===R)return;T&&!si(T,R)&&($=Re(T),oe(T,Q,ie,!0),T=null),R.patchFlag===-2&&(ue=!1,R.dynamicChildren=null);const{type:v,ref:x,shapeFlag:I}=R;switch(v){case Ja:_(T,R,B,$);break;case bn:w(T,R,B,$);break;case vo:T==null&&A(R,B,$,se);break;case jt:ee(T,R,B,$,Q,ie,se,ae,ue);break;default:I&1?D(T,R,B,$,Q,ie,se,ae,ue):I&6?F(T,R,B,$,Q,ie,se,ae,ue):(I&64||I&128)&&v.process(T,R,B,$,Q,ie,se,ae,ue,_e)}x!=null&&Q&&xa(x,T&&T.ref,ie,R||T,!R)},_=(T,R,B,$)=>{if(T==null)n(R.el=a(R.children),B,$);else{const Q=R.el=T.el;R.children!==T.children&&c(Q,R.children)}},w=(T,R,B,$)=>{T==null?n(R.el=l(R.children||""),B,$):R.el=T.el},A=(T,R,B,$)=>{[T.el,T.anchor]=p(T.children,R,B,$,T.el,T.anchor)},E=({el:T,anchor:R},B,$)=>{let Q;for(;T&&T!==R;)Q=f(T),n(T,B,$),T=Q;n(R,B,$)},M=({el:T,anchor:R})=>{let B;for(;T&&T!==R;)B=f(T),s(T),T=B;s(R)},D=(T,R,B,$,Q,ie,se,ae,ue)=>{se=se||R.type==="svg",T==null?N(R,B,$,Q,ie,se,ae,ue):z(T,R,Q,ie,se,ae,ue)},N=(T,R,B,$,Q,ie,se,ae)=>{let ue,v;const{type:x,props:I,shapeFlag:k,transition:K,patchFlag:ne,dirs:ve}=T;if(T.el&&g!==void 0&&ne===-1)ue=T.el=g(T.el);else{if(ue=T.el=o(T.type,ie,I&&I.is,I),k&8?u(ue,T.children):k&16&&C(T.children,ue,null,$,Q,ie&&x!=="foreignObject",se,ae),ve&&Yn(T,null,$,"created"),I){for(const q in I)q!=="value"&&!Pr(q)&&r(ue,q,null,I[q],ie,T.children,$,Q,Ge);"value"in I&&r(ue,"value",null,I.value),(v=I.onVnodeBeforeMount)&&nn(v,$,T)}y(ue,T,T.scopeId,se,$)}ve&&Yn(T,null,$,"beforeMount");const b=(!Q||Q&&!Q.pendingBranch)&&K&&!K.persisted;b&&K.beforeEnter(ue),n(ue,R,B),((v=I&&I.onVnodeMounted)||b||ve)&&Et(()=>{v&&nn(v,$,T),b&&K.enter(ue),ve&&Yn(T,null,$,"mounted")},Q)},y=(T,R,B,$,Q)=>{if(B&&m(T,B),$)for(let ie=0;ie<$.length;ie++)m(T,$[ie]);if(Q){let ie=Q.subTree;if(R===ie){const se=Q.vnode;y(T,se,se.scopeId,se.slotScopeIds,Q.parent)}}},C=(T,R,B,$,Q,ie,se,ae,ue=0)=>{for(let v=ue;v<T.length;v++){const x=T[v]=ae?Un(T[v]):rn(T[v]);d(null,x,R,B,$,Q,ie,se,ae)}},z=(T,R,B,$,Q,ie,se)=>{const ae=R.el=T.el;let{patchFlag:ue,dynamicChildren:v,dirs:x}=R;ue|=T.patchFlag&16;const I=T.props||Je,k=R.props||Je;let K;B&&Zn(B,!1),(K=k.onVnodeBeforeUpdate)&&nn(K,B,R,T),x&&Yn(R,T,B,"beforeUpdate"),B&&Zn(B,!0);const ne=Q&&R.type!=="foreignObject";if(v?O(T.dynamicChildren,v,ae,B,$,ne,ie):se||G(T,R,ae,null,B,$,ne,ie,!1),ue>0){if(ue&16)le(ae,R,I,k,B,$,Q);else if(ue&2&&I.class!==k.class&&r(ae,"class",null,k.class,Q),ue&4&&r(ae,"style",I.style,k.style,Q),ue&8){const ve=R.dynamicProps;for(let b=0;b<ve.length;b++){const q=ve[b],he=I[q],fe=k[q];(fe!==he||q==="value")&&r(ae,q,he,fe,Q,T.children,B,$,Ge)}}ue&1&&T.children!==R.children&&u(ae,R.children)}else!se&&v==null&&le(ae,R,I,k,B,$,Q);((K=k.onVnodeUpdated)||x)&&Et(()=>{K&&nn(K,B,R,T),x&&Yn(R,T,B,"updated")},$)},O=(T,R,B,$,Q,ie,se)=>{for(let ae=0;ae<R.length;ae++){const ue=T[ae],v=R[ae],x=ue.el&&(ue.type===jt||!si(ue,v)||ue.shapeFlag&70)?h(ue.el):B;d(ue,v,x,null,$,Q,ie,se,!0)}},le=(T,R,B,$,Q,ie,se)=>{if(B!==$){for(const ae in $){if(Pr(ae))continue;const ue=$[ae],v=B[ae];ue!==v&&ae!=="value"&&r(T,ae,v,ue,se,R.children,Q,ie,Ge)}if(B!==Je)for(const ae in B)!Pr(ae)&&!(ae in $)&&r(T,ae,B[ae],null,se,R.children,Q,ie,Ge);"value"in $&&r(T,"value",B.value,$.value)}},ee=(T,R,B,$,Q,ie,se,ae,ue)=>{const v=R.el=T?T.el:a(""),x=R.anchor=T?T.anchor:a("");let{patchFlag:I,dynamicChildren:k,slotScopeIds:K}=R;K&&(ae=ae?ae.concat(K):K),T==null?(n(v,B,$),n(x,B,$),C(R.children,B,x,Q,ie,se,ae,ue)):I>0&&I&64&&k&&T.dynamicChildren?(O(T.dynamicChildren,k,B,Q,ie,se,ae),(R.key!=null||Q&&R===Q.subTree)&&Ah(T,R,!0)):G(T,R,B,x,Q,ie,se,ae,ue)},F=(T,R,B,$,Q,ie,se,ae,ue)=>{R.slotScopeIds=ae,T==null?R.shapeFlag&512?Q.ctx.activate(R,B,$,se,ue):Y(R,B,$,Q,ie,se,ue):V(T,R,ue)},Y=(T,R,B,$,Q,ie,se)=>{const ae=T.component=Tp(T,$,Q);if(no(T)&&(ae.ctx.renderer=_e),Ap(ae),ae.asyncDep){if(Q&&Q.registerDep(ae,j),!T.el){const ue=ae.subTree=Mn(bn);w(null,ue,R,B)}return}j(ae,T,R,B,Q,ie,se)},V=(T,R,B)=>{const $=R.component=T.component;if(Pd(T,R,B))if($.asyncDep&&!$.asyncResolved){W($,R,B);return}else $.next=R,wd($.update),$.update();else R.el=T.el,$.vnode=R},j=(T,R,B,$,Q,ie,se)=>{const ae=()=>{if(T.isMounted){let{next:x,bu:I,u:k,parent:K,vnode:ne}=T,ve=x,b;Zn(T,!1),x?(x.el=ne.el,W(T,x,se)):x=ne,I&&Dr(I),(b=x.props&&x.props.onVnodeBeforeUpdate)&&nn(b,K,x,ne),Zn(T,!0);const q=mo(T),he=T.subTree;T.subTree=q,d(he,q,h(he.el),Re(he),T,Q,ie),x.el=q.el,ve===null&&Dd(T,q.el),k&&Et(k,Q),(b=x.props&&x.props.onVnodeUpdated)&&Et(()=>nn(b,K,x,ne),Q)}else{let x;const{el:I,props:k}=R,{bm:K,m:ne,parent:ve}=T,b=Ir(R);if(Zn(T,!1),K&&Dr(K),!b&&(x=k&&k.onVnodeBeforeMount)&&nn(x,ve,R),Zn(T,!0),I&&Pe){const q=()=>{T.subTree=mo(T),Pe(I,T.subTree,T,Q,null)};b?R.type.__asyncLoader().then(()=>!T.isUnmounted&&q()):q()}else{const q=T.subTree=mo(T);d(null,q,B,$,T,Q,ie),R.el=q.el}if(ne&&Et(ne,Q),!b&&(x=k&&k.onVnodeMounted)){const q=R;Et(()=>nn(x,ve,q),Q)}(R.shapeFlag&256||ve&&Ir(ve.vnode)&&ve.vnode.shapeFlag&256)&&T.a&&Et(T.a,Q),T.isMounted=!0,R=B=$=null}},ue=T.effect=new Ha(ae,()=>nh(v),T.scope),v=T.update=()=>ue.run();v.id=T.uid,Zn(T,!0),v()},W=(T,R,B)=>{R.component=T;const $=T.vnode.props;T.vnode=R,T.next=null,op(T,R.props,$,B),cp(T,R.children,B),ls(),Qr(void 0,T.update),cs()},G=(T,R,B,$,Q,ie,se,ae,ue=!1)=>{const v=T&&T.children,x=T?T.shapeFlag:0,I=R.children,{patchFlag:k,shapeFlag:K}=R;if(k>0){if(k&128){ce(v,I,B,$,Q,ie,se,ae,ue);return}else if(k&256){J(v,I,B,$,Q,ie,se,ae,ue);return}}K&8?(x&16&&Ge(v,Q,ie),I!==v&&u(B,I)):x&16?K&16?ce(v,I,B,$,Q,ie,se,ae,ue):Ge(v,Q,ie,!0):(x&8&&u(B,""),K&16&&C(I,B,$,Q,ie,se,ae,ue))},J=(T,R,B,$,Q,ie,se,ae,ue)=>{T=T||Xi,R=R||Xi;const v=T.length,x=R.length,I=Math.min(v,x);let k;for(k=0;k<I;k++){const K=R[k]=ue?Un(R[k]):rn(R[k]);d(T[k],K,B,null,Q,ie,se,ae,ue)}v>x?Ge(T,Q,ie,!0,!1,I):C(R,B,$,Q,ie,se,ae,ue,I)},ce=(T,R,B,$,Q,ie,se,ae,ue)=>{let v=0;const x=R.length;let I=T.length-1,k=x-1;for(;v<=I&&v<=k;){const K=T[v],ne=R[v]=ue?Un(R[v]):rn(R[v]);if(si(K,ne))d(K,ne,B,null,Q,ie,se,ae,ue);else break;v++}for(;v<=I&&v<=k;){const K=T[I],ne=R[k]=ue?Un(R[k]):rn(R[k]);if(si(K,ne))d(K,ne,B,null,Q,ie,se,ae,ue);else break;I--,k--}if(v>I){if(v<=k){const K=k+1,ne=K<x?R[K].el:$;for(;v<=k;)d(null,R[v]=ue?Un(R[v]):rn(R[v]),B,ne,Q,ie,se,ae,ue),v++}}else if(v>k)for(;v<=I;)oe(T[v],Q,ie,!0),v++;else{const K=v,ne=v,ve=new Map;for(v=ne;v<=k;v++){const be=R[v]=ue?Un(R[v]):rn(R[v]);be.key!=null&&ve.set(be.key,v)}let b,q=0;const he=k-ne+1;let fe=!1,L=0;const de=new Array(he);for(v=0;v<he;v++)de[v]=0;for(v=K;v<=I;v++){const be=T[v];if(q>=he){oe(be,Q,ie,!0);continue}let me;if(be.key!=null)me=ve.get(be.key);else for(b=ne;b<=k;b++)if(de[b-ne]===0&&si(be,R[b])){me=b;break}me===void 0?oe(be,Q,ie,!0):(de[me-ne]=v+1,me>=L?L=me:fe=!0,d(be,R[me],B,null,Q,ie,se,ae,ue),q++)}const pe=fe?pp(de):Xi;for(b=pe.length-1,v=he-1;v>=0;v--){const be=ne+v,me=R[be],Me=be+1<x?R[be+1].el:$;de[v]===0?d(null,me,B,Me,Q,ie,se,ae,ue):fe&&(b<0||v!==pe[b]?re(me,B,Me,2):b--)}}},re=(T,R,B,$,Q=null)=>{const{el:ie,type:se,transition:ae,children:ue,shapeFlag:v}=T;if(v&6){re(T.component.subTree,R,B,$);return}if(v&128){T.suspense.move(R,B,$);return}if(v&64){se.move(T,R,B,_e);return}if(se===jt){n(ie,R,B);for(let I=0;I<ue.length;I++)re(ue[I],R,B,$);n(T.anchor,R,B);return}if(se===vo){E(T,R,B);return}if($!==2&&v&1&&ae)if($===0)ae.beforeEnter(ie),n(ie,R,B),Et(()=>ae.enter(ie),Q);else{const{leave:I,delayLeave:k,afterLeave:K}=ae,ne=()=>n(ie,R,B),ve=()=>{I(ie,()=>{ne(),K&&K()})};k?k(ie,ne,ve):ve()}else n(ie,R,B)},oe=(T,R,B,$=!1,Q=!1)=>{const{type:ie,props:se,ref:ae,children:ue,dynamicChildren:v,shapeFlag:x,patchFlag:I,dirs:k}=T;if(ae!=null&&xa(ae,null,B,T,!0),x&256){R.ctx.deactivate(T);return}const K=x&1&&k,ne=!Ir(T);let ve;if(ne&&(ve=se&&se.onVnodeBeforeUnmount)&&nn(ve,R,T),x&6)Z(T.component,B,$);else{if(x&128){T.suspense.unmount(B,$);return}K&&Yn(T,null,R,"beforeUnmount"),x&64?T.type.remove(T,R,B,Q,_e,$):v&&(ie!==jt||I>0&&I&64)?Ge(v,R,B,!1,!0):(ie===jt&&I&384||!Q&&x&16)&&Ge(ue,R,B),$&&ye(T)}(ne&&(ve=se&&se.onVnodeUnmounted)||K)&&Et(()=>{ve&&nn(ve,R,T),K&&Yn(T,null,R,"unmounted")},B)},ye=T=>{const{type:R,el:B,anchor:$,transition:Q}=T;if(R===jt){Se(B,$);return}if(R===vo){M(T);return}const ie=()=>{s(B),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(T.shapeFlag&1&&Q&&!Q.persisted){const{leave:se,delayLeave:ae}=Q,ue=()=>se(B,ie);ae?ae(T.el,ie,ue):ue()}else ie()},Se=(T,R)=>{let B;for(;T!==R;)B=f(T),s(T),T=B;s(R)},Z=(T,R,B)=>{const{bum:$,scope:Q,update:ie,subTree:se,um:ae}=T;$&&Dr($),Q.stop(),ie&&(ie.active=!1,oe(se,T,R,B)),ae&&Et(ae,R),Et(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ge=(T,R,B,$=!1,Q=!1,ie=0)=>{for(let se=ie;se<T.length;se++)oe(T[se],R,B,$,Q)},Re=T=>T.shapeFlag&6?Re(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),Ee=(T,R,B)=>{T==null?R._vnode&&oe(R._vnode,null,null,!0):d(R._vnode||null,T,R,null,null,null,B),rh(),R._vnode=T},_e={p:d,um:oe,m:re,r:ye,mt:Y,mc:C,pc:G,pbc:O,n:Re,o:i};let ze,Pe;return e&&([ze,Pe]=e(_e)),{render:Ee,hydrate:ze,createApp:hp(Ee,ze)}}function Zn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Ah(i,e,t=!1){const n=i.children,s=e.children;if(Le(n)&&Le(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Un(s[r]),a.el=o.el),t||Ah(o,a))}}function pp(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const mp=i=>i.__isTeleport,jt=Symbol(void 0),Ja=Symbol(void 0),bn=Symbol(void 0),vo=Symbol(void 0),Ps=[];let Xt=null;function Qa(i=!1){Ps.push(Xt=i?null:[])}function gp(){Ps.pop(),Xt=Ps[Ps.length-1]||null}let Us=1;function Ul(i){Us+=i}function Ch(i){return i.dynamicChildren=Us>0?Xt||Xi:null,gp(),Us>0&&Xt&&Xt.push(i),i}function Lh(i,e,t,n,s,r){return Ch(et(i,e,t,n,s,r,!0))}function _p(i,e,t,n,s){return Ch(Mn(i,e,t,n,s,!0))}function xp(i){return i?i.__v_isVNode===!0:!1}function si(i,e){return i.type===e.type&&i.key===e.key}const so="__vInternal",Rh=({key:i})=>i!=null?i:null,Nr=({ref:i,ref_key:e,ref_for:t})=>i!=null?ut(i)||Mt(i)||Ie(i)?{i:Ut,r:i,k:e,f:!!t}:i:null;function et(i,e=null,t=null,n=0,s=null,r=i===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Rh(e),ref:e&&Nr(e),scopeId:to,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(el(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=ut(t)?8:16),Us>0&&!o&&Xt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xt.push(l),l}const Mn=vp;function vp(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===$d)&&(i=bn),xp(i)){const a=Wn(i,e,!0);return t&&el(a,t),Us>0&&!r&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(i)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(Dp(i)&&(i=i.__vccOpts),e){e=yp(e);let{class:a,style:l}=e;a&&!ut(a)&&(e.class=Xr(a)),at(l)&&(Ju(l)&&!Le(l)&&(l=mt({},l)),e.style=Ua(l))}const o=ut(i)?1:Id(i)?128:mp(i)?64:at(i)?4:Ie(i)?2:0;return et(i,e,t,n,s,o,r,!0)}function yp(i){return i?Ju(i)||so in i?mt({},i):i:null}function Wn(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Mp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Rh(a),ref:e&&e.ref?t&&s?Le(s)?s.concat(Nr(e)):[s,Nr(e)]:Nr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==jt?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Wn(i.ssContent),ssFallback:i.ssFallback&&Wn(i.ssFallback),el:i.el,anchor:i.anchor}}function bp(i=" ",e=0){return Mn(Ja,null,i,e)}function rn(i){return i==null||typeof i=="boolean"?Mn(bn):Le(i)?Mn(jt,null,i.slice()):typeof i=="object"?Un(i):Mn(Ja,null,String(i))}function Un(i){return i.el===null||i.memo?i:Wn(i)}function el(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),el(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(so in e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),n&64?(t=16,e=[bp(e)]):t=8);i.children=e,i.shapeFlag|=t}function Mp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Xr([e.class,n.class]));else if(s==="style")e.style=Ua([e.style,n.style]);else if(Kr(s)){const r=e[s],o=n[s];o&&r!==o&&!(Le(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function nn(i,e,t,n=null){kt(i,e,7,[t,n])}const Sp=Eh();let wp=0;function Tp(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Sp,r={uid:wp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mh(n,s),emitsOptions:ah(n,s),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ad.bind(null,r),i.ce&&i.ce(r),r}let ct=null;const Ep=()=>ct||Ut,Ji=i=>{ct=i,i.scope.on()},hi=()=>{ct&&ct.scope.off(),ct=null};function Ph(i){return i.vnode.shapeFlag&4}let zs=!1;function Ap(i,e=!1){zs=e;const{props:t,children:n}=i.vnode,s=Ph(i);rp(i,t,s,e),lp(i,n);const r=s?Cp(i,e):void 0;return zs=!1,r}function Cp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Qu(new Proxy(i.ctx,Qd));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Rp(i):null;Ji(i),ls();const r=Vn(n,i,0,[i.props,s]);if(cs(),hi(),zu(r)){if(r.then(hi,hi),e)return r.then(o=>{zl(i,o,e)}).catch(o=>{Jr(o,i,0)});i.asyncDep=r}else zl(i,r,e)}else Dh(i,e)}function zl(i,e,t){Ie(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:at(e)&&(i.setupState=eh(e)),Dh(i,t)}let kl;function Dh(i,e,t){const n=i.type;if(!i.render){if(!e&&kl&&!n.render){const s=n.template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=mt(mt({isCustomElement:r,delimiters:a},o),l);n.render=kl(s,c)}}i.render=n.render||Kt}Ji(i),ls(),ep(i),cs(),hi()}function Lp(i){return new Proxy(i.attrs,{get(e,t){return Dt(i,"get","$attrs"),e[t]}})}function Rp(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Lp(i))},slots:i.slots,emit:i.emit,expose:e}}function ro(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(eh(Qu(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hr)return Hr[t](i)}}))}function Pp(i,e=!0){return Ie(i)?i.displayName||i.name:i.name||e&&i.__name}function Dp(i){return Ie(i)&&"__vccOpts"in i}const Ip=(i,e)=>yd(i,e,zs),Np="3.2.37",Fp="http://www.w3.org/2000/svg",ri=typeof document!="undefined"?document:null,Bl=ri&&ri.createElement("template"),Op={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?ri.createElementNS(Fp,i):ri.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ri.createTextNode(i),createComment:i=>ri.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ri.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Bl.innerHTML=n?`<svg>${i}</svg>`:i;const a=Bl.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Up(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function zp(i,e,t){const n=i.style,s=ut(t);if(t&&!s){for(const r in t)va(n,r,t[r]);if(e&&!ut(e))for(const r in e)t[r]==null&&va(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Vl=/\s*!important$/;function va(i,e,t){if(Le(t))t.forEach(n=>va(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=kp(i,e);Vl.test(t)?i.setProperty(as(n),t.replace(Vl,""),"important"):i[n]=t}}const Hl=["Webkit","Moz","ms"],yo={};function kp(i,e){const t=yo[e];if(t)return t;let n=ln(e);if(n!=="filter"&&n in i)return yo[e]=n;n=Zr(n);for(let s=0;s<Hl.length;s++){const r=Hl[s]+n;if(r in i)return yo[e]=r}return e}const Gl="http://www.w3.org/1999/xlink";function Bp(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Gl,e.slice(6,e.length)):i.setAttributeNS(Gl,e,t);else{const r=Af(e);t==null||r&&!Fu(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function Vp(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Fu(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[Ih,Hp]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let ya=0;const Gp=Promise.resolve(),Wp=()=>{ya=0},jp=()=>ya||(Gp.then(Wp),ya=Ih());function Nh(i,e,t,n){i.addEventListener(e,t,n)}function qp(i,e,t,n){i.removeEventListener(e,t,n)}function Xp(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Kp(e);if(n){const c=r[e]=Yp(n,s);Nh(i,a,c,l)}else o&&(qp(i,a,o,l),r[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Kp(i){let e;if(Wl.test(i)){e={};let t;for(;t=i.match(Wl);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[as(i.slice(2)),e]}function Yp(i,e){const t=n=>{const s=n.timeStamp||Ih();(Hp||s>=t.attached-1)&&kt(Zp(n,t.value),e,5,[n])};return t.value=i,t.attached=jp(),t}function Zp(i,e){if(Le(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const jl=/^on[a-z]/,$p=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?Up(i,n,s):e==="style"?zp(i,t,n):Kr(e)?za(e)||Xp(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jp(i,e,n,s))?Vp(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Bp(i,e,n,s))};function Jp(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&jl.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||jl.test(e)&&ut(t)?!1:e in i}const Qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kd.props;const ql=i=>{const e=i.props["onUpdate:modelValue"]||!1;return Le(e)?t=>Dr(e,t):e},ar={created(i,{value:e},t){i.checked=Ur(e,t.props.value),i._assign=ql(t),Nh(i,"change",()=>{i._assign(em(i))})},beforeUpdate(i,{value:e,oldValue:t},n){i._assign=ql(n),e!==t&&(i.checked=Ur(e,n.props.value))}};function em(i){return"_value"in i?i._value:i.value}const tm=mt({patchProp:$p},Op);let Xl;function nm(){return Xl||(Xl=fp(tm))}const im=(...i)=>{const e=nm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=sm(n);if(!s)return;const r=e._component;!Ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sm(i){return ut(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="142",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rm=0,Kl=1,om=2,Fh=1,am=2,Ts=3,Qi=0,Yt=1,jn=2,lm=1,Hn=0,Zi=1,ba=2,Yl=3,Zl=4,cm=5,Wi=100,um=101,hm=102,$l=103,Jl=104,fm=200,dm=201,pm=202,mm=203,Oh=204,Uh=205,gm=206,_m=207,xm=208,vm=209,ym=210,bm=0,Mm=1,Sm=2,Ma=3,wm=4,Tm=5,Em=6,Am=7,zh=0,Cm=1,Lm=2,Sn=0,Rm=1,Pm=2,Dm=3,Im=4,Nm=5,kh=300,es=301,ts=302,Sa=303,wa=304,oo=306,ns=1e3,Ot=1001,Wr=1002,ot=1003,Ta=1004,Ea=1005,At=1006,Bh=1007,us=1008,mi=1009,Fm=1010,Om=1011,Vh=1012,Um=1013,li=1014,zn=1015,ks=1016,zm=1017,km=1018,$i=1020,Bm=1021,Vm=1022,Pt=1023,Hm=1024,Gm=1025,fi=1026,is=1027,Wm=1028,jm=1029,qm=1030,Xm=1031,Km=1033,bo=33776,Mo=33777,So=33778,wo=33779,Ql=35840,ec=35841,tc=35842,nc=35843,Ym=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,vc=36492,Bs=2300,ss=2301,To=2302,yc=2400,bc=2401,Mc=2402,Zm=2500,$m=2501,Jm=1,Hh=2,qn=3e3,Ke=3001,Qm=3200,eg=3201,nl=0,tg=1,_n="srgb",ci="srgb-linear",Eo=7680,ng=519,Aa=35044,Sc="300 es",Ca=1035;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const Ds=Math.PI/180,Vs=180/Math.PI;function Zt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function il(i,e){return(i%e+e)%e}function ig(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sg(i,e,t){return i!==e?(t-i)/(e-i):0}function Is(i,e,t){return(1-t)*i+t*e}function rg(i,e,t,n){return Is(i,e,1-Math.exp(-t*n))}function og(i,e=1){return e-Math.abs(il(i,e*2)-e)}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ug(i,e){return i+Math.random()*(e-i)}function hg(i){return i*(.5-Math.random())}function fg(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*Ds}function pg(i){return i*Vs}function La(i){return(i&i-1)===0&&i!==0}function Gh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gg(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _g(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Es=Object.freeze({__proto__:null,DEG2RAD:Ds,RAD2DEG:Vs,generateUUID:Zt,clamp:dt,euclideanModulo:il,mapLinear:ig,inverseLerp:sg,lerp:Is,damp:rg,pingpong:og,smoothstep:ag,smootherstep:lg,randInt:cg,randFloat:ug,randFloatSpread:hg,seededRandom:fg,degToRad:dg,radToDeg:pg,isPowerOfTwo:La,ceilPowerOfTwo:Gh,floorPowerOfTwo:jr,setQuaternionFromProperEuler:mg,normalize:_g,denormalize:gg});class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=s[0],d=s[3],_=s[6],w=s[1],A=s[4],E=s[7],M=s[2],D=s[5],N=s[8];return r[0]=o*p+a*w+l*M,r[3]=o*d+a*A+l*D,r[6]=o*_+a*E+l*N,r[1]=c*p+u*w+h*M,r[4]=c*d+u*A+h*D,r[7]=c*_+u*E+h*N,r[2]=f*p+m*w+g*M,r[5]=f*d+m*A+g*D,r[8]=f*_+m*E+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*c-u*n)*p,e[2]=(a*n-s*o)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Wh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ao={[_n]:{[ci]:di},[ci]:{[_n]:Fr}},Vt={legacyMode:!0,get workingColorSpace(){return ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Ao[e]&&Ao[e][t]!==void 0){const n=Ao[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Ht={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function cr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ci){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ci){if(e=il(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Co(o,r,e+1/3),this.g=Co(o,r,e),this.b=Co(o,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Vt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=_n){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Vt.fromWorkingColorSpace(cr(this,rt),e),dt(rt.r*255,0,255)<<16^dt(rt.g*255,0,255)<<8^dt(rt.b*255,0,255)<<0}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ci){Vt.fromWorkingColorSpace(cr(this,rt),t);const n=rt.r,s=rt.g,r=rt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ci){return Vt.fromWorkingColorSpace(cr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=_n){return Vt.fromWorkingColorSpace(cr(this,rt),e),e!==_n?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(lr);const n=Is(Ht.h,lr.h,t),s=Is(Ht.s,lr.s,t),r=Is(Ht.l,lr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=jh;let Ai;class qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Hs("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xh{constructor(e=null){this.isSource=!0,this.uuid=Zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lo(s[o].image)):r.push(Lo(s[o]))}else r=Lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xg=0;class gt extends xi{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Ot,s=Ot,r=At,o=us,a=Pt,l=mi,c=1,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Zt(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=kh;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,M=(_+1)/2,D=(u+f)/4,N=(h+p)/4,y=(g+d)/4;return A>E&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=D/n,r=N/n):E>M?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=N/r,s=y/r),this.set(n,s,r,t),this}let w=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(h-p)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends xi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kh extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==g){let d=1-a;const _=l*f+c*m+u*g+h*p,w=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const M=Math.sqrt(A),D=Math.atan2(M,_*w);d=Math.sin(d*D)/M,a=Math.sin(a*D)/M}const E=a*w;if(l=l*d+f*E,c=c*d+m*E,u=u*d+g*E,h=h*d+p*E,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new P,Tc=new $t;class vi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)$n.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox),Po.applyMatrix4(e.matrixWorld),this.union(Po);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ur.subVectors(this.max,_s),Ci.subVectors(e.a,_s),Li.subVectors(e.b,_s),Ri.subVectors(e.c,_s),Cn.subVectors(Li,Ci),Ln.subVectors(Ri,Li),Jn.subVectors(Ci,Ri);let t=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Jn.z,Jn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Jn.z,0,-Jn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Jn.y,Jn.x,0];return!Do(t,Ci,Li,Ri,ur)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Ci,Li,Ri,ur))?!1:(hr.crossVectors(Cn,Ln),t=[hr.x,hr.y,hr.z],Do(t,Ci,Li,Ri,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new P,new P,new P,new P,new P,new P,new P,new P],$n=new P,Po=new vi,Ci=new P,Li=new P,Ri=new P,Cn=new P,Ln=new P,Jn=new P,_s=new P,ur=new P,hr=new P,Qn=new P;function Do(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yg=new vi,Ec=new P,fr=new P,Io=new P;class hs{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(Io.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?fr.set(0,0,1).multiplyScalar(e.radius):fr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ec.copy(e.center).add(fr)),this.expandByPoint(Ec.copy(e.center).sub(fr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new P,No=new P,dr=new P,Rn=new P,Fo=new P,pr=new P,Oo=new P;class ao{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.direction).multiplyScalar(t).add(this.origin),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){No.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=Rn.dot(this.direction),l=-Rn.dot(dr),c=Rn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(dr).multiplyScalar(f).add(No),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){Fo.subVectors(t,e),pr.subVectors(n,e),Oo.crossVectors(Fo,pr);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,e);const l=a*this.direction.dot(pr.crossVectors(Rn,pr));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(Rn));if(c<0||l+c>o)return null;const u=-a*Rn.dot(Oo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Mg)}lookAt(e,t,n){const s=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Pn.crossVectors(n,Ct),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Pn.crossVectors(n,Ct)),Pn.normalize(),mr.crossVectors(Ct,Pn),s[0]=Pn.x,s[4]=mr.x,s[8]=Ct.x,s[1]=Pn.y,s[5]=mr.y,s[9]=Ct.y,s[2]=Pn.z,s[6]=mr.z,s[10]=Ct.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],w=n[3],A=n[7],E=n[11],M=n[15],D=s[0],N=s[4],y=s[8],C=s[12],z=s[1],O=s[5],le=s[9],ee=s[13],F=s[2],Y=s[6],V=s[10],j=s[14],W=s[3],G=s[7],J=s[11],ce=s[15];return r[0]=o*D+a*z+l*F+c*W,r[4]=o*N+a*O+l*Y+c*G,r[8]=o*y+a*le+l*V+c*J,r[12]=o*C+a*ee+l*j+c*ce,r[1]=u*D+h*z+f*F+m*W,r[5]=u*N+h*O+f*Y+m*G,r[9]=u*y+h*le+f*V+m*J,r[13]=u*C+h*ee+f*j+m*ce,r[2]=g*D+p*z+d*F+_*W,r[6]=g*N+p*O+d*Y+_*G,r[10]=g*y+p*le+d*V+_*J,r[14]=g*C+p*ee+d*j+_*ce,r[3]=w*D+A*z+E*F+M*W,r[7]=w*N+A*O+E*Y+M*G,r[11]=w*y+A*le+E*V+M*J,r[15]=w*C+A*ee+E*j+M*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*m-n*l*m)+p*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+d*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],w=h*d*c-p*f*c+p*l*m-a*d*m-h*l*_+a*f*_,A=g*f*c-u*d*c-g*l*m+o*d*m+u*l*_-o*f*_,E=u*p*c-g*h*c+g*a*m-o*p*m-u*a*_+o*h*_,M=g*h*l-u*p*l-g*a*f+o*p*f+u*a*d-o*h*d,D=t*w+n*A+s*E+r*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=w*N,e[1]=(p*f*r-h*d*r-p*s*m+n*d*m+h*s*_-n*f*_)*N,e[2]=(a*d*r-p*l*r+p*s*c-n*d*c-a*s*_+n*l*_)*N,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*m-n*l*m)*N,e[4]=A*N,e[5]=(u*d*r-g*f*r+g*s*m-t*d*m-u*s*_+t*f*_)*N,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*N,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*N,e[8]=E*N,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*N,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*N,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*N,e[12]=M*N,e[13]=(u*p*s-g*h*s+g*n*f-t*p*f-u*n*d+t*h*d)*N,e[14]=(g*a*s-o*p*s-g*n*l+t*p*l+o*n*d-t*a*d)*N,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,p=o*u,d=o*h,_=a*h,w=l*c,A=l*u,E=l*h,M=n.x,D=n.y,N=n.z;return s[0]=(1-(p+_))*M,s[1]=(m+E)*M,s[2]=(g-A)*M,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(f+_))*D,s[6]=(d+w)*D,s[7]=0,s[8]=(g+A)*N,s[9]=(d-w)*N,s[10]=(1-(f+p))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gt.copy(this);const c=1/r,u=1/o,h=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new P,Gt=new He,bg=new P(0,0,0),Mg=new P(1,1,1),Pn=new P,mr=new P,Ct=new P,Ac=new He,Cc=new $t;class Ys{constructor(e=0,t=0,n=0,s=Ys.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ys.DefaultOrder="XYZ";Ys.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const Lc=new P,Di=new $t,fn=new He,gr=new P,xs=new P,wg=new P,Tg=new $t,Rc=new P(1,0,0),Pc=new P(0,1,0),Dc=new P(0,0,1),Eg={type:"added"},Ic={type:"removed"};class nt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new P,t=new Ys,n=new $t,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new zt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(xs,gr,this.up):fn.lookAt(gr,xs,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(fn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}nt.DefaultUp=new P(0,1,0);nt.DefaultMatrixAutoUpdate=!0;const Wt=new P,dn=new P,Uo=new P,pn=new P,Ii=new P,Ni=new P,Nc=new P,zo=new P,ko=new P,Bo=new P;class vn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wt.subVectors(e,t),s.cross(Wt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wt.subVectors(s,t),dn.subVectors(n,t),Uo.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(dn),l=Wt.dot(Uo),c=dn.dot(dn),u=dn.dot(Uo),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,pn),l.set(0,0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(e,t,n,s){return Wt.subVectors(n,t),dn.subVectors(e,t),Wt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Wt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return vn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ni.subVectors(r,n),zo.subVectors(e,n);const l=Ii.dot(zo),c=Ni.dot(zo);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,s);const u=Ii.dot(ko),h=Ni.dot(ko);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);Bo.subVectors(e,r);const m=Ii.dot(Bo),g=Ni.dot(Bo);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ni,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Nc.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Nc,a);const _=1/(d+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ag=0;class an extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Zt(),this.name="",this.type="Material",this.blending=Zi,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Oh,this.blendDst=Uh,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===lm;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new P,_r=new we;class St{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Te),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new we),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new P),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Yh extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zh extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cg=0;const Ft=new He,Vo=new nt,Fi=new P,Lt=new vi,vs=new vi,lt=new P;class It extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?Zh:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Lt.min,vs.min),Lt.expandByPoint(lt),lt.addVectors(Lt.max,vs.max),Lt.expandByPoint(lt)):(Lt.expandByPoint(vs.min),Lt.expandByPoint(vs.max))}Lt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)lt.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),lt.add(Fi)),s=Math.max(s,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let z=0;z<a;z++)c[z]=new P,u[z]=new P;const h=new P,f=new P,m=new P,g=new we,p=new we,d=new we,_=new P,w=new P;function A(z,O,le){h.fromArray(s,z*3),f.fromArray(s,O*3),m.fromArray(s,le*3),g.fromArray(o,z*2),p.fromArray(o,O*2),d.fromArray(o,le*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const ee=1/(p.x*d.y-d.x*p.y);!isFinite(ee)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(ee),w.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(ee),c[z].add(_),c[O].add(_),c[le].add(_),u[z].add(w),u[O].add(w),u[le].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let z=0,O=E.length;z<O;++z){const le=E[z],ee=le.start,F=le.count;for(let Y=ee,V=ee+F;Y<V;Y+=3)A(n[Y+0],n[Y+1],n[Y+2])}const M=new P,D=new P,N=new P,y=new P;function C(z){N.fromArray(r,z*3),y.copy(N);const O=c[z];M.copy(O),M.sub(N.multiplyScalar(N.dot(O))).normalize(),D.crossVectors(y,O);const ee=D.dot(u[z])<0?-1:1;l[z*4]=M.x,l[z*4+1]=M.y,l[z*4+2]=M.z,l[z*4+3]=ee}for(let z=0,O=E.length;z<O;++z){const le=E[z],ee=le.start,F=le.count;for(let Y=ee,V=ee+F;Y<V;Y+=3)C(n[Y+0]),C(n[Y+1]),C(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const o=n[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new St(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new He,Oi=new ao,Ho=new hs,Dn=new P,In=new P,Nn=new P,Go=new P,Wo=new P,jo=new P,xr=new P,vr=new P,yr=new P,br=new we,Mr=new we,Sr=new we,qo=new P,wr=new P;class pt extends nt{constructor(e=new It,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),e.ray.intersectsSphere(Ho)===!1)||(Fc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Fc),n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const _=m[p],w=s[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=A,D=E;M<D;M+=3){const N=a.getX(M),y=a.getX(M+1),C=a.getX(M+2);o=Tr(this,w,e,Oi,l,c,u,h,f,N,y,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,w=d;_<w;_+=3){const A=a.getX(_),E=a.getX(_+1),M=a.getX(_+2);o=Tr(this,s,e,Oi,l,c,u,h,f,A,E,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const _=m[p],w=s[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=A,D=E;M<D;M+=3){const N=M,y=M+1,C=M+2;o=Tr(this,w,e,Oi,l,c,u,h,f,N,y,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,w=d;_<w;_+=3){const A=_,E=_+1,M=_+2;o=Tr(this,s,e,Oi,l,c,u,h,f,A,E,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Lg(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==jn,a),l===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:i}}function Tr(i,e,t,n,s,r,o,a,l,c,u,h){Dn.fromBufferAttribute(s,c),In.fromBufferAttribute(s,u),Nn.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){xr.set(0,0,0),vr.set(0,0,0),yr.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(Go.fromBufferAttribute(_,c),Wo.fromBufferAttribute(_,u),jo.fromBufferAttribute(_,h),o?(xr.addScaledVector(Go,d),vr.addScaledVector(Wo,d),yr.addScaledVector(jo,d)):(xr.addScaledVector(Go.sub(Dn),d),vr.addScaledVector(Wo.sub(In),d),yr.addScaledVector(jo.sub(Nn),d)))}Dn.add(xr),In.add(vr),Nn.add(yr)}i.isSkinnedMesh&&(i.boneTransform(c,Dn),i.boneTransform(u,In),i.boneTransform(h,Nn));const m=Lg(i,e,t,n,Dn,In,Nn,qo);if(m){a&&(br.fromBufferAttribute(a,c),Mr.fromBufferAttribute(a,u),Sr.fromBufferAttribute(a,h),m.uv=vn.getUV(qo,Dn,In,Nn,br,Mr,Sr,new we)),l&&(br.fromBufferAttribute(l,c),Mr.fromBufferAttribute(l,u),Sr.fromBufferAttribute(l,h),m.uv2=vn.getUV(qo,Dn,In,Nn,br,Mr,Sr,new we));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};vn.getNormal(Dn,In,Nn,g.normal),m.face=g}return m}class Zs extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function g(p,d,_,w,A,E,M,D,N,y,C){const z=E/N,O=M/y,le=E/2,ee=M/2,F=D/2,Y=N+1,V=y+1;let j=0,W=0;const G=new P;for(let J=0;J<V;J++){const ce=J*O-ee;for(let re=0;re<Y;re++){const oe=re*z-le;G[p]=oe*w,G[d]=ce*A,G[_]=F,c.push(G.x,G.y,G.z),G[p]=0,G[d]=0,G[_]=D>0?1:-1,u.push(G.x,G.y,G.z),h.push(re/N),h.push(1-J/y),j+=1}}for(let J=0;J<y;J++)for(let ce=0;ce<N;ce++){const re=f+ce+Y*J,oe=f+ce+Y*(J+1),ye=f+(ce+1)+Y*(J+1),Se=f+(ce+1)+Y*J;l.push(re,oe,Se),l.push(oe,ye,Se),W+=6}a.addGroup(m,W,C),m+=W,f+=j}}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=rs(i[t]);for(const s in n)e[s]=n[s]}return e}const Rg={clone:rs,merge:ft};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends $h{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=90,zi=1;class Ig extends nt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new bt(Ui,zi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(1,0,0)),this.add(s);const r=new bt(Ui,zi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const o=new bt(Ui,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new bt(Ui,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const l=new bt(Ui,zi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new bt(Ui,zi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class rl extends gt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ng extends gi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zs(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Hn});r.uniforms.tEquirect.value=t;const o=new pt(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=At),new Ig(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Xo=new P,Fg=new P,Og=new zt;class ti{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xo.subVectors(n,t).cross(Fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Og.getNormalMatrix(e),s=this.coplanarPoint(Xo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new hs,Er=new P;class ol{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],w=n[14],A=n[15];return t[0].setComponents(a-s,h-l,p-f,A-d).normalize(),t[1].setComponents(a+s,h+l,p+f,A+d).normalize(),t[2].setComponents(a+r,h+c,p+m,A+_).normalize(),t[3].setComponents(a-r,h-c,p-m,A-_).normalize(),t[4].setComponents(a-o,h-u,p-g,A-w).normalize(),t[5].setComponents(a+o,h+u,p+g,A+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ug(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class al extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const w=_*f-o;for(let A=0;A<c;A++){const E=A*h-r;g.push(E,-w,0),p.push(0,0,1),d.push(A/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const A=w+c*_,E=w+c*(_+1),M=w+1+c*(_+1),D=w+1+c*_;m.push(A,E,D),m.push(E,M,D)}this.setIndex(m),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(p,3)),this.setAttribute("uv",new Bt(d,2))}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}var zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg="vec3 transformed = vec3( position );",jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xg=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,__=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,M_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,T_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,P_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,D_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,$_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,m0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,C0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,L0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,R0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,P0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,D0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,I0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ex=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:zg,alphamap_pars_fragment:kg,alphatest_fragment:Bg,alphatest_pars_fragment:Vg,aomap_fragment:Hg,aomap_pars_fragment:Gg,begin_vertex:Wg,beginnormal_vertex:jg,bsdfs:qg,iridescence_fragment:Xg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Jg,color_fragment:Qg,color_pars_fragment:e_,color_pars_vertex:t_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:r_,displacementmap_pars_vertex:o_,displacementmap_vertex:a_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,encodings_fragment:u_,encodings_pars_fragment:h_,envmap_fragment:f_,envmap_common_pars_fragment:d_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:E_,envmap_vertex:g_,fog_vertex:__,fog_pars_vertex:x_,fog_fragment:v_,fog_pars_fragment:y_,gradientmap_pars_fragment:b_,lightmap_fragment:M_,lightmap_pars_fragment:S_,lights_lambert_vertex:w_,lights_pars_begin:T_,lights_toon_fragment:A_,lights_toon_pars_fragment:C_,lights_phong_fragment:L_,lights_phong_pars_fragment:R_,lights_physical_fragment:P_,lights_physical_pars_fragment:D_,lights_fragment_begin:I_,lights_fragment_maps:N_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:k_,map_fragment:B_,map_pars_fragment:V_,map_particle_fragment:H_,map_particle_pars_fragment:G_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:j_,morphcolor_vertex:q_,morphnormal_vertex:X_,morphtarget_pars_vertex:K_,morphtarget_vertex:Y_,normal_fragment_begin:Z_,normal_fragment_maps:$_,normal_pars_fragment:J_,normal_pars_vertex:Q_,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,output_fragment:o0,packing:a0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:u0,dithering_pars_fragment:h0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:x0,skinning_pars_vertex:v0,skinning_vertex:y0,skinnormal_vertex:b0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:w0,tonemapping_pars_fragment:T0,transmission_fragment:E0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:L0,uv_vertex:R0,uv2_pars_fragment:P0,uv2_pars_vertex:D0,uv2_vertex:I0,worldpos_vertex:N0,background_vert:F0,background_frag:O0,cube_vert:U0,cube_frag:z0,depth_vert:k0,depth_frag:B0,distanceRGBA_vert:V0,distanceRGBA_frag:H0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:j0,linedashed_frag:q0,meshbasic_vert:X0,meshbasic_frag:K0,meshlambert_vert:Y0,meshlambert_frag:Z0,meshmatcap_vert:$0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:ex,meshphong_vert:tx,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ox,points_vert:ax,points_frag:lx,shadow_vert:cx,shadow_frag:ux,sprite_vert:hx,sprite_frag:fx},xe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},on={basic:{uniforms:ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:ft([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:ft([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:ft([xe.points,xe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:ft([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:ft([xe.common,xe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:ft([xe.sprite,xe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},cube:{uniforms:ft([xe.envmap,{opacity:{value:1}}]),vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:ft([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:ft([xe.lights,xe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};on.physical={uniforms:ft([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function dx(i,e,t,n,s,r){const o=new Te(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let _=!1,w=d.isScene===!0?d.background:null;w&&w.isTexture&&(w=e.get(w));const A=i.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===oo)?(c===void 0&&(c=new pt(new Zs(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:rs(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new pt(new al(2,2),new Xn({name:"BackgroundMaterial",uniforms:rs(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function px(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(F,Y,V,j,W){let G=!1;if(o){const J=p(j,V,Y);c!==J&&(c=J,m(c.object)),G=_(F,j,V,W),G&&w(F,j,V,W)}else{const J=Y.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=j.id,c.program=V.id,c.wireframe=J,G=!0)}W!==null&&t.update(W,34963),(G||u)&&(u=!1,y(F,Y,V,j),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,Y,V){const j=V.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let G=W[Y.id];G===void 0&&(G={},W[Y.id]=G);let J=G[j];return J===void 0&&(J=d(f()),G[j]=J),J}function d(F){const Y=[],V=[],j=[];for(let W=0;W<s;W++)Y[W]=0,V[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:j,object:F,attributes:{},index:null}}function _(F,Y,V,j){const W=c.attributes,G=Y.attributes;let J=0;const ce=V.getAttributes();for(const re in ce)if(ce[re].location>=0){const ye=W[re];let Se=G[re];if(Se===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),ye===void 0||ye.attribute!==Se||Se&&ye.data!==Se.data)return!0;J++}return c.attributesNum!==J||c.index!==j}function w(F,Y,V,j){const W={},G=Y.attributes;let J=0;const ce=V.getAttributes();for(const re in ce)if(ce[re].location>=0){let ye=G[re];ye===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor));const Se={};Se.attribute=ye,ye&&ye.data&&(Se.data=ye.data),W[re]=Se,J++}c.attributes=W,c.attributesNum=J,c.index=j}function A(){const F=c.newAttributes;for(let Y=0,V=F.length;Y<V;Y++)F[Y]=0}function E(F){M(F,0)}function M(F,Y){const V=c.newAttributes,j=c.enabledAttributes,W=c.attributeDivisors;V[F]=1,j[F]===0&&(i.enableVertexAttribArray(F),j[F]=1),W[F]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),W[F]=Y)}function D(){const F=c.newAttributes,Y=c.enabledAttributes;for(let V=0,j=Y.length;V<j;V++)Y[V]!==F[V]&&(i.disableVertexAttribArray(V),Y[V]=0)}function N(F,Y,V,j,W,G){n.isWebGL2===!0&&(V===5124||V===5125)?i.vertexAttribIPointer(F,Y,V,W,G):i.vertexAttribPointer(F,Y,V,j,W,G)}function y(F,Y,V,j){if(n.isWebGL2===!1&&(F.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=j.attributes,G=V.getAttributes(),J=Y.defaultAttributeValues;for(const ce in G){const re=G[ce];if(re.location>=0){let oe=W[ce];if(oe===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),oe!==void 0){const ye=oe.normalized,Se=oe.itemSize,Z=t.get(oe);if(Z===void 0)continue;const Ge=Z.buffer,Re=Z.type,Ee=Z.bytesPerElement;if(oe.isInterleavedBufferAttribute){const _e=oe.data,ze=_e.stride,Pe=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let T=0;T<re.locationSize;T++)M(re.location+T,_e.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let T=0;T<re.locationSize;T++)E(re.location+T);i.bindBuffer(34962,Ge);for(let T=0;T<re.locationSize;T++)N(re.location+T,Se/re.locationSize,Re,ye,ze*Ee,(Pe+Se/re.locationSize*T)*Ee)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)M(re.location+_e,oe.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<re.locationSize;_e++)E(re.location+_e);i.bindBuffer(34962,Ge);for(let _e=0;_e<re.locationSize;_e++)N(re.location+_e,Se/re.locationSize,Re,ye,Se*Ee,Se/re.locationSize*_e*Ee)}}else if(J!==void 0){const ye=J[ce];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(re.location,ye);break;case 3:i.vertexAttrib3fv(re.location,ye);break;case 4:i.vertexAttrib4fv(re.location,ye);break;default:i.vertexAttrib1fv(re.location,ye)}}}}D()}function C(){le();for(const F in a){const Y=a[F];for(const V in Y){const j=Y[V];for(const W in j)g(j[W].object),delete j[W];delete Y[V]}delete a[F]}}function z(F){if(a[F.id]===void 0)return;const Y=a[F.id];for(const V in Y){const j=Y[V];for(const W in j)g(j[W].object),delete j[W];delete Y[V]}delete a[F.id]}function O(F){for(const Y in a){const V=a[Y];if(V[F.id]===void 0)continue;const j=V[F.id];for(const W in j)g(j[W].object),delete j[W];delete V[F.id]}}function le(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:ee,dispose:C,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:E,disableUnusedAttributes:D}}function mx(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function gx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),w=i.getParameter(36349),A=f>0,E=o||e.has("OES_texture_float"),M=A&&E,D=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:D}}function _x(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ti,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const w=r?0:n,A=w*4;let E=_.clippingState||null;l.value=E,E=u(g,f,A,m);for(let M=0;M!==A;++M)E[M]=t[M];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,E=m;A!==p;++A,E+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function xx(i){let e=new WeakMap;function t(o,a){return a===Sa?o.mapping=es:a===wa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sa||a===wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ll extends $h{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,Oc=[.125,.215,.35,.446,.526,.582],oi=20,Ko=new ll,Uc=new Te;let Yo=null;const ni=(1+Math.sqrt(5))/2,Bi=1/ni,zc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ni,Bi),new P(0,ni,-Bi),new P(Bi,0,ni),new P(-Bi,0,ni),new P(ni,Bi,0),new P(-ni,Bi,0)];class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo),e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:ks,format:Pt,encoding:qn,depthBuffer:!1},s=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vx(r)),this._blurMaterial=yx(r,e,t)}return s}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s){const a=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Sn,u.autoClear=!1;const m=new yn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new pt(new Zs,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Uc),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const A=this._cubeSize;Ar(s,w*A,_>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===es||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zc[(s-1)%zc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):oi;d>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${oi}`);const _=[];let w=0;for(let N=0;N<oi;++N){const y=N/p,C=Math.exp(-y*y/2);_.push(C),N===0?w+=C:N<d&&(w+=2*C)}for(let N=0;N<_.length;N++)_[N]=_[N]/w;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;const E=this._sizeLods[s],M=3*E*(s>A-ji?s-A+ji:0),D=4*(this._cubeSize-E);Ar(t,M,D,3*E,2*E),l.setRenderTarget(t),l.render(h,Ko)}}function vx(i){const e=[],t=[],n=[];let s=i;const r=i-ji+1+Oc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ji?l=Oc[o-i+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,w=new Float32Array(p*g*m),A=new Float32Array(d*g*m),E=new Float32Array(_*g*m);for(let D=0;D<m;D++){const N=D%3*2/3-1,y=D>2?0:-1,C=[N,y,0,N+2/3,y,0,N+2/3,y+1,0,N,y,0,N+2/3,y+1,0,N,y+1,0];w.set(C,p*g*D),A.set(f,d*g*D);const z=[D,D,D,D,D,D];E.set(z,_*g*D)}const M=new It;M.setAttribute("position",new St(w,p)),M.setAttribute("uv",new St(A,d)),M.setAttribute("faceIndex",new St(E,_)),e.push(M),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(i,e,t){const n=new gi(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yx(i,e,t){const n=new Float32Array(oi),s=new P(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Vc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Hc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sa||l===wa,u=l===es||l===ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new kc(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sx(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let A=0,E=w.length;A<E;A+=3){const M=w[A+0],D=w[A+1],N=w[A+2];f.push(M,D,D,N,N,M)}}else{const w=g.array;p=g.version;for(let A=0,E=w.length/3-1;A<E;A+=3){const M=A+0,D=A+1,N=A+2;f.push(M,D,D,N,N,M)}}const d=new(Wh(f)?Zh:Yh)(f,1);d.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wx(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(r,m,a,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Tx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ex(i,e){return i[0]-e[0]}function Ax(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Zo(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Cx(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let V=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var g=V;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let z=0;E===!0&&(z=1),M===!0&&(z=2),D===!0&&(z=3);let O=u.attributes.position.count*z,le=1;O>e.maxTextureSize&&(le=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ee=new Float32Array(O*le*4*d),F=new Kh(ee,O,le,d);F.type=zn,F.needsUpdate=!0;const Y=z*4;for(let j=0;j<d;j++){const W=N[j],G=y[j],J=C[j],ce=O*le*4*j;for(let re=0;re<W.count;re++){const oe=re*Y;E===!0&&(o.fromBufferAttribute(W,re),W.normalized===!0&&Zo(o,W),ee[ce+oe+0]=o.x,ee[ce+oe+1]=o.y,ee[ce+oe+2]=o.z,ee[ce+oe+3]=0),M===!0&&(o.fromBufferAttribute(G,re),G.normalized===!0&&Zo(o,G),ee[ce+oe+4]=o.x,ee[ce+oe+5]=o.y,ee[ce+oe+6]=o.z,ee[ce+oe+7]=0),D===!0&&(o.fromBufferAttribute(J,re),J.normalized===!0&&Zo(o,J),ee[ce+oe+8]=o.x,ee[ce+oe+9]=o.y,ee[ce+oe+10]=o.z,ee[ce+oe+11]=J.itemSize===4?o.w:1)}}_={count:d,texture:F,size:new we(O,le)},r.set(u,_),u.addEventListener("dispose",V)}let w=0;for(let E=0;E<m.length;E++)w+=m[E];const A=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<p;M++){const D=d[M];D[0]=M,D[1]=m[M]}d.sort(Ax);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ex);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const D=a[M],N=D[0],y=D[1];N!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+M)!==_[N]&&u.setAttribute("morphTarget"+M,_[N]),w&&u.getAttribute("morphNormal"+M)!==w[N]&&u.setAttribute("morphNormal"+M,w[N]),s[M]=y,A+=y):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),w&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const E=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Lx(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Qh=new gt,ef=new Kh,tf=new vg,nf=new rl,Gc=[],Wc=[],jc=new Float32Array(16),qc=new Float32Array(9),Xc=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Tt(t,n)}}function Fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),Tt(t,n)}}function Ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Tt(t,n)}}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zx(i,e){const t=this.cache;wt(t,e)||(i.uniform2iv(this.addr,e),Tt(t,e))}function kx(i,e){const t=this.cache;wt(t,e)||(i.uniform3iv(this.addr,e),Tt(t,e))}function Bx(i,e){const t=this.cache;wt(t,e)||(i.uniform4iv(this.addr,e),Tt(t,e))}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;wt(t,e)||(i.uniform2uiv(this.addr,e),Tt(t,e))}function Gx(i,e){const t=this.cache;wt(t,e)||(i.uniform3uiv(this.addr,e),Tt(t,e))}function Wx(i,e){const t=this.cache;wt(t,e)||(i.uniform4uiv(this.addr,e),Tt(t,e))}function jx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Qh,s)}function qx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tf,s)}function Xx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nf,s)}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ef,s)}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Px;case 35665:return Dx;case 35666:return Ix;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Ux;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Bx;case 5125:return Vx;case 36294:return Hx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Zx(i,e){i.uniform1fv(this.addr,e)}function $x(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function ev(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tv(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nv(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iv(i,e){i.uniform1iv(this.addr,e)}function sv(i,e){i.uniform2iv(this.addr,e)}function rv(i,e){i.uniform3iv(this.addr,e)}function ov(i,e){i.uniform4iv(this.addr,e)}function av(i,e){i.uniform1uiv(this.addr,e)}function lv(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function uv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Qh,s[r])}function fv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||tf,s[r])}function dv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||nf,s[r])}function pv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ef,s[r])}function mv(i){switch(i){case 5126:return Zx;case 35664:return $x;case 35665:return Jx;case 35666:return Qx;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Yx(t.type)}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=mv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function vv(i,e,t){const n=i.name,s=n.length;for($o.lastIndex=0;;){const r=$o.exec(n),o=$o.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kc(t,c===void 0?new gv(a,i,e):new _v(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new xv(a),Kc(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let yv=0;function bv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Mv(i){switch(i){case qn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Zc(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bv(i.getShaderSource(e),o)}else return s}function Sv(i,e){const t=Mv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wv(i,e){let t;switch(e){case Rm:t="Linear";break;case Pm:t="Reinhard";break;case Dm:t="OptimizedCineon";break;case Im:t="ACESFilmic";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tv(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function Ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function $c(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(Cv,Lv)}function Lv(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ra(t)}const Rv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(Pv,sf).replace(Rv,Dv)}function Dv(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),sf(i,e,t,n)}function sf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===am?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ts&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Lm:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Iv(t),c=Nv(t),u=Fv(t),h=Ov(t),f=Uv(t),m=t.isWebGL2?"":Tv(t),g=Ev(r),p=s.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(As).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(As).join(`
`),_.length>0&&(_+=`
`)):(d=[eu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),_=[m,eu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Sv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Ra(o),o=$c(o,t),o=Jc(o,t),a=Ra(a),a=$c(a,t),a=Jc(a,t),o=Qc(o),a=Qc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=w+d+o,E=w+_+a,M=Yc(s,35633,A),D=Yc(s,35632,E);if(s.attachShader(p,M),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p).trim(),z=s.getShaderInfoLog(M).trim(),O=s.getShaderInfoLog(D).trim();let le=!0,ee=!0;if(s.getProgramParameter(p,35714)===!1){le=!1;const F=Zc(s,M,"vertex"),Y=Zc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+F+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||O==="")&&(ee=!1);ee&&(this.diagnostics={runnable:le,programLog:C,vertexShader:{log:z,prefix:d},fragmentShader:{log:O,prefix:_}})}s.deleteShader(M),s.deleteShader(D);let N;this.getUniforms=function(){return N===void 0&&(N=new Or(s,p)),N};let y;return this.getAttributes=function(){return y===void 0&&(y=Av(s,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=D,this}let kv=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Vv(e);t.set(e,n)}return t.get(e)}}class Vv{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}}function Hv(i,e,t,n,s,r,o){const a=new sl,l=new Bv,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,C,z,O,le){const ee=O.fog,F=le.geometry,Y=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),j=!!V&&V.mapping===oo?V.image.height:null,W=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const G=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=G!==void 0?G.length:0;let ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let re,oe,ye,Se;if(W){const ze=on[W];re=ze.vertexShader,oe=ze.fragmentShader}else re=y.vertexShader,oe=y.fragmentShader,l.update(y),ye=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const Z=i.getRenderTarget(),Ge=y.alphaTest>0,Re=y.clearcoat>0,Ee=y.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:y.type,vertexShader:re,fragmentShader:oe,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?i.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:qn,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===tg,tangentSpaceNormalMap:y.normalMapType===nl,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ke,clearcoat:Re,clearcoatMap:Re&&!!y.clearcoatMap,clearcoatRoughnessMap:Re&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Re&&!!y.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!y.iridescenceMap,iridescenceThicknessMap:Ee&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Zi,alphaMap:!!y.alphaMap,alphaTest:Ge,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:Sn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Yt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)C.push(z),C.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(_(C,y),w(C,y),C.push(i.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function _(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function w(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),y.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),y.push(a.mask)}function A(y){const C=g[y.type];let z;if(C){const O=on[C];z=Rg.clone(O.uniforms)}else z=y.uniforms;return z}function E(y,C){let z;for(let O=0,le=c.length;O<le;O++){const ee=c[O];if(ee.cacheKey===C){z=ee,++z.usedTimes;break}}return z===void 0&&(z=new zv(i,C,y,r),c.push(z)),z}function M(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function D(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:E,releaseProgram:M,releaseShaderCache:D,programs:c,dispose:N}}function Gv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,m,g,p,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),e++,_}function a(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):t.push(_)}function l(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Wv),n.length>1&&n.sort(f||tu),s.length>1&&s.sort(f||tu)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function jv(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new nu,i.set(n,[r])):s>=i.get(n).length?(r=new nu,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kv=0;function Yv(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Zv(i,e){const t=new qv,n=Xv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,o=new He,a=new He;function l(u,h){let f=0,m=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let p=0,d=0,_=0,w=0,A=0,E=0,M=0,D=0;u.sort(Yv);const N=h!==!0?Math.PI:1;for(let C=0,z=u.length;C<z;C++){const O=u[C],le=O.color,ee=O.intensity,F=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=le.r*ee*N,m+=le.g*ee*N,g+=le.b*ee*N;else if(O.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(O.sh.coefficients[V],ee);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*N),O.castShadow){const j=O.shadow,W=n.get(O);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.directionalShadow[p]=W,s.directionalShadowMap[p]=Y,s.directionalShadowMatrix[p]=O.shadow.matrix,E++}s.directional[p]=V,p++}else if(O.isSpotLight){const V=t.get(O);if(V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(le).multiplyScalar(ee*N),V.distance=F,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,O.castShadow){const j=O.shadow,W=n.get(O);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.spotShadow[_]=W,s.spotShadowMap[_]=Y,s.spotShadowMatrix[_]=O.shadow.matrix,D++}s.spot[_]=V,_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(le).multiplyScalar(ee),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),s.rectArea[w]=V,w++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*N),V.distance=O.distance,V.decay=O.decay,O.castShadow){const j=O.shadow,W=n.get(O);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,s.pointShadow[d]=W,s.pointShadowMap[d]=Y,s.pointShadowMatrix[d]=O.shadow.matrix,M++}s.point[d]=V,d++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(ee*N),V.groundColor.copy(O.groundColor).multiplyScalar(ee*N),s.hemi[A]=V,A++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const y=s.hash;(y.directionalLength!==p||y.pointLength!==d||y.spotLength!==_||y.rectAreaLength!==w||y.hemiLength!==A||y.numDirectionalShadows!==E||y.numPointShadows!==M||y.numSpotShadows!==D)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=w,s.point.length=d,s.hemi.length=A,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=M,s.spotShadowMatrix.length=D,y.directionalLength=p,y.pointLength=d,y.spotLength=_,y.rectAreaLength=w,y.hemiLength=A,y.numDirectionalShadows=E,y.numPointShadows=M,y.numSpotShadows=D,s.version=Kv++)}function c(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let w=0,A=u.length;w<A;w++){const E=u[w];if(E.isDirectionalLight){const M=s.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(E.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const M=s.rectArea[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(E.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const M=s.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const M=s.hemi[d];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function iu(i,e){const t=new Zv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $v(i,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new iu(i,e),t.set(r,[a])):o>=t.get(r).length?(a=new iu(i,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:n,dispose:s}}class Jv extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ny(i,e,t){let n=new ol;const s=new we,r=new we,o=new Ze,a=new Jv({depthPacking:eg}),l=new Qv,c={},u=t.maxTextureSize,h={0:Yt,1:Qi,2:jn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh,this.render=function(E,M,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const N=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Hn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let O=0,le=E.length;O<le;O++){const ee=E[O],F=ee.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null){const j=this.type!==Ts?{minFilter:ot,magFilter:ot}:{};F.map=new gi(s.x,s.y,j),F.map.texture.name=ee.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const V=F.getViewportCount();for(let j=0;j<V;j++){const W=F.getViewport(j);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o),F.updateMatrices(ee,j),n=F.getFrustum(),A(M,D,F.camera,ee,this.type)}F.isPointLightShadow!==!0&&this.type===Ts&&_(F,D),F.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(N,y,C)};function _(E,M){const D=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(M,null,D,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(M,null,D,m,p,null)}function w(E,M,D,N,y,C){let z=null;const O=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0?z=O:z=D.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const le=z.uuid,ee=M.uuid;let F=c[le];F===void 0&&(F={},c[le]=F);let Y=F[ee];Y===void 0&&(Y=z.clone(),F[ee]=Y),z=Y}return z.visible=M.visible,z.wireframe=M.wireframe,C===Ts?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:h[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaTest,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(D.matrixWorld),z.nearDistance=N,z.farDistance=y),z}function A(E,M,D,N,y){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Ts)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const O=e.update(E),le=E.material;if(Array.isArray(le)){const ee=O.groups;for(let F=0,Y=ee.length;F<Y;F++){const V=ee[F],j=le[V.materialIndex];if(j&&j.visible){const W=w(E,j,N,D.near,D.far,y);i.renderBufferDirect(D,null,O,W,E,V)}}}else if(le.visible){const ee=w(E,le,N,D.near,D.far,y);i.renderBufferDirect(D,null,O,ee,E,null)}}const z=E.children;for(let O=0,le=z.length;O<le;O++)A(z[O],M,D,N,y)}}function iy(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const de=new Ze;let pe=null;const be=new Ze(0,0,0,0);return{setMask:function(me){pe!==me&&!L&&(i.colorMask(me,me,me,me),pe=me)},setLocked:function(me){L=me},setClear:function(me,Me,ge,Ce,je){je===!0&&(me*=Ce,Me*=Ce,ge*=Ce),de.set(me,Me,ge,Ce),be.equals(de)===!1&&(i.clearColor(me,Me,ge,Ce),be.copy(de))},reset:function(){L=!1,pe=null,be.set(-1,0,0,0)}}}function r(){let L=!1,de=null,pe=null,be=null;return{setTest:function(me){me?Se(2929):Z(2929)},setMask:function(me){de!==me&&!L&&(i.depthMask(me),de=me)},setFunc:function(me){if(pe!==me){if(me)switch(me){case bm:i.depthFunc(512);break;case Mm:i.depthFunc(519);break;case Sm:i.depthFunc(513);break;case Ma:i.depthFunc(515);break;case wm:i.depthFunc(514);break;case Tm:i.depthFunc(518);break;case Em:i.depthFunc(516);break;case Am:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);pe=me}},setLocked:function(me){L=me},setClear:function(me){be!==me&&(i.clearDepth(me),be=me)},reset:function(){L=!1,de=null,pe=null,be=null}}}function o(){let L=!1,de=null,pe=null,be=null,me=null,Me=null,ge=null,Ce=null,je=null;return{setTest:function(qe){L||(qe?Se(2960):Z(2960))},setMask:function(qe){de!==qe&&!L&&(i.stencilMask(qe),de=qe)},setFunc:function(qe,_t,Jt){(pe!==qe||be!==_t||me!==Jt)&&(i.stencilFunc(qe,_t,Jt),pe=qe,be=_t,me=Jt)},setOp:function(qe,_t,Jt){(Me!==qe||ge!==_t||Ce!==Jt)&&(i.stencilOp(qe,_t,Jt),Me=qe,ge=_t,Ce=Jt)},setLocked:function(qe){L=qe},setClear:function(qe){je!==qe&&(i.clearStencil(qe),je=qe)},reset:function(){L=!1,de=null,pe=null,be=null,me=null,Me=null,ge=null,Ce=null,je=null}}}const a=new s,l=new r,c=new o;let u={},h={},f=new WeakMap,m=[],g=null,p=!1,d=null,_=null,w=null,A=null,E=null,M=null,D=null,N=!1,y=null,C=null,z=null,O=null,le=null;const ee=i.getParameter(35661);let F=!1,Y=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Y>=2);let j=null,W={};const G=i.getParameter(3088),J=i.getParameter(2978),ce=new Ze().fromArray(G),re=new Ze().fromArray(J);function oe(L,de,pe){const be=new Uint8Array(4),me=i.createTexture();i.bindTexture(L,me),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Me=0;Me<pe;Me++)i.texImage2D(de+Me,0,6408,1,1,0,6408,5121,be);return me}const ye={};ye[3553]=oe(3553,3553,1),ye[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Ma),R(!1),B(Kl),Se(2884),Pe(Hn);function Se(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Z(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ge(L,de){return h[L]!==de?(i.bindFramebuffer(L,de),h[L]=de,n&&(L===36009&&(h[36160]=de),L===36160&&(h[36009]=de)),!0):!1}function Re(L,de){let pe=m,be=!1;if(L)if(pe=f.get(de),pe===void 0&&(pe=[],f.set(de,pe)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(pe.length!==me.length||pe[0]!==36064){for(let Me=0,ge=me.length;Me<ge;Me++)pe[Me]=36064+Me;pe.length=me.length,be=!0}}else pe[0]!==36064&&(pe[0]=36064,be=!0);else pe[0]!==1029&&(pe[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ee(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const _e={[Wi]:32774,[um]:32778,[hm]:32779};if(n)_e[$l]=32775,_e[Jl]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[$l]=L.MIN_EXT,_e[Jl]=L.MAX_EXT)}const ze={[fm]:0,[dm]:1,[pm]:768,[Oh]:770,[ym]:776,[xm]:774,[gm]:772,[mm]:769,[Uh]:771,[vm]:775,[_m]:773};function Pe(L,de,pe,be,me,Me,ge,Ce){if(L===Hn){p===!0&&(Z(3042),p=!1);return}if(p===!1&&(Se(3042),p=!0),L!==cm){if(L!==d||Ce!==N){if((_!==Wi||E!==Wi)&&(i.blendEquation(32774),_=Wi,E=Wi),Ce)switch(L){case Zi:i.blendFuncSeparate(1,771,1,771);break;case ba:i.blendFunc(1,1);break;case Yl:i.blendFuncSeparate(0,769,0,1);break;case Zl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:i.blendFuncSeparate(770,771,1,771);break;case ba:i.blendFunc(770,1);break;case Yl:i.blendFuncSeparate(0,769,0,1);break;case Zl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,A=null,M=null,D=null,d=L,N=Ce}return}me=me||de,Me=Me||pe,ge=ge||be,(de!==_||me!==E)&&(i.blendEquationSeparate(_e[de],_e[me]),_=de,E=me),(pe!==w||be!==A||Me!==M||ge!==D)&&(i.blendFuncSeparate(ze[pe],ze[be],ze[Me],ze[ge]),w=pe,A=be,M=Me,D=ge),d=L,N=null}function T(L,de){L.side===jn?Z(2884):Se(2884);let pe=L.side===Yt;de&&(pe=!pe),R(pe),L.blending===Zi&&L.transparent===!1?Pe(Hn):Pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const be=L.stencilWrite;c.setTest(be),be&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(32926):Z(32926)}function R(L){y!==L&&(L?i.frontFace(2304):i.frontFace(2305),y=L)}function B(L){L!==rm?(Se(2884),L!==C&&(L===Kl?i.cullFace(1029):L===om?i.cullFace(1028):i.cullFace(1032))):Z(2884),C=L}function $(L){L!==z&&(F&&i.lineWidth(L),z=L)}function Q(L,de,pe){L?(Se(32823),(O!==de||le!==pe)&&(i.polygonOffset(de,pe),O=de,le=pe)):Z(32823)}function ie(L){L?Se(3089):Z(3089)}function se(L){L===void 0&&(L=33984+ee-1),j!==L&&(i.activeTexture(L),j=L)}function ae(L,de){j===null&&se();let pe=W[j];pe===void 0&&(pe={type:void 0,texture:void 0},W[j]=pe),(pe.type!==L||pe.texture!==de)&&(i.bindTexture(L,de||ye[L]),pe.type=L,pe.texture=de)}function ue(){const L=W[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function he(L){re.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function fe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,W={},h={},f=new WeakMap,m=[],g=null,p=!1,d=null,_=null,w=null,A=null,E=null,M=null,D=null,N=!1,y=null,C=null,z=null,O=null,le=null,ce.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Z,bindFramebuffer:Ge,drawBuffers:Re,useProgram:Ee,setBlending:Pe,setMaterial:T,setFlipSided:R,setCullFace:B,setLineWidth:$,setPolygonOffset:Q,setScissorTest:ie,activeTexture:se,bindTexture:ae,unbindTexture:ue,compressedTexImage2D:v,texImage2D:ve,texImage3D:b,texStorage2D:K,texStorage3D:ne,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:k,scissor:q,viewport:he,reset:fe}}function sy(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(v,x){return _?new OffscreenCanvas(v,x):Hs("canvas")}function A(v,x,I,k){let K=1;if((v.width>k||v.height>k)&&(K=k/Math.max(v.width,v.height)),K<1||x===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const ne=x?jr:Math.floor,ve=ne(K*v.width),b=ne(K*v.height);p===void 0&&(p=w(ve,b));const q=I?w(ve,b):p;return q.width=ve,q.height=b,q.getContext("2d").drawImage(v,0,0,ve,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+ve+"x"+b+")."),q}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function E(v){return La(v.width)&&La(v.height)}function M(v){return a?!1:v.wrapS!==Ot||v.wrapT!==Ot||v.minFilter!==ot&&v.minFilter!==At}function D(v,x){return v.generateMipmaps&&x&&v.minFilter!==ot&&v.minFilter!==At}function N(v){i.generateMipmap(v)}function y(v,x,I,k,K=!1){if(a===!1)return x;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ne=x;return x===6403&&(I===5126&&(ne=33326),I===5131&&(ne=33325),I===5121&&(ne=33321)),x===33319&&(I===5126&&(ne=33328),I===5131&&(ne=33327),I===5121&&(ne=33323)),x===6408&&(I===5126&&(ne=34836),I===5131&&(ne=34842),I===5121&&(ne=k===Ke&&K===!1?35907:32856),I===32819&&(ne=32854),I===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function C(v,x,I){return D(v,I)===!0||v.isFramebufferTexture&&v.minFilter!==ot&&v.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function z(v){return v===ot||v===Ta||v===Ea?9728:9729}function O(v){const x=v.target;x.removeEventListener("dispose",O),ee(x),x.isVideoTexture&&g.delete(x)}function le(v){const x=v.target;x.removeEventListener("dispose",le),Y(x)}function ee(v){const x=n.get(v);if(x.__webglInit===void 0)return;const I=v.source,k=d.get(I);if(k){const K=k[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(v),Object.keys(k).length===0&&d.delete(I)}n.remove(v)}function F(v){const x=n.get(v);i.deleteTexture(x.__webglTexture);const I=v.source,k=d.get(I);delete k[x.__cacheKey],o.memory.textures--}function Y(v){const x=v.texture,I=n.get(v),k=n.get(x);if(k.__webglTexture!==void 0&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)i.deleteFramebuffer(I.__webglFramebuffer[K]),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[K]);else{if(i.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let K=0;K<I.__webglColorRenderbuffer.length;K++)I.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[K]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let K=0,ne=x.length;K<ne;K++){const ve=n.get(x[K]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(x[K])}n.remove(x),n.remove(v)}let V=0;function j(){V=0}function W(){const v=V;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),V+=1,v}function G(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function J(v,x){const I=n.get(v);if(v.isVideoTexture&&ae(v),v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){const k=v.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(I,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,I.__webglTexture)}function ce(v,x){const I=n.get(v);if(v.version>0&&I.__version!==v.version){Re(I,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,I.__webglTexture)}function re(v,x){const I=n.get(v);if(v.version>0&&I.__version!==v.version){Re(I,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,I.__webglTexture)}function oe(v,x){const I=n.get(v);if(v.version>0&&I.__version!==v.version){Ee(I,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,I.__webglTexture)}const ye={[ns]:10497,[Ot]:33071,[Wr]:33648},Se={[ot]:9728,[Ta]:9984,[Ea]:9986,[At]:9729,[Bh]:9985,[us]:9987};function Z(v,x,I){if(I?(i.texParameteri(v,10242,ye[x.wrapS]),i.texParameteri(v,10243,ye[x.wrapT]),(v===32879||v===35866)&&i.texParameteri(v,32882,ye[x.wrapR]),i.texParameteri(v,10240,Se[x.magFilter]),i.texParameteri(v,10241,Se[x.minFilter])):(i.texParameteri(v,10242,33071),i.texParameteri(v,10243,33071),(v===32879||v===35866)&&i.texParameteri(v,32882,33071),(x.wrapS!==Ot||x.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,10240,z(x.magFilter)),i.texParameteri(v,10241,z(x.minFilter)),x.minFilter!==ot&&x.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(x.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ks&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(v,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ge(v,x){let I=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",O));const k=x.source;let K=d.get(k);K===void 0&&(K={},d.set(k,K));const ne=G(x);if(ne!==v.__cacheKey){K[ne]===void 0&&(K[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[ne].usedTimes++;const ve=K[v.__cacheKey];ve!==void 0&&(K[v.__cacheKey].usedTimes--,ve.usedTimes===0&&F(x)),v.__cacheKey=ne,v.__webglTexture=K[ne].texture}return I}function Re(v,x,I){let k=3553;x.isDataArrayTexture&&(k=35866),x.isData3DTexture&&(k=32879);const K=Ge(v,x),ne=x.source;if(t.activeTexture(33984+I),t.bindTexture(k,v.__webglTexture),ne.version!==ne.__currentVersion||K===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ve=M(x)&&E(x.image)===!1;let b=A(x.image,ve,!1,u);b=ue(x,b);const q=E(b)||a,he=r.convert(x.format,x.encoding);let fe=r.convert(x.type),L=y(x.internalFormat,he,fe,x.encoding,x.isVideoTexture);Z(k,x,q);let de;const pe=x.mipmaps,be=a&&x.isVideoTexture!==!0,me=ne.__currentVersion===void 0||K===!0,Me=C(x,b,q);if(x.isDepthTexture)L=6402,a?x.type===zn?L=36012:x.type===li?L=33190:x.type===$i?L=35056:L=33189:x.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===fi&&L===6402&&x.type!==Vh&&x.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=li,fe=r.convert(x.type)),x.format===is&&L===6402&&(L=34041,x.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=$i,fe=r.convert(x.type))),me&&(be?t.texStorage2D(3553,1,L,b.width,b.height):t.texImage2D(3553,0,L,b.width,b.height,0,he,fe,null));else if(x.isDataTexture)if(pe.length>0&&q){be&&me&&t.texStorage2D(3553,Me,L,pe[0].width,pe[0].height);for(let ge=0,Ce=pe.length;ge<Ce;ge++)de=pe[ge],be?t.texSubImage2D(3553,ge,0,0,de.width,de.height,he,fe,de.data):t.texImage2D(3553,ge,L,de.width,de.height,0,he,fe,de.data);x.generateMipmaps=!1}else be?(me&&t.texStorage2D(3553,Me,L,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,he,fe,b.data)):t.texImage2D(3553,0,L,b.width,b.height,0,he,fe,b.data);else if(x.isCompressedTexture){be&&me&&t.texStorage2D(3553,Me,L,pe[0].width,pe[0].height);for(let ge=0,Ce=pe.length;ge<Ce;ge++)de=pe[ge],x.format!==Pt?he!==null?be?t.compressedTexSubImage2D(3553,ge,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(3553,ge,L,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,ge,0,0,de.width,de.height,he,fe,de.data):t.texImage2D(3553,ge,L,de.width,de.height,0,he,fe,de.data)}else if(x.isDataArrayTexture)be?(me&&t.texStorage3D(35866,Me,L,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,he,fe,b.data)):t.texImage3D(35866,0,L,b.width,b.height,b.depth,0,he,fe,b.data);else if(x.isData3DTexture)be?(me&&t.texStorage3D(32879,Me,L,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,he,fe,b.data)):t.texImage3D(32879,0,L,b.width,b.height,b.depth,0,he,fe,b.data);else if(x.isFramebufferTexture){if(me)if(be)t.texStorage2D(3553,Me,L,b.width,b.height);else{let ge=b.width,Ce=b.height;for(let je=0;je<Me;je++)t.texImage2D(3553,je,L,ge,Ce,0,he,fe,null),ge>>=1,Ce>>=1}}else if(pe.length>0&&q){be&&me&&t.texStorage2D(3553,Me,L,pe[0].width,pe[0].height);for(let ge=0,Ce=pe.length;ge<Ce;ge++)de=pe[ge],be?t.texSubImage2D(3553,ge,0,0,he,fe,de):t.texImage2D(3553,ge,L,he,fe,de);x.generateMipmaps=!1}else be?(me&&t.texStorage2D(3553,Me,L,b.width,b.height),t.texSubImage2D(3553,0,0,0,he,fe,b)):t.texImage2D(3553,0,L,he,fe,b);D(x,q)&&N(k),ne.__currentVersion=ne.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Ee(v,x,I){if(x.image.length!==6)return;const k=Ge(v,x),K=x.source;if(t.activeTexture(33984+I),t.bindTexture(34067,v.__webglTexture),K.version!==K.__currentVersion||k===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,b=[];for(let ge=0;ge<6;ge++)!ne&&!ve?b[ge]=A(x.image[ge],!1,!0,c):b[ge]=ve?x.image[ge].image:x.image[ge],b[ge]=ue(x,b[ge]);const q=b[0],he=E(q)||a,fe=r.convert(x.format,x.encoding),L=r.convert(x.type),de=y(x.internalFormat,fe,L,x.encoding),pe=a&&x.isVideoTexture!==!0,be=K.__currentVersion===void 0||k===!0;let me=C(x,q,he);Z(34067,x,he);let Me;if(ne){pe&&be&&t.texStorage2D(34067,me,de,q.width,q.height);for(let ge=0;ge<6;ge++){Me=b[ge].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){const je=Me[Ce];x.format!==Pt?fe!==null?pe?t.compressedTexSubImage2D(34069+ge,Ce,0,0,je.width,je.height,fe,je.data):t.compressedTexImage2D(34069+ge,Ce,de,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(34069+ge,Ce,0,0,je.width,je.height,fe,L,je.data):t.texImage2D(34069+ge,Ce,de,je.width,je.height,0,fe,L,je.data)}}}else{Me=x.mipmaps,pe&&be&&(Me.length>0&&me++,t.texStorage2D(34067,me,de,b[0].width,b[0].height));for(let ge=0;ge<6;ge++)if(ve){pe?t.texSubImage2D(34069+ge,0,0,0,b[ge].width,b[ge].height,fe,L,b[ge].data):t.texImage2D(34069+ge,0,de,b[ge].width,b[ge].height,0,fe,L,b[ge].data);for(let Ce=0;Ce<Me.length;Ce++){const qe=Me[Ce].image[ge].image;pe?t.texSubImage2D(34069+ge,Ce+1,0,0,qe.width,qe.height,fe,L,qe.data):t.texImage2D(34069+ge,Ce+1,de,qe.width,qe.height,0,fe,L,qe.data)}}else{pe?t.texSubImage2D(34069+ge,0,0,0,fe,L,b[ge]):t.texImage2D(34069+ge,0,de,fe,L,b[ge]);for(let Ce=0;Ce<Me.length;Ce++){const je=Me[Ce];pe?t.texSubImage2D(34069+ge,Ce+1,0,0,fe,L,je.image[ge]):t.texImage2D(34069+ge,Ce+1,de,fe,L,je.image[ge])}}}D(x,he)&&N(34067),K.__currentVersion=K.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function _e(v,x,I,k,K){const ne=r.convert(I.format,I.encoding),ve=r.convert(I.type),b=y(I.internalFormat,ne,ve,I.encoding);n.get(x).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,b,x.width,x.height,x.depth,0,ne,ve,null):t.texImage2D(K,0,b,x.width,x.height,0,ne,ve,null)),t.bindFramebuffer(36160,v),se(x)?f.framebufferTexture2DMultisampleEXT(36160,k,K,n.get(I).__webglTexture,0,ie(x)):i.framebufferTexture2D(36160,k,K,n.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(v,x,I){if(i.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let k=33189;if(I||se(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===zn?k=36012:K.type===li&&(k=33190));const ne=ie(x);se(x)?f.renderbufferStorageMultisampleEXT(36161,ne,k,x.width,x.height):i.renderbufferStorageMultisample(36161,ne,k,x.width,x.height)}else i.renderbufferStorage(36161,k,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const k=ie(x);I&&se(x)===!1?i.renderbufferStorageMultisample(36161,k,35056,x.width,x.height):se(x)?f.renderbufferStorageMultisampleEXT(36161,k,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,v)}else{const k=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<k.length;K++){const ne=k[K],ve=r.convert(ne.format,ne.encoding),b=r.convert(ne.type),q=y(ne.internalFormat,ve,b,ne.encoding),he=ie(x);I&&se(x)===!1?i.renderbufferStorageMultisample(36161,he,q,x.width,x.height):se(x)?f.renderbufferStorageMultisampleEXT(36161,he,q,x.width,x.height):i.renderbufferStorage(36161,q,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function Pe(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const k=n.get(x.depthTexture).__webglTexture,K=ie(x);if(x.depthTexture.format===fi)se(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,k,0,K):i.framebufferTexture2D(36160,36096,3553,k,0);else if(x.depthTexture.format===is)se(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,k,0,K):i.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function T(v){const x=n.get(v),I=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,v)}else if(I){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[k],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function R(v,x,I){const k=n.get(v);x!==void 0&&_e(k.__webglFramebuffer,v,v.texture,36064,3553),I!==void 0&&T(v)}function B(v){const x=v.texture,I=n.get(v),k=n.get(x);v.addEventListener("dispose",le),v.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,o.memory.textures++);const K=v.isWebGLCubeRenderTarget===!0,ne=v.isWebGLMultipleRenderTargets===!0,ve=E(v)||a;if(K){I.__webglFramebuffer=[];for(let b=0;b<6;b++)I.__webglFramebuffer[b]=i.createFramebuffer()}else{if(I.__webglFramebuffer=i.createFramebuffer(),ne)if(s.drawBuffers){const b=v.texture;for(let q=0,he=b.length;q<he;q++){const fe=n.get(b[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&se(v)===!1){const b=ne?x:[x];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let q=0;q<b.length;q++){const he=b[q];I.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,I.__webglColorRenderbuffer[q]);const fe=r.convert(he.format,he.encoding),L=r.convert(he.type),de=y(he.internalFormat,fe,L,he.encoding),pe=ie(v);i.renderbufferStorageMultisample(36161,pe,de,v.width,v.height),i.framebufferRenderbuffer(36160,36064+q,36161,I.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),v.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(I.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,k.__webglTexture),Z(34067,x,ve);for(let b=0;b<6;b++)_e(I.__webglFramebuffer[b],v,x,36064,34069+b);D(x,ve)&&N(34067),t.unbindTexture()}else if(ne){const b=v.texture;for(let q=0,he=b.length;q<he;q++){const fe=b[q],L=n.get(fe);t.bindTexture(3553,L.__webglTexture),Z(3553,fe,ve),_e(I.__webglFramebuffer,v,fe,36064+q,3553),D(fe,ve)&&N(3553)}t.unbindTexture()}else{let b=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?b=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,k.__webglTexture),Z(b,x,ve),_e(I.__webglFramebuffer,v,x,36064,b),D(x,ve)&&N(b),t.unbindTexture()}v.depthBuffer&&T(v)}function $(v){const x=E(v)||a,I=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let k=0,K=I.length;k<K;k++){const ne=I[k];if(D(ne,x)){const ve=v.isWebGLCubeRenderTarget?34067:3553,b=n.get(ne).__webglTexture;t.bindTexture(ve,b),N(ve),t.unbindTexture()}}}function Q(v){if(a&&v.samples>0&&se(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],I=v.width,k=v.height;let K=16384;const ne=[],ve=v.stencilBuffer?33306:36096,b=n.get(v),q=v.isWebGLMultipleRenderTargets===!0;if(q)for(let he=0;he<x.length;he++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),i.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let he=0;he<x.length;he++){ne.push(36064+he),v.depthBuffer&&ne.push(ve);const fe=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(fe===!1&&(v.depthBuffer&&(K|=256),v.stencilBuffer&&(K|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[he]),fe===!0&&(i.invalidateFramebuffer(36008,[ve]),i.invalidateFramebuffer(36009,[ve])),q){const L=n.get(x[he]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,L,0)}i.blitFramebuffer(0,0,I,k,0,0,I,k,K,9728),m&&i.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let he=0;he<x.length;he++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+he,36161,b.__webglColorRenderbuffer[he]);const fe=n.get(x[he]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),i.framebufferTexture2D(36009,36064+he,3553,fe,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function ie(v){return Math.min(h,v.samples)}function se(v){const x=n.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(v){const x=o.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function ue(v,x){const I=v.encoding,k=v.format,K=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===Ca||I!==qn&&(I===Ke?a===!1?e.has("EXT_sRGB")===!0&&k===Pt?(v.format=Ca,v.minFilter=At,v.generateMipmaps=!1):x=qh.sRGBToLinear(x):(k!==Pt||K!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),x}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=J,this.setTexture2DArray=ce,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=R,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=se}function ry(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===mi)return 5121;if(r===zm)return 32819;if(r===km)return 32820;if(r===Fm)return 5120;if(r===Om)return 5122;if(r===Vh)return 5123;if(r===Um)return 5124;if(r===li)return 5125;if(r===zn)return 5126;if(r===ks)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bm)return 6406;if(r===Pt)return 6408;if(r===Hm)return 6409;if(r===Gm)return 6410;if(r===fi)return 6402;if(r===is)return 34041;if(r===Wm)return 6403;if(r===Vm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ca)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jm)return 36244;if(r===qm)return 33319;if(r===Xm)return 33320;if(r===Km)return 36249;if(r===bo||r===Mo||r===So||r===wo)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===ec||r===tc||r===nc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ym)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ic||r===sc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ic)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rc||r===oc||r===ac||r===lc||r===cc||r===uc||r===hc||r===fc||r===dc||r===pc||r===mc||r===gc||r===_c||r===xc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ac)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_c)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===vc)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===$i?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class oy extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const w=new kn;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[p.jointName]=w,c.add(w)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class ly extends gt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:fi,u!==fi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fi&&(n=li),n===void 0&&u===is&&(n=$i),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1}}class cy extends xi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],w=[],A=new bt;A.layers.enable(1),A.viewport=new Ze;const E=new bt;E.layers.enable(2),E.viewport=new Ze;const M=[A,E],D=new oy;D.layers.enable(1),D.layers.enable(2);let N=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=_[G];return J===void 0&&(J=new Jo,_[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=_[G];return J===void 0&&(J=new Jo,_[G]=J),J.getGripSpace()},this.getHand=function(G){let J=_[G];return J===void 0&&(J=new Jo,_[G]=J),J.getHandSpace()};function C(G){const J=w.indexOf(G.inputSource);if(J===-1)return;const ce=_[J];ce!==void 0&&ce.dispatchEvent({type:G.type,data:G.inputSource})}function z(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let G=0;G<_.length;G++){const J=w[G];J!==null&&(w[G]=null,_[G].disconnect(J))}N=null,y=null,e.setRenderTarget(p),f=null,h=null,u=null,s=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),d=new gi(f.framebufferWidth,f.framebufferHeight,{format:Pt,type:mi,encoding:e.outputEncoding})}else{let J=null,ce=null,re=null;g.depth&&(re=g.stencil?35056:33190,J=g.stencil?is:fi,ce=g.stencil?$i:li);const oe={colorFormat:32856,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(oe),s.updateRenderState({layers:[h]}),d=new gi(h.textureWidth,h.textureHeight,{format:Pt,type:mi,depthTexture:new ly(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(G){for(let J=0;J<G.removed.length;J++){const ce=G.removed[J],re=w.indexOf(ce);re>=0&&(w[re]=null,_[re].dispatchEvent({type:"disconnected",data:ce}))}for(let J=0;J<G.added.length;J++){const ce=G.added[J];let re=w.indexOf(ce);if(re===-1){for(let ye=0;ye<_.length;ye++)if(ye>=w.length){w.push(ce),re=ye;break}else if(w[ye]===null){w[ye]=ce,re=ye;break}if(re===-1)break}const oe=_[re];oe&&oe.dispatchEvent({type:"connected",data:ce})}}const le=new P,ee=new P;function F(G,J,ce){le.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const re=le.distanceTo(ee),oe=J.projectionMatrix.elements,ye=ce.projectionMatrix.elements,Se=oe[14]/(oe[10]-1),Z=oe[14]/(oe[10]+1),Ge=(oe[9]+1)/oe[5],Re=(oe[9]-1)/oe[5],Ee=(oe[8]-1)/oe[0],_e=(ye[8]+1)/ye[0],ze=Se*Ee,Pe=Se*_e,T=re/(-Ee+_e),R=T*-Ee;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(R),G.translateZ(T),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const B=Se+T,$=Z+T,Q=ze-R,ie=Pe+(re-R),se=Ge*Z/$*B,ae=Re*Z/$*B;G.projectionMatrix.makePerspective(Q,ie,se,ae,B,$)}function Y(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;D.near=E.near=A.near=G.near,D.far=E.far=A.far=G.far,(N!==D.near||y!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,y=D.far);const J=G.parent,ce=D.cameras;Y(D,J);for(let oe=0;oe<ce.length;oe++)Y(ce[oe],J);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),G.position.copy(D.position),G.quaternion.copy(D.quaternion),G.scale.copy(D.scale),G.matrix.copy(D.matrix),G.matrixWorld.copy(D.matrixWorld);const re=G.children;for(let oe=0,ye=re.length;oe<ye;oe++)re[oe].updateMatrixWorld(!0);ce.length===2?F(D,A,E):D.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let V=null;function j(G,J){if(c=J.getViewerPose(l||o),m=J,c!==null){const ce=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let re=!1;ce.length!==D.cameras.length&&(D.cameras.length=0,re=!0);for(let oe=0;oe<ce.length;oe++){const ye=ce[oe];let Se=null;if(f!==null)Se=f.getViewport(ye);else{const Ge=u.getViewSubImage(h,ye);Se=Ge.viewport,oe===0&&(e.setRenderTargetTextures(d,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(d))}let Z=M[oe];Z===void 0&&(Z=new bt,Z.layers.enable(oe),Z.viewport=new Ze,M[oe]=Z),Z.matrix.fromArray(ye.transform.matrix),Z.projectionMatrix.fromArray(ye.projectionMatrix),Z.viewport.set(Se.x,Se.y,Se.width,Se.height),oe===0&&D.matrix.copy(Z.matrix),re===!0&&D.cameras.push(Z)}}for(let ce=0;ce<_.length;ce++){const re=w[ce],oe=_[ce];re!==null&&oe!==void 0&&oe.update(re,J,l||o)}V&&V(G,J),m=null}const W=new Jh;W.setAnimationLoop(j),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function uy(i,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,w,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,A)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Yt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Yt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=w*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Yt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hy(){const i=Hs("canvas");return i.style.display="block",i}function rf(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:hy(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,w=0,A=null,E=-1,M=null;const D=new Ze,N=new Ze;let y=null,C=e.width,z=e.height,O=1,le=null,ee=null;const F=new Ze(0,0,C,z),Y=new Ze(0,0,C,z);let V=!1;const j=new ol;let W=!1,G=!1,J=null;const ce=new He,re=new we,oe=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?O:1}let Z=t;function Ge(S,U){for(let X=0;X<S.length;X++){const H=S[X],te=e.getContext(H,U);if(te!==null)return te}return null}try{const S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",pe,!1),Z===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Z=Ge(U,S),Z===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Re,Ee,_e,ze,Pe,T,R,B,$,Q,ie,se,ae,ue,v,x,I,k,K,ne,ve,b,q;function he(){Re=new Mx(Z),Ee=new gx(Z,Re,i),Re.init(Ee),b=new ry(Z,Re,Ee),_e=new iy(Z,Re,Ee),ze=new Tx,Pe=new Gv,T=new sy(Z,Re,_e,Pe,Ee,b,ze),R=new xx(p),B=new bx(p),$=new Ug(Z,Ee),q=new px(Z,Re,$,Ee),Q=new Sx(Z,$,ze,q),ie=new Lx(Z,Q,$,ze),K=new Cx(Z,Ee,T),x=new _x(Pe),se=new Hv(p,R,B,Re,Ee,q,x),ae=new uy(p,Pe),ue=new jv,v=new $v(Re,Ee),k=new dx(p,R,_e,ie,u,o),I=new ny(p,ie,Ee),ne=new mx(Z,Re,ze,Ee),ve=new wx(Z,Re,ze,Ee),ze.programs=se.programs,p.capabilities=Ee,p.extensions=Re,p.properties=Pe,p.renderLists=ue,p.shadowMap=I,p.state=_e,p.info=ze}he();const fe=new cy(p,Z);this.xr=fe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(C,z,!1))},this.getSize=function(S){return S.set(C,z)},this.setSize=function(S,U,X){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,z=U,e.width=Math.floor(S*O),e.height=Math.floor(U*O),X!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(C*O,z*O).floor()},this.setDrawingBufferSize=function(S,U,X){C=S,z=U,O=X,e.width=Math.floor(S*X),e.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,U,X,H){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,U,X,H),_e.viewport(D.copy(F).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,U,X,H){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,U,X,H),_e.scissor(N.copy(Y).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){_e.setScissorTest(V=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(S=!0,U=!0,X=!0){let H=0;S&&(H|=16384),U&&(H|=256),X&&(H|=1024),Z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),ue.dispose(),v.dispose(),Pe.dispose(),R.dispose(),B.dispose(),ie.dispose(),q.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",je),fe.removeEventListener("sessionend",qe),J&&(J.dispose(),J=null),_t.stop()};function L(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=ze.autoReset,U=I.enabled,X=I.autoUpdate,H=I.needsUpdate,te=I.type;he(),ze.autoReset=S,I.enabled=U,I.autoUpdate=X,I.needsUpdate=H,I.type=te}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function be(S){const U=S.target;U.removeEventListener("dispose",be),me(U)}function me(S){Me(S),Pe.remove(S)}function Me(S){const U=Pe.get(S).programs;U!==void 0&&(U.forEach(function(X){se.releaseProgram(X)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,H,te,Ae){U===null&&(U=ye);const De=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Mf(S,U,X,H,te);_e.setMaterial(H,De);let Ne=X.index;const Xe=X.attributes.position;if(Ne===null){if(Xe===void 0||Xe.count===0)return}else if(Ne.count===0)return;let Be=1;H.wireframe===!0&&(Ne=Q.getWireframeAttribute(X),Be=2),q.setup(te,H,Fe,X,Ne);let Ve,tt=ne;Ne!==null&&(Ve=$.get(Ne),tt=ve,tt.setIndex(Ve));const Kn=Ne!==null?Ne.count:Xe.count,Mi=X.drawRange.start*Be,Si=X.drawRange.count*Be,Qt=Ae!==null?Ae.start*Be:0,We=Ae!==null?Ae.count*Be:1/0,wi=Math.max(Mi,Qt),it=Math.min(Kn,Mi+Si,Qt+We)-1,en=Math.max(0,it-wi+1);if(en!==0){if(te.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Se()),tt.setMode(1)):tt.setMode(4);else if(te.isLine){let En=H.linewidth;En===void 0&&(En=1),_e.setLineWidth(En*Se()),te.isLineSegments?tt.setMode(1):te.isLineLoop?tt.setMode(2):tt.setMode(3)}else te.isPoints?tt.setMode(0):te.isSprite&&tt.setMode(4);if(te.isInstancedMesh)tt.renderInstances(wi,en,te.count);else if(X.isInstancedBufferGeometry){const En=Math.min(X.instanceCount,X._maxInstanceCount);tt.renderInstances(wi,en,En)}else tt.render(wi,en)}},this.compile=function(S,U){f=v.get(S),f.init(),g.push(f),S.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(p.physicallyCorrectLights),S.traverse(function(X){const H=X.material;if(H)if(Array.isArray(H))for(let te=0;te<H.length;te++){const Ae=H[te];uo(Ae,S,X)}else uo(H,S,X)}),g.pop(),f=null};let ge=null;function Ce(S){ge&&ge(S)}function je(){_t.stop()}function qe(){_t.start()}const _t=new Jh;_t.setAnimationLoop(Ce),typeof self!="undefined"&&_t.setContext(self),this.setAnimationLoop=function(S){ge=S,fe.setAnimationLoop(S),S===null?_t.stop():_t.start()},fe.addEventListener("sessionstart",je),fe.addEventListener("sessionend",qe),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,U,A),f=v.get(S,g.length),f.init(),g.push(f),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(ce),G=this.localClippingEnabled,W=x.init(this.clippingPlanes,G,U),h=ue.get(S,m.length),h.init(),m.push(h),Jt(S,U,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(le,ee),W===!0&&x.beginShadows();const X=f.state.shadowsArray;if(I.render(X,S,U),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,S),f.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const H=U.cameras;for(let te=0,Ae=H.length;te<Ae;te++){const De=H[te];gl(h,S,De,De.viewport)}}else gl(h,S,U);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(p,S,U),q.resetDefaultState(),E=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Jt(S,U,X,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){H&&oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const De=ie.update(S),Fe=S.material;Fe.visible&&h.push(S,De,Fe,X,oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==ze.render.frame&&(S.skeleton.update(),S.skeleton.frame=ze.render.frame),!S.frustumCulled||j.intersectsObject(S))){H&&oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const De=ie.update(S),Fe=S.material;if(Array.isArray(Fe)){const Ne=De.groups;for(let Xe=0,Be=Ne.length;Xe<Be;Xe++){const Ve=Ne[Xe],tt=Fe[Ve.materialIndex];tt&&tt.visible&&h.push(S,De,tt,X,oe.z,Ve)}}else Fe.visible&&h.push(S,De,Fe,X,oe.z,null)}}const Ae=S.children;for(let De=0,Fe=Ae.length;De<Fe;De++)Jt(Ae[De],U,X,H)}function gl(S,U,X,H){const te=S.opaque,Ae=S.transmissive,De=S.transparent;f.setupLightsView(X),Ae.length>0&&yf(te,U,X),H&&_e.viewport(D.copy(H)),te.length>0&&er(te,U,X),Ae.length>0&&er(Ae,U,X),De.length>0&&er(De,U,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function yf(S,U,X){const H=Ee.isWebGL2;J===null&&(J=new gi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?ks:mi,minFilter:us,samples:H&&r===!0?4:0})),p.getDrawingBufferSize(re),H?J.setSize(re.x,re.y):J.setSize(jr(re.x),jr(re.y));const te=p.getRenderTarget();p.setRenderTarget(J),p.clear();const Ae=p.toneMapping;p.toneMapping=Sn,er(S,U,X),p.toneMapping=Ae,T.updateMultisampleRenderTarget(J),T.updateRenderTargetMipmap(J),p.setRenderTarget(te)}function er(S,U,X){const H=U.isScene===!0?U.overrideMaterial:null;for(let te=0,Ae=S.length;te<Ae;te++){const De=S[te],Fe=De.object,Ne=De.geometry,Xe=H===null?De.material:H,Be=De.group;Fe.layers.test(X.layers)&&bf(Fe,U,X,Ne,Xe,Be)}}function bf(S,U,X,H,te,Ae){S.onBeforeRender(p,U,X,H,te,Ae),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),te.onBeforeRender(p,U,X,H,S,Ae),te.transparent===!0&&te.side===jn?(te.side=Yt,te.needsUpdate=!0,p.renderBufferDirect(X,U,H,te,S,Ae),te.side=Qi,te.needsUpdate=!0,p.renderBufferDirect(X,U,H,te,S,Ae),te.side=jn):p.renderBufferDirect(X,U,H,te,S,Ae),S.onAfterRender(p,U,X,H,te,Ae)}function uo(S,U,X){U.isScene!==!0&&(U=ye);const H=Pe.get(S),te=f.state.lights,Ae=f.state.shadowsArray,De=te.state.version,Fe=se.getParameters(S,te.state,Ae,U,X),Ne=se.getProgramCacheKey(Fe);let Xe=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?B:R).get(S.envMap||H.environment),Xe===void 0&&(S.addEventListener("dispose",be),Xe=new Map,H.programs=Xe);let Be=Xe.get(Ne);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===De)return _l(S,Fe),Be}else Fe.uniforms=se.getUniforms(S),S.onBuild(X,Fe,p),S.onBeforeCompile(Fe,p),Be=se.acquireProgram(Fe,Ne),Xe.set(Ne,Be),H.uniforms=Fe.uniforms;const Ve=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=x.uniform),_l(S,Fe),H.needsLights=wf(S),H.lightsStateVersion=De,H.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.directionalShadowMap.value=te.state.directionalShadowMap,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotShadowMap.value=te.state.spotShadowMap,Ve.spotShadowMatrix.value=te.state.spotShadowMatrix,Ve.pointShadowMap.value=te.state.pointShadowMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix);const tt=Be.getUniforms(),Kn=Or.seqWithValue(tt.seq,Ve);return H.currentProgram=Be,H.uniformsList=Kn,Be}function _l(S,U){const X=Pe.get(S);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Mf(S,U,X,H,te){U.isScene!==!0&&(U=ye),T.resetTextureUnits();const Ae=U.fog,De=H.isMeshStandardMaterial?U.environment:null,Fe=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:qn,Ne=(H.isMeshStandardMaterial?B:R).get(H.envMap||De),Xe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!H.normalMap&&!!X.attributes.tangent,Ve=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,Kn=!!X.morphAttributes.color,Mi=H.toneMapped?p.toneMapping:Sn,Si=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=Si!==void 0?Si.length:0,We=Pe.get(H),wi=f.state.lights;if(W===!0&&(G===!0||S!==M)){const tn=S===M&&H.id===E;x.setState(H,S,tn)}let it=!1;H.version===We.__version?(We.needsLights&&We.lightsStateVersion!==wi.state.version||We.outputEncoding!==Fe||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ne||H.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Be||We.morphTargets!==Ve||We.morphNormals!==tt||We.morphColors!==Kn||We.toneMapping!==Mi||Ee.isWebGL2===!0&&We.morphTargetsCount!==Qt)&&(it=!0):(it=!0,We.__version=H.version);let en=We.currentProgram;it===!0&&(en=uo(H,U,te));let En=!1,ms=!1,ho=!1;const xt=en.getUniforms(),gs=We.uniforms;if(_e.useProgram(en.program)&&(En=!0,ms=!0,ho=!0),H.id!==E&&(E=H.id,ms=!0),En||M!==S){if(xt.setValue(Z,"projectionMatrix",S.projectionMatrix),Ee.logarithmicDepthBuffer&&xt.setValue(Z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,ms=!0,ho=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(Z,oe.setFromMatrixPosition(S.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(Z,"isOrthographic",S.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||te.isSkinnedMesh)&&xt.setValue(Z,"viewMatrix",S.matrixWorldInverse)}if(te.isSkinnedMesh){xt.setOptional(Z,te,"bindMatrix"),xt.setOptional(Z,te,"bindMatrixInverse");const tn=te.skeleton;tn&&(Ee.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),xt.setValue(Z,"boneTexture",tn.boneTexture,T),xt.setValue(Z,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fo=X.morphAttributes;return(fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&Ee.isWebGL2===!0)&&K.update(te,X,H,en),(ms||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,xt.setValue(Z,"receiveShadow",te.receiveShadow)),ms&&(xt.setValue(Z,"toneMappingExposure",p.toneMappingExposure),We.needsLights&&Sf(gs,ho),Ae&&H.fog===!0&&ae.refreshFogUniforms(gs,Ae),ae.refreshMaterialUniforms(gs,H,O,z,J),Or.upload(Z,We.uniformsList,gs,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Or.upload(Z,We.uniformsList,gs,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(Z,"center",te.center),xt.setValue(Z,"modelViewMatrix",te.modelViewMatrix),xt.setValue(Z,"normalMatrix",te.normalMatrix),xt.setValue(Z,"modelMatrix",te.matrixWorld),en}function Sf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function wf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,X){Pe.get(S.texture).__webglTexture=U,Pe.get(S.depthTexture).__webglTexture=X;const H=Pe.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const X=Pe.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){A=S,_=U,w=X;let H=!0;if(S){const Ne=Pe.get(S);Ne.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),H=!1):Ne.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ne.__hasExternalTextures&&T.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture)}let te=null,Ae=!1,De=!1;if(S){const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture)&&(De=!0);const Xe=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(te=Xe[U],Ae=!0):Ee.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?te=Pe.get(S).__webglMultisampledFramebuffer:te=Xe,D.copy(S.viewport),N.copy(S.scissor),y=S.scissorTest}else D.copy(F).multiplyScalar(O).floor(),N.copy(Y).multiplyScalar(O).floor(),y=V;if(_e.bindFramebuffer(36160,te)&&Ee.drawBuffers&&H&&_e.drawBuffers(S,te),_e.viewport(D),_e.scissor(N),_e.setScissorTest(y),Ae){const Ne=Pe.get(S.texture);Z.framebufferTexture2D(36160,36064,34069+U,Ne.__webglTexture,X)}else if(De){const Ne=Pe.get(S.texture),Xe=U||0;Z.framebufferTextureLayer(36160,36064,Ne.__webglTexture,X||0,Xe)}E=-1},this.readRenderTargetPixels=function(S,U,X,H,te,Ae,De){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){_e.bindFramebuffer(36160,Fe);try{const Ne=S.texture,Xe=Ne.format,Be=Ne.type;if(Xe!==Pt&&b.convert(Xe)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Be===ks&&(Re.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Be!==mi&&b.convert(Be)!==Z.getParameter(35738)&&!(Be===zn&&(Ee.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&X>=0&&X<=S.height-te&&Z.readPixels(U,X,H,te,b.convert(Xe),b.convert(Be),Ae)}finally{const Ne=A!==null?Pe.get(A).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(S,U,X=0){const H=Math.pow(2,-X),te=Math.floor(U.image.width*H),Ae=Math.floor(U.image.height*H);T.setTexture2D(U,0),Z.copyTexSubImage2D(3553,X,0,0,S.x,S.y,te,Ae),_e.unbindTexture()},this.copyTextureToTexture=function(S,U,X,H=0){const te=U.image.width,Ae=U.image.height,De=b.convert(X.format),Fe=b.convert(X.type);T.setTexture2D(X,0),Z.pixelStorei(37440,X.flipY),Z.pixelStorei(37441,X.premultiplyAlpha),Z.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?Z.texSubImage2D(3553,H,S.x,S.y,te,Ae,De,Fe,U.image.data):U.isCompressedTexture?Z.compressedTexSubImage2D(3553,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):Z.texSubImage2D(3553,H,S.x,S.y,De,Fe,U.image),H===0&&X.generateMipmaps&&Z.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,U,X,H,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=S.max.x-S.min.x+1,De=S.max.y-S.min.y+1,Fe=S.max.z-S.min.z+1,Ne=b.convert(H.format),Xe=b.convert(H.type);let Be;if(H.isData3DTexture)T.setTexture3D(H,0),Be=32879;else if(H.isDataArrayTexture)T.setTexture2DArray(H,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,H.flipY),Z.pixelStorei(37441,H.premultiplyAlpha),Z.pixelStorei(3317,H.unpackAlignment);const Ve=Z.getParameter(3314),tt=Z.getParameter(32878),Kn=Z.getParameter(3316),Mi=Z.getParameter(3315),Si=Z.getParameter(32877),Qt=X.isCompressedTexture?X.mipmaps[0]:X.image;Z.pixelStorei(3314,Qt.width),Z.pixelStorei(32878,Qt.height),Z.pixelStorei(3316,S.min.x),Z.pixelStorei(3315,S.min.y),Z.pixelStorei(32877,S.min.z),X.isDataTexture||X.isData3DTexture?Z.texSubImage3D(Be,te,U.x,U.y,U.z,Ae,De,Fe,Ne,Xe,Qt.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Be,te,U.x,U.y,U.z,Ae,De,Fe,Ne,Qt.data)):Z.texSubImage3D(Be,te,U.x,U.y,U.z,Ae,De,Fe,Ne,Xe,Qt),Z.pixelStorei(3314,Ve),Z.pixelStorei(32878,tt),Z.pixelStorei(3316,Kn),Z.pixelStorei(3315,Mi),Z.pixelStorei(32877,Si),te===0&&H.generateMipmaps&&Z.generateMipmap(Be),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){_=0,w=0,A=null,_e.reset(),q.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fy extends rf{}fy.prototype.isWebGL1Renderer=!0;class su extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vt=new P;class Gs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ru=new P,ou=new Ze,au=new Ze,dy=new P,lu=new He;class py extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,e),au.fromBufferAttribute(s.attributes.skinWeight,e),ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=au.getComponent(r);if(o!==0){const a=ou.getComponent(r);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dy.copy(ru).applyMatrix4(lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class af extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class my extends gt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ot,u=ot,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=new He,gy=new He;class ul{constructor(e=[],t=[]){this.uuid=Zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:gy;cu.multiplyMatrices(a,t[r]),cu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ul(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Gh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new my(t,e,e,Pt,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new af),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class lf extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new P,hu=new P,fu=new He,Qo=new ao,Cr=new hs;class hl extends nt{constructor(e=new It,t=new lf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uu.fromBufferAttribute(t,s-1),hu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uu.distanceTo(hu);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;fu.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,f=new P,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let A=_,E=w-1;A<E;A+=m){const M=g.getX(A),D=g.getX(A+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,D),Qo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let A=_,E=w-1;A<E;A+=m){if(c.fromBufferAttribute(d,A),u.fromBufferAttribute(d,A+1),Qo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const du=new P,pu=new P;class _y extends hl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)du.fromBufferAttribute(t,s),pu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+du.distanceTo(pu);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xy extends hl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cf extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new He,Pa=new ao,Lr=new hs,Rr=new P;class vy extends nt{constructor(e=new It,t=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;mu.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const d=c.getX(g);Rr.fromBufferAttribute(h,d),gu(Rr,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m;g<p;g++)Rr.fromBufferAttribute(h,g),gu(Rr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gu(i,e,t,n,s,r,o){const a=Pa.distanceSqToPoint(i);if(a<t){const l=new P;Pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _u extends gt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=ot,this.minFilter=ot,this.generateMipmaps=!1,this.needsUpdate=!0}}class fl extends It{constructor(e=1,t=.4,n=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new P,h=new P,f=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const p=g/s*r,d=m/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(p),h.y=(e+t*Math.cos(d))*Math.sin(p),h.z=t*Math.sin(d),a.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const p=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,_=(s+1)*(m-1)+g,w=(s+1)*m+g;o.push(p,d,w),o.push(d,_,w)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}static fromJSON(e){return new fl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ea extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class co extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yi extends co{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Qe={arraySlice:function(i,e,t){return Qe.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s},flattenJSON:function(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)},subclip:function(i,e,t,n,s=30){const r=i.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let m=0;m<c.times.length;++m){const g=c.times[m]*s;if(!(g<t||g>=n)){h.push(c.times[m]);for(let p=0;p<u;++p)f.push(c.values[m*u+p])}}h.length!==0&&(c.times=Qe.convertArray(h,c.times.constructor),c.values=Qe.convertArray(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=m/3);const g=a.times.length-1;let p;if(r<=a.times[0]){const _=u,w=h-u;p=Qe.arraySlice(a.values,_,w)}else if(r>=a.times[g]){const _=g*h+u,w=_+h-u;p=Qe.arraySlice(a.values,_,w)}else{const _=a.createInterpolant(),w=u,A=h-u;_.evaluate(r),p=Qe.arraySlice(_.resultBuffer,w,A)}l==="quaternion"&&new $t().fromArray(p).normalize().conjugate().toArray(p);const d=c.times.length;for(let _=0;_<d;++_){const w=_*m+f;if(l==="quaternion")$t.multiplyQuaternionsFlat(c.values,w,p,0,c.values,w);else{const A=m-f*2;for(let E=0;E<A;++E)c.values[w+E]-=p[E]}}}return i.blendMode=$m,i}};class $s{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yy extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=e,a=2*t-n;break;case Mc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=e,l=2*n-t;break;case Mc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),p=g*g,d=p*g,_=-f*d+2*f*p-f*g,w=(1+f)*d+(-1.5-2*f)*p+(-.5+f)*g+1,A=(-1-m)*d+(1.5+m)*p+.5*g,E=m*d-m*p;for(let M=0;M!==a;++M)r[M]=_*o[u+M]+w*o[c+M]+A*o[l+M]+E*o[h+M];return r}}class by extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class My extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qe.convertArray(t,this.TimeBufferType),this.values=Qe.convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qe.convertArray(e.times,Array),values:Qe.convertArray(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new My(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new by(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ss:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Qe.arraySlice(n,r,o),this.values=Qe.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Qe.isTypedArray(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Qe.arraySlice(this.times),t=Qe.arraySlice(this.values),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Qe.arraySlice(e,0,o),this.values=Qe.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Qe.arraySlice(this.times,0),t=Qe.arraySlice(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=ss;class ds extends cn{}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Bs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class uf extends cn{}uf.prototype.ValueTypeName="color";class Ws extends cn{}Ws.prototype.ValueTypeName="number";class Sy extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}}class _i extends cn{InterpolantFactoryMethodLinear(e){return new Sy(this.times,this.values,this.getValueSize(),e)}}_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=ss;_i.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends cn{}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Bs;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends cn{}js.prototype.ValueTypeName="vector";class wy{constructor(e,t=-1,n,s=Zm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ey(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Qe.getKeyframeOrder(l);l=Qe.sortedArray(l,1,u),c=Qe.sortedArray(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,g,p){if(m.length!==0){const d=[],_=[];Qe.flattenJSON(m,d,_,g),d.length!==0&&p.push(new h(f,d,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)m[f[g].morphTargets[p]]=-1;for(const p in m){const d=[],_=[];for(let w=0;w!==f[g].morphTargets.length;++w){const A=f[g];d.push(A.time),_.push(A.morphTarget===p?1:0)}s.push(new Ws(".morphTargetInfluence["+p+"]",d,_))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(js,m+".position",f,"pos",s),n(_i,m+".quaternion",f,"rot",s),n(js,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ty(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return uf;case"quaternion":return _i;case"bool":case"boolean":return ds;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ey(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ty(i.type);if(i.times===void 0){const t=[],n=[];Qe.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const os={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ay{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Cy=new Ay;class bi{constructor(e){this.manager=e!==void 0?e:Cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mn={};class qr extends bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:s});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=mn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){w();function w(){h.read().then(({done:A,value:E})=>{if(A)_.close();else{p+=E.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let D=0,N=u.length;D<N;D++){const y=u[D];y.onProgress&&y.onProgress(M)}_.enqueue(E),w()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{os.add(e,c);const u=mn[e];delete mn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete mn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hf extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Hs("img");function l(){u(),os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ly extends bi{constructor(e){super(e)}load(e,t,n,s){const r=new rl,o=new hf(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class ff extends bi{constructor(e){super(e)}load(e,t,n,s){const r=new gt,o=new hf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Js extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xu=new He,vu=new P,yu=new P;class dl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends dl{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Py extends Js{constructor(e,t,n=0,s=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bu=new He,ys=new P,ta=new P;class Dy extends dl{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),ta.copy(n.position),ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ta),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}}class df extends Js{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iy extends dl{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cs extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.shadow=new Iy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ny extends Js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vi extends Js{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class pi{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fy extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){os.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Oy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mu(){return(typeof performance=="undefined"?Date:performance).now()}const pl="\\[\\]\\.:\\/",Uy=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",zy="[^"+pl.replace("\\.","")+"]",ky=/((?:WC+[\/:])*)/.source.replace("WC",ml),By=/(WCOD+)?/.source.replace("WCOD",zy),Vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),Gy=new RegExp("^"+ky+By+Vy+Hy+"$"),Wy=["material","materials","bones"];class jy{constructor(e,t,n){const s=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){const t=Gy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=jy;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qy{constructor(e,t,n=0,s=1/0){this.ray=new ao(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Da(e,this,n,t),n.sort(Su),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Da(e[s],this,n,t);return n.sort(Su),n}}function Su(i,e){return i.distance-e.distance}function Da(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Da(s[r],e,t,!0)}}class wu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tu=new we;class Xy{constructor(e=new we(1/0,1/0),t=new we(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const Eu={type:"change"},na={type:"start"},Au={type:"end"};class Ky extends xi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",ue),this._domElementKeyEvents=b},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eu),n.update(),r=s.NONE},this.update=function(){const b=new P,q=new $t().setFromUnitVectors(e.up,new P(0,1,0)),he=q.clone().invert(),fe=new P,L=new $t,de=2*Math.PI;return function(){const be=n.object.position;b.copy(be).sub(n.target),b.applyQuaternion(q),a.setFromVector3(b),n.autoRotate&&r===s.NONE&&C(N()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,Me=n.maxAzimuthAngle;return isFinite(me)&&isFinite(Me)&&(me<-Math.PI?me+=de:me>Math.PI&&(me-=de),Me<-Math.PI?Me+=de:Me>Math.PI&&(Me-=de),me<=Me?a.theta=Math.max(me,Math.min(Me,a.theta)):a.theta=a.theta>(me+Me)/2?Math.max(me,a.theta):Math.min(Me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),b.setFromSpherical(a),b.applyQuaternion(he),be.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||fe.distanceToSquared(n.object.position)>o||8*(1-L.dot(n.object.quaternion))>o?(n.dispatchEvent(Eu),fe.copy(n.object.position),L.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new wu,l=new wu;let c=1;const u=new P;let h=!1;const f=new we,m=new we,g=new we,p=new we,d=new we,_=new we,w=new we,A=new we,E=new we,M=[],D={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function C(b){l.theta-=b}function z(b){l.phi-=b}const O=function(){const b=new P;return function(he,fe){b.setFromMatrixColumn(fe,0),b.multiplyScalar(-he),u.add(b)}}(),le=function(){const b=new P;return function(he,fe){n.screenSpacePanning===!0?b.setFromMatrixColumn(fe,1):(b.setFromMatrixColumn(fe,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(he),u.add(b)}}(),ee=function(){const b=new P;return function(he,fe){const L=n.domElement;if(n.object.isPerspectiveCamera){const de=n.object.position;b.copy(de).sub(n.target);let pe=b.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),O(2*he*pe/L.clientHeight,n.object.matrix),le(2*fe*pe/L.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(he*(n.object.right-n.object.left)/n.object.zoom/L.clientWidth,n.object.matrix),le(fe*(n.object.top-n.object.bottom)/n.object.zoom/L.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(b){n.object.isPerspectiveCamera?c/=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(b){n.object.isPerspectiveCamera?c*=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(b){f.set(b.clientX,b.clientY)}function j(b){w.set(b.clientX,b.clientY)}function W(b){p.set(b.clientX,b.clientY)}function G(b){m.set(b.clientX,b.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const q=n.domElement;C(2*Math.PI*g.x/q.clientHeight),z(2*Math.PI*g.y/q.clientHeight),f.copy(m),n.update()}function J(b){A.set(b.clientX,b.clientY),E.subVectors(A,w),E.y>0?F(y()):E.y<0&&Y(y()),w.copy(A),n.update()}function ce(b){d.set(b.clientX,b.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),ee(_.x,_.y),p.copy(d),n.update()}function re(b){b.deltaY<0?Y(y()):b.deltaY>0&&F(y()),n.update()}function oe(b){let q=!1;switch(b.code){case n.keys.UP:ee(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:ee(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:ee(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:ee(-n.keyPanSpeed,0),q=!0;break}q&&(b.preventDefault(),n.update())}function ye(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const b=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);f.set(b,q)}}function Se(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const b=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);p.set(b,q)}}function Z(){const b=M[0].pageX-M[1].pageX,q=M[0].pageY-M[1].pageY,he=Math.sqrt(b*b+q*q);w.set(0,he)}function Ge(){n.enableZoom&&Z(),n.enablePan&&Se()}function Re(){n.enableZoom&&Z(),n.enableRotate&&ye()}function Ee(b){if(M.length==1)m.set(b.pageX,b.pageY);else{const he=ve(b),fe=.5*(b.pageX+he.x),L=.5*(b.pageY+he.y);m.set(fe,L)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const q=n.domElement;C(2*Math.PI*g.x/q.clientHeight),z(2*Math.PI*g.y/q.clientHeight),f.copy(m)}function _e(b){if(M.length===1)d.set(b.pageX,b.pageY);else{const q=ve(b),he=.5*(b.pageX+q.x),fe=.5*(b.pageY+q.y);d.set(he,fe)}_.subVectors(d,p).multiplyScalar(n.panSpeed),ee(_.x,_.y),p.copy(d)}function ze(b){const q=ve(b),he=b.pageX-q.x,fe=b.pageY-q.y,L=Math.sqrt(he*he+fe*fe);A.set(0,L),E.set(0,Math.pow(A.y/w.y,n.zoomSpeed)),F(E.y),w.copy(A)}function Pe(b){n.enableZoom&&ze(b),n.enablePan&&_e(b)}function T(b){n.enableZoom&&ze(b),n.enableRotate&&Ee(b)}function R(b){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",B),n.domElement.addEventListener("pointerup",$)),k(b),b.pointerType==="touch"?v(b):ie(b))}function B(b){n.enabled!==!1&&(b.pointerType==="touch"?x(b):se(b))}function $(b){K(b),M.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",$)),n.dispatchEvent(Au),r=s.NONE}function Q(b){K(b)}function ie(b){let q;switch(b.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Ti.DOLLY:if(n.enableZoom===!1)return;j(b),r=s.DOLLY;break;case Ti.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;W(b),r=s.PAN}else{if(n.enableRotate===!1)return;V(b),r=s.ROTATE}break;case Ti.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;V(b),r=s.ROTATE}else{if(n.enablePan===!1)return;W(b),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(na)}function se(b){if(n.enabled!==!1)switch(r){case s.ROTATE:if(n.enableRotate===!1)return;G(b);break;case s.DOLLY:if(n.enableZoom===!1)return;J(b);break;case s.PAN:if(n.enablePan===!1)return;ce(b);break}}function ae(b){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(b.preventDefault(),n.dispatchEvent(na),re(b),n.dispatchEvent(Au))}function ue(b){n.enabled===!1||n.enablePan===!1||oe(b)}function v(b){switch(ne(b),M.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;ye(),r=s.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;Se(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(),r=s.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(na)}function x(b){switch(ne(b),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(b),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_e(b),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(b),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;T(b),n.update();break;default:r=s.NONE}}function I(b){n.enabled!==!1&&b.preventDefault()}function k(b){M.push(b)}function K(b){delete D[b.pointerId];for(let q=0;q<M.length;q++)if(M[q].pointerId==b.pointerId){M.splice(q,1);return}}function ne(b){let q=D[b.pointerId];q===void 0&&(q=new we,D[b.pointerId]=q),q.set(b.pageX,b.pageY)}function ve(b){const q=b.pointerId===M[0].pointerId?M[1]:M[0];return D[q.pointerId]}n.domElement.addEventListener("contextmenu",I),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}class Yy extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eb(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new cb(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=pi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=e;else if(pi.decodeText(new Uint8Array(e,0,4))===pf){try{o[Ue.KHR_BINARY_GLTF]=new ub(e)}catch(h){s&&s(h);return}r=o[Ue.KHR_BINARY_GLTF].content}else r=pi.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Sb(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case Ue.KHR_MATERIALS_UNLIT:o[h]=new Jy;break;case Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new db;break;case Ue.KHR_DRACO_MESH_COMPRESSION:o[h]=new hb(l,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:o[h]=new fb;break;case Ue.KHR_MESH_QUANTIZATION:o[h]=new pb;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Zy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class $y{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new df(u),c.distance=h;break;case"spot":c=new Py(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Jy{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ke))}return Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class eb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(r)}}class tb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ke)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ib{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te(a[0],a[1],a[2]),Promise.all(r)}}class rb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ob{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ke)),Promise.all(r)}}class ab{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lb{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cb{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new ArrayBuffer(u*h),m=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(f),u,h,m,s.mode,s.filter),f})}else return null}}const pf="glTF",bs=12,Cu={JSON:1313821514,BIN:5130562};class ub{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bs);if(this.header={magic:pi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-bs,s=new DataView(e,bs);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===Cu.JSON){const l=new Uint8Array(e,bs+r,o);this.content=pi.decodeText(l)}else if(a===Cu.BIN){const l=bs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Na[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Na[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],m=qs[f.componentType];c[h]=m,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const m in f.attributes){const g=f.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class fb{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ia extends co{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Te().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class db{constructor(){this.name=Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Ia}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Te(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,Ke)),e.emissive=new Te(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Te(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,Ke))}return Promise.all(r)}createMaterial(e){const t=new Ia(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=nl,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class pb{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class mf extends $s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,m=f*h,g=e*c,p=g-c,d=-2*m+3*f,_=m-f,w=1-d,A=_-f+h;for(let E=0;E!==a;E++){const M=o[p+E+a],D=o[p+E+l]*u,N=o[g+E+a],y=o[g+E]*u;r[E]=w*M+A*D+d*N+_*y}return r}}const mb=new $t;class gb extends mf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return mb.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lu={9728:ot,9729:At,9984:Ta,9985:Bh,9986:Ea,9987:us},Ru={33071:Ot,33648:Wr,10497:ns},Pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Na={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_b={CUBICSPLINE:void 0,LINEAR:ss,STEP:Bs},ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new co({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),i.DefaultMaterial}function Ms(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bb(i){const e=i.extensions&&i.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Du(e.attributes):t=i.indices+":"+Du(i.attributes)+":"+i.mode,t}function Du(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Sb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new ff(this.options.manager):this.textureLoader=new Fy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Ms(r,a,s),ii(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(pi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Pu[s.type],c=qs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let p,d;if(m&&m!==h){const _=Math.floor(f/m),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let A=t.cache.get(w);A||(p=new c(a,_*m,s.count*m/u),A=new of(p,m/u),t.cache.add(w,A)),d=new Gs(A,l,f%m/u,g)}else a===null?p=new c(s.count*l):p=new c(a,f,s.count*l),d=new St(p,l,g);if(s.sparse!==void 0){const _=Pu.SCALAR,w=qs[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,M=new w(o[1],A,s.sparse.count*_),D=new c(o[2],E,s.sparse.count*l);a!==null&&(d=new St(d.array.slice(),d.itemSize,d.normalized));for(let N=0,y=M.length;N<y;N++){const C=M[N];if(d.setX(C,D[N*l]),l>=2&&d.setY(C,D[N*l+1]),l>=3&&d.setZ(C,D[N*l+2]),l>=4&&d.setW(C,D[N*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,o.name&&(u.name=o.name);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Lu[f.magFilter]||At,u.minFilter=Lu[f.minFilter]||us,u.wrapS=Ru[f.wrapS]||ns,u.wrapT=Ru[f.wrapT]||ns,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const d=new gt(p);d.needsUpdate=!0,f(d)}),t.load(pi.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||Mb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cf,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lf,an.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return co}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[Ue.KHR_MATERIALS_UNLIT]){const h=s[Ue.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ke)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jn);const u=r.alphaMode||ia.OPAQUE;if(u===ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ia.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn&&(a.emissive=new Te().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==yn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ke)),Promise.all(c).then(function(){let h;return o===Ia?h=s[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),r.name&&(h.name=r.name),ii(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ms(s,h,r),h})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Iu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=bb(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Iu(new It,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?xb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],d=o[m];let _;const w=c[m];if(d.mode===gn.TRIANGLES||d.mode===gn.TRIANGLE_STRIP||d.mode===gn.TRIANGLE_FAN||d.mode===void 0)_=r.isSkinnedMesh===!0?new py(p,w):new pt(p,w),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===gn.TRIANGLE_STRIP?_.geometry=Nu(_.geometry,Jm):d.mode===gn.TRIANGLE_FAN&&(_.geometry=Nu(_.geometry,Hh));else if(d.mode===gn.LINES)_=new _y(p,w);else if(d.mode===gn.LINE_STRIP)_=new hl(p,w);else if(d.mode===gn.LINE_LOOP)_=new xy(p,w);else if(d.mode===gn.POINTS)_=new vy(p,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&yb(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),ii(_,r),d.extensions&&Ms(s,_,d),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const f=new kn;t.associations.set(f,{meshes:e});for(let m=0,g=h.length;m<g;m++)f.add(h[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Es.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ll(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],m=h.target,g=m.node!==void 0?m.node:m.id,p=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(m)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],m=c[3],g=c[4],p=[];for(let _=0,w=u.length;_<w;_++){const A=u[_],E=h[_],M=f[_],D=m[_],N=g[_];if(A===void 0)continue;A.updateMatrix(),A.matrixAutoUpdate=!0;let y;switch(Fn[N.path]){case Fn.weights:y=Ws;break;case Fn.rotation:y=_i;break;case Fn.position:case Fn.scale:default:y=js;break}const C=A.name?A.name:A.uuid,z=D.interpolation!==void 0?_b[D.interpolation]:ss,O=[];Fn[N.path]===Fn.weights?A.traverse(function(ee){ee.morphTargetInfluences&&O.push(ee.name?ee.name:ee.uuid)}):O.push(C);let le=M.array;if(M.normalized){const ee=Fa(le.constructor),F=new Float32Array(le.length);for(let Y=0,V=le.length;Y<V;Y++)F[Y]=le[Y]*ee;le=F}for(let ee=0,F=O.length;ee<F;ee++){const Y=new y(O[ee]+"."+Fn[N.path],E.array,le,z);D.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(j){const W=this instanceof _i?gb:mf;return new W(this.times,this.values,this.getValueSize()/3,j)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(Y)}}const d=n.name?n.name:"animation_"+e;return new wy(d,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new af:a.length>1?l=new kn:a.length===1?l=a[0]:l=new nt,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),ii(l,r),r.extensions&&Ms(n,l,r),r.matrix!==void 0){const c=new He;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new kn;s.name&&(o.name=r.createUniqueName(s.name)),ii(o,s),s.extensions&&Ms(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(gf(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,m]of r.associations)(f instanceof an||f instanceof gt)&&h.set(f,m);return u.traverse(f=>{const m=r.associations.get(f);m!=null&&h.set(f,m)}),h};return r.associations=c(o),o})}}function gf(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=a.length;h<f;h++){const m=a[h];if(m){c.push(m);const g=new He;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new ul(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(gf(u,r,t,n))}}return Promise.all(o)})}function wb(i,e,t){const n=e.attributes,s=new vi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Fa(qs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){const p=Fa(qs[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new hs;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Iu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Na[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ii(i,e),wb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vb(i,e.targets,t):i})}function Nu(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Hh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}const sa=new WeakMap;class Tb extends bi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new qr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(o,a).then(t).catch(s)},n,s)}decodeDracoFile(e,t,n,s){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(sa.has(e)){const l=sa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),sa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new It;e.index&&t.setIndex(new St(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize;t.setAttribute(r,new St(o,a))}return t}_loadLibrary(e,t){const n=new qr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Eb.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Eb(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder,m=new h.DecoderBuffer;m.Init(new Int8Array(l),l.byteLength);try{const g=t(h,f,m,c),p=g.attributes.map(d=>d.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{h.destroy(m),h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,m;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,m=a.DecodeBufferToMesh(l,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,m=a.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const p={index:null,attributes:[]};for(const d in u){const _=self[h[d]];let w,A;if(c.useUniqueIDs)A=u[d],w=a.GetAttributeByUniqueId(f,A);else{if(A=a.GetAttributeId(f,o[u[d]]),A===-1)continue;w=a.GetAttribute(f,A)}p.attributes.push(s(o,a,f,d,_,w))}return g===o.TRIANGULAR_MESH&&(p.index=n(o,a,f)),o.destroy(f),p}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const m=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:m,itemSize:1}}function s(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,p=g*u.BYTES_PER_ELEMENT,d=r(o,u),_=o._malloc(p);a.GetAttributeDataArrayForAllPoints(l,h,d,p,_);const w=new u(o.HEAPF32.buffer,_,g).slice();return o._free(_),{name:c,array:w,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Ab=[{name:"sun",displayName:"The Sun",description:"Yellow dwarf star",year:"230 milion years",day:null,distanceFromSun:-1,radius:695508,TimesLarger:109.2,orbitalVelocity:0,orbitObject:null,orbitalRadius:0,scaledOrbitalRadius:0,rotationVelocity:2,orbitalInclination:0,axialTilt:7.25},{name:"mercury",displayName:"Mercury",description:"Swift Planet",year:"88 Earth days",day:"59 Earth days",distanceFromSun:.4,radius:2439.7,TimesLarger:.38,orbitalVelocity:47.9,orbitObject:"sun",orbitalRadius:57909050,scaledOrbitalRadius:24,rotationVelocity:.003,orbitalInclination:7,axialTilt:.03},{name:"venus",displayName:"Venus",description:"Morning Star",year:"225 Earth days",day:"243 Earth days",distanceFromSun:.7,radius:6051.8,TimesLarger:.9,orbitalVelocity:35,orbitObject:"sun",orbitalRadius:1082e5,scaledOrbitalRadius:31,rotationVelocity:.003,orbitalInclination:3.4,axialTilt:2.64},{name:"earth",displayName:"Earth",description:"Blue Planet",year:"365.25 Earth days",day:"23.9 hours",distanceFromSun:1,radius:6371,TimesLarger:-1,orbitalVelocity:29.8,orbitObject:"sun",orbitalRadius:1496e5,scaledOrbitalRadius:37,rotationVelocity:.46,orbitalInclination:0,axialTilt:23.44},{name:"mars",displayName:"Mars",description:"Red Planet",year:"1.88 Earth years",day:"24.6 hours",distanceFromSun:1.5,radius:3389.5,TimesLarger:.52,orbitalVelocity:24.1,orbitObject:"sun",orbitalRadius:227939366,scaledOrbitalRadius:45,rotationVelocity:.241,orbitalInclination:1.8,axialTilt:25.19},{name:"jupiter",displayName:"Jupiter",description:"Giant Planet",year:"11.86 Earth years",day:"9.93 hours",distanceFromSun:5.1,radius:69911,TimesLarger:11,orbitalVelocity:24.1,orbitObject:"sun",orbitalRadius:778412027,scaledOrbitalRadius:72,rotationVelocity:12.6,orbitalInclination:1.3,axialTilt:3.13},{name:"saturn",displayName:"Saturn",description:"Ringed Planet",year:"29.45 Earth years",day:"10.7 hours",distanceFromSun:9.5,radius:58232,TimesLarger:9.1,orbitalVelocity:9.7,orbitObject:"sun",orbitalRadius:143353e4,scaledOrbitalRadius:108,rotationVelocity:9.87,orbitalInclination:2.5,axialTilt:26.73},{name:"uranus",displayName:"Uranus",description:"Ice Giant",year:"84 Earth years",day:"17 hours",distanceFromSun:19.8,radius:25362,TimesLarger:4,orbitalVelocity:6.8,orbitObject:"sun",orbitalRadius:2870972e3,scaledOrbitalRadius:145,rotationVelocity:2.59,orbitalInclination:.8,axialTilt:82.23},{name:"neptune",displayName:"Neptune",description:"Big Blue Planet",year:"164 Earth years",day:"16 hours",distanceFromSun:30.1,radius:24622,TimesLarger:3.9,orbitalVelocity:5.4,orbitObject:"sun",orbitalRadius:4514953e3,scaledOrbitalRadius:180,rotationVelocity:2.6,orbitalInclination:1.8,axialTilt:28.32},{name:"moon",displayName:"Earth's Moon",description:"The brightest object in the night sky",year:"27 days",radius:1737.5,TimesLarger:.27,distance:"385000 km",orbitalVelocity:1.022,orbitObject:"earth",orbitalRadius:385e3,scaledOrbitalRadius:3,rotationVelocity:.005,orbitalInclination:5.1},{name:"io",displayName:"Io",description:"Most volcanic activity",year:"42 hours",radius:1821.6,TimesLarger:.285,distance:"262000 km",orbitalVelocity:17.334,orbitObject:"jupiter",orbitalRadius:262e3,scaledOrbitalRadius:10,rotationVelocity:.07,orbitalInclination:.05},{name:"europa",displayName:"Europa",description:"Life promising moon",year:"85 hours",radius:1560.8,TimesLarger:.24,distance:"670900 km",orbitalVelocity:13.743,orbitObject:"jupiter",orbitalRadius:670900,scaledOrbitalRadius:13,rotationVelocity:.03,orbitalInclination:.47},{name:"ganymede",displayName:"Ganymede",description:"Largest moon in the Solar System",year:"172 hours",radius:2634.1,TimesLarger:.416,distance:"1070400 km",orbitalVelocity:10.88,orbitObject:"jupiter",orbitalRadius:1070400,scaledOrbitalRadius:15,rotationVelocity:.026,orbitalInclination:.2},{name:"callisto",displayName:"Callisto",description:"The long dead moon",year:"17 days",radius:2410.3,TimesLarger:.384,distance:"1883000 km",orbitalVelocity:8.204,orbitObject:"jupiter",orbitalRadius:1883e3,scaledOrbitalRadius:17.5,rotationVelocity:.01,orbitalInclination:.28},{name:"titan",displayName:"Titan",description:"Moon with liquids on its surface",year:"16 days",radius:2574.7,TimesLarger:.4,distance:"1221865 km",orbitalVelocity:5.57,orbitObject:"saturn",orbitalRadius:1221865,scaledOrbitalRadius:16,rotationVelocity:.011,orbitalInclination:.33},{name:"triton",displayName:"Triton",description:"The coldest object in Solar system",year:"141 hours",radius:1353.4,TimesLarger:.21,distance:"354759 km",orbitalVelocity:4.39,orbitObject:"neptune",orbitalRadius:354759,scaledOrbitalRadius:7,rotationVelocity:.017,orbitalInclination:156.885}];class Xs extends pt{constructor(){super(Xs.Geometry,new yn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new P,t=new P,n=new _u(16,16,Pt),s=new _u(16,16,Pt),r=Xs.Geometry,o=new ea({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new ea({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new pt(r,o),c=[],u=qi.Shader,h=new ea({uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Te(16777215)},scale:{value:new we},screenPosition:{value:new P}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ba,transparent:!0,depthWrite:!1}),f=new pt(r,h);this.addElement=function(_){c.push(_)};const m=new we,g=new we,p=new Xy,d=new Ze;this.onBeforeRender=function(_,w,A){_.getCurrentViewport(d);const E=d.w/d.z,M=d.z/2,D=d.w/2;let N=16/d.w;if(m.set(N*E,N),p.min.set(d.x,d.y),p.max.set(d.x+(d.z-16),d.y+(d.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(A.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(A.projectionMatrix),g.x=d.x+e.x*M+M-8,g.y=d.y+e.y*D+D-8,p.containsPoint(g))){_.copyFramebufferToTexture(g,n);let y=o.uniforms;y.scale.value=m,y.screenPosition.value=e,_.renderBufferDirect(A,null,r,o,l,null),_.copyFramebufferToTexture(g,s),y=a.uniforms,y.scale.value=m,y.screenPosition.value=e,_.renderBufferDirect(A,null,r,a,l,null);const C=-e.x*2,z=-e.y*2;for(let O=0,le=c.length;O<le;O++){const ee=c[O],F=h.uniforms;F.color.value.copy(ee.color),F.map.value=ee.texture,F.screenPosition.value.x=e.x+C*ee.distance,F.screenPosition.value.y=e.y+z*ee.distance,N=ee.size/d.w;const Y=d.w/d.z;F.scale.value.set(N*Y,N),h.uniformsNeedUpdate=!0,_.renderBufferDirect(A,null,r,h,f,null)}}},this.dispose=function(){o.dispose(),a.dispose(),h.dispose(),n.dispose(),s.dispose();for(let _=0,w=c.length;_<w;_++)c[_].texture.dispose()}}}class qi{constructor(e,t=1,n=0,s=new Te(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}}qi.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Xs.Geometry=function(){const i=new It,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new of(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new Gs(t,3,0,!1)),i.setAttribute("uv",new Gs(t,2,3,!1)),i}();var _f=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t};const Cb={data(){return{speed:"day_sec"}},methods:{onSpeedChange(i){const e=i.target.value;this.$emit("speedChanged",e)}},mounted(){this.$emit("speedChanged",this.speed)}},Qs=i=>(lh("data-v-5b8430da"),i=i(),ch(),i),Lb={class:"options"},Rb={class:"form-group"},Pb=Qs(()=>et("label",null,"Speed",-1)),Db={class:"input-select"},Ib={class:"select-item"},Nb=Qs(()=>et("label",{for:"realtime"},"Realtime",-1)),Fb={class:"select-item"},Ob=Qs(()=>et("label",{for:"day_sec"},"1 day/sec",-1)),Ub={class:"select-item"},zb=Qs(()=>et("label",{for:"mon_sec"},"1 mon/sec",-1)),kb={class:"select-item"},Bb=Qs(()=>et("label",{for:"idealized"},"Idealized",-1));function Vb(i,e,t,n,s,r){return Qa(),Lh("div",Lb,[et("div",Rb,[Pb,et("div",Db,[et("div",Ib,[or(et("input",{name:"speed",id:"realtime",type:"radio",value:"realtime","onUpdate:modelValue":e[0]||(e[0]=o=>s.speed=o),onChange:e[1]||(e[1]=(...o)=>r.onSpeedChange&&r.onSpeedChange(...o))},null,544),[[ar,s.speed]]),Nb]),et("div",Fb,[or(et("input",{checked:"",name:"speed",id:"day_sec",type:"radio",value:"day_sec","onUpdate:modelValue":e[2]||(e[2]=o=>s.speed=o),onChange:e[3]||(e[3]=(...o)=>r.onSpeedChange&&r.onSpeedChange(...o))},null,544),[[ar,s.speed]]),Ob]),et("div",Ub,[or(et("input",{name:"speed",id:"mon_sec",type:"radio",value:"mon_sec","onUpdate:modelValue":e[4]||(e[4]=o=>s.speed=o),onChange:e[5]||(e[5]=(...o)=>r.onSpeedChange&&r.onSpeedChange(...o))},null,544),[[ar,s.speed]]),zb]),et("div",kb,[or(et("input",{name:"speed",id:"idealized",type:"radio",value:"idealized","onUpdate:modelValue":e[6]||(e[6]=o=>s.speed=o),onChange:e[7]||(e[7]=(...o)=>r.onSpeedChange&&r.onSpeedChange(...o))},null,544),[[ar,s.speed]]),Bb])])])])}var Hb=_f(Cb,[["render",Vb],["__scopeId","data-v-5b8430da"]]);const xf=new Yy,vf=new Tb;vf.setDecoderPath("../node_modules/three/examples/js/libs/draco/");xf.setDRACOLoader(vf);const Gb={data(){return{speed:1,idealizedSpeed:!0,time:0}},components:{Options:Hb},async mounted(){this.time=Date.now();const i=this.createScene(),e=this.createBackgroundScene(),t=this.createCamera(),n=this.createRenderer(i,t);this.setupLighting(i);const s=this.createControls(t,n),r=await this.createSolarSystem(i),o=new Oy,a=new we,l=new qy;nt.prototype.tick=h=>{};let c={planet:null,outline:null},u=null;n.autoClear=!1,t.layers.enable(1),n.setAnimationLoop(()=>{let h=o.getDelta();for(let m of r)m.tick(h);u&&u.children[0].getWorldPosition(s.target),s.update(),l.setFromCamera(a,t);const f=l.intersectObjects(r,!0);f.length>0&&c.planet==null?(c.planet=f[0].object,c.outline=this.highlightPlanet(f[0].object)):f.length>0&&c.planet!==f[0].object?(this.unhighlightPlanet(c.planet),c.planet=f[0].object,c.outline=this.highlightPlanet(f[0].object)):f.length===0&&c.planet!=null&&(this.unhighlightPlanet(c.planet),c.planet=null,c.outline=null),this.idealizedSpeed||(this.time+=this.speed*1e3*h),n.clear(),t.layers.set(1),n.render(e,t),n.render(i,t),t.layers.set(0),n.render(i,t)}),window.onresize=()=>{this.resizeRenderer(n),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()},document.addEventListener("mousemove",h=>{h.preventDefault(),a.x=h.clientX/window.innerWidth*2-1,a.y=-(h.clientY/window.innerHeight)*2+1}),document.addEventListener("click",h=>{if(a.x=h.clientX/window.innerWidth*2-1,a.y=-(h.clientY/window.innerHeight)*2+1,c.planet!=null){const f=this.findMeshPlanet(c.planet);if(f.name==="sun")s.minDistance=60,s.maxDistance=500,s.target.set(0,0,0);else{let m=new vi().setFromObject(f.children[0].children[0]),g=Math.abs(m.max.x-m.min.x);s.minDistance=g*1.25,s.maxDistance=g*2.5}u=f}})},methods:{createSolarSystem:async function(i){var t,n;const e=[];for(let s of Ab){let r=await xf.loadAsync(`./assets/gltf/${s.name}.glb`),o,a={isPlanet:!0,orbitalVelocity:s.orbitalVelocity,orbitalRadius:s.orbitalRadius,currentDistance:2*Math.PI*s.orbitalRadius*Math.random(),currentRotation:0,planetCircumference:2*Math.PI*s.radius,orbitalCircumference:2*Math.PI*s.orbitalRadius,scaledOrbitalRadius:s.scaledOrbitalRadius,isPivot:!1,radius:s.radius,rotationVelocity:s.rotationVelocity};if(s.orbitObject!=null){let l=this.findOrbitObject(e,s.orbitObject);r.scene.position.z=s.scaledOrbitalRadius,r.scene.rotation.z=Es.degToRad((t=s.axialTilt)!=null?t:0);let c=new nt;c.name=s.name,c.userData=a,c.userData.isPivot=!0,c.add(r.scene),c.rotation.x=Es.degToRad(s.orbitalInclination),o=c;const u=new yn({color:16777215});u.side=jn,u.transparent=!0,u.opacity=.15;let h=new pt(new fl(s.scaledOrbitalRadius,.05,8,64),u);h.rotation.x=Es.degToRad(90),c.add(h),r.scene.children[0].userData.trajectory=h,r.scene.children[0].userData.canHover=!0,l.add(c),e.push(c)}else{let l=new kn;r.scene.rotation.z=Es.degToRad((n=s.axialTilt)!=null?n:0),l.add(r.scene),l.userData=a,r.scene.userData.canHover=!0,l.name=s.name,o=l,i.add(l),e.push(l)}this.createUpdateLoop(o)}return e},highlightPlanet:function(i){if(!i.parent.userData.canHover)return;i.parent.traverse(function(t){t instanceof pt&&(t.material.emissive=new Te(4210752),t.material.emissiveIntensity=1.31)});const e=i.parent.userData.trajectory;return e&&(e.material.opacity=1),null},unhighlightPlanet:function(i){if(!(i!=null&&i.parent.userData.canHover))return;i.parent.traverse(function(t){t instanceof pt&&(t.material.emissive=new Te(0))});const e=i.parent.userData.trajectory;e&&(e.material.opacity=.15)},findOrbitObject:function(i,e){let t=i.find(n=>n.name===e);return t.userData.isPivot?t.children.find(n=>!n.userData.isPivot):t},findMeshPlanet:function(i){return i.userData.isPlanet?i:i.parent==null?null:this.findMeshPlanet(i.parent)},createUpdateLoop:function(i){i.tick=e=>{i.userData.orbitalRadius!==0&&(i.userData.currentDistance+=this.idealizedSpeed?Math.max(e*i.userData.orbitalVelocity*i.userData.orbitalRadius/100,6e3):i.userData.orbitalVelocity*e*this.speed,i.userData.currentDistance>i.userData.orbitalCircumference&&(i.userData.currentDistance=i.userData.currentDistance%i.userData.orbitalCircumference),i.rotation.y=i.userData.currentDistance/i.userData.orbitalCircumference*Math.PI*2),i.userData.currentRotation+=this.idealizedSpeed?i.userData.planetCircumference*e*.1:i.userData.rotationVelocity*e*this.speed;let t=i.userData.currentRotation/i.userData.planetCircumference*Math.PI*2;i.userData.isPivot?i.children[0].children[0].rotation.y=t:i.children[0].rotation.y=t}},createScene:function(){return new su},createCamera:function(){return new bt(47,window.innerWidth/window.innerHeight,.1,1e3)},createBackgroundScene:function(){const i=new su,t=new Ly().load(["./assets/universe.jpg","./assets/universe.jpg","./assets/universe.jpg","./assets/universe.jpg","./assets/universe.jpg","./assets/universe.jpg"]);return i.background=t,i},createRenderer:function(i,e){const t=new rf({powerPreference:"high-performance",canvas:this.$refs.canvas,antialias:!0,alpha:!0});return t.setClearColor(0,0),this.resizeRenderer(t),t.autoClearColor=!1,t.outputEncoding=qn,t.render(i,e),t},createControls:function(i,e){const t=new Ky(i,e.domElement);return t.autoRotate=!1,t.enableDamping=!0,t.dampingFactor=.1,t.enablePan=!1,t.minDistance=60,t.maxDistance=500,t.object.rotation.x=-.841,t.object.rotation.y=.528,t.object.rotation.z=.513,t.object.position.x=98.467,t.object.position.y=125.67,t.object.position.z=112.32,t},setupLighting:function(i){const e=new Ny(16777215,.2);i.add(e);const t=new df(16771296,1.5,300);i.add(t);const n=new ff,s=n.load("./assets/textures/lensflare0.png"),r=n.load("./assets/textures/lensflare1.png"),o=new Xs;o.layers.enable(1),o.addElement(new qi(s,130)),o.addElement(new qi(r,100)),o.addElement(new qi(r,140)),o.addElement(new qi(r,180)),t.add(o);const a=new Vi(16777215,7,20,25);a.position.set(-12,0,0),a.lookAt(0,0,0),i.add(a);const l=new Vi(16777215,7,20,25);l.position.set(12,0,0),l.lookAt(0,0,0),i.add(l);const c=new Vi(16777215,7,20,20);c.position.set(0,10,12),c.lookAt(0,0,0),i.add(c);const u=new Vi(16777215,7,20,20);u.position.set(0,10,-12),u.lookAt(0,0,0),i.add(u);const h=new Vi(16777215,7,20,20);h.position.set(0,-10,12),h.lookAt(0,0,0),i.add(h);const f=new Vi(16777215,7,20,20);f.position.set(0,-10,-12),f.lookAt(0,0,0),i.add(f);const m=new Cs(16777215,.1);m.position.set(-250,15,0),m.lookAt(0,0,0),i.add(m);const g=new Cs(16777215,.1);g.position.set(250,15,0),g.lookAt(0,0,0),i.add(g);const p=new Cs(16777215,.1);p.position.set(0,15,-250),p.lookAt(0,0,0),i.add(p);const d=new Cs(16777215,.1);d.position.set(0,15,250),d.lookAt(0,0,0),i.add(d)},resizeRenderer:function(i){i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight)},onSpeedChange(i){switch(this.idealizedSpeed=!1,i){case"realtime":this.speed=1;break;case"day_sec":this.speed=86400;break;case"mon_sec":this.speed=2419200;break;case"idealized":this.idealizedSpeed=!0;break}}},computed:{date(){const i=new Date(this.time);return`${("0"+i.getDate()).slice(-2)}. ${("0"+(i.getMonth()+1).toString()).slice(-2)}. ${i.getFullYear()}`}}},Wb=i=>(lh("data-v-fc8a2db8"),i=i(),ch(),i),jb={ref:"canvas"},qb=Wb(()=>et("div",{class:"ico"},[et("svg",{viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},[et("path",{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",fill:"#ffffff",class:"fill-000000"})])],-1));function Xb(i,e,t,n,s,r){const o=Zd("Options");return Qa(),Lh(jt,null,[et("canvas",jb,null,512),Mn(o,{onSpeedChanged:r.onSpeedChange},null,8,["onSpeedChanged"]),et("div",{class:Xr(["date-display",{disabled:s.idealizedSpeed}])},[qb,et("p",null,Df(r.date),1)],2)],64)}var Kb=_f(Gb,[["render",Xb],["__scopeId","data-v-fc8a2db8"]]);const Yb={__name:"App",setup(i){return(e,t)=>(Qa(),_p(Kb))}};im(Yb).mount("#app");
