"use strict";(self.webpackChunkmedicine_delivery_frontend=self.webpackChunkmedicine_delivery_frontend||[]).push([[875],{8931:(e,n,i)=>{i.d(n,{A:()=>r});const r=i(7154).A.create({baseURL:"https://medicine-delivery-backend-t1jj.onrender.com/"})},8875:(e,n,i)=>{i.r(n),i.d(n,{default:()=>B});var r=i(5043),a=i(197);const t=a.Ay.form`
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
`,s=a.Ay.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
`,o=a.Ay.label`
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
`,p=a.Ay.div`
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
`,c=a.Ay.button`
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
`;var x=i(3892),m=i(899),u=i(579);const g=e=>{let{onSubmit:n,calculateTotalPrice:i}=e;const r=m.Ik().shape({name:m.Yj().min(2,"Too Short!").max(50,"Too Long!").required(),email:m.Yj().email("Invalid email").required("Email is required"),phone:m.Yj().matches(/\(\d{3}\) \d{3}-\d{4}/,{message:"Invalid phone number",excludeEmptyString:!1}).required("Phone number is required"),address:m.Yj().required("Address is required")});return(0,u.jsx)(x.l1,{initialValues:{name:"",email:"",phone:"",address:""},validationSchema:r,onSubmit:n,children:e=>(0,u.jsxs)(t,{onSubmit:n=>{n.preventDefault(),e.handleSubmit()},children:[(0,u.jsxs)(d,{children:[(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{htmlFor:"name",children:"Name:"}),(0,u.jsx)(l,{type:"text",name:"name",id:"name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name}),e.errors.name&&(0,u.jsx)(h,{children:e.errors.name})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{htmlFor:"email",children:"Email:"}),(0,u.jsx)(l,{type:"email",name:"email",id:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.errors.email&&(0,u.jsx)(h,{children:e.errors.email})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{htmlFor:"phone",children:"Phone:"}),(0,u.jsx)(l,{type:"tel",name:"phone",id:"phone",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.phone}),e.errors.phone&&(0,u.jsx)(h,{children:e.errors.phone})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{htmlFor:"address",children:"Address:"}),(0,u.jsx)(l,{type:"text",name:"address",id:"address",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.address}),e.errors.address&&(0,u.jsx)(h,{children:e.errors.address})]})]}),(0,u.jsxs)(p,{children:[(0,u.jsxs)("h3",{children:["TotalPrice: ",i()," \u20b4"]}),(0,u.jsx)(c,{type:"submit",children:"Submit"})]})]})})},y=a.Ay.ul`
  width: 100vw;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
`,j=a.Ay.li`
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
`,b=a.Ay.h3`
  margin-bottom: 20px;
`,v=a.Ay.p`
  margin-bottom: 10px;
`,w=a.Ay.div`
  display: flex;
  gap: 10px;
`,f=a.Ay.input`
  width: 90px;
`,A=a.Ay.button`
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
`,C=a.Ay.p`
  text-align: center;
  margin: auto;
`;var k=i(3825),q=i(3441);const S=e=>{let{cartItems:n,deleteFromCart:i,handleQuantityChange:r}=e;return(0,u.jsx)(y,{children:0!==n.length?n.map((e=>(0,u.jsxs)(j,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:e.photo,alt:e.name,width:"200",height:"200"})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(b,{children:e.name}),(0,u.jsxs)(v,{children:["Price: ",e.price," \u20b4"]}),(0,u.jsxs)(w,{children:[(0,u.jsx)("label",{htmlFor:"quantity",children:"Quantity: "}),(0,u.jsx)(f,{type:"number",name:"quantity",defaultValue:e.quantity,onChange:n=>r(n.target.value,e._id)})]}),(0,u.jsx)(A,{type:"button",onClick:()=>i(e._id),children:(0,u.jsx)(q.Vx.Provider,{value:{size:"20px"},children:(0,u.jsx)(k.zhF,{})})})]})]},e._id))):(0,u.jsx)(C,{children:"Cart is empty :("})})};var F=i(8931);const I=async e=>{const{data:n}=await F.A.post("/api/orders",e);return n},_=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,B=()=>{const[e,n]=(0,r.useState)((()=>JSON.parse(localStorage.getItem("medicineCart"))||[]));(0,r.useEffect)((()=>{localStorage.setItem("medicineCart",JSON.stringify(e))}),[e]);const i=()=>{let n=0;return e.forEach((e=>n+=e.quantity*e.price)),n};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{onSubmit:async(r,a)=>{let{resetForm:t}=a;const d=(n=>{const{name:r,email:a,phone:t,address:d}=n;return{name:r,email:a,phone:t,address:d,price:i(),products:e.map((e=>({productId:e._id,quantity:e.quantity})))}})(r);await(async e=>{try{await I(e),n([])}catch(i){console.log("Error while creating an order",i)}})(d),t()},calculateTotalPrice:i}),(0,u.jsx)(S,{cartItems:e,deleteFromCart:e=>{n((n=>{const i=[...n],r=i.findIndex((n=>n._id===e));return-1!==r&&i.splice(r,1),i}))},handleQuantityChange:(e,i)=>{n((n=>{const r=[...n],a=r.findIndex((e=>e._id===i));return-1!==a&&(r[a].quantity+=e),r}))}})]})})}}}]);
//# sourceMappingURL=875.6778069b.chunk.js.map