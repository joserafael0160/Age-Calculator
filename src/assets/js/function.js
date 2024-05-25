"use strict"
import { findDate, resultContainer } from "./consts.js";

export function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2,"0");
  const day = currentDate.getDate().toString().padStart(2,"0");
  findDate.value=`${year}-${month}-${day}`;
}


export function result(year,month,day) {
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

