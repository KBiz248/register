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

function addAmericano() {
    drink = americano;
    addBeverage();
}

function addIcedShakenEspresso() {
    drink = icedShakenEspresso;
    addBeverage();
}

//BrownSugarOatShakenEspresso
//ChocolateAlmondmilkShakenEspresso
//ToastedVanillaOatShakenEspresso
//OleatoIcedOatmilkShakenEspresso




function addLatte() {
    drink = latte;
    addBeverage();
}

function addCinnamonDolceLatte() {
    drink = cinnamonDolceLatte;
    addBeverage();
}

function addCappuccino() {
    drink = cappuccino;
    addBeverage();
}

function addFlatWhite() {
    drink = flatWhite;
    addBeverage();
}

function addHoneyAlmondmilkFlatWhite() {
    drink = honeyAlmondmilkFlatWhite;
    addBeverage();
}