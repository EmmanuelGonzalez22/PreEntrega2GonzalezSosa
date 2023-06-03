import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { capitalizeFirstLetter } from "../functions/capitalizeLetter";

// referencias a las colecciones de firebase
const productsRef = collection(db, "products");
const categoriesRef = collection(db, "categories");

/* ------------------ LOGICA PARA TRAER COLECCION DE PRODUCTOS ------------------ */

const fetchProducts = async (category) => {
  let productsQuery = productsRef;

  try {
    if (category) {
      const categoryQuery = query(categoriesRef, where("name", "==", category));
      const categorySnapshot = await getDocs(categoryQuery);

      const { docs, empty } = categorySnapshot;

      if (!empty) {
        const categoryId = docs[0].ref;
        productsQuery = query(
          productsRef,
          where("categoryId", "==", categoryId)
        );
      } else {
        return {
          products: [],
          message: "No se encontraron productos para la categoría seleccionada",
        };
      }
    }

    const querySnapshot = await getDocs(productsQuery);
    const productsCollection = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });

    return {
      products: productsCollection,
      message: category
        ? capitalizeFirstLetter(category)
        : "Bienvenidos a Pet´s BRC",
    };
  } catch (error) {
    return {
      products: null,
      message: "Error al obtener los productos: " + error,
    };
  }
};

/* ------------------ LOGICA PARA TRAER UN PRODUCTO POR ID ------------------ */

const fetchProductById = async (id) => {
  const db = getFirestore();
  const productRef = doc(db, "products", id);

  try {
    const productSnapshot = await getDoc(productRef);
    if (!productSnapshot.exists()) {
      return { item: null, message: false };
    }

    const item = {
      id: productSnapshot.id,
      ...productSnapshot.data(),
    };
    return { item, message: true };
  } catch (error) {
    return { item: null, message: "Error al obtener el producto: " + error };
  }
};

/* ------------------ LOGICA PARA TRAER LAS CATEGORIAS ------------------ */

const fetchCategories = async () => {
  try {
    const querySnapshot = await getDocs(categoriesRef);
    const categoriesCollection = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });

    return { categories: categoriesCollection, error: null };
  } catch (error) {
    return {
      categories: null,
      message: "Error al obtener las categorías: " + error,
    };
  }
};

export { fetchProducts, fetchProductById, fetchCategories };
