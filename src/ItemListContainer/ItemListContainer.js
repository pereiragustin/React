import { useEffect, useState } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"  
import { collection,getDocs,limit,query,where } from "firebase/firestore"
import {db} from "../firebase/config"

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
const { categoryId } = useParams() 


useEffect(() => {   
    setLoading(true) 


const productosRef = collection(db, "productos")
const q = categoryId
                ? query(productosRef, where("category","==",categoryId), )
                : productosRef




getDocs(q)
.then((resp) => {
    
    setProductos ( resp.docs.map((doc) =>{  
        return {
            ...doc.data(), 
            id: doc.id
        }
    } ))
})
.finally(() => {
    setLoading(false)
})

}, [categoryId])


    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                :<ItemList productos={productos}/>  
            }
        </div>
    )
}

export default ItemListContainer