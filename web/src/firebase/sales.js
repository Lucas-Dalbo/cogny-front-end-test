import { collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config.js';

const sales = collection(db, 'sales');

export const saveSale = async (doc) => {
  await setDoc(sales, doc);
};
