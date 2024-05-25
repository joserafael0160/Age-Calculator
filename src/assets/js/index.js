"use strict";
import { form, birthDate, findDate, resultContainer} from "./consts.js";
import { currentDate, result } from "./function.js";


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

