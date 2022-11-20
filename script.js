const buttonEl = document.getElementById("convert-btn") // The Convert Button the user clicked 
let inputEl  = document.getElementById("user-ask") // What the user has typed 

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let errorIndicatorEl = document.getElementById("errorCase") // Red sentence when input not valid 
buttonEl.addEventListener('click', Conversion) // Makes something happen when is clicked

function toMeterConverter(feet) {
    return (feet/3.28084).toFixed(2)
}
function toFeetConverter(meter) {
    return (meter*3.28084).toFixed(2)
}
function toGallonsConverter(liter) {
    return (liter/3.78541).toFixed(2)
}
function toLitersConverter(gallons) {
    return (gallons*3.78541).toFixed(2)
}
function toKilogramsConverter(pounds) {
    return (pounds/2.20462).toFixed(2)
}
function toPoundsConverter(kg) {
    return (kg*2.20462).toFixed(2)
}
function Processing() {
        let feetResult = toFeetConverter(inputEl.value) // get the feet conversion to use after 👇
        let meterResult = toMeterConverter(inputEl.value) // get the meter conversion to use after 👇
        let gallonsResult = toGallonsConverter(inputEl.value) // get the feet conversion to use after 👇
        let litersResult = toLitersConverter(inputEl.value) // get the feet conversion to use after 👇
        let poundsResult = toPoundsConverter(inputEl.value) // get the feet conversion to use after 👇
        let kilosResult = toKilogramsConverter(inputEl.value) // get the feet conversion to use after 👇

        let lengthAnswer = `${inputEl.value} feet = ${meterResult} meters | ${inputEl.value} meters = ${feetResult} feet`
        let volumeAnswer = `${inputEl.value} liters = ${gallonsResult} gallons | ${inputEl.value} gallons = ${litersResult} liters`
        let massAnswer = `${inputEl.value} pounds = ${kilosResult} kilograms | ${inputEl.value} kilograms = ${poundsResult} pounds`
        lengthEl.innerHTML= lengthAnswer
        volumeEl.innerHTML= volumeAnswer
        massEl.innerHTML= massAnswer
}
function Conversion() { // What happen when is clicked
        if(inputEl.value === "") {
            let errorCase = "Your input value is not a number"
            errorIndicatorEl.innerHTML= errorCase
            lengthEl.innerHTML = ""
            volumeEl.innerHTML = ""
            massEl.innerHTML = ""
        } else {
            errorIndicatorEl.innerHTML= ""
            Processing()
        }
}