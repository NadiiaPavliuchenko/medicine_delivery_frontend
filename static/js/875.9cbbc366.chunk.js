"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[875],{8931:(e,t,r)=>{r.d(t,{A:()=>i});const i=r(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},8875:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var i=r(5043),n=r(197);const a=n.Ay.div`
  width: 40vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,o=n.Ay.label`
  margin: 20px 0 10px 0;
`,s=n.Ay.input`
  width: 75%;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 20px;
`,d=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-top: 10px;
`,l=n.Ay.button`
  padding: 10px;
  width: 150px;
  border: 1px solid #333;
  border-radius: 10px;
  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`;var c=r(579);const p=e=>{let{onSubmit:t,calculateTotalPrice:r}=e;return(0,c.jsxs)("form",{onSubmit:e=>t(e),children:[(0,c.jsxs)(a,{children:[(0,c.jsx)(o,{htmlFor:"name",children:"Name:"}),(0,c.jsx)(s,{type:"text",name:"name",id:"name"}),(0,c.jsx)(o,{htmlFor:"email",children:"Email:"}),(0,c.jsx)(s,{type:"email",name:"email",id:"email"}),(0,c.jsx)(o,{htmlFor:"phone",children:"Phone:"}),(0,c.jsx)(s,{type:"tel",name:"phone",id:"phone"}),(0,c.jsx)(o,{htmlFor:"address",children:"Address:"}),(0,c.jsx)(s,{type:"text",name:"address",id:"address"})]}),(0,c.jsxs)(d,{children:[(0,c.jsxs)("h3",{children:["TotalPrice: ",r()," \u20b4"]}),(0,c.jsx)(l,{type:"submit",children:"Submit"})]})]})},x=n.Ay.ul`
  width: 60vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;
  text-align: center;
`,u=n.Ay.li`
  width: 98%;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,h=n.Ay.h3`
  margin-bottom: 20px;
`,m=n.Ay.p`
  margin-bottom: 10px;
`,g=n.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  background-color: transparent;
  position: absolute;
  border: 1px solid #333;
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 50%;

  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`;var y=r(3825),b=r(3441);const j=e=>{let{cartItems:t,deleteFromCart:r,handleQuantityChange:i}=e;return(0,c.jsx)(x,{children:0!==t.length?t.map((e=>(0,c.jsxs)(u,{children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)(h,{children:e.name}),(0,c.jsxs)(m,{children:["Price: ",e.price," \u20b4"]}),(0,c.jsx)("label",{htmlFor:"quantity",children:"Quantity: "}),(0,c.jsx)("input",{type:"number",name:"quantity",defaultValue:e.quantity,onChange:t=>i(t.target.value,e._id)}),(0,c.jsx)(g,{type:"button",onClick:()=>r(e._id),children:(0,c.jsx)(b.Vx.Provider,{value:{size:"20px"},children:(0,c.jsx)(y.zhF,{})})})]})]},e._id))):(0,c.jsx)("p",{children:"Cart is empty :("})})};var v=r(8931);const f=async e=>{const{data:t}=await v.A.post("/api/orders",e);return t},w=n.Ay.div`
  display: flex;
  gap: 10px;
`,A=()=>{const[e,t]=(0,i.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,i.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(e))}),[e]);const r=()=>{let t=0;return e.forEach((e=>t+=e.quantity*e.price)),t};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(w,{children:[(0,c.jsx)(p,{onSubmit:async i=>{i.preventDefault();const n=(t=>{const{name:i,email:n,phone:a,address:o}=t,s=r(),d=e.map((e=>({productId:e._id,quantity:e.quantity})));return{name:i.value,email:n.value,phone:a.value,address:o.value,price:s,products:d}})(i.target.elements);await(async e=>{try{const r=await f(e);console.log(r),t([])}catch(i){console.log("Error while creating an order",i)}})(n),i.target.reset()},calculateTotalPrice:r}),(0,c.jsx)(j,{cartItems:e,deleteFromCart:e=>{t((t=>{const r=[...t],i=r.findIndex((t=>t._id===e));return-1!==i&&r.splice(i,1),r}))},handleQuantityChange:(e,r)=>{t((t=>{const i=[...t],n=i.findIndex((e=>e._id===r));return-1!==n&&(i[n].quantity+=e),i}))}})]})})}}}]);
//# sourceMappingURL=875.9cbbc366.chunk.js.map