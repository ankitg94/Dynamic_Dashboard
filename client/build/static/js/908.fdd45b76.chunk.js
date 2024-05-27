"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[908,366,289,134],{289:(e,r,a)=>{a.r(r),a.d(r,{default:()=>g});var s=a(43),t=a(213),l=a(658),c=a(58),n=a(579);l.t1.register(l.PP,l.kc,l.No,l.FN,l.hE,l.m_,l.s$,l.dN);const d=e=>{let{data:r,label:a,backgroundColor:s,borderColor:t,labels:l}=e;const d={labels:l,datasets:[{fill:!0,label:a,data:r,backgroundColor:s,borderColor:t}]};return(0,n.jsx)(c.N1,{options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1}},scales:{y:{beginAtZero:!0,grid:{display:!1}},x:{grid:{display:!1}}}},data:d})};var o=a(768);const i=["January","February","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],g=()=>{const[e,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/api/v1/data/get-Likehood");r(e.data.LikeHood),o.Ay.success("Data fetched successfully"),console.log(e.data.LikeHood)}catch(e){o.Ay.error("Error fetching data"),console.error(e)}})()}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.l$,{}),(0,n.jsx)("main",{className:"chart-container",children:(0,n.jsx)("section",{children:(0,n.jsx)(d,{data:e,label:"Users",borderColor:"rgb(53, 162, 255)",backgroundColor:"rgba(53, 162, 255,0.5)",labels:i})})})]})}},134:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var s=a(43),t=a(213),l=a(701),c=a(768),n=a(579);const d=()=>{const[e,r]=(0,s.useState)([]),[a,d]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/api/v1/data/get-country"),a=e.data.country.filter(Boolean).reduce(((e,r)=>(e[r]=(e[r]||0)+1,e)),{}),s=Object.keys(a),l=Object.values(a);r(s),d(l),c.Ay.success("Data fetched successfully")}catch(e){c.Ay.error("Error fetching data"),console.error(e)}})()}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(c.l$,{}),(0,n.jsxs)("main",{className:"chart-container",children:[(0,n.jsx)("h1",{children:"Country Distribution"}),(0,n.jsxs)("section",{children:[(0,n.jsx)(l.E,{data_1:a,data_2:[],title_1:"Country Count",title_2:"",bgColor_1:"rgba(53, 162, 255, 0.5)",bgColor_2:"",labels:e,horizontal:!0}),(0,n.jsx)("h2",{children:"Country Occurrences"})]})]})]})})}},366:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});var s=a(43),t=a(230),l=a(579);const c=e=>{let{data:r}=e;const a=(0,s.useRef)();return(0,s.useEffect)((()=>{const e=t.Ltv(a.current),{width:s,height:l}=e.node().getBoundingClientRect();e.selectAll("*").remove();const c=20,n=40,d=s-n-30,o=l-c-30,i=e.append("g").attr("transform","translate(".concat(n,",").concat(c,")")),g=t.m4Y().domain([0,r.length]).range([0,d]),h=t.m4Y().domain([0,t.T9B(r)]).nice().range([o,0]);i.append("g").attr("transform","translate(0,".concat(o,")")).call(t.l78(g)),i.append("g").call(t.V4s(h)),i.append("path").datum(r).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",t.n8j().x(((e,r)=>g(r))).y((e=>h(e))))}),[r]),(0,l.jsx)("svg",{ref:a,style:{width:"100%",height:"500px"}})};var n=a(213),d=a(768);const o=()=>{const[e,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{const{data:a}=await n.A.get("/api/v1/data/get-intensity");try{null!==a&&void 0!==a&&a.success&&(d.Ay.success("Your all Data is given"),r((null===a||void 0===a?void 0:a.abc)||[]),console.log(e))}catch(s){d.Ay.error("Error in getting the Data")}})()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Intensity Occurrences"}),e.length>0?(0,l.jsx)(c,{data:e}):(0,l.jsx)("p",{children:"Loading..."})]})}},161:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var s=a(43),t=a(213),l=a(58),c=a(768),n=(a(351),a(579));const d=()=>{const[e,r]=(0,s.useState)({});(0,s.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/api/v1/data/get-region"),a=e.data.Region.reduce(((e,r)=>(r&&(e[r]=(e[r]||0)+1),e)),{});r(a),c.Ay.success("Data fetched successfully")}catch(e){c.Ay.error("Error fetching data"),console.error(e)}})()}),[]);const a={labels:Object.keys(e),datasets:[{label:"Occurrences",data:Object.values(e),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#FF6384","#36A2EB","#FFCE56","#4BC0C0"],borderColor:"rgba(255, 255, 255, 1)",borderWidth:1}]};return(0,n.jsxs)("div",{children:[(0,n.jsx)(c.l$,{}),(0,n.jsxs)("main",{className:"chart-container",children:[(0,n.jsx)("h1",{children:"Region Occurrences"}),(0,n.jsx)("section",{children:(0,n.jsx)(l.nu,{data:a})})]})]})}},19:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var s=a(43),t=a(213),l=a(58),c=a(768),n=(a(351),a(579));const d=()=>{const[e,r]=(0,s.useState)({});(0,s.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/api/v1/data/get-topics"),a=e.data.topic.reduce(((e,r)=>(r&&(e[r]=(e[r]||0)+1),e)),{});r(a),c.Ay.success("Data fetched successfully")}catch(e){c.Ay.error("Error fetching data"),console.error(e)}})()}),[]);const a={labels:Object.keys(e),datasets:[{label:"Occurrences",data:Object.values(e),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#FF6384","#36A2EB","#FFCE56","#4BC0C0"],borderColor:"rgba(255, 255, 255, 1)",borderWidth:2}]};return(0,n.jsxs)("div",{children:[(0,n.jsx)(c.l$,{}),(0,n.jsxs)("main",{className:"chart-container",children:[(0,n.jsx)("h1",{children:"Topic Occurrences"}),(0,n.jsx)("section",{children:(0,n.jsx)(l.Fq,{data:a})})]})]})}},262:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var s=a(43),t=a(213),l=a(58),c=a(768),n=(a(351),a(579));const d=()=>{const[e,r]=(0,s.useState)({});(0,s.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/api/v1/data/get-Year"),a=e.data.year.reduce(((e,r)=>(r&&(e[r]=(e[r]||0)+1),e)),{});r(a),c.Ay.success("Data fetched successfully"),console.log(a)}catch(e){c.Ay.error("Error fetching data"),console.error(e)}})()}),[]);const a={labels:Object.keys(e),datasets:[{label:"Occurrences",data:Object.values(e),backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(53, 162, 235, 1)",borderWidth:1}]};return(0,n.jsxs)("div",{children:[(0,n.jsx)(c.l$,{}),(0,n.jsxs)("main",{className:"chart-container",children:[(0,n.jsx)("h1",{children:"Year Occurrences"}),(0,n.jsx)("section",{children:(0,n.jsx)(l.yP,{data:a,options:{scales:{y:{beginAtZero:!0}}}})})]})]})}},908:(e,r,a)=>{a.r(r),a.d(r,{default:()=>m});a(43);var s=a(999),t=a(475),l=a(804),c=a(825),n=a(184),d=a(720),o=a(394),i=a(366),g=a(289),h=a(262),x=a(134),y=a(19),b=a(161),u=a(579);const j=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"h-screen flex",children:[(0,u.jsx)("div",{className:"w-1/4 bg-gray-100 h-screen",children:(0,u.jsx)("div",{className:"p-4 flex flex-col items-center",children:(0,u.jsxs)("ul",{className:"space-y-2 ",children:[(0,u.jsxs)(t.N_,{to:"/Intensity",className:"flex items-center font-bold p-2 w-36 text-gray-100 rounded-lg bg-gray-50 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(l.BUA,{}),(0,u.jsx)("span",{className:"ml-2",children:"Intensity "})]}),(0,u.jsxs)(t.N_,{to:"/Likelihood",className:"flex items-center font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(c.F8A,{}),(0,u.jsx)("span",{className:"ml-2",children:"Likelihood"})]}),(0,u.jsxs)(t.N_,{to:"/year",className:"flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(n.QsN,{}),(0,u.jsx)("span",{className:"ml-6",children:"Year"})]}),(0,u.jsxs)(t.N_,{to:"/Country",className:"flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(n.Ugi,{}),(0,u.jsx)("span",{className:"ml-6",children:"Country"})]}),(0,u.jsxs)(t.N_,{to:"/Topics",className:"flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(d.vNN,{}),(0,u.jsx)("span",{className:"ml-6",children:"Topics"})]}),(0,u.jsxs)(t.N_,{to:"/Region",className:"flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:[(0,u.jsx)(o.h54,{}),(0,u.jsx)("span",{className:"ml-6",children:"Region"})]})]})})}),(0,u.jsxs)("div",{className:"w-3/4  h-screen",children:[(0,u.jsx)("div",{className:"p-4",children:(0,u.jsxs)("ul",{className:"space-x-2 flex flex-row m-2",children:[(0,u.jsx)(t.N_,{to:"/SectorFilter",className:"flex items-center font-bold  w-36 h-12  text-gray-900 rounded-lg bg-red-500 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-2",children:"Sectors"})}),(0,u.jsx)(t.N_,{to:"/endYearFilter",className:"flex  items-center font-bold  w-36  h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"EndYear"})}),(0,u.jsx)(t.N_,{to:"/countryfilter",className:"flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"Country"})}),(0,u.jsx)(t.N_,{to:"/topicFilter",className:"flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"Topics"})}),(0,u.jsx)(t.N_,{to:"/regionFilter",className:"flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"Region "})}),(0,u.jsx)(t.N_,{to:"/PestFilter",className:"flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"PEST"})}),(0,u.jsx)(t.N_,{to:"/sourceFilter",className:"flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700",children:(0,u.jsx)("span",{className:"ml-6",children:"Source"})})]})}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"Intensity Graph"}),(0,u.jsx)(i.default,{})]}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"LikeHood Graph"}),(0,u.jsx)(g.default,{})]}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"Year Graph"}),(0,u.jsx)(h.default,{})]}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"Country Graph"}),(0,u.jsx)(x.default,{})]}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"Topic Graph"}),(0,u.jsx)(y.default,{})]}),(0,u.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[(0,u.jsx)("h1",{className:"font-bold text-4xl",children:"RegionChart"}),(0,u.jsx)(b.default,{})]})]})]})}),m=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.A,{}),(0,u.jsx)(j,{})]})},701:(e,r,a)=>{a.d(r,{E:()=>n});a(43);var s=a(658),t=a(58),l=a(579);s.t1.register(s.PP,s.kc,s.E8,s.hE,s.m_,s.s$);const c=["January","February","March","April","May","June","July"],n=e=>{let{data_1:r=[],data_2:a=[],title_1:s,title_2:n,bgColor_1:d,bgColor_2:o,horizontal:i=!1,labels:g=c}=e;const h={responsive:!0,indexAxis:i?"y":"x",plugins:{legend:{display:!1},title:{display:!1}},scales:{y:{beginAtZero:!0,grid:{display:!1}},x:{grid:{display:!1}}}},x={labels:g,datasets:[{label:s,data:r,backgroundColor:d,barThickness:"flex",barPercentage:1,categoryPercentage:.4}]};return(0,l.jsx)(t.yP,{options:h,data:x})}},999:(e,r,a)=>{a.d(r,{A:()=>l});a(43);var s=a(475),t=a(579);const l=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:"flex justify-between items-center bg-gray-600 p-4",children:[(0,t.jsx)(s.N_,{to:"/",className:"text-white text-2xl",children:"BlackCoffer Assigment"}),(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsx)(s.N_,{to:"/",className:"text-white text-lg",children:"Home"}),(0,t.jsx)(s.N_,{to:"/dashboard",className:"text-white text-lg",children:"Dashboard"})]})]})})}}]);
//# sourceMappingURL=908.fdd45b76.chunk.js.map