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


function closeCurrentMenu(){
    const currentWindow = document.getElementsByClassName('active');
    currentWindow[0].classList.add('inactive');
    currentWindow[0].classList.remove('active');
}

/*
Drink Builder menu side tabs
*/

const icedMenuContainer = document.getElementById('icedMenuContainer')
const icedMenu = document.getElementById('icedMenu');

function displayIcedMenu() {
    closeCurrentMenu();
    icedMenu.style.backgroundColor = 'white';
    icedMenuContainer.classList.add('active');
    icedMenuContainer.classList.remove('inactive');
}

const syrupMenuContainer = document.getElementById('syrupMenuContainer')
const syrupMenuTab = document.getElementById('syrupMenuTab')

function displaySyrupMenu() {
    closeCurrentMenu();
    syrupMenuTab.style.backgroundColor = 'white';
    syrupMenuContainer.classList.add('active');
    syrupMenuContainer.classList.remove('inactive');
}

const milkMenuContainer = document.getElementById('milkMenuContainer')
const milkMenuTab = document.getElementById('milkMenuTab')

function displayMilkMenu() {
    closeCurrentMenu();
    milkMenuContainer.classList.add('active');
    milkMenuContainer.classList.remove('inactive');
}
 
const customMenuContainer = document.getElementById('customMenuContainer')
const customMenuTab = document.getElementById('customMenuTab')

function displayCustomMenu() {
    closeCurrentMenu();
    customMenuContainer.classList.add('active');
    customMenuContainer.classList.remove('inactive');
}

/*
Drink Builder menu bottom tabs
*/

const brewedMenuContainer = document.getElementById('brewedMenuContainer')

function displayBrewedMenu() {
    closeCurrentMenu();
    brewedMenuContainer.classList.add('active');
    brewedMenuContainer.classList.remove('inactive')
}

const espressoMenuContainer = document.getElementById('espressoMenuContainer')

function displayEspressoMenu() {
    closeCurrentMenu();
    espressoMenuContainer.classList.add('active');
    espressoMenuContainer.classList.remove('inactive');
}

const blendedMenuContainer = document.getElementById('blendedMenuContainer')

function displayBlendedMenu() {
    closeCurrentMenu();
    blendedMenuContainer.classList.add('active');
    blendedMenuContainer.classList.remove('inactive');
}

const teaMenuContainer = document.getElementById('teaMenuContainer')

function displayTeaMenu() {
    closeCurrentMenu();
    teaMenuContainer.classList.add('active');
    teaMenuContainer.classList.remove('inactive');
}

const otherMenuContainer = document.getElementById('otherMenuContainer')

function displayOtherMenu() {
    closeCurrentMenu();
    otherMenuContainer.classList.add('active');
    otherMenuContainer.classList.remove('inactive');
}


//icedMenu.addEventListener('click', () => displayIcedMenu())
