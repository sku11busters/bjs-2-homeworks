"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; 
  
  if (d === 0) { 
    arr.push(-b / (2 * a));
  } else if (d > 0) { 
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;

  let P = (percent / 100) / 12; 
  let S = amount - contribution; 
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1))); 
  
  totalAmount = monthlyPayment * countMonths; 
  totalAmount = Number(totalAmount.toFixed(2)); 

  return totalAmount;
}