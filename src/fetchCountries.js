
import Notiflix from 'notiflix';
export function fetchCountries(name){

     const listPromise = fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags,languages,population`)
           .then(response => {
               //  console.log(response.status, response.ok)
                if (response.ok) {
                     return response.json();
                }
                
                else if (response.status === 404) {
                     Notiflix.Notify.failure('Oops, there is no country with that name');
                }
                
      
   })
     //    .then(res => res.json())
   //      .then(country => {        
   //       if (country.length >= 10){
   //          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
   //          return;
   //       }
   //       console.log(country, country.length)
   //      })
        .catch((err) => {
           console.warn(err)
          //  if (error.status === 404) {
          //       Notiflix.Notify.failure('Oops, there is no country with that name');
          //             }
          // Notiflix.Notify.failure('Oops, there is no country with that name');
          //  console.log('oib,rf', err)
           return;
        })
          ;
   console.log("listPromise",listPromise);
   return listPromise;
}

