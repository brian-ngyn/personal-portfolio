import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-row-reverse space-x-4 space-x-reverse p-6 text-[#E0E1DD] text-lg">
      <Link className={location.pathname == "/contact" ? "underline underline-offset-auto font-semibold" : ""} to="/contact">
        Contact
      </Link>
      <Link className={location.pathname == "/projects" ? "underline underline-offset-auto font-semibold" : ""} to="/projects">
        Projects
      </Link>
      <Link className={location.pathname == "/" ? "underline underline-offset-auto font-semibold" : ""} to="/">
        Home
      </Link>
    </div>
  );
}
export default Navbar;