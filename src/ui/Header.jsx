import { Link } from "react-router-dom";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-blue-950 px-4 py-3 border-b border-stone-200 flex justify-between">
      <Link to="/" className="text-stone-100 hover:text-stone-50">
        DYJH PE
      </Link>
      <Username />
    </header>
  );
}

export default Header;
