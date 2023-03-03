import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UncontrolledExample from './componentes/Carousel';
import  QuienesSomos from './navbar/QuienesSomos' 
import Contacto from './navbar/Contacto';
import Checkout from './componentes/Checkout/Chekout';




function App() {

  
  return (


    <BrowserRouter> 
< ColorSchemesExample />
<UncontrolledExample/>

<Routes>
<Route path = "/Contacto" element={ <Contacto/>} />
<Route path = "/QuienesSomos" element={ <QuienesSomos/>} />
<Route path = "/productos/:categoryId" element={ <ItemListContainer/>} />
<Route path = "/"  element={ <ItemListContainer/>}/> 
<Route path = "*" element={ <Navigate to={"/"}/> }/>
<Route path = "/Checkout" element={ <Checkout/> }/>



</Routes>




</BrowserRouter>


  );
}

export default App;


