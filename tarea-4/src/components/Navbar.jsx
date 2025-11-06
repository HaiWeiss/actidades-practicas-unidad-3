import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-semibold text-red-600 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          GYMBRO
        </h1>
        <button
          onClick={handleLogout}
          className="text-gray-700 hover:text-red-500 font-medium transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
