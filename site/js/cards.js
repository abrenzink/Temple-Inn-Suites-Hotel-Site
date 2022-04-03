const requestURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

fetch(requestURL)
    .then(response => response.json())
    .then(temples => {
        templesList = temples;
        output(templesList);
    });