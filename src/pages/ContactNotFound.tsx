import { Link } from "react-router-dom";
export const ContactNotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="card  text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h1 className="text-white">Contact Not Found!</h1>
          <Link className="link link-hover text-xs" to={"/contacts"}>
            Goto Contact page
          </Link>
        </div>
      </div>
    </div>
  );
};
