import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContactStyles } from './style'
import { 
    Button,
    TextField 
} from '@mui/material'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [userName, setUserName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showContactForm, setShowContactForm] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFail, setShowFail] = useState(false)
  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    message: message
  }

  const handleSendMessage = () => {
    setShowContactForm(false)
    setShowLoading(true)
    emailjs.send('service_l8xkawv', 'turn17media_contact', templateParams, 'd-nj0U9pmkBW1-kef')
    .then(function(response) {
        console.log(response)
        setShowLoading(false)
        setShowSuccess(true)
      }, function(error) {
        console.log(error)
        setShowFail(true)
      })
  }

  return (
    <ContactStyles>
        <div className='contact-container'>
            <p style={{ fontSize: 'var(--h1)', color: 'var(--char0)' }}>
                Contact  
            </p>
            <br />
            <Image src="/turn17-logo-main.png" alt="Turn 17 Media Logo" width={250} height={250} />
        </div>
        { showContactForm && (
            <div className='contact-form'>
                <TextField
                    fullWidth
                    required
                    id="name"
                    label="Name"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    type="email"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    fullWidth
                    required
                    id="message"
                    label="Message"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    minRows={5}
                    sx={{ m: 1 }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ m: 1 }}
                    style={{ backgroundColor: 'var(--mb1-1)' }}
                    onClick={handleSendMessage}
                >Send</Button>   
            </div>
        )}
        { showLoading && (
          <div className='contact-form' style={{ justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'audiowide' }}>SENDING...</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
              <motion.g>
                <motion.circle
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  }}
                  cx="175"
                  cy="175"
                  r="100"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                </motion.circle>
              </motion.g>
            </svg>
          </div>
        )}
        { showSuccess && (
            <div className='contact-form' style={{ justifyContent: 'center' }}>
                <h2>Thank you for contacting us.</h2>
                <h4>We will get back to you within 2 business days!</h4>
            </div>
        )}
        { showFail && (
            <div className='contact-form' style={{ justifyContent: 'center' }}>
                <h2>Something went wrong...</h2>
                <h4>Please email us at info@turn17media.com</h4>
            </div>
        )}
        <div className='contact-container'>
            <p style={{ color: 'var(--char0)' }}>
                We specialize in automotive and motorsports related businesses and clients, however, we welcome all inquiries. 
            </p>
            <br />
            <p style={{ color: 'var(--char0)' }}>
                Past clients include a music production company and custom jewler to name a few.
            </p>
            <br />
            <p style={{ color: 'var(--char0)' }}>
              Don&#39;t hesitate to reach out with any questions.  We are happy to help.  
            </p>
        </div>     
    </ContactStyles>
  );
}