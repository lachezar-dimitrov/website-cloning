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
  element.classList.add(className)
}

function appendChild(parentElement, childElement) {
  parentElement.appendChild(childElement)
}

const ingredientRemove = "ingredientRemove"
const burgerMenus = document.createElement("div");
addClass("burgers", burgerMenus)
const burgerBeggining = document.createElement("div");
addClass("burgers", burgerBeggining)
burgerBeggining.setAttribute("id", ingredientRemove)
const burgerTop = document.createElement("img");
burgerTop.src = "Images/burgerTop.jfif"
const burgerBottom = document.createElement("img");
burgerBottom.src = "Images/burgerBottom.jfif"
appendChild(burgerMenus, burgerTop)
appendChild(burgerMenus, burgerBeggining)
appendChild(burgerMenus, burgerBottom)
const add1 = document.createElement("button")
addClass("buttons", add1)
add1.setAttribute("id", 'saladButton')
add1.textContent = "Добавете салата";
add1.addEventListener("click", () => addIngredients1("salad", "Images/salad.jpg", "salad2"))
const add2 = document.createElement("button")
addClass("buttons", add2)
add2.setAttribute("id", 'meatButton')
add2.textContent = "Добавете месо";
add2.addEventListener("click", () => addIngredients1("meat", "Images/meat.jpg", "meat2"))
const add3 = document.createElement("button")
addClass("buttons", add3)
add3.textContent = "Добавете сирене";
add3.setAttribute("id", 'cheeseButton')
add3.addEventListener("click", () => addIngredients1("cheese", "Images/cheese.jpg", "cheese2"))
const add4 = document.createElement("button")
add4.addEventListener("click", () => addToBasket())
addClass("buttons", add4)
add4.textContent = "Добави в количка";

appendChild(burgerMenus, add1)
appendChild(burgerMenus, add2)
appendChild(burgerMenus, add3)
appendChild(burgerMenus, add4)
root.appendChild(burgerMenus)

const Price = document.createElement("div");
const add5 = document.createElement("button")
addClass("buttons", add5)
add5.textContent = "Количка";
const normalPrice = document.createElement("div")
normalPrice.textContent = "Цена: 5лв."
appendChild(Price, normalPrice)
appendChild(Price, add5)

Price.appendChild(add5)
let storeNumberofBurgers = 0
const numberOfIngrediensandBurgers = document.createElement("h1")
const basketContainer = document.createElement("div")
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
  const ingredientPosition = document.createElement("img")
  ingredientPosition.src = src
  burgerBeggining.appendChild(ingredientPosition)
  ingredientCount[ingredientType] += 1
  if (ingredientCount[ingredientType] > 1) {
    stockPrice += ingredientPrice[ingredients]
    normalPrice.textContent = price + stockPrice + "лв."
  }

}


function addToBasket() {
  normalPrice.textContent = "Цена: 5лв."
  const deletingIngredient = document.getElementById(ingredientRemove)
  deletingIngredient.innerHTML = null
  storeNumberofBurgers++
  add5.textContent = storeNumberofBurgers + " Бургера в кошницата"


  let entries = Object.entries(ingredientCount);
  const ingredientsList = document.createElement("ul")
  for (const ingredientInformation of entries) {
    const [ingredientName, ingredientCount1] = ingredientInformation
    addIngredientInfo(ingredientName, ingredientCount1, ingredientsList)

  }
  numberOfIngrediensandBurgers.textContent = `${storeNumberofBurgers} бургера`
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
  const listItem = document.createElement("li")
  listItem.textContent = `${ingredientCount}: ${ingredientName}`
  parentNode.appendChild(listItem)
}

root.appendChild(Price)
console.log({ root });
