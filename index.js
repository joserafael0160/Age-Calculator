"use strict";
const form = document.getElementById("dates-form");
const birthDate = document.getElementById("birth-date");
const findDate = document.getElementById("find-date");
currentDate().set() 

form.addEventListener("submit", (e)=>{
  e.preventDefault(); 

}) 

function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); 
  const month = currentDate.getMonth().toString().padStart(2,"0");  
  const day = currentDate.getDay().toString().padStart(2,"0");
  const get = () => [year,month,day];

  const set = () => findDate.value=`${year}-${month}-${day}`; 

  return {get, set};  
}  