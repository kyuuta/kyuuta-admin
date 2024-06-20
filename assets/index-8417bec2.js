import{_ as oe}from"./Tag-0085b362.js";import{z as g,x as e,aR as re,Q as k,B as W,y as se,A as ie,d as x,C as le,F as X,bv as ae,E as J,H as L,I as ce,bw as de,q as d,bx as pe,o as v,n as y,w as u,e as b,i as I,t as T,h as A,p as F,c as Z,aM as ee,b4 as te}from"./index-0cd3d109.js";import{u as ue}from"./use-compitable-e16c1e92.js";import{g as be,_ as me}from"./Space-da222b34.js";function Q(t,s="default",i=[]){const{children:p}=t;if(p!==null&&typeof p=="object"&&!Array.isArray(p)){const l=p[s];if(typeof l=="function")return l()}return i}const ne="DESCRIPTION_ITEM_FLAG";function ge(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[ne]:!1}const he=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),re("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),k("left-label-align",[g("th",{textAlign:"left"})]),k("center-label-align",[g("th",{textAlign:"center"})]),k("right-label-align",[g("th",{textAlign:"right"})]),k("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),W("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),se(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ie(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ve=Object.assign(Object.assign({},X.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),q=x({name:"Descriptions",props:ve,setup(t){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=le(t),p=X("Descriptions","-descriptions",he,ae,t,s),l=J(()=>{const{size:a,bordered:c}=t,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:D,thColor:N,thColorModal:o,thColorPopover:P,thTextColor:w,thFontWeight:j,tdTextColor:B,tdColor:K,tdColorModal:O,tdColorPopover:n,borderColor:z,borderColorModal:M,borderColorPopover:m,borderRadius:f,lineHeight:C,[L("fontSize",a)]:S,[L(c?"thPaddingBordered":"thPadding",a)]:_,[L(c?"tdPaddingBordered":"tdPadding",a)]:$}}=p.value;return{"--n-title-text-color":D,"--n-th-padding":_,"--n-td-padding":$,"--n-font-size":S,"--n-bezier":h,"--n-th-font-weight":j,"--n-line-height":C,"--n-th-text-color":w,"--n-td-text-color":B,"--n-th-color":N,"--n-th-color-modal":o,"--n-th-color-popover":P,"--n-td-color":K,"--n-td-color-modal":O,"--n-td-color-popover":n,"--n-border-radius":f,"--n-border-color":z,"--n-border-color-modal":M,"--n-border-color-popover":m}}),r=i?ce("descriptions",J(()=>{let a="";const{size:c,bordered:h}=t;return h&&(a+="a"),a+=c[0],a}),l,t):void 0;return{mergedClsPrefix:s,cssVars:i?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender,compitableColumn:ue(t,["columns","column"]),inlineThemeDisabled:i}},render(){const t=this.$slots.default,s=t?de(t()):[];s.length;const{contentClass:i,labelClass:p,compitableColumn:l,labelPlacement:r,labelAlign:a,size:c,bordered:h,title:D,cssVars:N,mergedClsPrefix:o,separator:P,onRender:w}=this;w==null||w();const j=s.filter(n=>ge(n)),B={span:0,row:[],secondRow:[],rows:[]},O=j.reduce((n,z,M)=>{const m=z.props||{},f=j.length-1===M,C=["label"in m?m.label:Q(z,"label")],S=[Q(z)],_=m.span||1,$=n.span;n.span+=_;const E=m.labelStyle||m["label-style"]||this.labelStyle,V=m.contentStyle||m["content-style"]||this.contentStyle;if(r==="left")h?n.row.push(d("th",{class:[`${o}-descriptions-table-header`,p],colspan:1,style:E},C),d("td",{class:[`${o}-descriptions-table-content`,i],colspan:f?(l-$)*2+1:_*2-1,style:V},S)):n.row.push(d("td",{class:`${o}-descriptions-table-content`,colspan:f?(l-$)*2:_*2},d("span",{class:[`${o}-descriptions-table-content__label`,p],style:E},[...C,P&&d("span",{class:`${o}-descriptions-separator`},P)]),d("span",{class:[`${o}-descriptions-table-content__content`,i],style:V},S)));else{const U=f?(l-$)*2:_*2;n.row.push(d("th",{class:[`${o}-descriptions-table-header`,p],colspan:U,style:E},C)),n.secondRow.push(d("td",{class:[`${o}-descriptions-table-content`,i],colspan:U,style:V},S))}return(n.span>=l||f)&&(n.span=0,n.row.length&&(n.rows.push(n.row),n.row=[]),r!=="left"&&n.secondRow.length&&(n.rows.push(n.secondRow),n.secondRow=[])),n},B).rows.map(n=>d("tr",{class:`${o}-descriptions-table-row`},n));return d("div",{style:N,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${r}-label-placement`,`${o}-descriptions--${a}-label-align`,`${o}-descriptions--${c}-size`,h&&`${o}-descriptions--bordered`]},D||this.$slots.header?d("div",{class:`${o}-descriptions-header`},D||be(this,"header")):null,d("div",{class:`${o}-descriptions-table-wrapper`},d("table",{class:`${o}-descriptions-table`},d("tbody",null,r==="top"&&d("tr",{class:`${o}-descriptions-table-row`,style:{visibility:"collapse"}},pe(l*2,d("td",null))),O))))}}),fe={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},H=x({name:"DescriptionsItem",[ne]:!0,props:fe,render(){return null}}),_e="kyuuta-admin",ye="0.1.0",xe={name:"KYUUTA",email:"kyuutaaa3@gmail.com"},we={dev:"vite",serve:"npm run dev",build:"vite build","build:visualizer":"vite build --mode visualizer","build:no-cache":"yarn clean:cache && npm run build","clean:cache":"rm -rf node_modules/.cache/ && rm -rf node_modules/.vite","clean:lib":"rm -rf node_modules","lint:eslint":'eslint "{src,mock}/**/*.{vue,ts,tsx}" --fix',"lint:prettier":'prettier --write --loglevel warn "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',preview:"vite preview",deploy:"gh-pages -d dist"},ze={axios:"^1.6.0","bignumber.js":"^9.1.2",colord:"^2.9.3","date-fns":"^2.30.0","lodash-es":"^4.17.21","naive-ui":"^2.38.1",pinia:"^2.1.7",qs:"^6.11.2",vfonts:"^0.0.3",vue:"^3.3.8","vue-i18n":"^9.6.5","vue-router":"^4.2.5"},Ce={"@better-scroll/core":"^2.5.1","@iconify/json":"^2.2.138","@iconify/vue":"^4.1.1","@intlify/unplugin-vue-i18n":"^0.10.1","@types/lodash-es":"^4.17.10","@types/node":"^15.14.9","@typescript-eslint/eslint-plugin":"^5.62.0","@typescript-eslint/parser":"^5.62.0","@unocss/preset-uno":"0.56.5","@unocss/transformer-directives":"0.56.5","@unocss/vite":"0.56.5","@vitejs/plugin-vue":"^4.4.1","@vitejs/plugin-vue-jsx":"^3.0.2","@vue/eslint-config-typescript":"^7.0.0","@vueuse/core":"^9.13.0",esbuild:"^0.19.11",eslint:"^8.53.0","eslint-config-prettier":"^8.10.0","eslint-plugin-import":"^2.29.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.18.1","gh-pages":"^6.1.1",less:"^4.2.0","less-loader":"^11.1.3",prettier:"^2.8.8","pretty-quick":"^3.1.3","rollup-plugin-visualizer":"^5.12.0",typescript:"^4.9.5","unplugin-auto-import":"^0.16.7","unplugin-icons":"^0.15.3","unplugin-vue-components":"^0.24.1","unplugin-vue-macros":"^2.6.2",vite:"^4.5.0","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-progress":"^0.0.7","vite-plugin-svg-icons":"^2.0.1","vue-eslint-parser":"^7.11.0","vue-tsc":"^1.6.4"},Se={name:_e,private:!0,version:ye,author:xe,scripts:we,dependencies:ze,devDependencies:Ce},R=Se;function Y(t){const[s,i]=t;return{name:s,version:i}}const G={name:R.name,version:R.version,dependencies:Object.entries(R.dependencies).map(t=>Y(t)),devDependencies:Object.entries(R.devDependencies).map(t=>Y(t))},$e=x({__name:"info",setup(t){const{version:s}=G,i="2024-06-20 11:55:17";return(p,l)=>{const r=oe,a=H,c=q,h=F;return v(),y(h,{title:"项目信息",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:u(()=>[b(c,{"label-placement":"left",bordered:"",size:"small",column:2},{default:u(()=>[b(a,{label:"版本"},{default:u(()=>[b(r,{type:"primary"},{default:u(()=>[I(T(A(s)),1)]),_:1})]),_:1}),b(a,{label:"最后构建时间"},{default:u(()=>[b(r,{type:"primary"},{default:u(()=>[I(T(A(i)),1)]),_:1})]),_:1})]),_:1})]),_:1})}}}),ke=x({__name:"dependency",setup(t){const{dependencies:s}=G;return(i,p)=>{const l=H,r=q,a=F;return v(),y(a,{title:"运行依赖",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:u(()=>[b(r,{"label-placement":"left",bordered:"",size:"small"},{default:u(()=>[(v(!0),Z(ee,null,te(A(s),c=>(v(),y(l,{key:c.name,label:c.name},{default:u(()=>[I(T(c.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),De=x({__name:"devDependency",setup(t){const{devDependencies:s}=G;return(i,p)=>{const l=H,r=q,a=F;return v(),y(a,{title:"开发依赖",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:u(()=>[b(r,{"label-placement":"left",bordered:"",size:"small"},{default:u(()=>[(v(!0),Z(ee,null,te(A(s),c=>(v(),y(l,{key:c.name,label:c.name},{default:u(()=>[I(T(c.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Te=x({__name:"index",setup(t){return(s,i)=>{const p=me;return v(),y(p,{vertical:"",size:16},{default:u(()=>[b($e),b(ke),b(De)]),_:1})}}});export{Te as default};
