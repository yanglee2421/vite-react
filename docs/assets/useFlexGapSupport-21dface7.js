import{r as n}from"./jsx-runtime-d4f0a224.js";import{L as l}from"./useMergedState-f9769ca5.js";const d=()=>l()&&window.document.documentElement;let t;const r=()=>{if(!d())return!1;if(t!==void 0)return t;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),t=e.scrollHeight===1,document.body.removeChild(e),t},s=()=>{const[e,o]=n.useState(!1);return n.useEffect(()=>{o(r())},[]),e};export{s as u};
