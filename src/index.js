/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import renderBasket from './Basket.js';
import enterProfile from './Profile.js';
import renderBurgers from './burgers.js';
import {
  ROOT_ID,
  NAVIGATION_LINK,
  ELEMENT,
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

const renderMainContent = (navigationItem, mainContentContainer) => {
  // eslint-disable-next-line no-param-reassign
  mainContentContainer.innerHTML = null;
  navigationItem.renderContent(mainContentContainer);
};

const renderNavigationItem = (navigationItem, navigationList, mainContentContainer) => {
  const navigationLink = createElement(ELEMENT.DIV);
  textContent(navigationLink, navigationItem.title);
  addClass(NAVIGATION_LINK, navigationLink);
  appendChild(navigationList, navigationLink);
  addEventListener(navigationLink, 'click', () => renderMainContent(navigationItem, mainContentContainer));
};
const navigationItems = [
  {
    title: 'Home',
    renderContent: renderBurgers,
  },
  {
    title: 'Basket',
    renderContent: renderBasket,
  },
  {
    title: 'Profile',
    renderContent: enterProfile,
  },
];

const root = getElementById(ROOT_ID);
const navigation = createElement(ELEMENT.NAV);
const navigationList = createElement(ELEMENT.UL);
const mainContentContainer = createElement(ELEMENT.DIV);

appendChild(root, navigation);
appendChild(navigation, navigationList);
appendChild(root, mainContentContainer);

navigationItems.forEach((navigationItem) => renderNavigationItem(navigationItem, navigationList, mainContentContainer));

renderBurgers(mainContentContainer);
