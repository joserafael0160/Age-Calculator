(function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const i=function(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,i)}})();const g=document.getElementById("dates-form"),E=document.getElementById("birth-date"),y=document.getElementById("find-date"),s=document.querySelector(".result-container");function h(){const n=new Date,o=n.getFullYear().toString(),e=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0");y.value=`${o}-${e}-${i}`}h(),g.addEventListener("submit",n=>{n.preventDefault();const o=E.value.split("-"),e=parseInt(o[0]),i=parseInt(o[1]),t=parseInt(o[2]),r=y.value.split("-"),l=parseInt(r[0]),c=parseInt(r[1]);let u=l-e,a=c-i,d=parseInt(r[2])-t;d<0&&(a--,d+=new Date(l,c-1,0).getDate()),a<0&&(u--,a+=12),function(p,I,L){s.innerHTML="";const v=`
  <header>
    <h2>Answer:</h2>
  </header>
  <p>Age = ${p} years.</p>
  `,D=`
  <header>
    <h2>More Information:</h2>
  </header>
  <p>${p} years, ${I} months, ${L} days.</p>
  `,m=document.createElement("DIV"),f=document.createElement("DIV");m.innerHTML=v.trim(),f.innerHTML=D.trim(),s.appendChild(m),s.appendChild(f)}(u,a,d)}),g.addEventListener("reset",n=>{n.preventDefault(),h(),s.innerHTML=""});
