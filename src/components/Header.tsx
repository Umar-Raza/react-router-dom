import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="navbar sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          mu
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
