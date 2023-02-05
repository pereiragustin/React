

const Item = ({name, image, description, category, price, id}) => {


return (
    <div className="col-3 m-3">
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <p>{price}  <b>{new Intl.NumberFormat('en-US', {style: 'currency', currrenncy: 'USD'}).format(price)}</b></p>
<small>categoria:{category}</small>
<button className="btn btn-outline-primary">Ver mas</button>



    </div>
)   
}

export default Item