import{r as E,Q as ye,bu as At,c1 as $t,c2 as Bt,O as xn,a7 as Ze,c3 as Et,a6 as Xe,d as re,c4 as jn,a as je,c5 as Lt,bQ as Kt,H as T,aQ as Re,a_ as gn,aZ as Ye,y as d,as as tn,V as Fn,am as Sn,bn as Dt,c6 as zn,A as B,E as j,C as ae,F as Ie,I as fe,c7 as jt,G as pe,c8 as Vt,K as se,L as _e,aN as Vn,aO as ge,ai as Cn,T as ee,aU as De,ad as Rn,ao as Hn,X as ne,c9 as Ht,ca as Ke,W as Ce,S as In,b1 as Wt,at as Gt,R as Ut,cb as qt,N as Zt,cc as Xt,aP as Wn,cd as Yt,ae as Qt,ag as Jt,aj as eo,aq as no,ak as _n,ah as to,bW as oo,al as ce,ce as io,ac as Gn,z as kn,av as Un,aw as ro,au as lo,cf as ao,cg as so,aS as uo}from"./index-8719b80b.js";import{u as qn,N as co,a as bn}from"./Input-3f43b3ae.js";import{u as fo}from"./use-compitable-af4af851.js";import{_ as dn}from"./Tag-a7267645.js";import{e as Zn,g as Je,d as ho,i as Pn,h as vo,c as Xn,u as mn,V as Yn,a as Qn,b as Jn,f as po,r as go,p as et}from"./Tooltip-35d0a7f2.js";function Te(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Nn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function bo(e){return n=>{n?e.value=n.$el:e.value=null}}function un(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function mo(e,n,t){if(!n)return e;const o=E(e.value);let i=null;return ye(e,r=>{i!==null&&window.clearTimeout(i),r===!0?t&&!t.value?o.value=!0:i=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function yo(e={},n){const t=At({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:i}=e,r=u=>{switch(u.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(f=>{if(f!==u.key)return;const c=o[f];if(typeof c=="function")c(u);else{const{stop:p=!1,prevent:R=!1}=c;p&&u.stopPropagation(),R&&u.preventDefault(),c.handler(u)}})},l=u=>{switch(u.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(f=>{if(f!==u.key)return;const c=i[f];if(typeof c=="function")c(u);else{const{stop:p=!1,prevent:R=!1}=c;p&&u.stopPropagation(),R&&u.preventDefault(),c.handler(u)}})},a=()=>{(n===void 0||n.value)&&(Xe("keydown",document,r),Xe("keyup",document,l)),n!==void 0&&ye(n,u=>{u?(Xe("keydown",document,r),Xe("keyup",document,l)):(Ze("keydown",document,r),Ze("keyup",document,l))})};return $t()?(Bt(a),xn(()=>{(n===void 0||n.value)&&(Ze("keydown",document,r),Ze("keyup",document,l))})):a(),Et(t)}function Mn(e){return e&-e}class wo{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let i=0;i<n+1;++i)o[i]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:i}=this;for(n+=1;n<=o;)i[n]+=t,n+=Mn(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=n*o;for(;n>0;)r+=t[n],n-=Mn(n);return r}getBound(n){let t=0,o=this.l;for(;o>t;){const i=Math.floor((t+o)/2),r=this.sum(i);if(r>n){o=i;continue}else if(r<n){if(t===i)return this.sum(t+1)<=n?t+1:i;t=i}else return i}return t}}let Qe;function xo(){return typeof document>"u"?!1:(Qe===void 0&&("matchMedia"in window?Qe=window.matchMedia("(pointer:coarse)").matches:Qe=!1),Qe)}let cn;function An(){return typeof document>"u"?1:(cn===void 0&&(cn="chrome"in window?window.devicePixelRatio:1),cn)}const So=Je(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Je("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Co=re({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=jn();So.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Zn,ssr:n}),je(()=>{const{defaultScrollIndex:m,defaultScrollKey:v}=e;m!=null?y({index:m}):v!=null&&y({key:v})});let t=!1,o=!1;Lt(()=>{if(t=!1,!o){o=!0;return}y({top:p.value,left:c})}),Kt(()=>{t=!0,o||(o=!0)});const i=T(()=>{const m=new Map,{keyField:v}=e;return e.items.forEach((S,O)=>{m.set(S[v],O)}),m}),r=E(null),l=E(void 0),a=new Map,u=T(()=>{const{items:m,itemSize:v,keyField:S}=e,O=new wo(m.length,v);return m.forEach((F,D)=>{const k=F[S],A=a.get(k);A!==void 0&&O.add(D,A)}),O}),f=E(0);let c=0;const p=E(0),R=Re(()=>Math.max(u.value.getBound(p.value-gn(e.paddingTop))-1,0)),z=T(()=>{const{value:m}=l;if(m===void 0)return[];const{items:v,itemSize:S}=e,O=R.value,F=Math.min(O+Math.ceil(m/S+1),v.length-1),D=[];for(let k=O;k<=F;++k)D.push(v[k]);return D}),y=(m,v)=>{if(typeof m=="number"){_(m,v,"auto");return}const{left:S,top:O,index:F,key:D,position:k,behavior:A,debounce:J=!0}=m;if(S!==void 0||O!==void 0)_(S,O,A);else if(F!==void 0)I(F,A,J);else if(D!==void 0){const Q=i.value.get(D);Q!==void 0&&I(Q,A,J)}else k==="bottom"?_(0,Number.MAX_SAFE_INTEGER,A):k==="top"&&_(0,0,A)};let M,$=null;function I(m,v,S){const{value:O}=u,F=O.sum(m)+gn(e.paddingTop);if(!S)r.value.scrollTo({left:0,top:F,behavior:v});else{M=m,$!==null&&window.clearTimeout($),$=window.setTimeout(()=>{M=void 0,$=null},16);const{scrollTop:D,offsetHeight:k}=r.value;if(F>D){const A=O.get(m);F+A<=D+k||r.value.scrollTo({left:0,top:F+A-k,behavior:v})}else r.value.scrollTo({left:0,top:F,behavior:v})}}function _(m,v,S){r.value.scrollTo({left:m,top:v,behavior:S})}function N(m,v){var S,O,F;if(t||e.ignoreItemResize||K(v.target))return;const{value:D}=u,k=i.value.get(m),A=D.get(k),J=(F=(O=(S=v.borderBoxSize)===null||S===void 0?void 0:S[0])===null||O===void 0?void 0:O.blockSize)!==null&&F!==void 0?F:v.contentRect.height;if(J===A)return;J-e.itemSize===0?a.delete(m):a.set(m,J-e.itemSize);const oe=J-A;if(oe===0)return;D.add(k,oe);const h=r.value;if(h!=null){if(M===void 0){const C=D.sum(k);h.scrollTop>C&&h.scrollBy(0,oe)}else if(k<M)h.scrollBy(0,oe);else if(k===M){const C=D.sum(k);J+C>h.scrollTop+h.offsetHeight&&h.scrollBy(0,oe)}Z()}f.value++}const b=!xo();let w=!1;function V(m){var v;(v=e.onScroll)===null||v===void 0||v.call(e,m),(!b||!w)&&Z()}function H(m){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,m),b){const S=r.value;if(S!=null){if(m.deltaX===0&&(S.scrollTop===0&&m.deltaY<=0||S.scrollTop+S.offsetHeight>=S.scrollHeight&&m.deltaY>=0))return;m.preventDefault(),S.scrollTop+=m.deltaY/An(),S.scrollLeft+=m.deltaX/An(),Z(),w=!0,ho(()=>{w=!1})}}}function X(m){if(t||K(m.target)||m.contentRect.height===l.value)return;l.value=m.contentRect.height;const{onResize:v}=e;v!==void 0&&v(m)}function Z(){const{value:m}=r;m!=null&&(p.value=m.scrollTop,c=m.scrollLeft)}function K(m){let v=m;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:T(()=>{const{itemResizable:m}=e,v=Ye(u.value.sum());return f.value,[e.itemsStyle,{boxSizing:"content-box",height:m?"":v,minHeight:m?v:"",paddingTop:Ye(e.paddingTop),paddingBottom:Ye(e.paddingBottom)}]}),visibleItemsStyle:T(()=>(f.value,{transform:`translateY(${Ye(u.value.sum(R.value))})`})),viewportItems:z,listElRef:r,itemsElRef:E(null),scrollTo:y,handleListResize:X,handleListScroll:V,handleListWheel:H,handleItemResize:N}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return d(Fn,{onResize:this.handleListResize},{default:()=>{var i,r;return d("div",tn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[n],u=t.get(a),f=this.$slots.default({item:l,index:u})[0];return e?d(Fn,{key:a,onResize:c=>this.handleItemResize(a,c)},{default:()=>f}):(f.key=a,f)})})]):(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)])}})}}),me="v-hidden",Ro=Je("[v-hidden]",{display:"none!important"}),$n=re({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=E(null),o=E(null);function i(l){const{value:a}=t,{getCounter:u,getTail:f}=e;let c;if(u!==void 0?c=u():c=o.value,!a||!c)return;c.hasAttribute(me)&&c.removeAttribute(me);const{children:p}=a;if(l.showAllItemsBeforeCalculate)for(const N of p)N.hasAttribute(me)&&N.removeAttribute(me);const R=a.offsetWidth,z=[],y=n.tail?f==null?void 0:f():null;let M=y?y.offsetWidth:0,$=!1;const I=a.children.length-(n.tail?1:0);for(let N=0;N<I-1;++N){if(N<0)continue;const b=p[N];if($){b.hasAttribute(me)||b.setAttribute(me,"");continue}else b.hasAttribute(me)&&b.removeAttribute(me);const w=b.offsetWidth;if(M+=w,z[N]=w,M>R){const{updateCounter:V}=e;for(let H=N;H>=0;--H){const X=I-1-H;V!==void 0?V(X):c.textContent=`${X}`;const Z=c.offsetWidth;if(M-=z[H],M+Z<=R||H===0){$=!0,N=H-1,y&&(N===-1?(y.style.maxWidth=`${R-Z}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");const{onUpdateCount:K}=e;K&&K(X);break}}}}const{onUpdateOverflow:_}=e;$?_!==void 0&&_(!0):(_!==void 0&&_(!1),c.setAttribute(me,""))}const r=jn();return Ro.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Zn,ssr:r}),je(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:o,sync:i}},render(){const{$slots:e}=this;return Sn(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[Dt(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function nt(e,n){n&&(je(()=>{const{value:t}=e;t&&zn.registerHandler(t,n)}),xn(()=>{const{value:t}=e;t&&zn.unregisterHandler(t)}))}const ko=re({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Po=re({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Oo=re({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),To=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Bn(e){return Array.isArray(e)?e:[e]}const yn={STOP:"STOP"};function tt(e,n){const t=n(e);e.children!==void 0&&t!==yn.STOP&&e.children.forEach(o=>tt(o,n))}function Fo(e,n={}){const{preserveGroup:t=!1}=n,o=[],i=t?l=>{l.isLeaf||(o.push(l.key),r(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),r(l.children))};function r(l){l.forEach(i)}return r(e),o}function zo(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Io(e){return e.children}function _o(e){return e.key}function No(){return!1}function Mo(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Ao(e){return e.disabled===!0}function $o(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function fn(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function hn(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Bo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Eo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function Lo(e){return(e==null?void 0:e.type)==="group"}function Ko(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class Do extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function jo(e,n,t,o){return en(n.concat(e),t,o,!1)}function Vo(e,n){const t=new Set;return e.forEach(o=>{const i=n.treeNodeMap.get(o);if(i!==void 0){let r=i.parent;for(;r!==null&&!(r.disabled||t.has(r.key));)t.add(r.key),r=r.parent}}),t}function Ho(e,n,t,o){const i=en(n,t,o,!1),r=en(e,t,o,!0),l=Vo(e,t),a=[];return i.forEach(u=>{(r.has(u)||l.has(u))&&a.push(u)}),a.forEach(u=>i.delete(u)),i}function vn(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:i,indeterminateKeys:r,cascade:l,leafOnly:a,checkStrategy:u,allowNotLoaded:f}=e;if(!l)return o!==void 0?{checkedKeys:Bo(t,o),indeterminateKeys:Array.from(r)}:i!==void 0?{checkedKeys:Eo(t,i),indeterminateKeys:Array.from(r)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(r)};const{levelTreeNodeMap:c}=n;let p;i!==void 0?p=Ho(i,t,n,f):o!==void 0?p=jo(o,t,n,f):p=en(t,n,f,!1);const R=u==="parent",z=u==="child"||a,y=p,M=new Set,$=Math.max.apply(null,Array.from(c.keys()));for(let I=$;I>=0;I-=1){const _=I===0,N=c.get(I);for(const b of N){if(b.isLeaf)continue;const{key:w,shallowLoaded:V}=b;if(z&&V&&b.children.forEach(K=>{!K.disabled&&!K.isLeaf&&K.shallowLoaded&&y.has(K.key)&&y.delete(K.key)}),b.disabled||!V)continue;let H=!0,X=!1,Z=!0;for(const K of b.children){const m=K.key;if(!K.disabled){if(Z&&(Z=!1),y.has(m))X=!0;else if(M.has(m)){X=!0,H=!1;break}else if(H=!1,X)break}}H&&!Z?(R&&b.children.forEach(K=>{!K.disabled&&y.has(K.key)&&y.delete(K.key)}),y.add(w)):X&&M.add(w),_&&z&&y.has(w)&&y.delete(w)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(M)}}function en(e,n,t,o){const{treeNodeMap:i,getChildren:r}=n,l=new Set,a=new Set(e);return e.forEach(u=>{const f=i.get(u);f!==void 0&&tt(f,c=>{if(c.disabled)return yn.STOP;const{key:p}=c;if(!l.has(p)&&(l.add(p),a.add(p),$o(c.rawNode,r))){if(o)return yn.STOP;if(!t)throw new Do}})}),a}function Wo(e,{includeGroup:n=!1,includeSelf:t=!0},o){var i;const r=o.treeNodeMap;let l=e==null?null:(i=r.get(e))!==null&&i!==void 0?i:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(n||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(u=>u.key),a}function Go(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Uo(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i+1)%o]:i===t.length-1?null:t[i+1]}function En(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const i=n==="prev"?qo:Uo,r={reverse:n==="prev"};let l=!1,a=null;function u(f){if(f!==null){if(f===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!f.disabled||o)&&!f.ignored&&!f.isGroup){a=f;return}if(f.isGroup){const c=On(f,r);c!==null?a=c:u(i(f,t))}else{const c=i(f,!1);if(c!==null)u(c);else{const p=Zo(f);p!=null&&p.isGroup?u(i(p,t)):t&&u(i(f,!0))}}}}return u(e),a}function qo(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i-1+o)%o]:i===0?null:t[i-1]}function Zo(e){return e.parent}function On(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:i}=o,r=t?i-1:0,l=t?-1:i,a=t?-1:1;for(let u=r;u!==l;u+=a){const f=o[u];if(!f.disabled&&!f.ignored)if(f.isGroup){const c=On(f,n);if(c!==null)return c}else return f}}return null}const Xo={getChild(){return this.ignored?null:On(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return En(this,"next",e)},getPrev(e={}){return En(this,"prev",e)}};function Yo(e,n){const t=n?new Set(n):void 0,o=[];function i(r){r.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&i(l.children)})}return i(e),o}function Qo(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function ot(e,n,t,o,i,r=null,l=0){const a=[];return e.forEach((u,f)=>{var c;const p=Object.create(o);if(p.rawNode=u,p.siblings=a,p.level=l,p.index=f,p.isFirstChild=f===0,p.isLastChild=f+1===e.length,p.parent=r,!p.ignored){const R=i(u);Array.isArray(R)&&(p.children=ot(R,n,t,o,i,p,l+1))}a.push(p),n.set(p.key,p),t.has(l)||t.set(l,[]),(c=t.get(l))===null||c===void 0||c.push(p)}),a}function it(e,n={}){var t;const o=new Map,i=new Map,{getDisabled:r=Ao,getIgnored:l=No,getIsGroup:a=Lo,getKey:u=_o}=n,f=(t=n.getChildren)!==null&&t!==void 0?t:Io,c=n.ignoreEmptyChildren?b=>{const w=f(b);return Array.isArray(w)?w.length?w:null:w}:f,p=Object.assign({get key(){return u(this.rawNode)},get disabled(){return r(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return zo(this.rawNode,c)},get shallowLoaded(){return Mo(this.rawNode,c)},get ignored(){return l(this.rawNode)},contains(b){return Qo(this,b)}},Xo),R=ot(e,o,i,p,c);function z(b){if(b==null)return null;const w=o.get(b);return w&&!w.isGroup&&!w.ignored?w:null}function y(b){if(b==null)return null;const w=o.get(b);return w&&!w.ignored?w:null}function M(b,w){const V=y(b);return V?V.getPrev(w):null}function $(b,w){const V=y(b);return V?V.getNext(w):null}function I(b){const w=y(b);return w?w.getParent():null}function _(b){const w=y(b);return w?w.getChild():null}const N={treeNodes:R,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:c,getFlattenedNodes(b){return Yo(R,b)},getNode:z,getPrev:M,getNext:$,getParent:I,getChild:_,getFirstAvailableNode(){return Go(R)},getPath(b,w={}){return Wo(b,w,N)},getCheckedKeys(b,w={}){const{cascade:V=!0,leafOnly:H=!1,checkStrategy:X="all",allowNotLoaded:Z=!1}=w;return vn({checkedKeys:fn(b),indeterminateKeys:hn(b),cascade:V,leafOnly:H,checkStrategy:X,allowNotLoaded:Z},N)},check(b,w,V={}){const{cascade:H=!0,leafOnly:X=!1,checkStrategy:Z="all",allowNotLoaded:K=!1}=V;return vn({checkedKeys:fn(w),indeterminateKeys:hn(w),keysToCheck:b==null?[]:Bn(b),cascade:H,leafOnly:X,checkStrategy:Z,allowNotLoaded:K},N)},uncheck(b,w,V={}){const{cascade:H=!0,leafOnly:X=!1,checkStrategy:Z="all",allowNotLoaded:K=!1}=V;return vn({checkedKeys:fn(w),indeterminateKeys:hn(w),keysToUncheck:b==null?[]:Bn(b),cascade:H,leafOnly:X,checkStrategy:Z,allowNotLoaded:K},N)},getNonLeafKeys(b={}){return Fo(R,b)}};return N}const Jo=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[j("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[j("description",`
 margin-top: 8px;
 `)])]),j("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),j("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ei=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),ni=re({name:"Empty",props:ei,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ie(e),o=fe("Empty","-empty",Jo,jt,e,n),{localeRef:i}=qn("Empty"),r=pe(Vt,null),l=T(()=>{var c,p,R;return(c=e.description)!==null&&c!==void 0?c:(R=(p=r==null?void 0:r.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||R===void 0?void 0:R.description}),a=T(()=>{var c,p;return((p=(c=r==null?void 0:r.mergedComponentPropsRef.value)===null||c===void 0?void 0:c.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>d(Oo,null))}),u=T(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:p},self:{[se("iconSize",c)]:R,[se("fontSize",c)]:z,textColor:y,iconColor:M,extraTextColor:$}}=o.value;return{"--n-icon-size":R,"--n-font-size":z,"--n-bezier":p,"--n-text-color":y,"--n-icon-color":M,"--n-extra-text-color":$}}),f=t?_e("empty",T(()=>{let c="";const{size:p}=e;return c+=p[0],c}),u,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:T(()=>l.value||i.value.description),cssVars:t?void 0:u,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),d("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${n}-empty__icon`},e.icon?e.icon():d(Vn,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${n}-empty__extra`},e.extra()):null)}});function ti(e,n){return d(Cn,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Vn,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(ko)}):null})}const Ln=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:i,renderLabelRef:r,renderOptionRef:l,labelFieldRef:a,valueFieldRef:u,showCheckmarkRef:f,nodePropsRef:c,handleOptionClick:p,handleOptionMouseEnter:R}=pe(Pn),z=Re(()=>{const{value:I}=t;return I?e.tmNode.key===I.key:!1});function y(I){const{tmNode:_}=e;_.disabled||p(I,_)}function M(I){const{tmNode:_}=e;_.disabled||R(I,_)}function $(I){const{tmNode:_}=e,{value:N}=z;_.disabled||N||R(I,_)}return{multiple:o,isGrouped:Re(()=>{const{tmNode:I}=e,{parent:_}=I;return _&&_.rawNode.type==="group"}),showCheckmark:f,nodeProps:c,isPending:z,isSelected:Re(()=>{const{value:I}=n,{value:_}=o;if(I===null)return!1;const N=e.tmNode.rawNode[u.value];if(_){const{value:b}=i;return b.has(N)}else return I===N}),labelField:a,renderLabel:r,renderOption:l,handleMouseMove:$,handleMouseEnter:M,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:i,showCheckmark:r,nodeProps:l,renderOption:a,renderLabel:u,handleClick:f,handleMouseEnter:c,handleMouseMove:p}=this,R=ti(t,e),z=u?[u(n,t),r&&R]:[ge(n[this.labelField],n,t),r&&R],y=l==null?void 0:l(n),M=d("div",Object.assign({},y,{class:[`${e}-base-select-option`,n.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:r}],style:[(y==null?void 0:y.style)||"",n.style||""],onClick:un([f,y==null?void 0:y.onClick]),onMouseenter:un([c,y==null?void 0:y.onMouseenter]),onMousemove:un([p,y==null?void 0:y.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},z));return n.render?n.render({node:M,option:n,selected:t}):a?a({node:M,option:n,selected:t}):M}}),Kn=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=pe(Pn);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:i}}=this,r=o==null?void 0:o(i),l=n?n(i,!1):ge(i[this.labelField],i,!1),a=d("div",Object.assign({},r,{class:[`${e}-base-select-group-header`,r==null?void 0:r.class]}),l);return i.render?i.render({node:a,option:i}):t?t({node:a,option:i,selected:!1}):a}}),oi=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ee("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ee("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ee("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ee("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),ee("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 `,[De("selected",`
 color: var(--n-option-text-color-disabled);
 `),ee("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Rn({enterScale:"0.5"})])])]),ii=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ie(e),o=Hn("InternalSelectMenu",t,n),i=fe("InternalSelectMenu","-internal-select-menu",oi,Ht,e,ne(e,"clsPrefix")),r=E(null),l=E(null),a=E(null),u=T(()=>e.treeMate.getFlattenedNodes()),f=T(()=>Ko(u.value)),c=E(null);function p(){const{treeMate:h}=e;let C=null;const{value:te}=e;te===null?C=h.getFirstAvailableNode():(e.multiple?C=h.getNode((te||[])[(te||[]).length-1]):C=h.getNode(te),(!C||C.disabled)&&(C=h.getFirstAvailableNode())),O(C||null)}function R(){const{value:h}=c;h&&!e.treeMate.getNode(h.key)&&(c.value=null)}let z;ye(()=>e.show,h=>{h?z=ye(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():R(),Sn(F)):R()},{immediate:!0}):z==null||z()},{immediate:!0}),xn(()=>{z==null||z()});const y=T(()=>gn(i.value.self[se("optionHeight",e.size)])),M=T(()=>Ke(i.value.self[se("padding",e.size)])),$=T(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),I=T(()=>{const h=u.value;return h&&h.length===0});function _(h){const{onToggle:C}=e;C&&C(h)}function N(h){const{onScroll:C}=e;C&&C(h)}function b(h){var C;(C=a.value)===null||C===void 0||C.sync(),N(h)}function w(){var h;(h=a.value)===null||h===void 0||h.sync()}function V(){const{value:h}=c;return h||null}function H(h,C){C.disabled||O(C,!1)}function X(h,C){C.disabled||_(C)}function Z(h){var C;Te(h,"action")||(C=e.onKeyup)===null||C===void 0||C.call(e,h)}function K(h){var C;Te(h,"action")||(C=e.onKeydown)===null||C===void 0||C.call(e,h)}function m(h){var C;(C=e.onMousedown)===null||C===void 0||C.call(e,h),!e.focusable&&h.preventDefault()}function v(){const{value:h}=c;h&&O(h.getNext({loop:!0}),!0)}function S(){const{value:h}=c;h&&O(h.getPrev({loop:!0}),!0)}function O(h,C=!1){c.value=h,C&&F()}function F(){var h,C;const te=c.value;if(!te)return;const he=f.value(te.key);he!==null&&(e.virtualScroll?(h=l.value)===null||h===void 0||h.scrollTo({index:he}):(C=a.value)===null||C===void 0||C.scrollTo({index:he,elSize:y.value}))}function D(h){var C,te;!((C=r.value)===null||C===void 0)&&C.contains(h.target)&&((te=e.onFocus)===null||te===void 0||te.call(e,h))}function k(h){var C,te;!((C=r.value)===null||C===void 0)&&C.contains(h.relatedTarget)||(te=e.onBlur)===null||te===void 0||te.call(e,h)}Ce(Pn,{handleOptionMouseEnter:H,handleOptionClick:X,valueSetRef:$,pendingTmNodeRef:c,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),Ce(vo,r),je(()=>{const{value:h}=a;h&&h.sync()});const A=T(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:C},self:{height:te,borderRadius:he,color:we,groupHeaderTextColor:Y,actionDividerColor:be,optionTextColorPressed:ue,optionTextColor:Fe,optionTextColorDisabled:xe,optionTextColorActive:Ne,optionOpacityDisabled:Me,optionCheckColor:Ae,actionTextColor:$e,optionColorPending:ke,optionColorActive:Pe,loadingColor:Be,loadingSize:Ee,optionColorActivePending:Le,[se("optionFontSize",h)]:ze,[se("optionHeight",h)]:Oe,[se("optionPadding",h)]:de}}=i.value;return{"--n-height":te,"--n-action-divider-color":be,"--n-action-text-color":$e,"--n-bezier":C,"--n-border-radius":he,"--n-color":we,"--n-option-font-size":ze,"--n-group-header-text-color":Y,"--n-option-check-color":Ae,"--n-option-color-pending":ke,"--n-option-color-active":Pe,"--n-option-color-active-pending":Le,"--n-option-height":Oe,"--n-option-opacity-disabled":Me,"--n-option-text-color":Fe,"--n-option-text-color-active":Ne,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":ue,"--n-option-padding":de,"--n-option-padding-left":Ke(de,"left"),"--n-option-padding-right":Ke(de,"right"),"--n-loading-color":Be,"--n-loading-size":Ee}}),{inlineThemeDisabled:J}=e,Q=J?_e("internal-select-menu",T(()=>e.size[0]),A,e):void 0,oe={selfRef:r,next:v,prev:S,getPendingTmNode:V};return nt(r,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:o,virtualListRef:l,scrollbarRef:a,itemSize:y,padding:M,flattenedNodes:u,empty:I,virtualListContainer(){const{value:h}=l;return h==null?void 0:h.listElRef},virtualListContent(){const{value:h}=l;return h==null?void 0:h.itemsElRef},doScroll:N,handleFocusin:D,handleFocusout:k,handleKeyUp:Z,handleKeyDown:K,handleMouseDown:m,handleVirtualListResize:w,handleVirtualListScroll:b,cssVars:J?void 0:A,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},oe)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:i,onRender:r}=this;return r==null||r(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,i,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},In(e.header,l=>l&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(Wt,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Ut(e.empty,()=>[d(ni,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):d(Gt,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(Co,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(Kn,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:d(Ln,{clsPrefix:t,key:l.key,tmNode:l})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(Kn,{key:l.key,clsPrefix:t,tmNode:l}):d(Ln,{clsPrefix:t,key:l.key,tmNode:l})))}),In(e.action,l=>l&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(To,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ri=ae([B("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),De("disabled",[ae("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ee("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ee("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),ee("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ee(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),De("disabled",[ae("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ee("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ee("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),li=re({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ie(e),o=Hn("InternalSelection",t,n),i=E(null),r=E(null),l=E(null),a=E(null),u=E(null),f=E(null),c=E(null),p=E(null),R=E(null),z=E(null),y=E(!1),M=E(!1),$=E(!1),I=fe("InternalSelection","-internal-selection",ri,qt,e,ne(e,"clsPrefix")),_=T(()=>e.clearable&&!e.disabled&&($.value||e.active)),N=T(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ge(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=T(()=>{const g=e.selectedOption;if(g)return g[e.labelField]}),w=T(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var g;const{value:P}=i;if(P){const{value:ie}=r;ie&&(ie.style.width=`${P.offsetWidth}px`,e.maxTagCount!=="responsive"&&((g=R.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!1})))}}function H(){const{value:g}=z;g&&(g.style.display="none")}function X(){const{value:g}=z;g&&(g.style.display="inline-block")}ye(ne(e,"active"),g=>{g||H()}),ye(ne(e,"pattern"),()=>{e.multiple&&Sn(V)});function Z(g){const{onFocus:P}=e;P&&P(g)}function K(g){const{onBlur:P}=e;P&&P(g)}function m(g){const{onDeleteOption:P}=e;P&&P(g)}function v(g){const{onClear:P}=e;P&&P(g)}function S(g){const{onPatternInput:P}=e;P&&P(g)}function O(g){var P;(!g.relatedTarget||!(!((P=l.value)===null||P===void 0)&&P.contains(g.relatedTarget)))&&Z(g)}function F(g){var P;!((P=l.value)===null||P===void 0)&&P.contains(g.relatedTarget)||K(g)}function D(g){v(g)}function k(){$.value=!0}function A(){$.value=!1}function J(g){!e.active||!e.filterable||g.target!==r.value&&g.preventDefault()}function Q(g){m(g)}const oe=E(!1);function h(g){if(g.key==="Backspace"&&!oe.value&&!e.pattern.length){const{selectedOptions:P}=e;P!=null&&P.length&&Q(P[P.length-1])}}let C=null;function te(g){const{value:P}=i;if(P){const ie=g.target.value;P.textContent=ie,V()}e.ignoreComposition&&oe.value?C=g:S(g)}function he(){oe.value=!0}function we(){oe.value=!1,e.ignoreComposition&&S(C),C=null}function Y(g){var P;M.value=!0,(P=e.onPatternFocus)===null||P===void 0||P.call(e,g)}function be(g){var P;M.value=!1,(P=e.onPatternBlur)===null||P===void 0||P.call(e,g)}function ue(){var g,P;if(e.filterable)M.value=!1,(g=f.value)===null||g===void 0||g.blur(),(P=r.value)===null||P===void 0||P.blur();else if(e.multiple){const{value:ie}=a;ie==null||ie.blur()}else{const{value:ie}=u;ie==null||ie.blur()}}function Fe(){var g,P,ie;e.filterable?(M.value=!1,(g=f.value)===null||g===void 0||g.focus()):e.multiple?(P=a.value)===null||P===void 0||P.focus():(ie=u.value)===null||ie===void 0||ie.focus()}function xe(){const{value:g}=r;g&&(X(),g.focus())}function Ne(){const{value:g}=r;g&&g.blur()}function Me(g){const{value:P}=c;P&&P.setTextContent(`+${g}`)}function Ae(){const{value:g}=p;return g}function $e(){return r.value}let ke=null;function Pe(){ke!==null&&window.clearTimeout(ke)}function Be(){e.active||(Pe(),ke=window.setTimeout(()=>{w.value&&(y.value=!0)},100))}function Ee(){Pe()}function Le(g){g||(Pe(),y.value=!1)}ye(w,g=>{g||(y.value=!1)}),je(()=>{Zt(()=>{const g=f.value;g&&(e.disabled?g.removeAttribute("tabindex"):g.tabIndex=M.value?-1:0)})}),nt(l,e.onResize);const{inlineThemeDisabled:ze}=e,Oe=T(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:P},self:{borderRadius:ie,color:rn,placeholderColor:ln,textColor:Ve,paddingSingle:He,paddingMultiple:We,caretColor:an,colorDisabled:sn,textColorDisabled:Ge,placeholderColorDisabled:Se,colorActive:s,boxShadowFocus:x,boxShadowActive:L,boxShadowHover:q,border:G,borderFocus:W,borderHover:U,borderActive:le,arrowColor:ve,arrowColorDisabled:ut,loadingColor:ct,colorActiveWarning:ft,boxShadowFocusWarning:ht,boxShadowActiveWarning:vt,boxShadowHoverWarning:pt,borderWarning:gt,borderFocusWarning:bt,borderHoverWarning:mt,borderActiveWarning:yt,colorActiveError:wt,boxShadowFocusError:xt,boxShadowActiveError:St,boxShadowHoverError:Ct,borderError:Rt,borderFocusError:kt,borderHoverError:Pt,borderActiveError:Ot,clearColor:Tt,clearColorHover:Ft,clearColorPressed:zt,clearSize:It,arrowSize:_t,[se("height",g)]:Nt,[se("fontSize",g)]:Mt}}=I.value,Ue=Ke(He),qe=Ke(We);return{"--n-bezier":P,"--n-border":G,"--n-border-active":le,"--n-border-focus":W,"--n-border-hover":U,"--n-border-radius":ie,"--n-box-shadow-active":L,"--n-box-shadow-focus":x,"--n-box-shadow-hover":q,"--n-caret-color":an,"--n-color":rn,"--n-color-active":s,"--n-color-disabled":sn,"--n-font-size":Mt,"--n-height":Nt,"--n-padding-single-top":Ue.top,"--n-padding-multiple-top":qe.top,"--n-padding-single-right":Ue.right,"--n-padding-multiple-right":qe.right,"--n-padding-single-left":Ue.left,"--n-padding-multiple-left":qe.left,"--n-padding-single-bottom":Ue.bottom,"--n-padding-multiple-bottom":qe.bottom,"--n-placeholder-color":ln,"--n-placeholder-color-disabled":Se,"--n-text-color":Ve,"--n-text-color-disabled":Ge,"--n-arrow-color":ve,"--n-arrow-color-disabled":ut,"--n-loading-color":ct,"--n-color-active-warning":ft,"--n-box-shadow-focus-warning":ht,"--n-box-shadow-active-warning":vt,"--n-box-shadow-hover-warning":pt,"--n-border-warning":gt,"--n-border-focus-warning":bt,"--n-border-hover-warning":mt,"--n-border-active-warning":yt,"--n-color-active-error":wt,"--n-box-shadow-focus-error":xt,"--n-box-shadow-active-error":St,"--n-box-shadow-hover-error":Ct,"--n-border-error":Rt,"--n-border-focus-error":kt,"--n-border-hover-error":Pt,"--n-border-active-error":Ot,"--n-clear-size":It,"--n-clear-color":Tt,"--n-clear-color-hover":Ft,"--n-clear-color-pressed":zt,"--n-arrow-size":_t}}),de=ze?_e("internal-selection",T(()=>e.size[0]),Oe,e):void 0;return{mergedTheme:I,mergedClearable:_,mergedClsPrefix:n,rtlEnabled:o,patternInputFocused:M,filterablePlaceholder:N,label:b,selected:w,showTagsPanel:y,isComposing:oe,counterRef:c,counterWrapperRef:p,patternInputMirrorRef:i,patternInputRef:r,selfRef:l,multipleElRef:a,singleElRef:u,patternInputWrapperRef:f,overflowRef:R,inputTagElRef:z,handleMouseDown:J,handleFocusin:O,handleClear:D,handleMouseEnter:k,handleMouseLeave:A,handleDeleteOption:Q,handlePatternKeyDown:h,handlePatternInputInput:te,handlePatternInputBlur:be,handlePatternInputFocus:Y,handleMouseEnterCounter:Be,handleMouseLeaveCounter:Ee,handleFocusout:F,handleCompositionEnd:we,handleCompositionStart:he,onPopoverUpdateShow:Le,focus:Fe,focusInput:xe,blur:ue,blurInput:Ne,updateCounter:Me,getCounter:Ae,getTail:$e,renderLabel:e.renderLabel,cssVars:ze?void 0:Oe,themeClass:de==null?void 0:de.themeClass,onRender:de==null?void 0:de.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:i,maxTagCount:r,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:u,onRender:f,renderTag:c,renderLabel:p}=this;f==null||f();const R=r==="responsive",z=typeof r=="number",y=R||z,M=d(Xt,null,{default:()=>d(co,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var I,_;return(_=(I=this.$slots).arrow)===null||_===void 0?void 0:_.call(I)}})});let $;if(n){const{labelField:I}=this,_=S=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:S.value},c?c({option:S,handleClose:()=>{this.handleDeleteOption(S)}}):d(dn,{size:t,closable:!S.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(S)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(S,!0):ge(S[I],S,!0)})),N=()=>(z?this.selectedOptions.slice(0,r):this.selectedOptions).map(_),b=i?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,w=R?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(dn,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let V;if(z){const S=this.selectedOptions.length-r;S>0&&(V=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(dn,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${S}`})))}const H=R?i?d($n,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:N,counter:w,tail:()=>b}):d($n,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:N,counter:w}):z&&V?N().concat(V):N(),X=y?()=>d("div",{class:`${a}-base-selection-popover`},R?N():this.selectedOptions.map(_)):void 0,Z=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},u):null,m=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,v=i?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},H,R?null:b,M):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},H,M);$=d(Wn,null,y?d(Xn,Object.assign({},Z,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>v,default:X}):v,m)}else if(i){const I=this.pattern||this.isComposing,_=this.active?!I:!this.selected,N=this.active?!1:this.selected;$=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Nn(this.label)},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),N?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ge(this.label,this.selectedOption,!0))):null,_?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,M)}else $=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Nn(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ge(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),M);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},$,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function nn(e){return e.type==="group"}function rt(e){return e.type==="ignored"}function pn(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ai(e,n){return{getIsGroup:nn,getIgnored:rt,getKey(o){return nn(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function si(e,n,t,o){if(!n)return e;function i(r){if(!Array.isArray(r))return[];const l=[];for(const a of r)if(nn(a)){const u=i(a[o]);u.length&&l.push(Object.assign({},a,{[o]:u}))}else{if(rt(a))continue;n(t,a)&&l.push(a)}return l}return i(e)}function di(e,n,t){const o=new Map;return e.forEach(i=>{nn(i)?i[t].forEach(r=>{o.set(r[n],r)}):o.set(i[n],i)}),o}const ui=ae([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Rn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ci=Object.assign(Object.assign({},fe.props),{to:mn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Fi=re({name:"Select",props:ci,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:i}=Ie(e),r=fe("Select","-select",ui,Yt,e,n),l=E(e.defaultValue),a=ne(e,"value"),u=bn(a,l),f=E(!1),c=E(""),p=fo(e,["items","options"]),R=E([]),z=E([]),y=T(()=>z.value.concat(R.value).concat(p.value)),M=T(()=>{const{filter:s}=e;if(s)return s;const{labelField:x,valueField:L}=e;return(q,G)=>{if(!G)return!1;const W=G[x];if(typeof W=="string")return pn(q,W);const U=G[L];return typeof U=="string"?pn(q,U):typeof U=="number"?pn(q,String(U)):!1}}),$=T(()=>{if(e.remote)return p.value;{const{value:s}=y,{value:x}=c;return!x.length||!e.filterable?s:si(s,M.value,x,e.childrenField)}}),I=T(()=>{const{valueField:s,childrenField:x}=e,L=ai(s,x);return it($.value,L)}),_=T(()=>di(y.value,e.valueField,e.childrenField)),N=E(!1),b=bn(ne(e,"show"),N),w=E(null),V=E(null),H=E(null),{localeRef:X}=qn("Select"),Z=T(()=>{var s;return(s=e.placeholder)!==null&&s!==void 0?s:X.value.placeholder}),K=[],m=E(new Map),v=T(()=>{const{fallbackOption:s}=e;if(s===void 0){const{labelField:x,valueField:L}=e;return q=>({[x]:String(q),[L]:q})}return s===!1?!1:x=>Object.assign(s(x),{value:x})});function S(s){const x=e.remote,{value:L}=m,{value:q}=_,{value:G}=v,W=[];return s.forEach(U=>{if(q.has(U))W.push(q.get(U));else if(x&&L.has(U))W.push(L.get(U));else if(G){const le=G(U);le&&W.push(le)}}),W}const O=T(()=>{if(e.multiple){const{value:s}=u;return Array.isArray(s)?S(s):[]}return null}),F=T(()=>{const{value:s}=u;return!e.multiple&&!Array.isArray(s)?s===null?null:S([s])[0]||null:null}),D=Qt(e),{mergedSizeRef:k,mergedDisabledRef:A,mergedStatusRef:J}=D;function Q(s,x){const{onChange:L,"onUpdate:value":q,onUpdateValue:G}=e,{nTriggerFormChange:W,nTriggerFormInput:U}=D;L&&ce(L,s,x),G&&ce(G,s,x),q&&ce(q,s,x),l.value=s,W(),U()}function oe(s){const{onBlur:x}=e,{nTriggerFormBlur:L}=D;x&&ce(x,s),L()}function h(){const{onClear:s}=e;s&&ce(s)}function C(s){const{onFocus:x,showOnFocus:L}=e,{nTriggerFormFocus:q}=D;x&&ce(x,s),q(),L&&be()}function te(s){const{onSearch:x}=e;x&&ce(x,s)}function he(s){const{onScroll:x}=e;x&&ce(x,s)}function we(){var s;const{remote:x,multiple:L}=e;if(x){const{value:q}=m;if(L){const{valueField:G}=e;(s=O.value)===null||s===void 0||s.forEach(W=>{q.set(W[G],W)})}else{const G=F.value;G&&q.set(G[e.valueField],G)}}}function Y(s){const{onUpdateShow:x,"onUpdate:show":L}=e;x&&ce(x,s),L&&ce(L,s),N.value=s}function be(){A.value||(Y(!0),N.value=!0,e.filterable&&We())}function ue(){Y(!1)}function Fe(){c.value="",z.value=K}const xe=E(!1);function Ne(){e.filterable&&(xe.value=!0)}function Me(){e.filterable&&(xe.value=!1,b.value||Fe())}function Ae(){A.value||(b.value?e.filterable?We():ue():be())}function $e(s){var x,L;!((L=(x=H.value)===null||x===void 0?void 0:x.selfRef)===null||L===void 0)&&L.contains(s.relatedTarget)||(f.value=!1,oe(s),ue())}function ke(s){C(s),f.value=!0}function Pe(){f.value=!0}function Be(s){var x;!((x=w.value)===null||x===void 0)&&x.$el.contains(s.relatedTarget)||(f.value=!1,oe(s),ue())}function Ee(){var s;(s=w.value)===null||s===void 0||s.focus(),ue()}function Le(s){var x;b.value&&(!((x=w.value)===null||x===void 0)&&x.$el.contains(to(s))||ue())}function ze(s){if(!Array.isArray(s))return[];if(v.value)return Array.from(s);{const{remote:x}=e,{value:L}=_;if(x){const{value:q}=m;return s.filter(G=>L.has(G)||q.has(G))}else return s.filter(q=>L.has(q))}}function Oe(s){de(s.rawNode)}function de(s){if(A.value)return;const{tag:x,remote:L,clearFilterAfterSelect:q,valueField:G}=e;if(x&&!L){const{value:W}=z,U=W[0]||null;if(U){const le=R.value;le.length?le.push(U):R.value=[U],z.value=K}}if(L&&m.value.set(s[G],s),e.multiple){const W=ze(u.value),U=W.findIndex(le=>le===s[G]);if(~U){if(W.splice(U,1),x&&!L){const le=g(s[G]);~le&&(R.value.splice(le,1),q&&(c.value=""))}}else W.push(s[G]),q&&(c.value="");Q(W,S(W))}else{if(x&&!L){const W=g(s[G]);~W?R.value=[R.value[W]]:R.value=K}He(),ue(),Q(s[G],s)}}function g(s){return R.value.findIndex(L=>L[e.valueField]===s)}function P(s){b.value||be();const{value:x}=s.target;c.value=x;const{tag:L,remote:q}=e;if(te(x),L&&!q){if(!x){z.value=K;return}const{onCreate:G}=e,W=G?G(x):{[e.labelField]:x,[e.valueField]:x},{valueField:U,labelField:le}=e;p.value.some(ve=>ve[U]===W[U]||ve[le]===W[le])||R.value.some(ve=>ve[U]===W[U]||ve[le]===W[le])?z.value=K:z.value=[W]}}function ie(s){s.stopPropagation();const{multiple:x}=e;!x&&e.filterable&&ue(),h(),x?Q([],[]):Q(null,null)}function rn(s){!Te(s,"action")&&!Te(s,"empty")&&!Te(s,"header")&&s.preventDefault()}function ln(s){he(s)}function Ve(s){var x,L,q,G,W;if(!e.keyboard){s.preventDefault();return}switch(s.key){case" ":if(e.filterable)break;s.preventDefault();case"Enter":if(!(!((x=w.value)===null||x===void 0)&&x.isComposing)){if(b.value){const U=(L=H.value)===null||L===void 0?void 0:L.getPendingTmNode();U?Oe(U):e.filterable||(ue(),He())}else if(be(),e.tag&&xe.value){const U=z.value[0];if(U){const le=U[e.valueField],{value:ve}=u;e.multiple&&Array.isArray(ve)&&ve.includes(le)||de(U)}}}s.preventDefault();break;case"ArrowUp":if(s.preventDefault(),e.loading)return;b.value&&((q=H.value)===null||q===void 0||q.prev());break;case"ArrowDown":if(s.preventDefault(),e.loading)return;b.value?(G=H.value)===null||G===void 0||G.next():be();break;case"Escape":b.value&&(oo(s),ue()),(W=w.value)===null||W===void 0||W.focus();break}}function He(){var s;(s=w.value)===null||s===void 0||s.focus()}function We(){var s;(s=w.value)===null||s===void 0||s.focusInput()}function an(){var s;b.value&&((s=V.value)===null||s===void 0||s.syncPosition())}we(),ye(ne(e,"options"),we);const sn={focus:()=>{var s;(s=w.value)===null||s===void 0||s.focus()},focusInput:()=>{var s;(s=w.value)===null||s===void 0||s.focusInput()},blur:()=>{var s;(s=w.value)===null||s===void 0||s.blur()},blurInput:()=>{var s;(s=w.value)===null||s===void 0||s.blurInput()}},Ge=T(()=>{const{self:{menuBoxShadow:s}}=r.value;return{"--n-menu-box-shadow":s}}),Se=i?_e("select",void 0,Ge,e):void 0;return Object.assign(Object.assign({},sn),{mergedStatus:J,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:I,isMounted:Jt(),triggerRef:w,menuRef:H,pattern:c,uncontrolledShow:N,mergedShow:b,adjustedTo:mn(e),uncontrolledValue:l,mergedValue:u,followerRef:V,localizedPlaceholder:Z,selectedOption:F,selectedOptions:O,mergedSize:k,mergedDisabled:A,focused:f,activeWithoutMenuOpen:xe,inlineThemeDisabled:i,onTriggerInputFocus:Ne,onTriggerInputBlur:Me,handleTriggerOrMenuResize:an,handleMenuFocus:Pe,handleMenuBlur:Be,handleMenuTabOut:Ee,handleTriggerClick:Ae,handleToggle:Oe,handleDeleteOption:de,handlePatternInput:P,handleClear:ie,handleTriggerBlur:$e,handleTriggerFocus:ke,handleKeydown:Ve,handleMenuAfterLeave:Fe,handleMenuClickOutside:Le,handleMenuScroll:ln,handleMenuKeydown:Ve,handleMenuMousedown:rn,mergedTheme:r,cssVars:i?void 0:Ge,themeClass:Se==null?void 0:Se.themeClass,onRender:Se==null?void 0:Se.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Yn,null,{default:()=>[d(Qn,null,{default:()=>d(li,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(Jn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===mn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Cn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),eo(d(ii,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},header:()=>{var o,i;return[(i=(o=this.$slots).header)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[no,this.mergedShow],[_n,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[_n,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),lt=re({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),fi=B("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ee("color-transition",{transition:"color .3s var(--n-bezier)"}),ee("depth",{color:"var(--n-color)"},[ae("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),ae("svg",{height:"1em",width:"1em"})]),hi=Object.assign(Object.assign({},fe.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),vi=re({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:hi,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ie(e),o=fe("Icon","-icon",fi,io,e,n),i=T(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:a},self:u}=o.value;if(l!==void 0){const{color:f,[`opacity${l}Depth`]:c}=u;return{"--n-bezier":a,"--n-color":f,"--n-opacity":c}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),r=t?_e("icon",T(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:n,mergedStyle:T(()=>{const{size:l,color:a}=e;return{fontSize:po(l),color:a}}),cssVars:t?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:i,onRender:r,themeClass:l}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Gn("icon","don't wrap `n-icon` inside `n-icon`"),r==null||r(),d("i",tn(this.$attrs,{role:"img",class:[`${o}-icon`,l,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?d(i):this.$slots)}}),Tn=kn("n-dropdown-menu"),on=kn("n-dropdown"),Dn=kn("n-dropdown-option");function wn(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function pi(e){return e.type==="group"}function at(e){return e.type==="divider"}function gi(e){return e.type==="render"}const st=re({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=pe(on),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:r,activeKeyPathRef:l,animatedRef:a,mergedShowRef:u,renderLabelRef:f,renderIconRef:c,labelFieldRef:p,childrenFieldRef:R,renderOptionRef:z,nodePropsRef:y,menuPropsRef:M}=n,$=pe(Dn,null),I=pe(Tn),_=pe(Un),N=T(()=>e.tmNode.rawNode),b=T(()=>{const{value:k}=R;return wn(e.tmNode.rawNode,k)}),w=T(()=>{const{disabled:k}=e.tmNode;return k}),V=T(()=>{if(!b.value)return!1;const{key:k,disabled:A}=e.tmNode;if(A)return!1;const{value:J}=t,{value:Q}=o,{value:oe}=i,{value:h}=r;return J!==null?h.includes(k):Q!==null?h.includes(k)&&h[h.length-1]!==k:oe!==null?h.includes(k):!1}),H=T(()=>o.value===null&&!a.value),X=mo(V,300,H),Z=T(()=>!!($!=null&&$.enteringSubmenuRef.value)),K=E(!1);Ce(Dn,{enteringSubmenuRef:K});function m(){K.value=!0}function v(){K.value=!1}function S(){const{parentKey:k,tmNode:A}=e;A.disabled||u.value&&(i.value=k,o.value=null,t.value=A.key)}function O(){const{tmNode:k}=e;k.disabled||u.value&&t.value!==k.key&&S()}function F(k){if(e.tmNode.disabled||!u.value)return;const{relatedTarget:A}=k;A&&!Te({target:A},"dropdownOption")&&!Te({target:A},"scrollbarRail")&&(t.value=null)}function D(){const{value:k}=b,{tmNode:A}=e;u.value&&!k&&!A.disabled&&(n.doSelect(A.key,A.rawNode),n.doUpdateShow(!1))}return{labelField:p,renderLabel:f,renderIcon:c,siblingHasIcon:I.showIconRef,siblingHasSubmenu:I.hasSubmenuRef,menuProps:M,popoverBody:_,animated:a,mergedShowSubmenu:T(()=>X.value&&!Z.value),rawNode:N,hasSubmenu:b,pending:Re(()=>{const{value:k}=r,{key:A}=e.tmNode;return k.includes(A)}),childActive:Re(()=>{const{value:k}=l,{key:A}=e.tmNode,J=k.findIndex(Q=>A===Q);return J===-1?!1:J<k.length-1}),active:Re(()=>{const{value:k}=l,{key:A}=e.tmNode,J=k.findIndex(Q=>A===Q);return J===-1?!1:J===k.length-1}),mergedDisabled:w,renderOption:z,nodeProps:y,handleClick:D,handleMouseMove:O,handleMouseEnter:S,handleMouseLeave:F,handleSubmenuBeforeEnter:m,handleSubmenuAfterEnter:v}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:i,clsPrefix:r,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:u,renderIcon:f,renderOption:c,nodeProps:p,props:R,scrollable:z}=this;let y=null;if(i){const _=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);y=d(dt,Object.assign({},_,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const M={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},$=p==null?void 0:p(o),I=d("div",Object.assign({class:[`${r}-dropdown-option`,$==null?void 0:$.class],"data-dropdown-option":!0},$),d("div",tn(M,R),[d("div",{class:[`${r}-dropdown-option-body__prefix`,l&&`${r}-dropdown-option-body__prefix--show-icon`]},[f?f(o):ge(o.icon)]),d("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},u?u(o):ge((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(vi,null,{default:()=>d(Po,null)}):null)]),this.hasSubmenu?d(Yn,null,{default:()=>[d(Qn,null,{default:()=>d("div",{class:`${r}-dropdown-offset-container`},d(Jn,{show:this.mergedShowSubmenu,placement:this.placement,to:z&&this.popoverBody||void 0,teleportDisabled:!z},{default:()=>d("div",{class:`${r}-dropdown-menu-wrapper`},t?d(Cn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>y}):y)}))})]}):null);return c?c({node:I,option:o}):I}}),bi=re({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=pe(Tn),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:i,renderOptionRef:r}=pe(on);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:i,renderOption:r}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:i,renderLabel:r,renderOption:l}=this,{rawNode:a}=this.tmNode,u=d("div",Object.assign({class:`${n}-dropdown-option`},i==null?void 0:i(a)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},ge(a.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(a):ge((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:u,option:a}):u}}),mi=re({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return d(Wn,null,d(bi,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(i=>{const{rawNode:r}=i;return r.show===!1?null:at(r)?d(lt,{clsPrefix:t,key:i.key}):i.isGroup?(Gn("dropdown","`group` node is not allowed to be put in `group` node."),null):d(st,{clsPrefix:t,tmNode:i,parentKey:n,key:i.key})}))}}),yi=re({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),dt=re({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=pe(on);Ce(Tn,{showIconRef:T(()=>{const i=n.value;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:u})=>i?i(u):u.icon);const{rawNode:a}=r;return i?i(a):a.icon})}),hasSubmenuRef:T(()=>{const{value:i}=t;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:u})=>wn(u,i));const{rawNode:a}=r;return wn(a,i)})})});const o=E(null);return Ce(ro,null),Ce(lo,null),Ce(Un,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(i=>{const{rawNode:r}=i;return r.show===!1?null:gi(r)?d(yi,{tmNode:i,key:i.key}):at(r)?d(lt,{clsPrefix:n,key:i.key}):pi(r)?d(mi,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):d(st,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:r.props,scrollable:t})});return d("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(ao,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?go({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),wi=B("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Rn(),B("dropdown-option",`
 position: relative;
 `,[ae("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[ae("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),B("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[ae("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),De("disabled",[ee("pending",`
 color: var(--n-option-text-color-hover);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),ae("&::before","background-color: var(--n-option-color-hover);")]),ee("active",`
 color: var(--n-option-text-color-active);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),ae("&::before","background-color: var(--n-option-color-active);")]),ee("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),ee("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[j("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[ee("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),j("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[ee("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),B("icon",`
 font-size: var(--n-option-icon-size);
 `)]),j("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),j("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[ee("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),B("icon",`
 font-size: var(--n-option-icon-size);
 `)]),B("dropdown-menu","pointer-events: all;")]),B("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),B("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),B("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),ae(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),De("scrollable",`
 padding: var(--n-padding);
 `),ee("scrollable",[j("content",`
 padding: var(--n-padding);
 `)])]),xi={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Si=Object.keys(et),Ci=Object.assign(Object.assign(Object.assign({},et),xi),fe.props),zi=re({name:"Dropdown",inheritAttrs:!1,props:Ci,setup(e){const n=E(!1),t=bn(ne(e,"show"),n),o=T(()=>{const{keyField:v,childrenField:S}=e;return it(e.options,{getKey(O){return O[v]},getDisabled(O){return O.disabled===!0},getIgnored(O){return O.type==="divider"||O.type==="render"},getChildren(O){return O[S]}})}),i=T(()=>o.value.treeNodes),r=E(null),l=E(null),a=E(null),u=T(()=>{var v,S,O;return(O=(S=(v=r.value)!==null&&v!==void 0?v:l.value)!==null&&S!==void 0?S:a.value)!==null&&O!==void 0?O:null}),f=T(()=>o.value.getPath(u.value).keyPath),c=T(()=>o.value.getPath(e.value).keyPath),p=Re(()=>e.keyboard&&t.value);yo({keydown:{ArrowUp:{prevent:!0,handler:w},ArrowRight:{prevent:!0,handler:b},ArrowDown:{prevent:!0,handler:V},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:H},Escape:_}},p);const{mergedClsPrefixRef:R,inlineThemeDisabled:z}=Ie(e),y=fe("Dropdown","-dropdown",wi,so,e,R);Ce(on,{labelFieldRef:ne(e,"labelField"),childrenFieldRef:ne(e,"childrenField"),renderLabelRef:ne(e,"renderLabel"),renderIconRef:ne(e,"renderIcon"),hoverKeyRef:r,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:f,activeKeyPathRef:c,animatedRef:ne(e,"animated"),mergedShowRef:t,nodePropsRef:ne(e,"nodeProps"),renderOptionRef:ne(e,"renderOption"),menuPropsRef:ne(e,"menuProps"),doSelect:M,doUpdateShow:$}),ye(t,v=>{!e.animated&&!v&&I()});function M(v,S){const{onSelect:O}=e;O&&ce(O,v,S)}function $(v){const{"onUpdate:show":S,onUpdateShow:O}=e;S&&ce(S,v),O&&ce(O,v),n.value=v}function I(){r.value=null,l.value=null,a.value=null}function _(){$(!1)}function N(){Z("left")}function b(){Z("right")}function w(){Z("up")}function V(){Z("down")}function H(){const v=X();v!=null&&v.isLeaf&&t.value&&(M(v.key,v.rawNode),$(!1))}function X(){var v;const{value:S}=o,{value:O}=u;return!S||O===null?null:(v=S.getNode(O))!==null&&v!==void 0?v:null}function Z(v){const{value:S}=u,{value:{getFirstAvailableNode:O}}=o;let F=null;if(S===null){const D=O();D!==null&&(F=D.key)}else{const D=X();if(D){let k;switch(v){case"down":k=D.getNext();break;case"up":k=D.getPrev();break;case"right":k=D.getChild();break;case"left":k=D.getParent();break}k&&(F=k.key)}}F!==null&&(r.value=null,l.value=F)}const K=T(()=>{const{size:v,inverted:S}=e,{common:{cubicBezierEaseInOut:O},self:F}=y.value,{padding:D,dividerColor:k,borderRadius:A,optionOpacityDisabled:J,[se("optionIconSuffixWidth",v)]:Q,[se("optionSuffixWidth",v)]:oe,[se("optionIconPrefixWidth",v)]:h,[se("optionPrefixWidth",v)]:C,[se("fontSize",v)]:te,[se("optionHeight",v)]:he,[se("optionIconSize",v)]:we}=F,Y={"--n-bezier":O,"--n-font-size":te,"--n-padding":D,"--n-border-radius":A,"--n-option-height":he,"--n-option-prefix-width":C,"--n-option-icon-prefix-width":h,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":Q,"--n-option-icon-size":we,"--n-divider-color":k,"--n-option-opacity-disabled":J};return S?(Y["--n-color"]=F.colorInverted,Y["--n-option-color-hover"]=F.optionColorHoverInverted,Y["--n-option-color-active"]=F.optionColorActiveInverted,Y["--n-option-text-color"]=F.optionTextColorInverted,Y["--n-option-text-color-hover"]=F.optionTextColorHoverInverted,Y["--n-option-text-color-active"]=F.optionTextColorActiveInverted,Y["--n-option-text-color-child-active"]=F.optionTextColorChildActiveInverted,Y["--n-prefix-color"]=F.prefixColorInverted,Y["--n-suffix-color"]=F.suffixColorInverted,Y["--n-group-header-text-color"]=F.groupHeaderTextColorInverted):(Y["--n-color"]=F.color,Y["--n-option-color-hover"]=F.optionColorHover,Y["--n-option-color-active"]=F.optionColorActive,Y["--n-option-text-color"]=F.optionTextColor,Y["--n-option-text-color-hover"]=F.optionTextColorHover,Y["--n-option-text-color-active"]=F.optionTextColorActive,Y["--n-option-text-color-child-active"]=F.optionTextColorChildActive,Y["--n-prefix-color"]=F.prefixColor,Y["--n-suffix-color"]=F.suffixColor,Y["--n-group-header-text-color"]=F.groupHeaderTextColor),Y}),m=z?_e("dropdown",T(()=>`${e.size[0]}${e.inverted?"i":""}`),K,e):void 0;return{mergedClsPrefix:R,mergedTheme:y,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&I()},doUpdateShow:$,cssVars:z?void 0:K,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const e=(o,i,r,l,a)=>{var u;const{mergedClsPrefix:f,menuProps:c}=this;(u=this.onRender)===null||u===void 0||u.call(this);const p=(c==null?void 0:c(void 0,this.tmNodes.map(z=>z.rawNode)))||{},R={ref:bo(i),class:[o,`${f}-dropdown`,this.themeClass],clsPrefix:f,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(dt,tn(this.$attrs,R,p))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Xn,Object.assign({},uo(this.$props,Si),t),{trigger:()=>{var o,i;return(i=(o=this.$slots).default)===null||i===void 0?void 0:i.call(o)}})}});function Ii(e,n){return{modalVisible:T({get(){return e.visible},set(o){n("update:visible",o)}})}}export{Po as C,To as F,ii as N,$n as V,zi as _,ni as a,Fi as b,it as c,ai as d,bo as e,Co as f,yo as g,Te as h,un as m,Ii as u};
