import fondoImagen from "../Components/IMG/contructora.jpg";
import { Link } from "react-router-dom";

export default function Bienvenidos() {
  return (
    <section>
      <div className="absolute right-0 z-20 top-5">
        <Link to="Login">
          <button className="px-4 py-2 m-3 text-sm transition duration-200 transform border rounded-md border-neutral-300 bg-neutral-100 text-neutral-500 hover:-translate-y-1 hover:shadow-md">
            iniciar Sesion
          </button>{" "}
        </Link>
        <Link to="Registro">
          <button className="px-4 py-2 m-3 text-sm transition duration-200 transform border rounded-md border-neutral-300 bg-neutral-100 text-neutral-500 hover:-translate-y-1 hover:shadow-md">
            Registrarme
          </button>
        </Link>
      </div>

      <div
        className="relative w-full h-auto min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${fondoImagen})` }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div>
            <p className="relative z-10 m-2 text-center text-white/80 font-extralight">
              CARTAGENA | BOLIVAR | COLOMBIA 2024{" "}
            </p>
          </div>
          <h1 className="z-10 text-4xl text-center text-white">
            BIENVENIDOS A CONSTRUCT S.A
          </h1>
          <div className="mt-6">
            <Link to="/InicioAltern">
              <button className="relative z-10 px-8 py-2 text-black transition duration-200 bg-transparent border border-white dark:border-white group">
                <div className="absolute w-full h-full transition-all duration-200 bg-yellow-300 -bottom-2 -right-2 -z-10 group-hover:bottom-0 group-hover:right-0" />
                <span className="relative z-10">VISITAR SIN REGISTRAR</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
}
