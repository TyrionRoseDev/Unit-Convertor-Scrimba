/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let ConvertBtn = document.getElementById("convert-btn");
let infoMeter = document.getElementById("info-text-meter");
let infoKilo = document.getElementById("info-text-kilo");
let infoVol = document.getElementById("info-text-vol");
let input = document.getElementById("input");

ConvertBtn.addEventListener("click", convert);

function convert() {
  convertMeter(input.value);
  convertKilo(input.value);
  convertVol(input.value);
}
function convertMeter(conversionVal) {
  let feetVal = conversionVal * 3.281;
  let meterVal = conversionVal / 3.281;
  infoMeter.textContent = `${input.value} meters = ${feetVal.toFixed(
    3
  )} feet | ${input.value} feet = ${meterVal.toFixed(3)} meters`;
}
function convertKilo(conversionVal) {
  let galVal = conversionVal * 0.264;
  let litersVal = conversionVal / 0.264;
  infoVol.textContent = `${input.value} liters = ${galVal.toFixed(
    3
  )} gallons | ${input.value} gallons = ${litersVal.toFixed(3)} liters`;
}
function convertVol(conversionVal) {
  let kiloVal = conversionVal * 2.204;
  let lbsVal = conversionVal / 2.204;
  infoKilo.textContent = `${input.value} kilos = ${kiloVal.toFixed(
    3
  )} pounds | ${input.value} pounds= ${lbsVal.toFixed(3)}`;
}
