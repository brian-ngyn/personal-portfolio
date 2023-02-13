import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="m-w-full">
        <div className="text-[#545454] font-light text-s flex justify-around pt-[3%]">
          <IconButton component={Link} to="/">
            <Avatar src="/logo.svg" />
          </IconButton>
          <div className="group flex space-x-5 self-end pb-4 transition-all duration-300 ease-in-out">
            <Link
              className={location.pathname == "/projects" ?
                "underline underline-offset-[5px]" :
                `hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#545454] before:absolute before:left-0 before:bottom-0`}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={location.pathname == "/contact" ?
                "underline underline-offset-[5px]" :
                "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#545454] before:absolute before:left-0 before:bottom-0 "}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
