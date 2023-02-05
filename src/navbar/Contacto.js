import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {BsFillGeoFill} from 'react-icons/bs'
import {RiWhatsappLine} from 'react-icons/ri'
import {FaHamburger} from 'react-icons/fa'


function Contacto() {
    return (

        <div className="Contacto">
            <br></br>

<h1>Burgers <FaHamburger/> Bar</h1>
<br></br>
<h4><BsFillTelephoneForwardFill/> Tel: 2613 22 00</h4>
<br></br>
<h4><BsFillGeoFill/> Ubicacion: Maldonado (La Barra)  Calle principal: 2205</h4>
<br></br>
    <h4><RiWhatsappLine/> Pedidos via whatsap : 099 456 756</h4>  
    <br></br>  
        </div>
        
    );
  }
  export default Contacto;
