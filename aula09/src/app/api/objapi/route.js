import { db } from './../../firebaseConfig'; 
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';


export const obterItens = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const itensObtidos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return itensObtidos;
  } catch (error) {
    console.error('Erro ao carregar os itens:', error);
    throw error;
  }
};


export const addItem = async (nome) => {
  try {
    await addDoc(collection(db, 'items'), { name: nome });
  } catch (error) {
    console.error('Erro ao adicionar o item:', error);
    throw error;
  }
};


export const updateItem = async (id, nome) => {
  try {
    const itemRef = doc(db, 'items', id);
    await updateDoc(itemRef, { name: nome });
  } catch (error) {
    console.error('Erro ao atualizar o item:', error);
    throw error;
  }
};


export const deleteItem = async (id) => {
  try {
    const itemRef = doc(db, 'items', id);
    await deleteDoc(itemRef);
  } catch (error) {
    console.error('Erro ao deletar o item:', error);
    throw error;
  }
};