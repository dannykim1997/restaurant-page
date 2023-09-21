import displayBody from "./index.js";
import './style.css'; 

export default function menuClick() {
    const menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    menu.classList.add('menu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menu.appendChild(menuContainer);

    const foodContainer = document.createElement('div');
    foodContainer.classList.add('food-container');
    menuContainer.appendChild(foodContainer);

    const foodTitle = document.createElement('div')
    foodTitle.innerHTML = 'Food'
    foodTitle.classList.add('food-title');
    foodContainer.appendChild(foodTitle);

    const tteokbokki = document.createElement('div');
    tteokbokki.innerHTML = 
    `<div class='menu-item'>Tteokbokki $18<div>
     <div class='menu-description'>Spicy rice cakes served with fish cakes, eggs, and vegetables.<div>`;
    tteokbokki.classList.add('menu-card');
    foodContainer.appendChild(tteokbokki);

    const friedChicken = document.createElement('div');
    friedChicken.innerHTML = 
    `<div class='menu-item'>Fried Chicken $25<div>
     <div class='menu-description'>Korean style double fried chicken. Original, Garlic-Soy, or Sweet-and-Spicy.<div>`
    friedChicken.classList.add('menu-card');
    foodContainer.appendChild(friedChicken);

    const cornCheese = document.createElement('div');
    cornCheese.innerHTML = 
    `<div class='menu-item'>Corn Cheese $14<div>
     <div class='menu-description'>Popular Korean side dish consisting of corn, onions, and peppers. Topped with a melted layer of mozzarella cheese.<div>`
    cornCheese.classList.add('menu-card');
    foodContainer.appendChild(cornCheese);

    const ab = document.createElement('div');
    ab.innerHTML = 
    `<div class='menu-item'>Corn Cheese $14<div>
     <div class='menu-description'>Popular Korean side dish consisting of corn, onions, and peppers. Topped with a melted layer of mozzarella cheese.<div>`
    ab.classList.add('menu-card');
    foodContainer.appendChild(ab);

    const bc = document.createElement('div');
    bc.innerHTML = 
    `<div class='menu-item'>Corn Cheese $14<div>
     <div class='menu-description'>Popular Korean side dish consisting of corn, onions, and peppers. Topped with a melted layer of mozzarella cheese.<div>`
    bc.classList.add('menu-card');
    foodContainer.appendChild(bc);

    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');
    menuContainer.appendChild(drinkContainer);

    const drinkTitle = document.createElement('div')
    drinkTitle.innerHTML = 'Drinks'
    drinkTitle.classList.add('drink-title');
    drinkContainer.appendChild(drinkTitle);

    const beer = document.createElement('div');
    beer.innerHTML = 
    `<div class='menu-item'>Beer $11<div>
     <div class='menu-description'>Choice of Saporo, Hite, Cass, Heineken.<div>`
    beer.classList.add('menu-card');
    drinkContainer.appendChild(beer);

    const soju = document.createElement('div');
    soju.innerHTML = 
    `<div class='menu-item'>Soju $16<div>
     <div class='menu-description'>Choice of Chamisul, Chumchurum, Won Soju, Jinro<div>`
    soju.classList.add('menu-card');
    drinkContainer.appendChild(soju);

    const cocktail = document.createElement('div');
    cocktail.innerHTML = 
    `<div class='menu-item'>Fruit Cocktail $21<div>
     <div class='menu-description'>Choice of Strawberry, Peach, Lemon, Mango<div>`
    cocktail.classList.add('menu-card');
    drinkContainer.appendChild(cocktail);

    const cd = document.createElement('div');
    cd.innerHTML = 
    `<div class='menu-item'>Fruit Cocktail $21<div>
     <div class='menu-description'>Choice of Strawberry, Peach, Lemon, Mango<div>`
    cd.classList.add('menu-card');
    drinkContainer.appendChild(cd);

    const fd = document.createElement('div');
    fd.innerHTML = 
    `<div class='menu-item'>Fruit Cocktail $21<div>
     <div class='menu-description'>Choice of Strawberry, Peach, Lemon, Mango<div>`
    fd.classList.add('menu-card');
    drinkContainer.appendChild(fd);

    displayBody.replaceChildren(menu);
}