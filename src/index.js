const navigationItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
function getElementById(elementID){
  return document.getElementById(elementID)
}
const root = getElementById("root");
const navigation = createElement("nav");
const navigationList = createElement("ul");

appendChild(root, navigation)
appendChild(navigation, navigationList)

for (const navigationItem of navigationItems) {
  const navigationLink = createElement("a");

  navigationLink.href = navigationItem.url;
  textContent(navigationLink , navigationItem.title)

  addClass("navigation__link", navigationLink)
  appendChild(navigationList, navigationLink)
}

function addClass(className, element) {
  element.classList.add(className)
}

function appendChild(parentElement, childElement) {
  parentElement.appendChild(childElement)
}

function setAttribute(element, attributeKey, attributeValue) {
  element.setAttribute(attributeKey, attributeValue)
}

function textContent(element, textChange) {
  element.textContent = textChange
}

function createElement(elementType) {
  return document.createElement(elementType)
}

function setSource(element, sourcePath) {
  element.src = sourcePath
}

function addEventListener(element, type, listener ){
  element.addEventListener(type,listener)
}


const ingredientRemove = "ingredientRemove"
const burgerMenus = createElement("div")
addClass("burgers", burgerMenus)
const burgerBeggining = createElement("div");
addClass("burgers", burgerBeggining)
setAttribute(burgerBeggining, "id", "ingredientRemove")
const burgerTop = createElement("img");
setSource(burgerTop, "Images/burgerTop.jfif")
const burgerBottom = createElement("img");
setSource(burgerBottom, "Images/burgerBottom.jfif")
appendChild(burgerMenus, burgerTop)
appendChild(burgerMenus, burgerBeggining)
appendChild(burgerMenus, burgerBottom)
const add1 = createElement("button")
addClass("buttons", add1)
setAttribute(add1, "id", "saladButton")
textContent(add1, "Добавете салата")
addEventListener(add1,"click" , () => addIngredients1("salad", "Images/salad.jpg", "salad2"))
const add2 = createElement("button")
addClass("buttons", add2)
setAttribute(add1, "id", "meatButton")
textContent(add2, "Добавете месо")
addEventListener(add2,"click" , () => addIngredients1("meat", "Images/meat.jpg", "meat2"))
const add3 = createElement("button")
addClass("buttons", add3)
textContent(add3, "Добавете сирене")
setAttribute(add1, "id", "cheeseButton")
addEventListener(add3,"click", () => addIngredients1("cheese", "Images/cheese.jpg", "cheese2"))
const add4 = createElement("button")
addEventListener(add4,"click", () => addToBasket())
addClass("buttons", add4)
textContent(add4, "Добавете в количката")

appendChild(burgerMenus, add1)
appendChild(burgerMenus, add2)
appendChild(burgerMenus, add3)
appendChild(burgerMenus, add4)
appendChild(root,burgerMenus)

const Price = createElement("div");
const add5 = createElement("button")
addClass("buttons", add5)
textContent(add5, "Количка")
const normalPrice = createElement("div")
textContent(normalPrice, "Цена: 5лв.")
appendChild(Price, normalPrice)
appendChild(Price, add5)

Price.appendChild(add5)
let storeNumberofBurgers = 0
const numberOfIngrediensandBurgers = createElement("h1")
const basketContainer = createElement("div")
appendChild(Price, numberOfIngrediensandBurgers)
appendChild(Price, basketContainer)
const ingredientCount = {
  salad: 0,
  meat: 0,
  cheese: 0
}
const ingredientPrice = {
  salad2: 0.5,
  meat2: 2.5,
  cheese2: 1.5
}

let stockPrice = 5
const price = "Цена: "
function addIngredients1(ingredientType, src, ingredients) {
  const ingredientPosition = createElement("img")

  setSource(ingredientPosition, src)
  appendChild(burgerBeggining, ingredientPosition)
  ingredientCount[ingredientType] += 1
  if (ingredientCount[ingredientType] > 1) {
    stockPrice += ingredientPrice[ingredients]
    textContent(normalPrice, price + stockPrice + "лв.")
  }

}


function addToBasket() {
  textContent(normalPrice, " Цена: 5лв.")
  const deletingIngredient = getElementById(ingredientRemove)
  deletingIngredient.innerHTML = null
  storeNumberofBurgers++

  textContent(add5, storeNumberofBurgers + " Бургера в кошницата")


  let entries = Object.entries(ingredientCount);
  const ingredientsList = createElement("ul")
  for (const ingredientInformation of entries) {
    const [ingredientName, ingredientCount1] = ingredientInformation
    addIngredientInfo(ingredientName, ingredientCount1, ingredientsList)

  }
  textContent(numberOfIngrediensandBurgers, `${storeNumberofBurgers} бургера`)
  appendChild(basketContainer, ingredientsList)
  resetBurgerBuilder()
}
function resetBurgerBuilder() {
  for (let placeOfingredient in ingredientCount) {
    if (ingredientCount.hasOwnProperty(placeOfingredient)) {
      ingredientCount[placeOfingredient] = 0;
    }
  }
  stockPrice = 5
}

function addIngredientInfo(ingredientName, ingredientCount, parentNode) {
  const listItem = createElement("li")
  textContent(listItem, `${ingredientCount}: ${ingredientName}`)
  appendChild(parentNode,listItem)
}
appendChild(root,Price)
console.log({ root });
