import{r as E,M as ye,br as At,b$ as $t,c0 as Bt,L as Sn,a4 as Ze,c1 as Et,a3 as Xe,d as ie,c2 as Vn,a as je,c3 as Lt,bP as Kt,E as F,aN as Re,aX as bn,aW as Ye,q as d,as as tn,V as zn,aj as Cn,bk as Dt,c4 as In,x as B,B as H,z as le,C as Ie,F as fe,c5 as jt,D as pe,c6 as Vt,H as se,I as _e,aK as Hn,aL as ge,af as Rn,Q as ee,aR as De,aa as kn,al as Wn,T as ne,c7 as Ht,c8 as Ke,S as Ce,O as _n,a_ as Wt,at as Gt,N as Ut,c9 as qt,K as Zt,ca as Xt,aM as Gn,cb as Yt,ab as Qt,ad as Jt,ag as eo,aq as no,ah as Mn,ae as to,bV as oo,ai as ce,cc as io,a9 as Un,v as Pn,ao as qn,ap as ro,an as lo,cd as ao,ce as so,aP as uo}from"./index-c937759a.js";import{u as Zn,N as co,a as mn}from"./Input-e25af448.js";import{u as fo}from"./use-compitable-41f0f2d8.js";import{_ as un}from"./Tag-33db936c.js";import{e as Xn,g as Je,d as ho,i as On,h as vo,c as Yn,u as yn,V as Qn,a as Jn,b as et,f as po,r as go,p as nt}from"./Tooltip-919d770f.js";function ze(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Nn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function bo(e){return n=>{n?e.value=n.$el:e.value=null}}function cn(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function mo(e,n,t){if(!n)return e;const o=E(e.value);let i=null;return ye(e,r=>{i!==null&&window.clearTimeout(i),r===!0?t&&!t.value?o.value=!0:i=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function yo(e={},n){const t=At({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:i}=e,r=u=>{switch(u.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(h=>{if(h!==u.key)return;const c=o[h];if(typeof c=="function")c(u);else{const{stop:p=!1,prevent:O=!1}=c;p&&u.stopPropagation(),O&&u.preventDefault(),c.handler(u)}})},l=u=>{switch(u.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(h=>{if(h!==u.key)return;const c=i[h];if(typeof c=="function")c(u);else{const{stop:p=!1,prevent:O=!1}=c;p&&u.stopPropagation(),O&&u.preventDefault(),c.handler(u)}})},a=()=>{(n===void 0||n.value)&&(Xe("keydown",document,r),Xe("keyup",document,l)),n!==void 0&&ye(n,u=>{u?(Xe("keydown",document,r),Xe("keyup",document,l)):(Ze("keydown",document,r),Ze("keyup",document,l))})};return $t()?(Bt(a),Sn(()=>{(n===void 0||n.value)&&(Ze("keydown",document,r),Ze("keyup",document,l))})):a(),Et(t)}function An(e){return e&-e}class wo{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let i=0;i<n+1;++i)o[i]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:i}=this;for(n+=1;n<=o;)i[n]+=t,n+=An(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=n*o;for(;n>0;)r+=t[n],n-=An(n);return r}getBound(n){let t=0,o=this.l;for(;o>t;){const i=Math.floor((t+o)/2),r=this.sum(i);if(r>n){o=i;continue}else if(r<n){if(t===i)return this.sum(t+1)<=n?t+1:i;t=i}else return i}return t}}let Qe;function xo(){return typeof document>"u"?!1:(Qe===void 0&&("matchMedia"in window?Qe=window.matchMedia("(pointer:coarse)").matches:Qe=!1),Qe)}let fn;function $n(){return typeof document>"u"?1:(fn===void 0&&(fn="chrome"in window?window.devicePixelRatio:1),fn)}const So=Je(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Je("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Co=ie({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Vn();So.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Xn,ssr:n}),je(()=>{const{defaultScrollIndex:y,defaultScrollKey:v}=e;y!=null?b({index:y}):v!=null&&b({key:v})});let t=!1,o=!1;Lt(()=>{if(t=!1,!o){o=!0;return}b({top:p.value,left:c})}),Kt(()=>{t=!0,o||(o=!0)});const i=F(()=>{const y=new Map,{keyField:v}=e;return e.items.forEach((x,T)=>{y.set(x[v],T)}),y}),r=E(null),l=E(void 0),a=new Map,u=F(()=>{const{items:y,itemSize:v,keyField:x}=e,T=new wo(y.length,v);return y.forEach((I,V)=>{const R=I[x],A=a.get(R);A!==void 0&&T.add(V,A)}),T}),h=E(0);let c=0;const p=E(0),O=Re(()=>Math.max(u.value.getBound(p.value-bn(e.paddingTop))-1,0)),_=F(()=>{const{value:y}=l;if(y===void 0)return[];const{items:v,itemSize:x}=e,T=O.value,I=Math.min(T+Math.ceil(y/x+1),v.length-1),V=[];for(let R=T;R<=I;++R)V.push(v[R]);return V}),b=(y,v)=>{if(typeof y=="number"){M(y,v,"auto");return}const{left:x,top:T,index:I,key:V,position:R,behavior:A,debounce:J=!0}=y;if(x!==void 0||T!==void 0)M(x,T,A);else if(I!==void 0)z(I,A,J);else if(V!==void 0){const Q=i.value.get(V);Q!==void 0&&z(Q,A,J)}else R==="bottom"?M(0,Number.MAX_SAFE_INTEGER,A):R==="top"&&M(0,0,A)};let k,$=null;function z(y,v,x){const{value:T}=u,I=T.sum(y)+bn(e.paddingTop);if(!x)r.value.scrollTo({left:0,top:I,behavior:v});else{k=y,$!==null&&window.clearTimeout($),$=window.setTimeout(()=>{k=void 0,$=null},16);const{scrollTop:V,offsetHeight:R}=r.value;if(I>V){const A=T.get(y);I+A<=V+R||r.value.scrollTo({left:0,top:I+A-R,behavior:v})}else r.value.scrollTo({left:0,top:I,behavior:v})}}function M(y,v,x){r.value.scrollTo({left:y,top:v,behavior:x})}function N(y,v){var x,T,I;if(t||e.ignoreItemResize||j(v.target))return;const{value:V}=u,R=i.value.get(y),A=V.get(R),J=(I=(T=(x=v.borderBoxSize)===null||x===void 0?void 0:x[0])===null||T===void 0?void 0:T.blockSize)!==null&&I!==void 0?I:v.contentRect.height;if(J===A)return;J-e.itemSize===0?a.delete(y):a.set(y,J-e.itemSize);const ae=J-A;if(ae===0)return;V.add(R,ae);const f=r.value;if(f!=null){if(k===void 0){const C=V.sum(R);f.scrollTop>C&&f.scrollBy(0,ae)}else if(R<k)f.scrollBy(0,ae);else if(R===k){const C=V.sum(R);J+C>f.scrollTop+f.offsetHeight&&f.scrollBy(0,ae)}Z()}h.value++}const m=!xo();let S=!1;function L(y){var v;(v=e.onScroll)===null||v===void 0||v.call(e,y),(!m||!S)&&Z()}function D(y){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,y),m){const x=r.value;if(x!=null){if(y.deltaX===0&&(x.scrollTop===0&&y.deltaY<=0||x.scrollTop+x.offsetHeight>=x.scrollHeight&&y.deltaY>=0))return;y.preventDefault(),x.scrollTop+=y.deltaY/$n(),x.scrollLeft+=y.deltaX/$n(),Z(),S=!0,ho(()=>{S=!1})}}}function q(y){if(t||j(y.target)||y.contentRect.height===l.value)return;l.value=y.contentRect.height;const{onResize:v}=e;v!==void 0&&v(y)}function Z(){const{value:y}=r;y!=null&&(p.value=y.scrollTop,c=y.scrollLeft)}function j(y){let v=y;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:F(()=>{const{itemResizable:y}=e,v=Ye(u.value.sum());return h.value,[e.itemsStyle,{boxSizing:"content-box",height:y?"":v,minHeight:y?v:"",paddingTop:Ye(e.paddingTop),paddingBottom:Ye(e.paddingBottom)}]}),visibleItemsStyle:F(()=>(h.value,{transform:`translateY(${Ye(u.value.sum(O.value))})`})),viewportItems:_,listElRef:r,itemsElRef:E(null),scrollTo:b,handleListResize:q,handleListScroll:L,handleListWheel:D,handleItemResize:N}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return d(zn,{onResize:this.handleListResize},{default:()=>{var i,r;return d("div",tn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[n],u=t.get(a),h=this.$slots.default({item:l,index:u})[0];return e?d(zn,{key:a,onResize:c=>this.handleItemResize(a,c)},{default:()=>h}):(h.key=a,h)})})]):(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)])}})}}),me="v-hidden",Ro=Je("[v-hidden]",{display:"none!important"}),Bn=ie({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=E(null),o=E(null);function i(l){const{value:a}=t,{getCounter:u,getTail:h}=e;let c;if(u!==void 0?c=u():c=o.value,!a||!c)return;c.hasAttribute(me)&&c.removeAttribute(me);const{children:p}=a;if(l.showAllItemsBeforeCalculate)for(const N of p)N.hasAttribute(me)&&N.removeAttribute(me);const O=a.offsetWidth,_=[],b=n.tail?h==null?void 0:h():null;let k=b?b.offsetWidth:0,$=!1;const z=a.children.length-(n.tail?1:0);for(let N=0;N<z-1;++N){if(N<0)continue;const m=p[N];if($){m.hasAttribute(me)||m.setAttribute(me,"");continue}else m.hasAttribute(me)&&m.removeAttribute(me);const S=m.offsetWidth;if(k+=S,_[N]=S,k>O){const{updateCounter:L}=e;for(let D=N;D>=0;--D){const q=z-1-D;L!==void 0?L(q):c.textContent=`${q}`;const Z=c.offsetWidth;if(k-=_[D],k+Z<=O||D===0){$=!0,N=D-1,b&&(N===-1?(b.style.maxWidth=`${O-Z}px`,b.style.boxSizing="border-box"):b.style.maxWidth="");const{onUpdateCount:j}=e;j&&j(q);break}}}}const{onUpdateOverflow:M}=e;$?M!==void 0&&M(!0):(M!==void 0&&M(!1),c.setAttribute(me,""))}const r=Vn();return Ro.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Xn,ssr:r}),je(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:o,sync:i}},render(){const{$slots:e}=this;return Cn(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[Dt(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function tt(e,n){n&&(je(()=>{const{value:t}=e;t&&In.registerHandler(t,n)}),Sn(()=>{const{value:t}=e;t&&In.unregisterHandler(t)}))}const ko=ie({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Po=ie({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Oo=ie({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),To=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function En(e){return Array.isArray(e)?e:[e]}const wn={STOP:"STOP"};function ot(e,n){const t=n(e);e.children!==void 0&&t!==wn.STOP&&e.children.forEach(o=>ot(o,n))}function Fo(e,n={}){const{preserveGroup:t=!1}=n,o=[],i=t?l=>{l.isLeaf||(o.push(l.key),r(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),r(l.children))};function r(l){l.forEach(i)}return r(e),o}function zo(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Io(e){return e.children}function _o(e){return e.key}function Mo(){return!1}function No(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Ao(e){return e.disabled===!0}function $o(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function hn(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function vn(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Bo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Eo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function Lo(e){return(e==null?void 0:e.type)==="group"}function Ko(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class Do extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function jo(e,n,t,o){return en(n.concat(e),t,o,!1)}function Vo(e,n){const t=new Set;return e.forEach(o=>{const i=n.treeNodeMap.get(o);if(i!==void 0){let r=i.parent;for(;r!==null&&!(r.disabled||t.has(r.key));)t.add(r.key),r=r.parent}}),t}function Ho(e,n,t,o){const i=en(n,t,o,!1),r=en(e,t,o,!0),l=Vo(e,t),a=[];return i.forEach(u=>{(r.has(u)||l.has(u))&&a.push(u)}),a.forEach(u=>i.delete(u)),i}function pn(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:i,indeterminateKeys:r,cascade:l,leafOnly:a,checkStrategy:u,allowNotLoaded:h}=e;if(!l)return o!==void 0?{checkedKeys:Bo(t,o),indeterminateKeys:Array.from(r)}:i!==void 0?{checkedKeys:Eo(t,i),indeterminateKeys:Array.from(r)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(r)};const{levelTreeNodeMap:c}=n;let p;i!==void 0?p=Ho(i,t,n,h):o!==void 0?p=jo(o,t,n,h):p=en(t,n,h,!1);const O=u==="parent",_=u==="child"||a,b=p,k=new Set,$=Math.max.apply(null,Array.from(c.keys()));for(let z=$;z>=0;z-=1){const M=z===0,N=c.get(z);for(const m of N){if(m.isLeaf)continue;const{key:S,shallowLoaded:L}=m;if(_&&L&&m.children.forEach(j=>{!j.disabled&&!j.isLeaf&&j.shallowLoaded&&b.has(j.key)&&b.delete(j.key)}),m.disabled||!L)continue;let D=!0,q=!1,Z=!0;for(const j of m.children){const y=j.key;if(!j.disabled){if(Z&&(Z=!1),b.has(y))q=!0;else if(k.has(y)){q=!0,D=!1;break}else if(D=!1,q)break}}D&&!Z?(O&&m.children.forEach(j=>{!j.disabled&&b.has(j.key)&&b.delete(j.key)}),b.add(S)):q&&k.add(S),M&&_&&b.has(S)&&b.delete(S)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(k)}}function en(e,n,t,o){const{treeNodeMap:i,getChildren:r}=n,l=new Set,a=new Set(e);return e.forEach(u=>{const h=i.get(u);h!==void 0&&ot(h,c=>{if(c.disabled)return wn.STOP;const{key:p}=c;if(!l.has(p)&&(l.add(p),a.add(p),$o(c.rawNode,r))){if(o)return wn.STOP;if(!t)throw new Do}})}),a}function Wo(e,{includeGroup:n=!1,includeSelf:t=!0},o){var i;const r=o.treeNodeMap;let l=e==null?null:(i=r.get(e))!==null&&i!==void 0?i:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(n||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(u=>u.key),a}function Go(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Uo(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i+1)%o]:i===t.length-1?null:t[i+1]}function Ln(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const i=n==="prev"?qo:Uo,r={reverse:n==="prev"};let l=!1,a=null;function u(h){if(h!==null){if(h===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!h.disabled||o)&&!h.ignored&&!h.isGroup){a=h;return}if(h.isGroup){const c=Tn(h,r);c!==null?a=c:u(i(h,t))}else{const c=i(h,!1);if(c!==null)u(c);else{const p=Zo(h);p!=null&&p.isGroup?u(i(p,t)):t&&u(i(h,!0))}}}}return u(e),a}function qo(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i-1+o)%o]:i===0?null:t[i-1]}function Zo(e){return e.parent}function Tn(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:i}=o,r=t?i-1:0,l=t?-1:i,a=t?-1:1;for(let u=r;u!==l;u+=a){const h=o[u];if(!h.disabled&&!h.ignored)if(h.isGroup){const c=Tn(h,n);if(c!==null)return c}else return h}}return null}const Xo={getChild(){return this.ignored?null:Tn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ln(this,"next",e)},getPrev(e={}){return Ln(this,"prev",e)}};function Yo(e,n){const t=n?new Set(n):void 0,o=[];function i(r){r.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&i(l.children)})}return i(e),o}function Qo(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function it(e,n,t,o,i,r=null,l=0){const a=[];return e.forEach((u,h)=>{var c;const p=Object.create(o);if(p.rawNode=u,p.siblings=a,p.level=l,p.index=h,p.isFirstChild=h===0,p.isLastChild=h+1===e.length,p.parent=r,!p.ignored){const O=i(u);Array.isArray(O)&&(p.children=it(O,n,t,o,i,p,l+1))}a.push(p),n.set(p.key,p),t.has(l)||t.set(l,[]),(c=t.get(l))===null||c===void 0||c.push(p)}),a}function rt(e,n={}){var t;const o=new Map,i=new Map,{getDisabled:r=Ao,getIgnored:l=Mo,getIsGroup:a=Lo,getKey:u=_o}=n,h=(t=n.getChildren)!==null&&t!==void 0?t:Io,c=n.ignoreEmptyChildren?m=>{const S=h(m);return Array.isArray(S)?S.length?S:null:S}:h,p=Object.assign({get key(){return u(this.rawNode)},get disabled(){return r(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return zo(this.rawNode,c)},get shallowLoaded(){return No(this.rawNode,c)},get ignored(){return l(this.rawNode)},contains(m){return Qo(this,m)}},Xo),O=it(e,o,i,p,c);function _(m){if(m==null)return null;const S=o.get(m);return S&&!S.isGroup&&!S.ignored?S:null}function b(m){if(m==null)return null;const S=o.get(m);return S&&!S.ignored?S:null}function k(m,S){const L=b(m);return L?L.getPrev(S):null}function $(m,S){const L=b(m);return L?L.getNext(S):null}function z(m){const S=b(m);return S?S.getParent():null}function M(m){const S=b(m);return S?S.getChild():null}const N={treeNodes:O,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:c,getFlattenedNodes(m){return Yo(O,m)},getNode:_,getPrev:k,getNext:$,getParent:z,getChild:M,getFirstAvailableNode(){return Go(O)},getPath(m,S={}){return Wo(m,S,N)},getCheckedKeys(m,S={}){const{cascade:L=!0,leafOnly:D=!1,checkStrategy:q="all",allowNotLoaded:Z=!1}=S;return pn({checkedKeys:hn(m),indeterminateKeys:vn(m),cascade:L,leafOnly:D,checkStrategy:q,allowNotLoaded:Z},N)},check(m,S,L={}){const{cascade:D=!0,leafOnly:q=!1,checkStrategy:Z="all",allowNotLoaded:j=!1}=L;return pn({checkedKeys:hn(S),indeterminateKeys:vn(S),keysToCheck:m==null?[]:En(m),cascade:D,leafOnly:q,checkStrategy:Z,allowNotLoaded:j},N)},uncheck(m,S,L={}){const{cascade:D=!0,leafOnly:q=!1,checkStrategy:Z="all",allowNotLoaded:j=!1}=L;return pn({checkedKeys:hn(S),indeterminateKeys:vn(S),keysToUncheck:m==null?[]:En(m),cascade:D,leafOnly:q,checkStrategy:Z,allowNotLoaded:j},N)},getNonLeafKeys(m={}){return Fo(O,m)}};return N}const Jo=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[H("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[H("description",`
 margin-top: 8px;
 `)])]),H("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),H("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ei=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),ni=ie({name:"Empty",props:ei,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ie(e),o=fe("Empty","-empty",Jo,jt,e,n),{localeRef:i}=Zn("Empty"),r=pe(Vt,null),l=F(()=>{var c,p,O;return(c=e.description)!==null&&c!==void 0?c:(O=(p=r==null?void 0:r.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||O===void 0?void 0:O.description}),a=F(()=>{var c,p;return((p=(c=r==null?void 0:r.mergedComponentPropsRef.value)===null||c===void 0?void 0:c.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>d(Oo,null))}),u=F(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:p},self:{[se("iconSize",c)]:O,[se("fontSize",c)]:_,textColor:b,iconColor:k,extraTextColor:$}}=o.value;return{"--n-icon-size":O,"--n-font-size":_,"--n-bezier":p,"--n-text-color":b,"--n-icon-color":k,"--n-extra-text-color":$}}),h=t?_e("empty",F(()=>{let c="";const{size:p}=e;return c+=p[0],c}),u,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:F(()=>l.value||i.value.description),cssVars:t?void 0:u,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),d("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${n}-empty__icon`},e.icon?e.icon():d(Hn,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${n}-empty__extra`},e.extra()):null)}});function ti(e,n){return d(Rn,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Hn,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(ko)}):null})}const Kn=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:i,renderLabelRef:r,renderOptionRef:l,labelFieldRef:a,valueFieldRef:u,showCheckmarkRef:h,nodePropsRef:c,handleOptionClick:p,handleOptionMouseEnter:O}=pe(On),_=Re(()=>{const{value:z}=t;return z?e.tmNode.key===z.key:!1});function b(z){const{tmNode:M}=e;M.disabled||p(z,M)}function k(z){const{tmNode:M}=e;M.disabled||O(z,M)}function $(z){const{tmNode:M}=e,{value:N}=_;M.disabled||N||O(z,M)}return{multiple:o,isGrouped:Re(()=>{const{tmNode:z}=e,{parent:M}=z;return M&&M.rawNode.type==="group"}),showCheckmark:h,nodeProps:c,isPending:_,isSelected:Re(()=>{const{value:z}=n,{value:M}=o;if(z===null)return!1;const N=e.tmNode.rawNode[u.value];if(M){const{value:m}=i;return m.has(N)}else return z===N}),labelField:a,renderLabel:r,renderOption:l,handleMouseMove:$,handleMouseEnter:k,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:i,showCheckmark:r,nodeProps:l,renderOption:a,renderLabel:u,handleClick:h,handleMouseEnter:c,handleMouseMove:p}=this,O=ti(t,e),_=u?[u(n,t),r&&O]:[ge(n[this.labelField],n,t),r&&O],b=l==null?void 0:l(n),k=d("div",Object.assign({},b,{class:[`${e}-base-select-option`,n.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:r}],style:[(b==null?void 0:b.style)||"",n.style||""],onClick:cn([h,b==null?void 0:b.onClick]),onMouseenter:cn([c,b==null?void 0:b.onMouseenter]),onMousemove:cn([p,b==null?void 0:b.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},_));return n.render?n.render({node:k,option:n,selected:t}):a?a({node:k,option:n,selected:t}):k}}),Dn=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=pe(On);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:i}}=this,r=o==null?void 0:o(i),l=n?n(i,!1):ge(i[this.labelField],i,!1),a=d("div",Object.assign({},r,{class:[`${e}-base-select-group-header`,r==null?void 0:r.class]}),l);return i.render?i.render({node:a,option:i}):t?t({node:a,option:i,selected:!1}):a}}),oi=B("base-select-menu",`
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
 `,[H("content",`
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
 `),H("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),H("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),H("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("action",`
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
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ee("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ee("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ee("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),ee("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 `,[De("selected",`
 color: var(--n-option-text-color-disabled);
 `),ee("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),H("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[kn({enterScale:"0.5"})])])]),ii=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ie(e),o=Wn("InternalSelectMenu",t,n),i=fe("InternalSelectMenu","-internal-select-menu",oi,Ht,e,ne(e,"clsPrefix")),r=E(null),l=E(null),a=E(null),u=F(()=>e.treeMate.getFlattenedNodes()),h=F(()=>Ko(u.value)),c=E(null);function p(){const{treeMate:f}=e;let C=null;const{value:te}=e;te===null?C=f.getFirstAvailableNode():(e.multiple?C=f.getNode((te||[])[(te||[]).length-1]):C=f.getNode(te),(!C||C.disabled)&&(C=f.getFirstAvailableNode())),T(C||null)}function O(){const{value:f}=c;f&&!e.treeMate.getNode(f.key)&&(c.value=null)}let _;ye(()=>e.show,f=>{f?_=ye(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():O(),Cn(I)):O()},{immediate:!0}):_==null||_()},{immediate:!0}),Sn(()=>{_==null||_()});const b=F(()=>bn(i.value.self[se("optionHeight",e.size)])),k=F(()=>Ke(i.value.self[se("padding",e.size)])),$=F(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=F(()=>{const f=u.value;return f&&f.length===0});function M(f){const{onToggle:C}=e;C&&C(f)}function N(f){const{onScroll:C}=e;C&&C(f)}function m(f){var C;(C=a.value)===null||C===void 0||C.sync(),N(f)}function S(){var f;(f=a.value)===null||f===void 0||f.sync()}function L(){const{value:f}=c;return f||null}function D(f,C){C.disabled||T(C,!1)}function q(f,C){C.disabled||M(C)}function Z(f){var C;ze(f,"action")||(C=e.onKeyup)===null||C===void 0||C.call(e,f)}function j(f){var C;ze(f,"action")||(C=e.onKeydown)===null||C===void 0||C.call(e,f)}function y(f){var C;(C=e.onMousedown)===null||C===void 0||C.call(e,f),!e.focusable&&f.preventDefault()}function v(){const{value:f}=c;f&&T(f.getNext({loop:!0}),!0)}function x(){const{value:f}=c;f&&T(f.getPrev({loop:!0}),!0)}function T(f,C=!1){c.value=f,C&&I()}function I(){var f,C;const te=c.value;if(!te)return;const he=h.value(te.key);he!==null&&(e.virtualScroll?(f=l.value)===null||f===void 0||f.scrollTo({index:he}):(C=a.value)===null||C===void 0||C.scrollTo({index:he,elSize:b.value}))}function V(f){var C,te;!((C=r.value)===null||C===void 0)&&C.contains(f.target)&&((te=e.onFocus)===null||te===void 0||te.call(e,f))}function R(f){var C,te;!((C=r.value)===null||C===void 0)&&C.contains(f.relatedTarget)||(te=e.onBlur)===null||te===void 0||te.call(e,f)}Ce(On,{handleOptionMouseEnter:D,handleOptionClick:q,valueSetRef:$,pendingTmNodeRef:c,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),Ce(vo,r),je(()=>{const{value:f}=a;f&&f.sync()});const A=F(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:C},self:{height:te,borderRadius:he,color:we,groupHeaderTextColor:Y,actionDividerColor:be,optionTextColorPressed:ue,optionTextColor:Te,optionTextColorDisabled:xe,optionTextColorActive:Me,optionOpacityDisabled:Ne,optionCheckColor:Ae,actionTextColor:$e,optionColorPending:ke,optionColorActive:Pe,loadingColor:Be,loadingSize:Ee,optionColorActivePending:Le,[se("optionFontSize",f)]:Fe,[se("optionHeight",f)]:Oe,[se("optionPadding",f)]:de}}=i.value;return{"--n-height":te,"--n-action-divider-color":be,"--n-action-text-color":$e,"--n-bezier":C,"--n-border-radius":he,"--n-color":we,"--n-option-font-size":Fe,"--n-group-header-text-color":Y,"--n-option-check-color":Ae,"--n-option-color-pending":ke,"--n-option-color-active":Pe,"--n-option-color-active-pending":Le,"--n-option-height":Oe,"--n-option-opacity-disabled":Ne,"--n-option-text-color":Te,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":ue,"--n-option-padding":de,"--n-option-padding-left":Ke(de,"left"),"--n-option-padding-right":Ke(de,"right"),"--n-loading-color":Be,"--n-loading-size":Ee}}),{inlineThemeDisabled:J}=e,Q=J?_e("internal-select-menu",F(()=>e.size[0]),A,e):void 0,ae={selfRef:r,next:v,prev:x,getPendingTmNode:L};return tt(r,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:o,virtualListRef:l,scrollbarRef:a,itemSize:b,padding:k,flattenedNodes:u,empty:z,virtualListContainer(){const{value:f}=l;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=l;return f==null?void 0:f.itemsElRef},doScroll:N,handleFocusin:V,handleFocusout:R,handleKeyUp:Z,handleKeyDown:j,handleMouseDown:y,handleVirtualListResize:S,handleVirtualListScroll:m,cssVars:J?void 0:A,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},ae)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:i,onRender:r}=this;return r==null||r(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,i,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},_n(e.header,l=>l&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(Wt,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Ut(e.empty,()=>[d(ni,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):d(Gt,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(Co,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(Dn,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:d(Kn,{clsPrefix:t,key:l.key,tmNode:l})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(Dn,{key:l.key,clsPrefix:t,tmNode:l}):d(Kn,{clsPrefix:t,key:l.key,tmNode:l})))}),_n(e.action,l=>l&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(To,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ri=le([B("base-selection",`
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
 `),B("base-selection-tags","min-height: var(--n-height);"),H("border, state-border",`
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
 `),H("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[H("arrow",`
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
 `,[H("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[H("inner",`
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
 `,[H("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),H("render-label",`
 color: var(--n-text-color);
 `)]),De("disabled",[le("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ee("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ee("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),ee("disabled","cursor: not-allowed;",[H("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),H("render-label",`
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
 `,[H("input",`
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
 `),H("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ee(`${e}-status`,[H("state-border",`border: var(--n-border-${e});`),De("disabled",[le("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ee("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ee("focus",[H("state-border",`
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
 `,[le("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[H("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),li=ie({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ie(e),o=Wn("InternalSelection",t,n),i=E(null),r=E(null),l=E(null),a=E(null),u=E(null),h=E(null),c=E(null),p=E(null),O=E(null),_=E(null),b=E(!1),k=E(!1),$=E(!1),z=fe("InternalSelection","-internal-selection",ri,qt,e,ne(e,"clsPrefix")),M=F(()=>e.clearable&&!e.disabled&&($.value||e.active)),N=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ge(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),m=F(()=>{const g=e.selectedOption;if(g)return g[e.labelField]}),S=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function L(){var g;const{value:P}=i;if(P){const{value:oe}=r;oe&&(oe.style.width=`${P.offsetWidth}px`,e.maxTagCount!=="responsive"&&((g=O.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!1})))}}function D(){const{value:g}=_;g&&(g.style.display="none")}function q(){const{value:g}=_;g&&(g.style.display="inline-block")}ye(ne(e,"active"),g=>{g||D()}),ye(ne(e,"pattern"),()=>{e.multiple&&Cn(L)});function Z(g){const{onFocus:P}=e;P&&P(g)}function j(g){const{onBlur:P}=e;P&&P(g)}function y(g){const{onDeleteOption:P}=e;P&&P(g)}function v(g){const{onClear:P}=e;P&&P(g)}function x(g){const{onPatternInput:P}=e;P&&P(g)}function T(g){var P;(!g.relatedTarget||!(!((P=l.value)===null||P===void 0)&&P.contains(g.relatedTarget)))&&Z(g)}function I(g){var P;!((P=l.value)===null||P===void 0)&&P.contains(g.relatedTarget)||j(g)}function V(g){v(g)}function R(){$.value=!0}function A(){$.value=!1}function J(g){!e.active||!e.filterable||g.target!==r.value&&g.preventDefault()}function Q(g){y(g)}function ae(g){if(g.key==="Backspace"&&!f.value&&!e.pattern.length){const{selectedOptions:P}=e;P!=null&&P.length&&Q(P[P.length-1])}}const f=E(!1);let C=null;function te(g){const{value:P}=i;if(P){const oe=g.target.value;P.textContent=oe,L()}e.ignoreComposition&&f.value?C=g:x(g)}function he(){f.value=!0}function we(){f.value=!1,e.ignoreComposition&&x(C),C=null}function Y(g){var P;k.value=!0,(P=e.onPatternFocus)===null||P===void 0||P.call(e,g)}function be(g){var P;k.value=!1,(P=e.onPatternBlur)===null||P===void 0||P.call(e,g)}function ue(){var g,P;if(e.filterable)k.value=!1,(g=h.value)===null||g===void 0||g.blur(),(P=r.value)===null||P===void 0||P.blur();else if(e.multiple){const{value:oe}=a;oe==null||oe.blur()}else{const{value:oe}=u;oe==null||oe.blur()}}function Te(){var g,P,oe;e.filterable?(k.value=!1,(g=h.value)===null||g===void 0||g.focus()):e.multiple?(P=a.value)===null||P===void 0||P.focus():(oe=u.value)===null||oe===void 0||oe.focus()}function xe(){const{value:g}=r;g&&(q(),g.focus())}function Me(){const{value:g}=r;g&&g.blur()}function Ne(g){const{value:P}=c;P&&P.setTextContent(`+${g}`)}function Ae(){const{value:g}=p;return g}function $e(){return r.value}let ke=null;function Pe(){ke!==null&&window.clearTimeout(ke)}function Be(){e.active||(Pe(),ke=window.setTimeout(()=>{S.value&&(b.value=!0)},100))}function Ee(){Pe()}function Le(g){g||(Pe(),b.value=!1)}ye(S,g=>{g||(b.value=!1)}),je(()=>{Zt(()=>{const g=h.value;g&&(e.disabled?g.removeAttribute("tabindex"):g.tabIndex=k.value?-1:0)})}),tt(l,e.onResize);const{inlineThemeDisabled:Fe}=e,Oe=F(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:P},self:{borderRadius:oe,color:rn,placeholderColor:ln,textColor:Ve,paddingSingle:He,paddingMultiple:We,caretColor:an,colorDisabled:sn,textColorDisabled:Ge,placeholderColorDisabled:Se,colorActive:s,boxShadowFocus:w,boxShadowActive:K,boxShadowHover:X,border:G,borderFocus:W,borderHover:U,borderActive:re,arrowColor:ve,arrowColorDisabled:dn,loadingColor:ct,colorActiveWarning:ft,boxShadowFocusWarning:ht,boxShadowActiveWarning:vt,boxShadowHoverWarning:pt,borderWarning:gt,borderFocusWarning:bt,borderHoverWarning:mt,borderActiveWarning:yt,colorActiveError:wt,boxShadowFocusError:xt,boxShadowActiveError:St,boxShadowHoverError:Ct,borderError:Rt,borderFocusError:kt,borderHoverError:Pt,borderActiveError:Ot,clearColor:Tt,clearColorHover:Ft,clearColorPressed:zt,clearSize:It,arrowSize:_t,[se("height",g)]:Mt,[se("fontSize",g)]:Nt}}=z.value,Ue=Ke(He),qe=Ke(We);return{"--n-bezier":P,"--n-border":G,"--n-border-active":re,"--n-border-focus":W,"--n-border-hover":U,"--n-border-radius":oe,"--n-box-shadow-active":K,"--n-box-shadow-focus":w,"--n-box-shadow-hover":X,"--n-caret-color":an,"--n-color":rn,"--n-color-active":s,"--n-color-disabled":sn,"--n-font-size":Nt,"--n-height":Mt,"--n-padding-single-top":Ue.top,"--n-padding-multiple-top":qe.top,"--n-padding-single-right":Ue.right,"--n-padding-multiple-right":qe.right,"--n-padding-single-left":Ue.left,"--n-padding-multiple-left":qe.left,"--n-padding-single-bottom":Ue.bottom,"--n-padding-multiple-bottom":qe.bottom,"--n-placeholder-color":ln,"--n-placeholder-color-disabled":Se,"--n-text-color":Ve,"--n-text-color-disabled":Ge,"--n-arrow-color":ve,"--n-arrow-color-disabled":dn,"--n-loading-color":ct,"--n-color-active-warning":ft,"--n-box-shadow-focus-warning":ht,"--n-box-shadow-active-warning":vt,"--n-box-shadow-hover-warning":pt,"--n-border-warning":gt,"--n-border-focus-warning":bt,"--n-border-hover-warning":mt,"--n-border-active-warning":yt,"--n-color-active-error":wt,"--n-box-shadow-focus-error":xt,"--n-box-shadow-active-error":St,"--n-box-shadow-hover-error":Ct,"--n-border-error":Rt,"--n-border-focus-error":kt,"--n-border-hover-error":Pt,"--n-border-active-error":Ot,"--n-clear-size":It,"--n-clear-color":Tt,"--n-clear-color-hover":Ft,"--n-clear-color-pressed":zt,"--n-arrow-size":_t}}),de=Fe?_e("internal-selection",F(()=>e.size[0]),Oe,e):void 0;return{mergedTheme:z,mergedClearable:M,mergedClsPrefix:n,rtlEnabled:o,patternInputFocused:k,filterablePlaceholder:N,label:m,selected:S,showTagsPanel:b,isComposing:f,counterRef:c,counterWrapperRef:p,patternInputMirrorRef:i,patternInputRef:r,selfRef:l,multipleElRef:a,singleElRef:u,patternInputWrapperRef:h,overflowRef:O,inputTagElRef:_,handleMouseDown:J,handleFocusin:T,handleClear:V,handleMouseEnter:R,handleMouseLeave:A,handleDeleteOption:Q,handlePatternKeyDown:ae,handlePatternInputInput:te,handlePatternInputBlur:be,handlePatternInputFocus:Y,handleMouseEnterCounter:Be,handleMouseLeaveCounter:Ee,handleFocusout:I,handleCompositionEnd:we,handleCompositionStart:he,onPopoverUpdateShow:Le,focus:Te,focusInput:xe,blur:ue,blurInput:Me,updateCounter:Ne,getCounter:Ae,getTail:$e,renderLabel:e.renderLabel,cssVars:Fe?void 0:Oe,themeClass:de==null?void 0:de.themeClass,onRender:de==null?void 0:de.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:i,maxTagCount:r,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:u,onRender:h,renderTag:c,renderLabel:p}=this;h==null||h();const O=r==="responsive",_=typeof r=="number",b=O||_,k=d(Xt,null,{default:()=>d(co,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,M;return(M=(z=this.$slots).arrow)===null||M===void 0?void 0:M.call(z)}})});let $;if(n){const{labelField:z}=this,M=x=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:x.value},c?c({option:x,handleClose:()=>{this.handleDeleteOption(x)}}):d(un,{size:t,closable:!x.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(x)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(x,!0):ge(x[z],x,!0)})),N=()=>(_?this.selectedOptions.slice(0,r):this.selectedOptions).map(M),m=i?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,S=O?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(un,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let L;if(_){const x=this.selectedOptions.length-r;x>0&&(L=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(un,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${x}`})))}const D=O?i?d(Bn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:N,counter:S,tail:()=>m}):d(Bn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:N,counter:S}):_&&L?N().concat(L):N(),q=b?()=>d("div",{class:`${a}-base-selection-popover`},O?N():this.selectedOptions.map(M)):void 0,Z=b?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},u):null,y=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,v=i?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},D,O?null:m,k):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},D,k);$=d(Gn,null,b?d(Yn,Object.assign({},Z,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>v,default:q}):v,y)}else if(i){const z=this.pattern||this.isComposing,M=this.active?!z:!this.selected,N=this.active?!1:this.selected;$=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Nn(this.label)},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),N?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ge(this.label,this.selectedOption,!0))):null,M?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,k)}else $=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Nn(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ge(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),k);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},$,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function nn(e){return e.type==="group"}function lt(e){return e.type==="ignored"}function gn(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ai(e,n){return{getIsGroup:nn,getIgnored:lt,getKey(o){return nn(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function si(e,n,t,o){if(!n)return e;function i(r){if(!Array.isArray(r))return[];const l=[];for(const a of r)if(nn(a)){const u=i(a[o]);u.length&&l.push(Object.assign({},a,{[o]:u}))}else{if(lt(a))continue;n(t,a)&&l.push(a)}return l}return i(e)}function di(e,n,t){const o=new Map;return e.forEach(i=>{nn(i)?i[t].forEach(r=>{o.set(r[n],r)}):o.set(i[n],i)}),o}const ui=le([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[kn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ci=Object.assign(Object.assign({},fe.props),{to:yn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Fi=ie({name:"Select",props:ci,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:i}=Ie(e),r=fe("Select","-select",ui,Yt,e,n),l=E(e.defaultValue),a=ne(e,"value"),u=mn(a,l),h=E(!1),c=E(""),p=F(()=>{const{valueField:s,childrenField:w}=e,K=ai(s,w);return rt(v.value,K)}),O=F(()=>di(j.value,e.valueField,e.childrenField)),_=E(!1),b=mn(ne(e,"show"),_),k=E(null),$=E(null),z=E(null),{localeRef:M}=Zn("Select"),N=F(()=>{var s;return(s=e.placeholder)!==null&&s!==void 0?s:M.value.placeholder}),m=fo(e,["items","options"]),S=[],L=E([]),D=E([]),q=E(new Map),Z=F(()=>{const{fallbackOption:s}=e;if(s===void 0){const{labelField:w,valueField:K}=e;return X=>({[w]:String(X),[K]:X})}return s===!1?!1:w=>Object.assign(s(w),{value:w})}),j=F(()=>D.value.concat(L.value).concat(m.value)),y=F(()=>{const{filter:s}=e;if(s)return s;const{labelField:w,valueField:K}=e;return(X,G)=>{if(!G)return!1;const W=G[w];if(typeof W=="string")return gn(X,W);const U=G[K];return typeof U=="string"?gn(X,U):typeof U=="number"?gn(X,String(U)):!1}}),v=F(()=>{if(e.remote)return m.value;{const{value:s}=j,{value:w}=c;return!w.length||!e.filterable?s:si(s,y.value,w,e.childrenField)}});function x(s){const w=e.remote,{value:K}=q,{value:X}=O,{value:G}=Z,W=[];return s.forEach(U=>{if(X.has(U))W.push(X.get(U));else if(w&&K.has(U))W.push(K.get(U));else if(G){const re=G(U);re&&W.push(re)}}),W}const T=F(()=>{if(e.multiple){const{value:s}=u;return Array.isArray(s)?x(s):[]}return null}),I=F(()=>{const{value:s}=u;return!e.multiple&&!Array.isArray(s)?s===null?null:x([s])[0]||null:null}),V=Qt(e),{mergedSizeRef:R,mergedDisabledRef:A,mergedStatusRef:J}=V;function Q(s,w){const{onChange:K,"onUpdate:value":X,onUpdateValue:G}=e,{nTriggerFormChange:W,nTriggerFormInput:U}=V;K&&ce(K,s,w),G&&ce(G,s,w),X&&ce(X,s,w),l.value=s,W(),U()}function ae(s){const{onBlur:w}=e,{nTriggerFormBlur:K}=V;w&&ce(w,s),K()}function f(){const{onClear:s}=e;s&&ce(s)}function C(s){const{onFocus:w,showOnFocus:K}=e,{nTriggerFormFocus:X}=V;w&&ce(w,s),X(),K&&be()}function te(s){const{onSearch:w}=e;w&&ce(w,s)}function he(s){const{onScroll:w}=e;w&&ce(w,s)}function we(){var s;const{remote:w,multiple:K}=e;if(w){const{value:X}=q;if(K){const{valueField:G}=e;(s=T.value)===null||s===void 0||s.forEach(W=>{X.set(W[G],W)})}else{const G=I.value;G&&X.set(G[e.valueField],G)}}}function Y(s){const{onUpdateShow:w,"onUpdate:show":K}=e;w&&ce(w,s),K&&ce(K,s),_.value=s}function be(){A.value||(Y(!0),_.value=!0,e.filterable&&We())}function ue(){Y(!1)}function Te(){c.value="",D.value=S}const xe=E(!1);function Me(){e.filterable&&(xe.value=!0)}function Ne(){e.filterable&&(xe.value=!1,b.value||Te())}function Ae(){A.value||(b.value?e.filterable?We():ue():be())}function $e(s){var w,K;!((K=(w=z.value)===null||w===void 0?void 0:w.selfRef)===null||K===void 0)&&K.contains(s.relatedTarget)||(h.value=!1,ae(s),ue())}function ke(s){C(s),h.value=!0}function Pe(s){h.value=!0}function Be(s){var w;!((w=k.value)===null||w===void 0)&&w.$el.contains(s.relatedTarget)||(h.value=!1,ae(s),ue())}function Ee(){var s;(s=k.value)===null||s===void 0||s.focus(),ue()}function Le(s){var w;b.value&&(!((w=k.value)===null||w===void 0)&&w.$el.contains(to(s))||ue())}function Fe(s){if(!Array.isArray(s))return[];if(Z.value)return Array.from(s);{const{remote:w}=e,{value:K}=O;if(w){const{value:X}=q;return s.filter(G=>K.has(G)||X.has(G))}else return s.filter(X=>K.has(X))}}function Oe(s){de(s.rawNode)}function de(s){if(A.value)return;const{tag:w,remote:K,clearFilterAfterSelect:X,valueField:G}=e;if(w&&!K){const{value:W}=D,U=W[0]||null;if(U){const re=L.value;re.length?re.push(U):L.value=[U],D.value=S}}if(K&&q.value.set(s[G],s),e.multiple){const W=Fe(u.value),U=W.findIndex(re=>re===s[G]);if(~U){if(W.splice(U,1),w&&!K){const re=g(s[G]);~re&&(L.value.splice(re,1),X&&(c.value=""))}}else W.push(s[G]),X&&(c.value="");Q(W,x(W))}else{if(w&&!K){const W=g(s[G]);~W?L.value=[L.value[W]]:L.value=S}He(),ue(),Q(s[G],s)}}function g(s){return L.value.findIndex(K=>K[e.valueField]===s)}function P(s){b.value||be();const{value:w}=s.target;c.value=w;const{tag:K,remote:X}=e;if(te(w),K&&!X){if(!w){D.value=S;return}const{onCreate:G}=e,W=G?G(w):{[e.labelField]:w,[e.valueField]:w},{valueField:U,labelField:re}=e;m.value.some(ve=>ve[U]===W[U]||ve[re]===W[re])||L.value.some(ve=>ve[U]===W[U]||ve[re]===W[re])?D.value=S:D.value=[W]}}function oe(s){s.stopPropagation();const{multiple:w}=e;!w&&e.filterable&&ue(),f(),w?Q([],[]):Q(null,null)}function rn(s){!ze(s,"action")&&!ze(s,"empty")&&s.preventDefault()}function ln(s){he(s)}function Ve(s){var w,K,X,G,W;if(!e.keyboard){s.preventDefault();return}switch(s.key){case" ":if(e.filterable)break;s.preventDefault();case"Enter":if(!(!((w=k.value)===null||w===void 0)&&w.isComposing)){if(b.value){const U=(K=z.value)===null||K===void 0?void 0:K.getPendingTmNode();U?Oe(U):e.filterable||(ue(),He())}else if(be(),e.tag&&xe.value){const U=D.value[0];if(U){const re=U[e.valueField],{value:ve}=u;e.multiple&&Array.isArray(ve)&&ve.some(dn=>dn===re)||de(U)}}}s.preventDefault();break;case"ArrowUp":if(s.preventDefault(),e.loading)return;b.value&&((X=z.value)===null||X===void 0||X.prev());break;case"ArrowDown":if(s.preventDefault(),e.loading)return;b.value?(G=z.value)===null||G===void 0||G.next():be();break;case"Escape":b.value&&(oo(s),ue()),(W=k.value)===null||W===void 0||W.focus();break}}function He(){var s;(s=k.value)===null||s===void 0||s.focus()}function We(){var s;(s=k.value)===null||s===void 0||s.focusInput()}function an(){var s;b.value&&((s=$.value)===null||s===void 0||s.syncPosition())}we(),ye(ne(e,"options"),we);const sn={focus:()=>{var s;(s=k.value)===null||s===void 0||s.focus()},focusInput:()=>{var s;(s=k.value)===null||s===void 0||s.focusInput()},blur:()=>{var s;(s=k.value)===null||s===void 0||s.blur()},blurInput:()=>{var s;(s=k.value)===null||s===void 0||s.blurInput()}},Ge=F(()=>{const{self:{menuBoxShadow:s}}=r.value;return{"--n-menu-box-shadow":s}}),Se=i?_e("select",void 0,Ge,e):void 0;return Object.assign(Object.assign({},sn),{mergedStatus:J,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:p,isMounted:Jt(),triggerRef:k,menuRef:z,pattern:c,uncontrolledShow:_,mergedShow:b,adjustedTo:yn(e),uncontrolledValue:l,mergedValue:u,followerRef:$,localizedPlaceholder:N,selectedOption:I,selectedOptions:T,mergedSize:R,mergedDisabled:A,focused:h,activeWithoutMenuOpen:xe,inlineThemeDisabled:i,onTriggerInputFocus:Me,onTriggerInputBlur:Ne,handleTriggerOrMenuResize:an,handleMenuFocus:Pe,handleMenuBlur:Be,handleMenuTabOut:Ee,handleTriggerClick:Ae,handleToggle:Oe,handleDeleteOption:de,handlePatternInput:P,handleClear:oe,handleTriggerBlur:$e,handleTriggerFocus:ke,handleKeydown:Ve,handleMenuAfterLeave:Te,handleMenuClickOutside:Le,handleMenuScroll:ln,handleMenuKeydown:Ve,handleMenuMousedown:rn,mergedTheme:r,cssVars:i?void 0:Ge,themeClass:Se==null?void 0:Se.themeClass,onRender:Se==null?void 0:Se.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Qn,null,{default:()=>[d(Jn,null,{default:()=>d(li,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(et,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===yn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Rn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),eo(d(ii,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},header:()=>{var o,i;return[(i=(o=this.$slots).header)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[no,this.mergedShow],[Mn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Mn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),at=ie({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),fi=B("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ee("color-transition",{transition:"color .3s var(--n-bezier)"}),ee("depth",{color:"var(--n-color)"},[le("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),le("svg",{height:"1em",width:"1em"})]),hi=Object.assign(Object.assign({},fe.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),vi=ie({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:hi,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ie(e),o=fe("Icon","-icon",fi,io,e,n),i=F(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:a},self:u}=o.value;if(l!==void 0){const{color:h,[`opacity${l}Depth`]:c}=u;return{"--n-bezier":a,"--n-color":h,"--n-opacity":c}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),r=t?_e("icon",F(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:n,mergedStyle:F(()=>{const{size:l,color:a}=e;return{fontSize:po(l),color:a}}),cssVars:t?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:i,onRender:r,themeClass:l}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Un("icon","don't wrap `n-icon` inside `n-icon`"),r==null||r(),d("i",tn(this.$attrs,{role:"img",class:[`${o}-icon`,l,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?d(i):this.$slots)}}),Fn=Pn("n-dropdown-menu"),on=Pn("n-dropdown"),jn=Pn("n-dropdown-option");function xn(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function pi(e){return e.type==="group"}function st(e){return e.type==="divider"}function gi(e){return e.type==="render"}const dt=ie({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=pe(on),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:r,activeKeyPathRef:l,animatedRef:a,mergedShowRef:u,renderLabelRef:h,renderIconRef:c,labelFieldRef:p,childrenFieldRef:O,renderOptionRef:_,nodePropsRef:b,menuPropsRef:k}=n,$=pe(jn,null),z=pe(Fn),M=pe(qn),N=F(()=>e.tmNode.rawNode),m=F(()=>{const{value:R}=O;return xn(e.tmNode.rawNode,R)}),S=F(()=>{const{disabled:R}=e.tmNode;return R}),L=F(()=>{if(!m.value)return!1;const{key:R,disabled:A}=e.tmNode;if(A)return!1;const{value:J}=t,{value:Q}=o,{value:ae}=i,{value:f}=r;return J!==null?f.includes(R):Q!==null?f.includes(R)&&f[f.length-1]!==R:ae!==null?f.includes(R):!1}),D=F(()=>o.value===null&&!a.value),q=mo(L,300,D),Z=F(()=>!!($!=null&&$.enteringSubmenuRef.value)),j=E(!1);Ce(jn,{enteringSubmenuRef:j});function y(){j.value=!0}function v(){j.value=!1}function x(){const{parentKey:R,tmNode:A}=e;A.disabled||u.value&&(i.value=R,o.value=null,t.value=A.key)}function T(){const{tmNode:R}=e;R.disabled||u.value&&t.value!==R.key&&x()}function I(R){if(e.tmNode.disabled||!u.value)return;const{relatedTarget:A}=R;A&&!ze({target:A},"dropdownOption")&&!ze({target:A},"scrollbarRail")&&(t.value=null)}function V(){const{value:R}=m,{tmNode:A}=e;u.value&&!R&&!A.disabled&&(n.doSelect(A.key,A.rawNode),n.doUpdateShow(!1))}return{labelField:p,renderLabel:h,renderIcon:c,siblingHasIcon:z.showIconRef,siblingHasSubmenu:z.hasSubmenuRef,menuProps:k,popoverBody:M,animated:a,mergedShowSubmenu:F(()=>q.value&&!Z.value),rawNode:N,hasSubmenu:m,pending:Re(()=>{const{value:R}=r,{key:A}=e.tmNode;return R.includes(A)}),childActive:Re(()=>{const{value:R}=l,{key:A}=e.tmNode,J=R.findIndex(Q=>A===Q);return J===-1?!1:J<R.length-1}),active:Re(()=>{const{value:R}=l,{key:A}=e.tmNode,J=R.findIndex(Q=>A===Q);return J===-1?!1:J===R.length-1}),mergedDisabled:S,renderOption:_,nodeProps:b,handleClick:V,handleMouseMove:T,handleMouseEnter:x,handleMouseLeave:I,handleSubmenuBeforeEnter:y,handleSubmenuAfterEnter:v}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:i,clsPrefix:r,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:u,renderIcon:h,renderOption:c,nodeProps:p,props:O,scrollable:_}=this;let b=null;if(i){const M=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);b=d(ut,Object.assign({},M,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},$=p==null?void 0:p(o),z=d("div",Object.assign({class:[`${r}-dropdown-option`,$==null?void 0:$.class],"data-dropdown-option":!0},$),d("div",tn(k,O),[d("div",{class:[`${r}-dropdown-option-body__prefix`,l&&`${r}-dropdown-option-body__prefix--show-icon`]},[h?h(o):ge(o.icon)]),d("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},u?u(o):ge((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(vi,null,{default:()=>d(Po,null)}):null)]),this.hasSubmenu?d(Qn,null,{default:()=>[d(Jn,null,{default:()=>d("div",{class:`${r}-dropdown-offset-container`},d(et,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>d("div",{class:`${r}-dropdown-menu-wrapper`},t?d(Rn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return c?c({node:z,option:o}):z}}),bi=ie({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=pe(Fn),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:i,renderOptionRef:r}=pe(on);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:i,renderOption:r}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:i,renderLabel:r,renderOption:l}=this,{rawNode:a}=this.tmNode,u=d("div",Object.assign({class:`${n}-dropdown-option`},i==null?void 0:i(a)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},ge(a.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(a):ge((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:u,option:a}):u}}),mi=ie({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return d(Gn,null,d(bi,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(i=>{const{rawNode:r}=i;return r.show===!1?null:st(r)?d(at,{clsPrefix:t,key:i.key}):i.isGroup?(Un("dropdown","`group` node is not allowed to be put in `group` node."),null):d(dt,{clsPrefix:t,tmNode:i,parentKey:n,key:i.key})}))}}),yi=ie({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),ut=ie({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=pe(on);Ce(Fn,{showIconRef:F(()=>{const i=n.value;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:u})=>i?i(u):u.icon);const{rawNode:a}=r;return i?i(a):a.icon})}),hasSubmenuRef:F(()=>{const{value:i}=t;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:u})=>xn(u,i));const{rawNode:a}=r;return xn(a,i)})})});const o=E(null);return Ce(ro,null),Ce(lo,null),Ce(qn,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(i=>{const{rawNode:r}=i;return r.show===!1?null:gi(r)?d(yi,{tmNode:i,key:i.key}):st(r)?d(at,{clsPrefix:n,key:i.key}):pi(r)?d(mi,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):d(dt,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:r.props,scrollable:t})});return d("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(ao,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?go({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),wi=B("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[kn(),B("dropdown-option",`
 position: relative;
 `,[le("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[le("&::before",`
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
 `,[le("&::before",`
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
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),le("&::before","background-color: var(--n-option-color-hover);")]),ee("active",`
 color: var(--n-option-text-color-active);
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),le("&::before","background-color: var(--n-option-color-active);")]),ee("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),ee("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[H("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[ee("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),H("prefix",`
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
 `)]),H("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),H("suffix",`
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
 `),le(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),De("scrollable",`
 padding: var(--n-padding);
 `),ee("scrollable",[H("content",`
 padding: var(--n-padding);
 `)])]),xi={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Si=Object.keys(nt),Ci=Object.assign(Object.assign(Object.assign({},nt),xi),fe.props),zi=ie({name:"Dropdown",inheritAttrs:!1,props:Ci,setup(e){const n=E(!1),t=mn(ne(e,"show"),n),o=F(()=>{const{keyField:v,childrenField:x}=e;return rt(e.options,{getKey(T){return T[v]},getDisabled(T){return T.disabled===!0},getIgnored(T){return T.type==="divider"||T.type==="render"},getChildren(T){return T[x]}})}),i=F(()=>o.value.treeNodes),r=E(null),l=E(null),a=E(null),u=F(()=>{var v,x,T;return(T=(x=(v=r.value)!==null&&v!==void 0?v:l.value)!==null&&x!==void 0?x:a.value)!==null&&T!==void 0?T:null}),h=F(()=>o.value.getPath(u.value).keyPath),c=F(()=>o.value.getPath(e.value).keyPath),p=Re(()=>e.keyboard&&t.value);yo({keydown:{ArrowUp:{prevent:!0,handler:S},ArrowRight:{prevent:!0,handler:m},ArrowDown:{prevent:!0,handler:L},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:D},Escape:M}},p);const{mergedClsPrefixRef:O,inlineThemeDisabled:_}=Ie(e),b=fe("Dropdown","-dropdown",wi,so,e,O);Ce(on,{labelFieldRef:ne(e,"labelField"),childrenFieldRef:ne(e,"childrenField"),renderLabelRef:ne(e,"renderLabel"),renderIconRef:ne(e,"renderIcon"),hoverKeyRef:r,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:h,activeKeyPathRef:c,animatedRef:ne(e,"animated"),mergedShowRef:t,nodePropsRef:ne(e,"nodeProps"),renderOptionRef:ne(e,"renderOption"),menuPropsRef:ne(e,"menuProps"),doSelect:k,doUpdateShow:$}),ye(t,v=>{!e.animated&&!v&&z()});function k(v,x){const{onSelect:T}=e;T&&ce(T,v,x)}function $(v){const{"onUpdate:show":x,onUpdateShow:T}=e;x&&ce(x,v),T&&ce(T,v),n.value=v}function z(){r.value=null,l.value=null,a.value=null}function M(){$(!1)}function N(){Z("left")}function m(){Z("right")}function S(){Z("up")}function L(){Z("down")}function D(){const v=q();v!=null&&v.isLeaf&&t.value&&(k(v.key,v.rawNode),$(!1))}function q(){var v;const{value:x}=o,{value:T}=u;return!x||T===null?null:(v=x.getNode(T))!==null&&v!==void 0?v:null}function Z(v){const{value:x}=u,{value:{getFirstAvailableNode:T}}=o;let I=null;if(x===null){const V=T();V!==null&&(I=V.key)}else{const V=q();if(V){let R;switch(v){case"down":R=V.getNext();break;case"up":R=V.getPrev();break;case"right":R=V.getChild();break;case"left":R=V.getParent();break}R&&(I=R.key)}}I!==null&&(r.value=null,l.value=I)}const j=F(()=>{const{size:v,inverted:x}=e,{common:{cubicBezierEaseInOut:T},self:I}=b.value,{padding:V,dividerColor:R,borderRadius:A,optionOpacityDisabled:J,[se("optionIconSuffixWidth",v)]:Q,[se("optionSuffixWidth",v)]:ae,[se("optionIconPrefixWidth",v)]:f,[se("optionPrefixWidth",v)]:C,[se("fontSize",v)]:te,[se("optionHeight",v)]:he,[se("optionIconSize",v)]:we}=I,Y={"--n-bezier":T,"--n-font-size":te,"--n-padding":V,"--n-border-radius":A,"--n-option-height":he,"--n-option-prefix-width":C,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":ae,"--n-option-icon-suffix-width":Q,"--n-option-icon-size":we,"--n-divider-color":R,"--n-option-opacity-disabled":J};return x?(Y["--n-color"]=I.colorInverted,Y["--n-option-color-hover"]=I.optionColorHoverInverted,Y["--n-option-color-active"]=I.optionColorActiveInverted,Y["--n-option-text-color"]=I.optionTextColorInverted,Y["--n-option-text-color-hover"]=I.optionTextColorHoverInverted,Y["--n-option-text-color-active"]=I.optionTextColorActiveInverted,Y["--n-option-text-color-child-active"]=I.optionTextColorChildActiveInverted,Y["--n-prefix-color"]=I.prefixColorInverted,Y["--n-suffix-color"]=I.suffixColorInverted,Y["--n-group-header-text-color"]=I.groupHeaderTextColorInverted):(Y["--n-color"]=I.color,Y["--n-option-color-hover"]=I.optionColorHover,Y["--n-option-color-active"]=I.optionColorActive,Y["--n-option-text-color"]=I.optionTextColor,Y["--n-option-text-color-hover"]=I.optionTextColorHover,Y["--n-option-text-color-active"]=I.optionTextColorActive,Y["--n-option-text-color-child-active"]=I.optionTextColorChildActive,Y["--n-prefix-color"]=I.prefixColor,Y["--n-suffix-color"]=I.suffixColor,Y["--n-group-header-text-color"]=I.groupHeaderTextColor),Y}),y=_?_e("dropdown",F(()=>`${e.size[0]}${e.inverted?"i":""}`),j,e):void 0;return{mergedClsPrefix:O,mergedTheme:b,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&z()},doUpdateShow:$,cssVars:_?void 0:j,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const e=(o,i,r,l,a)=>{var u;const{mergedClsPrefix:h,menuProps:c}=this;(u=this.onRender)===null||u===void 0||u.call(this);const p=(c==null?void 0:c(void 0,this.tmNodes.map(_=>_.rawNode)))||{},O={ref:bo(i),class:[o,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(ut,tn(this.$attrs,O,p))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Yn,Object.assign({},uo(this.$props,Si),t),{trigger:()=>{var o,i;return(i=(o=this.$slots).default)===null||i===void 0?void 0:i.call(o)}})}});function Ii(e,n){return{modalVisible:F({get(){return e.visible},set(o){n("update:visible",o)}})}}export{Po as C,To as F,ii as N,Bn as V,zi as _,ni as a,Fi as b,rt as c,ai as d,bo as e,Co as f,yo as g,ze as h,cn as m,Ii as u};
