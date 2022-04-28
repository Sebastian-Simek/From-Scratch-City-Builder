const climateDropdownEl = document.getElementById('climate-dropdown');
const designDropdownEl = document.getElementById('design-dropdown');
const cityWeatherEl = document.getElementById('weather');
const cityHousesEl = document.getElementById('houses');
const citySloganInput = document.getElementById('slogans');
const myButton = document.getElementById('my-button');
const newElement = document.getElementById('slogan-output');

let citySlogansArray = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

climateDropdownEl.addEventListener('change', () =>{ 
    cityWeatherEl.style.backgroundImage = `url(../assets/${climateDropdownEl.value}-climate.png)`;
});

designDropdownEl.addEventListener('change', () => {
    cityHousesEl.style.backgroundImage = `url(../assets/${designDropdownEl.value}-architecture.png)`;
});
myButton.addEventListener('click', () => {
    citySlogansArray.push(citySloganInput.value);
    displayCitySlogans();
});
console.log(citySlogansArray);

const displayCitySlogans = () => {
    newElement.textContent = '';
    for (let slogansOut of citySlogansArray) {
        const newEl = document.createElement('ul');
        newEl.textContent = slogansOut;
        newElement.append(newEl);
    }  
};