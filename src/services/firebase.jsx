import { initializeApp } from "firebase/app";
import {collection, doc, getDocs, getFirestore, query, where, getDoc, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1yy2re6alH7wENe3EutV7y9bKt_BTxNA",
  authDomain: "react-proyecto-42782.firebaseapp.com",
  projectId: "react-proyecto-42782",
  storageBucket: "react-proyecto-42782.appspot.com",
  messagingSenderId: "90272853879",
  appId: "1:90272853879:web:c05feff5a8972b7203bb72",
  measurementId: "G-9K6VMCQZ5H"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

export async function getData() {
    const productsCollectionRef = collection(db, "productos")
    const productosSnap = await getDocs(productsCollectionRef)
    const arrayDocs = productosSnap.docs

    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })
    return dataDocs
}

export async function getItemData(idUrl) {
    const docRef = doc(db, "productos", idUrl)
    const docSnap = await getDoc(docRef)
    return { id: docSnap.id, ...docSnap.data()}
}

export async function getcategoryData(categoryId){
    const productsCollectionRef = collection(db, "productos")
    const e = query(productsCollectionRef, where('category', '==', categoryId))
    const productosSnap = await getDocs(e)
    const arrayDocs = productosSnap.docs
    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id}
    })
    return dataDocs
}

export async function createOrdenes(data){
    const ordenesColletionRef = collection(db, "ordenes")
    const response = await addDoc(ordenesColletionRef, data)
    return response.id
}

