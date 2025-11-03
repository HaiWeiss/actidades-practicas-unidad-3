import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <div>
      {user ? (
        <div className="home">
          <h1>¡Hola de nuevo {user}</h1>
          <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
      ) : (
        <div className="form-container">
          <Login onLogin={handleLogin} />
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;
