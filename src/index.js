console.log('ndfjnsdjsdd');
import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputBox = document.querySelector('#search-box');
console.log(inputBox); 
const countryList = document.querySelector(".country-list");

const divTest = document.querySelector(".country-info");

console.log(countryList);

inputBox.addEventListener('input', debounce(inputCountry, DEBOUNCE_DELAY) );


function inputCountry(event) {
   if (event.target.value.length === 0) {
      return;
   }
   console.log("event leng" , event.target.value.length);
   addCountriList(event.target.value);
}

function addCountriList(name) {

   countryList.insertAdjacentHTML("beforeend", `<li>test ${name}</li>`);
   const listPromise = fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags.svg,languages,population`)
      .then(res => res.json()).then(country => {
        
         if (country.length >= 20){
            console.log("ALERT Low word!@!!!@@@@")
            return;
         }
         console.log(country, country.length)
      })
      .catch(err => {
         console.log('oib,rf', err)
      });
      // console.log(list);
    
}