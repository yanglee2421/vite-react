import{j as u,p as D,q as G,t as C,K as z,A as W,_ as M,v as X}from"./useMergedState-f9769ca5.js";import{r as o}from"./jsx-runtime-d4f0a224.js";import{K as _}from"./Keyframes-0c92003a.js";const F=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:i}=e,r=u({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),l=u({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),c=o.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return o.createElement("span",{className:u(t,r,l,n),style:Object.assign(Object.assign({},c),a)})},O=F,K=new _("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),j=e=>({height:e,lineHeight:`${e}px`}),f=e=>Object.assign({width:e},j(e)),V=e=>({position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:K,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}),P=e=>Object.assign({width:e*5,minWidth:e*5},j(e)),J=e=>{const{skeletonAvatarCls:t,color:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},f(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(s)),[`${t}${t}-sm`]:Object.assign({},f(i))}},Q=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:i,color:r}=e;return{[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:r,borderRadius:n},P(t)),[`${a}-lg`]:Object.assign({},P(s)),[`${a}-sm`]:Object.assign({},P(i))}},q=e=>Object.assign({width:e},j(e)),U=e=>{const{skeletonImageCls:t,imageSizeBase:n,color:a,borderRadiusSM:s}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},q(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},q(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},I=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},B=e=>Object.assign({width:e*2,minWidth:e*2},j(e)),Y=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i,color:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:r,borderRadius:t,width:a*2,minWidth:a*2},B(a))},I(e,a,n)),{[`${n}-lg`]:Object.assign({},B(s))}),I(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},B(i))}),I(e,i,`${n}-sm`))},Z=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:i,skeletonInputCls:r,skeletonImageCls:l,controlHeight:c,controlHeightLG:g,controlHeightSM:h,color:d,padding:w,marginSM:m,borderRadius:E,skeletonTitleHeight:y,skeletonBlockRadius:$,skeletonParagraphLineHeight:p,controlHeightXS:b,skeletonParagraphMarginTop:v}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:w,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},f(c)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},f(g)),[`${n}-sm`]:Object.assign({},f(h))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${a}`]:{width:"100%",height:y,background:d,borderRadius:$,[`+ ${s}`]:{marginBlockStart:h}},[`${s}`]:{padding:0,"> li":{width:"100%",height:p,listStyle:"none",background:d,borderRadius:$,"+ li":{marginBlockStart:b}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:E}}},[`${t}-with-avatar ${t}-content`]:{[`${a}`]:{marginBlockStart:m,[`+ ${s}`]:{marginBlockStart:v}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Y(e)),J(e)),Q(e)),U(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${r}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${i},
        ${r},
        ${l}
      `]:Object.assign({},V(e))}}},k=D("Skeleton",e=>{const{componentCls:t}=e,n=G(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Z(n)]},e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n}}),ee=e=>{const{prefixCls:t,className:n,active:a,shape:s="circle",size:i="default"}=e,{getPrefixCls:r}=o.useContext(C),l=r("skeleton",t),[c,g]=k(l),h=z(e,["prefixCls","className"]),d=u(l,`${l}-element`,{[`${l}-active`]:a},n,g);return c(o.createElement("div",{className:d},o.createElement(O,Object.assign({prefixCls:`${l}-avatar`,shape:s,size:i},h))))},te=ee,ne=e=>{const{prefixCls:t,className:n,active:a,block:s=!1,size:i="default"}=e,{getPrefixCls:r}=o.useContext(C),l=r("skeleton",t),[c,g]=k(l),h=z(e,["prefixCls"]),d=u(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:s},n,g);return c(o.createElement("div",{className:d},o.createElement(O,Object.assign({prefixCls:`${l}-button`,size:i},h))))},se=ne;var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const le=ae;var L=function(t,n){return o.createElement(W,M(M({},t),{},{ref:n,icon:le}))};L.displayName="DotChartOutlined";const oe=o.forwardRef(L),ie=e=>{const{prefixCls:t,className:n,style:a,active:s,children:i}=e,{getPrefixCls:r}=o.useContext(C),l=r("skeleton",t),[c,g]=k(l),h=u(l,`${l}-element`,{[`${l}-active`]:s},g,n),d=i??o.createElement(oe,null);return c(o.createElement("div",{className:h},o.createElement("div",{className:u(`${l}-image`,n),style:a},d)))},re=ie,ce="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",ge=e=>{const{prefixCls:t,className:n,style:a,active:s}=e,{getPrefixCls:i}=o.useContext(C),r=i("skeleton",t),[l,c]=k(r),g=u(r,`${r}-element`,{[`${r}-active`]:s},n,c);return l(o.createElement("div",{className:g},o.createElement("div",{className:u(`${r}-image`,n),style:a},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},o.createElement("path",{d:ce,className:`${r}-image-path`})))))},de=ge,me=e=>{const{prefixCls:t,className:n,active:a,block:s,size:i="default"}=e,{getPrefixCls:r}=o.useContext(C),l=r("skeleton",t),[c,g]=k(l),h=z(e,["prefixCls"]),d=u(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:s},n,g);return c(o.createElement("div",{className:d},o.createElement(O,Object.assign({prefixCls:`${l}-input`,size:i},h))))},ue=me,he=e=>{const t=l=>{const{width:c,rows:g=2}=e;if(Array.isArray(c))return c[l];if(g-1===l)return c},{prefixCls:n,className:a,style:s,rows:i}=e,r=X(Array(i)).map((l,c)=>o.createElement("li",{key:c,style:{width:t(c)}}));return o.createElement("ul",{className:u(n,a),style:s},r)},$e=he,pe=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return o.createElement("h3",{className:u(t,n),style:Object.assign({width:a},s)})},be=pe;function R(e){return e&&typeof e=="object"?e:{}}function fe(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Ce(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function ke(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const S=e=>{const{prefixCls:t,loading:n,className:a,style:s,children:i,avatar:r=!1,title:l=!0,paragraph:c=!0,active:g,round:h}=e,{getPrefixCls:d,direction:w}=o.useContext(C),m=d("skeleton",t),[E,y]=k(m);if(n||!("loading"in e)){const $=!!r,p=!!l,b=!!c;let v;if($){const x=Object.assign(Object.assign({prefixCls:`${m}-avatar`},fe(p,b)),R(r));v=o.createElement("div",{className:`${m}-header`},o.createElement(O,Object.assign({},x)))}let H;if(p||b){let x;if(p){const N=Object.assign(Object.assign({prefixCls:`${m}-title`},Ce($,b)),R(l));x=o.createElement(be,Object.assign({},N))}let A;if(b){const N=Object.assign(Object.assign({prefixCls:`${m}-paragraph`},ke($,p)),R(c));A=o.createElement($e,Object.assign({},N))}H=o.createElement("div",{className:`${m}-content`},x,A)}const T=u(m,{[`${m}-with-avatar`]:$,[`${m}-active`]:g,[`${m}-rtl`]:w==="rtl",[`${m}-round`]:h},a,y);return E(o.createElement("div",{className:T,style:s},v,H))}return typeof i<"u"?i:null};S.Button=se;S.Avatar=te;S.Input=ue;S.Image=de;S.Node=re;const Oe=S;export{Oe as S};
