import { navigate, useNavigate } from "react-router-dom";
import itemCount from "../itemCounter/itemCount";
import { useState } from "react"

const ItemDetail = ({id, stock, category, image, description, price, name}) => {

    const [cantidad, setCantidad] = useState(1)

const navigate = useNavigate()

const handleVolver = () => {
    navigate(-1)  // Navigate("/")esto sirve para volver al inicio, le podemos poner a donde quiere navegar.poner -1 sirve para volver al lugar donde estaba y no al inicio.
}



return (
<div> 
    <h2>{name}</h2>
    <img src={image}/>
    <br/>
    <small>Categoria:{category}</small>
<p>{description}</p>
<p>Precio:{price}</p>

{/* <itemCount max={stock}
item={{id, stock, category, image, description, price, name}}/> */}
<hr/>
<button className="btn btn-primary" onClick={handleVolver}>Volver</button>
</div>

)
}

export default ItemDetail;

