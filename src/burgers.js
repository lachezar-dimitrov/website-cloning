import {
  INGREDIENT_REMOVE_ID,
  BUTTONS_CLASS_NAME,
  ELEMENT,
  APP_TEXT_CONTENT,
  IMG_PATH,
  MAIN_CONTENT_ID,
} from './constants.js';
import { defaultBurgerPrice, ingredientInfo, store } from './Store.js';
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

const renderBurgers = (parentElement) => {
  const mainBurgersDiv = createElement(ELEMENT.DIV);
  addClass('mainBurgersDiv', mainBurgersDiv);
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
  addEventListener(addSaladButton, 'click', () => addIngredients1('salad', IMG_PATH.SALAD));
  const addMeatButton = createElement(ELEMENT.BUTTON);
  addClass(BUTTONS_CLASS_NAME, addMeatButton);
  setAttribute(addSaladButton, 'id', 'meatButton');
  textContent(addMeatButton, APP_TEXT_CONTENT.ADD_MEAT);
  addEventListener(addMeatButton, 'click', () => addIngredients1('meat', IMG_PATH.MEAT));
  const addCheeseButton = createElement(ELEMENT.BUTTON);
  addClass(BUTTONS_CLASS_NAME, addCheeseButton);
  textContent(addCheeseButton, APP_TEXT_CONTENT.ADD_CHEESE);
  setAttribute(addSaladButton, 'id', 'cheeseButton');
  addEventListener(addCheeseButton, 'click', () => addIngredients1('cheese', IMG_PATH.CHEESE));
  const addToBasketButton = createElement(ELEMENT.BUTTON);
  addEventListener(addToBasketButton, 'click', () => addToBasket());
  addClass(BUTTONS_CLASS_NAME, addToBasketButton);
  textContent(addToBasketButton, APP_TEXT_CONTENT.ADD_TO_BASKET);

  addClass('Home', parentElement);
  appendChild(parentElement, mainBurgersDiv);
  appendChild(mainBurgersDiv, burgerMenus);

  appendChild(burgerMenus, addSaladButton);
  appendChild(burgerMenus, addMeatButton);
  appendChild(burgerMenus, addCheeseButton);
  appendChild(burgerMenus, addToBasketButton);

  const priceElement = createElement(ELEMENT.DIV);
  addClass('Param', priceElement);
  const normalPrice = createElement(ELEMENT.DIV);
  textContent(normalPrice, `${APP_TEXT_CONTENT.PRICE} ${defaultBurgerPrice}`);
  appendChild(priceElement, normalPrice);
  const price = APP_TEXT_CONTENT.PRICE;
  function addIngredients1(ingredientType, src) {
    const ingredientPosition = createElement(ELEMENT.IMG);
    setSource(ingredientPosition, src);
    appendChild(burgerBeginning, ingredientPosition);
    ingredientInfo[ingredientType].count += 1;
    if (ingredientInfo[ingredientType].count > 1) {
      store.stockPrice += ingredientInfo[ingredientType].price;
      textContent(
        normalPrice,
        price + store.stockPrice + APP_TEXT_CONTENT.CURRENCY_TYPE,
      );
    }
  }

  function addToBasket() {
    
  }

  // const aboutPageUrl = navigationItems.find((item) => item.title === 'About').url;

  appendChild(mainBurgersDiv, priceElement);
};

export default renderBurgers;
