import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCategories,
  fetchProductById,
  fetchProducts,
} from "../../services/products";

const useServices = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("Bienvenidos a Pet´s BRC");
  const [item, setItem] = useState(null);
  const { category } = useParams();
  const { id } = useParams();

  /* CARGA LAS CATEGORIAS */
  const loadCategories = async () => {
    try {
      const { categories } = await fetchCategories();
      if (categories) {
        setCategories(categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  /* CARGA LOS PRODUCTOS */
  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await fetchProducts(category);
      setProducts(data.products);
      setMsg(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /* CARGA PRODUCTO POR ID */
  const loadProduct = async () => {
    try {
      const response = await fetchProductById(id);
      if (!response.message) {
        setMsg("No se encontró el producto");
      } else {
        setItem(response.item);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    categories,
    products,
    isLoading,
    error,
    msg,
    item,
    id,
    category,
    loadCategories,
    loadProducts,
    loadProduct,
  };
};

export { useServices };
