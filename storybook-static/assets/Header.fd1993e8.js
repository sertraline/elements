import{B as n}from"./Button.e61703dc.js";import{j as e,a as r,F as a}from"./jsx-runtime.aac6e4de.js";const o=({user:i,onLogin:t,onLogout:l,onCreateAccount:s})=>e("header",{children:r("div",{className:"wrapper",children:[r("div",{children:[e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:r("g",{fill:"none",fillRule:"evenodd",children:[e("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e("h1",{children:"Acme"})]}),e("div",{children:i?r(a,{children:[r("span",{className:"welcome",children:["Welcome, ",e("b",{children:i.name}),"!"]}),e(n,{size:"small",onClick:l,label:"Log out"})]}):r(a,{children:[e(n,{size:"small",onClick:t,label:"Log in"}),e(n,{primary:!0,size:"small",onClick:s,label:"Sign up"})]})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},description:""},onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCreateAccount:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{o as H};
//# sourceMappingURL=Header.fd1993e8.js.map