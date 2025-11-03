import useForm from "../hooks/useForm";

export default function Login({ onLogin }) {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No hay ningun usuario registrado todavia");
      return;
    }

    if (
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      onLogin(storedUser.username);

      alert("Se inicio sesion");
      handleReset();
    } else {
      alert("Email o contraseña incorrecta");
    }
  };

  return (
    <div className="form-main">
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electronico"
          value={values.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}
