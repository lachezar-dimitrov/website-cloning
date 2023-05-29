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

console.log({ root });
