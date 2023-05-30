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

const burgerMenus = document.createElement("div");
burgerMenus.classList.add("burgers")
const burgerBeggining= document.createElement("div");
burgerBeggining.classList.add("burgers")
const burgerTop = document.createElement("img");
burgerTop.src = "Images/burgerTop.jfif"
const burgerBottom = document.createElement("img");
burgerBottom.src = "Images/burgerBottom.jfif"
burgerBeggining.appendChild(burgerTop)
burgerMenus.appendChild(burgerBeggining)
burgerMenus.appendChild(burgerBottom)
const add1 = document.createElement("button")
add1.classList.add("buttons")
add1.textContent = "Добавете салата";
add1.setAttribute("onclick","addIngredients1()")
const add2 = document.createElement("button")
add2.classList.add("buttons")
add2.textContent = "Добавете месо";
add2.setAttribute("onclick","addIngredients2()")
const add3 = document.createElement("button")
add3.classList.add("buttons")
add3.textContent = "Добавете сирене + 1lv";
add3.setAttribute("onclick","addIngredients3()")
burgerMenus.appendChild(add1)
burgerMenus.appendChild(add2)
burgerMenus.appendChild(add3)

root.appendChild(burgerMenus)

const Price = document.createElement("div");
let normalPrice=document.createElement("h1")
normalPrice.textContent = "Цена :5лв."
Price.appendChild(normalPrice)

let count = 0
let brojsteps = 0
let brojsteps1 = 0
let brojsteps2 = 0
const cena = "Цена: "
function addIngredients1(){
    const addSalad = document.createElement("img")
    addSalad.src = "Images/salad.jpg"
    addSalad.style.Top = "40px"
    burgerBeggining.appendChild(addSalad)
    brojsteps++
    let awer = 5
    if(brojsteps>1){
        count++
        awer = awer + count
        normalPrice.textContent = cena + awer + "лв."
        }
}
function addIngredients2(){
    const addSalad = document.createElement("img")
    addSalad.src = "Images/meat.jpg"
    addSalad.style.Top = "40px"
    burgerBeggining.appendChild(addSalad)
    brojsteps1++
    let awer = 5
    if(brojsteps1>1){
        count++
        awer = awer + count
        normalPrice.textContent = cena + awer + "лв."
        }
}
function addIngredients3(){
    const addSalad = document.createElement("img")
    addSalad.src = "Images/cheese.jpg"
    addSalad.style.Top = "40px"
    burgerBeggining.appendChild(addSalad)
    brojsteps2++
    let awer = 5
    if(brojsteps2>1){
        count++
        awer = awer + count
        normalPrice.textContent = cena + awer + "лв."
        }
}



root.appendChild(Price)
console.log({ root });
