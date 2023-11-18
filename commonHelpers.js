import{a as l,S as u,i as d}from"./assets/vendor-de59dc79.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();l.defaults.headers.common["x-api-key"]="live_9jASqqHKQAo6N4L1SRkdQs7vBig3Nkosdb023kpSlgipthLBgxAwBmN13lpWZI7W";const f=async()=>await l.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data),m=async t=>await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(r=>r.data),c=document.querySelector(".breed-select"),h=document.querySelector(".cat-info"),g=document.querySelector(".loader"),y=new u({select:c,settings:{placeholderText:"Search breeds"}}),p={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"},a=t=>{var r;return(r=g.classList)==null?void 0:r.toggle("hide",t)};async function b(){try{const t=c==null?void 0:c.value;a(!1);const r=await m(t);S(r)}catch{a(!0),d.show(p)}finally{a(!0)}}const S=t=>{var n;const{name:r,description:i,temperament:s,origin:e}=(n=t[0])==null?void 0:n.breeds[0],o=t[0].url;h.innerHTML=`
    <div class="wrapper-cat">
      <img class="cat-img" src="${o}" alt="${r}"/>
      <div class="wrapper-info">
        <h2>${r}</h2>
        <p><b>Description:</b> ${i}</p>
        <p><b>Temperament:</b> ${s}</p>
        <p><b>Country:</b> ${e}</p>
      </div>
    </div>
  `},v=async()=>{try{a(!1),await f().then(t=>{const r=t.map(({id:i,name:s})=>({text:s,value:i}));y.setData([{placeholder:!0,text:""},...r])}),c.addEventListener("change",b)}catch{a(!0),d.show(p)}finally{a(!0)}};v();
//# sourceMappingURL=commonHelpers.js.map
