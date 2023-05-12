import data from "../data/data.json";

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export { getProducts };
