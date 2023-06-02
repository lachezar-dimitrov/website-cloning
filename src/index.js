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

  navigationLink.classList.add("navigation__link");

  navigationList.appendChild(navigationLink);
}

const ingredientRemove = "ingredientRemove"
const burgerMenus = document.createElement("div");
burgerMenus.classList.add("burgers")
const burgerBeggining= document.createElement("div");
burgerBeggining.classList.add("burgers")
burgerBeggining.setAttribute("id" , ingredientRemove)
const burgerTop = document.createElement("img");
burgerTop.src = "Images/burgerTop.jfif"
const burgerBottom = document.createElement("img");
burgerBottom.src = "Images/burgerBottom.jfif"
burgerMenus.appendChild(burgerTop)
burgerMenus.appendChild(burgerBeggining)
burgerMenus.appendChild(burgerBottom)
const add1 = document.createElement("button")
add1.classList.add("buttons")
add1.textContent = "Добавете салата";
add1.addEventListener('click',() => addIngredients1("salad","Images/salad.jpg"))
const add2 = document.createElement("button")
add2.classList.add("buttons")
add2.textContent = "Добавете месо";
add2.addEventListener('click',() => addIngredients1("meat","Images/meat.jpg"))
const add3 = document.createElement("button")
add3.classList.add("buttons")
add3.textContent = "Добавете сирене";
add3.addEventListener('click',() => addIngredients1("cheese","Images/cheese.jpg"))
const add4 = document.createElement("button")
add4.addEventListener('click', () => addToBasket())
add4.classList.add("buttons")
add4.textContent = "Добави в количка";


burgerMenus.appendChild(add1)
burgerMenus.appendChild(add2)
burgerMenus.appendChild(add3)
burgerMenus.appendChild(add4)
root.appendChild(burgerMenus)

const Price = document.createElement("div");
const add5 = document.createElement("button")
add5.classList.add("buttons")
add5.textContent = "Количка";
const normalPrice = document.createElement("div")
normalPrice.textContent = "Цена: 5лв."
Price.appendChild(normalPrice)
Price.appendChild(add5)

const ingredientCount = {
  salad: 0,
  meat: 0,
  cheese: 0
}

let awer = 5
const cena = "Цена: "
function addIngredients1(ingredientType,src){
    const ingredientPosition = document.createElement("img")
    ingredientPosition.src = src
    ingredientPosition.style.Top = "40px"
    burgerBeggining.appendChild(ingredientPosition)
    ingredientCount[ingredientType]+=1
    if(ingredientCount[ingredientType] > 1){
        awer++ 
        normalPrice.textContent = cena + awer + "лв."
        }
      
}

let storeNumberofBurgers = 0

function addToBasket(){
  normalPrice.textContent = "Цена: 5лв."
  const deletingIngredient = document.getElementById(ingredientRemove)
  deletingIngredient.innerHTML = null
  storeNumberofBurgers++
  add5.textContent = storeNumberofBurgers + " Бургера в кошницата"
    
    

}



root.appendChild(Price)
console.log({ root });
