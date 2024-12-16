import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'todos';

export const getTodos = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addTodo = async (todo) => {
  return await addDoc(collection(db, COLLECTION_NAME), {
    ...todo,
    timestamp: new Date()
  });
};

export const updateTodo = async (id, updates) => {
  const todoRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(todoRef, updates);
};

export const deleteTodo = async (id) => {
  const todoRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(todoRef);
};