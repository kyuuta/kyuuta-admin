import{d as z,m as E,s as I,r as M,a as U,o as _,n as p,w as e,e as o,h as t,ch as j,i as d,c as f,aP as v,b7 as h,t as g,f as r,l as q,p as H,b5 as J,b6 as O,_ as Q}from"./index-8719b80b.js";import{c as W}from"./index-c20855f8.js";import{c as X,_ as Y}from"./conversion-2d2f5d31.js";import{A as Z,_ as ee}from"./avatar_dark-7394c122.js";import{u as ne,_ as oe,a as te}from"./useDict-c94594a7.js";import{_ as ae}from"./Input-3f43b3ae.js";import{_ as se,a as _e}from"./FormItem-26884b0c.js";import{_ as ce}from"./Tag-a7267645.js";import{_ as le}from"./Space-3a388b05.js";import{_ as ue}from"./Spin-855bdc26.js";import{_ as pe}from"./Divider-1a903eb3.js";import"./Tooltip-35d0a7f2.js";import"./use-compitable-af4af851.js";const P=l=>(J("data-v-c8f67ec7"),l=l(),O(),l),re={class:"price"},ie=P(()=>r("span",null,"￥",-1)),me={class:"count"},de=P(()=>r("span",null,"起",-1)),fe=z({name:"TableProductIndex",__name:"index",setup(l){const{routerPush:S}=E(),{dict:b,dictLoading:$}=ne(["brand","category"]),i=I(!1),a=M({brand:void 0,category:void 0,name:""}),k=I([]);U(()=>u());const B=s=>{S({path:`/table/product/detail/${s}`})},u=()=>{i.value=!0,W(a.value).then(s=>{k.value=s.data}).finally(()=>{i.value=!1})},x=(s,c)=>{a.value[s]=a.value[s]===c?void 0:c,u()};return(s,c)=>{const F=ae,L=q,T=ee,m=se,y=ce,w=le,V=_e,N=ue,A=pe,G=Y,C=H,K=oe,R=te;return _(),p(C,{class:"rounded-6px shadow-sm",bordered:!1},{default:e(()=>[o(N,{show:t($)},{default:e(()=>[o(V,{"label-placement":"left",showFeedback:!1},{default:e(()=>[o(m,{class:"mb-6px",label:"商品名称"},{default:e(()=>[o(T,null,{default:e(()=>[o(F,{value:t(a).name,"onUpdate:value":c[0]||(c[0]=n=>t(a).name=n),style:{width:"20%"},placeholder:"请输入商品名称",clearable:"",onKeyup:j(u,["enter"])},null,8,["value"]),o(L,{type:"primary",onClick:u},{default:e(()=>[d(" 搜索 ")]),_:1})]),_:1})]),_:1}),o(m,{class:"mb-6px",label:"商品类目:"},{default:e(()=>[o(w,null,{default:e(()=>[(_(!0),f(v,null,h(t(b).category,n=>(_(),p(y,{key:n.value,checkable:"",checked:t(a).category===n.value,onClick:D=>x("category",n.value)},{default:e(()=>[d(g(n.name),1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})]),_:1}),o(m,{label:"商品品牌:"},{default:e(()=>[o(w,null,{default:e(()=>[(_(!0),f(v,null,h(t(b).brand,n=>(_(),p(y,{key:n.value,checkable:"",checked:t(a).brand===n.value,onClick:D=>x("brand",n.value)},{default:e(()=>[d(g(n.name),1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["show"]),o(A),o(N,{class:"min-h-100px",show:t(i)},{default:e(()=>[o(R,{"x-gap":"24",cols:5},{default:e(()=>[(_(!0),f(v,null,h(t(k),n=>(_(),p(K,{key:n.id},{default:e(()=>[o(C,{class:"cursor-pointer",title:n.name,onClick:D=>B(n.id)},{cover:e(()=>[o(G,{previewDisabled:"",lazy:"",src:t(Z)},null,8,["src"])]),default:e(()=>[r("p",re,[ie,r("span",me,g(t(X)(n.minSellPrice)),1),de])]),_:2},1032,["title","onClick"])]),_:2},1024))),128))]),_:1})]),_:1},8,["show"])]),_:1})}}});const Se=Q(fe,[["__scopeId","data-v-c8f67ec7"]]);export{Se as default};
