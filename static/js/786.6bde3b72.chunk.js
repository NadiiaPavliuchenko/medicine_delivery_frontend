"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[786],{8931:(e,t,i)=>{i.d(t,{A:()=>r});const r=i(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},5786:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var r=i(5043),n=i(8931);const a=async()=>{const{data:e}=await n.A.get("/api/pharmacies");return e};var s=i(197);const c=s.Ay.div`
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
`,d=s.Ay.h3`
  margin-bottom: 20px;
`,o=s.Ay.li`
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
`;var l=i(579);const h=e=>{let{onSelect:t,onSelectAll:i,selectedPahrmacy:n}=e;const[s,h]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{const e=await a();h(e)}catch(e){console.log("Error getting pharmacies list",e)}})()}),[]),(0,l.jsxs)(c,{children:[(0,l.jsx)(d,{children:"Pharmacies:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(o,{onClick:()=>i(),selected:null===n,children:(0,l.jsx)("p",{children:"All pharmacies"})},1),s&&s.map((e=>(0,l.jsx)(o,{onClick:()=>t(e._id),selected:n===e._id,children:(0,l.jsx)("p",{children:e.name})},e._id)))]})]})},p=s.Ay.ul`
  width: 80vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 10px;
  overflow-y: scroll;
`,x=s.Ay.li`
  border: 1px solid #333;
  border-radius: 5px;
  width: calc((100% / 3) - 10px);
  height: 300px;
`,u=s.Ay.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
`,g=s.Ay.p`
  font-weight: 600;
  margin: 5px;
`,m=s.Ay.button`
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
  margin: 20px 5px;
`,f=s.Ay.button`
  background-color: transparent;
  border: none;

  ${e=>"false"===e.favorite&&"color: black;"}
  ${e=>"true"===e.favorite&&"color: red;"}
`;var v=i(686);const j=e=>{let{drugsList:t,changeFavorite:i}=e;const[n,a]=(0,r.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,r.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(n))}),[n]);return(0,l.jsx)(p,{children:t.length>0&&t.map((e=>(0,l.jsxs)(x,{children:[(0,l.jsx)(u,{children:(0,l.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,l.jsx)(g,{children:e.name}),(0,l.jsxs)(y,{children:[(0,l.jsxs)("p",{children:["Price: ",e.price," \u20b4"]}),(0,l.jsx)(m,{type:"button",onClick:()=>(e=>{const t={...e,quantity:1},i=n.find((t=>t.name===e.name&&t.pharmacy===e.pharmacy));"undefined"!==typeof i?(i.quantity+=1,a([...n])):a((e=>[...e,t]))})(e),children:"Add to cart"}),(0,l.jsx)(f,{onClick:()=>i(e),favorite:e.favorite.toString(),children:(0,l.jsx)(v.MUx,{})})]})]},e._id)))})},b=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r={};""!==t&&(r.date=t),""!==i&&(r.price=i);const{data:a}=await n.A.get(`/api/drugs/${e}`,{params:r});return a},w=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i={};""!==e&&(i.date=e),""!==t&&(i.price=t);const{data:r}=await n.A.get("/api/drugs",{params:i});return r},A=async(e,t)=>{const{data:i}=await n.A.patch(`/api/drugs/${e}/favorite`,{favorite:t});return i},k=s.Ay.div`
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

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: flex-end;
  }
`,S=s.Ay.div``,_=s.Ay.button`
  display: block;
  cursor: pointer;

  width: 90%;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 152px;
  }
`;var P=i(9221),D=i(9190),E=i(1915),F=i(7561);const $=e=>{let{price:t,date:i,onPriceChange:r,onDateChange:n,onDropFilters:a}=e;return(0,l.jsxs)(C,{children:[(0,l.jsxs)(S,{children:[(0,l.jsxs)(F.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(D.A,{id:"label-price",children:"Price"}),(0,l.jsxs)(P.A,{id:"select-price",value:t,label:"Price",onChange:r,children:[(0,l.jsx)(E.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(E.A,{value:"desc",children:"by descending price"}),(0,l.jsx)(E.A,{value:"asc",children:"by increasing price"})]})]}),(0,l.jsxs)(F.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(D.A,{id:"label-date",children:"Date"}),(0,l.jsxs)(P.A,{id:"select-date",value:i,label:"Date",onChange:n,children:[(0,l.jsx)(E.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(E.A,{value:"desc",children:"newest to oldest"}),(0,l.jsx)(E.A,{value:"asc",children:"oldest to newest"})]})]})]}),(0,l.jsx)(_,{type:"button",onClick:a,children:"Drop Filters"})]})},N=()=>{const[e,t]=(0,r.useState)(null),[i,n]=(0,r.useState)([]),[a,s]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),o=(0,r.useCallback)((async()=>{try{const e=await w(a,c);n(e)}catch(e){console.log("Error while getting drugs list",e)}}),[a,c]);(0,r.useEffect)((()=>{e?(async()=>{try{const t=await b(e,a,c);n(t)}catch(t){console.log("Error while getting drugs list",t)}})():o(a,c)}),[o,e,a,c]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)($,{price:c,date:a,onPriceChange:e=>{d(e.target.value)},onDateChange:e=>{s(e.target.value)},onDropFilters:()=>{s(""),d("")}}),(0,l.jsxs)(k,{children:[(0,l.jsx)(h,{onSelect:e=>{t(e)},onSelectAll:()=>{t(null)},selectedPahrmacy:e}),(0,l.jsx)(j,{drugsList:i,changeFavorite:async e=>{try{const t=await A(e._id,!e.favorite);n((e=>e.map((e=>e._id===t._id?{...e,favorite:t.favorite}:e))))}catch(t){console.log("Error while marking drug as favorite",t)}}})]})]})}}}]);
//# sourceMappingURL=786.6bde3b72.chunk.js.map