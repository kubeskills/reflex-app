import{a as r,w as f,v as k}from"./chunk-QMGIS6GS-Bap335uN.js";import{j as o,C as p,b as x,c as y}from"./state-CvfPDXoC.js";import{N as v,J as w,r as b,p as _,M,O as $,L as E,K as L}from"./link-FsUPnWHT.js";import"./index-CcF0BCB0.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),d=t=>{const e=A(t);return e.charAt(0).toUpperCase()+e.slice(1)},l=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),z=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=r.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:c="",children:a,iconNode:u,...i},h)=>r.createElement("svg",{ref:h,...F,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:l("lucide",c),...!a&&!z(i)&&{"aria-hidden":"true"},...i},[...u.map(([g,C])=>r.createElement(g,C)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>{const n=r.forwardRef(({className:s,...c},a)=>r.createElement(I,{ref:a,iconNode:e,className:l(`lucide-${j(d(t))}`,`lucide-${t}`,s),...c}));return n.displayName=d(t),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],P=m("moon",N);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],W=m("sun",R);function Z(){const{resolvedColorMode:t}=r.useContext(p);return o(r.Fragment,{},t==="light"?o(r.Fragment,{},o(W,{})):o(r.Fragment,{},o(P,{})))}function B(){const{toggleColorMode:t}=r.useContext(p),[e,n]=r.useContext(x),s=r.useCallback(t,[e,y,t]);return o(L,{css:{padding:"6px",position:"fixed",top:"2rem",right:"2rem",background:"transparent",color:"inherit",zIndex:"20","&:hover":{cursor:"pointer"}},onClick:s},o(Z,{}))}const q=f(function(){return o(r.Fragment,{},o(v,{css:{padding:"16px"},size:"3"},o(B,{}),o(w,{align:"start",className:"rx-Stack",css:{minHeight:"85vh"},direction:"column",justify:"center",gap:"5"},o(b,{size:"9"},"Welcome to Reflex!"),o(_,{as:"p",size:"5"},"Get started by editing ",o(M,{},"podcast_discovery/podcast_discovery.py")),o($,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}}},o(k,{target:"_blank",to:"https://reflex.dev/docs/getting-started/introduction/"},o(E,{},"Check out our docs!"))))),o("title",{},"PodcastDiscovery | Index"),o("meta",{content:"favicon.ico",property:"og:image"}))});export{q as default};
