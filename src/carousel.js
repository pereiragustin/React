import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="."
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sabor</h3>
          <p>Nuestros cocineros dedican recetas exclusivas y especiales para que pruebes un producto de calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Calidad</h3>
          <p>Contamos con los mejores productos del mercado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Confianza</h3>
          <p>
            Con mas de 5 anos en el mercado, garantizamos confianza en todos nuestros productos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;