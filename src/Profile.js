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

const enterProfile = (parentElement) => {
  const userNameandPassword = createElement(ELEMENT.DIV);
  addClass('mainDivNameandPassword', userNameandPassword);
  const enterName = createElement(ELEMENT.DIV);
  addClass('divName_Name', enterName);
  const enterPassword = createElement(ELEMENT.DIV);
  addClass('divName_Password', enterPassword);
  const labelName = createElement(ELEMENT.LABEL);
  textContent(labelName, 'Въведете име');
  setAttribute(labelName, 'for', 'firstName');
  const labelPassword = createElement(ELEMENT.LABEL);
  textContent(labelPassword, 'Въведете парола');
  setAttribute(labelPassword, 'for', 'password');
  const inputName = createElement(ELEMENT.INPUT);
  addClass('inputView', inputName);
  setAttribute(inputName, 'type', 'text');
  setAttribute(inputName, 'name', 'firstName');
  setAttribute(inputName, 'id', 'firstName');
  setAttribute(inputName, 'placeholder', 'Въведете име');
  const inputPassword = createElement(ELEMENT.INPUT);
  addClass('inputView', inputPassword);
  setAttribute(inputPassword, 'type', 'password');
  setAttribute(inputPassword, 'name', 'password');
  setAttribute(inputPassword, 'id', 'password');
  setAttribute(inputPassword, 'placeholder', 'Въведете парола');
  const buttonEnter = createElement(ELEMENT.BUTTON);
  addClass('buttonEnter', buttonEnter);
  textContent(buttonEnter, 'Влез');
  // const deletingIngredient = getElementById(INGREDIENT_REMOVE_ID);
  // deletingIngredient.innerHTML = null;
  appendChild(enterName, labelName);
  appendChild(enterPassword, labelPassword);
  appendChild(enterName, inputName);
  appendChild(enterPassword, inputPassword);
  appendChild(userNameandPassword, enterName);
  appendChild(userNameandPassword, enterPassword);
  appendChild(userNameandPassword, buttonEnter);
  appendChild(parentElement, userNameandPassword);
  // resetBurgerBuilder();
};

export default enterProfile;
