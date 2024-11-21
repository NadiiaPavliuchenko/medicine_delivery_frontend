"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[875],{8931:(e,r,n)=>{n.d(r,{A:()=>i});const i=n(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},8875:(e,r,n)=>{n.r(r),n.d(r,{default:()=>B});var i=n(5043),a=n(197);const t=a.Ay.form`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`,d=a.Ay.div`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
`,o=a.Ay.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
`,s=a.Ay.label`
  margin: 20px 0 10px 0;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin: 10px 0 10px 0;
  }
`,l=a.Ay.input`
  border-radius: 5px;
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 10px;
    height: 35px;
  }
`,c=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`,p=a.Ay.button`
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
`,h=a.Ay.div`
  color: red;
  position: absolute;
  top: 100px;
  left: 0;
  font-size: small;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 78px;
  }
`;var x=n(3892),m=n(899),u=n(579);const g=e=>{let{onSubmit:r,calculateTotalPrice:n}=e;const i=m.Ik().shape({name:m.Yj().min(2,"Too Short!").max(50,"Too Long!").required(),email:m.Yj().email("Invalid email").required("Email is required"),phone:m.Yj().matches(/\(\d{3}\) \d{3}-\d{4}/,{message:"Invalid phone number",excludeEmptyString:!1}).required("Phone number is required"),address:m.Yj().required("Address is required")});return(0,u.jsx)(x.l1,{initialValues:{name:"",email:"",phone:"",address:""},validationSchema:i,onSubmit:r,children:e=>(0,u.jsxs)(t,{onSubmit:r=>{r.preventDefault(),e.handleSubmit()},children:[(0,u.jsxs)(d,{children:[(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{htmlFor:"name",children:"Name:"}),(0,u.jsx)(l,{type:"text",name:"name",id:"name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name}),e.errors.name&&(0,u.jsx)(h,{children:e.errors.name})]}),(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{htmlFor:"email",children:"Email:"}),(0,u.jsx)(l,{type:"email",name:"email",id:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.errors.email&&(0,u.jsx)(h,{children:e.errors.email})]}),(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{htmlFor:"phone",children:"Phone:"}),(0,u.jsx)(l,{type:"tel",name:"phone",id:"phone",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.phone}),e.errors.phone&&(0,u.jsx)(h,{children:e.errors.phone})]}),(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{htmlFor:"address",children:"Address:"}),(0,u.jsx)(l,{type:"text",name:"address",id:"address",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.address}),e.errors.address&&(0,u.jsx)(h,{children:e.errors.address})]})]}),(0,u.jsxs)(c,{children:[(0,u.jsxs)("h3",{children:["TotalPrice: ",n()," \u20b4"]}),(0,u.jsx)(p,{type:"submit",children:"Submit"})]})]})})},b=a.Ay.ul`
  width: 100vw;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;

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
    width: 50vw;
    height: 80vh;
  }
`,y=a.Ay.li`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px;
    gap: 30px;
  }
`,j=a.Ay.h3`
  margin-bottom: 20px;
`,w=a.Ay.p`
  margin-bottom: 10px;
`,v=a.Ay.div`
  display: flex;
  gap: 10px;
`,f=a.Ay.input`
  width: 90px;
`,k=a.Ay.button`
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
`,A=a.Ay.p`
  text-align: center;
  margin: auto;
`;var C=n(3825),q=n(3441);const S=e=>{let{cartItems:r,deleteFromCart:n,handleQuantityChange:i}=e;return(0,u.jsx)(b,{children:0!==r.length?r.map((e=>(0,u.jsxs)(y,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(j,{children:e.name}),(0,u.jsxs)(w,{children:["Price: ",e.price," \u20b4"]}),(0,u.jsxs)(v,{children:[(0,u.jsx)("label",{htmlFor:"quantity",children:"Quantity: "}),(0,u.jsx)(f,{type:"number",name:"quantity",defaultValue:e.quantity,onChange:r=>i(r.target.value,e._id)})]}),(0,u.jsx)(k,{type:"button",onClick:()=>n(e._id),children:(0,u.jsx)(q.Vx.Provider,{value:{size:"20px"},children:(0,u.jsx)(C.zhF,{})})})]})]},e._id))):(0,u.jsx)(A,{children:"Cart is empty :("})})};var F=n(8931);const I=async e=>{const{data:r}=await F.A.post("/api/orders",e);return r},_=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,B=()=>{const[e,r]=(0,i.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,i.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(e))}),[e]);const n=()=>{let r=0;return e.forEach((e=>r+=e.quantity*e.price)),r};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{onSubmit:async(i,a)=>{let{resetForm:t}=a;const d=(r=>{const{name:i,email:a,phone:t,address:d}=r;return{name:i,email:a,phone:t,address:d,price:n(),products:e.map((e=>({productId:e._id,quantity:e.quantity})))}})(i);await(async e=>{try{await I(e),r([])}catch(n){console.log("Error while creating an order",n)}})(d),t()},calculateTotalPrice:n}),(0,u.jsx)(S,{cartItems:e,deleteFromCart:e=>{r((r=>{const n=[...r],i=n.findIndex((r=>r._id===e));return-1!==i&&n.splice(i,1),n}))},handleQuantityChange:(e,n)=>{r((r=>{const i=[...r],a=i.findIndex((e=>e._id===n));return-1!==a&&(i[a].quantity+=e),i}))}})]})})}}}]);
//# sourceMappingURL=875.7f620661.chunk.js.map