import{l as i,r as a,j as e,L as l}from"./index-BwiYcdRJ.js";import{R as m}from"./ruler-dimension-line-B85SQlVR.js";import{M as h}from"./move-right-B1K9mXFb.js";import{c as o}from"./createLucideIcon-CY06o7LR.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],d=o("moon",p);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],u=o("sun",x),N=()=>{const n=i().pathname==="/compare",[s,r]=a.useState(!1);a.useEffect(()=>{const t=window.document.documentElement;s?t==null||t.classList.add("dark"):t==null||t.classList.remove("dark")},[s]);const c=()=>r(t=>!t);return e.jsxs("header",{className:"h-[90px] w-full flex justify-between items-center px-5 lg:px-20 py-6 transition-colors",children:[e.jsx(l,{to:"/",children:e.jsx(m,{strokeWidth:1.5,className:"text-yellow-600 lg:size-[48px] size-[38px]"})}),e.jsxs("span",{className:"flex space-x-5 items-center",children:[!n&&e.jsxs("p",{className:"text-sm space-x-3 text-slate-800 items-center underline hover:opacity-80 transition-all hidden lg:flex",children:[e.jsx("span",{children:"Change themes here"}),e.jsx(h,{className:"arrow block relative",strokeWidth:1.5})]}),e.jsx("button",{type:"button",onClick:c,"aria-label":"Toggle Theme",className:"rounded-full p-2 flex justify-center items-center cursor-pointer transition-all",children:s?e.jsx(d,{className:"text-slate-800",strokeWidth:1.4}):e.jsx(u,{className:"text-amber-700",strokeWidth:1.4})})]})]})};export{N as default};
