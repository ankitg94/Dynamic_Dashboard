"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[815],{815:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(43),r=a(213),c=a(58),l=a(768),n=(a(351),a(999)),d=a(579);const i=()=>{const[e,s]=(0,t.useState)({});(0,t.useEffect)((()=>{(async()=>{try{const e=await r.A.get("/api/v1/data/get-endyear"),a=e.data.end_year.reduce(((e,s)=>(s&&(e[s]=(e[s]||0)+1),e)),{});s(a),l.Ay.success("Data fetched successfully")}catch(e){l.Ay.error("Error fetching data"),console.error(e)}})()}),[]);const a={labels:Object.keys(e),datasets:[{label:"Occurrences",data:Object.values(e),backgroundColor:"#4BC0C0",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]};return(0,d.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,d.jsx)(n.A,{}),(0,d.jsx)(l.l$,{}),(0,d.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,d.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"End Year Occurrences"}),(0,d.jsx)("section",{children:(0,d.jsx)(c.yP,{data:a,options:{indexAxis:"x",plugins:{legend:{display:!1}},scales:{x:{beginAtZero:!0},y:{grid:{display:!1}}}}})})]})]})}},999:(e,s,a)=>{a.d(s,{A:()=>c});a(43);var t=a(475),r=a(579);const c=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:"flex justify-between items-center bg-gray-600 p-4",children:[(0,r.jsx)(t.N_,{to:"/",className:"text-white text-2xl",children:"BlackCoffer Assigment"}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)(t.N_,{to:"/",className:"text-white text-lg",children:"Home"}),(0,r.jsx)(t.N_,{to:"/dashboard",className:"text-white text-lg",children:"Dashboard"})]})]})})},351:(e,s,a)=>{var t=a(658);t.t1.register(...t.$L)}}]);
//# sourceMappingURL=815.7ed94aaa.chunk.js.map