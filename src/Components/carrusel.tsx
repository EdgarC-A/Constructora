import icon1 from "./IMG/construct.png";
import icon2 from "./IMG/terminado.png";

export default function Carrusel() {
  return (
    <div>
      <section className="flex flex-col m-5 mt-28 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-2 text-3xl font-semibold text-center text-white lg:text-left dark:text-black">
            Nosotros
          </h1>
          <h1 className="text-3xl font-light text-white dark:text-black">
            Ingenieros Capacitados
          </h1>
          <p className="mt-5 text-white font-extralight dark:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            tempora dolor molestias? Ab esse fugit quos doloribus laudantium
            inventore. A, sunt. Debitis tempore blanditiis repellat velit optio,
            accusantium explicabo neque?
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center flex-1 ">
          <img width="60" height="60" src={icon1} alt="skyscrapers" />
          <h1 className="text-white/80 dark:text-black">PROYECTOS LICITADOS</h1>
          <h1 className="text-5xl text-white dark:text-black">207</h1>
        </div>
        <div className="relative flex flex-col items-center justify-center flex-1 ">
          <img src={icon2} alt="" />
          <h1 className="text-white/80 dark:text-black">
            PROYECTOS TERMINADOS
          </h1>
          <h1 className="text-5xl text-white dark:text-black">120</h1>
        </div>
      </section>
      <div className="text-center lg:text-left">
        <button className="relative px-8 py-2 text-black transition duration-200 bg-transparent border border-white dark:border-white group ">
          <div className="absolute w-full h-full transition-all duration-200 bg-yellow-300 -bottom-2 -right-2 -z-10 group-hover:bottom-0 group-hover:right-0" />
          <span className="relative">Contactanos!</span>
        </button>
      </div>
    </div>
  );
}
