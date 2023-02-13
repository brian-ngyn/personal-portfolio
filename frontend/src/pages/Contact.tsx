import React from 'react'
import { Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#545454'
    }
  },
});

function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center pt-[10%] px-3">
          <div className="grid gap-4 grid-cols-1">
            <div className="text-6xl text-[#121212] font-bold">
              Get in Touch.
            </div>
            <div>
              I’m always on the lookout for any new opportunities, as such, my inbox is always open. <br />
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </div>
            <div>
              <ThemeProvider theme={buttonTheme}>
                <Button variant="outlined" size="medium" rel="noopener noreferrer" href={`mailto:brian@bnguyen.ca`} endIcon={<SendIcon />}>
                  <Typography variant="button">
                    Contact me
                  </Typography>
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact;