import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config.js';

const sales = collection(db, 'sales');

export const saveSale = async (doc, total) => {
  await addDoc(sales, { products: doc, total });
};
