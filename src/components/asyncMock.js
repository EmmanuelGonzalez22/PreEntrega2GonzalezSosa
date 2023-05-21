import data from "../data/data.json";

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((prod) => prod.id === id);
      item ? resolve(item) : reject({ error: "El producto no existe" });
    }, 2000);
  });
};

export { getProducts, getProductById };
