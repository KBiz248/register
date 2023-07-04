/*
try using 'hidden' or 'display: none' attributes to switch between menus
*/

const order = document.getElementsByClassName('runningOrder')

function addAmericano() {const currentWindow = document.getElementsByClassName('active');
console.log(currentWindow)


currentWindow[0].classList.add('inactive')
//currentWindow[0].style.display = 'none';
currentWindow[0].classList.remove('active');

//currentWindow[0].className = 'white', 'inactive';


//currentWindow[0].setAttribute(class, 'white inactive');
console.log(currentWindow)
}

const icedMenuContainer = document.getElementById('icedMenuContainer')
const icedMenu = document.getElementById('icedMenu');
function closeCurrentMenu(){
    const currentWindow = document.getElementsByClassName('active');
    currentWindow[0].classList.add('inactive');
    currentWindow[0].classList.remove('active');
}


function displayIcedMenu() {
    closeCurrentMenu();
    icedMenuContainer.classList.add('active');
    icedMenuContainer.classList.remove('inactive');
}
 


//icedMenu.addEventListener('click', () => displayIcedMenu())
