const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=4348599&appid=6e78c57483005f7c22d3a70888f92e0e";

let cards=[];

fetch(forecastURL).then(response => response.json()).then(jsObj => {
    const forecast = jsObj.list;
    cards = getDays(forecast);
    cards.forEach(createCard);
});

function getDays(array) {
  const n = 3;
  const sample = array
  .map(x => ({ x, rand: Math.random() }))
  .sort((a, b) => a.rand + b.rand)
  .map(a => a.x)
  .slice(0, n);

  return sample;
}

function createCard (day){
  console.log(day)
    let card = document.createElement('section');
    card.className = 'spotCard';

    let iconsrc = document.createElement('img');
    iconsrc.setAttribute('src', `https://openweathermap.org/img/w/${day.weather[0].icon}.png`);
    iconsrc.setAttribute('alt', "");

    let date = document.createElement('span');
    parseDate = new Date(`${day.dt_txt}`);
    date.textContent = parseDate;

    let temp = document.createElement('span');
    temp.innerHTML= `<br>Temperature: ${day.main.temp}</br>`

    let weatherDesc = document.createElement('span');
    weatherDesc.innerHTML = `<br>${day.weather[0].description}</br>`;

    card.appendChild(iconsrc);
    card.appendChild(date);
    card.appendChild(temp);
    card.appendChild(weatherDesc);

    let section = document.querySelector('.forecast');
    section.appendChild(card);
} 