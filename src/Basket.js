import {
  defaultBurgerPrice,
  ingredientInfo,
  resetBurgerBuilder,
  store,
} from './Store.js';
import {
  INGREDIENT_REMOVE_ID,
  BUTTONS_CLASS_NAME,
  ELEMENT,
  APP_TEXT_CONTENT,
  IMG_PATH,
  MAIN_CONTENT_ID,
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

const addIngredientInfo = (ingredientName, ingredientCount12, parentNode) => {
  const listItem = createElement(ELEMENT.LI);
  textContent(listItem, `${ingredientCount12}: ${ingredientName}`);
  appendChild(parentNode, listItem);
};

// const renderBasketElement = (parentElement) => {

// }

const renderBasket = (parentElement) => {
  const finalPrice = createElement(ELEMENT.DIV);
  const Price = createElement(ELEMENT.DIV);
  const numberOfIngrediensandBurgers = createElement(ELEMENT.H1);
  const basketContainer = createElement(ELEMENT.DIV);

  appendChild(Price, numberOfIngrediensandBurgers);
  appendChild(Price, basketContainer);
  textContent(finalPrice, `${APP_TEXT_CONTENT.PRICE} $5`);
  appendChild(parentElement, finalPrice);
  textContent(
    finalPrice,
    `${APP_TEXT_CONTENT.PRICE} ${defaultBurgerPrice} ${APP_TEXT_CONTENT.CURRENCY_TYPE}`
  );
  //const deletingIngredient = getElementById(INGREDIENT_REMOVE_ID);
  //deletingIngredient.innerHTML = null;
  store.numberofBurgers += 1;
  const entries = Object.entries(ingredientInfo);
  const ingredientsList = createElement(ELEMENT.UL);
  entries.forEach((ingredientEntry) => {
    const [ingredientName, ingredientProps] = ingredientEntry;
    addIngredientInfo(ingredientName, ingredientProps.count, ingredientsList);
  });
  textContent(numberOfIngrediensandBurgers, `${store.numberofBurgers} бургера`);
  appendChild(basketContainer, ingredientsList);
  appendChild(parentElement, basketContainer);
  //resetBurgerBuilder();
};

export default renderBasket;
