import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config.js';

const productsColRef = collection(db, 'products');

export const getProducts = async () => {
  const data = await getDocs(productsColRef);
  const result = data.docs.map((doc) => ({ ...doc.data() }));
  return result;
};

getProducts();
