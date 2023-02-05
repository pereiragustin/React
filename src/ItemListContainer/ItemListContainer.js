import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
 
const [Productos,setProductos] = useState([])
const {categoryId} = useParams

useEffect(() => {
    pedirDatos()
    .then((res) => {
        if(!categoryId) {
            setProductos(res.filter(Prod => Prod.categoryId === categoryId))
        } else {
            setProductos(res)
        }
        
    })
    .catch((err) => {
        console.log(err)
    })    

},[])


// aqui el return, recibe los productos, del itemlist
    return (
        <div>
            <ItemList Productos={Productos}/>
        </div>
    )
}


export default ItemListContainer