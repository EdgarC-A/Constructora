import { useState } from "react";
import { supabase } from "../supabaseClient"; // Ajusta la ruta según tu estructura de archivos
import { Link } from "react-router-dom";

const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Realizar el registro
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    // Verificar si el usuario se ha creado
    if (data?.user) {
      // Insertar el usuario en la tabla 'users'
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: data.user.id, name, email, password }]); // Nota: almacena solo el ID, nombre y correo

      if (insertError) {
        setError(insertError.message);
      } else {
        alert("Usuario registrado con éxito!");
        setName("");
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
      <div className="p-4 m-4 bg-black border border-solid rounded-md border-white/25 lg:p-20 lg:m-20 md:p-8 md:m-8">
        <h1 className="mb-4 text-4xl text-white">Bienvenidos a Construct Sa</h1>
        <p className="mb-6 font-light text-white">
          Regístrate para acceder a las funciones asignadas
        </p>

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 gap-4 text-left md:grid-cols-2"
        >
          <div className="flex flex-col">
            <label className="mb-2 text-white" htmlFor="name">
              Nombre Completo:
            </label>
            <input
              className="p-2 text-lg transition duration-200 ease-linear border rounded-md border-neutral-950 hover:border-yellow-600 bg-zinc-800"
              type="text"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-white" htmlFor="email">
              Correo:
            </label>
            <input
              className="p-2 text-lg transition duration-200 ease-linear border rounded-md border-neutral-950 hover:border-yellow-600 bg-zinc-800"
              type="email"
              placeholder="Tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-white" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="p-2 text-lg transition duration-200 ease-linear border rounded-md border-neutral-950 hover:border-yellow-600 bg-zinc-800"
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
            />
          </div>

          <button
            className="col-span-1 p-2 mt-4 text-white transition duration-200 ease-linear bg-yellow-500 rounded-md md:col-span-2 hover:bg-yellow-400"
            type="submit"
          >
            Registrar
          </button>

          {error && (
            <p className="col-span-1 mt-2 text-red-500 md:col-span-2">
              {error}
            </p>
          )}

          <div className="col-span-1 mt-2 md:col-span-2">
            <Link to="/Login" className="text-yellow-500 hover:underline">
              Iniciar Sesión
            </Link>
          </div>
        </form>
        <div className="">
          <Link
            to="/"
            className="p-2 text-black transition duration-200 ease-linear bg-white rounded-full hover:bg-slate-400"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;
