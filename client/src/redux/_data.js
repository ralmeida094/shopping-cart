const faker = require("faker");

const getFakeProduct = () => {
  return {
    id: faker.random.number(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    tags: [faker.commerce.department()],
  };
};

const getFakeProducts = (numOfProducts) => {
  const fakeProducts = [];

  for (let i = 0; i < numOfProducts; i++) {
    const fakeProduct = getFakeProduct();
    fakeProducts.push(fakeProduct);
  }

  return fakeProducts;
};

module.exports = {
  getFakeProducts,
};
