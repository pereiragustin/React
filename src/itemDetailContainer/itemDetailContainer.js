import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail"
import { doc,getDoc } from "firebase/firestore"


const ItemDetailContainer = () =>  {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => { 
        // 1er paso referencia
const docRef = doc(db,"productos", itemId)

        // 2do paso peticion asyncronica
getDoc(docRef)
.then(doc => {
    setItem({...doc.data(), id:doc.id})
})

    }, [itemId])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer;

