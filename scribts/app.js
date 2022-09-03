const form = document.querySelector('.change');
const update = document.querySelector('.detal')
const card = document.querySelector('.card')
const time = document.querySelector('.time')
console.log(form);

const ubdateTheui = (data) => {
    const loc = data.loc
    const weather = data.weather
    update.innerHTML = ` <div class="text-muted text-uppercase text-center detal">
    <h5 class="my-3">${loc.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
     <span>${weather.Temperature.Metric.Value}</span>
     <span>&deg;C</span>
    </div>
    </div>`
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
    console.log( loc , weather);

   if (weather.IsDayTime) {
       time.setAttribute('src' , 'wow/day.jpg')
   } else {
       time.setAttribute('src' , 'wow/night.jfif')
   }

};

const final = async (city) => {
    const loc = await getcity(city);
    const weather = await getweather(loc.Key);
  
    return {
        loc , weather
    }
}
form.addEventListener('submit',(e) => {
e.preventDefault();
const city = form.city.value.trim();
form.reset(); 
final(city).then((data) => {
     ubdateTheui(data); 
    }).catch((err) => {
        console.log(err);
        })
});