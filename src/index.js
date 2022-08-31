// console.log('ndfjnsdjsdd');
import Notiflix from 'notiflix';
import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 700;
const inputBox = document.querySelector('#search-box');
// console.log(inputBox); 
const countryList = document.querySelector(".country-list");

const divTest = document.querySelector(".country-info");

// console.log(countryList);

inputBox.addEventListener('input', debounce(inputCountry, DEBOUNCE_DELAY) );


function inputCountry(event) {
   
   if (event.target.value.length === 0) {
      return;
   }
   // console.log("event leng" , event.target.value.length);
   addCountriList(event.target.value.trim());
}

function addCountriList(name) {
   fetchCountries(name)
     
         .then(data => listGenerator(data))
      // .catch(err => {
      //     Notiflix.Notify.failure('Oops, there is no country with that name');
      //    console.log('oibаівіваіва,rf', err)
      // })
      // .then(country => {
      //    if (country.length >= 10) {
      //       Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      //       return;
      //    }
      //    console.log(country, country.length)
      // })
      ;
   // countryList.insertAdjacentHTML("beforeend", `<li>test ${name}</li>`);
   // listGenerator(prom);
   // console.log("!00!", prom);
      // console.log(list);
    
}

function listGenerator(prom) {
   if (prom.length >= 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
         }
   // prom.then(res => res.json()).then(data => console.log('prom data!', prom , prom.length));
   //  console.log("!11!", prom.length);
   let buffer = [];

   if (prom.length === 1) {
      clearAll();
      // console.log("sjdasdhsdjasbashsbhd");
      let languagesBufer = prom[0].languages.toString();
      for (key in prom[0].languages){
         buffer.push(prom[0].languages[key]);
      };

      // console.log(buffer, "AIhuidfhdfhufadiufhaui");
      const element =
         `<h1>  <img width="90" height="90" src ="${prom[0].flags.svg}"> 
         ${prom[0].name.common}</h1>
         <ul>
               <li/>Capital : ${prom[0].capital}</li>
               <li/>Population : ${prom[0].population}</li>
               <li/>languages : ${buffer.join(", ")}</li>

          </ul>`;
      divTest.insertAdjacentHTML("beforeend", element);
      return;
   }

   if (prom.length === 0) {
      // console.log("PPC zerro J_j!");
      return;
   }

   clearAll();

    for (let index = 0; index < prom.length; index++) {
       const element = `<li> <img width="50" height="50" src ="${prom[index].flags.svg}">
 
      Name : ${prom[index].name.common}</li>`;
   //  console.log(prom[index].name);
   //  console.log(prom[index]);
   //  console.log(`test step : ${index + 1} => ${element} \n\n\n `);
    buffer.push(element);
    countryList.insertAdjacentHTML("beforeend", buffer.join(''));
   //  buffer = [];
  }
}

function clearAll() {
   buffer = [];
   countryList.innerHTML = '';
   divTest.innerHTML = '';
}