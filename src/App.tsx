import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Bienvenidos from "./Pages/Bienvenidos";
import Servicios from "./Pages/Servicios";
import Galeria from "./Pages/Galeria";
import Proyectos from "./Pages/Proyectos";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute"; // Asegúrate de la ruta correcta
import Registro from "./Components/Registro";
import InicioAltern from "./Pages/InicioAltern";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenidos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />{" "}
        <Route
          path="/Inicio"
          element={
            <PrivateRoute>
              <Inicio />
            </PrivateRoute>
          }
        />
        <Route path="/InicioAltern" element={<InicioAltern />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
