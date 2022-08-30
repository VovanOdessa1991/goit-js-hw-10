
function fetchCountries(name){

     const listPromise = fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags.svg,languages,population`)
      .then(res => res.json()).then(country => {        
         if (country.length >= 10){
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
         }
         console.log(country, country.length)
      })
      .catch(err => {
          Notiflix.Notify.failure('Oops, there is no country with that name');
         console.log('oib,rf', err)
      });
   return listPromise;
}