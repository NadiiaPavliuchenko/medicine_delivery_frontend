"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[786],{8931:(e,r,t)=>{t.d(r,{A:()=>i});const i=t(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},5786:(e,r,t)=>{t.r(r),t.d(r,{default:()=>$});var i=t(5043),n=t(8931);const a=async()=>{const{data:e}=await n.A.get("/api/pharmacies");return e};var o=t(197);const d=o.Ay.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 20vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 80vh;
    padding: 15px;

    justify-content: center;
  }
`,s=o.Ay.h3`
  margin-bottom: 20px;
`,c=o.Ay.li`
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
`;var l=t(579);const h=e=>{let{onSelect:r,onSelectAll:t,selectedPahrmacy:n}=e;const[o,h]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(async()=>{try{const e=await a();h(e)}catch(e){console.log("Error getting pharmacies list",e)}})()}),[]),(0,l.jsxs)(d,{children:[(0,l.jsx)(s,{children:"Pharmacies:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(c,{onClick:()=>t(),selected:null===n,children:(0,l.jsx)("p",{children:"All pharmacies"})},1),o&&o.map((e=>(0,l.jsx)(c,{onClick:()=>r(e._id),selected:n===e._id,children:(0,l.jsx)("p",{children:e.name})},e._id)))]})]})},p=o.Ay.ul`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;

  display: grid;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;

    &:hover {
      background-color: rgba(#fff, 0.3);
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    background-clip: content-box;
    border: 5px solid transparent;
    border-radius: 100px;

    &:hover {
      background-color: #5f5d5d;
    }
  }

  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 330px);
  }
`,g=o.Ay.li`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 12px;
  display: block;
`,u=o.Ay.div`
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
`,x=o.Ay.h3`
  font-weight: 600;
  margin: 10px 0;
`,m=o.Ay.button`
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
`,b=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`,y=o.Ay.button`
  background-color: transparent;
  border: none;

  ${e=>"false"===e.favorite&&"color: black;"}
  ${e=>"true"===e.favorite&&"color: red;"}
`;var f=t(686);const v=e=>{let{drugsList:r,changeFavorite:t}=e;const[n,a]=(0,i.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,i.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(n))}),[n]);return(0,l.jsx)(p,{children:r.length>0&&r.map((e=>(0,l.jsxs)(g,{children:[(0,l.jsx)(u,{children:(0,l.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,l.jsx)(x,{children:e.name}),(0,l.jsxs)(b,{children:[(0,l.jsxs)("p",{children:["Price: ",e.price," \u20b4"]}),(0,l.jsx)(m,{type:"button",onClick:()=>(e=>{const r={...e,quantity:1},t=n.find((r=>r.name===e.name&&r.pharmacy===e.pharmacy));"undefined"!==typeof t?(t.quantity+=1,a([...n])):a((e=>[...e,r]))})(e),children:"Add to cart"}),(0,l.jsx)(y,{onClick:()=>t(e),favorite:e.favorite.toString(),children:(0,l.jsx)(f.MUx,{})})]})]},e._id)))})},w=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const i={};""!==r&&(i.date=r),""!==t&&(i.price=t);const{data:a}=await n.A.get(`/api/drugs/${e}`,{params:i});return a},j=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const t={};""!==e&&(t.date=e),""!==r&&(t.price=r);const{data:i}=await n.A.get("/api/drugs",{params:t});return i},k=async(e,r)=>{const{data:t}=await n.A.patch(`/api/drugs/${e}/favorite`,{favorite:r});return t},A=o.Ay.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,C=o.Ay.div`
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
`,S=o.Ay.button`
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
`;var _=t(9221),P=t(9190),D=t(1915),E=t(7561);const F=e=>{let{price:r,date:t,onPriceChange:i,onDateChange:n,onDropFilters:a}=e;return(0,l.jsxs)(C,{children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(E.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(P.A,{id:"label-price",children:"Price"}),(0,l.jsxs)(_.A,{id:"select-price",value:r,label:"Price",onChange:i,children:[(0,l.jsx)(D.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(D.A,{value:"desc",children:"by descending price"}),(0,l.jsx)(D.A,{value:"asc",children:"by increasing price"})]})]}),(0,l.jsxs)(E.A,{sx:{m:1,width:152},size:"small",children:[(0,l.jsx)(P.A,{id:"label-date",children:"Date"}),(0,l.jsxs)(_.A,{id:"select-date",value:t,label:"Date",onChange:n,children:[(0,l.jsx)(D.A,{value:"",children:(0,l.jsx)("em",{children:"None"})}),(0,l.jsx)(D.A,{value:"desc",children:"newest to oldest"}),(0,l.jsx)(D.A,{value:"asc",children:"oldest to newest"})]})]})]}),(0,l.jsx)(S,{type:"button",onClick:a,children:"Drop Filters"})]})},$=()=>{const[e,r]=(0,i.useState)(null),[t,n]=(0,i.useState)([]),[a,o]=(0,i.useState)(""),[d,s]=(0,i.useState)(""),c=(0,i.useCallback)((async()=>{try{const e=await j(a,d);n(e)}catch(e){console.log("Error while getting drugs list",e)}}),[a,d]);(0,i.useEffect)((()=>{e?(async()=>{try{const r=await w(e,a,d);n(r)}catch(r){console.log("Error while getting drugs list",r)}})():c(a,d)}),[c,e,a,d]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{price:d,date:a,onPriceChange:e=>{s(e.target.value)},onDateChange:e=>{o(e.target.value)},onDropFilters:()=>{o(""),s("")}}),(0,l.jsxs)(A,{children:[(0,l.jsx)(h,{onSelect:e=>{r(e)},onSelectAll:()=>{r(null)},selectedPahrmacy:e}),(0,l.jsx)(v,{drugsList:t,changeFavorite:async e=>{try{const r=await k(e._id,!e.favorite);n((e=>e.map((e=>e._id===r._id?{...e,favorite:r.favorite}:e))))}catch(r){console.log("Error while marking drug as favorite",r)}}})]})]})}}}]);
//# sourceMappingURL=786.32991b0d.chunk.js.map