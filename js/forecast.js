const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=4348599&appid=6e78c57483005f7c22d3a70888f92e0e";

let cards=[];

fetch(forecastURL).then(response => response.json()).then(jsObj => {
    const forecast = jsObj.list;
    cards.push(forecast[0]);

    let myDate = cards[0].dt_txt;
    let today = new Date(myDate);
    today = today.getDate();

    getDays(today, cards)

    console.log(today);
     
    cards.forEach(createCard);

  });

function getDays(today, array) {

    const n = 3;
    let sample = array.sort((today, b) => a + b);
    sample.map(a => a.x).slice(0, n);

    return sample;
  }

function createCard (day){
    console.log(day);
    let card = document.createElement('section');
    card.className = 'spotCard';

    let date = document.createElement('span');
    date.textContent = day.dt_txt;

    let iconsrc = document.createElement('img');
    iconsrc.setAttribute('src', `https://openweathermap.org/img/w/${day.weather.icon}.png`);
    iconsrc.setAttribute('alt', "");

    let temp = document.createElement('span');
    temp.textContent= day.main.temp;

    let weatherDesc = document.createElement('span');
    weatherDesc.textContent = day.description;

    card.appendChild(iconsrc);
    card.appendChild(date);
    card.appendChild(temp);
    card.appendChild(weatherDesc);


    let section = document.querySelector('.forecast');
    section.appendChild(card);
} 