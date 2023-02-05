import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UncontrolledExample from './componentes/Carousel';
import  QuienesSomos from './navbar/QuienesSomos'
import Contacto from './navbar/Contacto';




function App() {

  
  return (


    <BrowserRouter>
< ColorSchemesExample />
<UncontrolledExample/>

<Routes>
<Route path = "/QuienesSomos" element={ <QuienesSomos/>} />
<Route path = "/verMenu/:category" element={ <ItemListContainer/>} />
<Route path = "/Contacto" element={ <Contacto/>} />
<Route path = "*"  element={ <ItemListContainer/>}/>

</Routes>




</BrowserRouter>


  );
}

export default App;


