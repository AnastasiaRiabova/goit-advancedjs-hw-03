import{a as l,S as f,i as d}from"./assets/vendor-de59dc79.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();l.defaults.headers.common["x-api-key"]="live_9jASqqHKQAo6N4L1SRkdQs7vBig3Nkosdb023kpSlgipthLBgxAwBmN13lpWZI7W";const m=async()=>await l.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data),h=async t=>await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(r=>r.data),a=document.querySelector(".breed-select"),p=document.querySelector(".cat-info"),g=document.querySelector(".loader"),y=new f({select:a,settings:{placeholderText:"Search breeds"}}),u={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"},i=t=>{var r;return(r=g.classList)==null?void 0:r.toggle("hide",t)};async function b(){try{const t=a==null?void 0:a.value;i(!1);const r=await h(t);v(r)}catch{i(!0),p.innerHTML="",d.show(u)}finally{i(!0)}}const v=t=>{var n;const{name:r,description:c,temperament:s,origin:e}=(n=t[0])==null?void 0:n.breeds[0],o=t[0].url;p.innerHTML=`
    <div class="wrapper-cat">
      <img class="cat-img" src="${o}" alt="${r}"/>
      <div class="wrapper-info">
        <h2>${r}</h2>
        <p><b>Description:</b> ${c}</p>
        <p><b>Temperament:</b> ${s}</p>
        <p><b>Country:</b> ${e}</p>
      </div>
    </div>
  `},S=async()=>{try{i(!1),await m().then(t=>{const r=t.map(({id:c,name:s})=>({text:s,value:c}));y.setData([{placeholder:!0,text:""},...r])}),a.classList.remove("hide"),a.addEventListener("change",b)}catch{i(!0),d.show(u)}finally{i(!0)}};S();
//# sourceMappingURL=commonHelpers.js.map
