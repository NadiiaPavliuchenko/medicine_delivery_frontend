"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[786],{8931:(e,t,r)=>{r.d(t,{A:()=>i});const i=r(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},5786:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var i=r(5043),n=r(8931);const a=async()=>{const{data:e}=await n.A.get("/api/pharmacies");return e};var s=r(197);const o=s.Ay.div`
  @media screen and (min-width: 768px) {
    width: 20vw;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`,c=s.Ay.h3`
  margin-bottom: 20px;
`,d=s.Ay.li`
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  @media screen and (min-width: 1440px) {
    padding: 20px;
  }
  transition: background-color 0.5s ease-out;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    background-color: lightgray;
    transition: background-color 0.5s ease-out;
  }
  ${e=>e.selected&&"\n    background-color: lightgray;\n  "}
`;var l=r(579);const h=e=>{let{onSelect:t,onSelectAll:r,selectedPahrmacy:n}=e;const[s,h]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(async()=>{try{const e=await a();h(e)}catch(e){console.log("Error getting pharmacies list",e)}})()}),[]),(0,l.jsxs)(o,{children:[(0,l.jsx)(c,{children:"Pharmacies:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(d,{onClick:()=>r(),selected:null===n,children:(0,l.jsx)("p",{children:"All pharmacies"})},1),s&&s.map((e=>(0,l.jsx)(d,{onClick:()=>t(e._id),selected:n===e._id,children:(0,l.jsx)("p",{children:e.name})},e._id)))]})]})},p=s.Ay.ul`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;

  display: grid;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 330px);
  }
`,g=s.Ay.li`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 12px;
  display: block;
`,u=s.Ay.div`
  width: 280px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,x=s.Ay.h3`
  font-weight: 600;
  margin: 10px 0;
`,m=s.Ay.button`
  display: block;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`,y=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`,b=s.Ay.button`
  background-color: transparent;
  border: none;

  ${e=>"false"===e.favorite&&"color: black;"}
  ${e=>"true"===e.favorite&&"color: red;"}
`;var f=r(686);const v=e=>{let{drugsList:t,changeFavorite:r}=e;const[n,a]=(0,i.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,i.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(n))}),[n]);return(0,l.jsx)(p,{children:t.length>0&&t.map((e=>(0,l.jsxs)(g,{children:[(0,l.jsx)(u,{children:(0,l.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,l.jsx)(x,{children:e.name}),(0,l.jsxs)(y,{children:[(0,l.jsxs)("p",{children:["Price: ",e.price," \u20b4"]}),(0,l.jsx)(m,{type:"button",onClick:()=>(e=>{const t={...e,quantity:1},r=n.find((t=>t.name===e.name&&t.pharmacy===e.pharmacy));"undefined"!==typeof r?(r.quantity+=1,a([...n])):a((e=>[...e,t]))})(e),children:"Add to cart"}),(0,l.jsx)(b,{onClick:()=>r(e),favorite:e.favorite.toString(),children:(0,l.jsx)(f.MUx,{})})]})]},e._id)))})},j=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const i={};""!==t&&(i.date=t),""!==r&&(i.price=r);const{data:a}=await n.A.get(`/api/drugs/${e}`,{params:i});return a},w=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r={};""!==e&&(r.date=e),""!==t&&(r.price=t);const{data:i}=await n.A.get("/api/drugs",{params:r});return i},A=async(e,t)=>{const{data:r}=await n.A.patch(`/api/drugs/${e}/favorite`,{favorite:t});return r},k=s.Ay.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,C=s.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`,S=s.Ay.button`
  display: block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;

  width: 90%;
  height: 40px;
  transition: background-color 0.5s ease-out;

  &:hover,
  :focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
  &:active {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
  @media screen and (min-width: 768px) {
    width: 152px;
  }
`;var _=r(9221),P=r(9190),D=r(1915),E=r(7561);const F=e=>{let{price:t,date:r,onPriceChange:i,onDateChange:n,onDropFilters:a}=e;return(0,l.jsxs)(C,{children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(E.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(P.A,{id:"label-price",children:"Price"}),(0,l.jsxs)(_.A,{id:"select-price",value:t,label:"Price",onChange:i,children:[(0,l.jsx)(D.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(D.A,{value:"desc",children:"by descending price"}),(0,l.jsx)(D.A,{value:"asc",children:"by increasing price"})]})]}),(0,l.jsxs)(E.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(P.A,{id:"label-date",children:"Date"}),(0,l.jsxs)(_.A,{id:"select-date",value:r,label:"Date",onChange:n,children:[(0,l.jsx)(D.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(D.A,{value:"desc",children:"newest to oldest"}),(0,l.jsx)(D.A,{value:"asc",children:"oldest to newest"})]})]})]}),(0,l.jsx)(S,{type:"button",onClick:a,children:"Drop Filters"})]})},$=()=>{const[e,t]=(0,i.useState)(null),[r,n]=(0,i.useState)([]),[a,s]=(0,i.useState)(""),[o,c]=(0,i.useState)(""),d=(0,i.useCallback)((async()=>{try{const e=await w(a,o);n(e)}catch(e){console.log("Error while getting drugs list",e)}}),[a,o]);(0,i.useEffect)((()=>{e?(async()=>{try{const t=await j(e,a,o);n(t)}catch(t){console.log("Error while getting drugs list",t)}})():d(a,o)}),[d,e,a,o]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{price:o,date:a,onPriceChange:e=>{c(e.target.value)},onDateChange:e=>{s(e.target.value)},onDropFilters:()=>{s(""),c("")}}),(0,l.jsxs)(k,{children:[(0,l.jsx)(h,{onSelect:e=>{t(e)},onSelectAll:()=>{t(null)},selectedPahrmacy:e}),(0,l.jsx)(v,{drugsList:r,changeFavorite:async e=>{try{const t=await A(e._id,!e.favorite);n((e=>e.map((e=>e._id===t._id?{...e,favorite:t.favorite}:e))))}catch(t){console.log("Error while marking drug as favorite",t)}}})]})]})}}}]);
//# sourceMappingURL=786.16d5d827.chunk.js.map