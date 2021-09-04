export const updateObj = (oldObj, newObj) => {
  return {
    ...oldObj,
    ...newObj,
  };
};

export const validate = (val, rule) => {
  let isValid = true;
  if (rule.required) {
    isValid = val.trim() !== "" && isValid;
  }
  if (rule.minLength) {
    isValid = val.length >= rule.minLength && isValid;
  }
  if (rule.maxLength) {
    isValid = val.length <= rule.maxLength && isValid;
  }
  if (rule.isEmail) {
    isValid =
      // eslint-disable-next-line
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        val
      ) && isValid;
  }
  if (rule.isNumeric) {
    isValid = /^\d+$/.test(val) && isValid;
  }
  return isValid;
};

export const getBurgerPrice = (ings) => {
  let price = 200;
  const INGREDIENT_PRICES = {
    lettuce: 50,
    tomato: 50,
    onion: 50,
    cheese: 50,
    beef: 50,
    chicken: 50,
    sauce: 50,
    bacon: 50,
    "veg-patty": 50,
    "yogurt-sauce": 50,
  };

  for (let ing in ings) {
    price += INGREDIENT_PRICES[ing] * ings[ing];
  }

  return price.toFixed(2);
};
