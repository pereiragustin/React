import {db} from './config.js'
import MOCK from '../data/MOCK_DATA.json' assert {type: 'json'}
import { collection, addDoc } from 'firebase/firestore'


//BORRAMOS ID DE STOCK DE PRODUCTOS
MOCK.forEach(item => delete item.id)

//AGREGAMOS LOS PRODUCTOS AL FIREBASE
const productosRef = collection(db, 'productos')

MOCK.forEach(item => {
    addDoc(productosRef, item)
})
