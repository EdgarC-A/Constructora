import Example from "../Components/Navbar";
import fondoImagen from "../Components/IMG/contructora 2.jpg";
import Carrusel from "../Components/carrusel";
import { LayoutGridDemo } from "../Components/Iu/LayoutComp/LayoutGridDemo";
import Logosemployed from "../Components/Logosemployed";
import { TimelineDemo } from "../Components/Iu/Timeline/TimelineDemo";

export default function InicioAltern() {
  return (
    <div
      className="h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${fondoImagen})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Example />
      <div className="relative flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-6xl text-white font-extralight ">COSNTRUC</h1>
        <p className="mt-5 font-bold text-white">CARTAGENA-COLOMBIA</p>
      </div>
      <article>
        <Carrusel />
        <LayoutGridDemo />
        <Logosemployed />
      </article>
      <section>
        <TimelineDemo />
      </section>
    </div>
  );
}
