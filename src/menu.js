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

    const fries = document.createElement('div');
    fries.innerHTML = 
    `<div class='menu-item'>Fries $6<div>
     <div class='menu-description'>Classic french fries. Make super fries(top with choice of beef/chicken/pork, with cheese, and house sauce) for $11<div>`
    fries.classList.add('food-menu-card');
    foodContainer.appendChild(fries);

    const calamari = document.createElement('div');
    calamari.innerHTML = 
    `<div class='menu-item'>Calamari $9<div>
     <div class='menu-description'>Fried calamari served with assortment of sauces<div>`
    calamari.classList.add('food-menu-card');
    foodContainer.appendChild(calamari);

    const chickenWings = document.createElement('div');
    chickenWings.innerHTML = 
    `<div class='menu-item'>Chicken Wings $24<div>
     <div class='menu-description'>Korean style double fried chicken wings. Original, Garlic-Soy, or Sweet-and-Spicy.<div>`
    chickenWings.classList.add('food-menu-card');
    foodContainer.appendChild(chickenWings);

    const wholeChicken = document.createElement('div');
    wholeChicken.innerHTML = 
    `<div class='menu-item'>Whole Fried Chicken $30<div>
     <div class='menu-description'>Korean style double fried chicken wings. Original, Garlic-Soy, or Sweet-and-Spicy.<div>`
    wholeChicken.classList.add('food-menu-card');
    foodContainer.appendChild(wholeChicken);

    const galbi = document.createElement('div');
    galbi.innerHTML = 
    `<div class='menu-item'>Galbi $28<div>
     <div class='menu-description'>Sweet Korean short rib grilled to perfection.<div>`
    galbi.classList.add('food-menu-card');
    foodContainer.appendChild(galbi);

    const pork = document.createElement('div');
    pork.innerHTML = 
    `<div class='menu-item'>Spicy Pork Belly $26<div>
     <div class='menu-description'>Stir fried spicy and sweet pork belly.<div>`
    pork.classList.add('food-menu-card');
    foodContainer.appendChild(pork);

    const tacos = document.createElement('div');
    tacos.innerHTML = 
    `<div class='menu-item'>Tacos(3) $12<div>
     <div class='menu-description'>K-bbq tacos with choice of meat(beef/pork/chicken), topped with korea-style slaw.<div>`
    tacos.classList.add('food-menu-card');
    foodContainer.appendChild(tacos);

    const kimchiPasta = document.createElement('div');
    kimchiPasta.innerHTML = 
    `<div class='menu-item'>Kimchi Carbonara $21<div>
     <div class='menu-description'>Creamy carbonara pasta made with kimchi and pork belly.<div>`
    kimchiPasta.classList.add('food-menu-card');
    foodContainer.appendChild(kimchiPasta);

    const galbiPasta = document.createElement('div');
    galbiPasta.innerHTML = 
    `<div class='menu-item'>Galbi Stroganoff $21<div>
     <div class='menu-description'>Garlicky, creamy, soy-based stroganoff made with korean short rib<div>`
    galbiPasta.classList.add('food-menu-card');
    foodContainer.appendChild(galbiPasta);

    const kimchiStew = document.createElement('div');
    kimchiStew.innerHTML = 
    `<div class='menu-item'>Kimchi Jjigae $19<div>
     <div class='menu-description'>Classic kimchi stew with pork belly, kimchi, onions, tofu.<div>`
    kimchiStew.classList.add('food-menu-card');
    foodContainer.appendChild(kimchiStew);

    const soybean = document.createElement('div');
    soybean.innerHTML = 
    `<div class='menu-item'>Doenjang Jjigae $19<div>
     <div class='menu-description'>Classic soybean stew with beef, tofu, onions, radish.<div>`
    soybean.classList.add('food-menu-card');
    foodContainer.appendChild(soybean);

    const tofu = document.createElement('div');
    tofu.innerHTML = 
    `<div class='menu-item'>Soondubu $19<div>
     <div class='menu-description'>Silken tofu stew served with choice of beef/pork/chicken.<div>`
    tofu.classList.add('food-menu-card');
    foodContainer.appendChild(tofu);

    const ramen = document.createElement('div');
    ramen.innerHTML = 
    `<div class='menu-item'>Budae Jjigae $19<div>
     <div class='menu-description'>Army stew with spam, ramen, kimchi, sausage, onions, cheese.<div>`
    ramen.classList.add('food-menu-card');
    foodContainer.appendChild(ramen);

    const rice = document.createElement('div');
    rice.innerHTML = 
    `<div class='menu-item'>Kimchi Fried Rice $15<div>
     <div class='menu-description'>Kimchi fried rice with choice of beef/pork/chicken/spam. Topped with seaweed and cheese.<div>`
    rice.classList.add('food-menu-card');
    foodContainer.appendChild(rice);

    const tteokbokki = document.createElement('div');
    tteokbokki.innerHTML = 
    `<div class='menu-item'>Tteokbokki $18<div>
     <div class='menu-description'>Spicy rice cakes served with fish cakes, eggs, and vegetables.<div>`;
    tteokbokki.classList.add('food-menu-card');
    foodContainer.appendChild(tteokbokki);

    const cornCheese = document.createElement('div');
    cornCheese.innerHTML = 
    `<div class='menu-item'>Corn Cheese $14<div>
     <div class='menu-description'>Popular Korean side dish consisting of corn, onions, and peppers. Topped with a melted layer of mozzarella cheese.<div>`
    cornCheese.classList.add('food-menu-card');
    foodContainer.appendChild(cornCheese);

    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');
    menuContainer.appendChild(drinkContainer);

    const drinkTitle = document.createElement('div')
    drinkTitle.innerHTML = 'Drink'
    drinkTitle.classList.add('drink-title');
    drinkContainer.appendChild(drinkTitle);

    const beer = document.createElement('div');
    beer.innerHTML = 
    `<div class='menu-item'>Beer $11<div>
     <div class='menu-description'>Choice of Saporo, Hite, Cass, Heineken.<div>`
    beer.classList.add('drink-menu-card');
    drinkContainer.appendChild(beer);

    const soju = document.createElement('div');
    soju.innerHTML = 
    `<div class='menu-item'>Soju $16<div>
     <div class='menu-description'>Choice of Chamisul, Chumchurum, Won Soju, Jinro<div>`
    soju.classList.add('drink-menu-card');
    drinkContainer.appendChild(soju);

    const fruitSoju = document.createElement('div');
    fruitSoju.innerHTML = 
    `<div class='menu-item'>Flavored Soju $17<div>
     <div class='menu-description'>Choice of Strawberry, Peach, Lemon, Mango<div>`
    fruitSoju.classList.add('drink-menu-card');
    drinkContainer.appendChild(fruitSoju);

    const sake = document.createElement('div');
    sake.innerHTML = 
    `<div class='menu-item'>Sake $18<div>
     <div class='menu-description'>Choice of Kikusui, Kurosawa, Onigarashi, Hot Sake<div>`
    sake.classList.add('drink-menu-card');
    drinkContainer.appendChild(sake);

    const wine = document.createElement('div');
    wine.innerHTML = 
    `<div class='menu-item'>Wine $28<div>
     <div class='menu-description'>Choice of Rice Wine, Red, White, Rose.<div>`
    wine.classList.add('drink-menu-card');
    drinkContainer.appendChild(wine);

    const soda = document.createElement('div');
    soda.innerHTML = 
    `<div class='menu-item'>Soda $7<div>
     <div class='menu-description'>Choice of Cola, Pepsi, Sprite, Dr. Pepper, Root Beer, Orange Fanta, Coke Zero.<div>`
    soda.classList.add('drink-menu-card');
    drinkContainer.appendChild(soda);

    const emptyDrinkCard1 = document.createElement('div');
    emptyDrinkCard1.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard1);

    const emptyDrinkCard2 = document.createElement('div');
    emptyDrinkCard2.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard2);

    const emptyDrinkCard3 = document.createElement('div');
    emptyDrinkCard3.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard3);

    const emptyDrinkCard4 = document.createElement('div');
    emptyDrinkCard4.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard4);

    const emptyDrinkCard5 = document.createElement('div');
    emptyDrinkCard5.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard5);

    const emptyDrinkCard6 = document.createElement('div');
    emptyDrinkCard6.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard6);

    const emptyDrinkCard7 = document.createElement('div');
    emptyDrinkCard7.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard7);

    const emptyDrinkCard8 = document.createElement('div');
    emptyDrinkCard8.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard8);

    const emptyDrinkCard9 = document.createElement('div');
    emptyDrinkCard9.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard9);

    const emptyDrinkCard10 = document.createElement('div');
    emptyDrinkCard10.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard10);

    displayBody.replaceChildren(menu);
}