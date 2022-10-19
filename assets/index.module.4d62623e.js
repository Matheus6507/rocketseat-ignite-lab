var h=Object.defineProperty;var i=(n,e)=>h(n,"name",{value:e,configurable:!0});import{r as s}from"./index.d5bc2e8e.js";import{r as A}from"./index.37c665b4.js";import{$ as O}from"./clsx.m.5da93a37.js";import{a as E}from"./index.module.23fff838.js";import{$ as x}from"./index.module.a8d7188a.js";function $(){return $=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},$.apply(this,arguments)}i($,"_extends");const b=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],L=b.reduce((n,e)=>{const r=s.exports.forwardRef((t,a)=>{const{asChild:u,...p}=t,f=u?O:e;return s.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.exports.createElement(f,$({},p,{ref:a}))});return r.displayName=`Primitive.${e}`,{...n,[e]:r}},{});function _(n,e){n&&A.exports.flushSync(()=>n.dispatchEvent(e))}i(_,"$8927f6f2acc4f386$export$6d1a0317bde7de7f");function g(n,e){return s.exports.useReducer((r,t)=>{const a=e[r][t];return a!=null?a:r},n)}i(g,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(n=>{const{present:e,children:r}=n,t=T(e),a=typeof r=="function"?r({present:t.isPresent}):s.exports.Children.only(r),u=E(t.ref,a.ref);return typeof r=="function"||t.isPresent?s.exports.cloneElement(a,{ref:u}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function T(n){const[e,r]=s.exports.useState(),t=s.exports.useRef({}),a=s.exports.useRef(n),u=s.exports.useRef("none"),p=n?"mounted":"unmounted",[f,c]=g(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.exports.useEffect(()=>{const o=N(t.current);u.current=f==="mounted"?o:"none"},[f]),x(()=>{const o=t.current,m=a.current;if(m!==n){const v=u.current,l=N(o);n?c("MOUNT"):l==="none"||(o==null?void 0:o.display)==="none"?c("UNMOUNT"):c(m&&v!==l?"ANIMATION_OUT":"UNMOUNT"),a.current=n}},[n,c]),x(()=>{if(e){const o=i(d=>{const l=N(t.current).includes(d.animationName);d.target===e&&l&&A.exports.flushSync(()=>c("ANIMATION_END"))},"handleAnimationEnd"),m=i(d=>{d.target===e&&(u.current=N(t.current))},"handleAnimationStart");return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",o),e.addEventListener("animationend",o),()=>{e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",o),e.removeEventListener("animationend",o)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:s.exports.useCallback(o=>{o&&(t.current=getComputedStyle(o)),r(o)},[])}}i(T,"$921a889cee6df7e8$var$usePresence");function N(n){return(n==null?void 0:n.animationName)||"none"}i(N,"$921a889cee6df7e8$var$getAnimationName");export{L as $,M as a,_ as b};
//# sourceMappingURL=index.module.4d62623e.js.map