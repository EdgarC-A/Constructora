import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Error al iniciar sesión: " + error.message);
        console.log(error);
      } else {
        console.log("Inicio de sesión exitoso:", data);
        navigate("/Inicio"); // Redirige al dashboard o la ruta que prefieras
      }
    } catch (error) {
      console.error("Error de red:", error);
      setError("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
      <div className="p-4 m-4 bg-black border border-solid rounded-md border-white/25 lg:p-20 lg:m-20 md:p-8 md:m-8">
        <h1 className="mb-4 text-4xl text-white">Iniciar Sesión</h1>
        <form
          className="grid grid-cols-1 gap-4 text-left md:grid-cols-2"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-white" htmlFor="email">
              Correo electrónico:
            </label>
            <input
              className="p-2 text-lg transition duration-200 ease-linear border rounded-md border-neutral-950 hover:border-yellow-600 bg-zinc-800"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-white" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="p-2 text-lg transition duration-200 ease-linear border rounded-md border-neutral-950 hover:border-yellow-600 bg-zinc-800"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="col-span-1 p-2 mt-4 text-white transition duration-200 ease-linear bg-yellow-500 rounded-md md:col-span-2 hover:bg-yellow-400"
            type="submit"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>

          {error && <p className="error">{error}</p>}
          <div className="">
            <p className="mt-4 text-white">
              ¿Olvidaste tu contraseña?{" "}
              <Link className="text-yellow-600" to="/reset-password">
                Recupérala aquí
              </Link>
              <p className="mt-4">
                ¿No Tienes una cuenta?{" "}
                <Link className="text-yellow-600" to="/Registro">
                  Registrate Gratis
                </Link>
                <br />
                <div className="mt-5">
                  <Link
                    to="/"
                    className="p-2 text-black transition duration-200 ease-linear bg-white rounded-full hover:bg-slate-400"
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </p>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
