import { useState } from "react"
import {FaHamburger} from 'react-icons/fa'
import { FaCheckSquare } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";




// aqui en vez de function iria CONST
const ItemList = ( { productos } ) => {


    
    let [counter, setCounter] = useState(1)

    const sumar = () => {
        //  setCounter() modifica el counter y avisa a react para actualizarlo.
        setCounter(counter + 1)

    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    //estructura del listado
    return (

        <div className="container my-4">
            <h2>Menu  Burger <FaHamburger/> Bar </h2>

            <section className="menus">
                {productos.map((prod => (
                    <div key={prod.id} className="col-6">
                        <br></br>
                        <hr></hr>
                        <img src={prod.image} alt={prod.name} />
                        <br></br>
                        <br></br>
                        <h4><FaHamburger/> {prod.name}</h4>
                        <p><FaCheckSquare/>  {prod.description}</p>
                        <p><ImPriceTag/> Precio $: <b>{prod.price}</b></p>
                        <button className="btn btn-secondary" onClick={sumar}>VER MAS </button>
                        <p>categoria: {prod.category}</p>
                        <p>Cantidad {counter}</p>
                        
                    </div>
                    // manera de que react modifique el counter al seleccionar mi pedido y darle click a "la quiero" usamos control de estado
                )))}

            </section>
        </div>
    )
}

export default ItemList
