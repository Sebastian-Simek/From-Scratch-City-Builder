const climateDropdownEl = document.getElementById('climate-dropdown');
const designDropdownEl = document.getElementById('design-dropdown');
const cityWeatherEl = document.getElementById('weather');
const cityHousesEl = document.getElementById('houses');
const citySloganInput = document.getElementById('slogans');
const myButton = document.getElementById('my-button');
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
});
console.log(citySlogansArray);