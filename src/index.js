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

const root = document.getElementById("root");
const navigation = document.createElement("nav");
const navigationList = document.createElement("ul");

root.appendChild(navigation);
navigation.appendChild(navigationList);

for (const navigationItem of navigationItems) {
  const navigationLink = document.createElement("a");

  navigationLink.href = navigationItem.url;
  navigationLink.textContent = navigationItem.title;

  addClass("navigation__link", navigationLink)

  navigationList.appendChild(navigationLink);
}

function addClass(className, element) {
  console.log(className)
  console.log(element)
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

function createElement(elementType){
  return document.createElement(elementType)
}

const ingredientRemove = "ingredientRemove"
const burgerMenus = createElement("div")
addClass("burgers", burgerMenus)
const burgerBeggining = createElement("div");
addClass("burgers", burgerBeggining)
setAttribute(burgerBeggining, "id", "ingredientRemove")
const burgerTop = createElement("img");
burgerTop.src = "Images/burgerTop.jfif"
const burgerBottom = createElement("img");
burgerBottom.src = "Images/burgerBottom.jfif"
appendChild(burgerMenus, burgerTop)
appendChild(burgerMenus, burgerBeggining)
appendChild(burgerMenus, burgerBottom)
const add1 = createElement("button")
addClass("buttons", add1)
setAttribute(add1, "id", "saladButton")
textContent(add1, "Добавете салата")
add1.addEventListener("click", () => addIngredients1("salad", "Images/salad.jpg", "salad2"))
const add2 = createElement("button")
addClass("buttons", add2)
setAttribute(add1, "id", "meatButton")
textContent(add2, "Добавете месо")
add2.addEventListener("click", () => addIngredients1("meat", "Images/meat.jpg", "meat2"))
const add3 = createElement("button")
addClass("buttons", add3)
textContent(add3, "Добавете сирене")
setAttribute(add1, "id", "cheeseButton")
add3.addEventListener("click", () => addIngredients1("cheese", "Images/cheese.jpg", "cheese2"))
const add4 = createElement("button")
add4.addEventListener("click", () => addToBasket())
addClass("buttons", add4)
textContent(add4, "Добавете в количката")

appendChild(burgerMenus, add1)
appendChild(burgerMenus, add2)
appendChild(burgerMenus, add3)
appendChild(burgerMenus, add4)
root.appendChild(burgerMenus)

const Price = createElement("div");
const add5 = createElement("button")
addClass("buttons", add5)
textContent(add5, "Количка")
add5.textContent = "Количка";
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
  ingredientPosition.src = src
  burgerBeggining.appendChild(ingredientPosition)
  ingredientCount[ingredientType] += 1
  if (ingredientCount[ingredientType] > 1) {
    stockPrice += ingredientPrice[ingredients]
    textContent(normalPrice, price + stockPrice + "лв.")
  }

}


function addToBasket() {
  normalPrice.textContent = "Цена: 5лв."
  const deletingIngredient = document.getElementById(ingredientRemove)
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
  basketContainer.appendChild(ingredientsList)
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
  parentNode.appendChild(listItem)
}

root.appendChild(Price)
console.log({ root });
