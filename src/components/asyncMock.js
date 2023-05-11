import data from "../data/data.json";

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

/* const fetchData = async () => {
  try {
    const response = await getProducts();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}; */
export { getProducts };
