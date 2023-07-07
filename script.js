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


function closeCurrentMenu(){ //hideCurrentMenu() would be more accurate. Change here and every place it gets called.
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

//experimental function below for ringing items to the #order / .runningOrder
/*
const syrupMenuButtons = syrupMenuContainer.getElementsByClassName('syrup')
console.log(syrupMenuButtons);

for(let i = 0; i < syrupMenuButtons.length; i++){
    syrupMenuButtons[i].addEventListener('click', function addSyrup(){
        const div = document.createElement('div');
        div.textContent = syrupMenuButtons[i].textContent; //could change this so it removes the word 'syrup'
        console.log(div.textContent)
        //order.appendChild(div);
        document.getElementById('order').appendChild(div);
        //check to see if the two above lines are interchangeable

    //add a second div with the price. All the syrups should be the same price
    //add another function for adding sauces, which should all be the same price, too
    //just give the sauces a different class than the syrups, like 'sauce'
        //ok, just gave all the sauces a class of 'sauce
})
    }
*/

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
/*
this doesnt work quite right...

const Americano = [2.50, 3.00, 3.50]

espressoDrinks = espressoMenuContainer.getElementsByClassName('espressoDrink')
for(let i=0; i < espressoDrinks.length; i++) {
    espressoDrinks[i].addEventListener('click', function addEspressoDrink() {
        
        const drink = document.createElement('div');
        drink.textContent = espressoDrinks[i].textContent;

        const price = document.createElement('div');
        price.textContent = espressoDrinks[i].textContent[1]; //no... this equals m because its the second letter in Americano

        console.log(price);

        const div = document.createElement('div');
        div.classList.add('flex');

        document.getElementById('order').appendChild(div);
        div.appendChild(drink);
        div.appendChild(price);

    })
}
//other than the fact that it doesnt show the price, it works out. All the divs are in the right place. The price just needs to be shifted to the far right.

*/
/*
//try setting prices as an array:
const cappuccinoPrice = [2.50, 3.00, 3.50]
//and then using that array to set the textContent of a seperate div that is flexed with the name of the item
const price = document.createElement('div')
price.textContent = cappuccinoPrice[1]
price.setAttribute('align-self: left')
whatever.appendChild(price)
//will show 
//cappuccino     3.00 <--this is that price div
//and the textContent of that price div can be changed when a new size is selected
//if tall is selected, then put something like
price.textContent = cappuccinoPrice[0]
//in the function that is called to change the size
*/

function addBeverage() {
    const container = document.createElement('div');
    container.classList.add('flex');
    container.classList.add('spaceBetween');
    
    const div1 = document.createElement('div');
    div1.textContent = drink.name;

    const div2 = document.createElement('div');
    div2.textContent = drink.price[1];

    container.appendChild(div1);
    container.appendChild(div2);

    document.getElementById('order').appendChild(container);
}







//icedMenu.addEventListener('click', () => displayIcedMenu())
