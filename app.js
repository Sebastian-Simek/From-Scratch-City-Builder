const climateDropdownEl = document.getElementById('climate-dropdown');
const designDropdownEl = document.getElementById('design-dropdown');
const cityWeatherEl = document.getElementById('weather');
const cityHousesEl = document.getElementById('houses');
const citySloganInput = document.getElementById('slogans');
const myButton = document.getElementById('my-button');
const newElement = document.getElementById('slogan-output');
const countryDropdownEl = document.getElementById('country-dropdown');
const cityCountry = document.getElementById('countries');
const numberOfClicks = document.getElementById('number-of-drops');

let citySlogansArray = [];
let climateCount = 0;
let designCount = 0;
let flagCount = 0;

climateDropdownEl.addEventListener('change', () =>{ 
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
    cityCountry.style.backgroundImage = `url(../assets/${countryDropdownEl.value}-flag.png)`;
    flagCount++;
    displayStats();
});

myButton.addEventListener('click', () => {
    citySlogansArray.push(citySloganInput.value);
    displayCitySlogans();
});

const displayStats = () => {
    numberOfClicks.textContent = `You have changed the climate ${climateCount} time(s), the design ${designCount} time(s), and the country ${flagCount} time(s)`;
};

const displayCitySlogans = () => {
    newElement.textContent = '';
    for (let slogansOut of citySlogansArray) {
        const newEl = document.createElement('ul');
        newEl.textContent = slogansOut;
        newElement.append(newEl);
    }  
};