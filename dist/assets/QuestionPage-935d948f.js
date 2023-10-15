import{_ as j,o as i,c as u,t as h,n as m,u as G,a as H,r as v,b as K,d as w,w as Q,B as W,e as $,F as O,f as X,g as J,h as Y,i as Z,j as z,k as ee,l as te}from"./index-e7118533.js";var re=typeof global=="object"&&global&&global.Object===Object&&global;const M=re;var ne=typeof self=="object"&&self&&self.Object===Object&&self,oe=M||ne||Function("return this")();const F=oe;var ae=F.Symbol;const _=ae;var N=Object.prototype,se=N.hasOwnProperty,ce=N.toString,d=_?_.toStringTag:void 0;function ie(e){var t=se.call(e,d),r=e[d];try{e[d]=void 0;var o=!0}catch{}var a=ce.call(e);return o&&(t?e[d]=r:delete e[d]),a}var ue=Object.prototype,le=ue.toString;function fe(e){return le.call(e)}var pe="[object Null]",de="[object Undefined]",S=_?_.toStringTag:void 0;function A(e){return e==null?e===void 0?de:pe:S&&S in Object(e)?ie(e):fe(e)}function x(e){return e!=null&&typeof e=="object"}function ge(e,t){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=t(e[r],r,e);return a}var ye=Array.isArray;const L=ye;function be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ve="[object AsyncFunction]",_e="[object Function]",Te="[object GeneratorFunction]",je="[object Proxy]";function he(e){if(!be(e))return!1;var t=A(e);return t==_e||t==Te||t==ve||t==je}function me(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Ae=9007199254740991,xe=/^(?:0|[1-9]\d*)$/;function we(e,t){var r=typeof e;return t=t??Ae,!!t&&(r=="number"||r!="symbol"&&xe.test(e))&&e>-1&&e%1==0&&e<t}var $e=9007199254740991;function U(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$e}function Oe(e){return e!=null&&U(e.length)&&!he(e)}var Se=Object.prototype;function Pe(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Se;return e===r}function Ie(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var Be="[object Arguments]";function P(e){return x(e)&&A(e)==Be}var k=Object.prototype,Ce=k.hasOwnProperty,Ee=k.propertyIsEnumerable,Me=P(function(){return arguments}())?P:function(e){return x(e)&&Ce.call(e,"callee")&&!Ee.call(e,"callee")};const Fe=Me;function Ne(){return!1}var q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,I=q&&typeof module=="object"&&module&&!module.nodeType&&module,Le=I&&I.exports===q,B=Le?F.Buffer:void 0,Ue=B?B.isBuffer:void 0,ke=Ue||Ne;const qe=ke;var Re="[object Arguments]",Ve="[object Array]",De="[object Boolean]",Ge="[object Date]",He="[object Error]",Ke="[object Function]",Qe="[object Map]",We="[object Number]",Xe="[object Object]",Je="[object RegExp]",Ye="[object Set]",Ze="[object String]",ze="[object WeakMap]",et="[object ArrayBuffer]",tt="[object DataView]",rt="[object Float32Array]",nt="[object Float64Array]",ot="[object Int8Array]",at="[object Int16Array]",st="[object Int32Array]",ct="[object Uint8Array]",it="[object Uint8ClampedArray]",ut="[object Uint16Array]",lt="[object Uint32Array]",n={};n[rt]=n[nt]=n[ot]=n[at]=n[st]=n[ct]=n[it]=n[ut]=n[lt]=!0;n[Re]=n[Ve]=n[et]=n[De]=n[tt]=n[Ge]=n[He]=n[Ke]=n[Qe]=n[We]=n[Xe]=n[Je]=n[Ye]=n[Ze]=n[ze]=!1;function ft(e){return x(e)&&U(e.length)&&!!n[A(e)]}function pt(e){return function(t){return e(t)}}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=R&&typeof module=="object"&&module&&!module.nodeType&&module,dt=g&&g.exports===R,T=dt&&M.process,gt=function(){try{var e=g&&g.require&&g.require("util").types;return e||T&&T.binding&&T.binding("util")}catch{}}();const C=gt;var E=C&&C.isTypedArray,yt=E?pt(E):ft;const bt=yt;var vt=Object.prototype,_t=vt.hasOwnProperty;function Tt(e,t){var r=L(e),o=!r&&Fe(e),a=!r&&!o&&qe(e),s=!r&&!o&&!a&&bt(e),l=r||o||a||s,f=l?Ie(e.length,String):[],y=f.length;for(var c in e)(t||_t.call(e,c))&&!(l&&(c=="length"||a&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||we(c,y)))&&f.push(c);return f}function jt(e,t){return function(r){return e(t(r))}}var ht=jt(Object.keys,Object);const mt=ht;var At=Object.prototype,xt=At.hasOwnProperty;function wt(e){if(!Pe(e))return mt(e);var t=[];for(var r in Object(e))xt.call(e,r)&&r!="constructor"&&t.push(r);return t}function $t(e){return Oe(e)?Tt(e):wt(e)}function Ot(e,t){return ge(t,function(r){return e[r]})}function St(e){return e==null?[]:Ot(e,$t(e))}var Pt=Math.floor,It=Math.random;function Bt(e,t){return e+Pt(It()*(t-e+1))}function V(e,t){var r=-1,o=e.length,a=o-1;for(t=t===void 0?o:t;++r<t;){var s=Bt(r,a),l=e[s];e[s]=e[r],e[r]=l}return e.length=t,e}function Ct(e){return V(me(e))}function Et(e){return V(St(e))}function Mt(e){var t=L(e)?Ct:Et;return t(e)}const Ft=()=>{const e=["bg-green-500","bg-red-500","bg-blue-500","bg-yellow-500"];return{getColor:r=>e[r%e.length]}};const Nt={__name:"DifficultyChip",props:{difficulty:{type:String,required:!0}},setup(e){const t=e;return(r,o)=>(i(),u("p",{class:m(["difficulty",t.difficulty==="easy"?"bg-green-600":t.difficulty==="medium"?"bg-yellow-600":"bg-red-500"])},h(t.difficulty),3))}},Lt=j(Nt,[["__scopeId","data-v-24934723"]]);const Ut={__name:"NotificationAnswers",props:{correct:{type:Boolean,required:!0}},setup(e){const t=e;return(r,o)=>(i(),u("div",{class:m(["notification",t.correct?"bg-green-500":"bg-red-500"])},h(t.correct?"Correct":"Wrong"),3))}},kt=j(Ut,[["__scopeId","data-v-ae178eb4"]]);const qt={key:0,class:"question-container"},Rt=["innerHTML"],Vt={class:"answers"},Dt=["onClick","innerHTML"],Gt={key:1,class:"loading"},Ht={__name:"QuestionPage",setup(e){const t=Z(),r=G(),o=H(),a=v(null),s=v([]),l=Ft(),f=v(!1),y=v(!1),{changeScore:c}=te(),D=p=>{y.value=p>0,f.value=!0,setTimeout(()=>{c(p),o.push("/triviantastic/")},1e3)};return K(async()=>{a.value=await t.getQuestion(r.params.id),s.value.push({id:s.value.length,correct:!0,answer:a.value.correct_answer,points:a.value.difficulty==="easy"?10:a.value.difficulty==="medium"?20:30}),a.value.incorrect_answers.map(p=>{s.value.push({id:s.value.length,correct:!1,answer:p,points:-5})}),s.value=Mt(s.value)}),(p,Kt)=>(i(),u(O,null,[a.value?(i(),u("div",qt,[w(W,null,{default:Q(()=>[z(h(a.value.category),1)]),_:1}),$("p",{class:"question",innerHTML:a.value.question},null,8,Rt),$("div",Vt,[(i(!0),u(O,null,X(s.value,b=>(i(),u("div",{key:b.id,class:m([ee(l).getColor(b.id),"answer"]),onClick:Qt=>D(b.points),innerHTML:b.answer},null,10,Dt))),128))]),w(Lt,{difficulty:a.value.difficulty},null,8,["difficulty"])])):(i(),u("div",Gt,"Loading...")),f.value?(i(),J(kt,{key:2,correct:y.value},null,8,["correct"])):Y("",!0)],64))}},Xt=j(Ht,[["__scopeId","data-v-29cde932"]]);export{Xt as default};
