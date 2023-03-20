import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
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
              <button
                className="text-[#121212] flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#f7f7f7] px-8 py-4 font-bold shadow-[4px_4px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring"
                onClick={() => window.location.href = 'mailto:brian@bnguyen.ca'}
              >
                <div className="flex flex-row space-x-3">
                  <div>
                    Contact Me
                  </div>
                  <div>
                    <SendIcon />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact;
