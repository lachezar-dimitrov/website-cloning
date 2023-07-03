export const ingredientInfo = {
  salad: {
    count: 0,
    price: 0.5,
  },
  meat: {
    count: 0,
    price: 2.5,
  },
  cheese: {
    count: 0,
    price: 1.5,
  },
};

export const defaultBurgerPrice = 5;

export const store = {
  numberofBurgers: 0,
  stockPrice: defaultBurgerPrice,
};
export const resetBurgerBuilder = () => {
  Object.keys(ingredientInfo).forEach((placeOfingredient) => {
    ingredientInfo[placeOfingredient].count = 0;
  });
  store.stockPrice = defaultBurgerPrice;
};
