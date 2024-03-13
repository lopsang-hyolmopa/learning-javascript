const myNums = [1, 2, 3];

const total = myNums.reduce((acc, currentValue) => {
  console.log(`Acc: ${acc} and currentValue: ${currentValue}`);
  return acc + currentValue;
}, 0);

console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrices = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrices);