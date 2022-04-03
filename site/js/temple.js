
const spot = document.querySelector('#templeInfo');
const requestURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

let templesList = [];

fetch(requestURL)
    .then(response => response.json())
    .then(temples => {
        templesList = temples;
        getTemple(templesList);
    });

function getTemple(temples) {

    let index = Math.floor(Math.random() * 18);
 
    let card = document.createElement('section');

    let templeName = document.createElement('h2');
    templeName.textContent = temples[index].templeName;

    let info = document.createElement('section');

    let location = document.createElement('h4');
    location.textContent = temples[index].location;

    let dedicated = document.createElement('h4');
    dedicated.textContent = `Dedicated: ${temples[index].dedicated}`;

    let img = document.createElement('img');

    card.className = 'spotCard';
    info.className = 'cardInfoSec';

    img.setAttribute('src', temples[index].imageUrl);
    img.setAttribute('alt', temples[index].templeName);

    card.appendChild(img);
    card.appendChild(info);
    info.appendChild(templeName);
    info.appendChild(location);
    info.appendChild(dedicated);
    

    document.querySelector('#templeInfo').appendChild(card);
}