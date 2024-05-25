"use strict";

const form = document.getElementById("dates-form");
const birthDate = document.getElementById("birth-date");
const findDate = document.getElementById("find-date");
const resultContainer = document.querySelector(".result-container");

function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2,"0");
  const day = currentDate.getDate().toString().padStart(2,"0");
  findDate.value=`${year}-${month}-${day}`;
}


function result(year,month,day) {
  resultContainer.innerHTML = "";
  const answer=`
  <header>
    <h2>Answer:</h2>
  </header>
  <p>Age = ${year} years.</p>
  `
  const moreInformation = `
  <header>
    <h2>More Information:</h2>
  </header>
  <p>${year} years, ${month} months, ${day} days.</p>
  ` 
  const answerDiv = document.createElement("DIV");
  const moreInformationDiv = document.createElement("DIV");
  answerDiv.innerHTML = answer.trim();  
  moreInformationDiv.innerHTML = moreInformation.trim();  
  resultContainer.appendChild(answerDiv);  
  resultContainer.appendChild(moreInformationDiv);  
}



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

  result(yearsDifference,monthsDifference,daysDifference);
}) 

form.addEventListener("reset", (e)=>{
  e.preventDefault();
  currentDate();
  resultContainer.innerHTML = "";
}) 

