
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className='Carousel1'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/img3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >Sabores Unicos</h3>
          <p>Creamos el sabor mas rico de todo Uruguay</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/img7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Menu Adaptados</h3>
          <p>Para todas las edades y todos los gustos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carousel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nuestras Porciones</h3>
          <p>Tamanos para todos los gustos </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default UncontrolledExample;