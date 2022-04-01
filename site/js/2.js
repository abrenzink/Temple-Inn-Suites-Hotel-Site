const toggleMenu = () => {
    document.querySelector('#nav').classList.toggle('open');
}

let hamBtn = document.querySelector('#hamBtn');

hamBtn.addEventListener('click', toggleMenu);