"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[91],{91:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(43),l=s(213),r=s(701),c=s(768),n=s(999),o=s(579);const i=()=>{const[e,t]=(0,a.useState)([]),[s,i]=(0,a.useState)([]),[d,u]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await l.A.get("/api/v1/data/get-pestle"),s=e.data.Pest.filter(Boolean).reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),a=Object.keys(s),r=Object.values(s);t(a),i(r),c.Ay.success("Data fetched successfully")}catch(e){c.Ay.error("Error fetching data"),console.error(e)}})()}),[]);const x=e.filter((e=>e.toLowerCase().includes(d.toLowerCase()))),h=x.map((t=>s[e.indexOf(t)]));return(0,o.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,o.jsx)(n.A,{}),(0,o.jsx)(c.l$,{}),(0,o.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,o.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Source Distribution"}),(0,o.jsxs)("section",{children:[(0,o.jsx)("input",{type:"text",placeholder:"Filter sources...",value:d,onChange:e=>{u(e.target.value)},className:"w-full px-4 py-2 mb-4 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"}),(0,o.jsx)(r.E,{data_1:h,data_2:[],title_1:"Country Count",title_2:"",bgColor_1:"rgba(53, 162, 255, 0.5)",bgColor_2:"",labels:x,horizontal:!0}),(0,o.jsx)("h2",{className:"text-xl font-bold mt-4",children:"Pest Occurrences"})]})]})]})}},701:(e,t,s)=>{s.d(t,{E:()=>n});s(43);var a=s(658),l=s(58),r=s(579);a.t1.register(a.PP,a.kc,a.E8,a.hE,a.m_,a.s$);const c=["January","February","March","April","May","June","July"],n=e=>{let{data_1:t=[],data_2:s=[],title_1:a,title_2:n,bgColor_1:o,bgColor_2:i,horizontal:d=!1,labels:u=c}=e;const x={responsive:!0,indexAxis:d?"y":"x",plugins:{legend:{display:!1},title:{display:!1}},scales:{y:{beginAtZero:!0,grid:{display:!1}},x:{grid:{display:!1}}}},h={labels:u,datasets:[{label:a,data:t,backgroundColor:o,barThickness:"flex",barPercentage:1,categoryPercentage:.4}]};return(0,r.jsx)(l.yP,{options:x,data:h})}},999:(e,t,s)=>{s.d(t,{A:()=>r});s(43);var a=s(475),l=s(579);const r=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("nav",{className:"flex justify-between items-center bg-gray-600 p-4",children:[(0,l.jsx)(a.N_,{to:"/",className:"text-white text-2xl",children:"BlackCoffer Assigment"}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)(a.N_,{to:"/",className:"text-white text-lg",children:"Home"}),(0,l.jsx)(a.N_,{to:"/dashboard",className:"text-white text-lg",children:"Dashboard"})]})]})})}}]);
//# sourceMappingURL=91.612d89cd.chunk.js.map