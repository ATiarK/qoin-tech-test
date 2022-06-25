import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <nav className="shadow-md h-12 bg-blue-400 text-white px-10">
      <div className="flex justify-between text-xl">
        <button onClick={() => navigate("/")}>
          <i className="fa-solid fa-house my-3"></i>
        </button>
        <h3 className="font-semibold my-auto">{title}</h3>
        <button onClick={() => navigate("/genres")}>
          <i className="fa-solid fa-list my-3"></i>
        </button>
      </div>
    </nav>
  );
}
