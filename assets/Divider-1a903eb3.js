import{Z as C,A as y,aU as g,E as c,T as d,d as z,F as O,I as w,cx as k,H as M,L as R,y as h,aP as E}from"./index-8719b80b.js";const j=C&&"loading"in document.createElement("img");function P(e={}){var r;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(r=e.threshold)!==null&&r!==void 0?r:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}}const f=new WeakMap,p=new WeakMap,m=new WeakMap,B=(e,r,o)=>{if(!e)return()=>{};const s=P(r),{root:a}=s.options;let t;const i=f.get(a);i?t=i:(t=new Map,f.set(a,t));let l,n;t.has(s.hash)?(n=t.get(s.hash),n[1].has(e)||(l=n[0],n[1].add(e),l.observe(e))):(l=new IntersectionObserver($=>{$.forEach(u=>{if(u.isIntersecting){const x=p.get(u.target),_=m.get(u.target);x&&x(),_&&(_.value=!0)}})},s.options),l.observe(e),n=[l,new Set([e])],t.set(s.hash,n));let v=!1;const b=()=>{v||(p.delete(e),m.delete(e),v=!0,n[1].has(e)&&(n[0].unobserve(e),n[1].delete(e)),n[1].size<=0&&t.delete(s.hash),t.size||f.delete(a))};return p.set(e,b),m.set(e,o),b},A=y("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[g("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[g("no-title",`
 display: flex;
 align-items: center;
 `)]),c("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),d("title-position-left",[c("line",[d("left",{width:"28px"})])]),d("title-position-right",[c("line",[d("right",{width:"28px"})])]),d("dashed",[c("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),d("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),c("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),g("dashed",[c("line",{backgroundColor:"var(--n-color)"})]),d("dashed",[c("line",{borderColor:"var(--n-color)"})]),d("vertical",{backgroundColor:"var(--n-color)"})]),I=Object.assign(Object.assign({},w.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),H=z({name:"Divider",props:I,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=O(e),s=w("Divider","-divider",A,k,e,r),a=M(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:l,textColor:n,fontWeight:v}}=s.value;return{"--n-bezier":i,"--n-color":l,"--n-text-color":n,"--n-font-weight":v}}),t=o?R("divider",void 0,a,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$slots:r,titlePlacement:o,vertical:s,dashed:a,cssVars:t,mergedClsPrefix:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:s,[`${i}-divider--no-title`]:!r.default,[`${i}-divider--dashed`]:a,[`${i}-divider--title-position-${o}`]:r.default&&o}],style:t},s?null:h("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!s&&r.default?h(E,null,h("div",{class:`${i}-divider__title`},this.$slots),h("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}});export{H as _,j as i,B as o};
