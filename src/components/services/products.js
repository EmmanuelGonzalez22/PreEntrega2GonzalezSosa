import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

/* ------------------ LOGICA PARA TRAER COLECCION DE PRODUCTOS ------------------ */

const fetchProducts = async (category, setIsLoading, setProducts, setError) => {
  try {
    setIsLoading(true);
    const db = getFirestore();
    const productsRef = collection(db, "products");
    let queryRef = productsRef;

    if (category) {
      const categoriesRef = collection(db, "categories");
      const categoryQuery = query(categoriesRef, where("name", "==", category));
      const categorySnapshot = await getDocs(categoryQuery);

      if (!categorySnapshot.empty) {
        const categoryId = categorySnapshot.docs[0].ref;
        queryRef = query(productsRef, where("categoryId", "==", categoryId));
      } else {
        setProducts([]);
        setIsLoading(false);
        return;
      }
    }

    const querySnapshot = await getDocs(queryRef);
    const productsCollection = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });

    setProducts(productsCollection);
  } catch (error) {
    setError("Error al obtener los productos: " + error.message);
  } finally {
    setIsLoading(false);
  }
};

/* ------------------ LOGICA PARA TRAER UN PRODUCTO POR ID ------------------ */

const fetchProductById = async (id, setItem, setIsLoading, setError) => {
  try {
    const db = getFirestore();
    const productRef = doc(db, "products", id);
    const docSnap = await getDoc(productRef);
    if (docSnap.exists()) {
      setItem({ id: docSnap.id, ...docSnap.data() });
    }
  } catch (error) {
    setError("Error al obtener el producto: " + error.message);
  } finally {
    setIsLoading(false);
  }
};

export { fetchProducts, fetchProductById };
