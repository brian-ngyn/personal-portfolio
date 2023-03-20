import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavbarContext } from "../context/NavbarContext";

function Navbar() {
  const location = useLocation();
  // const { darkMode, toggleDarkMode } = useNavbarContext();

  // const handleDarkMode = () => {
  //   return darkMode ? (
  //     <IconButton onClick={() => { toggleDarkMode() }}>
  //       <ToggleOnIcon />
  //     </IconButton>
  //   ) : (
  //     <IconButton onClick={() => { toggleDarkMode() }}>
  //       <ToggleOffIcon />
  //     </IconButton>
  //   );
  // };

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <motion.nav
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ y: { type: "spring", duration: 1 } }}
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <IconButton component={Link} to="/">
            <Avatar src="/logo.svg" />
          </IconButton>
        </div>

        <ul className="flex items-center space-x-6 text-lg text-[#545454]">
          <li>
            <Link
              className={location.pathname == "/projects" ?
                "underline underline-offset-[1.5px] decoration-2" :
                `hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-[#545454] before:absolute before:left-0 before:bottom-0`}
              to="/projects"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              className={location.pathname == "/contact" ?
                "underline underline-offset-[1.5px] decoration-2" :
                "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-[#545454] before:absolute before:left-0 before:bottom-0 "}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
export default Navbar;
