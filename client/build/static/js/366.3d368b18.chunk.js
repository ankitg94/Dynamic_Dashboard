"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[366],{366:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var a=n(43),s=n(230),r=n(579);const c=t=>{let{data:e}=t;const n=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=s.Ltv(n.current),{width:a,height:r}=t.node().getBoundingClientRect();t.selectAll("*").remove();const c=20,l=40,i=a-l-30,o=r-c-30,d=t.append("g").attr("transform","translate(".concat(l,",").concat(c,")")),u=s.m4Y().domain([0,e.length]).range([0,i]),g=s.m4Y().domain([0,s.T9B(e)]).nice().range([o,0]);d.append("g").attr("transform","translate(0,".concat(o,")")).call(s.l78(u)),d.append("g").call(s.V4s(g)),d.append("path").datum(e).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",s.n8j().x(((t,e)=>u(e))).y((t=>g(t))))}),[e]),(0,r.jsx)("svg",{ref:n,style:{width:"100%",height:"500px"}})};var l=n(213),i=n(768);const o=()=>{const[t,e]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{const{data:n}=await l.A.get("/api/v1/data/get-intensity");try{null!==n&&void 0!==n&&n.success&&(i.Ay.success("Your all Data is given"),e((null===n||void 0===n?void 0:n.abc)||[]),console.log(t))}catch(a){i.Ay.error("Error in getting the Data")}})()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Intensity Occurrences"}),t.length>0?(0,r.jsx)(c,{data:t}):(0,r.jsx)("p",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=366.3d368b18.chunk.js.map