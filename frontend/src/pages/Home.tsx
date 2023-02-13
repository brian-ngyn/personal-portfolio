import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import TerminalIcon from '@mui/icons-material/Terminal';
import { IconButton } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center pt-[10%] px-3 overflow-hidden">
          <div className="grid gap-4 grid-cols-1">
            <div>
              Hey 👋,
            </div>
            <div className="text-6xl text-[#121212] font-bold">
              I'm Brian Nguyen.
            </div>
            <span className="text-[#00FF00] -mt-3">
              <Typewriter
                words={[`'$_software-engineer'`,
                  `'$_full-stack-developer'`,
                  `'$_embedded-programmer'`,
                  `'$_data-scientist'`,
                  `'$_curious'`,
                  `'$_driven'`,
                  `'$_passionate'`].sort((a, b) => 0.5 - Math.random())}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={45}
                delaySpeed={750}
              />
            </span>
            <div>
              Nice to meet you 🙂 I'm currently a 3rd-year Software Engineering Student at the University of Calgary. <br /> I'll be joining IBM as a Back-End Developer this Summer 2023!
            </div>
            <div>
              <IconButton sx={{ color: "#545454" }} onClick={() => window.location.href = "https://github.com/brian-ngyn"}>
                <GitHubIcon />
              </IconButton>
              <IconButton sx={{ color: "#545454" }} onClick={() => window.location.href = "https://linkedin.com/in/nguyennbrian/"}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "#545454" }} onClick={() => window.location.href = "https://drive.google.com/file/d/1Dz8O-aOeLunV0lyCCh2b7P0-G5LpOUOo/view"}>
                <DescriptionIcon />
              </IconButton>
              <IconButton sx={{ color: "#545454" }} onClick={() => window.location.href = "https://terminal.bnguyen.ca/"}>
                <TerminalIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home;