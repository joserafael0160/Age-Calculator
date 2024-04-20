"use strict";
const form = document.getElementById("dates-form");
const birthDate = document.getElementById("birth-date");
const findDate = document.getElementById("find-date");
const containerResult = document.querySelector(".result-container") 
currentDate();

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const birth = birthDate.value.split("-");
  const yearBirth = parseInt(birth[0]); 
  const monthBirth = parseInt(birth[1]); 
  const dayBirth = parseInt(birth[2]);

  const find = findDate.value.split("-");
  const yearFind = parseInt(find[0]); 
  const monthFind = parseInt(find[1]); 
  const dayFind = parseInt(find[2]);

  let yearsDifference = yearFind - yearBirth;
  let monthsDifference = monthFind - monthBirth;
  let daysDifference = dayFind - dayBirth;

  if(daysDifference < 0) {
    monthsDifference--;
    daysDifference += new Date(yearFind, monthFind - 1, 0).getDate();
  }
  if(monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }

  console.log(`Years: ${yearsDifference}, Months: ${monthsDifference}, Days: ${daysDifference}`);  
  result(yearsDifference,monthsDifference,daysDifference); 
}) 

form.addEventListener("reset", (e)=>{
  e.preventDefault(); 
  currentDate();
}) 

function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); 
  const month = (currentDate.getMonth() + 1).toString().padStart(2,"0");  
  const day = currentDate.getDate().toString().padStart(2,"0");
  findDate.value=`${year}-${month}-${day}`; 
}


function result(year,month,day) {
  containerResult.innerHTML = ""
  const html=`
  <header>
  <h3>Answer:</h3>
</header>
<p>Age = ${year} years</p>
</div>
<div class="more-information">
<header>
  <h3>More Information:</h3>
</header>
<p>${year} years, ${month} months, ${day} days</p>
  
  `
  const div = document.createElement("DIV");
  div.innerHTML=html.trim();  
  containerResult.appendChild(div);  

}