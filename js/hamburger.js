const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const newMenuHeight = String(document.querySelector('body').clientHeight) + 'px';
const heightFromCssFile = '1.5rem'; // It must be the same value that is in file 'basic.css' at selector of '.menu' at value of 'height'.
const breakPoint = 1100; // The menu collapses to hamburger below this break point. This value is from file 'hamburger.css'.

function handleClick() {
    /**
     * Animates the hamburger when clicked.
     * Also, sets the menu height to the same height of the blody.
     */
    menu.classList.toggle('menu_after_click');
    hamburger.classList.toggle('hamburger_after_click');
    document.querySelector('.menu').style.height = newMenuHeight;
}

function setMenuHeight() {
    /**Sets the menu height equal to the height of the body ensuring the entire cover. */
    if (window.innerWidth > breakPoint) {
        document.querySelector('.menu').style.height = heightFromCssFile;
    } else {
        document.querySelector('.menu').style.height = newMenuHeight;
    }
}

window.addEventListener('resize', setMenuHeight);
hamburger.addEventListener('click', handleClick);


//document.querySelector('.scroll').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });