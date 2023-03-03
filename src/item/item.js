import { Link } from "react-router-dom";

const Item = ({name, image, description, category, price, id}) => {


return (
    <div className="col-3 m-3">
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <p>Precio: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</b></p>
        <p>descripcion: {description}</p>
<small>categoria:{category}</small>
<Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver mas</Link>



    </div>
)   
}

export default Item