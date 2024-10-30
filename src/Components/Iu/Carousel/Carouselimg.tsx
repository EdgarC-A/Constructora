import { useState } from "react";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/foto-gratis/trabajadores-examinando-obra_1122-970.jpg?t=st=1729691890~exp=1729695490~hmac=a8a6a78744346bf659d3f9dd758ac46a249bf5805b0808d2e999b206cba6f6f2&w=1380",
    "https://img.freepik.com/foto-gratis/barra-acero-sitio-construccion_1150-10126.jpg?t=st=1729691908~exp=1729695508~hmac=390cab58aa95a756a0ef41d607d65c2088e2d39b03b1428ef55f3a7fef9a8699&w=1380",
    "https://img.freepik.com/foto-gratis/maquinas-pesadas-trabajadores-construccion-trabajando-edificio_181624-8234.jpg?t=st=1729691929~exp=1729695529~hmac=ac721edce505fecb04768a3b544d2ad2371aeea1341b980e7dbeca809718d7ae&w=996",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Carrusel */}
      <div className="overflow-hidden relative w-full h-[500px]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-full transition duration-500 ease-in-out"
        />
      </div>

      {/* Botones de control */}
      <button
        onClick={goToPrevious}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 left-4 hover:bg-gray-600"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 right-4 hover:bg-gray-600"
      >
        &#9654;
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
