import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(values));
    alert("Registro exitoso 🎉");
    handleReset();
    navigate("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Crear cuenta
        </h2>

        {["username", "firstname", "lastname", "email", "password"].map(
          (field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={
                field === "username"
                  ? "Nombre de usuario"
                  : field === "firstname"
                    ? "Nombre"
                    : field === "lastname"
                      ? "Apellido"
                      : field === "email"
                        ? "Correo electrónico"
                        : "Contraseña"
              }
              value={values[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          ),
        )}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Registrarse
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <span
            className="text-red-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </span>
        </p>
      </form>
    </main>
  );
};
