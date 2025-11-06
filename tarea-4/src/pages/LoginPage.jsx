import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) return alert("No hay usuarios registrados aún.");

    if (
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      localStorage.setItem("isLogged", true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }

    handleReset();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Iniciar Sesión
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={values.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Entrar
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          ¿No tienes cuenta?{" "}
          <span
            className="text-red-600 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Regístrate
          </span>
        </p>
      </form>
    </main>
  );
};
