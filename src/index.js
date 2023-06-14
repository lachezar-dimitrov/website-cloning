import {
  ROOT_ID,
  INGREDIENT_REMOVE_ID,
  NAVIGATION_LINK,
  BUTTONS_CLASS_NAME,
  ELEMENT,
  APP_TEXT_CONTENT,
  IMG_PATH,
} from './constants.js';
import {
  getElementById,
  addClass,
  appendChild,
  setAttribute,
  textContent,
  createElement,
  setSource,
  addEventListener,
} from './utiles.js';

const navigationItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

const root = getElementById(ROOT_ID);
const navigation = createElement(ELEMENT.NAV);
const navigationList = createElement(ELEMENT.UL);

appendChild(root, navigation);
appendChild(navigation, navigationList);

function renderNavigationItem(navigationItem) {
  const navigationLink = createElement(ELEMENT.A);
  navigationLink.href = navigationItem.url;
  textContent(navigationLink, navigationItem.title);
  addClass(NAVIGATION_LINK, navigationLink);
  appendChild(navigationList, navigationLink);
}
navigationItems.forEach(renderNavigationItem);

const burgerMenus = createElement(ELEMENT.DIV);
addClass('burgers', burgerMenus);
const burgerBeginning = createElement(ELEMENT.DIV);
addClass('burgers', burgerBeginning);
setAttribute(burgerBeginning, 'id', INGREDIENT_REMOVE_ID);
const burgerTop = createElement(ELEMENT.IMG);
setSource(burgerTop, IMG_PATH.BURGER_TOP);
const burgerBottom = createElement(ELEMENT.IMG);
setSource(burgerBottom, IMG_PATH.BURGER_BOTTOM);
appendChild(burgerMenus, burgerTop);
appendChild(burgerMenus, burgerBeginning);
appendChild(burgerMenus, burgerBottom);
const addSaladButton = createElement(ELEMENT.BUTTON);
addClass(BUTTONS_CLASS_NAME, addSaladButton);
setAttribute(addSaladButton, 'id', 'saladButton');
textContent(addSaladButton, APP_TEXT_CONTENT.ADD_SALAD);
addEventListener(addSaladButton, 'click', () => addIngredients1('salad', IMG_PATH.SALAD, 'salad2'));
const addMeatButton = createElement(ELEMENT.BUTTON);
addClass(BUTTONS_CLASS_NAME, addMeatButton);
setAttribute(addSaladButton, 'id', 'meatButton');
textContent(addMeatButton, APP_TEXT_CONTENT.ADD_MEAT);
addEventListener(addMeatButton, 'click', () => addIngredients1('meat', IMG_PATH.MEAT, 'meat2'));
const addCheeseButton = createElement(ELEMENT.BUTTON);
addClass(BUTTONS_CLASS_NAME, addCheeseButton);
textContent(addCheeseButton, APP_TEXT_CONTENT.ADD_CHEESE);
setAttribute(addSaladButton, 'id', 'cheeseButton');
addEventListener(addCheeseButton, 'click', () => addIngredients1('cheese', IMG_PATH.CHEESE, 'cheese2'));
const addToBasketButton = createElement(ELEMENT.BUTTON);
addEventListener(addToBasketButton, 'click', () => addToBasket());
addClass(BUTTONS_CLASS_NAME, addToBasketButton);
textContent(addToBasketButton, APP_TEXT_CONTENT.ADD_TO_BASKET);

appendChild(burgerMenus, addSaladButton);
appendChild(burgerMenus, addMeatButton);
appendChild(burgerMenus, addCheeseButton);
appendChild(burgerMenus, addToBasketButton);
appendChild(root, burgerMenus);

const defaultBurgerPrice = 5;
const Price = createElement(ELEMENT.DIV);
const normalPrice = createElement(ELEMENT.DIV);
textContent(normalPrice, `${APP_TEXT_CONTENT.PRICE} ${defaultBurgerPrice}`);
appendChild(Price, normalPrice);
let storeNumberofBurgers = 0;
const numberOfIngrediensandBurgers = createElement(ELEMENT.H1);
const basketContainer = createElement(ELEMENT.DIV);
appendChild(Price, numberOfIngrediensandBurgers);
appendChild(Price, basketContainer);
const ingredientCount = {
  salad: 0,
  meat: 0,
  cheese: 0,
};
const ingredientPrice = {
  salad2: 0.5,
  meat2: 2.5,
  cheese2: 1.5,
};

let stockPrice = defaultBurgerPrice;
const price = APP_TEXT_CONTENT.PRICE;
function addIngredients1(ingredientType, src, ingredients) {
  const ingredientPosition = createElement(ELEMENT.IMG);
  setSource(ingredientPosition, src);
  appendChild(burgerBeginning, ingredientPosition);
  ingredientCount[ingredientType] += 1;
  if (ingredientCount[ingredientType] > 1) {
    stockPrice += ingredientPrice[ingredients];
    textContent(
      normalPrice,
      price + stockPrice + APP_TEXT_CONTENT.CURRENCY_TYPE,
    );
  }
}

function addToBasket() {
  textContent(
    normalPrice,
    `${APP_TEXT_CONTENT.PRICE} ${defaultBurgerPrice} ${APP_TEXT_CONTENT.CURRENCY_TYPE}`,
  );
  const deletingIngredient = getElementById(INGREDIENT_REMOVE_ID);
  deletingIngredient.innerHTML = null;
  storeNumberofBurgers += 1;

  const entries = Object.entries(ingredientCount);
  const ingredientsList = createElement(ELEMENT.UL);
  entries.forEach((ingredientInformation) => {
    const [ingredientName, ingredientCount1] = ingredientInformation;
    addIngredientInfo(ingredientName, ingredientCount1, ingredientsList);
  });
  textContent(numberOfIngrediensandBurgers, `${storeNumberofBurgers} бургера`);
  appendChild(basketContainer, ingredientsList);
  resetBurgerBuilder();
}
function resetBurgerBuilder() {
  const entries = Object.entries(ingredientCount);
  entries.forEach((placeOfingredient) => {
    ingredientCount[placeOfingredient] = 0;
  });
  stockPrice = defaultBurgerPrice;
}

function addIngredientInfo(ingredientName, ingredientCount12, parentNode) {
  const listItem = createElement(ELEMENT.LI);
  textContent(listItem, `${ingredientCount12}: ${ingredientName}`);
  appendChild(parentNode, listItem);
}
appendChild(root, Price);
