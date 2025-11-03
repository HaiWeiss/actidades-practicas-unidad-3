import useForm from "../hooks/useForm";

export default function Register() {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  const { values, handleChange, handleReset } = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del registro: ", values);

    localStorage.setItem("userData", JSON.stringify(values));

    alert("El usuario se registro correctamente");
    handleReset();
  };

  return (
    <div className="form-main">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={values.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstname"
          placeholder="Nombre"
          value={values.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={values.lastname}
          onChange={handleChange}
          required
        />
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

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
