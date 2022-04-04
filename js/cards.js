const requestURL = 'https://abrenzink.github.io/Temple-Inn-Suites-Hotel-Site/js/temples.json';

let templesList = [];
let favTemples = [];

fetch(requestURL)
    .then(response => response.json())
    .then(temples => {
        templesList = temples;
        output(templesList);
    });

const output = (temples) => {
    temples.forEach(
        temple => {
            let card = document.createElement('section');
            card.className = 'spotCard temples';

            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            let location = document.createElement('h4');
            location.textContent = temple.location;

            let dedicated = document.createElement('h4');
            dedicated.textContent = `Dedication date: ${temple.dedicated}`;

            let img = document.createElement('img');
            img.setAttribute('src', temple.imageUrl);
            img.setAttribute('alt', temple.templeName);

            let likeImg = document.createElement('img');
            likeImg.className = 'like';
            likeImg.setAttribute('src', 'images/like.svg');
            likeImg.setAttribute('alt', 'like button');
            
            let redLikeImg = document.createElement('img');
            redLikeImg.className = 'like';
            redLikeImg.setAttribute('src', 'images/redlike.svg');
            redLikeImg.setAttribute('alt', 'like button');

            
            let services = document.createElement('ul');
            services.innerHTML = "";

            temple.services.forEach((x) => {
                services.innerHTML += `
                <li>${x}</li>`;
            });

            card.appendChild(img);
            card.appendChild(templeName);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(likeImg);
            card.appendChild(services);
            
            let favTemple = window.localStorage.getItem("temple");

            if(favTemple == temple.templeName){
                card.appendChild(redLikeImg);
                card.removeChild(likeImg);
            }else{
                card.appendChild(likeImg);
            }

            likeImg.addEventListener('click', () => {
                card.appendChild(redLikeImg);
                card.removeChild(likeImg);
                localStorage.setItem("temple", temple.templeName);
            });

            redLikeImg.addEventListener('click', () => {
                card.removeChild(redLikeImg);
                card.appendChild(likeImg);
                localStorage.removeItem("temple", temple.templeName);
            });
    
            document.querySelector('#temples').appendChild(card);
        }
    );
}