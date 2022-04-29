const climateDropdownEl = document.getElementById('climate-dropdown');
const designDropdownEl = document.getElementById('design-dropdown');
const cityWeatherEl = document.getElementById('weather');
const cityHousesEl = document.getElementById('houses');
const citySloganInput = document.getElementById('slogans');
const myButton = document.getElementById('my-button');
const placeHolderEl = document.getElementById('slogan-output');
const countryDropdownEl = document.getElementById('country-dropdown');
const cityCountryEl = document.getElementById('countries');
const numberOfClicks = document.getElementById('number-of-drops');
const randomChoiceEl = document.getElementById('random-choice-button');
const cityOptionEl = document.getElementById('cities');
const cityButtonEl = document.getElementById('city-button');

let bigArray = ['polar', 'tropical', 'desert', 'temperate', 'mid-century', 'gothic', 'victorian', 'modern', 'poland', 'india', 'argentina', 'uganda'];
let citySlogansArray = [];
let cityNameArray = [];

let randomCount = 0;
let climateCount = 0;
let designCount = 0;
let flagCount = 0;
//why is this not working?
// let totalCount = climateCount + designCount + flagCount;
//console.log(totalCount);
randomChoiceEl.addEventListener('click', () => {
    randomButton();
});

const randomButton = () => {
    const randomNum = Math.ceil(Math.random() * 4);
    const randomNum2 = Math.ceil(Math.random() * 4);
    const randomNum3 = Math.ceil(Math.random() * 4);
    randomCount++;
    if (randomNum === 1) {
        cityWeatherEl.style.backgroundImage = `url(../assets/${bigArray[0]}-climate.png)`;
        // climateCount++;
        climateDropdownEl.value = bigArray[0];
    } else if (randomNum === 2) {
        cityWeatherEl.style.backgroundImage = `url(../assets/${bigArray[1]}-climate.png)`;
        // climateCount++;
        climateDropdownEl.value = bigArray[1];
    } else if (randomNum === 3) {
        cityWeatherEl.style.backgroundImage = `url(../assets/${bigArray[2]}-climate.png)`;
        // climateCount++;
        climateDropdownEl.value = bigArray[2];
    } else {
        cityWeatherEl.style.backgroundImage = `url(../assets/${bigArray[3]}-climate.png)`;
        // climateCount++;
        climateDropdownEl.value = bigArray[3];
    }

    if (randomNum2 === 1) {
        cityHousesEl.style.backgroundImage = `url(../assets/${bigArray[4]}-architecture.png)`;
        // designCount++;
        designDropdownEl.value = bigArray[4];
    } else if (randomNum2 === 2) {
        cityHousesEl.style.backgroundImage = `url(../assets/${bigArray[5]}-architecture.png)`;
        // designCount++;
        designDropdownEl.value = bigArray[5];
    } else if (randomNum2 === 3) {
        cityHousesEl.style.backgroundImage = `url(../assets/${bigArray[6]}-architecture.png)`;
        // designCount++;
        designDropdownEl.value = bigArray[6];
    } else {
        cityHousesEl.style.backgroundImage = `url(../assets/${bigArray[7]}-architecture.png)`;
        // designCount++;
        designDropdownEl.value = bigArray[7];
    }

    if (randomNum3 === 1) {
        cityCountryEl.style.backgroundImage = `url(../assets/${bigArray[8]}-flag.png)`;
        // flagCount++;
        countryDropdownEl.value = bigArray[8];
    } else if (randomNum3 === 2) {
        cityCountryEl.style.backgroundImage = `url(../assets/${bigArray[9]}-flag.png)`;
        // flagCount++;
        countryDropdownEl.value = bigArray[9];
    } else if (randomNum3 === 3) {
        cityCountryEl.style.backgroundImage = `url(../assets/${bigArray[10]}-flag.png)`;
        // flagCount++;
        countryDropdownEl.value = bigArray[10];
    } else {
        cityCountryEl.style.backgroundImage = `url(../assets/${bigArray[11]}-flag.png)`;
        // flagCount++;
        countryDropdownEl.value = bigArray[11];
    }
    displayStats(); 
};

cityButtonEl.addEventListener('click', () => {
    cityNameArray.push(cityOptionEl.value);
    console.log(cityNameArray);
});

climateDropdownEl.addEventListener('change', () => { 
    cityWeatherEl.style.backgroundImage = `url(../assets/${climateDropdownEl.value}-climate.png)`;
    climateCount++;
    displayStats();
});

designDropdownEl.addEventListener('change', () => {
    cityHousesEl.style.backgroundImage = `url(../assets/${designDropdownEl.value}-architecture.png)`;
    designCount++;
    displayStats();
});

countryDropdownEl.addEventListener('change', () => {
    cityCountryEl.style.backgroundImage = `url(../assets/${countryDropdownEl.value}-flag.png)`;
    flagCount++;
    displayStats();
});

myButton.addEventListener('click', () => {
    citySlogansArray.push(citySloganInput.value);
    displayCitySlogans();
});

const displayStats = () => {
    numberOfClicks.textContent = `You have changed the climate ${climateCount} time(s), the design ${designCount} time(s), and the country ${flagCount} time(s). You have seen a random option ${randomCount} time(s)`;  
};

const displayCitySlogans = () => {
    placeHolderEl.textContent = '';
    for (let slogansOut of citySlogansArray) {
        const newEl = document.createElement('li');
        newEl.textContent = slogansOut;
        placeHolderEl.append(newEl);
    }  
};