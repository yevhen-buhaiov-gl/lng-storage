var Qe=Object.create;var pe=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var et=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty;var rt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var nt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ke(t))!tt.call(e,i)&&i!==r&&pe(e,i,{get:()=>t[i],enumerable:!(n=Ve(t,i))||n.enumerable});return e};var it=(e,t,r)=>(r=e!=null?Qe(et(e)):{},nt(t||!e||!e.__esModule?pe(r,"default",{value:e,enumerable:!0}):r,e));var Ye=rt((D,E)=>{var ot=200,ge="__lodash_hash_undefined__",Z=1,be=2,xe=9007199254740991,$="[object Arguments]",ae="[object Array]",ft="[object AsyncFunction]",Oe="[object Boolean]",Ee="[object Date]",Pe="[object Error]",De="[object Function]",ct="[object GeneratorFunction]",H="[object Map]",Le="[object Number]",ut="[object Null]",O="[object Object]",de="[object Promise]",lt="[object Proxy]",je="[object RegExp]",K="[object Set]",Me="[object String]",gt="[object Symbol]",ht="[object Undefined]",se="[object WeakMap]",Re="[object ArrayBuffer]",J="[object DataView]",pt="[object Float32Array]",dt="[object Float64Array]",_t="[object Int8Array]",mt="[object Int16Array]",yt="[object Int32Array]",vt="[object Uint8Array]",At="[object Uint8ClampedArray]",wt="[object Uint16Array]",St="[object Uint32Array]",Ct=/[\\^$.*+?()[\]{}|]/g,Tt=/^\[object .+?Constructor\]$/,It=/^(?:0|[1-9]\d*)$/,u={};u[pt]=u[dt]=u[_t]=u[mt]=u[yt]=u[vt]=u[At]=u[wt]=u[St]=!0;u[$]=u[ae]=u[Re]=u[Oe]=u[J]=u[Ee]=u[Pe]=u[De]=u[H]=u[Le]=u[O]=u[je]=u[K]=u[Me]=u[se]=!1;var Ue=typeof global=="object"&&global&&global.Object===Object&&global,bt=typeof self=="object"&&self&&self.Object===Object&&self,y=Ue||bt||Function("return this")(),ze=typeof D=="object"&&D&&!D.nodeType&&D,_e=ze&&typeof E=="object"&&E&&!E.nodeType&&E,Fe=_e&&_e.exports===ze,re=Fe&&Ue.process,me=function(){try{return re&&re.binding&&re.binding("util")}catch{}}(),ye=me&&me.isTypedArray;function xt(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var s=e[r];t(s,r,e)&&(a[i++]=s)}return a}function Ot(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function Et(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function Pt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Dt(e){return function(t){return e(t)}}function Lt(e,t){return e.has(t)}function jt(e,t){return e?.[t]}function Mt(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}function Rt(e,t){return function(r){return e(t(r))}}function Ut(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var zt=Array.prototype,Ft=Function.prototype,Q=Object.prototype,ne=y["__core-js_shared__"],Be=Ft.toString,_=Q.hasOwnProperty,ve=function(){var e=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ne=Q.toString,Bt=RegExp("^"+Be.call(_).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=Fe?y.Buffer:void 0,q=y.Symbol,we=y.Uint8Array,Ge=Q.propertyIsEnumerable,Nt=zt.splice,T=q?q.toStringTag:void 0,Se=Object.getOwnPropertySymbols,Gt=Ae?Ae.isBuffer:void 0,Wt=Rt(Object.keys,Object),oe=P(y,"DataView"),L=P(y,"Map"),fe=P(y,"Promise"),ce=P(y,"Set"),ue=P(y,"WeakMap"),j=P(Object,"create"),$t=x(oe),Ht=x(L),Kt=x(fe),Jt=x(ce),qt=x(ue),Ce=q?q.prototype:void 0,ie=Ce?Ce.valueOf:void 0;function I(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Xt(){this.__data__=j?j(null):{},this.size=0}function Yt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Zt(e){var t=this.__data__;if(j){var r=t[e];return r===ge?void 0:r}return _.call(t,e)?t[e]:void 0}function Qt(e){var t=this.__data__;return j?t[e]!==void 0:_.call(t,e)}function Vt(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=j&&t===void 0?ge:t,this}I.prototype.clear=Xt;I.prototype.delete=Yt;I.prototype.get=Zt;I.prototype.has=Qt;I.prototype.set=Vt;function v(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function kt(){this.__data__=[],this.size=0}function er(e){var t=this.__data__,r=V(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Nt.call(t,r,1),--this.size,!0}function tr(e){var t=this.__data__,r=V(t,e);return r<0?void 0:t[r][1]}function rr(e){return V(this.__data__,e)>-1}function nr(e,t){var r=this.__data__,n=V(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}v.prototype.clear=kt;v.prototype.delete=er;v.prototype.get=tr;v.prototype.has=rr;v.prototype.set=nr;function b(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ir(){this.size=0,this.__data__={hash:new I,map:new(L||v),string:new I}}function ar(e){var t=k(this,e).delete(e);return this.size-=t?1:0,t}function sr(e){return k(this,e).get(e)}function or(e){return k(this,e).has(e)}function fr(e,t){var r=k(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}b.prototype.clear=ir;b.prototype.delete=ar;b.prototype.get=sr;b.prototype.has=or;b.prototype.set=fr;function X(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new b;++t<r;)this.add(e[t])}function cr(e){return this.__data__.set(e,ge),this}function ur(e){return this.__data__.has(e)}X.prototype.add=X.prototype.push=cr;X.prototype.has=ur;function S(e){var t=this.__data__=new v(e);this.size=t.size}function lr(){this.__data__=new v,this.size=0}function gr(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function hr(e){return this.__data__.get(e)}function pr(e){return this.__data__.has(e)}function dr(e,t){var r=this.__data__;if(r instanceof v){var n=r.__data__;if(!L||n.length<ot-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new b(n)}return r.set(e,t),this.size=r.size,this}S.prototype.clear=lr;S.prototype.delete=gr;S.prototype.get=hr;S.prototype.has=pr;S.prototype.set=dr;function _r(e,t){var r=Y(e),n=!r&&Dr(e),i=!r&&!n&&le(e),a=!r&&!n&&!i&&Xe(e),s=r||n||i||a,o=s?Pt(e.length,String):[],f=o.length;for(var c in e)(t||_.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||br(c,f)))&&o.push(c);return o}function V(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1}function mr(e,t,r){var n=t(e);return Y(e)?n:Ot(n,r(e))}function R(e){return e==null?e===void 0?ht:ut:T&&T in Object(e)?Tr(e):Pr(e)}function Te(e){return M(e)&&R(e)==$}function We(e,t,r,n,i){return e===t?!0:e==null||t==null||!M(e)&&!M(t)?e!==e&&t!==t:yr(e,t,r,n,We,i)}function yr(e,t,r,n,i,a){var s=Y(e),o=Y(t),f=s?ae:w(e),c=o?ae:w(t);f=f==$?O:f,c=c==$?O:c;var l=f==O,h=c==O,g=f==c;if(g&&le(e)){if(!le(t))return!1;s=!0,l=!1}if(g&&!l)return a||(a=new S),s||Xe(e)?$e(e,t,r,n,i,a):Sr(e,t,f,r,n,i,a);if(!(r&Z)){var p=l&&_.call(e,"__wrapped__"),d=h&&_.call(t,"__wrapped__");if(p||d){var A=p?e.value():e,m=d?t.value():t;return a||(a=new S),i(A,m,r,n,a)}}return g?(a||(a=new S),Cr(e,t,r,n,i,a)):!1}function vr(e){if(!qe(e)||Or(e))return!1;var t=Ke(e)?Bt:Tt;return t.test(x(e))}function Ar(e){return M(e)&&Je(e.length)&&!!u[R(e)]}function wr(e){if(!Er(e))return Wt(e);var t=[];for(var r in Object(e))_.call(e,r)&&r!="constructor"&&t.push(r);return t}function $e(e,t,r,n,i,a){var s=r&Z,o=e.length,f=t.length;if(o!=f&&!(s&&f>o))return!1;var c=a.get(e);if(c&&a.get(t))return c==t;var l=-1,h=!0,g=r&be?new X:void 0;for(a.set(e,t),a.set(t,e);++l<o;){var p=e[l],d=t[l];if(n)var A=s?n(d,p,l,t,e,a):n(p,d,l,e,t,a);if(A!==void 0){if(A)continue;h=!1;break}if(g){if(!Et(t,function(m,C){if(!Lt(g,C)&&(p===m||i(p,m,r,n,a)))return g.push(C)})){h=!1;break}}else if(!(p===d||i(p,d,r,n,a))){h=!1;break}}return a.delete(e),a.delete(t),h}function Sr(e,t,r,n,i,a,s){switch(r){case J:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Re:return!(e.byteLength!=t.byteLength||!a(new we(e),new we(t)));case Oe:case Ee:case Le:return He(+e,+t);case Pe:return e.name==t.name&&e.message==t.message;case je:case Me:return e==t+"";case H:var o=Mt;case K:var f=n&Z;if(o||(o=Ut),e.size!=t.size&&!f)return!1;var c=s.get(e);if(c)return c==t;n|=be,s.set(e,t);var l=$e(o(e),o(t),n,i,a,s);return s.delete(e),l;case gt:if(ie)return ie.call(e)==ie.call(t)}return!1}function Cr(e,t,r,n,i,a){var s=r&Z,o=Ie(e),f=o.length,c=Ie(t),l=c.length;if(f!=l&&!s)return!1;for(var h=f;h--;){var g=o[h];if(!(s?g in t:_.call(t,g)))return!1}var p=a.get(e);if(p&&a.get(t))return p==t;var d=!0;a.set(e,t),a.set(t,e);for(var A=s;++h<f;){g=o[h];var m=e[g],C=t[g];if(n)var he=s?n(C,m,g,t,e,a):n(m,C,g,e,t,a);if(!(he===void 0?m===C||i(m,C,r,n,a):he)){d=!1;break}A||(A=g=="constructor")}if(d&&!A){var F=e.constructor,B=t.constructor;F!=B&&"constructor"in e&&"constructor"in t&&!(typeof F=="function"&&F instanceof F&&typeof B=="function"&&B instanceof B)&&(d=!1)}return a.delete(e),a.delete(t),d}function Ie(e){return mr(e,Mr,Ir)}function k(e,t){var r=e.__data__;return xr(t)?r[typeof t=="string"?"string":"hash"]:r.map}function P(e,t){var r=jt(e,t);return vr(r)?r:void 0}function Tr(e){var t=_.call(e,T),r=e[T];try{e[T]=void 0;var n=!0}catch{}var i=Ne.call(e);return n&&(t?e[T]=r:delete e[T]),i}var Ir=Se?function(e){return e==null?[]:(e=Object(e),xt(Se(e),function(t){return Ge.call(e,t)}))}:Rr,w=R;(oe&&w(new oe(new ArrayBuffer(1)))!=J||L&&w(new L)!=H||fe&&w(fe.resolve())!=de||ce&&w(new ce)!=K||ue&&w(new ue)!=se)&&(w=function(e){var t=R(e),r=t==O?e.constructor:void 0,n=r?x(r):"";if(n)switch(n){case $t:return J;case Ht:return H;case Kt:return de;case Jt:return K;case qt:return se}return t});function br(e,t){return t=t??xe,!!t&&(typeof e=="number"||It.test(e))&&e>-1&&e%1==0&&e<t}function xr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Or(e){return!!ve&&ve in e}function Er(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Q;return e===r}function Pr(e){return Ne.call(e)}function x(e){if(e!=null){try{return Be.call(e)}catch{}try{return e+""}catch{}}return""}function He(e,t){return e===t||e!==e&&t!==t}var Dr=Te(function(){return arguments}())?Te:function(e){return M(e)&&_.call(e,"callee")&&!Ge.call(e,"callee")},Y=Array.isArray;function Lr(e){return e!=null&&Je(e.length)&&!Ke(e)}var le=Gt||Ur;function jr(e,t){return We(e,t)}function Ke(e){if(!qe(e))return!1;var t=R(e);return t==De||t==ct||t==ft||t==lt}function Je(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xe}function qe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function M(e){return e!=null&&typeof e=="object"}var Xe=ye?Dt(ye):Ar;function Mr(e){return Lr(e)?_r(e):wr(e)}function Rr(){return[]}function Ur(){return!1}E.exports=jr});function N(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var at={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ee(e,t){function r(i,a,s){if(!(typeof document>"u")){s=N({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var f in s)!s[f]||(o+="; "+f,s[f]!==!0&&(o+="="+s[f].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+o}}function n(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],s={},o=0;o<a.length;o++){var f=a[o].split("="),c=f.slice(1).join("=");try{var l=decodeURIComponent(f[0]);if(s[l]=e.read(c,l),i===l)break}catch{}}return i?s[i]:s}}return Object.create({set:r,get:n,remove:function(i,a){r(i,"",N({},a,{expires:-1}))},withAttributes:function(i){return ee(this.converter,N({},this.attributes,i))},withConverter:function(i){return ee(N({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var st=ee(at,{path:"/"}),G=st;var te=class{constructor(t={forceCookies:!1}){this.forceCookies=t.forceCookies||!this._checkIfLocalStorageWorks()}setItem(t,r){try{let n=JSON.stringify(r);return this.forceCookies?this._setItemCookie(t,n):this._setItemLocalStorage(t,n)}catch{return}}getItem(t){try{return JSON.parse(this.forceCookies?this._getItemCookie(t):this._getItemLocalStorage(t))}catch{return}}removeItem(t){return this.forceCookies?this._removeItemCookie(t):this._removeItemLocalStorage(t)}clear(){return this.forceCookies?this._clearCookies():this._clearLocalStorage()}_clearCookies(){document.cookie.split(";").forEach(t=>{document.cookie=t.replace(/^ +/,"").replace(/=.*/,"=;expires=Max-Age=-99999999")})}_clearLocalStorage(){return window.localStorage.clear()}_removeItemCookie(t){G.remove(t)}_removeItemLocalStorage(t){window.localStorage.removeItem(t)}_setItemLocalStorage(t,r){return window.localStorage.setItem(t,r)}_setItemCookie(t,r){G.set(t,r,{expires:365*5})}keys(){return this.forceCookies?this._getCookieKeys():this._getLocalStorageKeys()}_getItemLocalStorage(t){return window.localStorage.getItem(t)}_getItemCookie(t){return G.get(t)}_checkIfLocalStorageWorks(){return window.localStorage&&typeof window.localStorage<"u"}_getLocalStorageKeys(){return Object.keys(window.localStorage)}_getCookieKeys(){return document.cookie.split(";").map(t=>{let r=t.split("=")[0];return typeof r<"u"?r.trim():""}).filter(t=>t!=="")}},W=new te;var Ze=it(Ye()),U=class{#e="";#t={};#n={};#r=new Map;constructor(t,r=[]){this.#e=t,r.forEach(({key:n,value:i})=>{this.#n[this.getPropWithNamespace(n)]=i,this.set(n,i)}),this.syncData()}getPropWithNamespace(t){return`${this.#e}.${t}`}setToDefault(t=!0){for(let r in this.#n)this.setData(r.replace(`${this.#e}.`,""),this.#n[r],t)}runActions(t,r,n){let i=this.getPropWithNamespace(t);this.#r.get(i)?.forEach(s=>{s.forEach(o=>{o(t,r,n)})})}get(t){return this.getData(t)}getAll(){let t={};for(let r in this.#t)t[r.replace(`${this.#e}.`,"")]=this.#t[r];return t}set(t,r,n=!1,i=!0,a=!0){n?(W.setItem(this.getPropWithNamespace(t),r),this.set(t,r,!1,i,a)):this.setData(t,r,i,a)}setItems(t){t.forEach(({key:r,value:n,external:i,checkEqualValue:a})=>this.set(r,n,i,a))}setActionFunc(t,r,n){let i=this.getPropWithNamespace(t),a=String(r);if(this.#r.has(i)){let s=this.#r.get(i);if(s.has(a)){let o=s.get(a);s.set(a,[...o,n])}else s.set(a,[n])}else this.#r.set(i,new Map([[a,[n]]]))}removeAllActions(t){if(this.#r){let r=String(t);this.#r.forEach(n=>{n.has(r)&&n.delete(r)})}}syncData(){W.keys()?.map(t=>({key:t,value:W.getItem(t)})).forEach(({key:t,value:r})=>{if(t.indexOf(this.#e)!==-1){let n=t.replace(`${this.#e}.`,"");this.set(n,r)}})}getData(t){return this.#t[this.getPropWithNamespace(t)]}setData(t,r,n,i){let a=this.getPropWithNamespace(t),s=this.#t[a];i&&(0,Ze.default)(s,r)||(this.#t[a]=r,n&&this.runActions(t,s,r))}};var z=class{#e=new Map;#t=!1;static createStorage(){return this.instance||(this.instance=new z),this.instance}init(t=[]){if(this.#t)return console.info("#LDSP already inited.");if(lng?.Component){let r=this;lng.Component.prototype._onDetach=function(n){return function(){r.removeActions(this.id),n.apply(this,arguments)}}(lng.Component.prototype._onDetach)}else return console.error("Lightning is not loaded.");t.forEach(({name:r,namespace:n,defaultValues:i})=>this.#e.set(r,new U(n,i))),this.#t=!0}_getStorage(t){return this.#e.get(t)}setToDefault(t){this._getStorage(t)?.setToDefault()}get(t,r){return this._getStorage(t)?.get(r)}getAll(t){return this._getStorage(t)?.getAll()}set(t,r,n,i=!1,a=!0,s=!0){this._getStorage(t)?.set(r,n,i,a,s)}setItems(t,r){this._getStorage(t)?.setItems(r)}addAction(t,r,n,i){this._getStorage(t)?.setActionFunc(r,n,i)}addActions(t,r,n,i){Array.isArray(r)&&r.forEach(a=>this.addAction(t,a,n,i))}removeActions(t,r){this._getStorage(t)?.removeAllActions(r)}},zr=z.createStorage(),Kr=zr;export{z as LngDynamicStoragePlugin,Kr as default};
/*! js-cookie v3.0.1 | MIT */
