const requestURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

let templesList = []

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

            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            let location = document.createElement('h4');
            location.textContent = temple.location;

            let dedicated = document.createElement('h4');
            dedicated.textContent = temple.dedicated;

            let img = document.createElement('img');
            img.setAttribute('src', temple.imageUrl);
            img.setAttribute('alt', temple.templeName);

            card.appendChild(templeName);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(img);

            document.querySelector('#temples').appendChild(card);
        }
    );
}