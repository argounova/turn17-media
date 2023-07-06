import * as React from 'react'
import { ContactStyles } from './style'
import { 
    Button,
    TextField 
} from '@mui/material'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [userName, setUserName] = React.useState('')
    const [userEmail, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [showSuccess, setShowSuccess] = React.useState(false)
    const [showFail, setShowFail] = React.useState(false)
    const templateParams = {
        user_name: userName,
        user_email: userEmail,
        message: message
    }

    const handleSendMessage = () => {
        emailjs.send('service_l8xkawv', 'turn17media_contact', templateParams, 'd-nj0U9pmkBW1-kef')
        .then(function(response) {
            console.log('Message sent!', response.status, response.text);
            setShowSuccess(true)
         }, function(error) {
            console.log('FAILED...', error);
            setShowFail(true)
         });
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
        { !showSuccess && !showFail && (
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
        { showSuccess && (
            <div className='contact-form'>
                <h2>Thank you for contacting us.</h2>
                <h4>We will get back to you within 2 business days!</h4>
            </div>
        )}
        { showFail && (
            <div className='contact-form'>
                <h2>Something went wrong...</h2>
                <h4>Please email us at info@turn17media.com</h4>
            </div>
        )}
        <div className='contact-container'>
            <p style={{ color: 'var(--char0)' }}>
                We specialize in automotive and motorsports related businesses and clients.  From a simple car club to a premier detail shop, we have you covered. 
            </p>
            <br />
            <p style={{ color: 'var(--char0)' }}>
                Is your company auto adjacent or even unrelated entirely?  We do that, too!  Past clients include a music production company and custom jewler to name a few.
            </p>
            <br />
            <p style={{ color: 'var(--char0)' }}>
                Don&#39;t hesitate to reach out with any questions.  We are happy to help.  
            </p>
        </div>     
    </ContactStyles>
  );
}