import { db } from "../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const productsColRef = collection(db, "products");

const getProducts = async () => {
  const data = await getDocs(productsColRef);
  console.log(data.docs);
};

getProducts();
