var we=Object.defineProperty;var b=(e,n)=>we(e,"name",{value:n,configurable:!0});import{R as F,r as t}from"./index.d5bc2e8e.js";import"./index.37c665b4.js";import{b as le,f as J,d as P,$ as ne,c as Ee,e as Ce}from"./index.module.a8d7188a.js";import{$ as S,b as G,a as Ne}from"./index.module.4d62623e.js";import{a as L}from"./index.module.23fff838.js";import{$ as ue,a as ye}from"./index.module.c113034d.js";import{$ as oe}from"./clsx.m.5da93a37.js";import{T as R}from"./Text.748861b8.js";import{j as o,a as O}from"./jsx-runtime.3767337b.js";import"./iframe.1c2e743d.js";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},D.apply(this,arguments)}b(D,"_extends$2");function de(e){const n=e+"CollectionProvider",[r,s]=le(n),[a,c]=r(n,{collectionRef:{current:null},itemMap:new Map}),l=b($=>{const{scope:m,children:N}=$,g=F.useRef(null),y=F.useRef(new Map).current;return F.createElement(a,{scope:m,itemMap:y,collectionRef:g},N)},"CollectionProvider"),d=e+"CollectionSlot",v=F.forwardRef(($,m)=>{const{scope:N,children:g}=$,y=c(d,N),u=L(m,y.collectionRef);return F.createElement(oe,{ref:u},g)}),i=e+"CollectionItemSlot",x="data-radix-collection-item",w=F.forwardRef(($,m)=>{const{scope:N,children:g,...y}=$,u=F.useRef(null),f=L(m,u),p=c(i,N);return F.useEffect(()=>(p.itemMap.set(u,{ref:u,...y}),()=>void p.itemMap.delete(u))),F.createElement(oe,{[x]:"",ref:f},g)});function E($){const m=c(e+"CollectionConsumer",$);return F.useCallback(()=>{const g=m.collectionRef.current;if(!g)return[];const y=Array.from(g.querySelectorAll(`[${x}]`));return Array.from(m.itemMap.values()).sort((p,C)=>y.indexOf(p.ref.current)-y.indexOf(C.ref.current))},[m.collectionRef,m.itemMap])}return b(E,"useCollection"),[{Provider:l,Slot:v,ItemSlot:w},E,s]}b(de,"$e02a7d9cb1dc128c$export$c74125a8e3af6bb2");function B(){return B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},B.apply(this,arguments)}b(B,"_extends$1");function Re(e){const n=J(e);t.exports.useEffect(()=>{const r=b(s=>{s.key==="Escape"&&n(s)},"handleKeyDown");return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n])}b(Re,"$addc16e1bbe58fd0$export$3a72a57244d6e765");const z="dismissableLayer.update",Me="dismissableLayer.pointerDownOutside",Pe="dismissableLayer.focusOutside";let re;const Ie=t.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Oe=t.exports.forwardRef((e,n)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:l,onDismiss:d,...v}=e,i=t.exports.useContext(Ie),[x,w]=t.exports.useState(null),[,E]=t.exports.useState({}),$=L(n,h=>w(h)),m=Array.from(i.layers),[N]=[...i.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(N),y=x?m.indexOf(x):-1,u=i.layersWithOutsidePointerEventsDisabled.size>0,f=y>=g,p=_e(h=>{const T=h.target,I=[...i.branches].some(j=>j.contains(T));!f||I||(a==null||a(h),l==null||l(h),h.defaultPrevented||d==null||d())}),C=De(h=>{const T=h.target;[...i.branches].some(j=>j.contains(T))||(c==null||c(h),l==null||l(h),h.defaultPrevented||d==null||d())});return Re(h=>{y===i.layers.size-1&&(s==null||s(h),!h.defaultPrevented&&d&&(h.preventDefault(),d()))}),t.exports.useEffect(()=>{if(!!x)return r&&(i.layersWithOutsidePointerEventsDisabled.size===0&&(re=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),i.layersWithOutsidePointerEventsDisabled.add(x)),i.layers.add(x),se(),()=>{r&&i.layersWithOutsidePointerEventsDisabled.size===1&&(document.body.style.pointerEvents=re)}},[x,r,i]),t.exports.useEffect(()=>()=>{!x||(i.layers.delete(x),i.layersWithOutsidePointerEventsDisabled.delete(x),se())},[x,i]),t.exports.useEffect(()=>{const h=b(()=>E({}),"handleUpdate");return document.addEventListener(z,h),()=>document.removeEventListener(z,h)},[]),t.exports.createElement(S.div,B({},v,{ref:$,style:{pointerEvents:u?f?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,C.onFocusCapture),onBlurCapture:P(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,p.onPointerDownCapture)}))});function _e(e){const n=J(e),r=t.exports.useRef(!1),s=t.exports.useRef(()=>{});return t.exports.useEffect(()=>{const a=b(l=>{if(l.target&&!r.current){let v=function(){fe(Me,n,d,{discrete:!0})};b(v,"handleAndDispatchPointerDownOutsideEvent");const d={originalEvent:l};l.pointerType==="touch"?(document.removeEventListener("click",s.current),s.current=v,document.addEventListener("click",s.current,{once:!0})):v()}r.current=!1},"handlePointerDown"),c=window.setTimeout(()=>{document.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),document.removeEventListener("pointerdown",a),document.removeEventListener("click",s.current)}},[n]),{onPointerDownCapture:()=>r.current=!0}}b(_e,"$5cb92bef7577960e$var$usePointerDownOutside");function De(e){const n=J(e),r=t.exports.useRef(!1);return t.exports.useEffect(()=>{const s=b(a=>{a.target&&!r.current&&fe(Pe,n,{originalEvent:a},{discrete:!1})},"handleFocus");return document.addEventListener("focusin",s),()=>document.removeEventListener("focusin",s)},[n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}b(De,"$5cb92bef7577960e$var$useFocusOutside");function se(){const e=new CustomEvent(z);document.dispatchEvent(e)}b(se,"$5cb92bef7577960e$var$dispatchUpdate");function fe(e,n,r,{discrete:s}){const a=r.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});n&&a.addEventListener(e,n,{once:!0}),s?G(a,c):a.dispatchEvent(c)}b(fe,"$5cb92bef7577960e$var$handleAndDispatchCustomEvent");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},H.apply(this,arguments)}b(H,"_extends");const Te=t.exports.forwardRef((e,n)=>t.exports.createElement(S.span,H({},e,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),Fe=Te,V="NavigationMenu",[Q,Se,Le]=de(V),[q,Ae,je]=de(V),[Z,ht]=le(V,[Le,je]),[ke,A]=Z(V),[Ke,bt]=Z(V),Ve=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,value:s,onValueChange:a,defaultValue:c,orientation:l="horizontal",dir:d,...v}=e,[i,x]=t.exports.useState(null),w=L(n,$=>x($)),E=ye(d);return t.exports.createElement(Ue,{scope:r,isRootMenu:!0,value:s,onValueChange:a,defaultValue:c,dir:E,orientation:l,rootNavigationMenu:i},t.exports.createElement(S.nav,D({"aria-label":"Main","data-orientation":l,dir:E},v,{ref:w})))}),Ue=b(e=>{const{scope:n,isRootMenu:r,rootNavigationMenu:s,value:a,onValueChange:c,defaultValue:l,dir:d,orientation:v,children:i}=e,[x,w]=t.exports.useState(null),[E,$]=t.exports.useState(new Map),[m,N]=t.exports.useState(null),g=t.exports.useRef(0),[y="",u]=Ee({prop:a,onChange:c,defaultProp:l});return t.exports.useEffect(()=>()=>window.clearTimeout(g.current),[g]),t.exports.createElement(ke,{scope:n,isRootMenu:r,rootNavigationMenu:s,value:y,previousValue:Ce(y),baseId:ue(),dir:d,orientation:v,viewport:x,onViewportChange:w,indicatorTrack:m,onIndicatorTrackChange:N,onItemOver:t.exports.useCallback(f=>{r&&window.clearTimeout(g.current),u(f)},[u,r]),onItemLeave:t.exports.useCallback(()=>{r&&(window.clearTimeout(g.current),g.current=window.setTimeout(()=>u(""),150))},[u,r]),onItemSelect:t.exports.useCallback(f=>{u(p=>r&&p===f?"":f)},[u,r]),onItemDismiss:t.exports.useCallback(()=>u(""),[u]),onViewportContentChange:t.exports.useCallback((f,p)=>{$(C=>(C.set(f,p),new Map(C)))},[]),onViewportContentRemove:t.exports.useCallback(f=>{$(p=>p.has(f)?(p.delete(f),new Map(p)):p)},[])},t.exports.createElement(Q.Provider,{scope:n},t.exports.createElement(Ke,{scope:n,items:E},i)))},"$322c88a641701f3b$var$NavigationMenuProvider"),We="NavigationMenuList",Ge=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,...s}=e,a=A(We,r),c=t.exports.createElement(S.ul,D({"data-orientation":a.orientation},s,{ref:n}));return t.exports.createElement(S.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange},t.exports.createElement(Q.Slot,{scope:r},a.isRootMenu?t.exports.createElement(ve,{asChild:!0},c):c))}),Be="NavigationMenuItem",[ze,pe]=Z(Be),He=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,value:s,...a}=e,c=ue(),l=s||c||"LEGACY_REACT_AUTO_VALUE",d=t.exports.useRef(null),v=t.exports.useRef(null),i=t.exports.useRef(null),x=t.exports.useRef(()=>{}),w=t.exports.useCallback(($="start")=>{if(d.current){x.current();const m=Y(d.current);m.length&&ee($==="start"?m:m.reverse())}},[]),E=t.exports.useCallback(()=>{if(d.current){const $=Y(d.current);$.length&&(x.current=tt($))}},[]);return t.exports.createElement(ze,{scope:r,value:l,triggerRef:v,contentRef:d,focusProxyRef:i,onEntryKeyDown:w,onFocusProxyEnter:w,onRootContentClose:E,onContentFocusOutside:E},t.exports.createElement(S.li,D({},a,{ref:n})))}),ae="NavigationMenuTrigger",qe=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,disabled:s,...a}=e,c=A(ae,e.__scopeNavigationMenu),l=pe(ae,e.__scopeNavigationMenu),d=t.exports.useRef(null),v=L(d,l.triggerRef,n),i=he(c.baseId,l.value),x=be(c.baseId,l.value),w=t.exports.useRef(!1),E=l.value===c.value;return t.exports.createElement(t.exports.Fragment,null,t.exports.createElement(Q.ItemSlot,{scope:r,value:l.value},t.exports.createElement(me,{asChild:!0},t.exports.createElement(S.button,D({id:i,disabled:s,"data-disabled":s?"":void 0,"data-state":xe(E),"aria-expanded":E,"aria-controls":x},a,{ref:v,onPointerEnter:P(e.onPointerEnter,()=>{w.current=!1}),onPointerMove:P(e.onPointerMove,X(()=>{s||w.current||c.onItemOver(l.value)})),onPointerLeave:P(e.onPointerLeave,X(()=>{s||c.onItemLeave()})),onClick:P(e.onClick,()=>{c.onItemSelect(l.value),w.current=E}),onKeyDown:P(e.onKeyDown,$=>{const m=c.dir==="rtl"?"ArrowLeft":"ArrowRight",N={horizontal:"ArrowDown",vertical:m}[c.orientation];E&&$.key===N&&(l.onEntryKeyDown(),$.preventDefault())})})))),E&&t.exports.createElement(t.exports.Fragment,null,t.exports.createElement(Fe,{"aria-hidden":!0,tabIndex:0,ref:l.focusProxyRef,onFocus:$=>{const m=l.contentRef.current,N=$.relatedTarget,g=N===d.current,y=m==null?void 0:m.contains(N);(g||!y)&&l.onFocusProxyEnter(g?"start":"end")}}),c.viewport&&t.exports.createElement("span",{"aria-owns":x})))}),ce="navigationMenu.linkSelect",Ye=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,active:s,onSelect:a,...c}=e;return t.exports.createElement(me,{asChild:!0},t.exports.createElement(S.a,D({"data-active":s?"":void 0,"aria-current":s?"page":void 0},c,{ref:n,onClick:P(e.onClick,l=>{const d=l.target,v=new CustomEvent(ce,{bubbles:!0,cancelable:!0});if(d.addEventListener(ce,i=>a==null?void 0:a(i),{once:!0}),G(d,v),!v.defaultPrevented){const i=new CustomEvent(U,{bubbles:!0,cancelable:!0});G(d,i)}},{checkForDefaultPrevented:!1})})))}),W="NavigationMenuContent",Xe=t.exports.forwardRef((e,n)=>{const{forceMount:r,...s}=e,a=A(W,e.__scopeNavigationMenu),c=pe(W,e.__scopeNavigationMenu),l=L(c.contentRef,n),d=c.value===a.value,v={value:c.value,triggerRef:c.triggerRef,focusProxyRef:c.focusProxyRef,onContentFocusOutside:c.onContentFocusOutside,onRootContentClose:c.onRootContentClose,...s};return a.viewport?t.exports.createElement(Je,D({forceMount:r},v,{ref:l})):t.exports.createElement(Ne,{present:r||d},t.exports.createElement(Qe,D({"data-state":xe(d)},v,{ref:l,onPointerEnter:P(e.onPointerEnter,()=>{a.onItemOver(c.value)}),onPointerLeave:P(e.onPointerLeave,X(a.onItemLeave)),style:{pointerEvents:!d&&a.isRootMenu?"none":void 0,...v.style}})))}),Je=t.exports.forwardRef((e,n)=>{const r=A(W,e.__scopeNavigationMenu),{onViewportContentChange:s,onViewportContentRemove:a}=r;return ne(()=>{s(e.value,{ref:n,...e})},[e,n,s]),ne(()=>()=>a(e.value),[e.value,a]),null}),U="navigationMenu.rootContentDismiss",Qe=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,value:s,triggerRef:a,focusProxyRef:c,onRootContentClose:l,onContentFocusOutside:d,...v}=e,i=A(W,r),x=t.exports.useRef(null),w=L(x,n),E=he(i.baseId,s),$=be(i.baseId,s),m=Se(r),N=t.exports.useRef(null),{onItemDismiss:g}=i;t.exports.useEffect(()=>{const u=x.current;if(i.isRootMenu&&u){const f=b(()=>{var p;g(),l(),u.contains(document.activeElement)&&((p=a.current)===null||p===void 0||p.focus())},"handleClose");return u.addEventListener(U,f),()=>u.removeEventListener(U,f)}},[i.isRootMenu,e.value,a,g,l]);const y=t.exports.useMemo(()=>{const f=m().map(j=>j.value);i.dir==="rtl"&&f.reverse();const p=f.indexOf(i.value),C=f.indexOf(i.previousValue),h=s===i.value,T=C===f.indexOf(s);if(!h&&!T)return N.current;const I=(()=>{if(p!==C){if(h&&C!==-1)return p>C?"from-end":"from-start";if(T&&p!==-1)return p>C?"to-start":"to-end"}return null})();return N.current=I,I},[i.previousValue,i.value,i.dir,m,s]);return t.exports.createElement(ve,{asChild:!0},t.exports.createElement(Oe,D({id:$,"aria-labelledby":E,"data-motion":y,"data-orientation":i.orientation},v,{ref:w,onDismiss:()=>{var u;const f=new Event(U,{bubbles:!0,cancelable:!0});(u=x.current)===null||u===void 0||u.dispatchEvent(f)},onFocusOutside:P(e.onFocusOutside,u=>{var f;d();const p=u.target;(f=i.rootNavigationMenu)!==null&&f!==void 0&&f.contains(p)&&u.preventDefault()}),onPointerDownOutside:P(e.onPointerDownOutside,u=>{var f;const p=u.target,C=m().some(T=>{var I;return(I=T.ref.current)===null||I===void 0?void 0:I.contains(p)}),h=i.isRootMenu&&((f=i.viewport)===null||f===void 0?void 0:f.contains(p));(C||h||!i.isRootMenu)&&u.preventDefault()}),onKeyDown:P(e.onKeyDown,u=>{const f=u.altKey||u.ctrlKey||u.metaKey;if(u.key==="Tab"&&!f){const h=Y(u.currentTarget),T=document.activeElement,I=h.findIndex(ge=>ge===T),$e=u.shiftKey?h.slice(0,I).reverse():h.slice(I+1,h.length);if(ee($e))u.preventDefault();else{var C;(C=c.current)===null||C===void 0||C.focus()}}})})))}),Ze="FocusGroup",ve=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,...s}=e,a=A(Ze,r);return t.exports.createElement(q.Provider,{scope:r},t.exports.createElement(q.Slot,{scope:r},t.exports.createElement(S.div,D({dir:a.dir},s,{ref:n}))))}),ie=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],et="FocusGroupItem",me=t.exports.forwardRef((e,n)=>{const{__scopeNavigationMenu:r,...s}=e,a=Ae(r),c=A(et,r);return t.exports.createElement(q.ItemSlot,{scope:r},t.exports.createElement(S.button,D({},s,{ref:n,onKeyDown:P(e.onKeyDown,l=>{if(["Home","End",...ie].includes(l.key)){let v=a().map(w=>w.ref.current);if([c.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(l.key)&&v.reverse(),ie.includes(l.key)){const w=v.indexOf(l.currentTarget);v=v.slice(w+1)}setTimeout(()=>ee(v)),l.preventDefault()}})})))});function Y(e){const n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const a=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||a?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)n.push(r.currentNode);return n}b(Y,"$322c88a641701f3b$var$getTabbableCandidates");function ee(e){const n=document.activeElement;return e.some(r=>r===n?!0:(r.focus(),document.activeElement!==n))}b(ee,"$322c88a641701f3b$var$focusFirst");function tt(e){return e.forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")}),()=>{e.forEach(n=>{const r=n.dataset.tabindex;n.setAttribute("tabindex",r)})}}b(tt,"$322c88a641701f3b$var$removeFromTabOrder");function xe(e){return e?"open":"closed"}b(xe,"$322c88a641701f3b$var$getOpenState");function he(e,n){return`${e}-trigger-${n}`}b(he,"$322c88a641701f3b$var$makeTriggerId");function be(e,n){return`${e}-content-${n}`}b(be,"$322c88a641701f3b$var$makeContentId");function X(e){return n=>n.pointerType==="mouse"?e(n):void 0}b(X,"$322c88a641701f3b$var$whenMouse");const nt=Ve,ot=Ge,k=He,K=qe,M=Ye,_=Xe;function te(e){return o(nt,{className:"relative flex justify-center w-full z-10",children:o(ot,{className:"flex w-full w-max-[400px] justify-center bg-gray-200 p-2 rounded list-none shadow-lg",children:e.children})})}b(te,"NavbarRoot");te.displayName="Navbar.Root";function rt(e){}b(rt,"NavbarItem");te.displayName="Navbar.Item";const st={Root:te,Item:rt},$t={title:"Components/Navbar",component:st.Root,args:{children:[O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Painel"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]}),O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Clientes"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]}),O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Servi\xE7os"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]}),O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Fornecedores"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]}),O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Estoque"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]}),O(k,{className:"outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500",children:[o(K,{className:"p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2",children:"Fiscal"}),o(_,{children:o(_,{children:O("ul",{className:"flex flex-col p-5 m-0 gap-y-2",children:[o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})}),o("li",{className:"grid-rows-3",children:o(M,{className:"flex flex-col justify-end w-full h-full rounded p-6",children:o(R,{children:"Children"})})})]})})})]})]}},gt={},wt=["Default"];export{gt as Default,wt as __namedExportsOrder,$t as default};
//# sourceMappingURL=Navbar.stories.d25cb5cb.js.map