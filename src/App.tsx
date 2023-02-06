import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createTheme } from '@mui/material/styles';
import './App.css'
import { ThemeProvider } from '@emotion/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import TerminalIcon from '@mui/icons-material/Terminal';
import { IconButton } from '@mui/material';

function App() {
  // bg-gradient-to-r from-[#0D1B2A] to-[#1B263B]
  return (
    <>
      <div className="min-h-screen" style={{
        backgroundImage: "linear-gradient(90deg, #0D1B2A 0%, #0D1B2A 25%, #1B263B 25%, #1B263B 100%)",
      }}>
        <div className="p-[15%]">
          <div className="grid gap-4 grid-cols-1 text-[#E0E1DD]">
            <div>
              Hey 👋, I'm
            </div>
            <div className="text-4xl">
              Brian!
            </div>
            <div>
              Nice to meet you 🙂 I'm currently a 3rd-year Software Engineering Student at the University of Calgary. <br/> I'll be joining IBM as a Back-End Developer this Summer 2023!
            </div>
            <div>
              <IconButton sx={{ color: "#D3D0CB" }} onClick={() => window.location.href = "https://github.com/brian-ngyn"}>
                <GitHubIcon/>
              </IconButton>
              <IconButton sx={{ color: "#D3D0CB" }} onClick={() => window.location.href = "https://linkedin.com/in/nguyennbrian/"}>
                <LinkedInIcon/>
              </IconButton>
              <IconButton sx={{ color: "#D3D0CB" }} onClick={() => window.location.href = "https://drive.google.com/file/d/1Dz8O-aOeLunV0lyCCh2b7P0-G5LpOUOo/view"}>
                <DescriptionIcon/>
              </IconButton>
              <IconButton sx={{ color: "#D3D0CB" }} onClick={() => window.location.href = "https://terminal.bnguyen.ca/"}>
                <TerminalIcon/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
